import { useEffect, useRef, useState } from "react";

export const reduced = () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** true cuando el elemento entra en pantalla (una vez, o cada vez con once=false). */
export function useInView(opts = {}) {
  const { once = true, margin = "0px 0px -12% 0px", threshold = 0 } = opts;
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); if (once) io.disconnect(); }
      else if (!once) setOn(false);
    }, { rootMargin: margin, threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [once, margin, threshold]);
  return [ref, on];
}

/** Aparición con desenfoque de todos los .rv dentro del contenedor. */
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    root.querySelectorAll(".rv:not(.on)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
  return ref;
}

/** Cuenta de 0 al valor cuando active pasa a true. */
export function useCount(target, active, ms = 1600, from = 0) {
  const [v, setV] = useState(from);
  useEffect(() => {
    if (!active) return;
    if (reduced()) { setV(target); return; }
    let raf; const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / ms);
      const e = 1 - Math.pow(1 - p, 4);
      setV(from + (target - from) * e);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, ms, from]);
  return v;
}

/** Un contador que avanza cada `ms` mientras `active`; vuelve a 0 al llegar a `n`. */
export function useTick(n, ms, active = true) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), ms);
    return () => clearInterval(t);
  }, [n, ms, active]);
  return i;
}

/** Escribe una frase, la borra y pasa a la siguiente. */
export function useTyping(frases) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [borra, setBorra] = useState(false);
  useEffect(() => { setI(0); setN(0); setBorra(false); }, [frases]);
  useEffect(() => {
    const f = frases[i] || "";
    if (reduced()) { setN(f.length); return; }
    let t;
    if (!borra && n < f.length) t = setTimeout(() => setN(n + 1), 52);
    else if (!borra) t = setTimeout(() => setBorra(true), 2300);
    else if (n > 0) t = setTimeout(() => setN(n - 1), 24);
    else { setBorra(false); setI((i + 1) % frases.length); }
    return () => clearTimeout(t);
  }, [n, borra, i, frases]);
  return (frases[i] || "").slice(0, n);
}
