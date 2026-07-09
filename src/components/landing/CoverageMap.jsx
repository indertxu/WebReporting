import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe2, Building2, Users, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const HUBS = [
  {
    id: "madrid",
    name: "Madrid",
    country: "España",
    role: "Sede central",
    subrole: "Equipo local · HQ",
    x: 51,
    y: 40,
    entities: "180+",
    entityLabel: "Sociedades activas",
    type: "hq",
  },
  {
    id: "lisboa",
    name: "Lisboa",
    country: "Portugal",
    role: "Oficina",
    subrole: "Mercado ibérico activo",
    x: 46,
    y: 42,
    entities: "40+",
    entityLabel: "Sociedades activas",
    type: "office",
  },
  {
    id: "copenhague",
    name: "Copenhague",
    country: "Dinamarca",
    role: "Partner IFRS",
    subrole: "Norte de Europa",
    x: 56,
    y: 20,
    entities: "80+",
    entityLabel: "Sociedades activas",
    type: "partner",
  },
  {
    id: "latam",
    name: "Ciudad de México",
    country: "LATAM",
    role: "Corredor regional",
    subrole: "MX · CO · CL · PE",
    x: 18,
    y: 55,
    entities: "50+",
    entityLabel: "Sociedades activas",
    type: "region",
  },
];

const CONNECTIONS = [
  { from: "madrid", to: "lisboa" },
  { from: "madrid", to: "copenhague" },
  { from: "madrid", to: "latam" },
];

