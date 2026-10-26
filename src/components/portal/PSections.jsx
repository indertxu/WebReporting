import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, MousePointerClick, ArrowLeftRight, Coins, Building2, LineChart, Calculator, Layers3, Briefcase,
  ShieldCheck, Lock, Users, KeyRound, ScrollText, Languages, FileSpreadsheet, CornerDownRight } from "lucide-react";
import { useLanding, Hl, irA } from "@/components/report/shared";
import LiveWindow from "@/components/report/LiveWindow";
import QuickDemo from "@/components/report/QuickDemo";
import { useCount, useInView, useReveal, useTick } from "./hooks";
import { STEPS, pad } from "./Portal";

/** Cabecera de cada pantalla: el número de paso del recorrido + título + entradilla. */
const SID = { automatico: "auto" };
function Head({ path, eyebrow, title, lead, center }) {
  const n = STEPS.indexOf(SID[path] || path);
  return (
    <div className={`pt-head rv ${center ? "c" : ""}`}>
      <div className="pt-path">
        {n >= 0 ? <span className="pt-step-n">{pad(n + 1)} / {pad(STEPS.length)}</span> : <span>~/</span>}
        <b>{path}</b>{eyebrow && eyebrow.toLowerCase() !== path ? <span>· {eyebrow}</span> : null}
      </div>
      <h2><Hl text={title} /></h2>
      {lead && <p className="lead"><Hl text={lead} /></p>}
    </div>
  );
}

/* ═════ Marquesina: lo que ya hace ═════ */
export function PMarquee() {
  const { c } = useLanding();
  const items = c.today.cols.flat().map(([b]) => b);
  return (
    <div className="pt-marquee" aria-hidden>
      <div>{[...items, ...items].map((t, i) => <span key={i}>{t}</span>)}</div>
    </div>
  );
}

/* ═════ Demo en vivo: el producto, tocable ═════ */
export function PDemo() {
  const { c } = useLanding();
  const q = c.questions;
  const ref = useReveal();
  return (
    <section className="pt-page" id="demo" ref={ref} aria-labelledby="pt-demo">
      <div className="pt-in">
        <div className="pt-head rv c">
          <div className="pt-path"><span className="pt-step-n">02 / 11</span><b>demo</b><span>· {c.hero.invite}</span></div>
          <h2 id="pt-demo"><Hl text={q.title} /></h2>
          <p className="lead"><Hl text={q.lead} /></p>
        </div>
        <div className="pt-qrow">
          {q.items.map((it, i) => (
            <div key={it.k} className="pt-q rv" style={{ transitionDelay: `${i * .08}s` }}>
              <span className="mono">{it.k}</span><b>{it.title}</b><p>{it.body}</p>
            </div>
          ))}
        </div>
        <div className="pt-demo-wrap rv">
          <div className="nr pt-embed"><LiveWindow /></div>
        </div>
        <div className="pt-demo-tips rv">
          <span><MousePointerClick size={13} /> {c.window.clickHint}</span>
          <span><ArrowLeftRight size={13} /> {Object.values(c.window.views).join(" · ")}</span>
          <span><Coins size={13} /> EUR · GBP · USD</span>
          <span><Building2 size={13} /> {c.window.group}</span>
        </div>
      </div>
    </section>
  );
}

