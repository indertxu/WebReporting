import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const DOT_COLORS = ["bg-indigo", "bg-mint", "bg-amber", "bg-rose"];

export default function DayInTheLife() {
  const { t } = useI18n();
  const [active, setActive] = useState("cfo");
  const dl = t.dayInLife;
  const items = dl.timelines[active];

  const TABS = [
    { key: "cfo", label: dl.tabs.cfo },
    { key: "controller", label: dl.tabs.controller },
    { key: "consultor", label: dl.tabs.consultor },
  ];

  return (
    <section id="como-se-usa" className="py-28 bg-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase text-indigo mb-5">
            <span className="w-6 h-px bg-indigo" />
            {dl.tag}
          </div>
          <h2
            className="font-extrabold text-ink leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)" }}
          >
            {dl.title}{" "}
            <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
              {dl.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-ink-soft/60 leading-relaxed">
            {dl.desc}
          </p>
        </motion.div>

        <div className="flex gap-2 mb-10 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === tab.key
                  ? "bg-ink text-white shadow-md"
                  : "bg-white text-gray-500 border border-mint/15 hover:border-indigo hover:text-indigo"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="relative pl-6"
            >
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo via-mint to-amber" />
              {items.map((item, i) => (
                <div key={i} className="relative pl-8 pb-8 last:pb-0">
                  <div className={`absolute left-[-7px] top-1.5 w-3 h-3 rounded-full border-[3px] bg-white ${DOT_COLORS[i].replace("bg-", "border-")}`} />
                  <div className="font-mono text-[11px] tracking-wider text-gray-400 mb-1.5">
                    {item.time}
                  </div>
                  <div className="font-bold text-ink text-[17px] tracking-tight mb-1.5">
                    {item.title}
                  </div>
                  <div className="text-[14px] text-ink-soft/60 leading-relaxed">
                    {item.before && (
                      <span className="text-gray-300 line-through mr-1">
                        {item.before}
                      </span>
                    )}
                    {item.desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-mint/15 p-6 shadow-[0_8px_30px_-8px_rgba(6,78,59,0.08)]"
          >
            <div className="flex justify-between items-center pb-4 mb-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo to-mint flex items-center justify-center text-white text-[11px] font-bold">
                  IB
                </div>
                <span className="text-ink font-bold text-[15px]">
                  {dl.dashboard.greeting}
                </span>
              </div>
              <div className="hidden sm:flex gap-1.5 font-mono text-[10px]">
                <span className="px-2 py-1 rounded bg-gray-100 text-gray-400">{dl.dashboard.dic}</span>
                <span className="px-2 py-1 rounded bg-indigo/10 text-indigo">✦ IA</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { l: dl.dashboard.kpis.revenue, v: "2.47M", s: "+2.2%", bg: "bg-indigo/5", text: "text-indigo" },
                { l: dl.dashboard.kpis.ebitda, v: "412K", s: "+8.4%", bg: "bg-mint/5", text: "text-mint" },
                { l: dl.dashboard.kpis.employee, v: "−326K", s: "+1.7%", bg: "bg-amber/5", text: "text-amber" },
                { l: dl.dashboard.kpis.netResult, v: "136K", s: "−4.1% ✦", bg: "bg-rose/5", text: "text-rose" },
              ].map((k, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${k.bg} rounded-xl p-4`}
                >
                  <div className="font-mono text-[9px] tracking-widest uppercase text-gray-400">
                    {k.l}
                  </div>
                  <div className="text-xl font-extrabold text-ink tracking-tight mt-1">
                    {k.v}
                  </div>
                  <div className={`font-mono text-[10px] ${k.text} mt-1`}>{k.s}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 bg-indigo/5 border border-indigo/15 rounded-xl p-3 flex items-start gap-2.5">
              <span className="bg-indigo text-white font-bold text-[9px] px-2 py-0.5 rounded shrink-0 mt-0.5">
                ✦ IA
              </span>
              <span className="text-[11px] text-ink-soft leading-relaxed">
                {dl.dashboard.aiInsight}{" "}
                <span className="font-semibold text-indigo">MX-Retail-02</span>. {dl.dashboard.aiInsightImpact}{" "}
                <span className="font-semibold text-rose">€48K</span>.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}