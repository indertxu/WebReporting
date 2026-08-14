import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import {
  MAP_VIEWBOX,
  CONTINENTS,
  COUNTRIES,
  CLIENT_DOTS,
  CONNECTION_PATH,
  CONNECTION_DK,
} from "./coverageData";

export default function CoverageMapModal({ onClose }) {
  const { t } = useI18n();
  const [hovered, setHovered] = useState(null);
  const cov = t.coverage;
  const hoveredCountry = COUNTRIES.find((c) => c.id === hovered);
  const hoveredCountryT = hoveredCountry ? cov.countries[hoveredCountry.id] : null;

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-ink/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl border border-mint/15 shadow-[0_30px_80px_-20px_rgba(6,78,59,0.3)] w-full max-w-5xl max-h-[90vh] relative overflow-hidden flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-gray-100 hover:bg-rose/10 text-gray-400 hover:text-rose flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="px-8 pt-8 pb-2 shrink-0">
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase text-indigo mb-3">
              <span className="w-6 h-px bg-indigo" />
              {cov.modal.tag}
            </div>
            <h2 className="font-extrabold text-ink text-2xl lg:text-3xl tracking-tight">
              {cov.modal.title}
            </h2>
          </div>

          {/* Map */}
          <div className="flex-1 overflow-auto px-4 pb-6">
            <svg viewBox={MAP_VIEWBOX} xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <rect width="700" height="550" fill="#F0FDF4" />

              {/* Continents */}
              {CONTINENTS.map((d, i) => (
                <path key={i} d={d} fill="white" stroke="#D1FAE5" strokeWidth="1.5" />
              ))}

              {/* Connection lines */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                d={CONNECTION_PATH}
                fill="none"
                stroke="#059669"
                strokeWidth="2"
                strokeDasharray="4,5"
                opacity="0.5"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                d={CONNECTION_DK}
                fill="none"
                stroke="#34D399"
                strokeWidth="2"
                strokeDasharray="4,5"
                opacity="0.4"
              />

              {/* Client dots */}
              {CLIENT_DOTS.map((d, i) => (
                <circle key={i} cx={d.cx} cy={d.cy} r="3" fill="#10B981" opacity="0.4" />
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
                        strokeWidth="2"
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
                          x={c.cx + c.r + 8}
                          y={c.cy - 5}
                          fontFamily="Inter"
                          fontSize="16"
                          fontWeight="700"
                          fill="#064E3B"
                        >
                          {ct.label}
                        </text>
                        <text
                          x={c.cx + c.r + 8}
                          y={c.cy + 12}
                          fontFamily="JetBrains Mono"
                          fontSize="11"
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

            {/* Hover info card */}
            {hoveredCountryT && hoveredCountry && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-24 right-20 bg-white border border-mint/20 shadow-lg rounded-xl p-5 font-mono text-[12px] z-10 min-w-[200px]"
              >
                <div className="text-ink font-bold text-base font-body mb-3">
                  {hoveredCountryT.name}
                </div>
                <div className="space-y-2 text-gray-500">
                  <div>
                    {cov.hover.entities}{" "}
                    <span className="text-mint font-semibold">
                      {hoveredCountry.entities}
                    </span>
                  </div>
                  <div>
                    {cov.hover.currency}{" "}
                    <span className="text-ink">{hoveredCountry.currency}</span>
                  </div>
                  <div>
                    {cov.hover.speed}{" "}
                    <span className="text-indigo font-semibold">
                      {hoveredCountryT.speed}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Legend footer */}
          <div className="px-8 py-4 bg-cloud border-t border-mint/10 flex gap-6 font-mono text-[11px] text-gray-300 tracking-wider uppercase flex-wrap shrink-0">
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 rounded-full bg-indigo" />{cov.legend.localTeam}
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 rounded-full bg-mint-light" />{cov.legend.partnerIfrs}
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 rounded-full bg-mint" />{cov.legend.hub}
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 rounded-full bg-mint/40" />{cov.legend.client}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}