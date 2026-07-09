import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, LineChart, GitMerge, Users, Zap, Shield, Layers, Clock, TrendingUp, FileCheck, Bell, Database, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const ROLES = [
  {
    id: "cfo",
    label: "Para el CFO",
    tagline: "Del comité al forecast, en tiempo real.",
    intro: "Next Reporting da al CFO una visión consolidada del grupo actualizada al minuto, con KPIs, drill-downs y narrativa generada por IA. Sin depender de ciclos manuales, sin esperar a que el equipo reconstruya la hoja de cálculo.",
    metrics: [
      { n: "−84%", l: "Reducción del tiempo de análisis" },
      { n: "24/7", l: "Datos consolidados vivos" },
      { n: "0", l: "Reconciliaciones manuales" },
    ],
    capabilities: [
      { icon: LineChart, title: "Dashboards ejecutivos consolidados", desc: "KPIs de grupo — Revenue, EBITDA, Net Result, Cash Flow — sincronizados en tiempo real desde la plataforma de consolidación." },
      { icon: GitMerge, title: "Drill-down instantáneo", desc: "Del KPI de grupo a la entidad, la dimensión y el asiento original. Sin salir de la vista, sin esperar a un analista." },
      { icon: Sparkles, title: "Narrativa generada por IA", desc: "Cada variación de KPI se acompaña de un comentario en lenguaje natural explicando la causa. Board packs que se explican solos." },
      { icon: Bell, title: "Alertas por umbral", desc: "Configuración de umbrales por KPI, entidad o dimensión. Notificación proactiva cuando algo se desvía." },
      { icon: FileCheck, title: "Board packs regenerables", desc: "Genera el board pack final del comité con un clic. PDF, Excel y dashboard interactivo desde la misma fuente." },
      { icon: Target, title: "Forecast rodante integrado", desc: "Compara presupuesto, real y forecast en la misma vista. Actualización automática con los últimos cierres." },
    ],
    scenario: {
      title: "Un comité de dirección con Next Reporting",
      steps: [
        { time: "T−0 min", title: "Apertura del comité", desc: "El CFO abre el dashboard consolidado. Los KPIs de las 47 sociedades están sincronizados desde el último cierre. La IA ha marcado 3 desviaciones que superan el umbral configurado." },
        { time: "T+8 min", title: "Pregunta imprevista", desc: "El CEO pregunta por qué cae el margen en la unidad de negocio de LATAM. Drill-down desde el KPI de grupo hasta la entidad MX-Retail-02 en dos clics. La causa: un ajuste por depreciación acelerada. Respuesta al instante." },
        { time: "T+20 min", title: "Decisión sobre forecast", desc: "El comité decide revisar el forecast del Q1. El CFO ajusta las hipótesis en pantalla y todos ven el impacto proyectado en Revenue, EBITDA y Cash Flow — antes de que termine la reunión." },
        { time: "T+30 min", title: "Cierre y envío", desc: "El board pack final se regenera con las decisiones tomadas. PDF firmado y enviado al consejo antes de que salga el CFO de la sala." },
      ],
    },
  },
  {
    id: "controller",
    label: "Para el Controller",
    tagline: "Del cierre al análisis, sin reconstruir.",
    intro: "El Controller obtiene una capa de análisis multi-dimensional sobre los datos ya consolidados, con detección automática de desviaciones y trazabilidad completa. El cierre deja de ser un proyecto de tres semanas y se convierte en una vista siempre actualizada.",
    metrics: [
      { n: "−78%", l: "Tiempo de análisis" },
      { n: "100%", l: "Trazabilidad KPI → asiento" },
      { n: "44/47", l: "Entidades conciliadas al instante" },
    ],
    capabilities: [
      { icon: Layers, title: "Análisis multi-dimensional", desc: "Cruce entidad × periodo × estructura × fuente en la misma vista. Sin recrear pivotes ni cargar hojas intermedias." },
      { icon: Shield, title: "Trazabilidad completa", desc: "Del KPI del board pack al asiento contable original, con toda la cadena de agregaciones y ajustes intermedios." },
      { icon: Bell, title: "Detección automática de desviaciones", desc: "La IA compara los cierres actuales contra presupuesto, real anterior y forecast. Marca las desviaciones significativas antes de que las tengas que buscar." },
      { icon: FileCheck, title: "Gestión de ajustes centralizada", desc: "Registra, aprueba y revierte ajustes con flujo de aprobación auditable. Cada ajuste queda vinculado al periodo y a la entidad correspondientes." },
      { icon: Database, title: "Conciliación multi-entidad", desc: "Estado de sincronización visible para todas las entidades. Alertas cuando hay entidades pendientes de cierre o con datos incompletos." },
      { icon: Clock, title: "Cierre continuo", desc: "En vez de cerrar en 14 días una vez al mes, ten los datos consolidados y analizados cada 5 minutos. El comité no espera al cierre." },
    ],
    scenario: {
      title: "Un cierre mensual con Next Reporting",
      steps: [
        { time: "Día −1", title: "Preparación del cierre", desc: "El Controller revisa el estado de las 47 entidades: 42 en verde, 5 pendientes de conciliación local. Envía recordatorios automáticos a los responsables locales desde el propio panel." },
        { time: "Día 0", title: "Consolidación", desc: "Los datos consolidados llegan desde la plataforma de consolidación. Next Reporting sincroniza automáticamente y regenera todos los KPIs, ratios y análisis." },
        { time: "Día +1", title: "Revisión de desviaciones", desc: "La IA ha marcado 12 desviaciones significativas. El Controller las revisa una a una con drill-down directo. Nueve son operativas y esperadas, tres requieren investigación." },
        { time: "Día +2", title: "Board pack listo", desc: "Ajustes finales aprobados, board pack regenerado, comentarios narrativos revisados. Enviado al CFO para el comité del mismo día. Antes: 14 días. Ahora: 2." },
      ],
    },
  },
  {
    id: "consultor",
    label: "Para el Consultor",
    tagline: "Multi-cliente, multi-fuente, sin fricción.",
    intro: "Next Reporting da al consultor una vista de portafolio con todos sus clientes, sin importar la fuente de consolidación de cada uno. Onboarding en horas, no en trimestres. Reportes en paralelo sin recrear la infraestructura para cada cuenta.",
    metrics: [
      { n: "3.4×", l: "Board packs entregados/año" },
      { n: "80%", l: "Del tiempo aportando insight" },
      { n: "8", l: "Clientes atendidos en paralelo" },
    ],
    capabilities: [
      { icon: Users, title: "Vista de portafolio multi-cliente", desc: "Todos tus clientes en un único panel. Estado de sincronización, alertas activas y próximos hitos de cada uno de un vistazo." },
      { icon: Zap, title: "Onboarding en horas", desc: "Mapea el plan de cuentas del cliente, aplica la plantilla del sector y configura las dimensiones. El cliente está operativo la misma semana, no el mismo trimestre." },
      { icon: Database, title: "Multi-fuente integrada", desc: "Conecta indistintamente con Konsolidator, Tagetik, Excel o cualquier ERP vía API. Cada cliente conserva su fuente sin exigirle migración." },
      { icon: Shield, title: "Compartición segura", desc: "Comparte dashboards y board packs con cada cliente con permisos granulares. Cada cliente ve solo lo suyo, sin poder acceder a la información de otros." },
      { icon: FileCheck, title: "Templates sectoriales", desc: "Plantillas prediseñadas por sector (industrial, retail, servicios, PE-backed) que aceleran el arranque y estandarizan los reportes de la práctica." },
      { icon: TrendingUp, title: "Escalabilidad de la práctica", desc: "Duplica la cartera sin duplicar el equipo. La arquitectura absorbe la complejidad de clientes con 6 o con 340 entidades sin degradar el servicio." },
    ],
    scenario: {
      title: "Una jornada del consultor con Next Reporting",
      steps: [
        { time: "Sesión 1", title: "Revisión de cartera", desc: "El consultor abre la vista de portafolio: 8 clientes, cada uno con su propia fuente y estructura. Sincronización de todos verificada, dos clientes con alertas activas por desviaciones significativas." },
        { time: "Sesión 2", title: "Sesión con cliente", desc: "Videoconferencia con el CFO de uno de los clientes. Comparte el dashboard en vivo, drill-down desde el KPI de grupo hasta la entidad específica. Responde a todas las preguntas en la propia sesión, sin post-follow-ups." },
        { time: "Sesión 3", title: "Onboarding de nuevo cliente", desc: "Nueva cuenta que llega con Konsolidator ya implantado. El consultor mapea el plan de cuentas, aplica la plantilla del sector industrial y configura las dimensiones específicas. Cliente activo en la misma jornada." },
        { time: "Sesión 4", title: "Reportes trimestrales", desc: "Regenera los reportes Q4 de tres clientes en paralelo — cada uno con su propio formato, sus propias dimensiones y su propio nivel de detalle. Antes: una semana de trabajo. Ahora: una tarde." },
      ],
    },
  },
];

