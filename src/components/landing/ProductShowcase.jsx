import React from "react";
import { motion } from "framer-motion";

import TiltCard from "./TiltCard";
import { useI18n } from "@/lib/i18n";

export default function ProductShowcase() {
  const { t } = useI18n();
  const sc = t.showcase;

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06), transparent 70%)" }} />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(79,70,229,0.05), transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <TiltCard intensity={4}>
              <img
                src="/showcase.png"
                alt="Next Reporting dashboard"
                className="w-full h-auto rounded-2xl shadow-[0_30px_80px_-20px_rgba(6,78,59,0.18)] border border-mint/15"
              />
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase text-cyan mb-5">
              <span className="w-6 h-px bg-cyan" />
              {sc.tag}
            </div>
            <h2
              className="font-extrabold text-ink leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              {sc.title}{" "}
              <span className="bg-gradient-to-r from-indigo to-cyan bg-clip-text text-transparent">
                {sc.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              {sc.desc}
            </p>
            <div className="space-y-4">
              {sc.features.map((text, i) => {
                const colors = ["bg-indigo", "bg-cyan", "bg-mint", "bg-amber"];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${colors[i]}`} />
                    <span className="text-gray-600 text-[15px]">{text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}