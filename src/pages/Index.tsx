import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Beneficios from "@/components/Beneficios";
import Servicios from "@/components/Servicios";
import Planes from "@/components/Planes";
import Portafolio from "@/components/Portafolio";
import GrowthAds from "@/components/GrowthAds";
import Proceso from "@/components/Proceso";
import Confianza from "@/components/Confianza";
import CostoComparison from "@/components/CostoComparison";
import FAQ from "@/components/FAQ";
import PreCierre from "@/components/PreCierre";
import FinalCTA from "@/components/FinalCTA";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Problema />
      <Beneficios />
      <Servicios />
      <Planes />
      <Portafolio />
      <GrowthAds />
      <Proceso />
      <Confianza />
      <CostoComparison />
      <FAQ />
      <PreCierre />
      <FinalCTA />
      <LeadForm />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
