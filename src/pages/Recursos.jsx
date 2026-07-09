import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, HelpCircle, BookOpen, Video, ChevronDown, Calendar, Clock, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const FAQS = [
  {
    q: "¿Cómo se integra Next Reporting con Konsolidator?",
    a: "Nos conectamos directamente vía la API oficial de Konsolidator. Extraemos los datos ya consolidados cada 5 minutos y los mapeamos automáticamente a nuestro modelo dimensional. No requiere migración ni cambios en el flujo de consolidación existente.",
  },
  {
    q: "¿Es compatible con IFRS, PGC y otros marcos contables?",
    a: "Sí. Next Reporting es agnóstico al marco contable. Soportamos IFRS, PGC Normal, PGC PYMES y USGAAP. La lógica de reporting se adapta al plan de cuentas del cliente y a las estructuras jerárquicas definidas en la plataforma de consolidación.",
  },
  {
    q: "¿Cuánto tiempo tarda una implantación típica?",
    a: "De 3 a 5 días laborables para clientes con Konsolidator ya operativo. Incluye conexión API, mapeo del plan de cuentas, configuración de KPIs, formación al equipo y generación del primer board pack. El piloto de dos semanas está diseñado para ver valor real antes de contratar.",
  },
  {
    q: "¿Dónde se alojan los datos y qué garantías de seguridad ofrecéis?",
    a: "Los datos se alojan desde Konsolidator en Microsoft Azure dentro de la Unión Europea (Holanda), con cifrado en reposo (TDE) y en tránsito (TLS 1.2). Konsolidator dispone de certificaciones ISO 27001 y SOC 1/2/3 a través de Azure. Todos los accesos operan bajo 2FA obligatorio y registro completo de actividad.",
  },
  {
    q: "¿Podemos importar datos históricos desde Excel o desde otro ERP?",
    a: "Sí. La API universal admite fuentes ajenas a Konsolidator: Excel, CSV, exports de ERPs, u otras plataformas de consolidación. El proceso de carga se configura una única vez y a partir de ahí queda automatizado.",
  },
  {
    q: "¿En qué idiomas está disponible el producto y el soporte?",
    a: "Producto e interfaz en español, inglés, portugués y danés. Soporte comercial y técnico en los mismos idiomas, con equipo local en Madrid y partners en Copenhague para clientes IFRS del norte de Europa.",
  },
  {
    q: "¿Qué diferencia hay entre Next Reporting y una herramienta de BI genérica?",
    a: "Next Reporting está diseñado específicamente para reporting financiero multi-entidad. Incluye lógica de consolidación, ajustes contables, trazabilidad al asiento, marcos regulatorios (IFRS, PGC) y narrativa financiera generada por IA. Un BI genérico requeriría meses de configuración para llegar al mismo punto.",
  },
];

const BLOGS = [
  {
    tag: "Cierre continuo",
    date: "Julio 2026",
    readTime: "6 min",
    title: "Del cierre mensual al comité en 48 horas",
    excerpt: "Cómo tres CFO del corredor Ibérico redujeron el tiempo de análisis en un 84% sin ampliar el equipo. Metodología, riesgos y aprendizajes.",
  },
  {
    tag: "Compliance",
    date: "Junio 2026",
    readTime: "8 min",
    title: "IFRS 16 en grupos multi-entidad: qué controlar en el reporting",
    excerpt: "Los puntos críticos del tratamiento contable de arrendamientos en un entorno consolidado con múltiples marcos regulatorios simultáneos.",
  },
  {
    tag: "Inteligencia artificial",
    date: "Mayo 2026",
    readTime: "5 min",
    title: "La IA en el reporting financiero: dónde ayuda y dónde no",
    excerpt: "Casos de uso reales donde la IA acelera el análisis, y áreas donde el criterio humano sigue siendo insustituible. Con ejemplos de board packs.",
  },
  {
    tag: "Producto",
    date: "Abril 2026",
    readTime: "7 min",
    title: "Konsolidator + Next Reporting: el flujo completo",
    excerpt: "Recorrido técnico y operativo por la integración entre las dos plataformas. Del cierre local al board pack de dirección, paso a paso.",
  },
];

