import { useEffect } from "react";
import Header from "@/components/Header";
import Confianza from "@/components/Confianza";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadFormModal from "@/components/LeadFormModal";

const PorQueEscogernos = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <main id="por-que-escogernos" className="pt-20 scroll-mt-24">
        <Confianza />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadFormModal />
    </>
  );
};

export default PorQueEscogernos;
