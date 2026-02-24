"use client";

import RevealOnScroll from "./RevealOnScroll";

const categories = [
  {
    title: "Lenguajes",
    icon: "fas fa-terminal",
    iconColor: "bg-accent/15 text-accent",
    items: [
      { name: "Python", icon: "fa-brands fa-python", color: "text-[#3776AB]" },
      { name: "JavaScript", icon: "fa-brands fa-js", color: "text-[#F7DF1E]" },
      { name: "HTML5", icon: "fa-brands fa-html5", color: "text-[#E34F26]" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "text-[#1572B6]" },
      { name: "SQL", icon: "fas fa-database", color: "text-[#4479A1]" },
    ],
  },
  {
    title: "Frameworks & Librerias",
    icon: "fas fa-layer-group",
    iconColor: "bg-accent-secondary/15 text-accent-secondary",
    items: [
      { name: "React", icon: "fa-brands fa-react", color: "text-[#61DAFB]" },
      { name: "Next.js", icon: "fas fa-arrow-right", color: "text-white" },
      { name: "Node.js", icon: "fa-brands fa-node-js", color: "text-[#339933]" },
    ],
  },
  {
    title: "Datos & Bases de datos",
    icon: "fas fa-chart-line",
    iconColor: "bg-accent-tertiary/15 text-accent-tertiary",
    items: [
      { name: "Pandas", icon: "fas fa-table", color: "text-[#150458]" },
      { name: "NumPy", icon: "fas fa-calculator", color: "text-[#4DABCF]" },
      { name: "Matplotlib", icon: "fas fa-chart-area", color: "text-[#11557C]" },
      { name: "SQLite", icon: "fas fa-database", color: "text-[#003B57]" },
      { name: "PostgreSQL", icon: "fas fa-database", color: "text-[#4169E1]" },
    ],
  },
  {
    title: "Herramientas",
    icon: "fas fa-wrench",
    iconColor: "bg-accent-yellow/15 text-accent-yellow",
    items: [
      { name: "Git / GitHub", icon: "fa-brands fa-git-alt", color: "text-[#F05032]" },
      { name: "VS Code", icon: "fas fa-code", color: "text-[#007ACC]" },
      { name: "Linux", icon: "fa-brands fa-linux", color: "text-[#FCC624]" },
      { name: "Google Workspace", icon: "fa-brands fa-google", color: "text-[#4285F4]" },
      { name: "ReportLab", icon: "fas fa-file-pdf", color: "text-[#EC4040]" },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-20 sm:py-28 relative z-[1]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <p className="font-mono text-xs font-semibold tracking-[3px] uppercase text-accent flex items-center gap-2.5 mb-3">
            <span className="w-7 h-0.5 bg-accent inline-block" />
            Stack tecnico
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
            Tecnologias que <span className="gradient-text">manejo</span>
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <RevealOnScroll key={i}>
              <div className="bg-card border border-border rounded-2xl p-7 transition-all hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(108,99,255,0.15)] h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm ${cat.iconColor}`}
                  >
                    <i className={cat.icon} />
                  </div>
                  <h3 className="font-bold text-base">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] px-4 py-2.5 rounded-xl text-sm font-medium text-text-secondary transition-all hover:bg-accent/10 hover:border-accent/30 hover:text-text-primary hover:-translate-y-0.5 cursor-default"
                    >
                      <i className={`${item.icon} ${item.color} text-base`} />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
