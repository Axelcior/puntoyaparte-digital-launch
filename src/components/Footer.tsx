import { useLeadForm } from "./LeadFormContext";

const Footer = () => {
  const { openAuditForm } = useLeadForm();

  return (
    <footer className="section-dark py-12 border-t border-border/20">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="font-serif text-xl font-bold text-ivory">
              Punto y Aparte<span className="text-gold">.</span>
            </a>
            <p className="text-sm text-foreground/40 mt-1">
              El punto de quiebre entre improvisar y escalar.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={openAuditForm} className="text-sm text-foreground/50 hover:text-gold transition-colors">
              Solicitar auditoría gratuita
            </button>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/50 hover:text-gold transition-colors">
              WhatsApp
            </a>
            <a href="mailto:hola@puntoyaparte.co" className="text-sm text-foreground/50 hover:text-gold transition-colors">
              Email
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/50 hover:text-gold transition-colors">
              Instagram
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-foreground/30">
          © {new Date().getFullYear()} Punto y Aparte. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
