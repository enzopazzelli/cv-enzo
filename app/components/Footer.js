import RevealOnScroll from "./RevealOnScroll";

const navLinks = [
  { href: "#about", label: "Sobre mi" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
];

const contactLinks = [
  {
    href: "mailto:enzopazzelli@gmail.com",
    icon: "fas fa-envelope",
    label: "enzopazzelli@gmail.com",
  },
  {
    href: "tel:+5493856240510",
    icon: "fas fa-phone",
    label: "+54 9 3856 240510",
  },
  {
    href: "#",
    icon: "fas fa-map-marker-alt",
    label: "Santiago del Estero, ARG",
  },
];

const socialLinks = [
  { href: "https://github.com/", icon: "fab fa-github", label: "GitHub" },
  { href: "https://linkedin.com/", icon: "fab fa-linkedin-in", label: "LinkedIn" },
  { href: "mailto:enzopazzelli@gmail.com", icon: "fas fa-envelope", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="font-mono text-xl font-bold mb-3">
                &lt;<span className="text-accent">EP</span>/&gt;
              </h3>
              <p className="text-text-muted text-sm max-w-xs leading-relaxed mb-5">
                Desarrollador Junior enfocado en crear soluciones web y trabajar
                con datos. Disponible para oportunidades remotas o presenciales.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-border flex items-center justify-center text-text-secondary transition-all hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-1"
                  >
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold text-sm mb-5">Navegacion</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <i className="fas fa-chevron-right text-[10px]" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm mb-5">Contacto</h4>
              <ul className="space-y-3">
                {contactLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <i className={`${link.icon} w-4 text-center`} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        {/* Bottom */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            &copy; 2026 Enzo Pazzelli. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-text-muted text-xs hover:text-accent transition-colors"
            >
              Sobre mi
            </a>
            <a
              href="#stack"
              className="text-text-muted text-xs hover:text-accent transition-colors"
            >
              Stack
            </a>
            <a
              href="#experience"
              className="text-text-muted text-xs hover:text-accent transition-colors"
            >
              Experiencia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
