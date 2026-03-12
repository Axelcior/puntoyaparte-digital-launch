import { createContext, useContext, useState, ReactNode } from "react";

interface LeadFormContextType {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const LeadFormContext = createContext<LeadFormContextType>({
  isOpen: false,
  openForm: () => {},
  closeForm: () => {},
});

export const useLeadForm = () => useContext(LeadFormContext);

export const LeadFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <LeadFormContext.Provider value={{ isOpen, openForm: () => setIsOpen(true), closeForm: () => setIsOpen(false) }}>
      {children}
    </LeadFormContext.Provider>
  );
};
