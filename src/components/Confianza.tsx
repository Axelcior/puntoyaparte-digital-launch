import { Eye, Palette, MessageSquare, Award } from "lucide-react";

const pillars = [
  { icon: Eye, title: "Proceso claro", desc: "Sabes qué esperar en cada etapa. Sin sorpresas." },
  { icon: Palette, title: "Diseño que vende", desc: "Cada decisión visual tiene un propósito de conversión." },
  { icon: MessageSquare, title: "Comunicación directa", desc: "Acceso directo, respuestas rápidas, sin intermediarios." },
  { icon: Award, title: "Entrega profesional", desc: "Código limpio, documentación y soporte post-lanzamiento." },
];

const Confianza = () => (
  <section className="section-dark py-20 md:py-28">
    <div className="container-section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-ivory mb-14">
        Arquitectura de confianza
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {pillars.map((p) => (
          <div key={p.title} className="flex items-start gap-4 bg-dark-surface rounded-sm p-6 border border-border/30">
            <p.icon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-lg font-semibold text-ivory mb-1">{p.title}</h3>
              <p className="text-sm text-foreground/60">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Confianza;
