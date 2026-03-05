const sinEstructura = [
  "Pierdes clientes que nunca vuelven",
  "Tu competencia se queda con tu mercado",
  "Cada día sin web es dinero perdido",
  "Tu pauta digital no tiene dónde aterrizar",
  "Tu marca pierde credibilidad",
];

const conEstructura = [
  "Cada visitante tiene un camino claro para comprar",
  "Tu web trabaja para ti 24/7",
  "Tu inversión en pauta rinde al máximo",
  "Generas confianza desde el primer clic",
  "Escalas con datos, no con intuición",
];

const CostoComparison = () => (
  <section className="section-dark py-20 md:py-28">
    <div className="container-section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-ivory mb-14">
        El costo de seguir sin una web que venda
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-dark-surface rounded-sm p-8 border border-border/30">
          <h3 className="font-serif text-xl font-semibold text-foreground/50 mb-6">❌ Sin estructura</h3>
          <ul className="space-y-3">
            {sinEstructura.map((s) => (
              <li key={s} className="text-sm text-foreground/60 flex items-start gap-2">
                <span className="text-foreground/30 mt-0.5">—</span> {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-sm p-8 border border-gold/30 bg-ivory">
          <h3 className="font-serif text-xl font-semibold mb-6" style={{ color: "hsl(var(--ivory-foreground))" }}>
            ✓ Con estructura
          </h3>
          <ul className="space-y-3">
            {conEstructura.map((s) => (
              <li key={s} className="text-sm flex items-start gap-2" style={{ color: "hsl(var(--ivory-foreground) / 0.8)" }}>
                <span className="text-gold mt-0.5">✓</span> {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default CostoComparison;
