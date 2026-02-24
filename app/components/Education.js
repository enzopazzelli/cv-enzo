"use client";

import RevealOnScroll from "./RevealOnScroll";

const education = [
  {
    title: "Tecnicatura Superior en Ciencia de Datos e IA",
    institution: "ITSE",
    badge: "2025 – 2026",
    badgeColor: "bg-accent-secondary/10 text-accent-secondary",
    icon: "fas fa-robot",
    iconColor: "bg-accent/15 text-accent",
    borderGradient: "from-accent to-accent-secondary",
  },
  {
    title: "Tecnico Univ. en Ciencias Sociales",
    institution: "Universidad Nacional de Santiago del Estero",
    badge: "2019 – 2024",
    badgeColor: "bg-[#e040fb]/10 text-[#e040fb]",
    icon: "fas fa-users",
    iconColor: "bg-[#e040fb]/15 text-[#e040fb]",
    borderGradient: "from-accent to-[#e040fb]",
  },
  {
    title: "Tecnico en Electromecánica",
    institution: "Escuela Tecnica N.o 4, Anatuya",
    badge: "2009 – 2014",
    badgeColor: "bg-accent-yellow/10 text-accent-yellow",
    icon: "fas fa-gears",
    iconColor: "bg-accent-secondary/15 text-accent-secondary",
    borderGradient: "from-accent-secondary to-[#00b4d8]",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 relative z-[1]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <p className="font-mono text-xs font-semibold tracking-[3px] uppercase text-accent flex items-center gap-2.5 mb-3">
            <span className="w-7 h-0.5 bg-accent inline-block" />
            Formacion
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
            Educacion <span className="gradient-text">academica</span>
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <RevealOnScroll key={i}>
              <div className="bg-card border border-border rounded-2xl p-7 transition-all hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(108,99,255,0.15)] relative overflow-hidden h-full">
                {/* Bottom gradient */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${edu.borderGradient}`}
                />

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg mb-4 ${edu.iconColor}`}
                >
                  <i className={edu.icon} />
                </div>

                <span
                  className={`inline-block font-mono text-[11px] px-2.5 py-1 rounded-md font-semibold mb-3 ${edu.badgeColor}`}
                >
                  {edu.badge}
                </span>

                <h3 className="font-bold text-base mb-2 leading-snug">
                  {edu.title}
                </h3>
                <p className="text-text-muted text-sm">{edu.institution}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
