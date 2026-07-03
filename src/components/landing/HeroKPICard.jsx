import React from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { useI18n } from "@/lib/i18n";

const CARDS = [
  {
    id: "revenue",
    value: "2.47M",
    delta: "+2.2%",
    color: "indigo",
    sparkPath: "M0,25 Q30,22 60,20 T120,18 T200,15",
    fillPath: "M0,25 Q30,22 60,20 T120,18 T200,15 L200,40 L0,40 Z",
    chartData: [2.20, 2.25, 2.31, 2.28, 2.35, 2.40, 2.38, 2.42, 2.45, 2.43, 2.46, 2.47],
  },
  {
    id: "costOfSales",
    value: "−1.74M",
    delta: "−3.8%",
    color: "rose",
    sparkPath: "M0,20 Q30,25 60,22 T120,28 T200,20",
    fillPath: "M0,20 Q30,25 60,22 T120,28 T200,20 L200,40 L0,40 Z",
    chartData: [-1.85, -1.82, -1.80, -1.78, -1.76, -1.75, -1.73, -1.72, -1.74, -1.73, -1.74, -1.74],
  },
  {
    id: "employee",
    value: "−326K",
    delta: "+1.7%",
    color: "mint",
    sparkPath: "M0,25 Q20,15 40,20 T80,22 T120,18 T160,25 T200,20",
    fillPath: "M0,25 Q20,15 40,20 T80,22 T120,18 T160,25 T200,20 L200,40 L0,40 Z",
    chartData: [-315, -320, -322, -325, -328, -330, -329, -327, -326, -325, -326, -326],
  },
  {
    id: "netResult",
    value: "136K",
    delta: "−4.1%",
    color: "amber",
    sparkPath: "M0,18 Q30,15 60,22 T120,20 T200,25",
    fillPath: "M0,18 Q30,15 60,22 T120,20 T200,25 L200,40 L0,40 Z",
    chartData: [152, 148, 145, 143, 141, 139, 138, 137, 138, 137, 136, 136],
  },
];

const COLOR_MAP = {
  indigo: { text: "text-indigo", bg: "bg-indigo", light: "bg-indigo/5", spark: "#059669" },
  rose: { text: "text-rose", bg: "bg-rose", light: "bg-rose/5", spark: "#EF4444" },
  mint: { text: "text-mint", bg: "bg-mint", light: "bg-mint/5", spark: "#10B981" },
  amber: { text: "text-amber", bg: "bg-amber", light: "bg-amber/5", spark: "#F59E0B" },
};

export { CARDS, COLOR_MAP };

export default function HeroKPICard({ index, onClick }) {
  const { t } = useI18n();
  const c = CARDS[index];
  const colors = COLOR_MAP[c.color];
  const cardT = t.kpi.cards[c.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <TiltCard intensity={5} className="h-full">
        <div
          onClick={onClick}
          className="bg-white border border-mint/15 rounded-2xl p-5 relative overflow-hidden h-full shadow-[0_8px_30px_-8px_rgba(6,78,59,0.08)] hover:shadow-[0_16px_40px_-8px_rgba(5,150,105,0.15)] hover:border-indigo/20 transition-all cursor-pointer"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">
              {cardT.label}
            </span>
            <span className={`font-mono text-[10px] font-medium px-2 py-0.5 rounded-md ${colors.light} ${colors.text}`}>
              {c.delta}
            </span>
          </div>
          <div className="text-[28px] font-extrabold text-ink tracking-tight leading-none mb-1">
            {c.value}
          </div>
          <div className="font-mono text-[11px] text-gray-400">{cardT.sub}</div>
          <div className="absolute bottom-0 left-0 right-0 h-10">
            <svg viewBox="0 0 200 40" preserveAspectRatio="none" className="w-full h-full block">
              <path d={c.fillPath} fill={colors.spark} fillOpacity="0.08" />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                d={c.sparkPath}
                fill="none"
                stroke={colors.spark}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}