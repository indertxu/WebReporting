import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function LegalModal({ open, type, onClose }) {
  const { t } = useI18n();
  if (!type) return null;

  const content = t.legal[type];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
              <h2 className="text-ink font-bold text-xl">{content.title}</h2>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <X size={18} className="text-gray-500" />
              </button>
            </div>

            <div className="overflow-y-auto px-8 py-6 space-y-5 text-[14.5px] text-ink-soft leading-relaxed">
              {content.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h3 className="text-ink font-semibold text-[15px] mb-2">
                      {section.heading}
                    </h3>
                  )}
                  {section.body.split("\n\n").map((para, j) => (
                    <p key={j} className="mb-2 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              ))}

              {content.updated && (
                <p className="font-mono text-[11px] text-gray-400 tracking-wider pt-4 border-t border-gray-100">
                  {content.updated}
                </p>
              )}
            </div>

            <div className="px-8 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end">
              <button
                onClick={onClose}
                className="bg-ink hover:bg-indigo text-white font-semibold text-[13px] px-5 py-2.5 rounded-lg transition-colors"
              >
                {content.closeButton}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}