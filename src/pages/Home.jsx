import React from "react";
import ScrollProgress from "@/components/landing/ScrollProgress";
import CursorGlow from "@/components/landing/CursorGlow";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import KPISection from "@/components/landing/KPISection";
import TrustStrip from "@/components/landing/TrustStrip";
import CapabilitiesBento from "@/components/landing/CapabilitiesBento";
import ProductShowcase from "@/components/landing/ProductShowcase";
import DayInTheLife from "@/components/landing/DayInTheLife";
import ScaleNumbers from "@/components/landing/ScaleNumbers";
import CoverageMap from "@/components/landing/CoverageMap";
import Testimonial from "@/components/landing/Testimonial";
import PartnerStrip from "@/components/landing/PartnerStrip";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="bg-cloud min-h-screen relative">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <KPISection />
      <TrustStrip />
      <CapabilitiesBento />
      <ProductShowcase />
      <DayInTheLife />
      <ScaleNumbers />
      <CoverageMap />
      <Testimonial />
      <PartnerStrip />
      <FinalCTA />
      <Footer />
    </div>
  );
}