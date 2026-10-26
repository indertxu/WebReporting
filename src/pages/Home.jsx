import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PFooter from "@/components/portal/PFooter";
import Portal, { NextStep } from "@/components/portal/Portal";
import PHero from "@/components/portal/PHero";
import { PClose, PFlow, PAuto, PTasks, PMoney, PScreens, PPlans, PSecurity, PFaq, PContact } from "@/components/portal/PSections";
import { useI18n } from "@/lib/i18n";
import "@/components/report/nr.css";
import "@/components/portal/portal.css";

// Portada: la web es el propio portal de Next Reporting, recorrida paso a paso.
// Los textos están en src/lib/landing/{es,en,pt,da}.js
export default function Home() {
  const { hash } = useLocation();
  const { lang } = useI18n();
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 150);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <Portal footer={<PFooter />}>
      <PHero />
      <NextStep to="cierre" />
      <PClose />
      <NextStep to="datos" />
      <PFlow />
      <NextStep to="auto" />
      <PAuto />
      <NextStep to="ahorro" />
      <PTasks />
      <NextStep to="monedas" />
      <PMoney />
      <NextStep to="pantallas" />
      <PScreens />
      <NextStep to="planes" />
      <PPlans />
      <NextStep to="seguridad" />
      <PSecurity />
      <NextStep to="faq" />
      <PFaq />
      <NextStep to="contacto" />
      <PContact />
    </Portal>
  );
}
