import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function PartnerStrip() {
  const { t } = useI18n();
  const p = t.partner;

  return (
    <section className="bg-cloud border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl px-6 py-4">
              <div className="flex items-center gap-2">
                <img src="/favicon.svg" alt="Next Reporting" className="w-7 h-7 rounded-lg" />
                <span className="text-ink font-bold text-lg tracking-tight">
                  Next Reporting
                </span>
              </div>
            </div>
            <span className="text-gray-300 text-3xl font-light">+</span>
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#1a1aff] flex items-center justify-center text-white font-black text-sm">K</span>
                <span className="text-ink font-bold text-lg tracking-tight">
                  konsolidator.
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-md text-center md:text-right">
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-indigo mb-2">
              {p.tag}
            </div>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              <span className="font-semibold text-ink">{p.desc1}</span>{" "}
              <span className="font-semibold text-indigo">{p.desc2}</span>{" "}
              {p.desc3}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}