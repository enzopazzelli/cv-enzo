"use client";

import { useEffect, useRef } from "react";
import RevealOnScroll from "./RevealOnScroll";

// Syntax highlight helpers
const kw = (t) => `<span class="text-purple-400">${t}</span>`;
const vn = (t) => `<span class="text-red-400">${t}</span>`;
const op = (t) => `<span class="text-cyan-400">${t}</span>`;
const pr = (t) => `<span class="text-blue-400">${t}</span>`;
const st = (t) => `<span class="text-green-400">"${t}"</span>`;
const nm = (t) => `<span class="text-yellow-400">${t}</span>`;
const mu = (t) => `<span class="text-text-muted">${t}</span>`;

const projects = [
  {
    title: "Dashboard Ministerio de Desarrollo",
    filename: "dashboard.js",
    desc: "Práctica profesionalizante para la Tecnicatura en Ciencia de Datos e IA. Digitalización y visualización de datos del Ministerio de Desarrollo Social de Santiago del Estero.",
    gradient: "from-accent to-accent-secondary",
    glowColor: "bg-accent/10",
    tags: ["Next.js", "React", "Tailwind", "Data Science"],
    link: "https://practica-profesionalizante-itse.vercel.app/",
    repo: "https://github.com/enzopazzelli/practica-profesionalizante",
    codeLines: [
      { indent: 0, html: `${kw("const")} ${vn("dashboard")} ${op("=")} ${op("{")}` },
      { indent: 1, html: `${pr("tipo")}${op(":")} ${st("Data Dashboard")}${mu(",")}` },
      { indent: 1, html: `${pr("stack")}${op(":")} ${op("[")}` },
      { indent: 2, html: `${st("Next.js")}${mu(",")}` },
      { indent: 2, html: `${st("React")}${mu(",")}` },
      { indent: 2, html: `${st("Tailwind")}` },
      { indent: 1, html: `${op("]")}${mu(",")}` },
      { indent: 1, html: `${pr("area")}${op(":")} ${st("Data Science")}${mu(",")}` },
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
    link: "https://tres-marias-alpha.vercel.app/",
    codeLines: [
      { indent: 0, html: `${kw("const")} ${vn("tresMarias")} ${op("=")} ${op("{")}` },
      { indent: 1, html: `${pr("tipo")}${op(":")} ${st("Landing Comercial")}${mu(",")}` },
      { indent: 1, html: `${pr("stack")}${op(":")} ${op("[")}` },
      { indent: 2, html: `${st("Next.js")}${mu(",")}` },
      { indent: 2, html: `${st("React")}${mu(",")}` },
      { indent: 2, html: `${st("Tailwind")}` },
      { indent: 1, html: `${op("]")}${mu(",")}` },
      { indent: 1, html: `${pr("cms")}${op(":")} ${st("Google Sheets")}${mu(",")}` },
      { indent: 1, html: `${pr("activo")}${op(":")} ${kw("true")}` },
      { indent: 0, html: `${op("}")}${mu(";")}` },
    ],
  },
  {
    title: "GeoMuni",
    filename: "geomuni.js",
    desc: "Plataforma GIS municipal para modernizar la gestión catastral y urbana. Edición geométrica de parcelas, validación topológica automática y certificados catastrales en PDF.",
    gradient: "from-[#22c55e] to-[#06b6d4]",
    glowColor: "bg-[#22c55e]/10",
    tags: ["Next.js", "MapLibre GL", "PostGIS", "Neon"],
    link: "https://geomuni.vercel.app/",
    repo: "https://github.com/enzopazzelli/geomuni",
    codeLines: [
      { indent: 0, html: `${kw("const")} ${vn("geomuni")} ${op("=")} ${op("{")}` },
      { indent: 1, html: `${pr("tipo")}${op(":")} ${st("Plataforma GIS")}${mu(",")}` },
      { indent: 1, html: `${pr("stack")}${op(":")} ${op("[")}` },
      { indent: 2, html: `${st("Next.js")}${mu(",")}` },
      { indent: 2, html: `${st("MapLibre GL")}${mu(",")}` },
      { indent: 2, html: `${st("PostGIS")}` },
      { indent: 1, html: `${op("]")}${mu(",")}` },
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
    link: "https://turnopro-snowy.vercel.app/",
    repo: "https://github.com/enzopazzelli/turnopro",
    codeLines: [
      { indent: 0, html: `${kw("const")} ${vn("turnoPro")} ${op("=")} ${op("{")}` },
      { indent: 1, html: `${pr("tipo")}${op(":")} ${st("SaaS Multi-Tenant")}${mu(",")}` },
      { indent: 1, html: `${pr("stack")}${op(":")} ${op("[")}` },
      { indent: 2, html: `${st("Next.js")}${mu(",")}` },
      { indent: 2, html: `${st("Supabase")}${mu(",")}` },
      { indent: 2, html: `${st("Tailwind")}` },
      { indent: 1, html: `${op("]")}${mu(",")}` },
      { indent: 1, html: `${pr("roles")}${op(":")} ${nm("4")}${mu(",")}` },
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
  {
    title: "Apps Web con React",
    filename: "apps-react.js",
    desc: "Aplicaciones web construidas con React: un sistema de turnos para gestionar citas y una app de control de gastos para finanzas personales.",
    gradient: "from-accent-tertiary to-accent-yellow",
    glowColor: "bg-accent-yellow/10",
    tags: ["React", "JavaScript", "CSS"],
    codeLines: [
      { indent: 0, html: `${kw("const")} ${vn("appsReact")} ${op("=")} ${op("{")}` },
      { indent: 1, html: `${pr("tipo")}${op(":")} ${st("Apps Web")}${mu(",")}` },
      { indent: 1, html: `${pr("stack")}${op(":")} ${op("[")}` },
      { indent: 2, html: `${st("React")}${mu(",")}` },
      { indent: 2, html: `${st("JavaScript")}${mu(",")}` },
      { indent: 2, html: `${st("CSS")}` },
      { indent: 1, html: `${op("]")}${mu(",")}` },
      { indent: 1, html: `${pr("activo")}${op(":")} ${kw("true")}` },
      { indent: 0, html: `${op("}")}${mu(";")}` },
    ],
  },
];

function ProjectCard({ project }) {
  const codeRef = useRef(null);

  useEffect(() => {
    if (!codeRef.current) return;
    const el = codeRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const lines = el.querySelectorAll(".code-line");
          lines.forEach((line, i) => {
            line.style.animation = `code-appear 0.4s ease ${i * 0.07 + 0.15}s forwards`;
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-card border border-border rounded-2xl transition-all hover:border-accent hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col h-full group">
      {/* Top gradient line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.gradient} transition-all group-hover:h-1`}
      />

      {/* Code preview */}
      <div ref={codeRef} className="border-b border-border bg-surface/30 p-5 relative">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-auto font-mono text-[11px] text-text-muted">
            {project.filename}
          </span>
        </div>

        {/* Code lines */}
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

        {/* Decorative glow */}
        <div
          className={`absolute -bottom-8 -right-8 w-32 h-32 ${project.glowColor} rounded-full blur-3xl pointer-events-none`}
        />
      </div>

      {/* Card body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-base font-bold mb-2">{project.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed flex-grow">
          {project.desc}
        </p>

        <div className="flex items-center gap-3 mt-4 flex-wrap">
          <div className="flex flex-wrap gap-1.5 flex-grow">
            {project.tags.map((tag, j) => (
              <span
                key={j}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-accent/10 text-accent-light font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors text-base"
                title="Ver repositorio"
              >
                <i className="fab fa-github" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors text-base"
                title="Ver sitio"
              >
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
