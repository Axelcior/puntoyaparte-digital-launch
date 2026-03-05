import { Target, Crosshair, Smartphone, ShoppingCart } from "lucide-react";

const bullets = [
  { icon: Target, text: "Landing pages optimizadas para campañas" },
  { icon: Crosshair, text: "Tracking completo: Meta Pixel + GA4" },
  { icon: Smartphone, text: "UX móvil que no pierde visitantes" },
  { icon: ShoppingCart, text: "Checkout sin fricción para e-commerce" },
];

const GrowthAds = () => (
  <section className="section-dark py-20 md:py-28">
    <div className="container-section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-ivory mb-4">
          Webs listas para <span className="text-gold">pauta.</span>
        </h2>
        <p className="text-foreground/50 max-w-2xl mx-auto mb-12 text-lg">
          La estructura correcta maximiza cada peso que inviertes en publicidad digital.
          Sin ella, estás quemando presupuesto.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {bullets.map((b) => (
            <div key={b.text} className="flex items-center gap-3 bg-dark-surface rounded-sm p-5 border border-border/30 text-left">
              <b.icon className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="text-sm text-ivory/80">{b.text}</span>
            </div>
          ))}
        </div>

        <div className="bg-gold/10 border border-gold/30 rounded-sm p-8 max-w-lg mx-auto">
          <p className="text-sm text-foreground/60 mb-2">Caso real: Bendita Selva</p>
          <p className="font-serif text-3xl font-bold text-gold">ROAS 3.5</p>
          <p className="text-sm text-foreground/50 mt-2">en los primeros 60 días de pauta pagada</p>
        </div>
      </div>
    </div>
  </section>
);

export default GrowthAds;
