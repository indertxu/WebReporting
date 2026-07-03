import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { useI18n } from "@/lib/i18n";

const STATS_DATA = [
  { value: 350, suffix: "+", color: "from-indigo to-mint" },
  { value: 16, suffix: "", color: "from-mint to-amber" },
  { value: 20, suffix: "+", color: "from-amber to-rose" },
  { value: 84, prefix: "−", suffix: "%", color: "from-indigo to-amber" },
];

export default function ScaleNumbers() {
  const { t } = useI18n();
  const sc = t.scale;

  return (
    <section id="escala" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase text-indigo mb-5">
            <span className="w-6 h-px bg-indigo" />
            {sc.tag}
          </div>
          <h2
            className="font-extrabold text-ink leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)" }}
          >
            {sc.title}{" "}
            <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
              {sc.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-ink-soft/60 leading-relaxed max-w-xl">
            {sc.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS_DATA.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-mint/15 rounded-2xl p-7 shadow-[0_8px_30px_-8px_rgba(6,78,59,0.06)] hover:shadow-[0_16px_40px_-12px_rgba(5,150,105,0.12)] transition-shadow"
            >
              <div className="font-mono text-[11px] tracking-widest uppercase text-gray-400 mb-3">
                {sc.stats[i].label}
              </div>
              <div className="font-extrabold text-5xl lg:text-6xl tracking-tight leading-none mb-3">
                <AnimatedCounter
                  value={s.value}
                  prefix={s.prefix || ""}
                  suffix={s.suffix || ""}
                  className={`bg-gradient-to-br ${s.color} bg-clip-text text-transparent`}
                />
              </div>
              <div className="text-[13px] text-ink-soft/50 leading-relaxed">
                {sc.stats[i].desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}