import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold hover:bg-gold-glow rounded-full flex items-center justify-center shadow-lg shadow-black/30 transition-colors duration-200"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="w-6 h-6 text-background" />
  </a>
);

export default WhatsAppButton;
