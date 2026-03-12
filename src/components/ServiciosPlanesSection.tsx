import { Check, Search, LayoutGrid, Code, Rocket } from "lucide-react";

/* ── Servicios ── */
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

/* ── Planes ── */
const shared = [
  "Pixel Meta & Google Analytics",
  "SEO básico on-page",
  "Diseño 100% responsive",
  "Optimización de velocidad",
  "Formularios de contacto",
  "Entrega en 2-3 semanas",
];

const plans = [
  {
    name: "Landing Page Alto Rendimiento",
    price: "$1.800.000",
    currency: "COP",
    featured: false,
    extras: ["1 página de alto impacto", "Copywriting persuasivo", "Estructura de conversión"],
  },
  {
    name: "E-commerce Profesional (Shopify)",
    price: "$3.800.000",
    currency: "COP",
    featured: true,
    extras: ["Tienda completa Shopify", "Hasta 30 productos iniciales", "Checkout optimizado", "Pasarelas de pago configuradas"],
  },
];

/* ── Proceso ── */
const steps = [
  { icon: Search, num: "01", title: "Diagnóstico", desc: "Analizamos tu negocio, competencia y objetivos para definir la estrategia correcta." },
  { icon: LayoutGrid, num: "02", title: "Estructura", desc: "Diseñamos la arquitectura, copy y flujo de conversión antes de escribir una línea de código." },
  { icon: Code, num: "03", title: "Desarrollo", desc: "Construimos tu web con tecnología profesional, rápida y optimizada." },
  { icon: Rocket, num: "04", title: "Lanzamiento", desc: "Publicamos, configuramos tracking y te acompañamos en los primeros días." },
];

const ServiciosPlanesSection = () => (
  <section id="servicios" className="section-ivory py-20 md:py-28">
    <div className="container-section">
      {/* ── Servicios ── */}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "hsl(var(--ivory-foreground))" }}>
        Servicios
      </h2>
      <p className="text-center max-w-xl mx-auto mb-14" style={{ color: "hsl(var(--ivory-foreground) / 0.6)" }}>
        Cada proyecto es diseñado con un objetivo: que tu web trabaje para ti.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-24">
        {services.map((s) => (
          <div key={s.title} className="bg-background rounded-sm p-8 border border-border/30 hover:border-gold/40 transition-colors duration-300 flex flex-col">
            <h3 className="font-serif text-xl font-semibold text-ivory mb-3">{s.title}</h3>
            <p className="text-sm text-foreground/60 mb-6 leading-relaxed">{s.desc}</p>
            <ul className="space-y-2 mb-6 flex-1">
              {s.bullets.map((b) => (
                <li key={b} className="text-sm text-foreground/70 flex items-center gap-2">
                  <span className="text-gold text-xs">◆</span> {b}
                </li>
              ))}
            </ul>
            <a href="#contacto" className="text-gold text-sm font-semibold hover:underline tracking-wide">Consultar →</a>
          </div>
        ))}
      </div>

      {/* ── Planes ── */}
      <div className="section-dark py-20 md:py-24 -mx-4 md:-mx-8 px-4 md:px-8 rounded-sm mb-24">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-ivory mb-4">Planes</h2>
        <p className="text-center text-foreground/50 max-w-xl mx-auto mb-14">
          Inversión clara, sin sorpresas. Resultados medibles.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-sm p-8 border flex flex-col ${
                plan.featured ? "bg-gold/5 border-gold/50 ring-1 ring-gold/20" : "bg-dark-surface border-border/30"
              }`}
            >
              {plan.featured && (
                <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Más popular</span>
              )}
              <h3 className="font-serif text-xl font-semibold text-ivory mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gold">{plan.price}</span>
                <span className="text-sm text-foreground/50 ml-2">{plan.currency}</span>
              </div>
              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.extras.map((e) => (
                  <li key={e} className="text-sm text-ivory/90 flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" /> {e}
                  </li>
                ))}
                {shared.map((s) => (
                  <li key={s} className="text-sm text-foreground/60 flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold/50 flex-shrink-0" /> {s}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`block text-center py-3 rounded-sm text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  plan.featured ? "bg-gold text-background hover:bg-gold-glow" : "border border-gold/40 text-gold hover:bg-gold/10"
                }`}
              >
                Solicitar propuesta
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-foreground/40 text-sm mt-8">
          Forma de pago: 50% al inicio · 20% al mostrar el demo · 30% a la entrega tras resultados de pauta.
        </p>
      </div>

      {/* ── Proceso ── */}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: "hsl(var(--ivory-foreground))" }}>
        Proceso
      </h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {steps.map((s) => (
          <div key={s.num} className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center border border-gold/30 group-hover:border-gold transition-colors duration-300">
              <s.icon className="w-6 h-6 text-gold" />
            </div>
            <span className="text-xs text-gold font-bold tracking-widest">{s.num}</span>
            <h3 className="font-serif text-lg font-semibold mt-1 mb-2" style={{ color: "hsl(var(--ivory-foreground))" }}>{s.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--ivory-foreground) / 0.6)" }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiciosPlanesSection;
