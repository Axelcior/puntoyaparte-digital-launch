const PreCierre = () => (
  <section className="section-ivory py-20 md:py-28">
    <div className="container-section max-w-3xl text-center">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 leading-tight" style={{ color: "hsl(var(--ivory-foreground))" }}>
        Si llegaste hasta aquí, tu negocio está listo para dar el{" "}
        <span className="text-gold italic">siguiente paso.</span>
      </h2>
      <div className="space-y-3 mb-10 text-left max-w-md mx-auto">
        {[
          "Sabes que tu web actual no está funcionando.",
          "Entiendes que necesitas estructura, no solo diseño.",
          "Quieres que cada peso invertido tenga retorno.",
          "Estás listo para dejar de improvisar.",
        ].map((line) => (
          <p key={line} className="text-sm flex items-start gap-2" style={{ color: "hsl(var(--ivory-foreground) / 0.7)" }}>
            <span className="text-gold mt-0.5">→</span> {line}
          </p>
        ))}
      </div>
      <a
        href="#contacto"
        className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold bg-gold text-background rounded-sm hover:bg-gold-glow transition-colors duration-200 tracking-wide"
      >
        Agendar llamada estratégica
      </a>
    </div>
  </section>
);

export default PreCierre;
