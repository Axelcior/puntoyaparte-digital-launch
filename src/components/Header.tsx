import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLeadForm } from "./LeadFormContext";

const navLinks = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Proceso", href: "/#servicios" },
  { label: "¿Por qué escogernos?", href: "/por-que-escogernos" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { openForm } = useLeadForm();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname === "/") {
        const el = document.querySelector(href.replace("/", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="container-section flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-serif text-xl md:text-2xl font-bold text-ivory tracking-tight">
          Punto y Aparte<span className="text-gold">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-ivory/70 hover:text-gold transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#") && location.pathname === "/") {
                    e.preventDefault();
                    handleNav(link.href);
                  }
                }}
                className="text-sm font-medium text-ivory/70 hover:text-gold transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={openForm}
            className="hidden md:inline-flex items-center px-6 py-2.5 text-sm font-semibold bg-gold text-background rounded-sm hover:bg-gold-glow transition-colors duration-200 tracking-wide"
          >
            Auditoría Gratuita
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-ivory p-2"
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-ivory/70 hover:text-gold transition-colors uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#") && location.pathname === "/") {
                    e.preventDefault();
                    handleNav(link.href);
                  } else {
                    setMenuOpen(false);
                  }
                }}
                className="block text-sm font-medium text-ivory/70 hover:text-gold transition-colors uppercase tracking-wide"
              >
                {link.label}
              </a>
            )
          )}
          <button
            onClick={() => { setMenuOpen(false); openForm(); }}
            className="block w-full text-center px-6 py-2.5 text-sm font-semibold bg-gold text-background rounded-sm"
          >
            Auditoría Gratuita
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
