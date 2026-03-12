import { createContext, useContext, useState, ReactNode } from "react";

export type ModalType = "audit" | "commercial" | null;
export type ProjectType = "Landing Page" | "E-commerce Shopify" | "Funnel de Conversión" | "Otro";

interface LeadFormContextType {
  isOpen: boolean;
  modalType: ModalType;
  selectedPlan: ProjectType | null;
  openAuditForm: () => void;
  openCommercialForm: (planName?: ProjectType) => void;
  closeForm: () => void;
}

const LeadFormContext = createContext<LeadFormContextType>({
  isOpen: false,
  modalType: null,
  selectedPlan: null,
  openAuditForm: () => {},
  openCommercialForm: () => {},
  closeForm: () => {},
});

export const useLeadForm = () => useContext(LeadFormContext);

export const LeadFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedPlan, setSelectedPlan] = useState<ProjectType | null>(null);

  const openAuditForm = () => {
    setModalType("audit");
    setSelectedPlan(null);
    setIsOpen(true);
  };

  const openCommercialForm = (planName?: ProjectType) => {
    setModalType("commercial");
    setSelectedPlan(planName ?? null);
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <LeadFormContext.Provider
      value={{ isOpen, modalType, selectedPlan, openAuditForm, openCommercialForm, closeForm }}
    >
      {children}
    </LeadFormContext.Provider>
  );
};