export default function CoverageMap() {
  const { t } = useI18n();
  const [activeHub, setActiveHub] = useState("madrid");
  const cov = t.coverage;

  return (
    <section id="cobertura" className="bg-cloud py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-4xl"
        >
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-indigo mb-4">
            {cov.tag}
          </div>
          <h2 className="font-extrabold text-4xl md:text-5xl text-ink leading-[1.05] tracking-tight mb-6">
            Presencia local en{" "}
            <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
              4 hubs estratégicos
            </span>{" "}
            del corredor Iberia · LATAM · Norte de Europa.
          </h2>
          <p className="text-lg text-ink-soft/60 leading-relaxed">
            Equipo local en Madrid, oficina activa en Lisboa, partners IFRS en Copenhague y corredor regional en LATAM. 16 países cubiertos con el mismo nivel de servicio y los mismos tiempos de respuesta.
          </p>
        </motion.div>

        {/* Main dark card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ink rounded-3xl p-6 md:p-10 relative overflow-hidden border border-mint/10 shadow-2xl"
        >
          {/* Grid pattern background */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Ambient orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-mint/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-indigo/10 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Left: Map SVG */}
            <div className="lg:col-span-3">
              <div className="relative aspect-[4/3] rounded-2xl bg-black/20 border border-white/5 overflow-hidden">
                <svg
                  viewBox="0 0 100 75"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <pattern id="mapDots" x="0" y="0" width="1.5" height="1.5" patternUnits="userSpaceOnUse">
                      <circle cx="0.75" cy="0.75" r="0.28" fill="#ffffff" opacity="0.18" />
                    </pattern>
                    <radialGradient id="pulseGrad">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Continent silhouettes (dotted, abstract) */}
                  <g>
                    {/* Iberia */}
                    <ellipse cx="48" cy="42" rx="6" ry="4.5" fill="url(#mapDots)" />
                    {/* Continental Europe */}
                    <ellipse cx="58" cy="30" rx="14" ry="10" fill="url(#mapDots)" />
                    {/* UK/Ireland */}
                    <ellipse cx="49" cy="24" rx="2.5" ry="3.5" fill="url(#mapDots)" />
                    {/* Scandinavia */}
                    <ellipse cx="57" cy="16" rx="7" ry="6" fill="url(#mapDots)" />
                    {/* North America */}
                    <ellipse cx="18" cy="32" rx="14" ry="12" fill="url(#mapDots)" />
                    {/* Central America */}
                    <ellipse cx="17" cy="52" rx="6" ry="4" fill="url(#mapDots)" />
                    {/* South America */}
                    <ellipse cx="24" cy="62" rx="7" ry="9" fill="url(#mapDots)" />
                    {/* Africa (very faded) */}
                    <ellipse cx="54" cy="58" rx="9" ry="12" fill="url(#mapDots)" opacity="0.5" />
                  </g>

                  {/* Connection lines */}
                  {CONNECTIONS.map((conn, i) => {
                    const from = HUBS.find((h) => h.id === conn.from);
                    const to = HUBS.find((h) => h.id === conn.to);
                    if (!from || !to) return null;
                    const midX = (from.x + to.x) / 2;
                    const midY = Math.min(from.y, to.y) - 6;
                    return (
                      <motion.path
                        key={i}
                        d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
                        stroke="#10b981"
                        strokeWidth="0.25"
                        strokeDasharray="0.8,0.8"
                        fill="none"
                        opacity="0.6"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.4 + i * 0.3 }}
                        viewport={{ once: true }}
                      />
                    );
                  })}

                  {/* Hub markers */}
                  {HUBS.map((hub) => {
                    const isActive = activeHub === hub.id;
                    return (
                      <g key={hub.id} className="cursor-pointer" onClick={() => setActiveHub(hub.id)}>
                        {/* Pulse aura */}
                        <circle cx={hub.x} cy={hub.y} r="3.5" fill="url(#pulseGrad)">
                          <animate attributeName="r" from="1.5" to="5" dur="2.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.7" to="0" dur="2.5s" repeatCount="indefinite" />
                        </circle>
                        {/* Outer ring */}
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r={isActive ? "2.3" : "1.6"}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="0.35"
                          opacity={isActive ? "1" : "0.5"}
                          style={{ transition: "all 0.3s" }}
                        />
                        {/* Center dot */}
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r={isActive ? "1.3" : "0.9"}
                          fill="#10b981"
                          style={{ transition: "all 0.3s" }}
                        />
                        {/* Label */}
                        <text
                          x={hub.x}
                          y={hub.y - 3.5}
                          fontSize="1.9"
                          fill="#ffffff"
                          textAnchor="middle"
                          fontWeight={isActive ? "700" : "500"}
                          opacity={isActive ? 1 : 0.65}
                          style={{ transition: "all 0.3s" }}
                        >
                          {hub.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Legend */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-5 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-mint" />
                    <span className="text-[9px] text-white/50 font-mono tracking-wider uppercase">Hub activo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full border border-mint" />
                    <span className="text-[9px] text-white/50 font-mono tracking-wider uppercase">Presencia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="12" height="4" viewBox="0 0 12 4">
                      <line x1="0" y1="2" x2="12" y2="2" stroke="#10b981" strokeWidth="0.6" strokeDasharray="2,1" opacity="0.6" />
                    </svg>
                    <span className="text-[9px] text-white/50 font-mono tracking-wider uppercase">Corredor operativo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Location cards */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {HUBS.map((hub) => {
                const isActive = activeHub === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setActiveHub(hub.id)}
                    className={`text-left p-4 md:p-5 rounded-2xl border transition-all ${
                      isActive
                        ? "bg-white/[0.08] border-mint/40 shadow-lg shadow-mint/5"
                        : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="font-bold text-white text-[15px] leading-tight">{hub.name}</div>
                        <div className="text-[11px] text-white/40 font-mono tracking-wider uppercase mt-0.5">
                          {hub.country}
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-[0.1em] uppercase shrink-0 ${
                          hub.type === "hq"
                            ? "bg-mint/20 text-mint"
                            : hub.type === "office"
                            ? "bg-indigo/15 text-mint-light"
                            : hub.type === "partner"
                            ? "bg-white/10 text-white/70"
                            : "bg-amber/15 text-amber"
                        }`}
                      >
                        {hub.role}
                      </span>
                    </div>
                    <div className="text-[12px] text-white/50 mb-3">{hub.subrole}</div>
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="text-[10px] text-white/40 font-mono tracking-wider uppercase">
                        {hub.entityLabel}
                      </div>
                      <div className="text-[15px] font-extrabold text-mint">{hub.entities}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom stats */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-10 border-t border-white/10">
            {[
              { icon: Globe2, label: "Países cubiertos", value: "16" },
              { icon: Building2, label: "Hubs estratégicos", value: "4" },
              { icon: Users, label: "Idiomas de servicio", value: "ES · PT · EN · DA" },
              { icon: Zap, label: "Tiempo medio de respuesta", value: "< 24 h" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center mb-3 border border-mint/20">
                  <stat.icon size={16} className="text-mint" />
                </div>
                <div className="text-[10px] text-white/40 font-mono tracking-wider uppercase mb-1.5">
                  {stat.label}
                </div>
                <div className="text-white font-bold text-[16px] leading-tight">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 