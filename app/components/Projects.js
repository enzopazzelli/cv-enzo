"use client";

import RevealOnScroll from "./RevealOnScroll";

const projects = [
  {
    title: "Tres Marias Indumentaria",
    desc: "Sitio web comercial desarrollado para un taller de indumentaria en Santa Fe. Landing page con catalogo de productos, ofertas, formulario de pedidos y contacto por WhatsApp. Contenido gestionable desde Google Sheets.",
    icon: "fas fa-globe",
    iconColor: "bg-accent/15 text-accent",
    gradient: "from-accent to-accent-secondary",
    tags: ["Next.js", "React", "Tailwind", "Google Sheets"],
    preview: "https://tres-marias-alpha.vercel.app/",
    link: "https://tres-marias-alpha.vercel.app/",
  },
  {
    title: "MiAdmin",
    desc: "Sistema de gestion comercial de escritorio desarrollado en Python con SQLite. Permite manejar inventario, registrar operaciones de compra/venta y generar reportes profesionales en PDF.",
    icon: "fas fa-boxes-stacked",
    iconColor: "bg-accent-secondary/15 text-accent-secondary",
    gradient: "from-accent to-[#e040fb]",
    tags: ["Python", "SQLite", "ReportLab", "PDF"],
  },
  {
    title: "Apps Web con React",
    desc: "Conjunto de aplicaciones web construidas con React y JavaScript: un sistema de turnos para gestionar citas y una app de control de gastos para finanzas personales.",
    icon: "fas fa-mobile-screen-button",
    iconColor: "bg-accent-tertiary/15 text-accent-tertiary",
    gradient: "from-accent-secondary to-[#00b4d8]",
    tags: ["React", "JavaScript", "CSS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative z-[1]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <p className="font-mono text-xs font-semibold tracking-[3px] uppercase text-accent flex items-center gap-2.5 mb-3">
            <span className="w-7 h-0.5 bg-accent inline-block" />
            Proyectos
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
            Lo que he <span className="gradient-text">construido</span>
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <RevealOnScroll key={i}>
              <div className="bg-card border border-border rounded-2xl transition-all hover:border-accent hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col h-full group">
                {/* Top gradient line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.gradient} transition-all group-hover:h-1`}
                />

                {/* Site preview */}
                {project.preview && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden bg-surface border-b border-border cursor-pointer"
                    style={{ height: "180px" }}
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <iframe
                        src={project.preview}
                        title={`Preview de ${project.title}`}
                        className="pointer-events-none select-none"
                        style={{
                          position: "absolute",
                          width: "1280px",
                          height: "900px",
                          left: "50%",
                          top: "0",
                          transform: "translateX(-50%) scale(0.25)",
                          transformOrigin: "top center",
                          border: "none",
                        }}
                        loading="lazy"
                        tabIndex={-1}
                      />
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-accent text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                        <i className="fas fa-external-link-alt" />
                        Ver sitio
                      </span>
                    </div>
                  </a>
                )}

                <div className="p-7 flex flex-col flex-grow">
                  {!project.preview && (
                    <div
                      className={`w-14 h-14 rounded-[14px] flex items-center justify-center text-xl mb-5 ${project.iconColor}`}
                    >
                      <i className={project.icon} />
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-3">
                    {project.preview && (
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-base ${project.iconColor}`}
                      >
                        <i className={project.icon} />
                      </div>
                    )}
                    <h3 className="text-lg font-bold">{project.title}</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-accent/10 text-accent-light font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
