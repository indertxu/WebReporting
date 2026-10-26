import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Columns3, Gauge, Grid3X3, Banknote, GitBranch, Shuffle, Presentation, BookOpenCheck, Check, Download, ChevronDown, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useLanding, Hl, LOCALES } from "@/components/report/shared";
import { useReveal, useTick, reduced } from "./hooks";
import { BrandMark } from "./Logo";
import { STEPS, pad, goDemo } from "./Portal";

/* ─────────────────────────────────────────────────────────────────────────────
   EL TOUR DEL PRODUCTO
   Un panel grande del portal, fijo en pantalla mientras bajas. Cada tramo de scroll
   cambia de pantalla; todas están dibujadas aquí (no son capturas), con datos de un
   grupo de ejemplo, y se animan al entrar. El texto va en una tarjeta en la esquina.
   ───────────────────────────────────────────────────────────────────────────── */

const L = {
  es: { group: "Grupo Norvia", rev: "Ingresos", ebitda: "EBITDA", ebit: "EBIT", net: "Resultado neto", rank: "Aportación por sociedad", evo: "Ingresos · 12 meses", actual: "Real", prevM: "Mes ant.", prevY: "Año ant.", budget: "Ppto.", vsB: "vs ppto.",
    liq: "Liquidez", solv: "Solvencia", roe: "ROE", margin: "Margen EBITDA", dso: "Días de cobro", lev: "Deuda / EBITDA", ok: "En rango", watch: "Vigilar",
    dims: ["Comercial", "Operaciones", "Estructura", "I+D", "Marketing"], acc: ["Ventas", "Servicios", "Personal", "Suministros", "Alquileres", "Publicidad"],
    cf: ["Resultado", "Amortización", "Circulante", "Inversiones", "Financiación", "Caja final"], cons: "Consolidado", elim: "Eliminación intragrupo", entry: "Asiento", date: "Fecha", concept: "Concepto", cp: "Contraparte",
    local: "Plan local", gplan: "Plan de grupo", mapped: "cuentas mapeadas", export: "Exportar .pptx", slides: "Presentación del consejo", slideT: "Resultados del grupo",
    opening: "Inicial", adds: "Altas", disp: "Bajas", amort: "Amort.", closing: "Final", fits: "Cuadra con el balance", assets: ["Terrenos", "Construcciones", "Maquinaria", "Equipos informáticos"], total: "Total",
    sample: "Datos de ejemplo", prev: "Pantalla anterior", next: "Pantalla siguiente", cta: "Pide tu demo" },
  en: { group: "Norvia Group", rev: "Revenue", ebitda: "EBITDA", ebit: "EBIT", net: "Net result", rank: "Contribution by company", evo: "Revenue · 12 months", actual: "Actual", prevM: "Prev. m.", prevY: "Prev. y.", budget: "Budget", vsB: "vs budget",
    liq: "Liquidity", solv: "Solvency", roe: "ROE", margin: "EBITDA margin", dso: "Days sales out.", lev: "Debt / EBITDA", ok: "In range", watch: "Watch",
    dims: ["Sales", "Operations", "Overheads", "R&D", "Marketing"], acc: ["Sales", "Services", "Payroll", "Supplies", "Rent", "Advertising"],
    cf: ["Result", "Depreciation", "Working cap.", "Capex", "Financing", "Closing cash"], cons: "Consolidated", elim: "Intercompany elimination", entry: "Entry", date: "Date", concept: "Description", cp: "Counterparty",
    local: "Local chart", gplan: "Group chart", mapped: "accounts mapped", export: "Export .pptx", slides: "Board pack", slideT: "Group results",
    opening: "Opening", adds: "Additions", disp: "Disposals", amort: "Depr.", closing: "Closing", fits: "Matches the balance sheet", assets: ["Land", "Buildings", "Machinery", "IT equipment"], total: "Total",
    sample: "Sample data", prev: "Previous screen", next: "Next screen", cta: "Book a demo" },
  pt: { group: "Grupo Norvia", rev: "Receitas", ebitda: "EBITDA", ebit: "EBIT", net: "Resultado líquido", rank: "Contributo por sociedade", evo: "Receitas · 12 meses", actual: "Real", prevM: "Mês ant.", prevY: "Ano ant.", budget: "Orç.", vsB: "vs orç.",
    liq: "Liquidez", solv: "Solvência", roe: "ROE", margin: "Margem EBITDA", dso: "Prazo de recebimento", lev: "Dívida / EBITDA", ok: "No intervalo", watch: "Vigiar",
    dims: ["Comercial", "Operações", "Estrutura", "I&D", "Marketing"], acc: ["Vendas", "Serviços", "Pessoal", "Fornecimentos", "Rendas", "Publicidade"],
    cf: ["Resultado", "Amortização", "Fundo maneio", "Investimento", "Financiamento", "Caixa final"], cons: "Consolidado", elim: "Eliminação intragrupo", entry: "Lançamento", date: "Data", concept: "Descrição", cp: "Contraparte",
    local: "Plano local", gplan: "Plano do grupo", mapped: "contas mapeadas", export: "Exportar .pptx", slides: "Apresentação à administração", slideT: "Resultados do grupo",
    opening: "Inicial", adds: "Aumentos", disp: "Abates", amort: "Amort.", closing: "Final", fits: "Bate com o balanço", assets: ["Terrenos", "Edifícios", "Maquinaria", "Equip. informático"], total: "Total",
    sample: "Dados de exemplo", prev: "Ecrã anterior", next: "Ecrã seguinte", cta: "Peça a sua demo" },
  da: { group: "Norvia-koncernen", rev: "Omsætning", ebitda: "EBITDA", ebit: "EBIT", net: "Nettoresultat", rank: "Bidrag pr. selskab", evo: "Omsætning · 12 mdr.", actual: "Faktisk", prevM: "Forr. md.", prevY: "Forr. år", budget: "Budget", vsB: "vs budget",
    liq: "Likviditet", solv: "Soliditet", roe: "ROE", margin: "EBITDA-margin", dso: "Kreditdage", lev: "Gæld / EBITDA", ok: "I niveau", watch: "Hold øje",
    dims: ["Salg", "Drift", "Administration", "Udvikling", "Marketing"], acc: ["Salg", "Services", "Løn", "Forbrug", "Husleje", "Reklame"],
    cf: ["Resultat", "Afskrivning", "Driftskapital", "Investering", "Finansiering", "Likvid beh."], cons: "Konsolideret", elim: "Koncernintern eliminering", entry: "Postering", date: "Dato", concept: "Tekst", cp: "Modpart",
    local: "Lokal kontoplan", gplan: "Koncernkontoplan", mapped: "konti mappet", export: "Eksportér .pptx", slides: "Bestyrelsespakke", slideT: "Koncernens resultat",
    opening: "Primo", adds: "Tilgang", disp: "Afgang", amort: "Afskr.", closing: "Ultimo", fits: "Stemmer med balancen", assets: ["Grunde", "Bygninger", "Maskiner", "IT-udstyr"], total: "I alt",
    sample: "Eksempeldata", prev: "Forrige skærm", next: "Næste skærm", cta: "Book en demo" },
};
const ICONS = { home: LayoutDashboard, compare: Columns3, kpis: Gauge, dimensions: Grid3X3, cashflow: Banknote, trail: GitBranch, mapper: Shuffle, decks: Presentation, memory: BookOpenCheck };
const COS = ["Norvia Iberia", "Norvia UK", "Norvia Inc.", "Norvia DK", "Norvia Holding"];
const EASE = [0.16, 1, 0.3, 1];
const inn = (i, d = 0.06, y = 14) => ({ initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.12 + i * d, duration: 0.55, ease: EASE } });

