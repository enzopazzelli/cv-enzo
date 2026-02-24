"use client";

import { useEffect, useRef } from "react";
import CvDownload from "./CvDownload";

const codeLines = [
  { indent: 0, content: '<span class="text-purple-400">const</span> <span class="text-red-400">enzo</span> <span class="text-cyan-400">=</span> <span class="text-cyan-400">{</span>' },
  { indent: 1, content: '<span class="text-blue-400">rol</span><span class="text-cyan-400">:</span> <span class="text-green-400">"Dev Junior"</span><span class="text-text-muted">,</span>' },
  { indent: 1, content: '<span class="text-blue-400">stack</span><span class="text-cyan-400">:</span> <span class="text-cyan-400">[</span>' },
  { indent: 2, content: '<span class="text-green-400">"Python"</span><span class="text-text-muted">,</span>' },
  { indent: 2, content: '<span class="text-green-400">"React"</span><span class="text-text-muted">,</span>' },
  { indent: 2, content: '<span class="text-green-400">"Next.js"</span><span class="text-text-muted">,</span>' },
  { indent: 2, content: '<span class="text-green-400">"Node.js"</span>' },
  { indent: 1, content: '<span class="text-cyan-400">]</span><span class="text-text-muted">,</span>' },
  { indent: 1, content: '<span class="text-blue-400">ubicacion</span><span class="text-cyan-400">:</span> <span class="text-green-400">"Sgo. del Estero"</span><span class="text-text-muted">,</span>' },
  { indent: 1, content: '<span class="text-blue-400">disponible</span><span class="text-cyan-400">:</span> <span class="text-purple-400">true</span>' },
  { indent: 0, content: '<span class="text-cyan-400">}</span><span class="text-text-muted">;</span>' },
];

const stats = [
  { number: "+2", label: "Anos en dev" },
  { number: "+3", label: "Proyectos propios" },
  { number: "+5", label: "Tecnologias" },
];

export default function Hero() {
  const codeRef = useRef(null);

  useEffect(() => {
    if (!codeRef.current) return;
    const lines = codeRef.current.querySelectorAll(".code-line");
    lines.forEach((line, i) => {
      line.style.animation = `code-appear 0.4s ease ${i * 0.08 + 0.3}s forwards`;
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center relative z-[1] pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-sm text-accent-light font-medium mb-6">
              <span className="w-2 h-2 bg-accent-secondary rounded-full animate-[pulse-dot_2s_infinite]" />
              Disponible para trabajar
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-3">
              Enzo
              <br />
              <span className="gradient-text">Pazzelli</span>
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-text-secondary mb-6">
              Desarrollador Junior &mdash; Python &middot; React &middot; Datos
            </p>

            <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Formacion tecnica en Electromecánica y estudiante de Ciencia de
              Datos e IA. Creo soluciones web y trabajo con datos, con
              experiencia real en startups educativas y gestion administrativa.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="mailto:enzopazzelli@gmail.com"
                className="inline-flex items-center gap-2.5 bg-accent text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-accent-light transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(108,99,255,0.3)]"
              >
                <i className="fas fa-paper-plane" /> Hablemos
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 border border-border text-text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:border-accent hover:text-accent transition-all hover:-translate-y-1"
              >
                <i className="fas fa-code" /> Ver proyectos
              </a>
            </div>

            {/* CV Download */}
            <CvDownload />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 max-w-sm mx-auto lg:mx-0">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold gradient-text">
                    {s.number}
                  </div>
                  <div className="text-xs text-text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code card visual */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-7 w-full max-w-md relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-accent-secondary" />

              {/* Window dots */}
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-xs text-text-muted">
                  enzo.js
                </span>
              </div>

              {/* Code */}
              <div ref={codeRef} className="font-mono text-xs sm:text-sm leading-7 sm:leading-8">
                {codeLines.map((line, i) => (
                  <div
                    key={i}
                    className="code-line opacity-0"
                    style={{ paddingLeft: `${line.indent * 20}px` }}
                    dangerouslySetInnerHTML={{ __html: line.content }}
                  />
                ))}
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
