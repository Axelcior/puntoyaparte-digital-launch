import { FormEvent, useEffect, useId, useMemo, useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ProjectType, useLeadForm } from "./LeadFormContext";
import { X } from "lucide-react";

type AuditForm = {
  nombreCompleto: string;
  correo: string;
  whatsapp: string;
  empresa: string;
  urlSitio: string;
  objetivoSitio: string;
  presupuesto: string;
};

type CommercialForm = {
  nombreCompleto: string;
  correo: string;
  whatsapp: string;
  empresa: string;
  tipoProyecto: ProjectType | "";
  objetivoProyecto: string;
  presupuesto: string;
};

const auditBudgetOptions = [
  "$600.000 - $900.000 COP",
  "$900.000 - $1.200.000 COP",
  "$1.200.000 - $1.500.000 COP",
  "$1.500.000 - $1.800.000 COP",
  "$1.800.000 - $2.000.000 COP",
] as const;

const commercialBudgetOptions = [...auditBudgetOptions, "Más de $2.000.000 COP"] as const;

const projectTypeOptions: ProjectType[] = ["Landing Page", "E-commerce Shopify", "Funnel de Conversión", "Otro"];

const initialAudit: AuditForm = {
  nombreCompleto: "",
  correo: "",
  whatsapp: "",
  empresa: "",
  urlSitio: "",
  objetivoSitio: "",
  presupuesto: "",
};

