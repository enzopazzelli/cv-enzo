"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "Sobre mi" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#education", label: "Formacion" },
  { href: "#other-skills", label: "Habilidades" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border py-3"
          : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="font-mono font-bold text-xl text-text-primary hover:text-accent transition-colors"
        >
          &lt;<span className="text-accent">EP</span>/&gt;
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-secondary text-sm font-medium hover:text-text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:enzopazzelli@gmail.com"
              className="bg-accent text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-accent-light transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(108,99,255,0.3)]"
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 bg-text-primary transition-all ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-primary transition-all ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-primary transition-all ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border">
          <ul className="flex flex-col items-center gap-4 py-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary text-base font-medium hover:text-text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:enzopazzelli@gmail.com"
                onClick={() => setMobileOpen(false)}
                className="bg-accent text-white px-6 py-2.5 rounded-lg text-sm font-semibold"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
