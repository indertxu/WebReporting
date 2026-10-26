import React, { useEffect, useMemo, useRef, useState } from "react";
import { animate } from "framer-motion";
import { companies, tree, nodeValue, trail, dimSplit } from "@/lib/demoData";
import { useLanding, LOCALES } from "./shared";

// La ventana del producto del héroe: datos de ejemplo del grupo ficticio Norvia, diciembre 2025.
const MESES = [2];
const FX = { EUR: 1, GBP: 0.8612, USD: 1.0853 };
const COLOR = { A: "var(--bien)", B: "var(--mal)", C: "var(--avi)" };

function Cifra({ v, fmt, sufijo = "" }) {
  const ref = useRef(null);
  const prev = useRef(v);
  const pinta = (x) => {
    const s = fmt.format(Math.abs(Math.round(x)));
    return (x < 0 ? `(${s})` : s) + sufijo;
  };
  useEffect(() => {
    const desde = prev.current;
    prev.current = v;
    if (desde === v) return;
    const a = animate(desde, v, { duration: 0.55, ease: [0.2, 0.8, 0.3, 1], onUpdate: (x) => { if (ref.current) ref.current.textContent = pinta(x); } });
    return () => a.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [v]);
  return <span ref={ref}>{pinta(v)}</span>;
}

export default function LiveWindow() {
  const { c: all, lang } = useLanding();
  const c = all.window;
  const fmt = useMemo(() => new Intl.NumberFormat(LOCALES[lang] || "es-ES", { maximumFractionDigits: 0, useGrouping: "always" }), [lang]);
  const nl = ["es", "en", "pt", "da"].includes(lang) ? lang : "en";
  const tipo = (x) => new Intl.NumberFormat(LOCALES[lang] || "es-ES", { minimumFractionDigits: 3, maximumFractionDigits: 3 }).format(x);
  const [vista, setVista] = useState("res");
  const [quien, setQuien] = useState("GROUP");
  const [mon, setMon] = useState("EUR");
  const [abierta, setAbierta] = useState(null);
  const [aviso, setAviso] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setAviso((i) => (i + 1) % c.feed.length), 3600);
    return () => clearInterval(t);
  }, [c.feed.length]);

  // A moneda de presentación: el grupo ya está en EUR; una sociedad, desde su moneda a EUR y de ahí a la elegida
  const conv = (v) => {
    const co = companies.find((x) => x.id === quien);
    return (co ? v * co.avg : v) * FX[mon];
  };
  const val = (n, prior = false) => conv(nodeValue(n, quien, MESES, prior));
  const secciones = tree.filter((n) => n.children);
  const calc = (code) => tree.find((n) => n.code === code);
  const pct = (a, b) => (b ? ((a - b) / Math.abs(b)) * 100 : 0);
  const varTxt = (p) => `${p >= 0 ? "▲" : "▼"} ${Math.abs(p).toFixed(1).replace(".", lang === "en" ? "." : ",")} %`;
  const nodoAbierto = abierta && secciones.flatMap((s) => s.children).find((n) => n.code === abierta);
  const tr = nodoAbierto ? trail(nodoAbierto, MESES) : null;
  const ev = c.feed[aviso];
  const tonos = { bien: "var(--bien)", info: "var(--info)", avi: "var(--avi)", mal: "var(--mal)" };

  const filaCalc = (code) => {
    const n = calc(code);
    const v = val(n), p = val(n, true);
    return (
      <div key={code} className={`bfila calc ${vista === "cmp" ? "c5" : "c4"}`} role="row">
        <span className="cta-l"><span className="cod">{code}</span><b>{c.calc[code]}</b></span>
        {vista === "cmp" ? (
          <>
            <span className="plata"><Cifra v={v} fmt={fmt} /></span>
            <span className="plata" style={{ color: "var(--tinta3)" }}><Cifra v={p} fmt={fmt} /></span>
            <span className={`plata ${v - p < 0 ? "neg" : ""}`}><Cifra v={v - p} fmt={fmt} /></span>
            <span className={`var ${v >= p ? "up" : "down"}`}>{varTxt(pct(v, p))}</span>
          </>
        ) : (
          <>
            <span />
            <span className="plata"><Cifra v={v} fmt={fmt} /></span>
            <span className={`var ${v >= p ? "up" : "down"}`}>{varTxt(pct(v, p))}</span>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="nr-ventana" role="region" aria-label={c.title}>
      <div className="v-cab">
        <b>{c.title}</b>
        <span className="ruta">/ {c.path}</span>
        <div className="der">
          <select className="sel" value={quien} onChange={(e) => { setQuien(e.target.value); setAbierta(null); }} aria-label="Sociedad">
            <option value="GROUP">{c.group}</option>
            {companies.map((co) => <option key={co.id} value={co.id}>{co.name}</option>)}
          </select>
          <select className="sel" value={mon} onChange={(e) => setMon(e.target.value)} aria-label="Moneda">
            {Object.keys(FX).map((m) => <option key={m}>{m}</option>)}
          </select>
          <div className="vistas" role="tablist">
            {Object.entries(c.views).map(([k, label]) => (
              <button key={k} aria-pressed={vista === k} onClick={() => { setVista(k); setAbierta(null); }}>{label}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="v-aviso" aria-live="polite" key={aviso} style={{ animation: "nr-entra .45s both" }}>
        <span className="punto" style={{ background: tonos[ev.tone] }} />
        <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{ev.t}</span>
        <span className="hace">{ev.ago}</span>
      </div>

      {(vista === "res" || vista === "cmp") && (
        <div role="table">
          {secciones.map((s) => {
            const tot = val(s);
            return (
              <React.Fragment key={s.code}>
                <div className="gr-cab">
                  <span className="bolita" style={{ background: COLOR[s.code] }} />
                  <span style={{ color: COLOR[s.code] }}>{c.sections[s.code]}</span>
                  <span className="tot">{mon} <Cifra v={tot} fmt={fmt} /></span>
                </div>
                {s.children.map((n, i) => {
                  const v = val(n), p = val(n, true);
                  return (
                    <button key={`${n.code}-${vista}`} type="button" role="row" className={`bfila ${vista === "cmp" ? "c5" : "c4"} ${abierta === n.code ? "sel-on" : ""}`}
                      style={{ animationDelay: `${i * 0.04}s` }} onClick={() => setAbierta(n.code)}>
                      <span className="cta-l"><span className="cod">{n.code}</span><b>{n[nl]}</b></span>
                      {vista === "cmp" ? (
                        <>
                          <span className="plata"><Cifra v={v} fmt={fmt} /></span>
                          <span className="plata" style={{ color: "var(--tinta3)" }}><Cifra v={p} fmt={fmt} /></span>
                          <span className={`plata ${v - p < 0 ? "neg" : ""}`}><Cifra v={v - p} fmt={fmt} /></span>
                          <span className={`var ${v >= p ? "up" : "down"}`}>{varTxt(pct(v, p))}</span>
                        </>
                      ) : (
                        <>
                          <span className="peso"><i style={{ width: `${Math.min(100, Math.abs(v / (tot || 1)) * 100)}%`, background: COLOR[s.code] }} /></span>
                          <span className={`plata ${v < 0 ? "neg" : ""}`}><Cifra v={v} fmt={fmt} /></span>
                          <span className={`var ${v >= p ? "up" : "down"}`}>{varTxt(pct(v, p))}</span>
                        </>
                      )}
                    </button>
                  );
                })}
                {s.code === "B" && filaCalc("GM")}
                {s.code === "C" && filaCalc("EBIT")}
              </React.Fragment>
            );
          })}
        </div>
      )}

      {vista === "dim" && (
        <div role="table">
          <div className="gr-cab"><span>{c.views.dim}</span><span className="tot">{mon}</span></div>
          <div className="bfila c5" style={{ height: 36, cursor: "default", fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--tinta3)", textTransform: "uppercase", letterSpacing: ".06em" }}>
            <span />{c.dims.map((d) => <span key={d} style={{ textAlign: "center" }}>{d}</span>)}<span style={{ textAlign: "right" }}>Total</span>
          </div>
          {secciones.flatMap((s) => s.children).map((n, i) => {
            const v = val(n);
            const sp = dimSplit(n.code);
            return (
              <button key={n.code} type="button" className="bfila c5" style={{ animationDelay: `${i * 0.03}s` }} onClick={() => setAbierta(n.code)}>
                <span className="cta-l"><span className="cod">{n.code}</span><b>{n[nl]}</b></span>
                {sp.map((x, j) => (
                  <span key={j} className="calor" style={{ background: `rgba(5,150,105,${0.08 + x * 0.75})`, color: x > 0.42 ? "#fff" : "var(--tinta)" }}>{Math.round(x * 100)} %</span>
                ))}
                <span className={`plata ${v < 0 ? "neg" : ""}`}><Cifra v={v} fmt={fmt} /></span>
              </button>
            );
          })}
        </div>
      )}

      {vista === "soc" && (
        <div className="socs">
          {companies.map((co) => {
            const rev = tree.find((n) => n.code === "A");
            const local = nodeValue(rev, co.id, MESES);
            const enMon = local * co.avg * FX[mon];
            const totalGrupo = companies.reduce((a, x) => a + nodeValue(rev, x.id, MESES) * x.avg, 0) * FX[mon];
            return (
              <div key={co.id} className="soc" style={{ animation: "nr-entra .45s both" }}>
                <div className="t"><span className="cod">{co.id}</span><b>{co.name}</b><span className="mono">{mon} <Cifra v={enMon} fmt={fmt} /></span></div>
                <div className="barra"><i style={{ width: `${(enMon / totalGrupo) * 100}%` }} /></div>
                <div className="pie">
                  <span>{c.sections.A} · {Math.round((enMon / totalGrupo) * 100)} % {c.contribution}</span>
                  <span>{co.ccy} <Cifra v={local} fmt={fmt} /> {c.local}</span>
                  <span>{c.rate} {tipo(co.avg)}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div style={{ padding: "12px 14px", borderTop: "1px solid var(--linea)", fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--marca)", fontWeight: 700 }}>
        ↖ {c.clickHint}
      </div>

      <aside className={`cajon ${nodoAbierto ? "abierto" : ""}`} aria-hidden={!nodoAbierto}>
        <div className="cj-cab">{c.drawerTitle}<button onClick={() => setAbierta(null)} aria-label="Cerrar">×</button></div>
        {tr && (
          <div className="cj-cuerpo">
            <h4>{nodoAbierto[nl]}</h4>
            <div className="grande">{mon} <Cifra v={tr.total * FX[mon]} fmt={fmt} /></div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--tinta3)", marginTop: 2 }}>{c.group} · {c.path}</div>
            {tr.rows.map((r) => (
              <React.Fragment key={r.co.id}>
                <div className="nodo"><span>{r.co.name}</span><span className="mono">{mon} <Cifra v={r.eur * FX[mon]} fmt={fmt} /></span></div>
                <div className="nodo hijo"><span>{c.drawerUpload}</span><span className="mono">{r.co.ccy} <Cifra v={r.upload} fmt={fmt} /></span></div>
                <div className="nodo hijo"><span>{c.drawerJournals} · {c.rate} {tipo(r.co.avg)}</span><span className="mono">{r.co.ccy} <Cifra v={r.journals} fmt={fmt} /></span></div>
              </React.Fragment>
            ))}
            <div className="nodo elim"><span>{c.drawerElim}</span><span className="mono">{mon} <Cifra v={tr.elim * FX[mon]} fmt={fmt} /></span></div>
            {tr.rounding !== 0 && <div className="nodo" style={{ borderStyle: "dashed", color: "var(--tinta3)" }}><span>{c.drawerRound}</span><span className="mono"><Cifra v={tr.rounding * FX[mon]} fmt={fmt} /></span></div>}
          </div>
        )}
        <div className="cj-pie">{c.drawerFoot}</div>
      </aside>
    </div>
  );
}
