import { Search, LayoutGrid, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Diagnóstico",
    desc: "Analizamos tu negocio, competencia y objetivos para definir la estrategia correcta.",
  },
  {
    icon: LayoutGrid,
    num: "02",
    title: "Estructura",
    desc: "Diseñamos la arquitectura, copy y flujo de conversión antes de escribir una línea de código.",
  },
  {
    icon: Code,
    num: "03",
    title: "Desarrollo",
    desc: "Construimos tu web con tecnología profesional, rápida y optimizada.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Lanzamiento",
    desc: "Publicamos, configuramos tracking y te acompañamos en los primeros días.",
  },
];

const Proceso = () => (
  <section id="proceso" className="section-ivory py-20 md:py-28">
    <div className="container-section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: "hsl(var(--ivory-foreground))" }}>
        Proceso
      </h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.num} className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center border border-gold/30 group-hover:border-gold transition-colors duration-300">
              <s.icon className="w-6 h-6 text-gold" />
            </div>
            <span className="text-xs text-gold font-bold tracking-widest">{s.num}</span>
            <h3 className="font-serif text-lg font-semibold mt-1 mb-2" style={{ color: "hsl(var(--ivory-foreground))" }}>{s.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--ivory-foreground) / 0.6)" }}>{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Proceso;
