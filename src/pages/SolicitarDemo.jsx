import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import FinalCTA from "@/components/landing/FinalCTA";

export default function SolicitarDemo() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-cloud">
      <Navbar />

      <div className="pt-32 pb-2 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </div>

      <FinalCTA startWithForm />

      <Footer />
    </div>
  );
}