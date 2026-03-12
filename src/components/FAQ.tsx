import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuánto cuesta crear una página web profesional?",
    a: "Una landing page profesional inicia desde $1.800.000 COP y un e-commerce Shopify desde $3.800.000 COP. El valor final depende del alcance, funcionalidades y nivel de personalización.",
  },
  {
    q: "¿Cuánto tiempo tarda desarrollar una página web?",
    a: "Una landing page suele tardar entre 7 y 10 días. Un e-commerce Shopify entre 15 y 20 días. El tiempo exacto varía según el alcance y si el contenido base ya está disponible.",
  },
  {
    q: "¿Qué es una landing page y para qué sirve?",
    a: "Es una página enfocada en una sola acción: captar leads o ventas desde campañas. Sirve para convertir tráfico en oportunidades reales de negocio.",
  },
  {
    q: "¿Qué ventajas tiene usar Shopify para una tienda online?",
    a: "Shopify facilita la gestión de catálogo, pagos, inventario y crecimiento. Es una plataforma estable, escalable y práctica para vender online de forma profesional.",
  },
  {
    q: "¿Por qué mi página web no genera clientes?",
    a: "Generalmente por fallas en conversión: mensaje poco claro, carga lenta, estructura sin ruta de acción y ausencia de tracking para optimizar resultados.",
  },
  {
    q: "¿Qué necesito para empezar un proyecto web?",
    a: "Necesitas información de tu negocio, objetivos comerciales, referencias visuales y contenido base (si ya lo tienes). Con eso podemos definir estrategia y plan de ejecución.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const FAQ = () => (
  <section className="section-ivory py-20 md:py-28">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="container-section max-w-3xl">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: "hsl(var(--ivory-foreground))" }}>
        Preguntas frecuentes sobre diseño web y Shopify
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={faq.q}
            value={`faq-${i}`}
            className="bg-background rounded-sm border border-border/30 px-6 data-[state=open]:border-gold/30"
          >
            <AccordionTrigger className="text-left text-sm font-medium text-ivory hover:text-gold py-5 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-foreground/70 pb-5 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
