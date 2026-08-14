import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function LanguageSwitcher({ compact = false }) {
  const { lang, setLang, languages } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = languages.find((l) => l.code === lang);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-gray-500 hover:text-indigo hover:bg-mint/5 transition-all"
      >
        <Globe size={compact ? 15 : 16} className="text-gray-400" />
        <span className="font-mono text-[12px] tracking-wide">{current?.label}</span>
        <ChevronDown size={13} className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-1.5 bg-white border border-mint/15 rounded-xl shadow-[0_12px_40px_-8px_rgba(6,78,59,0.15)] py-1.5 min-w-[150px] z-50"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2 text-sm transition-colors ${
                  lang === l.code ? "text-indigo bg-mint/5 font-semibold" : "text-gray-500 hover:text-ink hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span className="font-mono text-[11px] tracking-wider text-gray-400 w-5">{l.label}</span>
                  {l.name}
                </span>
                {lang === l.code && <Check size={14} className="text-indigo" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}