import { Check } from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const bullets = ["Claridad", "Confianza", "Conversión", "Listo para pauta"];
const chips = ["Optimizado", "Medible", "Listo para escalar"];

const Hero = () => {
  const { openForm } = useLeadForm();

  return (
    <section id="hero" className="section-dark min-h-screen flex items-center pt-20 md:pt-0 scroll-mt-24">
      <div className="container-section py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-ivory mb-6">
              Diseño web estratégico para negocios que necesitan vender online.
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-3 max-w-xl leading-relaxed">
              Creamos landing pages, e-commerce Shopify y estructuras digitales diseñadas para convertir visitas en clientes.
            </p>
            <p className="text-sm text-foreground/50 mb-8 max-w-xl leading-relaxed">
              Tu web no debería ser solo una presentación. Debe ser una herramienta que genere clientes todos los días.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-gold flex-shrink-0" />
                  {b}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openForm}
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-gold text-background rounded-sm hover:bg-gold-glow transition-colors duration-200 tracking-wide"
              >
                Agendar llamada estratégica (15 min)
              </button>
              <button
                onClick={openForm}
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold border border-gold/40 text-gold rounded-sm hover:bg-gold/10 transition-colors duration-200 tracking-wide"
              >
                Pedir auditoría gratuita
              </button>
            </div>
          </div>

          <div className="animate-fade-up-delay-2 hidden lg:block">
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm bg-dark-surface border border-border/50 flex items-center justify-center overflow-hidden">
                <div className="w-[80%] h-[85%] rounded-sm bg-background/50 border border-border/30 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gold/40" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-32 h-2 bg-foreground/10 rounded mx-auto" />
                      <div className="w-24 h-2 bg-foreground/10 rounded mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                {chips.map((c) => (
                  <span
                    key={c}
                    className="px-4 py-1.5 text-xs font-semibold bg-dark-surface border border-gold/30 text-gold rounded-full whitespace-nowrap"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
