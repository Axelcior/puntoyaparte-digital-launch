import { createContext, useContext, useState, ReactNode } from "react";

interface LeadFormContextType {
  isOpen: boolean;
  selectedPlan: string;
  openForm: (planName?: string) => void;
  closeForm: () => void;
}

const LeadFormContext = createContext<LeadFormContextType>({
  isOpen: false,
  selectedPlan: "",
  openForm: () => {},
  closeForm: () => {},
});

export const useLeadForm = () => useContext(LeadFormContext);

export const LeadFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const openForm = (planName?: string) => {
    setSelectedPlan(planName ?? "");
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <LeadFormContext.Provider value={{ isOpen, selectedPlan, openForm, closeForm }}>
      {children}
    </LeadFormContext.Provider>
  );
};
