// Datos de ejemplo de la demo interactiva (grupo ficticio "Norvia").
// Deterministas: misma entrada → mismas cifras, para que el SSR y el cliente coincidan.

export const companies = [
  { id: "HOLD", name: "Norvia Holding S.A.", ccy: "EUR", avg: 1 },
  { id: "UK", name: "Norvia UK Ltd", ccy: "GBP", avg: 1.163 },
  { id: "US", name: "Norvia Inc.", ccy: "USD", avg: 0.917 },
];


const leaf = (code, es, en, sign, locals) => ({
  code, es, en, sign,
  children: locals.map(([c, e, n]) => ({ code: c, es: e, en: n, sign })),
});

const EXTRA = {"A.01": {"pt": "Vendas de produto", "da": "Produktsalg"}, "A.02": {"pt": "Prestação de serviços", "da": "Ydelser"}, "B.01": {"pt": "Matérias-primas", "da": "Råvarer"}, "B.02": {"pt": "Subcontratos", "da": "Underleverandører"}, "C.01": {"pt": "Gastos com pessoal", "da": "Personaleomkostninger"}, "C.02": {"pt": "Serviços externos", "da": "Eksterne ydelser"}, "C.03": {"pt": "Amortizações", "da": "Afskrivninger"}};

export const tree = [
  { code: "A", es: "Ingresos", en: "Revenue", sign: 1, children: [
    leaf("A.01", "Ventas de producto", "Product sales", 1, [["700000", "Ventas nacionales", "Domestic sales"], ["700100", "Ventas UE", "EU sales"]]),
    leaf("A.02", "Prestación de servicios", "Services", 1, [["705000", "Servicios a terceros", "Third-party services"], ["705900", "Servicios intragrupo", "Intercompany services"]]),
  ]},
  { code: "B", es: "Coste de ventas", en: "Cost of sales", sign: -1, children: [
    leaf("B.01", "Materias primas", "Raw materials", -1, [["601000", "Compras de materias primas", "Raw material purchases"], ["611000", "Variación de existencias", "Change in inventory"]]),
    leaf("B.02", "Subcontratas", "Subcontracting", -1, [["607000", "Trabajos de terceros", "Third-party work"], ["607900", "Trabajos intragrupo", "Intercompany work"]]),
  ]},
  { code: "GM", es: "Margen bruto", en: "Gross margin", sign: 1, calc: ["A", "B"] },
  { code: "C", es: "Gastos operativos", en: "Operating expenses", sign: -1, children: [
    leaf("C.01", "Gastos de personal", "Staff costs", -1, [["640000", "Sueldos y salarios", "Wages and salaries"], ["642000", "Seguridad social", "Social security"]]),
    leaf("C.02", "Servicios exteriores", "External services", -1, [["621000", "Arrendamientos", "Rent"], ["629000", "Otros servicios", "Other services"]]),
    leaf("C.03", "Amortización", "Depreciation", -1, [["681000", "Amortización inmovilizado material", "PP&E depreciation"], ["680000", "Amortización intangible", "Intangible amortisation"]]),
  ]},
  { code: "EBIT", es: "Resultado de explotación", en: "Operating result (EBIT)", sign: 1, calc: ["GM", "C"] },
];

tree.forEach((t) => (t.children || []).forEach((n) => Object.assign(n, EXTRA[n.code] || {})));

const base = {
  "700000": 1_850_000, "700100": 940_000, "705000": 620_000, "705900": 180_000,
  "601000": 980_000, "611000": 60_000, "607000": 310_000, "607900": 180_000,
  "640000": 690_000, "642000": 210_000, "621000": 120_000, "629000": 145_000,
  "681000": 88_000, "680000": 34_000,
};
const scale = { HOLD: 1, UK: 0.46, US: 0.71 };
const monthF = [1, 1.043, 1.118];

function noise(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  return ((h >>> 0) % 1000) / 1000; // 0..1
}

/** Importe de una cuenta local, moneda local, para meses seleccionados (0..2) y año (0 actual, 1 anterior) */
export function localAmount(acc, co, months, prior = false) {
  const b = base[acc] ?? 0;
  return months.reduce((s, m) => {
    const n = 0.88 + noise(acc + co + m + (prior ? "p" : "")) * 0.24;
    const py = prior ? 0.86 + noise(acc + co) * 0.12 : 1;
    return s + Math.round(b * scale[co] * monthF[m] * n * py);
  }, 0);
}

const isIC = (acc) => acc.endsWith("900");

/** Ajustes SYS/AJE/RJE de ejemplo sobre una cuenta local (pequeños, deterministas) */
export function journal(acc, co, months, prior = false) {
  return Math.round(localAmount(acc, co, months, prior) * (noise(acc + co + "j") * 0.02 - 0.008));
}

/** Valor de un nodo (con signo) para una sociedad o el grupo ("GROUP" = consolidado en EUR con eliminaciones) */
export function nodeValue(node, who, months, prior = false) {
  if (node.calc) {
    const parts = node.calc.map((c) => tree.find((t) => t.code === c));
    return parts.reduce((s, p) => s + nodeValue(p, who, months, prior), 0);
  }
  if (node.children) return node.children.reduce((s, ch) => s + nodeValue(ch, who, months, prior), 0);
  if (who === "GROUP") {
    // consolidado: carga + asientos, convertido a EUR; lo intragrupo se elimina (EJE)
    if (isIC(node.code)) return 0;
    return companies.reduce((s, co) => s + Math.round((localAmount(node.code, co.id, months, prior) + journal(node.code, co.id, months, prior)) * co.avg) * node.sign, 0);
  }
  return (localAmount(node.code, who, months, prior) + journal(node.code, who, months, prior)) * node.sign;
}

/** Desglose tipo "data trail" de una cuenta de nivel 2 en el consolidado */
export function trail(node, months) {
  const leaves = node.children ?? [node];
  const rows = companies.map((co) => {
    const upload = leaves.reduce((s, l) => s + localAmount(l.code, co.id, months) * node.sign, 0);
    const journals = leaves.reduce((s, l) => s + journal(l.code, co.id, months) * node.sign, 0);
    const local = upload + journals;
    const eur = Math.round(local * co.avg);
    return { co, upload, journals, local, eur };
  });
  const ic = leaves.filter((l) => isIC(l.code));
  const elim = -ic.reduce((s, l) => s + companies.reduce((a, co) => a + Math.round((localAmount(l.code, co.id, months) + journal(l.code, co.id, months)) * co.avg) * node.sign, 0), 0);
  const total = nodeValue(node, "GROUP", months);
  const rounding = total - (rows.reduce((s, r) => s + r.eur, 0) + elim);
  return { rows, elim, rounding, total };
}

export const dims = { es: ["Comercial", "Operaciones", "Estructura"], en: ["Sales", "Operations", "Overheads"] };
export function dimSplit(code){
  const a = 0.25 + noise(code + "d1") * 0.35;
  const b = 0.2 + noise(code + "d2") * 0.3;
  return [a, b, Math.max(0, 1 - a - b)];
}


