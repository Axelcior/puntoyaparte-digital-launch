import { useEffect, useId, useMemo, useState, FormEvent } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useLeadForm } from "./LeadFormContext";
import { X } from "lucide-react";

interface Lead {
  nombreCompleto: string;
  correo: string;
  whatsapp: string;
  empresa: string;
  urlSitio: string;
  objetivoSitio: string;
  presupuesto: string;
  planSeleccionado: string;
}

const budgetOptions = [
  "$600.000 - $900.000 COP",
  "$900.000 - $1.200.000 COP",
  "$1.200.000 - $1.500.000 COP",
  "$1.500.000 - $1.800.000 COP",
  "$1.800.000 - $2.000.000 COP",
];

const initial: Lead = {
  nombreCompleto: "",
  correo: "",
  whatsapp: "",
  empresa: "",
  urlSitio: "",
  objetivoSitio: "",
  presupuesto: "",
  planSeleccionado: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LeadFormModal = () => {
  const { isOpen, closeForm, selectedPlan } = useLeadForm();
  const [form, setForm] = useState<Lead>(initial);
  const [submitted, setSubmitted] = useState(false);
  const formId = useId();

  useEffect(() => {
    if (!isOpen) return;
    setForm((prev) => ({ ...prev, planSeleccionado: selectedPlan || prev.planSeleccionado }));
  }, [isOpen, selectedPlan]);

  const update = (field: keyof Lead, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validationMessage = useMemo(() => {
    if (!form.nombreCompleto || !form.correo || !form.whatsapp || !form.empresa || !form.urlSitio || !form.objetivoSitio || !form.presupuesto) {
      return "Completa todos los campos requeridos para continuar.";
    }
    if (!emailRegex.test(form.correo)) {
      return "Ingresa un correo electrónico válido.";
    }
    if (!form.whatsapp.trim()) {
      return "El campo de WhatsApp es obligatorio.";
    }
    return "";
  }, [form]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validationMessage) {
      toast.error(validationMessage);
      return;
    }

    const leads = JSON.parse(localStorage.getItem("pya_leads") || "[]");
    leads.push({ ...form, created_at: new Date().toISOString() });
    localStorage.setItem("pya_leads", JSON.stringify(leads));
    setSubmitted(true);
    toast.success("¡Recibimos tu solicitud! Te contactaremos pronto.");
  };

  const handleClose = () => {
    closeForm();
    setTimeout(() => {
      setSubmitted(false);
      setForm(initial);
    }, 300);
  };

  const inputClass =
    "w-full bg-background border border-border/50 rounded-sm px-4 py-3 text-sm text-ivory placeholder:text-foreground/30 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/30 transition-colors";
  const labelClass = "block text-xs font-medium text-foreground/60 uppercase tracking-wider mb-2";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        aria-modal="true"
        className="bg-dark-surface border-border/30 max-w-2xl p-0 gap-0 overflow-hidden [&>button]:hidden"
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-0">
          <div>
            <DialogTitle className="font-serif text-2xl font-bold text-ivory">
              {submitted ? "¡Solicitud enviada!" : "Pedir una auditoría gratuita"}
            </DialogTitle>
            <DialogDescription className="text-sm text-foreground/60 mt-1">
              {submitted
                ? "Gracias por confiar en Punto y Aparte. Te escribimos en menos de 24 horas."
                : "Comparte tus datos y te enviamos un diagnóstico inicial accionable."}
            </DialogDescription>
          </div>
          <button
            onClick={handleClose}
            className="text-foreground/50 hover:text-ivory transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 rounded-sm"
            aria-label="Cerrar formulario"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-2xl text-gold">✓</span>
            </div>
            <p className="text-foreground/70 mb-6">Recibimos tu información correctamente. Te contactaremos por correo o WhatsApp.</p>
            <button
              onClick={handleClose}
              className="px-8 py-3 text-sm font-semibold bg-gold text-background rounded-sm hover:bg-gold-glow transition-colors"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5" id={formId}>
            {form.planSeleccionado && (
              <p className="text-sm text-gold bg-gold/10 border border-gold/30 rounded-sm px-3 py-2">
                Plan seleccionado: <strong>{form.planSeleccionado}</strong>
              </p>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`${formId}-nombre`} className={labelClass}>Nombre completo *</label>
                <input id={`${formId}-nombre`} type="text" value={form.nombreCompleto} onChange={(e) => update("nombreCompleto", e.target.value)} placeholder="Tu nombre y apellido" className={inputClass} required />
              </div>
              <div>
                <label htmlFor={`${formId}-correo`} className={labelClass}>Correo *</label>
                <input id={`${formId}-correo`} type="email" value={form.correo} onChange={(e) => update("correo", e.target.value)} placeholder="tu@empresa.com" className={inputClass} required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`${formId}-whatsapp`} className={labelClass}>WhatsApp *</label>
                <input id={`${formId}-whatsapp`} type="tel" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="+57 300 000 0000" className={inputClass} required />
              </div>
              <div>
                <label htmlFor={`${formId}-empresa`} className={labelClass}>Empresa *</label>
                <input id={`${formId}-empresa`} type="text" value={form.empresa} onChange={(e) => update("empresa", e.target.value)} placeholder="Nombre de la empresa" className={inputClass} required />
              </div>
            </div>

            <div>
              <label htmlFor={`${formId}-url`} className={labelClass}>URL del sitio *</label>
              <input id={`${formId}-url`} type="url" value={form.urlSitio} onChange={(e) => update("urlSitio", e.target.value)} placeholder="https://tusitio.com" className={inputClass} required />
            </div>

            <div>
              <label htmlFor={`${formId}-objetivo`} className={labelClass}>Objetivo del sitio *</label>
              <textarea id={`${formId}-objetivo`} value={form.objetivoSitio} onChange={(e) => update("objetivoSitio", e.target.value)} placeholder="Ej: generar leads calificados o aumentar ventas online" rows={3} className={inputClass + " resize-none"} required />
            </div>

            <div>
              <label htmlFor={`${formId}-presupuesto`} className={labelClass}>Presupuesto estimado *</label>
              <select id={`${formId}-presupuesto`} value={form.presupuesto} onChange={(e) => update("presupuesto", e.target.value)} className={inputClass} required>
                <option value="">Seleccionar rango...</option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="w-full py-3.5 text-sm font-semibold bg-gold text-background rounded-sm hover:bg-gold-glow transition-colors duration-200 tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70">
              Enviar solicitud
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormModal;
