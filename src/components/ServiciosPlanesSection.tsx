import { Check, Search, LayoutGrid, Code, Rocket, Zap, ShoppingCart, TrendingUp } from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

/* ── Servicios ── */
const services = [
  {
    title: "Diseño web profesional para landing pages",
    desc: "Landing pages estratégicas para campañas, captación de leads y ventas con foco en conversión.",
    bullets: ["Arquitectura persuasiva", "Optimización móvil", "Tracking completo", "Lista para pauta"],
  },
  {
    title: "Desarrollo de e-commerce en Shopify",
    desc: "Tiendas online escalables con checkout optimizado, catálogo organizado y experiencia de compra fluida.",
    bullets: ["Catálogo organizado", "Checkout optimizado", "Pasarelas de pago", "Analítica integrada"],
  },
  {
    title: "Optimización de conversión y funnels",
    desc: "Embudos que conectan tráfico, oferta y seguimiento para convertir visitantes en clientes.",
    bullets: ["Embudo personalizado", "Email automation", "A/B testing", "Reportes de rendimiento"],
  },
];

/* ── Planes ── */
const plans = [
  {
    icon: Zap,
    name: "Plan Landing Page",
    subtitle: "Para negocios que necesitan convertir YA",
    price: "$1.800.000",
    currency: "COP",
    featured: false,
    timeline: "Entrega en 7–10 días",
    result: "Página lista para captar leads desde el día uno.",
    formValue: "Landing Page",
    extras: [
      "Estructura estratégica basada en comportamiento del usuario",
      "Copywriting orientado a conversión",
      "Diseño moderno y minimalista",
      "Integración con Meta Ads, WhatsApp y CRM",
      "Optimización de velocidad y SEO técnico",
    ],
  },
  {
    icon: ShoppingCart,
    name: "Plan E-commerce",
    subtitle: "Para negocios que necesitan vender 24/7",
    price: "$3.800.000",
    currency: "COP",
    featured: true,
    timeline: "Entrega en 15–20 días",
    result: "Tienda lista para escalar ventas con pauta.",
    formValue: "E-commerce",
    extras: [
      "Catálogo completo, variaciones y pasarelas de pago",
      "Arquitectura de conversión para aumentar ticket promedio",
      "Integración con Pixel y eventos avanzados",
      "Diseño profesional y experiencia de compra fluida",
      "Optimización móvil + velocidad",
    ],
  },
  {
    icon: TrendingUp,
    name: "Plan Funnel de Conversión",
    subtitle: "Para negocios que buscan escalar",
    price: "Cotización personalizada",
    currency: "",
    featured: false,
    timeline: "Entrega en 20–30 días",
    result: "Sistema completo para convertir tráfico frío en clientes.",
    formValue: "Funnel de Conversión",
    extras: [
      "Landing + oferta + thank you page",
      "Automatizaciones y secuencias de seguimiento",
      "Integración con CRM y eventos avanzados",
      "Copywriting persuasivo basado en psicología de compra",
      "Diseño premium y pruebas A/B",
    ],
  },
];

/* ── Proceso ── */
const steps = [
  { icon: Search, num: "01", title: "Diagnóstico", desc: "Analizamos tu negocio, competencia y objetivos para definir la estrategia correcta." },
  { icon: LayoutGrid, num: "02", title: "Estructura", desc: "Diseñamos la arquitectura, copy y flujo de conversión antes de escribir una línea de código." },
  { icon: Code, num: "03", title: "Desarrollo", desc: "Construimos tu web con tecnología profesional, rápida y optimizada." },
  { icon: Rocket, num: "04", title: "Lanzamiento", desc: "Publicamos, configuramos tracking y te acompañamos en los primeros días." },
];

const ServiciosPlanesSection = () => {
  const { openForm } = useLeadForm();

  return (
    <section id="servicios" className="section-ivory py-20 md:py-28 scroll-mt-24">
      <div className="container-section">
        {/* ── Servicios ── */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "hsl(var(--ivory-foreground))" }}>
          Servicios
        </h2>
        <p className="text-center max-w-xl mx-auto mb-14" style={{ color: "hsl(var(--ivory-foreground) / 0.6)" }}>
          Diseño web profesional, landing pages y e-commerce Shopify pensados para conversión.
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
              <button onClick={() => openForm()} className="text-gold text-sm font-semibold hover:underline tracking-wide text-left">
                Consultar →
              </button>
            </div>
          ))}
        </div>

        {/* ── Planes ── */}
        <div className="section-dark py-20 md:py-24 -mx-4 md:-mx-8 px-4 md:px-8 rounded-sm mb-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-ivory mb-4">Planes</h2>
          <p className="text-center text-foreground/50 max-w-xl mx-auto mb-14">
            Inversión clara, sin sorpresas. Resultados medibles.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-sm p-8 border flex flex-col relative ${
                  plan.featured
                    ? "bg-gold/5 border-gold/50 ring-1 ring-gold/20"
                    : "bg-dark-surface border-border/30"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold uppercase tracking-widest bg-gold text-background rounded-full">
                    Más popular
                  </span>
                )}

                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                  <plan.icon className="w-5 h-5 text-gold" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-ivory mb-1">{plan.name}</h3>
                <p className="text-xs text-foreground/50 mb-4">{plan.subtitle}</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-gold">{plan.price}</span>
                  {plan.currency && <span className="text-sm text-foreground/50 ml-2">{plan.currency}</span>}
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.extras.map((e) => (
                    <li key={e} className="text-sm text-ivory/90 flex items-start gap-2">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" /> {e}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border/20 pt-4 mb-5 space-y-2">
                  <p className="text-xs text-foreground/50 flex items-center gap-2">
                    <span className="text-gold">⏱</span> {plan.timeline}
                  </p>
                  <p className="text-xs text-gold/80 font-medium">
                    → {plan.result}
                  </p>
                </div>

                <button
                  onClick={() => openForm(plan.formValue)}
                  className={`block text-center py-3 rounded-sm text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    plan.featured
                      ? "bg-gold text-background hover:bg-gold-glow"
                      : "border border-gold/40 text-gold hover:bg-gold/10"
                  }`}
                >
                  Solicitar propuesta
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-foreground/40 text-sm mt-10">
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
};

export default ServiciosPlanesSection;
