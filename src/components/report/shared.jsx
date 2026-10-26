import React, { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";
import es from "@/lib/landing/es";
import en from "@/lib/landing/en";
import pt from "@/lib/landing/pt";
import da from "@/lib/landing/da";

const CONTENT = { es, en, pt, da };

/** Contenido de la portada en el idioma activo (src/lib/landing/*.js). */
export function useLanding() {
  const { lang } = useI18n();
  return { c: CONTENT[lang] || es, lang };
}

/** Lo que va entre *asteriscos* sale en el verde de la marca. */
export function Hl({ text }) {
  return String(text)
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .map((p, i) => (p.startsWith("*") ? <span key={i} className="ac">{p.slice(1, -1)}</span> : <React.Fragment key={i}>{p}</React.Fragment>));
}

/** Aparición suave al entrar en pantalla (sin librerías). */
export function useAparece() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll(".aparece");
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("ve"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
  return ref;
}

export function Cabeza({ et, title, lead, centro = false, id }) {
  return (
    <div className={`aparece ${centro ? "centro" : ""}`}>
      <div className="et">{et}</div>
      <h2 id={id}><Hl text={title} /></h2>
      {lead && <p className="lead"><Hl text={lead} /></p>}
    </div>
  );
}

export function irA(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const LOCALES = { es: "es-ES", en: "en-GB", pt: "pt-PT", da: "da-DK" };
