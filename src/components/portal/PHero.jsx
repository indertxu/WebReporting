import React, { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Check, AlertTriangle, RefreshCw } from "lucide-react";
import { useLanding, irA, LOCALES } from "@/components/report/shared";
import QuickDemo from "@/components/report/QuickDemo";
import { useCount, useInView, useTick, useTyping } from "./hooks";

// Ingresos mensuales del grupo de ejemplo (miles de €): este año y el anterior
const NOW = [4820, 5110, 5390, 5240, 5680, 5920, 5530, 5070, 6010, 6280, 6450, 6890];
const PRI = [4510, 4690, 4980, 4890, 5160, 5390, 5120, 4700, 5480, 5650, 5830, 6100];
const SPARK = [
  [3, 4, 3.6, 5, 4.8, 6, 5.6, 6.8, 7.2, 7, 8.1, 8.6],
  [2, 2.4, 2.2, 3, 3.6, 3.3, 4.2, 4.6, 4.4, 5.2, 5.8, 6.2],
  [3.4, 3.3, 3.1, 3.2, 2.9, 2.8, 2.9, 2.7, 2.6, 2.5, 2.4, 2.34],
];
const W = 1000, H = 220, PAD = 8;

function path(data, min, max, close = false) {
  const x = (i) => PAD + (i * (W - PAD * 2)) / (data.length - 1);
  const y = (v) => H - PAD - ((v - min) / (max - min)) * (H - PAD * 2);
  let d = `M${x(0)},${y(data[0])}`;
  for (let i = 1; i < data.length; i++) {
    const cx = (x(i - 1) + x(i)) / 2;
    d += ` C${cx},${y(data[i - 1])} ${cx},${y(data[i])} ${x(i)},${y(data[i])}`;
  }
  if (close) d += ` L${x(data.length - 1)},${H} L${x(0)},${H} Z`;
  return { d, x, y };
}

