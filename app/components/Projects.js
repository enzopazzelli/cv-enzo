"use client";

import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

// Syntax highlight helpers
const kw = (t) => `<span class="text-purple-400">${t}</span>`;
const vn = (t) => `<span class="text-red-400">${t}</span>`;
const op = (t) => `<span class="text-cyan-400">${t}</span>`;
const pr = (t) => `<span class="text-blue-400">${t}</span>`;
const st = (t) => `<span class="text-green-400">"${t}"</span>`;
const nm = (t) => `<span class="text-yellow-400">${t}</span>`;
const mu = (t) => `<span class="text-text-muted">${t}</span>`;
const arr = (...items) =>
  `${op("[")}${items.map((s, i) => `${st(s)}${i < items.length - 1 ? mu(", ") : ""}`).join("")}${op("]")}`;

const projects = [
  {
    title: "GeoMuni",
    filename: "geomuni.js",
    desc: "Plataforma GIS municipal para modernizar la gestión catastral y urbana. Edición geométrica de parcelas, validación topológica automática y certificados catastrales en PDF.",
    gradient: "from-[#22c55e] to-[#06b6d4]",
    glowColor: "bg-[#22c55e]/10",
    tags: ["Next.js", "MapLibre GL", "PostGIS", "Neon"],
    preview: "https://geomuni.vercel.app/",
    link: "https://geomuni.vercel.app/",
    repo: "https://github.com/enzopazzelli/geomuni",
    codeLines: [
      { indent: 0, html: `${kw("const")} ${vn("geomuni")} ${op("=")} ${op("{")}` },
      { indent: 1, html: `${pr("tipo")}${op(":")} ${st("Plataforma GIS")}${mu(",")}` },
      { indent: 1, html: `${pr("stack")}${op(":")} ${arr("Next.js", "MapLibre GL", "PostGIS")}${mu(",")}` },
      { indent: 1, html: `${pr("db")}${op(":")} ${st("Neon PostgreSQL")}${mu(",")}` },
      { indent: 1, html: `${pr("activo")}${op(":")} ${kw("true")}` },
      { indent: 0, html: `${op("}")}${mu(";")}` },
    ],
  },
  {
    title: "TurnoPro",
    filename: "turnopro.js",
    desc: "SaaS multi-tenant para gestión de turnos. Soporta dentistas, médicos, abogados, veterinarios, psicólogos y contadores con módulos especializados por especialidad.",
    gradient: "from-[#f59e0b] to-[#ef4444]",
    glowColor: "bg-[#f59e0b]/10",
    tags: ["Next.js", "Supabase", "Tailwind", "Zustand"],
    preview: "https://turnopro-snowy.vercel.app/",
    link: "https://turnopro-snowy.vercel.app/",
    repo: "https://github.com/enzopazzelli/turnopro",
    codeLines: [
      { indent: 0, html: `${kw("const")} ${vn("turnoPro")} ${op("=")} ${op("{")}` },
      { indent: 1, html: `${pr("tipo")}${op(":")} ${st("SaaS Multi-Tenant")}${mu(",")}` },
      { indent: 1, html: `${pr("stack")}${op(":")} ${arr("Next.js", "Supabase", "Tailwind")}${mu(",")}` },
      { indent: 1, html: `${pr("roles")}${op(":")} ${nm("4")}${mu(",")}` },
      { indent: 1, html: `${pr("activo")}${op(":")} ${kw("true")}` },
      { indent: 0, html: `${op("}")}${mu(";")}` },
    ],
  },
  {
    title: "Tres Marias Indumentaria",
    filename: "tres-marias.js",
    desc: "Sitio web comercial para un taller de indumentaria en Santa Fe. Landing page con catálogo de productos, ofertas, formulario de pedidos y contacto por WhatsApp.",
    gradient: "from-accent to-[#e040fb]",
    glowColor: "bg-[#e040fb]/10",
    tags: ["Next.js", "React", "Tailwind", "Google Sheets"],
    preview: "https://tres-marias-alpha.vercel.app/",
    link: "https://tres-marias-alpha.vercel.app/",
    codeLines: [
      { indent: 0, html: `${kw("const")} ${vn("tresMarias")} ${op("=")} ${op("{")}` },
      { indent: 1, html: `${pr("tipo")}${op(":")} ${st("Landing Comercial")}${mu(",")}` },
      { indent: 1, html: `${pr("stack")}${op(":")} ${arr("Next.js", "React", "Tailwind")}${mu(",")}` },
      { indent: 1, html: `${pr("cms")}${op(":")} ${st("Google Sheets")}${mu(",")}` },
      { indent: 1, html: `${pr("activo")}${op(":")} ${kw("true")}` },
      { indent: 0, html: `${op("}")}${mu(";")}` },
    ],
  },
  {
    title: "Gymos",
    filename: "gymos.ts",
    desc: "Sistema de gestión para gimnasios. Control de socios, membresías, pagos y rutinas con una interfaz moderna en TypeScript y persistencia con Drizzle ORM.",
    gradient: "from-[#8b5cf6] to-[#3b82f6]",
    glowColor: "bg-[#8b5cf6]/10",
    tags: ["Next.js", "TypeScript", "Drizzle ORM"],
    repo: "https://github.com/enzopazzelli/gymos",
    codeLines: [
      { indent: 0, html: `${kw("const")} ${vn("gymos")} ${op("=")} ${op("{")}` },
      { indent: 1, html: `${pr("tipo")}${op(":")} ${st("Gestor de Gimnasio")}${mu(",")}` },
      { indent: 1, html: `${pr("stack")}${op(":")} ${arr("Next.js", "TypeScript", "Drizzle")}${mu(",")}` },
      { indent: 1, html: `${pr("db")}${op(":")} ${st("PostgreSQL")}${mu(",")}` },
      { indent: 1, html: `${pr("activo")}${op(":")} ${kw("true")}` },
      { indent: 0, html: `${op("}")}${mu(";")}` },
    ],
  },
  {
    title: "MiAdmin",
    filename: "mi-admin.js",
    desc: "Sistema de gestión comercial de escritorio en Python con SQLite. Maneja inventario, registra operaciones de compra/venta y genera reportes profesionales en PDF.",
    gradient: "from-accent-secondary to-[#00b4d8]",
    glowColor: "bg-[#00b4d8]/10",
    tags: ["Python", "SQLite", "ReportLab", "PDF"],
    codeLines: [
      { indent: 0, html: `${kw("const")} ${vn("miAdmin")} ${op("=")} ${op("{")}` },
      { indent: 1, html: `${pr("tipo")}${op(":")} ${st("App de Escritorio")}${mu(",")}` },
      { indent: 1, html: `${pr("lenguaje")}${op(":")} ${st("Python")}${mu(",")}` },
      { indent: 1, html: `${pr("db")}${op(":")} ${st("SQLite")}${mu(",")}` },
      { indent: 1, html: `${pr("reportes")}${op(":")} ${st("PDF")}${mu(",")}` },
      { indent: 1, html: `${pr("activo")}${op(":")} ${kw("true")}` },
      { indent: 0, html: `${op("}")}${mu(";")}` },
    ],
  },
];

