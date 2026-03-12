import { Sparkles, Shield, Zap, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Claridad que vende",
    desc: "Tu visitante entiende en 5 segundos qué haces, por qué eres diferente y cómo empezar.",
  },
  {
    icon: Shield,
    title: "Confianza desde el primer clic",
    desc: "Diseño profesional, prueba social y estructura que elimina la duda.",
  },
  {
    icon: Zap,
    title: "Experiencia sin fricción",
    desc: "Carga rápida, navegación intuitiva y un camino claro hacia la conversión.",
  },
  {
    icon: TrendingUp,
    title: "Base lista para crecer",
    desc: "Tracking, SEO y optimización para que cada peso en pauta rinda más.",
  },
];

const Beneficios = () => (
  <section id="por-que-escogernos" className="section-dark py-20 md:py-28">
    <div className="container-section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-ivory mb-4">
        Lo que tu negocio necesita de su web
      </h2>
      <p className="text-center text-foreground/50 max-w-xl mx-auto mb-14">
        No se trata de tendencias. Se trata de resultados.
      </p>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-dark-surface rounded-sm p-8 border border-border/30 hover:border-gold/30 transition-colors duration-300 group"
          >
            <b.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="font-serif text-xl font-semibold text-ivory mb-2">{b.title}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Beneficios;
