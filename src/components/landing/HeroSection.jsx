import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, BarChart3, GitMerge, SlidersVertical, FileText, Plug } from "lucide-react";
import MagneticButton from "./MagneticButton";
import DashboardMockup from "./DashboardMockup";
import { useI18n } from "@/lib/i18n";

function ParallaxBlobs() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: mouse.x, y: mouse.y }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(5,150,105,0.10), transparent 70%)" }}
      />
      <motion.div
        animate={{ x: -mouse.x, y: -mouse.y }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-40 -right-32 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08), transparent 70%)" }}
      />
      <motion.div
        animate={{ x: mouse.x * 0.5, y: -mouse.y * 0.5 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.06), transparent 70%)" }}
      />
    </div>
  );
}

export default function HeroSection() {
  const { t } = useI18n();

  const FLOATING_CHIPS = [
    { text: t.hero.chips.ebitda, color: "text-mint", top: "8%", left: "2%", delay: 1.2 },
    { text: t.hero.chips.boardPack, color: "text-indigo", top: "70%", left: "-4%", delay: 1.5 },
    { text: t.hero.chips.ai, color: "text-rose", top: "40%", right: "-6%", delay: 1.8 },
    { text: t.hero.chips.entities, color: "text-cyan", top: "88%", right: "4%", delay: 2.1 },
  ];

  const FEATURE_PILLS = [
    { icon: BarChart3, label: t.hero.pills.dashboards },
    { icon: GitMerge, label: t.hero.pills.drillDowns },
    { icon: SlidersVertical, label: t.hero.pills.kpiBuilder },
    { icon: FileText, label: t.hero.pills.autoMemos },
    { icon: Sparkles, label: t.hero.pills.aiAnalysis },
    { icon: Plug, label: t.hero.pills.api },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-cloud">
      <div className="absolute top-0 left-0 right-0 h-[55%] bg-gradient-to-b from-mint/5 to-transparent pointer-events-none" />
      <ParallaxBlobs />

      {/* Floating chips */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {FLOATING_CHIPS.map((chip, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: chip.delay, duration: 0.5 }}
            className="absolute z-20"
            style={{ top: chip.top, left: chip.left, right: chip.right }}
          >
            <div
              className="bg-white shadow-lg shadow-emerald-900/5 border border-mint/15 rounded-xl px-3.5 py-2 font-mono text-[11px] font-medium flex items-center gap-2 animate-float-soft"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${chip.color.replace("text-", "bg-")}`} />
              <span className={chip.color}>{chip.text}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center gap-2 mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/30 bg-mint/5">
                <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse-glow" />
                <span className="text-xs text-indigo font-medium tracking-wide">
                  {t.hero.badge1}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-indigo/30 bg-gradient-to-r from-mint/10 to-cloud">
                <Sparkles size={11} className="text-indigo" />
                <span className="text-xs text-indigo font-semibold tracking-wide">
                  {t.hero.badge2}
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-extrabold text-ink leading-[1.0] tracking-[-0.035em] mb-6"
              style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)" }}
            >
              <span className="block">{t.hero.title1}</span>
              <span className="block">
                {t.hero.title2}{" "}
                <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
                  {t.hero.title2Highlight}
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-ink-soft/60 max-w-[520px] mb-8 leading-relaxed"
            >
              {t.hero.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <MagneticButton href="#demo" primary>
                {t.hero.ctaPrimary}
              </MagneticButton>
              <MagneticButton href="#producto" primary={false}>
                {t.hero.ctaSecondary}
              </MagneticButton>
            </motion.div>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-2"
            >
              {FEATURE_PILLS.map((pill) => (
                <motion.div
                  key={pill.label}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-mint/5 border border-mint/15 hover:border-mint/30 transition-colors"
                >
                  <pill.icon size={13} className="text-indigo" />
                  <span className="text-xs text-ink-soft font-medium">{pill.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="relative animate-float-soft"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}