const initialCommercial: CommercialForm = {
  nombreCompleto: "",
  correo: "",
  whatsapp: "",
  empresa: "",
  tipoProyecto: "",
  objetivoProyecto: "",
  presupuesto: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LeadFormModal = () => {
  const { isOpen, modalType, selectedPlan, closeForm } = useLeadForm();
  const [auditForm, setAuditForm] = useState<AuditForm>(initialAudit);
  const [commercialForm, setCommercialForm] = useState<CommercialForm>(initialCommercial);
  const [submitted, setSubmitted] = useState(false);
  const formId = useId();

  useEffect(() => {
    if (!isOpen || modalType !== "commercial") return;
    if (!selectedPlan) return;
    setCommercialForm((prev) => ({ ...prev, tipoProyecto: selectedPlan }));
  }, [isOpen, modalType, selectedPlan]);

  const validationMessage = useMemo(() => {
    if (modalType === "audit") {
      if (!auditForm.nombreCompleto || !auditForm.correo || !auditForm.whatsapp || !auditForm.empresa || !auditForm.urlSitio || !auditForm.objetivoSitio || !auditForm.presupuesto) {
        return "Completa todos los campos requeridos para continuar.";
      }
      if (!emailRegex.test(auditForm.correo)) return "Ingresa un correo electrónico válido.";
      if (!auditForm.whatsapp.trim()) return "El campo de WhatsApp es obligatorio.";
      return "";
    }

    if (modalType === "commercial") {
      if (!commercialForm.nombreCompleto || !commercialForm.correo || !commercialForm.whatsapp || !commercialForm.empresa || !commercialForm.tipoProyecto || !commercialForm.objetivoProyecto || !commercialForm.presupuesto) {
        return "Completa todos los campos requeridos para continuar.";
      }
      if (!emailRegex.test(commercialForm.correo)) return "Ingresa un correo electrónico válido.";
      if (!commercialForm.whatsapp.trim()) return "El campo de WhatsApp es obligatorio.";
    }

    return "";
  }, [auditForm, commercialForm, modalType]);

  const handleClose = () => {
    closeForm();
    setTimeout(() => {
      setSubmitted(false);
      setAuditForm(initialAudit);
      setCommercialForm(initialCommercial);
    }, 300);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!modalType) return;

    if (validationMessage) {
      toast.error(validationMessage);
      return;
    }

    const leads = JSON.parse(localStorage.getItem("pya_leads") || "[]");
    const payload = modalType === "audit"
      ? { ...auditForm, formType: "audit" }
      : { ...commercialForm, formType: "commercial" };

    leads.push({ ...payload, created_at: new Date().toISOString() });
    localStorage.setItem("pya_leads", JSON.stringify(leads));

    setSubmitted(true);
    toast.success("¡Recibimos tu solicitud! Te contactaremos pronto.");
  };

  const inputClass =
    "w-full bg-background border border-border/50 rounded-sm px-4 py-3 text-sm text-ivory placeholder:text-foreground/30 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/30 transition-colors";
  const labelClass = "block text-xs font-medium text-foreground/60 uppercase tracking-wider mb-2";

  const title = modalType === "commercial" ? "Consulta de proyecto" : "Pedir una auditoría gratuita";
  const description = modalType === "commercial"
    ? "Cuéntanos sobre tu proyecto y te ayudamos a definir la mejor estrategia digital."
    : "Comparte tus datos y te enviamos un diagnóstico inicial accionable.";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        role="dialog"
        aria-modal="true"
        className="bg-dark-surface border-border/30 max-w-2xl p-0 gap-0 overflow-hidden [&>button]:hidden"
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-0">
          <div>
            <DialogTitle className="font-serif text-2xl font-bold text-ivory">
              {submitted ? "¡Solicitud enviada!" : title}
            </DialogTitle>
            <DialogDescription className="text-sm text-foreground/60 mt-1">
              {submitted ? "Gracias por confiar en Punto y Aparte. Te escribimos en menos de 24 horas." : description}
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
            <button onClick={handleClose} className="px-8 py-3 text-sm font-semibold bg-gold text-background rounded-sm hover:bg-gold-glow transition-colors">
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5" id={formId}>
            {modalType === "commercial" && selectedPlan && (
              <p className="text-sm text-gold bg-gold/10 border border-gold/30 rounded-sm px-3 py-2">
                Plan seleccionado: <strong>{selectedPlan}</strong>
              </p>
            )}

            {modalType === "audit" && (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`${formId}-nombre`} className={labelClass}>Nombre completo *</label>
                    <input id={`${formId}-nombre`} type="text" value={auditForm.nombreCompleto} onChange={(e) => setAuditForm((p) => ({ ...p, nombreCompleto: e.target.value }))} className={inputClass} required />
                  </div>
                  <div>
                    <label htmlFor={`${formId}-correo`} className={labelClass}>Correo electrónico *</label>
                    <input id={`${formId}-correo`} type="email" value={auditForm.correo} onChange={(e) => setAuditForm((p) => ({ ...p, correo: e.target.value }))} className={inputClass} required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`${formId}-whatsapp`} className={labelClass}>WhatsApp *</label>
                    <input id={`${formId}-whatsapp`} type="tel" value={auditForm.whatsapp} onChange={(e) => setAuditForm((p) => ({ ...p, whatsapp: e.target.value }))} className={inputClass} required />
                  </div>
                  <div>
                    <label htmlFor={`${formId}-empresa`} className={labelClass}>Empresa *</label>
                    <input id={`${formId}-empresa`} type="text" value={auditForm.empresa} onChange={(e) => setAuditForm((p) => ({ ...p, empresa: e.target.value }))} className={inputClass} required />
                  </div>
                </div>

                <div>
                  <label htmlFor={`${formId}-url`} className={labelClass}>URL del sitio *</label>
                  <input id={`${formId}-url`} type="url" value={auditForm.urlSitio} onChange={(e) => setAuditForm((p) => ({ ...p, urlSitio: e.target.value }))} className={inputClass} required />
                </div>

                <div>
                  <label htmlFor={`${formId}-objetivo`} className={labelClass}>Objetivo del sitio *</label>
                  <textarea id={`${formId}-objetivo`} value={auditForm.objetivoSitio} onChange={(e) => setAuditForm((p) => ({ ...p, objetivoSitio: e.target.value }))} rows={3} className={inputClass + " resize-none"} required />
                </div>

                <div>
                  <label htmlFor={`${formId}-presupuesto`} className={labelClass}>Presupuesto estimado *</label>
                  <select id={`${formId}-presupuesto`} value={auditForm.presupuesto} onChange={(e) => setAuditForm((p) => ({ ...p, presupuesto: e.target.value }))} className={inputClass} required>
                    <option value="">Seleccionar rango...</option>
                    {auditBudgetOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {modalType === "commercial" && (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`${formId}-cnombre`} className={labelClass}>Nombre completo *</label>
                    <input id={`${formId}-cnombre`} type="text" value={commercialForm.nombreCompleto} onChange={(e) => setCommercialForm((p) => ({ ...p, nombreCompleto: e.target.value }))} className={inputClass} required />
                  </div>
                  <div>
                    <label htmlFor={`${formId}-ccorreo`} className={labelClass}>Correo electrónico *</label>
                    <input id={`${formId}-ccorreo`} type="email" value={commercialForm.correo} onChange={(e) => setCommercialForm((p) => ({ ...p, correo: e.target.value }))} className={inputClass} required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`${formId}-cwhatsapp`} className={labelClass}>WhatsApp *</label>
                    <input id={`${formId}-cwhatsapp`} type="tel" value={commercialForm.whatsapp} onChange={(e) => setCommercialForm((p) => ({ ...p, whatsapp: e.target.value }))} className={inputClass} required />
                  </div>
                  <div>
                    <label htmlFor={`${formId}-cempresa`} className={labelClass}>Empresa *</label>
                    <input id={`${formId}-cempresa`} type="text" value={commercialForm.empresa} onChange={(e) => setCommercialForm((p) => ({ ...p, empresa: e.target.value }))} className={inputClass} required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`${formId}-ctipo`} className={labelClass}>Tipo de proyecto *</label>
                    <select id={`${formId}-ctipo`} value={commercialForm.tipoProyecto} onChange={(e) => setCommercialForm((p) => ({ ...p, tipoProyecto: e.target.value as CommercialForm["tipoProyecto"] }))} className={inputClass} required>
                      <option value="">Seleccionar tipo...</option>
                      {projectTypeOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`${formId}-cpresupuesto`} className={labelClass}>Presupuesto estimado *</label>
                    <select id={`${formId}-cpresupuesto`} value={commercialForm.presupuesto} onChange={(e) => setCommercialForm((p) => ({ ...p, presupuesto: e.target.value }))} className={inputClass} required>
                      <option value="">Seleccionar rango...</option>
                      {commercialBudgetOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor={`${formId}-cobjetivo`} className={labelClass}>Objetivo del proyecto *</label>
                  <textarea id={`${formId}-cobjetivo`} value={commercialForm.objetivoProyecto} onChange={(e) => setCommercialForm((p) => ({ ...p, objetivoProyecto: e.target.value }))} rows={3} className={inputClass + " resize-none"} required />
                </div>
              </>
            )}

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
