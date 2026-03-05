import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuánto tiempo toma el desarrollo?",
    a: "Una landing page se entrega entre 2 y 3 semanas. Un e-commerce Shopify entre 3 y 4 semanas. Depende de la complejidad y la velocidad de entrega del contenido.",
  },
  {
    q: "¿Necesito tener el contenido listo?",
    a: "Idealmente sí, pero te guiamos en el proceso. Ofrecemos copywriting persuasivo como parte del servicio para que tu mensaje sea claro y efectivo.",
  },
  {
    q: "¿Qué pasa después de la entrega?",
    a: "Te entregamos acceso completo a tu web, documentación básica y soporte post-lanzamiento durante 15 días. También ofrecemos planes de mantenimiento.",
  },
  {
    q: "Ya tengo una web, ¿pueden mejorarla?",
    a: "Sí. Hacemos auditorías gratuitas para identificar oportunidades de mejora. Si la estructura actual no sirve, te recomendamos rediseñar desde cero.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Solo una llamada de 15 minutos para entender tu negocio y objetivos. Nosotros nos encargamos del resto.",
  },
  {
    q: "¿La web funciona bien en móvil?",
    a: "Sí. Todos nuestros proyectos son 100% responsive y están optimizados para la mejor experiencia en dispositivos móviles.",
  },
  {
    q: "¿Qué plan me conviene?",
    a: "Si necesitas captar leads o promocionar un servicio, una landing page es ideal. Si vendes productos físicos, un e-commerce en Shopify es la mejor opción.",
  },
  {
    q: "¿Cómo es la forma de pago?",
    a: "50% al iniciar el proyecto y 50% al momento de la entrega. Aceptamos transferencia bancaria y otros medios.",
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
