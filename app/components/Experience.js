"use client";

import RevealOnScroll from "./RevealOnScroll";

const jobs = [
  {
    role: "Desarrollo Web y Soporte",
    company: "Raise Digital Academy",
    period: "Oct 2021 – Dic 2023",
    location: "Santiago del Estero (Hibrido)",
    dotColor: "border-accent",
    tasks: [
      "Creacion de paginas web para la plataforma educativa con HTML, CSS y JavaScript",
      "Documentacion tecnica del proyecto y soporte a usuarios",
      "Mentoria a 5 estudiantes en sus proyectos de desarrollo web, varios de los cuales hoy trabajan en el rubro",
    ],
  },
  {
    role: "Asesor Legislativo",
    company: "Camara de Diputados de la Provincia",
    period: "Nov 2022 – Dic 2025",
    location: "Santiago del Estero",
    dotColor: "border-accent-secondary",
    tasks: [
      "Seguimiento de 5-7 expedientes mensuales con control de plazos y cumplimiento",
      "Redaccion de notas y comunicaciones oficiales",
      "Coordinacion con 3-4 areas internas para destrabar tramites y agilizar procesos",
      "Implementacion de un sistema de archivo y organizacion de la documentacion del area",
      "Capacitacion a companeros en herramientas digitales para optimizar el trabajo diario",
    ],
  },
  {
    role: "Tecnico Electricista",
    company: "Empresa Contratista",
    period: "Jun 2021 – Abr 2022",
    location: "Santiago del Estero",
    dotColor: "border-accent-yellow",
    tasks: [
      "Instalacion de sistema de alarmas y cableado en edificio publico",
      "Resolucion de problemas tecnicos en instalaciones electricas",
      "Cumplimiento de normas de seguridad en obra",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative z-[1]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <p className="font-mono text-xs font-semibold tracking-[3px] uppercase text-accent flex items-center gap-2.5 mb-3">
            <span className="w-7 h-0.5 bg-accent inline-block" />
            Experiencia
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
            Trayectoria <span className="gradient-text">laboral</span>
          </h2>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative pl-10 sm:pl-12">
          {/* Timeline line */}
          <div className="absolute left-[9px] sm:left-[11px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-transparent" />

          {jobs.map((job, i) => (
            <RevealOnScroll key={i}>
              <div className="relative mb-10 last:mb-0">
                {/* Dot */}
                <div
                  className={`absolute -left-10 sm:-left-12 top-2 w-[18px] h-[18px] rounded-full bg-background border-[3px] ${job.dotColor} z-[2]`}
                />

                {/* Card */}
                <div className="bg-card border border-border rounded-2xl p-6 sm:p-7 transition-all hover:border-accent hover:translate-x-1 hover:shadow-[0_0_40px_rgba(108,99,255,0.15)]">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{job.role}</h3>
                      <p className="text-accent font-medium text-sm">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <i className="fas fa-calendar-alt" /> {job.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <i className="fas fa-map-marker-alt" /> {job.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.tasks.map((task, j) => (
                      <li
                        key={j}
                        className="pl-6 relative text-text-secondary text-sm before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-2 before:rounded-sm before:bg-accent/50"
                      >
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
