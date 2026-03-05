const FinalCTA = () => (
  <section className="section-ivory py-20 md:py-28 border-t" style={{ borderColor: "hsl(var(--ivory-foreground) / 0.1)" }}>
    <div className="container-section max-w-3xl text-center">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: "hsl(var(--ivory-foreground))" }}>
        ¿Tu web está ayudando a tu negocio a crecer…{" "}
        <span className="text-gold italic">o solo está ocupando espacio?</span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <a
          href="#contacto"
          className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold bg-gold text-background rounded-sm hover:bg-gold-glow transition-colors duration-200 tracking-wide"
        >
          Agendar Llamada Estratégica
        </a>
        <a
          href="#contacto"
          className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold border rounded-sm transition-colors duration-200 tracking-wide"
          style={{ borderColor: "hsl(var(--gold))", color: "hsl(var(--gold))" }}
        >
          Solicitar Auditoría Gratuita
        </a>
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

export default FinalCTA;
