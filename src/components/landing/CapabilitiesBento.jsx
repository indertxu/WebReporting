import React from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { useI18n } from "@/lib/i18n";

function SpeedBars({ t }) {
  return (
    <div className="space-y-3 mt-5">
      <div className="grid grid-cols-[70px_1fr_55px] items-center gap-3 font-mono text-[11px]">
        <span className="text-gray-400">{t.capabilities.speedBars.withNext}</span>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "18%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-full rounded-full bg-gradient-to-r from-indigo to-cyan"
          />
        </div>
        <span className="text-right font-semibold text-ink">{t.capabilities.speedBars.days25}</span>
      </div>
      <div className="grid grid-cols-[70px_1fr_55px] items-center gap-3 font-mono text-[11px]">
        <span className="text-gray-400">{t.capabilities.speedBars.withoutNext}</span>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="h-full rounded-full bg-gray-300"
          />
        </div>
        <span className="text-right text-gray-400">{t.capabilities.speedBars.days14}</span>
      </div>
    </div>
  );
}

function AIVisual({ t }) {
  const ai = t.capabilities.aiVisual;
  return (
    <div className="relative bg-indigo/5 border border-indigo/15 rounded-xl p-4 font-mono text-[12px] mt-5">
      <span className="absolute -top-2.5 left-4 bg-indigo text-white font-body font-bold text-[10px] tracking-widest px-2 py-0.5 rounded">
        ✦ IA
      </span>
      <div className="text-gray-400 mb-2">
        {ai.question}
      </div>
      <div className="text-gray-700 leading-relaxed">
        {ai.answer1}
        <span className="font-semibold text-indigo">MX-Retail-02</span>
        {ai.answer2}
        <span className="font-semibold text-rose">−€48K</span>
        {ai.answer3}
        <span className="font-semibold text-rose">−72% del delta</span>
        {ai.answer4}
      </div>
    </div>
  );
}

function DimensionChips({ t }) {
  const dims = t.capabilities.dimensions.map((label, i) => ({ label, active: i === 0 }));
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {dims.map((d, i) => (
        <motion.span
          key={d.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08 }}
          className={`px-3 py-2 rounded-lg font-mono text-[12px] border ${
            d.active
              ? "bg-indigo text-white border-indigo"
              : "bg-white text-gray-500 border-gray-200"
          }`}
        >
          {d.label}
        </motion.span>
      ))}
    </div>
  );
}

function ScaleVisual({ t }) {
  return (
    <div className="mt-5">
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-extrabold tracking-tighter text-ink leading-none">
          350
        </span>
        <span className="text-3xl font-extrabold text-indigo">+</span>
        <span className="text-gray-400 text-[13px] ml-2">
          {t.capabilities.scaleVisual.line1}
          <br />
          {t.capabilities.scaleVisual.line2}
        </span>
      </div>
    </div>
  );
}

export default function CapabilitiesBento() {
  const { t } = useI18n();
  const cap = t.capabilities;

  const VISUALS = [
    <SpeedBars t={t} />,
    <AIVisual t={t} />,
    <DimensionChips t={t} />,
    <ScaleVisual t={t} />,
  ];

  return (
    <section id="producto" className="py-28 bg-cloud relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase text-indigo mb-5">
            <span className="w-6 h-px bg-indigo" />
            {cap.tag}
          </div>
          <h2
            className="font-extrabold text-ink leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)" }}
          >
            {cap.title}{" "}
            <span className="bg-gradient-to-r from-indigo to-cyan bg-clip-text text-transparent">
              {cap.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
            {cap.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {cap.caps.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={i === 0 || i === 3 ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <TiltCard intensity={4} className="h-full">
                <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full shadow-[0_8px_30px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_50px_-12px_rgba(79,70,229,0.12)] transition-shadow min-h-[340px] flex flex-col">
                  <span className="font-mono text-[11px] tracking-widest uppercase mb-5 text-indigo">
                    {c.tag}
                  </span>
                  <h3 className="text-ink font-bold text-2xl tracking-tight leading-tight mb-3">
                    {c.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                    {c.desc}
                  </p>
                  <div className="mt-auto">{VISUALS[i]}</div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}