function FlipButton({ onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1.5 bg-surface/90 border border-border text-text-muted hover:text-accent hover:border-accent text-[11px] font-mono px-2.5 py-1.5 rounded-lg transition-all backdrop-blur-sm"
    >
      <i className={`${icon} text-[10px]`} />
      <span>{label}</span>
    </button>
  );
}

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);
  const codeRef = useRef(null);
  const staticCodeRef = useRef(null);

  const triggerCodeAnimation = () => {
    const el = codeRef.current;
    if (!el) return;
    el.querySelectorAll(".code-line").forEach((line, i) => {
      line.style.animation = "none";
      void line.offsetHeight;
      line.style.animation = `code-appear 0.4s ease ${i * 0.07}s forwards`;
    });
  };

  const handleFlip = (toCode) => {
    setFlipped(toCode);
    if (toCode) setTimeout(triggerCodeAnimation, 360);
  };

  // Scroll-triggered animation for static code block (MiAdmin)
  useEffect(() => {
    if (project.preview || !staticCodeRef.current) return;
    const el = staticCodeRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".code-line").forEach((line, i) => {
            line.style.animation = `code-appear 0.4s ease ${i * 0.07 + 0.15}s forwards`;
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [project.preview]);

  return (
    <div className="bg-card border border-border rounded-2xl transition-all hover:border-accent hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col h-full group">
      {/* Top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.gradient} transition-all group-hover:h-1`} />

      {project.preview ? (
        /* Flip card */
        <div
          className="relative overflow-hidden border-b border-border bg-surface"
          style={{ height: "200px", perspective: "1200px" }}
        >
          <div
            className="relative w-full h-full transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* FRONT: iframe */}
            <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 block overflow-hidden"
              >
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
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors" />
              </a>
              <FlipButton
                onClick={(e) => { e.stopPropagation(); handleFlip(true); }}
                icon="fas fa-code"
                label="código"
              />
            </div>

            {/* BACK: code block */}
            <div
              ref={codeRef}
              className="absolute inset-0 bg-surface/40 p-4"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[10px] text-text-muted">{project.filename}</span>
              </div>
              <div className="font-mono text-[11px] leading-[1.75]">
                {project.codeLines.map((line, i) => (
                  <div
                    key={i}
                    className="code-line opacity-0"
                    style={{ paddingLeft: `${line.indent * 14}px` }}
                    dangerouslySetInnerHTML={{ __html: line.html }}
                  />
                ))}
              </div>
              <div className={`absolute -bottom-6 -right-6 w-28 h-28 ${project.glowColor} rounded-full blur-3xl pointer-events-none`} />
              <FlipButton onClick={() => handleFlip(false)} icon="fas fa-globe" label="preview" />
            </div>
          </div>
        </div>
      ) : (
        /* Static code block for projects without live preview */
        <div ref={staticCodeRef} className="border-b border-border bg-surface/30 p-5 relative">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-auto font-mono text-[11px] text-text-muted">{project.filename}</span>
          </div>
          <div className="font-mono text-[11px] sm:text-xs leading-[1.75]">
            {project.codeLines.map((line, i) => (
              <div
                key={i}
                className="code-line opacity-0"
                style={{ paddingLeft: `${line.indent * 14}px` }}
                dangerouslySetInnerHTML={{ __html: line.html }}
              />
            ))}
          </div>
          <div className={`absolute -bottom-8 -right-8 w-32 h-32 ${project.glowColor} rounded-full blur-3xl pointer-events-none`} />
        </div>
      )}

      {/* Card body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-base font-bold mb-2">{project.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed flex-grow">{project.desc}</p>
        <div className="flex items-center gap-3 mt-4 flex-wrap">
          <div className="flex flex-wrap gap-1.5 flex-grow">
            {project.tags.map((tag, j) => (
              <span key={j} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-accent/10 text-accent-light font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors text-base" title="Ver repositorio">
                <i className="fab fa-github" />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors text-base" title="Ver sitio">
                <i className="fas fa-external-link-alt" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

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
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
