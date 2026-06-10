"use client";

import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  {
    id: 1,
    title: "Neurotecnologías",
    subtitle: "Soluciones para Neurofisiología y NeuroRehabilitación",
    gradient: "from-medical-500/80 to-cyan-600/80",
    img: "/imagenes/Neurotecnoligias_1.webp",
  },
  {
    id: 2,
    title: "Neuromodulación",
    subtitle: "EMT · tDCS · TEC · Equipos para estimulación cerebral no invasiva",
    gradient: "from-violet-600/80 to-blue-600/80",
    img: "/imagenes/neuromodulacion.webp",
  },
  {
    id: 3,
    title: "Neurofisiología Clínica",
    subtitle: "Diagnóstico, monitoreo y evaluación del sistema nervioso",
    gradient: "from-teal-600/80 to-emerald-600/80",
    img: "/imagenes/Neuromonitor.webp",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] lg:h-screen overflow-hidden">
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${s.img})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${s.gradient}`} />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-white leading-tight">
              {slide.title}
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
              {slide.subtitle}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Anterior"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Siguiente"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-20 text-white/40 text-xs font-mono">
        {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
      </div>
    </section>
  );
}
