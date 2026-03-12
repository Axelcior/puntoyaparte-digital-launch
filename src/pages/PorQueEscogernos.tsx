import Header from "@/components/Header";
import Confianza from "@/components/Confianza";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const PorQueEscogernos = () => (
  <>
    <Header />
    <main className="pt-20">
      <Confianza />
      <FAQ />
      <FinalCTA />
      <LeadForm />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default PorQueEscogernos;
