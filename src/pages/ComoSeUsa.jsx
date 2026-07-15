import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, LineChart, GitMerge, Users, Zap, Shield, Layers, Clock, TrendingUp, FileCheck, Bell, Database, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const CAPABILITY_ICONS = {
  cfo: [LineChart, GitMerge, Sparkles, Bell, FileCheck, Target],
  controller: [Layers, Shield, Bell, FileCheck, Database, Clock],
  consultor: [Users, Zap, Database, Shield, FileCheck, TrendingUp],
};

export default function ComoSeUsa() {
  const { t } = useI18n();
  const [activeRole, setActiveRole] = useState("cfo");
  const role = t.comoSeUsa.roles.find((r) => r.id === activeRole);

  return (
    <div className="min-h-screen bg-cloud">
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t.comoSeUsa.backToHome}
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/30 bg-white mb-6">
              <Sparkles size={12} className="text-indigo" />
              <span className="text-xs text-indigo font-semibold tracking-wide uppercase">
                {t.comoSeUsa.badge}
              </span>
            </div>

            <h1 className="font-extrabold text-4xl md:text-6xl text-ink leading-[1.05] tracking-tight mb-6">
              {t.comoSeUsa.title1}{" "}
              <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
                {t.comoSeUsa.titleHighlight}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-ink-soft/70 leading-relaxed max-w-3xl">
              {t.comoSeUsa.desc}
            </p>
          </motion.div>

          <div className="mt-16 flex flex-col sm:flex-row gap-3 border-b border-gray-200">
            {t.comoSeUsa.roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveRole(r.id)}
                className={`px-6 py-4 font-semibold text-[15px] transition-all relative ${
                  activeRole === r.id ? "text-indigo" : "text-gray-500 hover:text-ink"
                }`}
              >
                {r.label}
                {activeRole === r.id && (
                  <motion.div layoutId="tab-underline" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-indigo" />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-12"
            >
              <div className="mb-12">
                <h2 className="font-extrabold text-3xl md:text-4xl text-ink mb-4 leading-tight">
                  {role.tagline}
                </h2>
                <p className="text-lg text-ink-soft/70 leading-relaxed max-w-3xl">
                  {role.intro}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
                {role.metrics.map((m, i) => (
                  <div key={i} className="bg-white border border-mint/15 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-extrabold text-ink mb-2 bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
                      {m.n}
                    </div>
                    <div className="text-[13px] text-ink-soft/60">{m.l}</div>
                  </div>
                ))}
              </div>

              <div className="mb-16">
                <h3 className="font-bold text-2xl text-ink mb-8">
                  {t.comoSeUsa.capabilitiesTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {role.capabilities.map((c, i) => {
                    const Icon = CAPABILITY_ICONS[activeRole][i];
                    return (
                      <div key={i} className="bg-white border border-mint/15 rounded-2xl p-6 hover:border-indigo/40 hover:shadow-lg transition-all">
                        <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center mb-4">
                          <Icon size={18} className="text-indigo" />
                        </div>
                        <h4 className="font-bold text-ink text-[16px] mb-2">{c.title}</h4>
                        <p className="text-[14px] text-ink-soft/70 leading-relaxed">{c.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white border border-mint/15 rounded-3xl p-8 md:p-12 mb-16">
                <h3 className="font-bold text-2xl text-ink mb-8">{role.scenario.title}</h3>
                <div className="space-y-6">
                  {role.scenario.steps.map((s, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="shrink-0 w-24 md:w-28">
                        <div className="font-mono text-[11px] tracking-widest uppercase text-indigo font-bold">{s.time}</div>
                      </div>
                      <div className="flex-1 pb-6 border-b border-gray-100 last:border-b-0">
                        <div className="font-bold text-ink text-[16px] mb-2">{s.title}</div>
                        <p className="text-[14px] text-ink-soft/70 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-ink rounded-3xl p-10 md:p-16 text-center border border-mint/20 shadow-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/30 bg-mint/10 mb-6">
              <span className="text-[11px] text-mint font-semibold tracking-[0.15em] uppercase">
                {t.comoSeUsa.ctaBadge}
              </span>
            </div>
            <h2 className="font-extrabold text-3xl md:text-4xl text-white mb-4 tracking-tight leading-tight">
              {t.comoSeUsa.ctaTitle}
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              {t.comoSeUsa.ctaDesc}
            </p>
            <Link
              to="/solicitar-demo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-white text-ink font-semibold text-[15px] px-7 py-3.5 rounded-lg hover:bg-mint hover:text-ink transition-all shadow-lg"
            >
              {t.comoSeUsa.ctaButton}
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}