import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useLeadForm } from "./LeadFormContext";
import { X } from "lucide-react";

type FormType = "audit" | "commercial";

interface AuditLead {
  fullName: string;
  email: string;
  whatsapp: string;
  company: string;
  websiteUrl: string;
  websiteGoal: string;
  budget: string;
}

interface CommercialLead {
  fullName: string;
  email: string;
  whatsapp: string;
  company: string;
  projectType: string;
  projectGoal: string;
  budget: string;
}

const auditInitial: AuditLead = {
  fullName: "",
  email: "",
  whatsapp: "",
  company: "",
  websiteUrl: "",
  websiteGoal: "",
  budget: "",
};

const commercialInitial: CommercialLead = {
  fullName: "",
  email: "",
  whatsapp: "",
  company: "",
  projectType: "",
  projectGoal: "",
  budget: "",
};

const auditBudgets = [
  "$600.000 - $900.000 COP",
  "$900.000 - $1.200.000 COP",
  "$1.200.000 - $1.500.000 COP",
  "$1.500.000 - $1.800.000 COP",
  "$1.800.000 - $2.000.000 COP",
];

const commercialProjectTypes = ["Landing Page", "E-commerce Shopify", "Funnel de Conversión", "Otro"];

const commercialBudgets = [...auditBudgets, "Más de $2.000.000 COP"];

