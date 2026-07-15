import React from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { DemoForm } from "@/components/landing/FinalCTA";

export default function SolicitarDemo() {
  const { t } = useI18n();
  const fc = t.finalCta;

  return (
    <div className="min-h-screen bg-cloud flex flex-col">
      <Navbar />

      <section className="flex-1 pt-24 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* IZQUIERDA: texto */}
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase text-indigo mb-5">
                <span className="w-6 h-px bg-indigo" />
                {fc.tag}
              </div>
              <h1
                className="font-extrabold text-ink leading-[1.05] tracking-tight mb-5"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
              >
                {fc.title}{" "}
                <span className="bg-gradient-to-r from-indigo to-mint bg-clip-text text-transparent">
                  {fc.titleHighlight}
                </span>
              </h1>
              <p className="text-[15px] text-ink-soft/70 leading-relaxed mb-6 max-w-lg">
                {fc.desc}
              </p>
              <div className="space-y-3">
                {fc.checks.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[14px] text-ink-soft/70">
                    <CheckCircle2 size={16} className="text-mint shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DERECHA: formulario */}
            <div>
              <DemoForm t={t} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}