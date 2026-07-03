import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroKPICard, { CARDS, COLOR_MAP } from "./HeroKPICard";
import KPIModal from "./KPIModal";
import { useI18n } from "@/lib/i18n";

export default function KPISection() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <section className="bg-cloud py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <HeroKPICard key={i} index={i} onClick={() => setActiveIndex(i)} />
            ))}
          </div>
          <p className="text-center font-mono text-[10px] tracking-widest uppercase text-gray-300 mt-5">
            {t.kpi.hint}
          </p>
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && (
          <KPIModal
            card={CARDS[activeIndex]}
            colors={COLOR_MAP[CARDS[activeIndex].color]}
            onClose={() => setActiveIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}