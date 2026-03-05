import { Check } from "lucide-react";

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

const Planes = () => (
  <section className="section-dark py-20 md:py-28">
    <div className="container-section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-ivory mb-4">Planes</h2>
      <p className="text-center text-foreground/50 max-w-xl mx-auto mb-14">
        Inversión clara, sin sorpresas. Resultados medibles.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-sm p-8 border flex flex-col ${
              plan.featured
                ? "bg-gold/5 border-gold/50 ring-1 ring-gold/20"
                : "bg-dark-surface border-border/30"
            }`}
          >
            {plan.featured && (
              <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                Más popular
              </span>
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
                plan.featured
                  ? "bg-gold text-background hover:bg-gold-glow"
                  : "border border-gold/40 text-gold hover:bg-gold/10"
              }`}
            >
              Solicitar propuesta
            </a>
          </div>
        ))}
      </div>

      <p className="text-center text-foreground/40 text-sm mt-8">
        Forma de pago: 50% al inicio · 50% a la entrega.
      </p>
    </div>
  </section>
);

export default Planes;
