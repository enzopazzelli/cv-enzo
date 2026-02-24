"use client";

import RevealOnScroll from "./RevealOnScroll";

const skillBlocks = [
  {
    title: "Administrativas",
    icon: "fas fa-folder-open",
    iconColor: "bg-accent/15 text-accent",
    items: [
      "Gestion documental y archivo",
      "Seguimiento de tramites y plazos",
      "Redaccion de notas oficiales",
      "Coordinacion entre areas y equipos",
    ],
  },
  {
    title: "Tecnicas / Electromecanica",
    icon: "fas fa-screwdriver-wrench",
    iconColor: "bg-accent-yellow/15 text-accent-yellow",
    items: [
      "Instalaciones electricas comerciales y residenciales",
      "Mantenimiento preventivo y correctivo",
      "Lectura de planos tecnicos",
      "Normas de seguridad en obra",
    ],
  },
  {
    title: "Atencion al publico",
    icon: "fas fa-headset",
    iconColor: "bg-accent-secondary/15 text-accent-secondary",
    items: [
      "Asesoramiento sobre productos y servicios",
      "Manejo de caja y cobros",
      "Control de stock y mercaderia",
      "Trato con clientes y resolucion de consultas",
    ],
  },
  {
    title: "Complementarias",
    icon: "fas fa-star",
    iconColor: "bg-accent-tertiary/15 text-accent-tertiary",
    items: [
      "Ingles intermedio (B1)",
      "Excel medio-avanzado",
      "Google Workspace (Docs, Sheets, Drive)",
      "Licencia de conducir A1.3 y B1 vigente",
    ],
  },
];

export default function OtherSkills() {
  return (
    <section id="other-skills" className="py-20 sm:py-28 relative z-[1]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <p className="font-mono text-xs font-semibold tracking-[3px] uppercase text-accent flex items-center gap-2.5 mb-3">
            <span className="w-7 h-0.5 bg-accent inline-block" />
            Mas alla del codigo
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Otras <span className="gradient-text">habilidades</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="text-text-secondary text-base max-w-2xl mb-12">
            Ademas de mi stack tecnico, cuento con habilidades que he
            desarrollado en distintos entornos laborales y que complementan mi
            perfil profesional.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillBlocks.map((block, i) => (
            <RevealOnScroll key={i}>
              <div className="bg-card border border-border rounded-2xl p-7 transition-all hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(108,99,255,0.15)] h-full">
                <div className="flex items-center gap-3.5 mb-5">
                  <div
                    className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-xl ${block.iconColor}`}
                  >
                    <i className={block.icon} />
                  </div>
                  <h3 className="font-bold text-base">{block.title}</h3>
                </div>

                <ul className="space-y-2.5">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 px-3.5 py-2.5 bg-white/[0.02] rounded-xl text-sm text-text-secondary transition-all hover:bg-accent/[0.06] hover:text-text-primary hover:pl-5 cursor-default"
                    >
                      <i className="fas fa-check text-accent text-xs w-4 text-center" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
