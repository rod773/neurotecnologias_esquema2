"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BRANDS = [
  { src: "/logos/ant-neuro.webp", name: "ANT Neuro" },
  { src: "/logos/dwl.webp", name: "DWL" },
  { src: "/logos/neurosoft.webp", name: "Neurosoft" },
  { src: "/logos/sigmastim.webp", name: "Sigmastim" },
];

export default function BrandsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const items = Array.from(track.children) as HTMLDivElement[];
    if (items.length === 0) return;

    // Clone items for infinite loop
    track.append(...items.map((item) => item.cloneNode(true)));
    track.append(...items.map((item) => item.cloneNode(true)));

    const totalWidth = track.scrollWidth / 3;
    let x = 0;

    const loop = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      x -= 0.5;
      if (x <= -totalWidth) x = 0;
      gsap.set(track, { x });
    };

    gsap.ticker.add(loop);

    return () => {
      gsap.ticker.remove(loop);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 border-y border-[#E2E8F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="badge mb-3">Proveedores oficiales</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold leading-tight">
            Trabajamos directamente con fabricantes <span className="text-gradient">líderes del sector</span>
          </h2>
          <p className="mt-3 text-base text-[#475569] max-w-2xl mx-auto">
            Neurotecnologías forma parte del ecosistema profesional de neurotecnología, neuromodulación,
            neurodiagnóstico y rehabilitación, con tecnología real de proveedores reconocidos.
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex items-center gap-6 sm:gap-8 lg:gap-10"
        style={{ willChange: "transform" }}
      >
        {BRANDS.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="shrink-0 glass-card rounded-2xl border border-[#E2E8F0] p-5 sm:p-6 lg:p-7 flex flex-col items-center justify-center min-w-[180px] sm:min-w-[200px] lg:min-w-[220px] hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="relative h-16 sm:h-20 lg:h-24 w-24 sm:w-28 lg:w-32 flex items-center justify-center mb-3">
              <Image
                src={brand.src}
                alt={brand.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 180px, (max-width: 1024px) 200px, 220px"
              />
            </div>
            <span className="text-sm sm:text-base font-heading font-bold text-[#0F172A]">{brand.name}</span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 text-center">
          <p className="text-sm text-[#475569] font-medium">
            Neurotecnologías no es una web genérica — estamos conectados con tecnología médica real y proveedores reconocidos del sector.
          </p>
        </div>
      </div>
    </section>
  );
}
