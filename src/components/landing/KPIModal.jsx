import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const W = 500;
const H = 220;
const PAD = 35;

function formatValue(v) {
  const abs = Math.abs(v);
  const sign = v < 0 ? "−" : "";
  if (abs >= 10) {
    return `${sign}${abs.toFixed(2)}M`;
  }
  return `${sign}${Math.round(abs)}K`;
}

function buildChartPath(data) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = (W - PAD * 2) / (data.length - 1);
  const points = data.map((v, i) => ({
    x: PAD + i * stepX,
    y: H - PAD - ((v - min) / range) * (H - PAD * 2),
  }));
  const linePath = points.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(" ");
  const areaPath = `${linePath} L${points[points.length - 1].x},${H - PAD} L${points[0].x},${H - PAD} Z`;
  return { linePath, areaPath, points };
}

export default function KPIModal({ card, colors, onClose }) {
  const { t } = useI18n();
  const cardRef = useRef(null);
  const rotateXmv = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const rotateYmv = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const [activePoint, setActivePoint] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const chart = buildChartPath(card.chartData);
  const cardT = t.kpi.cards[card.id];

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const py = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    rotateYmv.set(px * 12);
    rotateXmv.set(-py * 12);
  };

  const handleMouseLeave = () => {
    rotateXmv.set(0);
    rotateYmv.set(0);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="fixed inset-0 z-[100] bg-ink/40 backdrop-blur-sm flex items-center justify-center p-4"
        style={{ perspective: 1200 }}
      >
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, scale: 0.6, rotateX: -35, rotateY: 15, y: 60 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, rotateX: 35, rotateY: -15, y: 60 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
            rotateX: rotateXmv,
            rotateY: rotateYmv,
          }}
          className="bg-white rounded-2xl border border-mint/15 shadow-[0_40px_100px_-20px_rgba(6,78,59,0.4)] w-full max-w-2xl relative overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-rose/10 text-gray-400 hover:text-rose flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="px-7 pt-7 pb-4" style={{ transform: "translateZ(40px)" }}>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-[11px] tracking-widest uppercase text-gray-400">
                {cardT.label}
              </span>
              <span className={`font-mono text-[10px] font-medium px-2 py-0.5 rounded-md ${colors.light} ${colors.text}`}>
                {card.delta}
              </span>
            </div>
            <div className="text-4xl font-extrabold text-ink tracking-tight leading-none">
              {card.value}
              <span className="font-mono text-[14px] text-gray-400 ml-2">{cardT.sub}</span>
            </div>
          </div>

          {/* Chart */}
          <div className="px-4 pb-6" style={{ transform: "translateZ(25px)" }}>
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
              <defs>
                <linearGradient id={`area-${card.color}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={colors.spark} stopOpacity="0.20" />
                  <stop offset="100%" stopColor={colors.spark} stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((tt, i) => (
                <line
                  key={i}
                  x1={PAD}
                  y1={PAD + tt * (H - PAD * 2)}
                  x2={W - PAD}
                  y2={PAD + tt * (H - PAD * 2)}
                  stroke="#F3F4F6"
                  strokeWidth="1"
                />
              ))}

              {/* Area fill */}
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                d={chart.areaPath}
                fill={`url(#area-${card.color})`}
              />

              {/* Line */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                d={chart.linePath}
                fill="none"
                stroke={colors.spark}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Vertical guide line for active point */}
              {activePoint !== null && (
                <line
                  x1={chart.points[activePoint].x}
                  y1={PAD}
                  x2={chart.points[activePoint].x}
                  y2={H - PAD}
                  stroke={colors.spark}
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  opacity="0.4"
                />
              )}

              {/* Data points */}
              {chart.points.map((p, i) => {
                const isActive = activePoint === i;
                return (
                  <g
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePoint(isActive ? null : i);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Invisible larger hit area */}
                    <circle cx={p.x} cy={p.y} r="14" fill="transparent" />
                    {/* Active glow */}
                    {isActive && (
                      <circle cx={p.x} cy={p.y} r="8" fill={colors.spark} opacity="0.2" />
                    )}
                    {/* Visible point */}
                    <motion.circle
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.04 }}
                      cx={p.x}
                      cy={p.y}
                      r={isActive ? 5 : 3.5}
                      fill="white"
                      stroke={colors.spark}
                      strokeWidth="2.5"
                      style={{ transition: "r 0.2s" }}
                    />
                    {/* Value label */}
                    {isActive && (
                      <>
                        <rect
                          x={p.x - 32}
                          y={p.y - 32}
                          width="64"
                          height="20"
                          rx="5"
                          fill="#064E3B"
                        />
                        <text
                          x={p.x}
                          y={p.y - 18}
                          textAnchor="middle"
                          fontFamily="JetBrains Mono"
                          fontSize="11"
                          fontWeight="700"
                          fill="white"
                        >
                          {formatValue(card.chartData[i])}
                        </text>
                      </>
                    )}
                  </g>
                );
              })}

              {/* Month labels */}
              {t.months.map((m, i) => {
                const stepX = (W - PAD * 2) / (t.months.length - 1);
                return (
                  <text
                    key={i}
                    x={PAD + i * stepX}
                    y={H - 8}
                    textAnchor="middle"
                    fontFamily="JetBrains Mono"
                    fontSize="9"
                    fill="#9CA3AF"
                  >
                    {m}
                  </text>
                );
              })}
            </svg>
          </div>

          {/* Footer */}
          <div className="px-7 py-4 bg-cloud border-t border-mint/10 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400">
              {t.kpi.modal.evolution}
            </span>
            <span className={`font-mono text-[10px] font-medium ${colors.text}`}>
              {chart.points.length} {t.kpi.modal.dataPoints}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}