function Spark({ data, on, tone }) {
  const min = Math.min(...data), max = Math.max(...data);
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * 300},${36 - ((v - min) / (max - min)) * 32}`).join(" ");
  const col = tone === "down" ? "var(--warn)" : "var(--mint)";
  return (
    <svg viewBox="0 0 300 38" preserveAspectRatio="none" aria-hidden>
      <motion.polyline points={pts} fill="none" style={{ stroke: col }} strokeWidth="1.6"
        initial={{ pathLength: 0 }} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: 1.6, ease: "easeOut", delay: .5 }} />
    </svg>
  );
}

function Kpi({ k, i, on, lang }) {
  const v = useCount(k.value, on, 1800 + i * 200);
  const loc = LOCALES[lang] || "es-ES";
  const txt = k.decimals
    ? new Intl.NumberFormat(loc, { minimumFractionDigits: k.decimals, maximumFractionDigits: k.decimals }).format(v) + "×"
    : new Intl.NumberFormat(loc, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(v);
  return (
    <motion.div className="pt-card pt-kpi" initial={{ opacity: 0, y: 24 }} animate={on ? { opacity: 1, y: 0 } : {}} transition={{ delay: .25 + i * .1, duration: .7, ease: [.16, 1, .3, 1] }}>
      <div className="l"><span>{k.label}</span><span>YTD</span></div>
      <b className="v mono">{txt}</b>
      <span className={`d ${k.tone}`}>{k.delta}</span>
      <Spark data={SPARK[i % 3]} on={on} tone={k.tone} />
    </motion.div>
  );
}

function Chart({ on, title, lang }) {
  const min = 4200, max = 7100;
  const a = useMemo(() => path(NOW, min, max), []);
  const b = useMemo(() => path(PRI, min, max), []);
  const area = useMemo(() => path(NOW, min, max, true), []);
  const [hov, setHov] = useState(null);
  const box = useRef(null);
  const loc = LOCALES[lang] || "es-ES";
  const months = useMemo(() => Array.from({ length: 12 }, (_, i) => new Intl.DateTimeFormat(loc, { month: "short" }).format(new Date(2025, i, 1))), [loc]);
  const fmt = (v) => new Intl.NumberFormat(loc, { style: "currency", currency: "EUR", notation: "compact", maximumFractionDigits: 2 }).format(v * 1000);
  const move = (e) => {
    const r = box.current.getBoundingClientRect();
    const i = Math.round(((e.clientX - r.left) / r.width) * 11);
    setHov(Math.max(0, Math.min(11, i)));
  };
  const hi = hov ?? 11;
  return (
    <motion.div className="pt-card pt-chart" initial={{ opacity: 0, y: 24 }} animate={on ? { opacity: 1, y: 0 } : {}} transition={{ delay: .55, duration: .8, ease: [.16, 1, .3, 1] }}>
      <div className="pt-chart-h">
        <b>{title}</b>
        <span className="pt-chip mono">{months[hi]} · {fmt(NOW[hi])}</span>
        <div className="lg"><span><i style={{ background: "var(--mint)" }} />2025</span><span><i style={{ background: "var(--chartprior)" }} />2024</span></div>
      </div>
      <div ref={box} onPointerMove={move} onPointerLeave={() => setHov(null)} style={{ position: "relative", touchAction: "pan-y" }}>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="pt-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#10b981" stopOpacity=".42" /><stop offset="1" stopColor="#10b981" stopOpacity="0" /></linearGradient>
            <linearGradient id="pt-line" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#10b981" /><stop offset=".6" stopColor="#34d399" /><stop offset="1" stopColor="#a3e635" /></linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((f) => <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} style={{ stroke: "var(--chartgrid)" }} />)}
          <motion.path d={area.d} fill="url(#pt-area)" initial={{ opacity: 0 }} animate={{ opacity: on ? 1 : 0 }} transition={{ delay: 1.6, duration: 1 }} />
          <motion.path d={b.d} fill="none" style={{ stroke: "var(--chartprior)" }} strokeWidth="1.5" strokeDasharray="4 5"
            initial={{ pathLength: 0 }} animate={{ pathLength: on ? 1 : 0 }} transition={{ delay: .7, duration: 1.8, ease: "easeInOut" }} />
          <motion.path d={a.d} fill="none" stroke="url(#pt-line)" strokeWidth="2.6" style={{ filter: "drop-shadow(0 0 6px rgba(52,211,153,.6))" }}
            initial={{ pathLength: 0 }} animate={{ pathLength: on ? 1 : 0 }} transition={{ delay: .8, duration: 2, ease: "easeInOut" }} />
          <line x1={a.x(hi)} x2={a.x(hi)} y1="0" y2={H} style={{ stroke: "var(--line3)" }} strokeDasharray="2 4" />
        </svg>
        <motion.span className="pt-dotlive" animate={{ left: `${(a.x(hi) / W) * 100}%`, top: `${(a.y(NOW[hi]) / H) * 100}%`, opacity: on ? 1 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 30, opacity: { delay: 2.6 } }} />
      </div>
      <div className="pt-months mono">{months.map((m, i) => <span key={i} className={i === hi ? "on" : ""}>{m}</span>)}</div>
    </motion.div>
  );
}

const TONES = [
  { I: Check, bg: "var(--tint2)", c: "var(--mint)" },
  { I: RefreshCw, bg: "rgba(56,189,248,.16)", c: "#0ea5e9" },
  { I: Check, bg: "var(--tint2)", c: "var(--mint)" },
  { I: AlertTriangle, bg: "var(--warnbg)", c: "var(--warn)" },
];

export default function PHero() {
  const { c, lang } = useLanding();
  const h = c.hero, p = c.portal;
  const typed = useTyping(h.typing);
  const [dash, on] = useInView({ margin: "0px" });
  const t = useTick(p.toasts.length, 3200, on);
  const words = h.title.split(" ");
  // El tablero llega inclinado y se endereza al bajar
  const tilt = useRef(null);
  const { scrollYProgress } = useScroll({ target: tilt, offset: ["start end", "start 25%"] });
  const sp = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const rotateX = useTransform(sp, [0, 1], [24, 0]);
  const scale = useTransform(sp, [0, 1], [0.9, 1]);
  const shown = [p.toasts[t], p.toasts[(t + p.toasts.length - 1) % p.toasts.length]];

  return (
    <section className="pt-page pt-hero" id="inicio" aria-labelledby="pt-h1">
      <div className="pt-in">
        <motion.div className="pt-hello" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <span className="tag">Next Reporting</span><span>{h.eyebrow}</span>
        </motion.div>
        <h1 id="pt-h1">
          {words.map((w, i) => (
            <span className="w" key={i + w}>
              <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: .1 + i * .07, duration: .8, ease: [.16, 1, .3, 1] }}>{w}</motion.span>
            </span>
          ))}
          <span className="tecla grad" aria-label={h.typing[0]}>{typed}<span className="pt-cursor-tx" aria-hidden /></span>
        </h1>
        <motion.p className="sub" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: .7 }}>
          <b>{h.subLead}</b> {h.sub}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65, duration: .7 }}>
          <QuickDemo id="pedir" />
          <div className="pt-ctas">
            <button type="button" className="btn ghost" onClick={() => irA("demo")}>▶ {h.invite}</button>
            <a href="#planes" className="pt-textlink" onClick={(e) => { e.preventDefault(); irA("planes"); }}>{h.noteLink} →</a>
          </div>
          <p className="pt-note">{h.note}</p>
        </motion.div>

        <div className="pt-dashwrap" ref={dash}>
          <motion.div className="pt-dash" ref={tilt} style={{ rotateX, scale, transformOrigin: "50% 0%" }}>
            {c.kpis.map((k, i) => <Kpi key={k.label} k={k} i={i} on={on} lang={lang} />)}
            <Chart on={on} title={p.heroChart} lang={lang} />
          </motion.div>
          <div className="pt-toasts" aria-live="polite">
            <AnimatePresence initial={false} mode="popLayout">
              {shown.map((tx, j) => {
                const idx = p.toasts.indexOf(tx);
                const T = TONES[idx % TONES.length];
                return (
                  <motion.div layout key={tx} className="pt-toast" initial={{ opacity: 0, x: 40, scale: .95 }} animate={{ opacity: j === 0 ? 1 : .55, x: 0, scale: j === 0 ? 1 : .96 }} exit={{ opacity: 0, x: 30 }} transition={{ type: "spring", stiffness: 260, damping: 26 }}>
                    <i style={{ background: T.bg, color: T.c }}><T.I size={13} strokeWidth={3} /></i>{tx}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="pt-scroll"><span />{p.scroll}</div>
      </div>
    </section>
  );
}
