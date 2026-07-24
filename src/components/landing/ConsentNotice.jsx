import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import LegalModal from "./LegalModal";

const STORAGE_KEY = "nr_cookie_consent";
const ANALYTICS_URL =
  "https://script.google.com/macros/s/AKfycbw950BSOYt-BUOK5Ny8Sd0INGMXEHsQnuRqYACJWleGeY1WsYEkq_eB0HaNUVi0BDntYw/exec";

/**
 * Recoge información del visitante y la envía al Sheet vía Apps Script.
 * Solo se llama si el usuario pulsa "Aceptar todas".
 */
async function trackVisit(choice) {
  const basic = {
    source: "next_reporting_web", // el Apps Script enruta a la hoja "Next Reporting Web"
    consent: choice,
    fecha: new Date().toISOString(),
    pageUrl: window.location.href,
    referrer: document.referrer || "(directo)",
    userAgent: navigator.userAgent,
    language: navigator.language,
    languages: (navigator.languages || []).join(", "),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    screen: `${window.screen.width}x${window.screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    colorDepth: window.screen.colorDepth,
    platform: navigator.platform || "",
    cookieEnabled: navigator.cookieEnabled,
  };

  let geo = { ip: "", country: "", region: "", city: "", isp: "", postal: "", latitude: "", longitude: "" };
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (res.ok) {
      const data = await res.json();
      geo = {
        ip: data.ip || "",
        country: data.country_name || "",
        region: data.region || "",
        city: data.city || "",
        isp: data.org || "",
        postal: data.postal || "",
        latitude: data.latitude || "",
        longitude: data.longitude || "",
      };
    }
  } catch (err) {
    console.warn("[NR] geo IP:", err);
  }

  try {
    await fetch(ANALYTICS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...basic, ...geo }),
    });
  } catch (err) {
    console.warn("[NR] tracking:", err);
  }
}

export default function ConsentNotice() {
  const { t } = useI18n();
  const cb = t.cookieBanner;
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show only if the user hasn't answered yet
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so it doesn't jump in immediately on page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ choice, date: new Date().toISOString() })
    );
    setVisible(false);
    // Solo trackea si el usuario aceptó todo
    if (choice === "accepted") {
      trackVisit(choice);
    }
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[90]"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-mint/20 p-5 relative">
              <button
                type="button"
                onClick={() => handleChoice("dismissed")}
                className="absolute top-3 right-3 w-7 h-7 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X size={14} className="text-gray-400" />
              </button>

              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-mint/10 flex items-center justify-center shrink-0">
                  <Cookie size={18} className="text-mint" />
                </div>
                <div>
                  <h3 className="text-ink font-bold text-[15px] mb-1">
                    {cb.title}
                  </h3>
                  <p className="text-[13px] text-ink-soft/70 leading-relaxed">
                    {cb.desc}{" "}
                    <button
                      type="button"
                      onClick={() => setShowModal(true)}
                      className="text-indigo hover:underline font-medium"
                    >
                      {cb.learnMore}
                    </button>
                    .
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => handleChoice("accepted")}
                  className="flex-1 bg-ink hover:bg-indigo text-white font-semibold text-[13px] py-2.5 px-4 rounded-lg transition-colors shadow-sm"
                >
                  {cb.acceptAll}
                </button>
                <button
                  type="button"
                  onClick={() => handleChoice("necessary_only")}
                  className="flex-1 bg-white border border-gray-200 hover:border-indigo text-ink hover:text-indigo font-semibold text-[13px] py-2.5 px-4 rounded-lg transition-colors"
                >
                  {cb.necessaryOnly}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <LegalModal
        open={showModal}
        type={showModal ? "cookies" : null}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}