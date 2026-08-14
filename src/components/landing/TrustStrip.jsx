import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const LOGOS = [
  { name: "GRUPO ÍBERA", mono: false },
  { name: "MERIDIAN", mono: true },
  { name: "ATLAS HOLDING", mono: false },
  { name: "VELA", mono: true },
  { name: "NORTHWIND", mono: false },
  { name: "ARBOR", mono: true },
];

export default function TrustStrip() {
  const { t } = useI18n();

  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-gray-300 whitespace-nowrap text-center sm:text-left">
          {t.trust.line1}
          <br className="hidden sm:block" />
          {t.trust.line2}
        </div>
        <div className="flex-1 flex flex-wrap justify-around items-center gap-8 sm:gap-12">
          {LOGOS.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className={`text-ink text-[15px] tracking-tight cursor-default transition-opacity ${
                l.mono ? "font-mono font-medium" : "font-bold"
              }`}
            >
              {l.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}