const WEBINARS = [
  {
    type: "En directo",
    date: "18 septiembre 2026 · 11:00 CET",
    duration: "60 min",
    title: "Del Excel al reporting continuo en grupos multi-entidad",
    speakers: "Con la participación del CFO de un grupo con 47 sociedades en ES/PT/MX",
    cta: "Ver webinar",
    vimeoId: "1203840597",
  },
  {
    type: "Grabado",
    date: "Junio 2026",
    duration: "45 min",
    title: "Board packs generados por IA: caso práctico con datos reales",
    speakers: "Demostración en directo del proceso completo desde consolidación a board pack final",
    cta: "Ver grabación",
  },
  {
    type: "Grabado",
    date: "Mayo 2026",
    duration: "60 min",
    title: "Reporting multi-cliente para consultoras financieras",
    speakers: "Cómo escalar la práctica sin escalar el equipo. Con partner IFRS de referencia en el norte de Europa",
    cta: "Ver grabación",
  },
  {
    type: "Grabado",
    date: "Abril 2026",
    duration: "40 min",
    title: "Trazabilidad y auditoría en entornos consolidados",
    speakers: "Del KPI del comité al asiento original en dos clics. Casos y buenas prácticas para Controllers",
    cta: "Ver grabación",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-indigo transition-colors"
      >
        <span className="font-semibold text-ink text-[16px] md:text-[17px]">{item.q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180 text-indigo" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-[15px] text-ink-soft/70 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Recursos() {
  const [activeSection, setActiveSection] = useState("preguntas");
  const [openFaq, setOpenFaq] = useState(0);
  const [activeVimeoId, setActiveVimeoId] = useState(null);

  const SECTIONS = [
    { id: "preguntas", label: "Preguntas frecuentes", icon: HelpCircle },
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "webinars", label: "Webinars", icon: Video },
  ];

  return (
    <div className="min-h-screen bg-cloud">
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/30 bg-white mb-6">
              <Sparkles size={12} className="text-indigo" />
              <span className="text-xs text-indigo font-semibold tracking-wide uppercase">
                Recursos
              </span>
            </div>

            <h1 className="font-extrabold text-4xl md:text-6xl text-ink leading-[1.05] tracking-tight mb-6">
              Todo lo que necesita saber sobre{" "}
              <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
                Next Reporting.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-ink-soft/70 leading-relaxed max-w-3xl">
              Documentación técnica, casos de uso, tendencias del sector y sesiones formativas. Materiales orientados a equipos financieros que evalúan Next Reporting en profundidad.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="mt-16 flex flex-col sm:flex-row gap-3 border-b border-gray-200">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`inline-flex items-center gap-2 px-6 py-4 font-semibold text-[15px] transition-all relative ${
                  activeSection === s.id
                    ? "text-indigo"
                    : "text-gray-500 hover:text-ink"
                }`}
              >
                <s.icon size={16} />
                {s.label}
                {activeSection === s.id && (
                  <motion.div
                    layoutId="recursos-tab-underline"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-indigo"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-12"
            >
              {/* Preguntas */}
              {activeSection === "preguntas" && (
                <div className="bg-white border border-mint/15 rounded-3xl p-6 md:p-10">
                  <div className="mb-8">
                    <h2 className="font-bold text-2xl md:text-3xl text-ink mb-3">
                      Preguntas frecuentes
                    </h2>
                    <p className="text-[15px] text-ink-soft/70 leading-relaxed">
                      Las dudas más habituales de CFOs, Controllers y equipos de IT antes de contratar Next Reporting.
                    </p>
                  </div>
                  <div>
                    {FAQS.map((item, i) => (
                      <FaqItem
                        key={i}
                        item={item}
                        isOpen={openFaq === i}
                        onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Blog */}
              {activeSection === "blog" && (
                <div>
                  <div className="mb-8">
                    <h2 className="font-bold text-2xl md:text-3xl text-ink mb-3">
                      Últimos artículos
                    </h2>
                    <p className="text-[15px] text-ink-soft/70 leading-relaxed">
                      Análisis y opinión de nuestro equipo sobre reporting financiero, consolidación y automatización en entornos multi-entidad.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {BLOGS.map((b, i) => (
                      <article
                        key={i}
                        className="bg-white border border-mint/15 rounded-2xl p-6 hover:border-indigo/40 hover:shadow-lg transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-mint/10 text-[10px] font-semibold text-indigo tracking-wider uppercase">
                            {b.tag}
                          </span>
                          <span className="text-[12px] text-gray-400">{b.date}</span>
                          <span className="inline-flex items-center gap-1 text-[12px] text-gray-400">
                            <Clock size={11} /> {b.readTime}
                          </span>
                        </div>
                        <h3 className="font-bold text-ink text-[18px] mb-3 leading-tight group-hover:text-indigo transition-colors">
                          {b.title}
                        </h3>
                        <p className="text-[14px] text-ink-soft/70 leading-relaxed mb-4">
                          {b.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-indigo">
                          Leer artículo <ArrowRight size={14} />
                        </span>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Webinars */}
              {activeSection === "webinars" && (
                <div>
                  <div className="mb-8">
                    <h2 className="font-bold text-2xl md:text-3xl text-ink mb-3">
                      Webinars y sesiones formativas
                    </h2>
                    <p className="text-[15px] text-ink-soft/70 leading-relaxed">
                      Sesiones en directo y grabadas con casos prácticos, demostraciones y participación de clientes reales.
                    </p>
                  </div>
                  <div className="space-y-5">
                    {WEBINARS.map((w, i) => (
                      <div
                        key={i}
                        className="bg-white border border-mint/15 rounded-2xl p-6 md:p-8 hover:border-indigo/40 hover:shadow-lg transition-all"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase ${
                                w.type === "En directo"
                                  ? "bg-rose/10 text-rose"
                                  : "bg-mint/10 text-indigo"
                              }`}
                            >
                              {w.type === "En directo" && (
                                <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
                              )}
                              {w.type}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[13px] text-ink-soft/70">
                              <Calendar size={13} /> {w.date}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[13px] text-ink-soft/70">
                              <Clock size={13} /> {w.duration}
                            </span>
                          </div>
                        </div>
                        <h3 className="font-bold text-ink text-[18px] md:text-[19px] mb-2 leading-tight">
                          {w.title}
                        </h3>
                        <p className="text-[14px] text-ink-soft/70 leading-relaxed mb-5">
                          {w.speakers}
                        </p>
                        <button
                          type="button"
                          onClick={() => w.vimeoId && setActiveVimeoId(w.vimeoId)}
                          disabled={!w.vimeoId}
                          className="inline-flex items-center gap-2 bg-ink hover:bg-indigo text-white font-semibold text-[13px] px-5 py-2.5 rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-ink"
                        >
                          {w.cta} <ArrowRight size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* CTA final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 bg-ink rounded-3xl p-10 md:p-16 text-center border border-mint/20 shadow-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/30 bg-mint/10 mb-6">
              <span className="text-[11px] text-mint font-semibold tracking-[0.15em] uppercase">
                Demo personalizada
              </span>
            </div>
            <h2 className="font-extrabold text-3xl md:text-4xl text-white mb-4 tracking-tight leading-tight">
              ¿Prefiere una demostración con nuestro equipo?
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Una sesión de 30 minutos adaptada al perfil de su organización, con sus datos reales.
            </p>
            <Link
              to="/solicitar-demo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-white text-ink font-semibold text-[15px] px-7 py-3.5 rounded-lg hover:bg-mint hover:text-ink transition-all shadow-lg"
            >
              Solicitar demo →
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />

      {/* Vimeo Modal */}
      <AnimatePresence>
        {activeVimeoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVimeoId(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveVimeoId(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>
              <iframe
                src={`https://player.vimeo.com/video/${activeVimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Webinar Next Reporting"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}