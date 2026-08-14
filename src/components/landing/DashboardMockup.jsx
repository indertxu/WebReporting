import React from "react";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const C = 2 * Math.PI * 22;
const SEGMENTS = [
  { pct: 0.40, color: "#059669", delay: 0 },
  { pct: 0.30, color: "#10B981", delay: 0.15 },
  { pct: 0.30, color: "#34D399", delay: 0.3 },
];

let _cumulative = 0;
const SEGMENT_DATA = SEGMENTS.map((s) => {
  const data = { ...s, offset: -_cumulative * C };
  _cumulative += s.pct;
  return data;
});

export default function DashboardMockup() {
  const { t } = useI18n();
  const db = t.dashboard;

  const SIDEBAR_ITEMS = db.sidebar.map((label, i) => ({
    icon: ["⊙", "□", "⊞", "◈", "▤", "◫"][i],
    label,
    active: i === 0,
  }));

  return (
    <div className="bg-white rounded-2xl border border-mint/15 shadow-[0_30px_80px_-20px_rgba(6,78,59,0.18)] overflow-hidden flex" style={{ minHeight: 420 }}>
      {/* Sidebar */}
      <div className="w-[140px] bg-white border-r border-gray-100 flex flex-col shrink-0 hidden sm:flex">
        <div className="px-3 py-3 border-b border-gray-100 flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-ink flex items-center justify-center">
            <BarChart3 size={13} className="text-mint" />
          </div>
          <span className="text-[12px] font-bold text-ink">NextReport</span>
        </div>
        <div className="p-1.5 flex-1">
          {SIDEBAR_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-2 py-2 rounded-md mb-0.5 text-[11px] ${
                item.active
                  ? "bg-mint/10 text-indigo font-semibold"
                  : "text-gray-400"
              }`}
            >
              <span className="text-[10px] w-3 text-center">{item.icon}</span>
              <span>{item.label}</span>
              {item.active && (
                <span className="w-1.5 h-1.5 rounded-full bg-mint ml-auto" />
              )}
            </div>
          ))}
        </div>
        <div className="p-2 border-t border-gray-100 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo to-mint flex items-center justify-center text-white text-[9px] font-bold">
            IB
          </div>
          <span className="text-[10px] text-gray-400 truncate">INDEF@KONSOLI...</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="font-bold text-ink text-sm">{db.greeting}</div>
            <div className="font-mono text-[9px] text-gray-400">{db.date}</div>
          </div>
          <div className="flex gap-1">
            {["DIC", "NOV", "SR", "DPG", "CAI"].map((tag, i) => (
              <span
                key={i}
                className={`px-1.5 py-0.5 rounded font-mono text-[8px] ${
                  i === 0 ? "bg-indigo/10 text-indigo font-medium" : "bg-gray-50 text-gray-400"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* KPI mini cards */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: db.kpis.revenue, value: "2.47M", delta: "+2.2%", color: "text-indigo", bg: "bg-indigo/5" },
            { label: db.kpis.ebitda, value: "412K", delta: "+8.4%", color: "text-mint", bg: "bg-mint/5" },
            { label: db.kpis.netResult, value: "136K", delta: "−4.1%", color: "text-rose", bg: "bg-rose/5" },
            { label: db.kpis.cashFlow, value: "289K", delta: "+1.7%", color: "text-amber", bg: "bg-amber/5" },
          ].map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className={`${kpi.bg} rounded-lg p-2.5`}
            >
              <div className="font-mono text-[7px] tracking-widest uppercase text-gray-400">
                {kpi.label}
              </div>
              <div className="text-sm font-bold text-ink mt-0.5">{kpi.value}</div>
              <div className={`font-mono text-[8px] ${kpi.color} mt-0.5`}>
                {kpi.delta}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="col-span-2 bg-gray-50 rounded-xl p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-ink text-[11px]">{db.revenueTrend}</span>
              <span className="font-mono text-[8px] text-mint font-medium">{db.yoy}</span>
            </div>
            <svg viewBox="0 0 200 50" className="w-full h-12">
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#059669" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                d="M0,38 Q30,32 50,29 T100,20 T150,16 T200,12 L200,50 L0,50 Z"
                fill="url(#areaGrad)"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                d="M0,38 Q30,32 50,29 T100,20 T150,16 T200,12"
                fill="none"
                stroke="#059669"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 flex flex-col">
            <span className="font-bold text-ink text-[11px] mb-1">{db.byEntity}</span>
            <div className="flex-1 flex items-center justify-center">
              <svg viewBox="0 0 60 60" className="w-12 h-12">
                <circle cx="30" cy="30" r="22" fill="none" stroke="#E5E7EB" strokeWidth="7" />
                {SEGMENT_DATA.map((seg, i) => (
                  <motion.circle
                    key={i}
                    cx="30"
                    cy="30"
                    r="22"
                    fill="none"
                    stroke={seg.color}
                    strokeWidth="7"
                    strokeDasharray={`${C * seg.pct} ${C}`}
                    strokeDashoffset={seg.offset}
                    transform="rotate(-90 30 30)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + seg.delay, duration: 0.4 }}
                  />
                ))}
                <text x="30" y="29" textAnchor="middle" fontFamily="Inter" fontSize="12" fontWeight="800" fill="#064E3B">
                  73%
                </text>
                <text x="30" y="38" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="5" fill="#9CA3AF">
                  {db.top5}
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* AI insight bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-3 bg-mint/5 border border-mint/15 rounded-xl p-2.5 flex items-start gap-2"
        >
          <span className="bg-indigo text-white font-bold text-[8px] px-1.5 py-0.5 rounded shrink-0 mt-0.5">
            ✦ IA
          </span>
          <span className="text-[10px] text-ink-soft leading-relaxed">
            {db.aiInsight}{" "}
            <span className="font-semibold text-indigo">MX-Retail-02</span>. {db.aiInsightImpact}{" "}
            <span className="font-semibold text-rose">€48K</span>.
          </span>
        </motion.div>
      </div>
    </div>
  );
}