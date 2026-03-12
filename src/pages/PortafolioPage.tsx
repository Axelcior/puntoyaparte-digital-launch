import Header from "@/components/Header";
import Portafolio from "@/components/Portafolio";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const PortafolioPage = () => (
  <>
    <Header />
    <main className="pt-20">
      <Portafolio />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default PortafolioPage;
