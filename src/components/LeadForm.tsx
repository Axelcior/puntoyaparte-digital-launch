import { useState } from "react";
import { toast } from "sonner";

interface Lead {
  nombre: string;
  empresa: string;
  whatsapp: string;
  email: string;
  tipo: string;
  presupuesto: string;
  mensaje: string;
}

const initial: Lead = {
  nombre: "",
  empresa: "",
  whatsapp: "",
  email: "",
  tipo: "",
  presupuesto: "",
  mensaje: "",
};

const LeadForm = () => {
  const [form, setForm] = useState<Lead>(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof Lead, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email) {
      toast.error("Por favor completa al menos tu nombre y email.");
      return;
    }
    // Store locally
    const leads = JSON.parse(localStorage.getItem("pya_leads") || "[]");
    leads.push({ ...form, created_at: new Date().toISOString() });
    localStorage.setItem("pya_leads", JSON.stringify(leads));
    setSubmitted(true);
    toast.success("¡Recibimos tu solicitud! Te contactaremos pronto.");
  };

  if (submitted) {
    return (
      <section id="contacto" className="section-dark py-20 md:py-28">
        <div className="container-section max-w-2xl text-center">
          <div className="bg-dark-surface rounded-sm p-12 border border-gold/30">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-ivory mb-3">¡Listo!</h3>
            <p className="text-foreground/60 mb-6">
              Recibimos tu solicitud. Un miembro del equipo te contactará en las próximas 24 horas.
            </p>
            <a
              href="#"
              className="text-gold text-sm font-semibold hover:underline"
            >
              Agendar directamente en Calendly →
            </a>
          </div>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full bg-background border border-border/50 rounded-sm px-4 py-3 text-sm text-ivory placeholder:text-foreground/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors";
  const labelClass = "block text-xs font-medium text-foreground/50 uppercase tracking-wider mb-2";

  return (
    <section id="contacto" className="section-dark py-20 md:py-28">
      <div className="container-section max-w-2xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-ivory mb-4">
          Hablemos de tu proyecto
        </h2>
        <p className="text-center text-foreground/50 mb-12">
          Completa el formulario y te contactamos en menos de 24 horas.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-dark-surface rounded-sm p-8 md:p-10 border border-border/30">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Nombre *</label>
              <input
                type="text"
                value={form.nombre}
                onChange={(e) => update("nombre", e.target.value)}
                placeholder="Tu nombre"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label className={labelClass}>Empresa</label>
              <input
                type="text"
                value={form.empresa}
                onChange={(e) => update("empresa", e.target.value)}
                placeholder="Nombre de tu empresa"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>WhatsApp</label>
              <input
                type="tel"
                value={form.whatsapp}
                onChange={(e) => update("whatsapp", e.target.value)}
                placeholder="+57 300 000 0000"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="tu@email.com"
                className={inputClass}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Tipo de proyecto</label>
              <select
                value={form.tipo}
                onChange={(e) => update("tipo", e.target.value)}
                className={inputClass}
              >
                <option value="">Seleccionar...</option>
                <option value="landing">Landing Page</option>
                <option value="ecommerce">E-commerce Shopify</option>
                <option value="funnel">Funnel / Optimización</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Presupuesto</label>
              <select
                value={form.presupuesto}
                onChange={(e) => update("presupuesto", e.target.value)}
                className={inputClass}
              >
                <option value="">Seleccionar rango...</option>
                <option value="1-2m">$1.000.000 - $2.000.000 COP</option>
                <option value="2-4m">$2.000.000 - $4.000.000 COP</option>
                <option value="4m+">$4.000.000+ COP</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Mensaje</label>
            <textarea
              value={form.mensaje}
              onChange={(e) => update("mensaje", e.target.value)}
              placeholder="Cuéntanos sobre tu proyecto..."
              rows={4}
              className={inputClass + " resize-none"}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 text-sm font-semibold bg-gold text-background rounded-sm hover:bg-gold-glow transition-colors duration-200 tracking-wide"
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
