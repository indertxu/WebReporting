import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

const SIGNIN_URL = "https://nextreporting.atebiz.com/";

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const NAV_LINKS = [
    { label: t.nav.product, href: "/solucion", isRoute: true },
    { label: t.nav.howToUse, href: "/como-se-usa", isRoute: true },
    { label: t.nav.resources, href: "/recursos", isRoute: true },
    { label: t.nav.about, href: "/nosotros", isRoute: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openSignIn = () => window.open(SIGNIN_URL, "_blank", "noopener,noreferrer");

  return (
    
     <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-[68px] pl-6 pr-6 lg:pr-10">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          {/* Brand */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5"
          >
            <img src="/favicon.svg" alt="Next Reporting" className="w-9 h-9 rounded-lg" />
            <div className="flex flex-col leading-none text-left">
              <span className="text-ink font-extrabold text-base tracking-tight">
                Next Reporting
              </span>
              <span className="font-mono text-[8px] tracking-[0.18em] uppercase text-gray-400 mt-0.5">
                {t.nav.byNextFinance}
              </span>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                type="button"
                onClick={() => {
                  if (l.isRoute) {
                    navigate(l.href);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    const el = document.querySelector(l.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-base text-gray-800 hover:text-indigo transition-colors font-bold"
              >
                {l.label}
              </button>
            ))}
            <LanguageSwitcher />
            <MagneticButton
              to="/solicitar-demo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              primary
            >
              {t.nav.requestDemo}
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher compact />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 hover:text-ink p-2"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Sign in — anchored to the far right of the viewport */}
        <button
          type="button"
          onClick={openSignIn}
          className="hidden lg:block text-[17px] text-ink hover:text-indigo transition-colors font-bold ml-6 whitespace-nowrap"
        >
          {t.nav.signIn}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    if (l.isRoute) {
                      navigate(l.href);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      const el = document.querySelector(l.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block w-full text-left text-gray-600 hover:text-indigo text-base font-medium"
                >
                  {l.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openSignIn();
                }}
                className="block w-full text-left text-ink text-base font-bold"
              >
                {t.nav.signIn}
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/solicitar-demo");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block w-full bg-ink text-white text-center font-semibold py-3 rounded-full"
              >
                {t.nav.requestDemo}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}