function useFmt(lang) {
  return useMemo(() => {
    const loc = LOCALES[lang] || "es-ES";
    const cmp = new Intl.NumberFormat(loc, { notation: "compact", maximumFractionDigits: 1 });
    const n0 = new Intl.NumberFormat(loc, { maximumFractionDigits: 0, useGrouping: "always" });
    const n1 = new Intl.NumberFormat(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    const n2 = new Intl.NumberFormat(loc, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const mon = (i) => new Intl.DateTimeFormat(loc, { month: "short" }).format(new Date(2025, i, 1)).replace(".", "");
    return { c: (v) => cmp.format(v) + " €", n0: (v) => n0.format(v), n1: (v) => n1.format(v), n2: (v) => n2.format(v), mon };
  }, [lang]);
}

function linePath(data, w, h, pad = 6, min = Math.min(...data), max = Math.max(...data)) {
  const x = (i) => pad + (i * (w - pad * 2)) / (data.length - 1);
  const y = (v) => h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2);
  let d = `M${x(0)},${y(data[0])}`;
  for (let i = 1; i < data.length; i++) { const cx = (x(i - 1) + x(i)) / 2; d += ` C${cx},${y(data[i - 1])} ${cx},${y(data[i])} ${x(i)},${y(data[i])}`; }
  return { d, area: `${d} L${x(data.length - 1)},${h} L${x(0)},${h} Z`, x, y };
}
const Draw = ({ d, delay = 0.3, dur = 1.4, ...p }) => (
  <motion.path d={d} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay, duration: dur, ease: "easeInOut" }} {...p} />
);
const FmtCtx = createContext(null);
const Chip = ({ v, inv }) => {
  const f = useContext(FmtCtx);
  const up = inv ? v < 0 : v >= 0;
  return <span className={`tr-chip ${up ? "up" : "dn"}`}>{v >= 0 ? "▲" : "▼"} {f ? f.n1(Math.abs(v)) : Math.abs(v).toFixed(1)} %</span>;
};

