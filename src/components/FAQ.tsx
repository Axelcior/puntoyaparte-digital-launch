import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuánto tiempo toma el desarrollo?",
    a: "Generalmente entre 4 y 6 semanas, dependiendo de la complejidad del proyecto. Desde el inicio te damos un cronograma claro para que sepas cuándo recibir cada avance.",
  },
  {
    q: "¿Qué pasa si necesito cambios durante el proceso?",
    a: "Incluimos rondas de ajustes en cada etapa. Tu feedback es parte del flujo de trabajo, asegurando que el resultado final refleje exactamente lo que tu negocio necesita.",
  },
  {
    q: "¿Cómo funciona la forma de pago?",
    a: "50% al inicio del proyecto. 20% al presentar el demo funcional. 30% al entregar la página final, después de validar resultados con campañas de Meta Ads y tráfico real.",
  },
  {
    q: "¿Qué soporte recibo después de la entrega?",
    a: "Te damos acompañamiento inicial para asegurarnos de que la página funcione correctamente y esté lista para escalar campañas. También ofrecemos planes de mantenimiento opcionales.",
  },
  {
    q: "¿Necesito tener el contenido listo?",
    a: "Idealmente sí, pero te guiamos en el proceso. Ofrecemos copywriting persuasivo como parte del servicio para que tu mensaje sea claro y efectivo.",
  },
  {
    q: "Ya tengo una web, ¿pueden mejorarla?",
    a: "Sí. Hacemos auditorías gratuitas para identificar oportunidades de mejora. Si la estructura actual no sirve, te recomendamos rediseñar desde cero.",
  },
  {
    q: "¿La web funciona bien en móvil?",
    a: "Sí. Todos nuestros proyectos son 100% responsive y están optimizados para la mejor experiencia en dispositivos móviles.",
  },
  {
    q: "¿Qué plan me conviene?",
    a: "Si necesitas captar leads o promocionar un servicio, una landing page es ideal. Si vendes productos físicos, un e-commerce en Shopify es la mejor opción. Si buscas escalar, un funnel de conversión es lo tuyo.",
  },
];

const FAQ = () => (
  <section className="section-ivory py-20 md:py-28">
    <div className="container-section max-w-3xl">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: "hsl(var(--ivory-foreground))" }}>
        Preguntas frecuentes
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-background rounded-sm border border-border/30 px-6 data-[state=open]:border-gold/30"
          >
            <AccordionTrigger className="text-left text-sm font-medium text-ivory hover:text-gold py-5 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-foreground/60 pb-5 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
