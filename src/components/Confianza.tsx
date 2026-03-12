import { Eye, Palette, MessageSquare, Award } from "lucide-react";

const pillars = [
  { icon: Eye, title: "Proceso claro", desc: "Te mostramos cada etapa del desarrollo con tiempos definidos (4–6 semanas según el alcance)." },
  { icon: Palette, title: "Diseño que vende", desc: "Creamos interfaces pensadas para captar leads y aumentar conversiones, no solo para verse bien." },
  { icon: MessageSquare, title: "Comunicación directa", desc: "Estás en contacto constante vía WhatsApp y reuniones estratégicas, sin intermediarios." },
  { icon: Award, title: "Entrega profesional", desc: "Garantizamos que tu página esté lista para correr campañas en Meta Ads y recibir tráfico real." },
];

const Confianza = () => (
  <section className="section-dark py-20 md:py-28">
    <div className="container-section">
      {/* Misión */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 block">Nuestra misión</span>
        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
          En Punto y Aparte Digital ayudamos a negocios a dar un nuevo comienzo: transformar su presencia digital y guiarlos hacia la conversión que tanto necesitan. Nuestro propósito es acompañarte en el paso decisivo para que tu empresa deje de solo existir en línea y empiece a crecer con resultados medibles.
        </p>
      </div>

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
