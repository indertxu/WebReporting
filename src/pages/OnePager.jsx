import React from "react";
import { Link } from "react-router-dom";
import { BarChart3, GitMerge, SlidersVertical, FileText, Sparkles, Plug, ArrowRight, CheckCircle2 } from "lucide-react";

const FEATURES = [
  { icon: BarChart3, title: "Dashboards", desc: "KPIs en tiempo real: Revenue, EBITDA, Net Result y cualquier indicador personalizado." },
  { icon: GitMerge, title: "Drill-downs", desc: "Del grupo a cada sociedad en un clic. Sin exportaciones ni reprocesos." },
  { icon: SlidersVertical, title: "KPI Builder", desc: "Constructor visual de KPIs sin código. Ratios, márgenes y métricas operativas." },
  { icon: FileText, title: "Memorias automáticas", desc: "Comentarios narrativos generados por IA sobre cada variación de KPI." },
  { icon: Sparkles, title: "IA en cada análisis", desc: "Detección automática de desviaciones y alertas inteligentes por umbral." },
  { icon: Plug, title: "API & integraciones", desc: "Conexión nativa con Konsolidator y API universal para cualquier fuente." },
];

const STEPS = [
  { n: "01", title: "Conecta tus fuentes", desc: "Vincula ERPs, Excel/CSV o la API universal. Next Reporting normaliza y mapea automáticamente." },
  { n: "02", title: "Importa datos consolidados", desc: "Conecta Konsolidator con un clic. Los datos ya procesados se estructuran para análisis." },
  { n: "03", title: "La IA analiza y comenta", desc: "Detección de desviaciones, comentarios narrativos sobre variaciones y alertas inteligentes." },
  { n: "04", title: "Reporting ejecutivo listo", desc: "Dashboards en tiempo real, reporting narrativo y exportación a PDF, Excel y Word." },
];

const STATS = [
  { n: "350+", l: "Entidades por grupo" },
  { n: "16", l: "Países cubiertos" },
  { n: "−84%", l: "Tiempo a insight" },
  { n: "100%", l: "Exportable" },
];

export default function OnePager() {
  return (
    <div className="min-h-screen bg-cloud text-ink">
      {/* Print header */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Brand */}
        <div className="flex items-center justify-between mb-12 pb-8 border-b border-mint/15">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo to-mint flex items-center justify-center text-white font-black text-sm">
              N
            </div>
            <div>
              <div className="font-extrabold text-lg tracking-tight">Next Reporting</div>
              <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-gray-400">by Next Finance</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[10px] text-gray-400 tracking-wider">One-Pager · 2026</div>
            <div className="font-mono text-[10px] text-indigo tracking-wider">next-reporting.app</div>
          </div>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/30 bg-mint/5 mb-6">
            <Sparkles size={11} className="text-indigo" />
            <span className="text-xs text-indigo font-semibold tracking-wide">AI Powered</span>
          </div>
          <h1 className="font-extrabold text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-5">
            Consolidación lista.{" "}
            <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
              Ahora, el insight.
            </span>
          </h1>
          <p className="text-lg text-ink-soft/70 leading-relaxed max-w-2xl">
            Next Reporting toma los datos ya consolidados y los convierte en KPIs
            vivos, análisis por dimensión y board packs listos para dirección —
            con IA integrada, en tiempo real.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {STATS.map((s, i) => (
            <div key={i} className="bg-white border border-mint/15 rounded-xl p-5 text-center">
              <div className="text-2xl font-extrabold text-ink tracking-tight">{s.n}</div>
              <div className="font-mono text-[9px] tracking-widest uppercase text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="font-bold text-xl text-ink mb-6">Todo lo que necesita tu equipo financiero</h2>
          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-white border border-mint/15 rounded-xl p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-mint/10 flex items-center justify-center">
                    <f.icon size={14} className="text-indigo" />
                  </div>
                  <span className="font-bold text-ink text-[15px]">{f.title}</span>
                </div>
                <p className="text-[13px] text-ink-soft/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-12">
          <h2 className="font-bold text-xl text-ink mb-6">Del dato bruto al reporting ejecutivo</h2>
          <div className="space-y-4">
            {STEPS.map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-lg bg-ink text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {s.n}
                </div>
                <div className="pt-1">
                  <div className="font-bold text-ink text-[15px] mb-0.5">{s.title}</div>
                  <div className="text-[13px] text-ink-soft/60 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Konsolidator */}
        <div className="mb-12 bg-white border border-mint/15 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2">
              <span className="text-ink font-bold text-sm">Next Reporting</span>
            </div>
            <span className="text-gray-300 text-xl">+</span>
            <div className="bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2">
              <span className="text-ink font-bold text-sm">konsolidator.</span>
            </div>
          </div>
          <p className="text-[14px] text-ink-soft/60 leading-relaxed">
            <span className="font-semibold text-ink">Konsolidator consolida.</span>{" "}
            <span className="font-semibold text-indigo">Nosotros analizamos.</span>{" "}
            Next Reporting es la capa de reporting e IA sobre tu herramienta de
            consolidación. Compatible con PGC Normal, PGC PYMES e IFRS.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-indigo to-mint rounded-2xl p-8 text-center text-white">
          <h2 className="font-extrabold text-2xl mb-3">Solicita tu demo</h2>
          <p className="text-white/80 text-[15px] mb-6 max-w-md mx-auto">
            30 minutos. Sin compromiso. Con tus datos reales.
          </p>
          <Link
            to="/#demo"
            className="inline-flex items-center gap-2 bg-white text-indigo font-semibold text-[15px] px-6 py-3 rounded-xl hover:bg-white/90 transition-all"
          >
            Solicitar demo
            <ArrowRight size={16} />
          </Link>
          <div className="font-mono text-[10px] text-white/50 tracking-widest uppercase mt-5">
            Madrid · Copenhague · ES · PT · EN · DA
          </div>
        </div>
      </div>
    </div>
  );
}