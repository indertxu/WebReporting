import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, GitMerge, SlidersVertical, FileText, Sparkles, Plug, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const FEATURE_ICONS = [BarChart3, GitMerge, SlidersVertical, FileText, Sparkles, Plug];

export default function Solucion() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-cloud">
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">


          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/30 bg-white mb-6">
              <Sparkles size={12} className="text-indigo" />
              <span className="text-xs text-indigo font-semibold tracking-wide uppercase">
                {t.solucion.badge}
              </span>
            </div>

            <h1 className="font-extrabold text-4xl md:text-6xl text-ink leading-[1.05] tracking-tight mb-6">
              {t.solucion.title1}{" "}
              <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
                {t.solucion.titleHighlight}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-ink-soft/70 leading-relaxed max-w-3xl">
              {t.solucion.desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="font-bold text-2xl md:text-3xl text-ink mb-8">
              {t.solucion.featuresTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.solucion.features.map((f, i) => {
                const Icon = FEATURE_ICONS[i];
                return (
                  <div
                    key={i}
                    className="bg-white border border-mint/15 rounded-2xl p-6 hover:border-indigo/40 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center">
                        <Icon size={18} className="text-indigo" />
                      </div>
                      <h3 className="font-bold text-ink text-[17px]">{f.title}</h3>
                    </div>
                    <p className="text-[14px] text-ink-soft/70 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 bg-white border border-mint/15 rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-bold text-2xl md:text-3xl text-ink mb-8">
              {t.solucion.benefitsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.solucion.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-mint shrink-0 mt-0.5" />
                  <span className="text-ink-soft text-[15px] leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 bg-ink rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mint/40 mb-4">
              <span className="text-[11px] text-mint font-semibold tracking-wider uppercase">
                {t.solucion.ctaBadge}
              </span>
            </div>
            <h2 className="font-bold text-2xl md:text-3xl text-white mb-3">
              {t.solucion.ctaTitle}
            </h2>
            <p className="text-white/70 text-[15px] mb-6 max-w-lg mx-auto">
              {t.solucion.ctaDesc}
            </p>
            <Link
              to="/solicitar-demo"
              className="inline-flex items-center gap-2 bg-white text-ink font-bold text-[15px] px-6 py-3 rounded-xl hover:bg-mint/20 transition-all"
            >
              {t.solucion.ctaButton}
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}