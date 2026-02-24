"use client";

import { useState, useRef, useEffect } from "react";

const specificCvs = [
  { label: "Administrativo", file: "/cv/administrativo.pdf" },
  { label: "Comercial", file: "/cv/comercial.pdf" },
  { label: "Operativo", file: "/cv/operativo.pdf" },
  { label: "Tecnico", file: "/cv/tecnico.pdf" },
  { label: "Tech (EN)", file: "/cv/tech.pdf" },
];

// Simple obfuscated key — change this value to set your password
// To generate: btoa("your-password") in the browser console
const ACCESS_KEY = "ZW56bzIwMjY="; // "enzo2026"

export default function CvDownload() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCv, setSelectedCv] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (modalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [modalOpen]);

  const handleSpecificClick = (cv) => {
    setDropdownOpen(false);
    if (unlocked) {
      triggerDownload(cv.file, cv.label);
    } else {
      setSelectedCv(cv);
      setPassword("");
      setError(false);
      setModalOpen(true);
    }
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    try {
      if (btoa(password) === ACCESS_KEY) {
        setUnlocked(true);
        setModalOpen(false);
        triggerDownload(selectedCv.file, selectedCv.label);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  const triggerDownload = (file, label) => {
    const a = document.createElement("a");
    a.href = file;
    a.download = `CV - Enzo Pazzelli - ${label}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-4">
        {/* Main download button */}
        <a
          href="/cv/general.pdf"
          download="CV - Enzo Pazzelli - General.pdf"
          className="inline-flex items-center gap-2.5 bg-accent-secondary/15 border border-accent-secondary/30 text-accent-secondary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-accent-secondary/25 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,212,170,0.15)]"
        >
          <i className="fas fa-file-arrow-down" /> Descargar CV
        </a>

        {/* Specific CVs dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center gap-2.5 border border-border text-text-secondary px-5 py-3.5 rounded-xl font-semibold text-sm hover:border-accent/50 hover:text-text-primary transition-all hover:-translate-y-1"
          >
            <i className="fas fa-folder-open" />
            CV Especifico
            <i
              className={`fas fa-chevron-down text-[10px] transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full mt-2 left-0 min-w-[200px] bg-card border border-border rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden z-50 animate-[code-appear_0.2s_ease_forwards]">
              {specificCvs.map((cv) => (
                <button
                  key={cv.label}
                  onClick={() => handleSpecificClick(cv)}
                  className="w-full text-left px-4 py-3 text-sm text-text-secondary hover:bg-accent/10 hover:text-text-primary transition-colors flex items-center gap-3"
                >
                  <i className="fas fa-file-pdf text-accent-tertiary text-xs" />
                  {cv.label}
                  {unlocked && (
                    <i className="fas fa-lock-open text-accent-secondary text-[10px] ml-auto" />
                  )}
                </button>
              ))}
              {!unlocked && (
                <div className="px-4 py-2 border-t border-border">
                  <span className="text-[11px] text-text-muted flex items-center gap-1.5">
                    <i className="fas fa-lock text-[9px]" />
                    Requiere clave de acceso
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Password modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-card border border-border rounded-2xl p-6 sm:p-8 w-full max-w-sm relative shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-accent-secondary rounded-t-2xl" />

            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
            >
              <i className="fas fa-xmark text-lg" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lock text-accent text-lg" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">
                CV {selectedCv?.label}
              </h3>
              <p className="text-sm text-text-muted mt-1">
                Ingresa la clave para descargar
              </p>
            </div>

            <form onSubmit={handleSubmitPassword}>
              <input
                ref={inputRef}
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Clave de acceso"
                className={`w-full bg-surface border ${
                  error ? "border-accent-tertiary" : "border-border"
                } rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors`}
              />
              {error && (
                <p className="text-accent-tertiary text-xs mt-2 flex items-center gap-1.5">
                  <i className="fas fa-circle-exclamation" />
                  Clave incorrecta
                </p>
              )}
              <button
                type="submit"
                className="w-full mt-4 bg-accent text-white py-3 rounded-lg font-semibold text-sm hover:bg-accent-light transition-all hover:shadow-[0_4px_20px_rgba(108,99,255,0.3)]"
              >
                Descargar
              </button>
            </form>

            <p className="text-[11px] text-text-muted text-center mt-4">
              Solicita la clave a{" "}
              <a
                href="mailto:enzopazzelli@gmail.com"
                className="text-accent hover:text-accent-light transition-colors"
              >
                enzopazzelli@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