/* ═════ 1 · Inicio: el mes del grupo ═════ */
function SHome({ t, f }) {
  const rev = [4.8, 5.1, 5.4, 5.2, 5.7, 5.9, 5.5, 5.1, 6.0, 6.3, 6.5, 6.9];
  const pri = [4.5, 4.7, 5.0, 4.9, 5.2, 5.4, 5.1, 4.7, 5.5, 5.7, 5.8, 6.1];
  const a = linePath(rev, 600, 190, 8, 4.2, 7.2), b = linePath(pri, 600, 190, 8, 4.2, 7.2);
  const kpis = [[t.rev, 67943736, 8.6, [3, 4, 3.6, 5, 4.8, 6, 5.6, 6.8, 7.2, 7, 8.1, 8.6]], [t.ebitda, 12746995, 13.0, [2, 2.4, 2.2, 3, 3.6, 3.3, 4.2, 4.6, 4.4, 5.2, 5.8, 6.2]],
    [t.ebit, 8912440, 9.4, [2, 2.2, 2.6, 2.4, 3, 3.1, 3.4, 3.2, 3.9, 4.1, 4.4, 4.9]], [t.net, 6104380, -2.1, [5, 4.6, 4.9, 4.4, 4.6, 4.1, 4.3, 3.9, 4.2, 3.8, 3.9, 3.7]]];
  const rank = [[COS[0], 0.38], [COS[1], 0.27], [COS[2], 0.19], [COS[3], 0.11], [COS[4], 0.05]];
  return (
    <div className="tr-home">
      <div className="tr-kpis">
        {kpis.map(([l, v, d, s], i) => {
          const p = linePath(s, 120, 34, 2);
          return (
            <motion.div key={l} className="tr-tile" {...inn(i)}>
              <span className="tr-lbl">{l}</span>
              <b className="tr-big">{f.c(v)}</b>
              <Chip v={d} />
              <svg viewBox="0 0 120 34" preserveAspectRatio="none"><Draw d={p.d} stroke={d >= 0 ? "#6ee7b7" : "#fbbf24"} strokeWidth="2" delay={0.4 + i * 0.08} /></svg>
            </motion.div>
          );
        })}
      </div>
      <div className="tr-row">
        <motion.div className="tr-box grow" {...inn(4)}>
          <div className="tr-boxh"><b>{t.evo}</b><span><i className="lg a" />2025 <i className="lg b" />2024</span></div>
          <svg viewBox="0 0 600 190" preserveAspectRatio="none" className="tr-chart">
            <defs><linearGradient id="trA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#34d399" stopOpacity=".35" /><stop offset="1" stopColor="#34d399" stopOpacity="0" /></linearGradient></defs>
            {[.25, .5, .75].map((k) => <line key={k} x1="0" x2="600" y1={190 * k} y2={190 * k} stroke="rgba(255,255,255,.06)" />)}
            <motion.path d={a.area} fill="url(#trA)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: .8 }} />
            <Draw d={b.d} stroke="rgba(255,255,255,.3)" strokeWidth="1.6" strokeDasharray="4 5" delay={.5} />
            <Draw d={a.d} stroke="#6ee7b7" strokeWidth="2.6" delay={.6} dur={1.6} />
            <motion.circle cx={a.x(11)} cy={a.y(6.9)} r="5" fill="#ecfdf5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.1 }} />
          </svg>
          <div className="tr-months">{rev.map((_, i) => <span key={i}>{f.mon(i)}</span>)}</div>
        </motion.div>
        <motion.div className="tr-box side" {...inn(5)}>
          <div className="tr-boxh"><b>{t.rank}</b></div>
          {rank.map(([n, p], i) => (
            <div key={n} className="tr-rank">
              <span>{n}</span><span className="mono">{Math.round(p * 100)} %</span>
              <i><motion.em initial={{ width: 0 }} animate={{ width: `${p * 100 / 0.38}%` }} transition={{ delay: .6 + i * .1, duration: .9, ease: EASE }} /></i>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ═════ 2 · Comparación: cuatro períodos ═════ */
function SCompare({ t, f }) {
  const rows = [[t.acc[0], 6737922, 6402110, 6268300, 6550000], [t.acc[1], 1542697, 1511020, 1405100, 1600000], [t.acc[2], -2323014, -2290100, -1994500, -2250000],
    [t.acc[3], -651930, -640200, -631700, -700000], [t.acc[4], -290973, -290973, -285400, -300000], [t.acc[5], -412880, -380100, -351200, -380000]];
  const cols = [t.actual, t.prevM, t.prevY, t.budget];
  const hot = useTick(4, 1300, true);
  return (
    <div className="tr-cmp">
      <motion.div className="tr-box" {...inn(0)}>
        <div className="tr-table">
          <div className="tr-tr head"><span />{cols.map((c, j) => <span key={c} className={j === hot ? "hot" : ""}>{c}</span>)}<span>{t.vsB}</span></div>
          {rows.map((r, i) => (
            <motion.div key={r[0]} className="tr-tr" {...inn(i + 1, 0.07, 8)}>
              <span className="nm">{r[0]}</span>
              {r.slice(1).map((v, j) => <span key={j} className={`mono ${j === hot ? "hot" : ""} ${v < 0 ? "neg" : ""}`}>{f.n0(v)}</span>)}
              <span><Chip v={((r[1] - r[4]) / Math.abs(r[4])) * 100} inv={r[1] < 0} /></span>
            </motion.div>
          ))}
          <motion.div className="tr-tr tot" {...inn(8)}>
            <span className="nm">{t.ebitda}</span>
            {[1, 2, 3, 4].map((j) => <span key={j} className={`mono ${j - 1 === hot ? "hot" : ""}`}>{f.n0(rows.reduce((s, r) => s + r[j], 0))}</span>)}
            <span><Chip v={6.2} /></span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ═════ 3 · KPIs: ratios con semáforo ═════ */
function SKpis({ t, f }) {
  const g = [[t.liq, 1.84, 0.61, "ok", f.n2(1.84)], [t.solv, 2.31, 0.77, "ok", f.n2(2.31)], [t.roe, 14.2, 0.71, "ok", `${f.n1(14.2)} %`],
    [t.margin, 18.8, 0.63, "ok", `${f.n1(18.8)} %`], [t.dso, 52, 0.52, "watch", `${f.n0(52)} d`], [t.lev, 2.34, 0.47, "watch", `${f.n2(2.34)}×`]];
  const C = 2 * Math.PI * 40;
  return (
    <div className="tr-gauges">
      {g.map(([l, , frac, st, txt], i) => (
        <motion.div key={l} className="tr-box tr-gauge" {...inn(i, 0.07)}>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="9" />
            <motion.circle cx="50" cy="50" r="40" fill="none" stroke={st === "ok" ? "#6ee7b7" : "#fbbf24"} strokeWidth="9" strokeLinecap="round" strokeDasharray={C}
              transform="rotate(-90 50 50)" initial={{ strokeDashoffset: C }} animate={{ strokeDashoffset: C * (1 - frac) }} transition={{ delay: .35 + i * .08, duration: 1.3, ease: EASE }} />
          </svg>
          <b className="tr-big">{txt}</b>
          <span className="tr-lbl">{l}</span>
          <span className={`tr-st ${st}`}>{st === "ok" ? t.ok : t.watch}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ═════ 4 · Dimensiones: mapa de calor ═════ */
function SDims({ t }) {
  const v = [[.9, .2, .1, .05, .3], [.4, .7, .1, .2, .1], [.5, .8, .6, .7, .3], [.1, .6, .3, .2, .1], [.2, .3, .7, .1, .2], [.3, .05, .1, .05, .95]];
  return (
    <div className="tr-dims">
      <motion.div className="tr-box" {...inn(0)}>
        <div className="tr-heat" style={{ gridTemplateColumns: `minmax(90px, 1.2fr) repeat(${t.dims.length}, minmax(0, 1fr))` }}>
          <span />{t.dims.map((d) => <span key={d} className="hd">{d}</span>)}
          {t.acc.map((a, i) => (
            <React.Fragment key={a}>
              <span className="nm">{a}</span>
              {v[i].map((x, j) => (
                <motion.i key={j} style={{ background: `rgba(110, 231, 183, ${0.08 + x * 0.82})` }} initial={{ opacity: 0, scale: .6 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: .25 + (i + j) * 0.045, duration: .45, ease: EASE }}><em>{Math.round(x * 100)}</em></motion.i>
              ))}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ═════ 5 · Flujo de caja: cascada ═════ */
function SCash({ t, f }) {
  const steps = [8.91, 3.83, -1.92, -4.1, -2.35];
  let acc = 0;
  const bars = steps.map((v) => { const from = acc; acc += v; return [from, acc, v]; });
  bars.push([0, acc, acc]);
  const max = 13, H = 220;
  const y = (v) => H - (v / max) * H;
  return (
    <div className="tr-cash">
      <motion.div className="tr-box" {...inn(0)}>
        <div className="tr-boxh"><b>{t.cf[5]}</b><span className="mono">{f.c(acc * 1e6)}</span></div>
        <div className="tr-fall">
          {bars.map(([a, b, v], i) => {
            const top = y(Math.max(a, b)), h = Math.abs(y(a) - y(b));
            const last = i === bars.length - 1;
            return (
              <div key={i} className="col">
                <div className="plot">
                  <motion.i className={last ? "end" : v >= 0 ? "pos" : "neg"} style={{ top, height: Math.max(h, 2) }}
                    initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }} transition={{ delay: .3 + i * .16, duration: .6, ease: EASE }} />
                  <motion.b style={{ top: top - 20 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 + i * .16 }}>{v >= 0 && !last ? "+" : ""}{f.n1(v)}</motion.b>
                </div>
                <span>{t.cf[i]}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

/* ═════ 6 · Rastro del dato: del consolidado al asiento ═════ */
function STrail({ t, f }) {
  const step = useTick(5, 900, true);
  const col = (k) => (step >= k ? "on" : "");
  return (
    <div className="tr-trail">
      <motion.div className={`tr-node big ${col(0)}`} {...inn(0)}><span className="tr-lbl">{t.cons} · {t.rev}</span><b className="tr-big">{f.c(67943736)}</b></motion.div>
      <i className={`tr-wire ${col(1)}`} />
      <div className="tr-stack">
        {[[COS[0], 25818620], [COS[1], 18344809], [COS[2], 12909310]].map(([n, v], i) => (
          <motion.div key={n} className={`tr-node ${i === 1 ? col(1) : ""}`} {...inn(1 + i)}><span>{n}</span><b className="mono">{f.c(v)}</b></motion.div>
        ))}
        <motion.div className="tr-node elim" {...inn(4)}><span>{t.elim}</span><b className="mono">−{f.c(1240000)}</b></motion.div>
      </div>
      <i className={`tr-wire ${col(2)}`} />
      <div className="tr-stack">
        <motion.div className={`tr-node ${col(2)}`} {...inn(5)}><span className="mono">705000 · {t.acc[1]}</span><b className="mono">{f.c(4210400)}</b></motion.div>
        <motion.div className="tr-node dim" {...inn(6)}><span className="mono">700000 · {t.acc[0]}</span><b className="mono">{f.c(14134409)}</b></motion.div>
      </div>
      <i className={`tr-wire ${col(3)}`} />
      <motion.div className={`tr-node entry ${col(3)}`} {...inn(7)}>
        <span className="tr-lbl">{t.entry} 2025/1184</span>
        <dl>
          <dt>{t.date}</dt><dd className="mono">12/12/2025</dd>
          <dt>{t.concept}</dt><dd>Servicios Norvia SA</dd>
          <dt>{t.cp}</dt><dd>Norvia Iberia</dd>
          <dt>{t.dims[1]}</dt><dd>OPS</dd>
        </dl>
        <b className="mono">{f.c(6200)}</b>
      </motion.div>
    </div>
  );
}

/* ═════ 7 · Mapeo: plan local → plan de grupo ═════ */
function SMapper({ t }) {
  const loc = [["700000", t.acc[0]], ["705000", t.acc[1]], ["640000", t.acc[2]], ["628000", t.acc[3]], ["621000", t.acc[4]], ["627000", t.acc[5]]];
  const grp = [["A.01", t.acc[0]], ["A.02", t.acc[1]], ["C.01", t.acc[2]], ["C.02", t.dims[2]]];
  const map = [0, 1, 2, 3, 3, 3];
  const W = 640, H = 300, ly = (i) => 26 + i * 47, gy = (j) => 40 + j * 72;
  return (
    <div className="tr-map">
      <motion.div className="tr-box" {...inn(0)}>
        <div className="tr-boxh"><b>{t.local} → {t.gplan}</b><span className="mono tr-ok"><Check size={12} strokeWidth={3} /> 214 {t.mapped}</span></div>
        <svg viewBox={`0 0 ${W} ${H}`} className="tr-mapsvg">
          {map.map((j, i) => (
            <Draw key={i} d={`M232,${ly(i)} C330,${ly(i)} 330,${gy(j)} 418,${gy(j)}`} stroke="#6ee7b7" strokeOpacity=".55" strokeWidth="1.8" delay={.5 + i * .12} dur={.8} />
          ))}
          {loc.map(([c, n], i) => (
            <motion.g key={c} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 + i * .06 }}>
              <rect x="8" y={ly(i) - 17} width="224" height="34" rx="9" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.12)" />
              <text x="22" y={ly(i) + 5} className="tr-svgmono">{c}</text><text x="90" y={ly(i) + 5} className="tr-svgtx">{n}</text>
              <circle cx="232" cy={ly(i)} r="3.5" fill="#6ee7b7" />
            </motion.g>
          ))}
          {grp.map(([c, n], j) => (
            <motion.g key={c} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .3 + j * .08 }}>
              <rect x="418" y={gy(j) - 20} width="214" height="40" rx="10" fill="rgba(110,231,183,.12)" stroke="rgba(110,231,183,.45)" />
              <circle cx="418" cy={gy(j)} r="4" fill="#6ee7b7" />
              <text x="434" y={gy(j) + 5} className="tr-svgmono hi">{c}</text><text x="484" y={gy(j) + 5} className="tr-svgtx hi">{n}</text>
            </motion.g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

/* ═════ 8 · Presentaciones: cambia el período y todo se mueve ═════ */
function SDecks({ t, f }) {
  const k = useTick(3, 2200, true);
  const sets = [[62, 78, 70, 88, 94, 100], [55, 70, 74, 80, 86, 92], [48, 60, 66, 72, 80, 84]];
  const months = [11, 10, 9];
  return (
    <div className="tr-decks">
      <div className="tr-thumbs">
        {[0, 1, 2, 3].map((i) => (
          <motion.div key={i} className={`tr-thumb ${i === 1 ? "on" : ""}`} {...inn(i, 0.06, 8)}><i /><i /><i /></motion.div>
        ))}
      </div>
      <motion.div className="tr-box tr-slide" {...inn(2)}>
        <div className="tr-slidebar">
          <span className="tr-sel">{f.mon(months[k])} 2025 <ChevronDown size={12} /></span>
          <span className="tr-exp"><Download size={12} /> {t.export}</span>
        </div>
        <div className="tr-slidebody">
          <span className="tr-lbl">{t.slides}</span>
          <AnimatePresence mode="wait"><motion.h4 key={k} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>{t.slideT} · {f.mon(months[k])} 2025</motion.h4></AnimatePresence>
          <div className="tr-bars">
            {sets[k].map((h, i) => <motion.i key={i} animate={{ height: `${h}%` }} initial={{ height: 0 }} transition={{ duration: .7, ease: EASE, delay: i * .04 }} />)}
          </div>
          <div className="tr-minis">
            {[[t.rev, 8.6 - k], [t.ebitda, 13 - k * 1.4], [t.net, -2.1 + k]].map(([l, v]) => <span key={l}><em>{l}</em><Chip v={v} /></span>)}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ═════ 9 · Memoria: cuadros de movimientos que cuadran solos ═════ */
function SMemory({ t, f }) {
  const rows = [[1200, 0, 0, 0], [8400, 620, -110, -410], [5320, 1180, -240, -890], [940, 380, -60, -310]];
  const tot = [0, 1, 2, 3].map((j) => rows.reduce((s, r) => s + r[j], 0));
  const close = (r) => r.reduce((s, x) => s + x, 0);
  return (
    <div className="tr-memo">
      <motion.div className="tr-box" {...inn(0)}>
        <div className="tr-table memo">
          <div className="tr-tr head"><span />{[t.opening, t.adds, t.disp, t.amort, t.closing].map((c) => <span key={c}>{c}</span>)}</div>
          {rows.map((r, i) => (
            <motion.div key={i} className="tr-tr" {...inn(i + 1, 0.08, 8)}>
              <span className="nm">{t.assets[i]}</span>
              {r.map((v, j) => <span key={j} className={`mono ${v < 0 ? "neg" : ""}`}>{v ? f.n0(v) : "—"}</span>)}
              <span className="mono hot">{f.n0(close(r))}</span>
            </motion.div>
          ))}
          <motion.div className="tr-tr tot" {...inn(6)}>
            <span className="nm">{t.total}</span>{tot.map((v, j) => <span key={j} className="mono">{f.n0(v)}</span>)}<span className="mono hot">{f.n0(tot.reduce((s, x) => s + x, 0))}</span>
          </motion.div>
        </div>
        <motion.div className="tr-fits" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, type: "spring", stiffness: 300, damping: 18 }}>
          <Check size={14} strokeWidth={3} /> {t.fits}
        </motion.div>
      </motion.div>
    </div>
  );
}

const SCREENS = { home: SHome, compare: SCompare, kpis: SKpis, dimensions: SDims, cashflow: SCash, trail: STrail, mapper: SMapper, decks: SDecks, memory: SMemory };

export default function PTour() {
  const { c, lang } = useLanding();
  const s = c.screens;
  const t = L[lang] || L.en;
  const f = useFmt(lang);
  const ref = useReveal();
  const track = useRef(null);
  const [act, setAct] = useState(0);
  const [prog, setProg] = useState(0);
  const n = s.items.length;
  // Cada pantalla se dibuja en un lienzo fijo (980×560) y se escala al hueco disponible
  const body = useRef(null);
  const [scale, setScale] = useState(1);
  const [cw, setCw] = useState(980);
  useEffect(() => {
    const el = body.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect;
      const w = width < 640 ? 720 : 980;
      setCw(w);
      setScale(Math.min(width / w, height / 560));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // El tramo de scroll decide la pantalla
  useEffect(() => {
    let raf = 0;
    const run = () => {
      raf = 0;
      const el = track.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const span = r.height - innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / (span || 1)));
      setProg(p);
      setAct(Math.min(n - 1, Math.floor(p * n * 0.9999)));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(run); };
    run();
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    return () => { removeEventListener("scroll", on); removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, [n]);

  const jump = (i) => {
    const el = track.current;
    if (!el) return;
    const span = el.offsetHeight - innerHeight;
    const top = el.getBoundingClientRect().top + scrollY + span * ((i + 0.5) / n);
    scrollTo({ top, behavior: reduced() ? "auto" : "smooth" });
  };

  // Flechas del teclado mientras el panel está en pantalla
  useEffect(() => {
    const k = (e) => {
      const el = track.current;
      if (!el || e.target.closest?.("input, textarea, select")) return;
      const r = el.getBoundingClientRect();
      if (r.top > 1 || r.bottom < innerHeight - 1) return;
      if (e.key === "ArrowRight") { e.preventDefault(); jump(Math.min(n - 1, act + 1)); }
      if (e.key === "ArrowLeft") { e.preventDefault(); jump(Math.max(0, act - 1)); }
    };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  });

  const it = s.items[act];
  const S = SCREENS[it.id] || SHome;
  const stepNo = STEPS.indexOf("pantallas") + 1;
  const local = (prog * n) - act; // 0..1 dentro de la pantalla actual

  return (
    <section className="pt-page pt-tour" id="pantallas" ref={ref} aria-labelledby="pt-scr">
      <div className="pt-in">
        <div className="pt-head c">
          <div className="pt-path rv"><span className="pt-step-n">{pad(stepNo)} / {pad(STEPS.length)}</span><b>pantallas</b></div>
          <h2 className="rv" id="pt-scr"><Hl text={s.title} /></h2>
          <p className="lead rv">{s.lead}</p>
        </div>
      </div>
      <div className="pt-tour-track" ref={track} style={{ height: `${n * 80 + 20}vh` }}>
        <div className="pt-tour-sticky">
          <div className="pt-app">
            <aside className="pt-app-rail">
              <span className="pt-app-logo"><BrandMark size={28} /></span>
              {s.items.map((x, i) => {
                const I = ICONS[x.id] || LayoutDashboard;
                return (
                  <button key={x.id} type="button" className={i === act ? "on" : ""} onClick={() => jump(i)} aria-label={x.tab} title={x.tab}>
                    {i === act && <motion.span layoutId="tr-rail" className="pill" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                    <I size={17} />
                  </button>
                );
              })}
            </aside>
            <div className="pt-app-main">
              <header className="pt-app-top">
                <span className="crumb">{t.group} <i>/</i> <AnimatePresence mode="wait"><motion.b key={it.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: .2 }}>{it.tab}</motion.b></AnimatePresence></span>
                <span className="chips"><span>{f.mon(11)} 2025</span><span>{t.cons}</span><span>EUR</span></span>
              </header>
              <div className="pt-app-body" ref={body}>
                <div className="pt-app-canvas" style={{ width: cw, transform: `translate(-50%, -50%) scale(${scale})` }}>
                <AnimatePresence mode="wait">
                  <motion.div key={it.id} className="pt-app-screen" initial={{ opacity: 0, y: 24, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -18, filter: "blur(6px)" }} transition={{ duration: .45, ease: EASE }}>
                    <FmtCtx.Provider value={f}><S t={t} f={f} /></FmtCtx.Provider>
                  </motion.div>
                </AnimatePresence>
                </div>
              </div>
              <footer className="pt-app-foot"><span className="live"><i />{t.sample}</span></footer>
            </div>

            <button type="button" className="pt-tour-arrow prev" onClick={() => jump(act - 1)} disabled={act === 0} aria-label={t.prev} title={act > 0 ? s.items[act - 1].tab : ""}>
              <ChevronLeft size={22} />{act > 0 && <span>{s.items[act - 1].tab}</span>}
            </button>
            <button type="button" className="pt-tour-arrow next" onClick={() => jump(act + 1)} disabled={act === n - 1} aria-label={t.next} title={act < n - 1 ? s.items[act + 1].tab : ""}>
              {act < n - 1 && <span>{s.items[act + 1].tab}</span>}<ChevronRight size={22} />
            </button>

            <div className="pt-tour-card">
              <div className="top">
                <span className="mono num">{pad(act + 1)} / {pad(n)}</span>
                <span className="bar"><i style={{ transform: `scaleX(${Math.min(1, Math.max(0, local))})` }} /></span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={it.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .35, ease: EASE }}>
                  <span className="pt-k">{it.tab} · {it.short}</span>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </motion.div>
              </AnimatePresence>
              <button type="button" className="btn sm" onClick={goDemo}>{t.cta} <ArrowRight size={14} className="fl" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
