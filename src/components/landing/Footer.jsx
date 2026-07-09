import React, { useState } from "react";
import { useI18n } from "@/lib/i18n";
import LegalModal from "./LegalModal";

export default function Footer() {
  const { t, lang, languages, setLang } = useI18n();
  const ft = t.footer;
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <img src="/favicon.svg" alt="Next Reporting" className="w-9 h-9 rounded-lg" />
                <div className="flex flex-col leading-none">
                  <span className="text-ink font-extrabold text-lg tracking-tight">
                    Next Reporting
                  </span>
                  <span className="font-mono text-[8px] tracking-[0.18em] uppercase text-gray-400 mt-0.5">
                    by Next Finance
                  </span>
                </div>
              </div>
              <p className="text-[14px] text-gray-400 max-w-xs leading-relaxed mb-5">
                {ft.tagline}
              </p>
              <div className="flex gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`font-mono text-[11px] tracking-wider px-2 py-1 rounded transition-colors ${
                      lang === l.code
                        ? "bg-ink text-white font-semibold"
                        : "border border-gray-200 text-gray-400 hover:text-gray-600 cursor-pointer"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {ft.columns.map((col, i) => (
              <div key={i}>
                <h4 className="font-mono text-[10px] tracking-[0.14em] uppercase text-gray-400 mb-5 font-medium">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link, idx) => {
                    if (link.type === "mail") {
                      return (
                        <li key={idx}>
                          <button
                            type="button"
                            onClick={() => window.location.href = `mailto:${link.email}`}
                            className="text-[14px] text-gray-500 hover:text-indigo transition-colors text-left"
                          >
                            {link.label}
                          </button>
                        </li>
                      );
                    }
                    if (link.type === "modal") {
                      return (
                        <li key={idx}>
                          <button
                            type="button"
                            onClick={() => setOpenModal(link.modal)}
                            className="text-[14px] text-gray-500 hover:text-indigo transition-colors text-left"
                          >
                            {link.label}
                          </button>
                        </li>
                      );
                    }
                    return (
                      <li key={idx}>
                        <button
                          type="button"
                          className="text-[14px] text-gray-500 hover:text-indigo transition-colors text-left"
                        >
                          {link.label ?? link}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between font-mono text-[11px] text-gray-300 tracking-wider gap-2">
            <span>{ft.copyright}</span>
            <span>{ft.builtFor}</span>
          </div>
        </div>
      </footer>

      <LegalModal
        open={openModal !== null}
        type={openModal}
        onClose={() => setOpenModal(null)}
      />
    </>
  );
}