export default function ComoSeUsa() {
  const [activeRole, setActiveRole] = useState("cfo");
  const role = ROLES.find((r) => r.id === activeRole);

  return (
    <div className="min-h-screen bg-cloud">
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
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
                Cómo se usa
              </span>
            </div>

            <h1 className="font-extrabold text-4xl md:text-6xl text-ink leading-[1.05] tracking-tight mb-6">
              Elige tu rol y{" "}
              <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
                descubre el impacto.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-ink-soft/70 leading-relaxed max-w-3xl">
              Next Reporting se adapta al perfil de cada usuario. Selecciona tu rol para ver cómo cambia tu día a día — con datos, casos concretos y capacidades específicas para tu función.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="mt-16 flex flex-col sm:flex-row gap-3 border-b border-gray-200">
            {ROLES.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveRole(r.id)}
                className={`px-6 py-4 font-semibold text-[15px] transition-all relative ${
                  activeRole === r.id
                    ? "text-indigo"
                    : "text-gray-500 hover:text-ink"
                }`}
              >
                {r.label}
                {activeRole === r.id && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-indigo"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-12"
            >
              {/* Tagline + intro */}
              <div className="mb-12">
                <h2 className="font-extrabold text-3xl md:text-4xl text-ink mb-4 leading-tight">
                  {role.tagline}
                </h2>
                <p className="text-lg text-ink-soft/70 leading-relaxed max-w-3xl">
                  {role.intro}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
                {role.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="bg-white border border-mint/15 rounded-2xl p-6 text-center"
                  >
                    <div className="text-4xl font-extrabold text-ink mb-2 bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
                      {m.n}
                    </div>
                    <div className="text-[13px] text-ink-soft/60">{m.l}</div>
                  </div>
                ))}
              </div>

              {/* Capabilities */}
              <div className="mb-16">
                <h3 className="font-bold text-2xl text-ink mb-8">
                  Capacidades clave
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {role.capabilities.map((c, i) => (
                    <div
                      key={i}
                      className="bg-white border border-mint/15 rounded-2xl p-6 hover:border-indigo/40 hover:shadow-lg transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center mb-4">
                        <c.icon size={18} className="text-indigo" />
                      </div>
                      <h4 className="font-bold text-ink text-[16px] mb-2">
                        {c.title}
                      </h4>
                      <p className="text-[14px] text-ink-soft/70 leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scenario */}
              <div className="bg-white border border-mint/15 rounded-3xl p-8 md:p-12 mb-16">
                <h3 className="font-bold text-2xl text-ink mb-8">
                  {role.scenario.title}
                </h3>
                <div className="space-y-6">
                  {role.scenario.steps.map((s, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="shrink-0 w-24 md:w-28">
                        <div className="font-mono text-[11px] tracking-widest uppercase text-indigo font-bold">
                          {s.time}
                        </div>
                      </div>
                      <div className="flex-1 pb-6 border-b border-gray-100 last:border-b-0">
                        <div className="font-bold text-ink text-[16px] mb-2">
                          {s.title}
                        </div>
                        <p className="text-[14px] text-ink-soft/70 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-ink rounded-3xl p-10 md:p-16 text-center border border-mint/20 shadow-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/30 bg-mint/10 mb-6">
              <span className="text-[11px] text-mint font-semibold tracking-[0.15em] uppercase">
                Demo personalizada
              </span>
            </div>
            <h2 className="font-extrabold text-3xl md:text-4xl text-white mb-4 tracking-tight leading-tight">
              ¿Prefiere verlo en su contexto?
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Reserve una sesión de 30 minutos y le enseñamos cómo se usa Next Reporting con sus propios datos.
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