/* ═════ Flujo de datos con selector de plan ═════ */
const IN_Y = [14, 38, 62, 86];
const OUT_Y = [10, 30, 50, 70, 90];
export function PFlow() {
  const { c } = useLanding();
  const f = c.flow, s = c.sources;
  const ref = useReveal();
  const [plan, setPlan] = useState("pro");
  const plans = c.plans.items.map((x) => [x.id, x.name]);
  const inP = (y) => `M240,${(y / 100) * 520} C330,${(y / 100) * 520} 330,260 410,260`;
  const outP = (y) => `M590,260 C670,260 670,${(y / 100) * 520} 760,${(y / 100) * 520}`;
  return (
    <section className="pt-page" id="datos" ref={ref} aria-labelledby="pt-datos">
      <div className="pt-in">
        <Head path="datos" eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
        <div className="pt-segrow rv">
          <span className="pt-k">{f.pickPlan}</span>
          <div className="pt-seg" role="group" aria-label={f.pickPlan}>
            {plans.map(([id, name]) => (
              <button key={id} type="button" className={plan === id ? "on" : ""} aria-pressed={plan === id} onClick={() => setPlan(id)}>
                {plan === id && <motion.span layoutId="pt-seg" className="pill" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                <span>{name}</span>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.span key={plan} className="note" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }}>{f.planNotes[plan]}</motion.span>
          </AnimatePresence>
        </div>
        <div className="pt-flow rv">
          <svg className="lines" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden>
            {f.inputs.map((n, i) => (
              <g key={n.id}><path className="base" d={inP(IN_Y[i])} />{n.plans.includes(plan) && <path className="dash" d={inP(IN_Y[i])} style={{ animationDelay: `${-i * .4}s` }} />}</g>
            ))}
            {f.outputs.map((n, i) => (
              <g key={n.id}><path className="base" d={outP(OUT_Y[i])} />{n.plans.includes(plan) && <path className="dash out" d={outP(OUT_Y[i])} style={{ animationDelay: `${-i * .35 - 1.1}s` }} />}</g>
            ))}
          </svg>
          <ul className="in">
            {f.inputs.map((n, i) => (
              <li key={n.id} className={`pt-node ${n.plans.includes(plan) ? "on" : ""}`} style={{ top: `${IN_Y[i]}%` }}>
                <b>{n.name}</b><span>{n.detail}</span>
              </li>
            ))}
          </ul>
          <div className="pt-hub">
            <div><img src="/favicon.svg" alt="" /><b>{f.hub}</b><span>{f.hubSub}</span></div>
          </div>
          <ul className="out">
            {f.outputs.map((n, i) => (
              <li key={n.id} className={`pt-node o ${n.plans.includes(plan) ? "on" : ""}`} style={{ top: `${OUT_Y[i]}%` }}><b>{n.name}</b></li>
            ))}
          </ul>
        </div>
        <div className="pt-card pt-every rv">
          <span className="pt-k">{f.everyLoad.title}</span>
          <ul>{f.everyLoad.items.map((t) => <li key={t}><span className="pt-tic">✓</span>{t}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

/* ═════ Pilares con su animación + lector de archivos ═════ */
function VizUpload({ p, on }) {
  const i = useTick(p.uploadSteps.length + 3, 900, on);
  const dropped = i >= 1;
  return (
    <div>
      <div className={`pt-drop ${dropped ? "in" : ""}`}>
        <motion.span className="pt-file" animate={{ y: dropped ? 0 : -26, opacity: dropped ? 1 : .6, scale: dropped ? 1 : .94 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
          <em>XLSX</em>{p.uploadFile}
        </motion.span>
      </div>
      <ul className="pt-steps">
        {p.uploadSteps.map((s, j) => {
          const st = i - 1 > j ? "done" : i - 1 === j ? "now" : "";
          return <li key={s} className={st}><i>{st === "done" ? "✓" : ""}</i>{s}</li>;
        })}
      </ul>
    </div>
  );
}
function VizChecks({ p, on }) {
  const i = useTick(p.checks.length + 3, 800, on);
  return (
    <ul className="pt-checks">
      {p.checks.map((x, j) => (
        <li key={x.t} className={x.ok ? "" : "warn"} style={{ opacity: i > j ? 1 : .15, transform: i > j ? "none" : "translateX(-8px)" }}>
          <b style={{ background: x.ok ? "var(--tint2)" : "var(--warnbg)", color: x.ok ? "var(--mint)" : "var(--warn)" }}>{x.ok ? <Check size={12} strokeWidth={3} /> : "!"}</b>{x.t}
        </li>
      ))}
    </ul>
  );
}
function VizDrill({ p, on }) {
  const i = useTick(p.drill.length + 3, 850, on);
  return (
    <ul className="pt-drill">
      {p.drill.map((x, j) => (
        <li key={x} className={j === p.drill.length - 1 && i > j ? "last" : ""} style={{ marginLeft: j * 14, opacity: i > j ? 1 : .12 }}>
          {j > 0 && <span className="ln" />}<span>{j > 0 && <CornerDownRight size={11} style={{ marginRight: 6, verticalAlign: -1, opacity: .6 }} />}{x}</span>
          {j === 0 && <span className="grad">67,9 M€</span>}
        </li>
      ))}
    </ul>
  );
}
function Pillar({ it, i, p }) {
  const [ref, on] = useInView({ once: false });
  const V = { upload: VizUpload, checks: VizChecks, drill: VizDrill }[it.visual];
  return (
    <div ref={ref} className="pt-card pt-pillar rv" style={{ transitionDelay: `${i * .08}s` }}>
      <span className="pt-k">{it.k}</span>
      <h3>{it.title}</h3>
      <p>{it.body}</p>
      <div className="viz">{V && <V p={p} on={on} />}</div>
    </div>
  );
}

export function PAuto() {
  const { c } = useLanding();
  const p = c.pillars, a = c.auto;
  const ref = useReveal();
  const [fase, setFase] = useState(0);
  const timers = useRef([]);
  const total = a.fields.length;
  const leer = () => {
    timers.current.forEach(clearTimeout);
    setFase(1);
    timers.current = a.fields.map((_, i) => setTimeout(() => setFase(2 + i), 1000 + i * 360));
    timers.current.push(setTimeout(() => setFase(2 + total), 1000 + total * 360 + 200));
  };
  const [rd, rdOn] = useInView();
  useEffect(() => { if (rdOn) { const t = setTimeout(leer, 500); return () => clearTimeout(t); } }, [rdOn]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const hecho = fase >= 2 + total;
  return (
    <section className="pt-page" id="auto" ref={ref} aria-labelledby="pt-auto">
      <div className="pt-in">
        <Head path="automatico" eyebrow={p.eyebrow} title={p.title} lead={a.lead} />
        <div className="pt-grid3">{p.items.map((it, i) => <Pillar key={it.k} it={it} i={i} p={p} />)}</div>

        <div className="pt-card pt-reader rv" ref={rd}>
          <div>
            <div className="pt-sheet">
              <div className="h"><FileSpreadsheet size={14} color="var(--mint)" />{a.file}</div>
              <span className={`pt-scan ${fase === 1 ? "on" : ""}`} />
              <table><tbody>
                {a.rows.map((r, i) => (
                  <tr key={i} className={i === 0 ? "t" : ""}>
                    <td>{i + 4}</td>
                    {r.map((cel, j) => <td key={j} className={i === 0 && fase >= 2 && j < 6 ? "mk" : ""}>{cel}</td>)}
                  </tr>
                ))}
              </tbody></table>
            </div>
            <div className="pt-reader-foot">
              <button className="btn sm" type="button" onClick={leer} disabled={fase === 1}>{hecho ? a.again : a.read} <span className="fl">→</span></button>
              <span>{a.hint}</span>
            </div>
          </div>
          <div className="pt-fields">
            <span className="pt-k" style={{ marginBottom: 4 }}>{a.eyebrow}</span>
            {a.fields.map(([k, v], i) => (
              <div key={k} className={`pt-field ${fase >= 2 + i ? "ok" : ""}`}><span>{k}</span><span>{fase >= 2 + i ? v : "—"}</span></div>
            ))}
            <div className="pt-okline" style={{ opacity: hecho ? 1 : 0 }}><Check size={14} strokeWidth={3} />{a.ok}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═════ Ahorro de tiempo ═════ */
function Speed({ s }) {
  const [ref, on] = useInView();
  const v = useCount(s.to, on, 2200, s.from);
  const done = on && v <= s.to + 0.01;
  return (
    <div ref={ref} className="pt-card pt-speed rv">
      <span className="pt-k">{s.unit === "s" ? "UI · P/L ⇄ BS" : ""}</span>
      <span className="n mono"><span className={done ? "grad" : ""}>{done ? s.prefix : ""}{Math.max(s.to, v).toFixed(done ? 0 : 1)}</span><small style={{ display: "inline", fontSize: 26, color: "var(--fg3)" }}> {s.unit}</small></span>
      <span className="bar"><motion.i initial={{ scaleX: 1 }} animate={{ scaleX: on ? s.to / s.from : 1 }} transition={{ duration: 2.2, ease: [.16, 1, .3, 1] }} /></span>
      <small>{s.label}</small>
    </div>
  );
}
function TaskRow({ r, i }) {
  const [ref, on] = useInView({ margin: "0px 0px -20% 0px" });
  return (
    <div ref={ref} className={`pt-tr ${on ? "on" : ""}`}>
      <span className="t">{r[0]}</span>
      <span className="x"><span style={{ transitionDelay: `${.15 + (i % 3) * .05}s` }}>{r[1]}</span></span>
      <motion.span className="o" initial={{ opacity: 0, x: -10 }} animate={on ? { opacity: 1, x: 0 } : {}} transition={{ delay: .55, duration: .5 }}>{r[2]}</motion.span>
    </div>
  );
}
export function PTasks() {
  const { c } = useLanding();
  const t = c.tasks;
  const ref = useReveal();
  return (
    <section className="pt-page" id="ahorro" ref={ref} aria-labelledby="pt-ahorro">
      <div className="pt-in">
        <div className="pt-saveg">
          <Head path="ahorro" eyebrow={t.eyebrow} title={t.title} lead={t.sub} />
          <Speed s={t.speed} />
        </div>
        <div className="pt-card pt-table rv">
          <div className="pt-trh"><span>{t.colTask}</span><span>{t.excel}</span><span>{t.report}</span></div>
          {t.rows.map((r, i) => <TaskRow key={r[0]} r={r} i={i} />)}
        </div>
        <p className="pt-notbi rv">{t.notBi}</p>
      </div>
    </section>
  );
}

/* ═════ Monedas ═════ */
export function PMoney() {
  const { c } = useLanding();
  const m = c.money;
  const ref = useReveal();
  const [fx, on] = useInView();
  const hi = useTick(m.fx.length - 1, 1400, on);
  return (
    <section className="pt-page" id="monedas" ref={ref} aria-labelledby="pt-mon">
      <div className="pt-in">
        <Head path="monedas" eyebrow={m.eyebrow} title={m.title} lead={m.lead} />
        <div className="pt-grid3">
          {m.items.map((it, i) => (
            <div key={it.k} className="pt-card rv" style={{ padding: 26, transitionDelay: `${i * .08}s` }} ref={i === 2 ? fx : undefined}>
              <span className="pt-k">{it.k}</span>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
              {i === 2 ? (
                <div className="pt-fx">
                  {m.fx.map((r, j) => (
                    <div key={j} className={j > 0 && hi === j - 1 ? "hot" : ""}><span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span></div>
                  ))}
                </div>
              ) : (
                <div className="pt-fxviz">
                  {(i === 0 ? ["EUR", "GBP", "USD", "DKK"] : ["Q1", "Q2", "Q3", "Q4"]).map((x, j) => (
                    <span key={x}><i style={{ height: `${[62, 48, 80, 36][(j + i) % 4]}%`, animationDelay: `${j * .15}s` }} />{x}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="pt-full rv" style={{ textAlign: "right" }}>{m.fxNote}</p>
      </div>
    </section>
  );
}

/* ═════ Pantallas: texto que avanza, captura fija que cambia ═════ */
export function PScreens() {
  const { c } = useLanding();
  const s = c.screens;
  const ref = useReveal();
  const [act, setAct] = useState(0);
  const items = useRef([]);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setAct(Number(e.target.dataset.i)); }), { rootMargin: "-45% 0px -50% 0px" });
    items.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [s]);
  const it = s.items[act];
  return (
    <section className="pt-page" id="pantallas" ref={ref} aria-labelledby="pt-scr">
      <div className="pt-in">
        <Head path="pantallas" eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
        <div className="pt-screens">
          <div>
            {s.items.map((x, i) => (
              <div key={x.id} data-i={i} ref={(el) => (items.current[i] = el)} className={`pt-scr-item ${act === i ? "on" : ""}`}>
                <span className="i">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <span className="pt-k">{x.tab}</span>
                  <h3>{x.title}</h3>
                  <p>{x.body}</p>
                  <div className="shot"><img src={x.img} alt={x.alt} width="1500" height="728" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} /></div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-scr-sticky">
            <div className="pt-scr-frame">
              <div className="pt-browser">
                <div className="bar"><i /><i /><i /><AnimatePresence mode="wait"><motion.span key={it.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>nextreport.atebiz.com/{it.id}</motion.span></AnimatePresence></div>
                <div className="img">
                  {s.items.map((x, i) => (
                    <img key={x.id} src={x.img} alt={i === act ? x.alt : ""} width="1500" height="728" loading={i < 2 ? "eager" : "lazy"}
                      style={{ opacity: i === act ? 1 : 0, transform: i === act ? "scale(1)" : "scale(1.04)", transition: "opacity .6s, transform 1.2s cubic-bezier(.16,1,.3,1)" }} />
                  ))}
                </div>
              </div>
              <div className="pt-dots">{s.items.map((x, i) => <i key={x.id} className={i === act ? "on" : ""} />)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═════ Hoy ═════ */
export function PToday() {
  const { c } = useLanding();
  const t = c.today;
  const ref = useReveal();
  return (
    <section className="pt-page" ref={ref} aria-labelledby="pt-hoy">
      <div className="pt-in">
        <Head path="hoy" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <div className="pt-grid3">
          {t.cols.map((col, i) => (
            <div key={i} className="pt-card rv" style={{ padding: 24, transitionDelay: `${i * .08}s` }}>
              <ul className="pt-list">{col.map(([b, r]) => <li key={b}><span className="pt-tic">✓</span><span><b>{b}</b>{r}</span></li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═════ Planes ═════ */
function Cell({ v }) {
  if (v === true) return <span className="si">✓</span>;
  if (v === false) return <span className="no">—</span>;
  return <span className="tx">{v}</span>;
}
export function PPlans() {
  const { c } = useLanding();
  const p = c.plans;
  const ref = useReveal();
  const [op, setOp] = useState(0);
  const rec = p.recommend[op];
  return (
    <section className="pt-page" id="planes" ref={ref} aria-labelledby="pt-planes">
      <div className="pt-in">
        <Head path="planes" eyebrow={p.eyebrow} title={p.title} lead={p.lead} />
        <div className="pt-steps3">
          {p.steps.map((st, i) => (
            <div key={st.t} className="pt-card pt-step rv" style={{ transitionDelay: `${i * .08}s` }}>
              <span className="n">{i + 1}</span><div><b>{st.t}</b><span>{st.b}</span></div>
            </div>
          ))}
        </div>
        <p className="pt-ask rv">{p.ask}</p>
        <div className="rv" style={{ display: "flex", justifyContent: "center" }}>
          <div className="pt-seg" role="group" aria-label={p.ask}>
            {p.options.map((o, i) => (
              <button key={o} type="button" className={op === i ? "on" : ""} aria-pressed={op === i} onClick={() => setOp(i)}>
                {op === i && <motion.span layoutId="pt-seg2" className="pill" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                <span>{o}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="pt-plans">
          {p.items.map((pl, i) => (
            <motion.article key={pl.id} layout className={`pt-card pt-plan rv ${rec === pl.id ? "rec" : ""}`} style={{ transitionDelay: `${i * .08}s` }}
              animate={{ scale: rec === pl.id ? 1.02 : 1 }} transition={{ type: "spring", stiffness: 300, damping: 26 }}>
              <AnimatePresence>{rec === pl.id && <motion.span className="badge" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{p.badge}</motion.span>}</AnimatePresence>
              <span className="pt-k">{p.price} · {p.priceValue}</span>
              <h3>{pl.name}</h3>
              <p className="who">{pl.who}</p>
              <div className="src">{pl.source}</div>
              <ul>{pl.features.map((f) => <li key={f}><span className="pt-tic">✓</span>{f}</li>)}</ul>
              <button className={`btn ${rec === pl.id ? "" : "ghost"}`} type="button" onClick={() => irA("contacto")}>{pl.cta} <span className="fl">→</span></button>
            </motion.article>
          ))}
        </div>
        <div className="pt-extras">
          {p.extras.map((x) => <div key={x.name} className="pt-extra rv"><b>{x.name}</b><span>{x.text}</span></div>)}
        </div>
        <details className="pt-cmp rv">
          <summary>{p.compareTitle}<span>{p.compareOpen} ↓</span></summary>
          <div className="sc">
            <table>
              <thead><tr><th />{p.items.map((pl) => <th key={pl.id} scope="col">{pl.name}</th>)}</tr></thead>
              <tbody>{p.matrix.map(([l, ...v]) => <tr key={l}><th scope="row">{l}</th>{v.map((x, i) => <td key={i}><Cell v={x} /></td>)}</tr>)}</tbody>
            </table>
          </div>
        </details>
      </div>
    </section>
  );
}

/* ═════ Seguridad + para quién ═════ */
const SEC_IC = [Lock, ShieldCheck, Users, KeyRound, ScrollText, Languages];
const AUD_IC = { cfo: LineChart, ctl: Calculator, cons: Layers3, desp: Briefcase };
export function PSecurity() {
  const { c } = useLanding();
  const s = c.security, a = c.audience;
  const ref = useReveal();
  return (
    <section className="pt-page" id="seguridad" ref={ref} aria-labelledby="pt-seg">
      <div className="pt-in">
        <Head path="seguridad" eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
        <div className="pt-grid3">
          {s.items.map(([b, r], i) => {
            const I = SEC_IC[i % SEC_IC.length];
            return (
              <div key={b} className="pt-card pt-sec rv" style={{ padding: 22, transitionDelay: `${(i % 3) * .07}s` }}>
                <span className="ic"><I size={18} /></span>
                <h3 style={{ fontSize: 17, marginTop: 14 }}>{b.replace(/^[:,\s]+|[:,\s]+$/g, "")}</h3>
                <p>{r.replace(/^[:,\s]+/, "")}</p>
              </div>
            );
          })}
        </div>
        <div className="pt-head rv" style={{ marginTop: 70, marginBottom: 26 }}>
          <div className="pt-path"><span>~/</span><b>equipos</b><span>· {a.eyebrow}</span></div>
          <h2 style={{ fontSize: "clamp(28px,3.4vw,42px)" }}><Hl text={a.title} /></h2>
          <p className="lead">{a.lead}</p>
        </div>
        <div className="pt-grid4">
          {a.items.map((it, i) => {
            const I = AUD_IC[it.icon] || Users;
            return (
              <div key={it.title} className="pt-card pt-sec rv" style={{ padding: 22, transitionDelay: `${i * .07}s` }}>
                <span className="ic"><I size={18} /></span>
                <h3 style={{ fontSize: 17, marginTop: 14 }}>{it.title}</h3>
                <p>{it.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═════ FAQ ═════ */
export function PFaq() {
  const { c } = useLanding();
  const f = c.faq;
  const ref = useReveal();
  return (
    <section className="pt-page" id="faq" ref={ref} aria-labelledby="pt-faq">
      <div className="pt-in">
        <Head path="faq" eyebrow={f.eyebrow} title={f.title} center />
        <div className="pt-faq rv">
          {f.items.map((it, i) => (
            <details key={it.q} open={i === 0}>
              <summary>{it.q}<i><Plus size={15} /></i></summary>
              <p>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═════ Contacto ═════ */
export function PContact() {
  const { c } = useLanding();
  const f = c.final;
  const ref = useReveal();
  return (
    <section className="pt-page pt-contact" id="contacto" ref={ref} aria-labelledby="pt-fin">
      <div className="pt-in">
        <div className="pt-path rv"><span className="pt-step-n">11 / 11</span><b>contacto</b><span>· demo</span></div>
        <h2 id="pt-fin" className="rv"><Hl text={f.title} /></h2>
        <p className="lead rv" style={{ margin: "18px auto 0" }}>{f.lead}</p>
        <div className="rv"><QuickDemo id="pedir-2" /></div>
        <p className="pt-full rv"><Link to="/solicitar-demo">{f.full} →</Link></p>
      </div>
    </section>
  );
}

