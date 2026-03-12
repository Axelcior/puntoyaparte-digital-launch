import Header from "@/components/Header";
import Confianza from "@/components/Confianza";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadFormModal from "@/components/LeadFormModal";

const PorQueEscogernos = () => (
  <>
    <Header />
    <main className="pt-20">
      <Confianza />
      <FAQ />
      <FinalCTA />
    </main>
    <Footer />
    <WhatsAppButton />
    <LeadFormModal />
  </>
);

export default PorQueEscogernos;
