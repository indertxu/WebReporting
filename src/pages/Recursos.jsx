import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, HelpCircle, BookOpen, Video, ChevronDown, Calendar, Clock, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-indigo transition-colors"
      >
        <span className="font-semibold text-ink text-[16px] md:text-[17px]">{item.q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180 text-indigo" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-[15px] text-ink-soft/70 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Recursos() {
  const { t } = useI18n();
  const [activeSection, setActiveSection] = useState("preguntas");
  const [openFaq, setOpenFaq] = useState(0);
  const [activeVimeoId, setActiveVimeoId] = useState(null);
  const [activeBlog, setActiveBlog] = useState(null);

  const SECTIONS = [
    { id: "preguntas", label: t.recursos.sections.preguntas, Icon: HelpCircle },
    { id: "blog", label: t.recursos.sections.blog, Icon: BookOpen },
    { id: "webinars", label: t.recursos.sections.webinars, Icon: Video },
  ];

  return (
    <div className="min-h-screen bg-cloud">
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">


          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/30 bg-white mb-6">
              <Sparkles size={12} className="text-indigo" />
              <span className="text-xs text-indigo font-semibold tracking-wide uppercase">
                {t.recursos.badge}
              </span>
            </div>

            <h1 className="font-extrabold text-4xl md:text-6xl text-ink leading-[1.05] tracking-tight mb-6">
              {t.recursos.title1}{" "}
              <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
                {t.recursos.titleHighlight}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-ink-soft/70 leading-relaxed max-w-3xl">
              {t.recursos.desc}
            </p>
          </motion.div>

          <div className="mt-16 flex flex-col sm:flex-row gap-3 border-b border-gray-200">
            {SECTIONS.map((section) => {
              const IconComp = section.Icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`inline-flex items-center gap-2 px-6 py-4 font-semibold text-[15px] transition-all relative ${
                    activeSection === section.id ? "text-indigo" : "text-gray-500 hover:text-ink"
                  }`}
                >
                  <IconComp size={16} />
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div layoutId="recursos-tab-underline" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-indigo" />
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-12"
            >
              {activeSection === "preguntas" && (
                <div className="bg-white border border-mint/15 rounded-3xl p-6 md:p-10">
                  <div className="mb-8">
                    <h2 className="font-bold text-2xl md:text-3xl text-ink mb-3">
                      {t.recursos.faqTitle}
                    </h2>
                    <p className="text-[15px] text-ink-soft/70 leading-relaxed">
                      {t.recursos.faqDesc}
                    </p>
                  </div>
                  <div>
                    {t.recursos.faqs.map((item, i) => (
                      <FaqItem
                        key={i}
                        item={item}
                        isOpen={openFaq === i}
                        onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "blog" && (
                <div>
                  <div className="mb-8">
                    <h2 className="font-bold text-2xl md:text-3xl text-ink mb-3">
                      {t.recursos.blogTitle}
                    </h2>
                    <p className="text-[15px] text-ink-soft/70 leading-relaxed">
                      {t.recursos.blogDesc}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {t.recursos.blogs.map((b, i) => (
                      <article
                        key={i}
                        onClick={() => setActiveBlog(b)}
                        className="bg-white border border-mint/15 rounded-2xl p-6 hover:border-indigo/40 hover:shadow-lg transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-mint/10 text-[10px] font-semibold text-indigo tracking-wider uppercase">
                            {b.tag}
                          </span>
                          <span className="text-[12px] text-gray-400">{b.date}</span>
                          <span className="inline-flex items-center gap-1 text-[12px] text-gray-400">
                            <Clock size={11} /> {b.readTime}
                          </span>
                        </div>
                        <h3 className="font-bold text-ink text-[18px] mb-3 leading-tight group-hover:text-indigo transition-colors">
                          {b.title}
                        </h3>
                        <p className="text-[14px] text-ink-soft/70 leading-relaxed mb-4">
                          {b.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-indigo">
                          {t.recursos.blogReadMore} <ArrowRight size={14} />
                        </span>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "webinars" && (
                <div>
                  <div className="mb-8">
                    <h2 className="font-bold text-2xl md:text-3xl text-ink mb-3">
                      {t.recursos.webinarsTitle}
                    </h2>
                    <p className="text-[15px] text-ink-soft/70 leading-relaxed">
                      {t.recursos.webinarsDesc}
                    </p>
                  </div>
                  <div className="space-y-5">
                    {t.recursos.webinars.map((w, i) => {
                      const isLive = w.type === t.recursos.typeLive;
                      return (
                        <div
                          key={i}
                          className="bg-white border border-mint/15 rounded-2xl p-6 md:p-8 hover:border-indigo/40 hover:shadow-lg transition-all"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3 flex-wrap">
                              <span
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase ${
                                  isLive ? "bg-rose/10 text-rose" : "bg-mint/10 text-indigo"
                                }`}
                              >
                                {isLive && <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />}
                                {w.type}
                              </span>
                              <span className="inline-flex items-center gap-1 text-[13px] text-ink-soft/70">
                                <Calendar size={13} /> {w.date}
                              </span>
                              <span className="inline-flex items-center gap-1 text-[13px] text-ink-soft/70">
                                <Clock size={13} /> {w.duration}
                              </span>
                            </div>
                          </div>
                          <h3 className="font-bold text-ink text-[18px] md:text-[19px] mb-2 leading-tight">
                            {w.title}
                          </h3>
                          <p className="text-[14px] text-ink-soft/70 leading-relaxed mb-5">
                            {w.speakers}
                          </p>
                          <button
                            type="button"
                            onClick={() => w.vimeoId && setActiveVimeoId(w.vimeoId)}
                            disabled={!w.vimeoId}
                            className="inline-flex items-center gap-2 bg-ink hover:bg-indigo text-white font-semibold text-[13px] px-5 py-2.5 rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-ink"
                          >
                            {w.cta} <ArrowRight size={14} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 bg-ink rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mint/40 mb-4">
              <span className="text-[11px] text-mint font-semibold tracking-wider uppercase">
                {t.recursos.ctaBadge}
              </span>
            </div>
            <h2 className="font-bold text-2xl md:text-3xl text-white mb-3">
              ¿Prefiere una demostración en vivo?
            </h2>
            <p className="text-white/70 text-[15px] mb-6 max-w-lg mx-auto">
              {t.recursos.ctaDesc}
            </p>
            <Link
              to="/solicitar-demo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-white text-ink font-bold text-[15px] px-6 py-3 rounded-xl hover:bg-mint/20 transition-all"
            >
              {t.recursos.ctaButton}
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />

      <AnimatePresence>
        {activeVimeoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVimeoId(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveVimeoId(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label={t.recursos.closeAria}
              >
                <X size={20} />
              </button>
              <iframe
                src={`https://player.vimeo.com/video/${activeVimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Webinar Next Reporting"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveBlog(null)}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 px-8 py-5 border-b border-gray-100">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-mint/10 text-[10px] font-semibold text-indigo tracking-wider uppercase">
                    {activeBlog.tag}
                  </span>
                  <span className="text-[12px] text-gray-400">{activeBlog.date}</span>
                  <span className="inline-flex items-center gap-1 text-[12px] text-gray-400">
                    <Clock size={11} /> {activeBlog.readTime}
                  </span>
                </div>
                <button
                  onClick={() => setActiveBlog(null)}
                  className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors shrink-0"
                >
                  <X size={18} className="text-gray-500" />
                </button>
              </div>

              <div className="overflow-y-auto px-8 py-6">
                <h2 className="font-extrabold text-ink text-2xl md:text-3xl leading-tight mb-4">
                  {activeBlog.title}
                </h2>
                <p className="text-[16px] text-ink-soft/80 leading-relaxed font-medium mb-6 border-l-4 border-indigo pl-4">
                  {activeBlog.excerpt}
                </p>
                {activeBlog.content ? (
                  activeBlog.content.split("\n\n").map((para, j) => (
                    <p key={j} className="text-[15px] text-ink-soft/75 leading-relaxed mb-4">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="text-[14px] text-gray-400 italic">
                    (Contenido completo del artículo próximamente.)
                  </p>
                )}
              </div>

              <div className="px-8 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end">
                <button
                  onClick={() => setActiveBlog(null)}
                  className="bg-ink hover:bg-indigo text-white font-semibold text-[13px] px-5 py-2.5 rounded-lg transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}