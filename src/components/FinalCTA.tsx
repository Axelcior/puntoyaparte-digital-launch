import { useLeadForm } from "./LeadFormContext";

const FinalCTA = () => {
  const { openCommercialForm, openAuditForm } = useLeadForm();

  return (
    <section className="section-ivory py-20 md:py-28 border-t" style={{ borderColor: "hsl(var(--ivory-foreground) / 0.1)" }}>
      <div className="container-section max-w-3xl text-center">
        {/* Mensaje central */}
        <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-6">
          El siguiente paso
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: "hsl(var(--ivory-foreground))" }}>
          Tu negocio no necesita improvisar.
        </h2>
        <p className="text-lg mb-4 leading-relaxed" style={{ color: "hsl(var(--ivory-foreground) / 0.7)" }}>
          Necesita una estructura que convierta, un proceso claro y un equipo que entiende cómo funcionan las ventas digitales.
        </p>
        <p className="text-base font-medium mb-10" style={{ color: "hsl(var(--ivory-foreground) / 0.8)" }}>
          Agenda tu llamada estratégica y recibe un diagnóstico gratuito de tu presencia digital en 24 horas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            onClick={openCommercialForm}
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold bg-gold text-background rounded-sm hover:bg-gold-glow transition-colors duration-200 tracking-wide"
          >
            Agendar Llamada Estratégica
          </button>
          <button
            onClick={openAuditForm}
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold border rounded-sm transition-colors duration-200 tracking-wide"
            style={{ borderColor: "hsl(var(--gold))", color: "hsl(var(--gold))" }}
          >
            Solicitar Auditoría Gratuita
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs tracking-wider uppercase" style={{ color: "hsl(var(--ivory-foreground) / 0.5)" }}>
          <span>Proceso claro</span>
          <span>·</span>
          <span>Entregas rápidas</span>
          <span>·</span>
          <span>Comunicación directa</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
