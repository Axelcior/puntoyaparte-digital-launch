import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Beneficios from "@/components/Beneficios";
import ServiciosPlanesSection from "@/components/ServiciosPlanesSection";
import GrowthAds from "@/components/GrowthAds";
import CostoComparison from "@/components/CostoComparison";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadFormModal from "@/components/LeadFormModal";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Beneficios />
        <ServiciosPlanesSection />
        <GrowthAds />
        <CostoComparison />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadFormModal />
    </>
  );
};

export default Index;
