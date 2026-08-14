import React from "react";
import { motion } from "framer-motion";
import { MapPin, Target, Users, Sparkles, Building2, Globe2, Megaphone, Briefcase, TrendingUp, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const VALUE_ICONS = [Target, Sparkles, Users];
const TEAM_ICONS = [Megaphone, Briefcase, TrendingUp];

export default function Nosotros() {
  const { t } = useI18n();

  return (
    <div className="bg-cloud min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-cloud">
       
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase text-indigo mb-6">
              <span className="w-6 h-px bg-indigo" />
              {t.nosotros.badge}
              <span className="w-6 h-px bg-indigo" />
            </div>
            <h1
              className="font-extrabold text-ink leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
            >
              {t.nosotros.title}{" "}
              <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
                {t.nosotros.titleHighlight}
              </span>
            </h1>
            <p className="text-lg text-ink-soft/70 leading-relaxed max-w-2xl mx-auto">
              {t.nosotros.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-indigo mb-4">
            {t.nosotros.missionTag}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-8 tracking-tight leading-tight">
            {t.nosotros.missionTitle}
          </h2>
          <p className="text-lg text-ink-soft/70 leading-relaxed mb-5">
            {t.nosotros.missionP1}
          </p>
          <p className="text-lg text-ink-soft/70 leading-relaxed">
            {t.nosotros.missionP2}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-indigo mb-4">
              {t.nosotros.valuesTag}
            </div>
            <h2 className="text-3xl font-extrabold text-ink tracking-tight">
              {t.nosotros.valuesTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.nosotros.values.map((v, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-cloud rounded-2xl p-7 border border-mint/15 hover:border-indigo/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-indigo" />
                  </div>
                  <h3 className="text-ink font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-ink-soft/70 text-[14px] leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-indigo mb-4">
            {t.nosotros.teamTag}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink tracking-tight mb-8 leading-tight">
            {t.nosotros.teamTitle}
          </h2>
          <p className="text-lg text-ink-soft/70 leading-[2]">
            {t.nosotros.teamDesc}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-indigo mb-4">
              {t.nosotros.locationTag}
            </div>
            <h2 className="text-3xl font-extrabold text-ink tracking-tight">
              {t.nosotros.locationTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-cloud rounded-2xl border border-mint/15 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-indigo/10 flex items-center justify-center">
                  <MapPin size={20} className="text-indigo" />
                </div>
                <div>
                  <div className="text-ink font-bold text-lg">{t.nosotros.valenciaTitle}</div>
                  <div className="text-[12px] text-ink-soft/60 font-mono uppercase tracking-wider">{t.nosotros.valenciaSubtitle}</div>
                </div>
              </div>
              <p className="text-ink-soft/70 text-[14px] leading-relaxed mb-3">
                {t.nosotros.valenciaDesc}
              </p>
              <div className="text-[13px] text-ink-soft/70 font-mono">
                {t.nosotros.valenciaCity}
              </div>
            </div>

            <div className="bg-cloud rounded-2xl border border-mint/15 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-indigo/10 flex items-center justify-center">
                  <MapPin size={20} className="text-indigo" />
                </div>
                <div>
                  <div className="text-ink font-bold text-lg">{t.nosotros.madridTitle}</div>
                  <div className="text-[12px] text-ink-soft/60 font-mono uppercase tracking-wider">{t.nosotros.madridSubtitle}</div>
                </div>
              </div>
              <p className="text-ink-soft/70 text-[14px] leading-relaxed mb-3">
                {t.nosotros.madridDesc}
              </p>
              <div className="text-[13px] text-ink-soft/70 font-mono">
                {t.nosotros.madridCity}
              </div>
            </div>

            <div className="bg-cloud rounded-2xl border border-mint/15 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-mint/15 flex items-center justify-center">
                  <Building2 size={20} className="text-mint" />
                </div>
                <div>
                  <div className="text-ink font-bold text-lg">{t.nosotros.copenhagenTitle}</div>
                  <div className="text-[12px] text-ink-soft/60 font-mono uppercase tracking-wider">{t.nosotros.copenhagenSubtitle}</div>
                </div>
              </div>
              <p className="text-ink-soft/70 text-[14px] leading-relaxed mb-3">
                {t.nosotros.copenhagenDesc}
              </p>
              <div className="text-[13px] text-ink-soft/70 font-mono">
                {t.nosotros.copenhagenCity}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-[13px] text-ink-soft/60 text-center">
            <Globe2 size={16} className="text-indigo shrink-0" />
            <span dangerouslySetInnerHTML={{ __html: t.nosotros.languagesLine }} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}