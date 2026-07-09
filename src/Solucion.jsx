import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, GitMerge, SlidersVertical, FileText, Sparkles, Plug, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const FEATURES = [
  { icon: BarChart3, title: "Dashboards en tiempo real", desc: "KPIs vivos con Revenue, EBITDA, Net Result y cualquier indicador personalizado. Datos actualizados cada 5 minutos desde Konsolidator." },
  { icon: GitMerge, title: "Drill-downs instantáneos", desc: "Del grupo consolidado a cada sociedad en un solo clic. Sin exportaciones, sin reprocesos, sin hojas intermedias." },
  { icon: SlidersVertical, title: "KPI Builder visual", desc: "Constructor visual de KPIs sin código. Crea ratios, márgenes y métricas operativas con arrastrar y soltar." },
  { icon: FileText, title: "Memorias automáticas", desc: "Comentarios narrativos generados por IA sobre cada variación de KPI. Board packs listos en minutos, no días." },
  { icon: Sparkles, title: "IA en cada análisis", desc: "Detección automática de desviaciones y alertas inteligentes por umbral. La IA lee tus dashboards y explica las variaciones." },
  { icon: Plug, title: "API & integraciones", desc: "Conexión nativa con Konsolidator y API universal para cualquier fuente de datos. Compatible con PGC, IFRS y US GAAP." },
];

const BENEFITS = [
  "Del cierre al insight en 2.5 días en vez de 14",
  "Board packs listos en la misma tarde",
  "Trazabilidad completa: del KPI al asiento original",
  "Multi-idioma: ES · PT · EN · DA",
  "Multi-moneda y multi-entidad de serie",
  "Sin instalación: 100% cloud, acceso desde cualquier dispositivo",
];

export default function Solucion() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-cloud">
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back link */}
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
                La solución
              </span>
            </div>

            <h1 className="font-extrabold text-4xl md:text-6xl text-ink leading-[1.05] tracking-tight mb-6">
              Consolidación lista.{" "}
              <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
                Ahora, el insight.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-ink-soft/70 leading-relaxed max-w-3xl">
              Next Reporting es la capa de reporting e IA que se conecta sobre tu plataforma de consolidación. Convertimos datos ya consolidados en KPIs vivos, análisis por dimensión y board packs listos para dirección — con IA integrada, en tiempo real.
            </p>
          </motion.div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="font-bold text-2xl md:text-3xl text-ink mb-8">
              Todo lo que necesita tu equipo financiero
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="bg-white border border-mint/15 rounded-2xl p-6 hover:border-indigo/40 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center">
                      <f.icon size={18} className="text-indigo" />
                    </div>
                    <h3 className="font-bold text-ink text-[17px]">{f.title}</h3>
                  </div>
                  <p className="text-[14px] text-ink-soft/70 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 bg-white border border-mint/15 rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-bold text-2xl md:text-3xl text-ink mb-8">
              Por qué elegir Next Reporting
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BENEFITS.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-mint shrink-0 mt-0.5" />
                  <span className="text-ink-soft text-[15px] leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
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
              Solicite una demostración con nuestro equipo
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Una sesión de 30 minutos adaptada al perfil de su organización. Sin compromiso y con sus datos reales.
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
    </div>
  );
}