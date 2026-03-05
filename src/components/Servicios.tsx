const services = [
  {
    title: "Landing Pages de Alto Rendimiento",
    desc: "Páginas diseñadas para convertir. Ideales para lanzamientos, campañas y captación de leads.",
    bullets: ["Estructura de persuasión", "Optimizada para móvil", "Tracking completo", "Lista para pauta"],
  },
  {
    title: "E-commerce Shopify",
    desc: "Tiendas online profesionales con checkout optimizado y experiencia de compra sin fricción.",
    bullets: ["Catálogo organizado", "Checkout optimizado", "Pasarelas de pago", "Analítica integrada"],
  },
  {
    title: "Funnels y Optimización de Conversión",
    desc: "Embudos estratégicos que guían a tu visitante desde el interés hasta la compra.",
    bullets: ["Embudo personalizado", "Email automation", "A/B testing", "Reportes de rendimiento"],
  },
];

const Servicios = () => (
  <section id="servicios" className="section-ivory py-20 md:py-28">
    <div className="container-section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "hsl(var(--ivory-foreground))" }}>
        Servicios
      </h2>
      <p className="text-center max-w-xl mx-auto mb-14" style={{ color: "hsl(var(--ivory-foreground) / 0.6)" }}>
        Cada proyecto es diseñado con un objetivo: que tu web trabaje para ti.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-background rounded-sm p-8 border border-border/30 hover:border-gold/40 transition-colors duration-300 flex flex-col"
          >
            <h3 className="font-serif text-xl font-semibold text-ivory mb-3">{s.title}</h3>
            <p className="text-sm text-foreground/60 mb-6 leading-relaxed">{s.desc}</p>
            <ul className="space-y-2 mb-6 flex-1">
              {s.bullets.map((b) => (
                <li key={b} className="text-sm text-foreground/70 flex items-center gap-2">
                  <span className="text-gold text-xs">◆</span> {b}
                </li>
              ))}
            </ul>
            <a href="#contacto" className="text-gold text-sm font-semibold hover:underline tracking-wide">
              Consultar →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Servicios;
