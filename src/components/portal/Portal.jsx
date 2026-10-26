import React, { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown, Sun, Moon, ArrowDown, ArrowUp, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { useI18n } from "@/lib/i18n";
import { useLanding, irA } from "@/components/report/shared";
import { reduced } from "./hooks";

export const SIGNIN_URL = "https://nextreport.atebiz.com/";
/** Los pasos del recorrido, en orden (son los id de cada sección). */
export const STEPS = ["inicio", "cierre", "datos", "auto", "ahorro", "monedas", "pantallas", "planes", "seguridad", "faq", "contacto"];
const NAV = ["cierre", "datos", "auto", "ahorro", "pantallas", "planes", "faq"];
const UI = {
  es: { plans: "Ver planes", band1: ["Deja de montar el cierre *a mano.*", "En 30 minutos te enseñamos cómo queda el reporting de un grupo como el tuyo."], band2: ["Así lo verá tu dirección *el día 5.*", "Informes, KPIs y presentaciones listos, del consolidado al asiento. Pide una demo y te lo enseñamos."], start: "Empieza el recorrido", step: "Paso", of: "de", next: "Siguiente", top: "Volver arriba", light: "Modo claro", dark: "Modo oscuro" },
  en: { plans: "See plans", band1: ["Stop building the close *by hand.*", "In 30 minutes we show you what reporting looks like for a group like yours."], band2: ["What your board sees *on day 5.*", "Reports, KPIs and presentations ready, from consolidation to journal entry. Book a demo and we'll show you."], start: "Take the tour", step: "Step", of: "of", next: "Next", top: "Back to top", light: "Light mode", dark: "Dark mode" },
  pt: { plans: "Ver planos", band1: ["Deixe de montar o fecho *à mão.*", "Em 30 minutos mostramos como fica o reporting de um grupo como o seu."], band2: ["É assim que a administração o vê *no dia 5.*", "Relatórios, KPIs e apresentações prontos, do consolidado ao lançamento. Peça uma demo e mostramos."], start: "Comece o percurso", step: "Passo", of: "de", next: "Seguinte", top: "Voltar ao topo", light: "Modo claro", dark: "Modo escuro" },
  da: { plans: "Se planer", band1: ["Stop med at bygge lukningen *i hånden.*", "På 30 minutter viser vi, hvordan rapporteringen ser ud for en koncern som jeres."], band2: ["Sådan ser ledelsen det *på dag 5.*", "Rapporter, KPI'er og præsentationer klar, fra konsolidering til postering. Book en demo, så viser vi det."], start: "Tag rundturen", step: "Trin", of: "af", next: "Næste", top: "Til toppen", light: "Lyst tema", dark: "Mørkt tema" },
};
export const pad = (n) => String(n).padStart(2, "0");

/** Todas las llamadas a la acción llevan aquí: baja al formulario final y deja el cursor en el email. */
export function goDemo() {
  irA("contacto");
  setTimeout(() => document.querySelector("#pedir-2 input")?.focus({ preventScroll: true }), 900);
}

/** Nombre de cada paso, sacado de la navegación del portal en el idioma activo. */
export function useSteps() {
  const { c, lang } = useLanding();
  const names = Object.fromEntries(c.portal.groups.flatMap((g) => g.items.map(([id, l]) => [id, l])));
  return { names, ui: UI[lang] || UI.en };
}

function Lang() {
  const { lang, setLang, languages } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div className="pt-lang" ref={ref}>
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Idioma">
        <Globe size={14} /> <span className="mono">{lang.toUpperCase()}</span> <ChevronDown size={12} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, y: -6, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: .18 }}>
            {languages.map((l) => (
              <li key={l.code}>
                <button type="button" className={l.code === lang ? "on" : ""} onClick={() => { setLang(l.code); setOpen(false); }}>
                  <span className="mono">{l.code.toUpperCase()}</span> {l.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

function readTheme() {
  try { return localStorage.getItem("nr-theme") === "dark" ? "dark" : "light"; } catch { return "light"; }
}

/** Interruptor de estética con un barrido circular desde el botón (si el navegador lo permite). */
function ThemeToggle({ theme, setTheme, ui }) {
  const flip = (e) => {
    const next = theme === "dark" ? "light" : "dark";
    const save = () => { flushSync(() => setTheme(next)); try { localStorage.setItem("nr-theme", next); } catch { /* sin almacenamiento */ } };
    if (!document.startViewTransition || reduced()) return save();
    const x = e.clientX, y = e.clientY;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const t = document.startViewTransition(save);
    t.ready.then(() => {
      document.documentElement.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(.65,0,.35,1)", pseudoElement: "::view-transition-new(root)" });
    }).catch(() => {});
  };
  return (
    <button type="button" className="pt-icobtn" onClick={flip} aria-label={theme === "dark" ? ui.light : ui.dark} title={theme === "dark" ? ui.light : ui.dark}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={theme} initial={{ y: 18, rotate: -90, opacity: 0 }} animate={{ y: 0, rotate: 0, opacity: 1 }} exit={{ y: -18, rotate: 90, opacity: 0 }} transition={{ duration: .3 }} style={{ display: "grid" }}>
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

/** Conector entre dos pasos: un cable que se llena al bajar, con la siguiente parada. */
export function NextStep({ to }) {
  const { names } = useSteps();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const i = STEPS.indexOf(to);
  return (
    <div className="pt-link-next" ref={ref} aria-hidden={false}>
      <span className="wire"><motion.i style={{ scaleY: fill }} /><em /></span>
      <motion.button type="button" onClick={() => irA(to)} style={{ opacity: useTransform(scrollYProgress, [0.2, 0.7], [0, 1]), y: useTransform(scrollYProgress, [0.2, 0.8], [14, 0]) }}>
        <i>{pad(i + 1)}</i>{names[to]} <span>↓</span>
      </motion.button>
    </div>
  );
}

/** El armazón: fondo vivo, barra superior flotante, dock del recorrido y contenido. */
export default function Portal({ children, footer }) {
  const { c } = useLanding();
  const { names, ui } = useSteps();
  const [theme, setTheme] = useState(readTheme);
  const [act, setAct] = useState("inicio");
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);
  const [hide, setHide] = useState(false);
  const lastY = useRef(0);

  // La barra se esconde al bajar y vuelve en cuanto subes
  useEffect(() => {
    const on = () => {
      const y = scrollY, dy = y - lastY.current;
      if (Math.abs(dy) > 6) { setHide(dy > 0 && y > 240); lastY.current = y; }
      if (y < 80) setHide(false);
    };
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  const cursor = useRef(null);
  const { scrollYProgress } = useScroll();
  const prog = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  // Paso que está en pantalla: el último cuya parte de arriba ya pasó el centro
  useEffect(() => {
    let raf = 0;
    const run = () => {
      raf = 0;
      const line = innerHeight * 0.45;
      let cur = STEPS[0];
      for (const id of STEPS) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= line) cur = id; }
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = STEPS[STEPS.length - 1];
      setAct(cur);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(run); };
    run();
    const iv = setInterval(run, 700);
    addEventListener("scroll", on, { passive: true });
    return () => { removeEventListener("scroll", on); cancelAnimationFrame(raf); clearInterval(iv); };
  }, [c]);

  // Cada pantalla "llega": sube, crece y se enciende a medida que entra
  useEffect(() => {
    if (reduced()) return;
    let raf = 0;
    const run = () => {
      raf = 0;
      const vh = innerHeight;
      setSmall(scrollY > 60);
      document.querySelectorAll(".pt-page:not(.pt-hero) > .pt-in").forEach((el) => {
        const top = el.parentElement.getBoundingClientRect().top;
        const p = Math.min(1, Math.max(0, (vh - top) / (vh * 0.6)));
        const e = 1 - Math.pow(1 - p, 3);
        if (e >= 1) { el.style.transform = ""; el.style.opacity = ""; return; }
        el.style.transform = `translate3d(0, ${(1 - e) * 70}px, 0) scale(${0.93 + 0.07 * e})`;
        el.style.opacity = String(0.2 + 0.8 * e);
      });
      // Títulos: el color de la palabra clave se rellena entre el 88 % y el 50 % de la pantalla
      document.querySelectorAll(".pt-page h2").forEach((el) => {
        const t = el.getBoundingClientRect().top;
        const f = Math.min(1, Math.max(0, (vh * 0.88 - t) / (vh * 0.38)));
        el.style.setProperty("--fill", f.toFixed(3));
      });
      // Foco: lo que pasa por el centro de la pantalla se enciende, lo demás se apaga un poco
      const lo = vh * 0.28, hi = vh * 0.72, fall = vh * 0.32;
      document.querySelectorAll(".pt-main .pt-card, .pt-tr, .pt-q, .pt-page, .pt-faq details").forEach((el) => {
        if (el.closest(".pt-hero")) return;
        const r = el.getBoundingClientRect();
        const d = Math.max(0, r.top - hi, lo - r.bottom);
        let f = 1 - Math.min(1, d / fall);
        f = f * f * (3 - 2 * f);
        el.style.setProperty("--f", f.toFixed(3));
      });
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(run); };
    run();
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    return () => { removeEventListener("scroll", on); removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, [c]);

  // Halo que sigue al ratón + foco de luz en cada tarjeta
  useEffect(() => {
    const mv = (e) => {
      if (cursor.current) cursor.current.style.transform = `translate(${e.clientX - 260}px, ${e.clientY - 260}px)`;
      const card = e.target.closest?.(".pt-card");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };
    addEventListener("pointermove", mv, { passive: true });
    return () => removeEventListener("pointermove", mv);
  }, []);

  const go = (id) => { setOpen(false); irA(id); };
  const i = STEPS.indexOf(act);
  const last = i === STEPS.length - 1;
  const nextId = STEPS[Math.min(i + 1, STEPS.length - 1)];
  const R = 17, C = 2 * Math.PI * R;
  const beams = [8, 23, 41, 57, 72, 88];

  return (
    <div className="pt" data-theme={theme}>
      <div className="pt-bg" aria-hidden>
        <span className="pt-halo a" /><span className="pt-halo b" /><span className="pt-halo c" />
        {beams.map((l, k) => <span key={l} className="pt-beam" style={{ left: `${l}%`, animationDuration: `${7 + (k % 3) * 2.5}s`, animationDelay: `${k * 1.3}s` }} />)}
      </div>
      <div className="pt-cursor" ref={cursor} aria-hidden />
      <motion.div className="pt-progress" style={{ scaleX: prog }} aria-hidden />

      <header className={`pt-nav ${small ? "small" : ""} ${hide && !open ? "hide" : ""}`}>
        <motion.div className="pt-nav-in" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8, ease: [.16, 1, .3, 1] }}>
          <a href="#inicio" className="pt-brand" onClick={(e) => { e.preventDefault(); go("inicio"); }} aria-label="Next Reporting">
            <Logo />
          </a>
          <nav className="pt-links" aria-label="Principal">
            {NAV.map((id) => (
              <a key={id} href={`#${id}`} className={act === id ? "on" : ""} onClick={(e) => { e.preventDefault(); go(id); }} aria-current={act === id ? "location" : undefined}>
                {act === id && <motion.span layoutId="pt-nav-pill" className="pill" transition={{ type: "spring", stiffness: 420, damping: 36 }} />}
                <span>{names[id]}</span>
              </a>
            ))}
          </nav>
          <div className="pt-nav-r">
            <span className="hide-s"><ThemeToggle theme={theme} setTheme={setTheme} ui={ui} /></span>
            <span className="hide-s"><Lang /></span>
            <a className="btn ghost sm hide-s" href={SIGNIN_URL} target="_blank" rel="noopener noreferrer">{c.nav.signIn}</a>
            <button type="button" className="btn sm pt-navcta" onClick={() => { setOpen(false); goDemo(); }}>{c.nav.demo} <ArrowRight size={14} className="fl" /></button>
            <button className="pt-icobtn pt-hamb" type="button" aria-label="Menú" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </motion.div>
        <AnimatePresence>
          {open && (
            <motion.div className="pt-menu" initial={{ opacity: 0, y: -10, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .22 }}>
              {STEPS.map((id, k) => (
                <a key={id} href={`#${id}`} className={act === id ? "on" : ""} onClick={(e) => { e.preventDefault(); go(id); }}><i>{pad(k + 1)}</i>{names[id]}</a>
              ))}
              <div className="row">
                <ThemeToggle theme={theme} setTheme={setTheme} ui={ui} />
                <Lang />
                <a className="btn ghost" href={SIGNIN_URL} target="_blank" rel="noopener noreferrer">{c.nav.signIn}</a>
              </div>
              <div className="row">
                <button type="button" className="btn lg" onClick={() => { setOpen(false); goDemo(); }}>{c.nav.demo} <ArrowRight size={16} className="fl" /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-main">{children}</main>
      <div className="pt-foot">{footer}</div>

      <div className="pt-guide-wrap">
        <AnimatePresence>
          {(i > 0 || small) && (
            <motion.nav className="pt-guide" aria-label={`${ui.step} ${i + 1} ${ui.of} ${STEPS.length}`}
              initial={{ y: 90, opacity: 0, scale: .9 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 90, opacity: 0 }} transition={{ type: "spring", stiffness: 260, damping: 26 }}>
              <span className="pt-ring">
                <svg viewBox="0 0 40 40" aria-hidden>
                  <circle cx="20" cy="20" r={R} fill="none" stroke="var(--line2)" strokeWidth="3" />
                  <motion.circle cx="20" cy="20" r={R} fill="none" stroke="url(#pt-ringg)" strokeWidth="3" strokeLinecap="round" strokeDasharray={C}
                    animate={{ strokeDashoffset: C * (1 - (i + 1) / STEPS.length) }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
                  <defs><linearGradient id="pt-ringg"><stop offset="0" stopColor="#10b981" /><stop offset="1" stopColor="#a3e635" /></linearGradient></defs>
                </svg>
                <b>{pad(i + 1)}</b>
              </span>
              <span className="pt-guide-t">
                <small>{ui.step} {i + 1} {ui.of} {STEPS.length}</small>
                <motion.b key={act} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .25 }}>{names[act]}</motion.b>
              </span>
              <span className="pt-gdots">
                {STEPS.map((id, k) => <button key={id} type="button" aria-label={names[id]} title={names[id]} className={k === i ? "on" : k < i ? "done" : ""} onClick={() => go(id)} />)}
              </span>
              {last ? (
                <button type="button" className="btn sm ghost" onClick={() => go("inicio")}><ArrowUp size={14} /> <span className="lbl">{ui.top}</span></button>
              ) : (
                <button type="button" className="btn sm ghost" onClick={() => go(nextId)} title={`${ui.next}: ${names[nextId]}`}><span className="lbl">{ui.next}: {names[nextId]}</span> <span className="bob"><ArrowDown size={14} /></span></button>
              )}
              {!last && <button type="button" className="btn sm pt-dockcta" onClick={goDemo}>{c.nav.demo} <ArrowRight size={14} className="fl" /></button>}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
