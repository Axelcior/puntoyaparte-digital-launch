const cases = [
  {
    name: "Bendita Selva",
    type: "E-commerce ropa interior",
    challenge: "Tienda sin estructura clara y sin tracking. La inversión en pauta no se podía medir.",
    intervention: "Rediseño completo en Shopify con embudo optimizado, checkout sin fricción y pixel de Meta configurado.",
    result: "ROAS 3.5 en los primeros 60 días de pauta.",
    highlight: "ROAS 3.5",
  },
  {
    name: "Haz Eco Shop",
    type: "Economía circular",
    challenge: "Marca con propósito pero sin presencia digital profesional. No captaba clientes online.",
    intervention: "Landing page con storytelling de marca, catálogo visual y formulario de contacto optimizado.",
    result: "Primeras ventas online en la primera semana de lanzamiento.",
    highlight: null,
  },
  {
    name: "Ornitología Neotropical / NOS",
    type: "Institución científica",
    challenge: "Web obsoleta que no reflejaba la autoridad de la institución. Difícil navegación y sin arquitectura.",
    intervention: "Rediseño con estructura informativa clara, secciones de publicaciones y formulario de membresía.",
    result: "Aumento significativo en solicitudes de membresía y visibilidad internacional.",
    highlight: null,
  },
];

const Portafolio = () => (
  <section id="portafolio" className="section-ivory py-20 md:py-28">
    <div className="container-section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "hsl(var(--ivory-foreground))" }}>
        Portafolio / Casos de éxito
      </h2>
      <p className="text-center max-w-xl mx-auto mb-14" style={{ color: "hsl(var(--ivory-foreground) / 0.6)" }}>
        Resultados reales de negocios que decidieron dar el paso.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c) => (
          <div key={c.name} className="bg-background rounded-sm overflow-hidden border border-border/30 flex flex-col">
            <div className="aspect-video bg-dark-surface flex items-center justify-center relative">
              <div className="w-[70%] h-[70%] bg-background/20 rounded-sm border border-border/20 flex items-center justify-center">
                <span className="text-foreground/30 text-xs font-medium">Mockup</span>
              </div>
              {c.highlight && (
                <span className="absolute top-3 right-3 px-3 py-1 text-xs font-bold bg-gold text-background rounded-full">
                  {c.highlight}
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-serif text-lg font-semibold text-ivory">{c.name}</h3>
              <span className="text-xs text-gold uppercase tracking-wider mb-4">{c.type}</span>
              <div className="space-y-3 flex-1">
                <div>
                  <span className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">Desafío</span>
                  <p className="text-sm text-foreground/60 mt-1">{c.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">Intervención</span>
                  <p className="text-sm text-foreground/60 mt-1">{c.intervention}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gold/80 uppercase tracking-wider">Resultado</span>
                  <p className="text-sm text-ivory/90 mt-1 font-medium">{c.result}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portafolio;
