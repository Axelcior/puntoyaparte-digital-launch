import { createContext, useContext, useState, ReactNode } from "react";

export type LeadFormType = "audit" | "commercial" | null;
export type ProjectType = "Landing Page" | "E-commerce Shopify" | "Funnel de Conversión" | "Otro";

interface LeadFormContextType {
  isOpen: boolean;
  formType: LeadFormType;
  selectedPlan: string | null;
  openAuditForm: () => void;
  openCommercialForm: (planName?: string) => void;
  closeForm: () => void;
}

const LeadFormContext = createContext<LeadFormContextType>({
  isOpen: false,
  formType: null,
  selectedPlan: null,
  openAuditForm: () => {},
  openCommercialForm: () => {},
  closeForm: () => {},
});

export const useLeadForm = () => useContext(LeadFormContext);

export const LeadFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<LeadFormType>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const openAuditForm = () => {
    setFormType("audit");
    setSelectedPlan(null);
    setIsOpen(true);
  };

  const openCommercialForm = (planName?: string) => {
    setFormType("commercial");
    setSelectedPlan(planName ?? null);
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <LeadFormContext.Provider
      value={{ isOpen, formType, selectedPlan, openAuditForm, openCommercialForm, closeForm }}
    >
      {children}
    </LeadFormContext.Provider>
  );
};
