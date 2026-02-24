"use client";

import RevealOnScroll from "./RevealOnScroll";

const highlights = [
  {
    icon: "fas fa-code",
    colorClass: "bg-accent/15 text-accent",
    title: "Desarrollo Web",
    desc: "+2 anos construyendo plataformas con HTML, CSS, JS, React y Node.js",
  },
  {
    icon: "fas fa-chart-bar",
    colorClass: "bg-accent-secondary/15 text-accent-secondary",
    title: "Ciencia de Datos",
    desc: "Tecnicatura en Ciencia de Datos e IA (2025-2026). Python, Pandas, NumPy, SQL",
  },
  {
    icon: "fas fa-briefcase",
    colorClass: "bg-accent-tertiary/15 text-accent-tertiary",
    title: "Gestion Administrativa",
    desc: "3 anos gestionando expedientes, plazos y coordinando equipos",
  },
  {
    icon: "fas fa-bolt",
    colorClass: "bg-accent-yellow/15 text-accent-yellow",
    title: "Tecnico Electromecanico",
    desc: "Formacion tecnica solida con experiencia en instalaciones electricas",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative z-[1]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <p className="font-mono text-xs font-semibold tracking-[3px] uppercase text-accent flex items-center gap-2.5 mb-3">
            <span className="w-7 h-0.5 bg-accent inline-block" />
            Sobre mi
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
            Perfil <span className="gradient-text">profesional</span>
          </h2>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-14">
          <RevealOnScroll>
            <div className="space-y-5 text-text-secondary text-base leading-relaxed">
              <p>
                Soy Enzo Pazzelli, de Santiago del Estero, Argentina. Tengo
                formacion tecnica en{" "}
                <strong className="text-text-primary">Electromecánica</strong> y
                actualmente estudio la{" "}
                <strong className="text-text-primary">
                  Tecnicatura Superior en Ciencia de Datos e Inteligencia
                  Artificial
                </strong>
                .
              </p>
              <p>
                Trabaje{" "}
                <strong className="text-text-primary">
                  2 anos en una startup educativa
                </strong>{" "}
                (Raise Digital Academy) donde cree paginas web para la
                plataforma, escribi documentacion tecnica y fui mentor de
                estudiantes que hoy trabajan en el rubro. Tambien tengo{" "}
                <strong className="text-text-primary">
                  3 anos de experiencia en gestion administrativa
                </strong>{" "}
                en la Camara de Diputados provincial, donde capacite al equipo
                en herramientas digitales e implemente un sistema de archivo
                para la documentacion del area.
              </p>
              <p>
                Manejo{" "}
                <strong className="text-text-primary">
                  Python, JavaScript, React
                </strong>{" "}
                y herramientas de datos como{" "}
                <strong className="text-text-primary">Pandas y SQL</strong>.
                Busco una oportunidad para crecer como desarrollador o en roles
                que combinen tecnologia y datos.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-4">
            {highlights.map((h, i) => (
              <RevealOnScroll key={i}>
                <div className="bg-card border border-border rounded-2xl p-5 flex gap-4 items-start transition-all hover:border-accent hover:translate-x-1 hover:shadow-[0_0_40px_rgba(108,99,255,0.15)] cursor-default">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg shrink-0 ${h.colorClass}`}
                  >
                    <i className={h.icon} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{h.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
