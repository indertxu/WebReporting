import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function Testimonial() {
  const { t } = useI18n();
  const tm = t.testimonial;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cloud to-white border border-gray-100 rounded-[32px] p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center shadow-[0_8px_40px_-12px_rgba(79,70,229,0.08)]"
        >
          <div className="lg:col-span-3">
            <div className="text-5xl text-indigo/20 font-serif leading-none mb-4">"</div>
            <blockquote className="text-ink font-bold text-2xl lg:text-3xl leading-snug tracking-tight mb-8">
              {tm.quote1}{" "}
              <span className="bg-gradient-to-r from-indigo to-cyan bg-clip-text text-transparent">
                {tm.quote2}
              </span>
              {tm.quote3}
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo to-cyan flex items-center justify-center text-white font-bold text-sm">
                ME
              </div>
              <div>
                <div className="text-ink font-bold text-[15px]">
                  {tm.name}
                </div>
                <div className="font-mono text-[11px] text-gray-400 tracking-wider">
                  {tm.role}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-5 lg:pl-8 lg:border-l border-gray-100">
            {tm.metrics.map((m, i) => {
              const colors = ["text-indigo", "text-cyan", "text-mint", "text-amber"];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`text-3xl font-extrabold tracking-tight ${colors[i]}`}>
                    {m.n}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-gray-400 mt-1">
                    {m.l}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}