const LeadFormModal = () => {
  const { isOpen, formType, selectedPlan, closeForm } = useLeadForm();
  const [auditForm, setAuditForm] = useState<AuditLead>(auditInitial);
  const [commercialForm, setCommercialForm] = useState<CommercialLead>(commercialInitial);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (formType !== "commercial") return;
    setCommercialForm((prev) => ({ ...prev, projectType: selectedPlan ?? prev.projectType }));
  }, [formType, selectedPlan]);

  const formTitle = useMemo(() => {
    if (submitted) return "¡Listo!";
    return formType === "audit" ? "Auditoría gratuita" : "Consulta de proyecto";
  }, [formType, submitted]);

  const resetState = () => {
    setSubmitted(false);
    setAuditForm(auditInitial);
    setCommercialForm(commercialInitial);
  };

  const handleClose = () => {
    closeForm();
    setTimeout(resetState, 250);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const leads = JSON.parse(localStorage.getItem("pya_leads") || "[]");
    const payload =
      formType === "audit"
        ? { formType: "audit", ...auditForm }
        : { formType: "commercial", ...commercialForm };

    leads.push({ ...payload, createdAt: new Date().toISOString() });
    localStorage.setItem("pya_leads", JSON.stringify(leads));

    setSubmitted(true);
    toast.success("¡Recibimos tu solicitud! Te contactaremos pronto.");
  };

  const inputClass =
    "w-full bg-background border border-border/50 rounded-sm px-4 py-3 text-sm text-ivory placeholder:text-foreground/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors";
  const labelClass = "block text-xs font-medium text-foreground/50 uppercase tracking-wider mb-2";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        aria-modal="true"
        className="bg-dark-surface border-border/30 max-w-xl p-0 gap-0 overflow-hidden [&>button]:hidden"
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-0">
          <div>
            <DialogTitle className="font-serif text-xl font-bold text-ivory">{formTitle}</DialogTitle>
            <DialogDescription className="text-sm text-foreground/50 mt-1">
              {submitted
                ? "Recibimos tu solicitud correctamente."
                : "Completa el formulario y te contactamos en menos de 24 horas."}
            </DialogDescription>
          </div>
          <button
            type="button"
            aria-label="Cerrar formulario"
            onClick={handleClose}
            className="text-foreground/40 hover:text-ivory transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-2xl text-gold">✓</span>
            </div>
            <p className="text-foreground/60 mb-6">
              Un miembro del equipo te contactará en las próximas 24 horas.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="px-8 py-3 text-sm font-semibold bg-gold text-background rounded-sm hover:bg-gold-glow transition-colors"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className={labelClass}>Nombre completo *</label>
                <input id="fullName" type="text" value={formType === "audit" ? auditForm.fullName : commercialForm.fullName} onChange={(e) => formType === "audit" ? setAuditForm((prev) => ({ ...prev, fullName: e.target.value })) : setCommercialForm((prev) => ({ ...prev, fullName: e.target.value }))} className={inputClass} required />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Correo electrónico *</label>
                <input id="email" type="email" value={formType === "audit" ? auditForm.email : commercialForm.email} onChange={(e) => formType === "audit" ? setAuditForm((prev) => ({ ...prev, email: e.target.value })) : setCommercialForm((prev) => ({ ...prev, email: e.target.value }))} className={inputClass} required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="whatsapp" className={labelClass}>WhatsApp *</label>
                <input id="whatsapp" type="tel" value={formType === "audit" ? auditForm.whatsapp : commercialForm.whatsapp} onChange={(e) => formType === "audit" ? setAuditForm((prev) => ({ ...prev, whatsapp: e.target.value })) : setCommercialForm((prev) => ({ ...prev, whatsapp: e.target.value }))} className={inputClass} required />
              </div>
              <div>
                <label htmlFor="company" className={labelClass}>Empresa *</label>
                <input id="company" type="text" value={formType === "audit" ? auditForm.company : commercialForm.company} onChange={(e) => formType === "audit" ? setAuditForm((prev) => ({ ...prev, company: e.target.value })) : setCommercialForm((prev) => ({ ...prev, company: e.target.value }))} className={inputClass} required />
              </div>
            </div>

            {formType === "audit" ? (
              <>
                <div>
                  <label htmlFor="websiteUrl" className={labelClass}>URL del sitio *</label>
                  <input id="websiteUrl" type="url" value={auditForm.websiteUrl} onChange={(e) => setAuditForm((prev) => ({ ...prev, websiteUrl: e.target.value }))} placeholder="https://tusitio.com" className={inputClass} required />
                </div>
                <div>
                  <label htmlFor="websiteGoal" className={labelClass}>Objetivo del sitio *</label>
                  <textarea id="websiteGoal" value={auditForm.websiteGoal} onChange={(e) => setAuditForm((prev) => ({ ...prev, websiteGoal: e.target.value }))} rows={3} className={`${inputClass} resize-none`} required />
                </div>
                <div>
                  <label htmlFor="auditBudget" className={labelClass}>Presupuesto estimado *</label>
                  <select id="auditBudget" value={auditForm.budget} onChange={(e) => setAuditForm((prev) => ({ ...prev, budget: e.target.value }))} className={inputClass} required>
                    <option value="">Seleccionar...</option>
                    {auditBudgets.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="projectType" className={labelClass}>Tipo de proyecto *</label>
                  <select id="projectType" value={commercialForm.projectType} onChange={(e) => setCommercialForm((prev) => ({ ...prev, projectType: e.target.value }))} className={inputClass} required>
                    <option value="">Seleccionar...</option>
                    {commercialProjectTypes.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="projectGoal" className={labelClass}>Objetivo del proyecto *</label>
                  <textarea id="projectGoal" value={commercialForm.projectGoal} onChange={(e) => setCommercialForm((prev) => ({ ...prev, projectGoal: e.target.value }))} rows={3} className={`${inputClass} resize-none`} required />
                </div>
                <div>
                  <label htmlFor="commercialBudget" className={labelClass}>Presupuesto estimado *</label>
                  <select id="commercialBudget" value={commercialForm.budget} onChange={(e) => setCommercialForm((prev) => ({ ...prev, budget: e.target.value }))} className={inputClass} required>
                    <option value="">Seleccionar...</option>
                    {commercialBudgets.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <button type="submit" className="w-full py-3.5 text-sm font-semibold bg-gold text-background rounded-sm hover:bg-gold-glow transition-colors duration-200 tracking-wide">
              Enviar solicitud
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormModal;
