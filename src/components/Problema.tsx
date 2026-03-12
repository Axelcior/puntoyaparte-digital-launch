import { useLeadForm } from "./LeadFormContext";

const problems = [
  { icon: "⏱", title: "Página web lenta", desc: "Tus visitantes se van antes de conocer tu propuesta de valor." },
  { icon: "💬", title: "Mensaje confuso", desc: "No comunicas con claridad qué ofreces y a quién ayudas." },
  { icon: "🚫", title: "Sin ruta de conversión", desc: "No existe un camino claro para agendar, cotizar o comprar." },
  { icon: "📊", title: "Sin analítica ni tracking", desc: "No sabes qué canales funcionan ni dónde se pierden tus leads." },
  { icon: "📱", title: "Dependencia de WhatsApp", desc: "Toda la gestión cae en el chat y no en un sistema que escale." },
];

const compareData = [
  { improv: "Sin web o con una página genérica", structured: "Web diseñada para convertir" },
  { improv: "Sin métricas ni datos", structured: "Tracking y analítica desde día 1" },
  { improv: "Depende 100% de redes sociales", structured: "Canal propio que trabaja 24/7" },
  { improv: "Pierde dinero en pauta sin resultados", structured: "Cada peso invertido es medible" },
];

const Problema = () => {
  const { openForm } = useLeadForm();

  return (
    <section className="section-ivory py-20 md:py-28">
      <div className="container-section">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 leading-tight">
          ¿Por qué tu página web no genera clientes?
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14 text-lg" style={{ color: "hsl(var(--ivory-foreground) / 0.6)" }}>
          Muchas páginas web se ven bien, pero no están diseñadas para convertir visitantes en clientes.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-background rounded-sm p-6 border border-gold/20 hover:border-gold/50 transition-colors duration-300"
            >
              <span className="text-2xl mb-3 block">{p.icon}</span>
              <h3 className="font-serif text-lg font-semibold text-ivory mb-2">{p.title}</h3>
              <p className="text-sm text-foreground/60">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-center mb-8">
            Negocio improvisado <span className="text-gold">vs</span> Negocio estructurado
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-background rounded-sm p-6 border border-border/30">
              <h4 className="font-semibold text-foreground/50 text-sm uppercase tracking-wider mb-4">❌ Sin estructura</h4>
              {compareData.map((c, i) => (
                <p key={i} className="text-sm text-foreground/60 mb-2 flex items-start gap-2">
                  <span className="text-foreground/30 mt-0.5">—</span> {c.improv}
                </p>
              ))}
            </div>
            <div className="bg-gold/10 rounded-sm p-6 border border-gold/30">
              <h4 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">✓ Con estructura</h4>
              {compareData.map((c, i) => (
                <p key={i} className="text-sm mb-2 flex items-start gap-2" style={{ color: "hsl(var(--ivory-foreground))" }}>
                  <span className="text-gold mt-0.5">✓</span> {c.structured}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button onClick={() => openForm()} className="text-gold font-semibold hover:underline text-sm tracking-wide uppercase">
            Quiero revisar mi web →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problema;
