import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import CoverageMapModal from "./CoverageMapModal";
import { useI18n } from "@/lib/i18n";
import {
  MAP_VIEWBOX,
  CONTINENTS,
  COUNTRIES,
  CLIENT_DOTS,
  CONNECTION_PATH,
  CONNECTION_DK,
} from "./coverageData";

export default function CoverageMap() {
  const { t } = useI18n();
  const [hovered, setHovered] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const cov = t.coverage;
  const hoveredCountry = COUNTRIES.find((c) => c.id === hovered);
  const hoveredCountryT = hoveredCountry ? cov.countries[hoveredCountry.id] : null;

  return (
    <section id="cobertura" className="py-28 bg-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase text-indigo mb-5">
              <span className="w-6 h-px bg-indigo" />
              {cov.tag}
            </div>
            <h2
              className="font-extrabold text-ink leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)" }}
            >
              {cov.title}
              <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
                {cov.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-ink-soft/60 leading-relaxed mb-10 max-w-xl">
              {cov.desc}
            </p>

            <div className="grid grid-cols-2 gap-5 pt-8 border-t border-mint/15">
              {cov.stats.map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-extrabold text-ink tracking-tight">
                    {s.n}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-gray-400 mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white border border-mint/15 rounded-2xl shadow-[0_8px_30px_-8px_rgba(6,78,59,0.08)] overflow-hidden group"
          >
            {/* Expand button */}
            <button
              onClick={() => setModalOpen(true)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-mint/20 hover:bg-indigo hover:border-indigo text-gray-400 hover:text-white flex items-center justify-center transition-all shadow-sm"
              title="Ver mapa completo"
            >
              <Maximize2 size={15} />
            </button>

            <svg
              viewBox={MAP_VIEWBOX}
              xmlns="http://www.w3.org/2000/svg"
              className="w-full cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <rect width="700" height="550" fill="#F0FDF4" />

              {/* Continents */}
              {CONTINENTS.map((d, i) => (
                <path key={i} d={d} fill="white" stroke="#D1FAE5" strokeWidth="1.5" />
              ))}

              {/* Connection lines */}
              <path
                d={CONNECTION_PATH}
                fill="none"
                stroke="#059669"
                strokeWidth="2"
                strokeDasharray="4,5"
                opacity="0.5"
              />
              <path
                d={CONNECTION_DK}
                fill="none"
                stroke="#34D399"
                strokeWidth="2"
                strokeDasharray="4,5"
                opacity="0.4"
              />

              {/* Client dots */}
              {CLIENT_DOTS.map((d, i) => (
                <circle key={i} cx={d.cx} cy={d.cy} r="2.5" fill="#10B981" opacity="0.4" />
              ))}

              {/* Country markers */}
              {COUNTRIES.map((c) => {
                const ct = cov.countries[c.id];
                return (
                  <g
                    key={c.id}
                    onMouseEnter={() => setHovered(c.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: "pointer" }}
                  >
                    <circle
                      cx={c.cx}
                      cy={c.cy}
                      r={c.r}
                      fill={
                        c.type === "hq" ? "#059669" :
                        c.type === "partner" ? "#34D399" :
                        c.type === "hub" ? "#10B981" : "#10B981"
                      }
                    />
                    {(c.type === "hq" || c.type === "partner" || c.type === "hub") && (
                      <circle
                        cx={c.cx}
                        cy={c.cy}
                        r={c.r * 2}
                        fill="none"
                        stroke={
                          c.type === "hq" ? "#059669" :
                          c.type === "partner" ? "#34D399" : "#10B981"
                        }
                        strokeWidth="1.5"
                        opacity="0.4"
                      >
                        <animate
                          attributeName="r"
                          values={`${c.r * 2};${c.r * 3.5};${c.r * 2}`}
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.4;0;0.4"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    {ct && ct.label && (
                      <>
                        <text
                          x={c.cx + c.r + 6}
                          y={c.cy - 4}
                          fontFamily="Inter"
                          fontSize="14"
                          fontWeight="700"
                          fill="#064E3B"
                        >
                          {ct.label}
                        </text>
                        <text
                          x={c.cx + c.r + 6}
                          y={c.cy + 10}
                          fontFamily="JetBrains Mono"
                          fontSize="10"
                          fill="#9CA3AF"
                          letterSpacing="0.5"
                        >
                          {ct.sublabel}
                        </text>
                      </>
                    )}
                  </g>
                );
              })}
            </svg>

            {hoveredCountryT && hoveredCountry && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-4 left-4 bg-white border border-mint/20 shadow-lg rounded-xl p-4 font-mono text-[11px] z-10 min-w-[180px]"
              >
                <div className="text-ink font-bold text-sm font-body mb-2">{hoveredCountryT.name}</div>
                <div className="space-y-1.5 text-gray-500">
                  <div>{cov.hover.entities} <span className="text-mint font-semibold">{hoveredCountry.entities}</span></div>
                  <div>{cov.hover.currency} <span className="text-ink">{hoveredCountry.currency}</span></div>
                  <div>{cov.hover.speed} <span className="text-indigo font-semibold">{hoveredCountryT.speed}</span></div>
                </div>
              </motion.div>
            )}

            <div className="absolute bottom-4 left-4 right-4 flex gap-4 font-mono text-[10px] text-gray-300 tracking-wider uppercase flex-wrap">
              <div className="flex gap-2 items-center"><span className="w-2.5 h-2.5 rounded-full bg-indigo" />{cov.legend.localTeam}</div>
              <div className="flex gap-2 items-center"><span className="w-2.5 h-2.5 rounded-full bg-mint-light" />{cov.legend.partnerIfrs}</div>
              <div className="flex gap-2 items-center"><span className="w-2.5 h-2.5 rounded-full bg-mint" />{cov.legend.hub}</div>
              <div className="flex gap-2 items-center"><span className="w-2.5 h-2.5 rounded-full bg-mint/40" />{cov.legend.client}</div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && <CoverageMapModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}