"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LOGOS = [
  { src: "/logos/ant-neuro.webp", name: "ANT Neuro" },
  { src: "/logos/dwl.webp", name: "DWL" },
  { src: "/logos/neurosoft.webp", name: "Neurosoft" },
  { src: "/logos/sigmastim.webp", name: "Sigmastim" },
];

type VibeState = Map<HTMLElement, gsap.core.Tween | null>;

export default function LogoSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const vibesRef = useRef<VibeState>(new Map());

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const items = Array.from(track.children) as HTMLDivElement[];
    if (items.length === 0) return;

    track.append(...items.map((item) => item.cloneNode(true)));

    const allItems = Array.from(track.children) as HTMLDivElement[];
    const totalWidth = track.scrollWidth / 2;
    let x = 0;

    const loop = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      x -= 0.6;
      if (x <= -totalWidth) x = 0;
      gsap.set(track, { x });

      const cx = window.innerWidth / 2;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const threshold = sectionRect.width * 0.1;

      allItems.forEach((el) => {
        const elRect = el.getBoundingClientRect();
        const elCenter = elRect.left + elRect.width / 2;
        const dist = Math.abs(elCenter - cx);

        if (dist < threshold) {
          if (!vibesRef.current.has(el)) {
            const tween = gsap.to(el, {
              rotateY: 360,
              duration: 1.5,
              ease: "power2.out",
            });
            vibesRef.current.set(el, tween);
          }
        } else {
          const existing = vibesRef.current.get(el);
          if (existing) {
            existing.kill();
            vibesRef.current.delete(el);
            gsap.set(el, { rotateY: 0 });
          }
        }
      });
    };

    gsap.ticker.add(loop);

    return () => {
      gsap.ticker.remove(loop);
      vibesRef.current.forEach((tween) => tween?.kill());
      vibesRef.current.clear();
    };
  }, []);

  useEffect(() => {
    const containers = itemsRef.current.filter(Boolean);
    if (containers.length === 0) return;

    gsap.fromTo(
      containers,
      { opacity: 0, y: 50, scale: 0.8, rotateX: 15 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-transparent py-10 sm:py-14"
      style={{ perspective: "800px" }}
    >
      <div
        ref={trackRef}
        className="flex items-center gap-6 sm:gap-8 lg:gap-10"
        style={{ willChange: "transform" }}
      >
        {LOGOS.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            ref={(el) => { itemsRef.current[i] = el!; }}
            className="shrink-0 glass-card rounded-2xl border border-[#E2E8F0] p-5 sm:p-6 lg:p-7 flex flex-col items-center justify-center min-w-[180px] sm:min-w-[200px] lg:min-w-[220px] hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="relative h-16 sm:h-20 lg:h-24 w-24 sm:w-28 lg:w-32 flex items-center justify-center mb-3">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 180px, (max-width: 1024px) 200px, 220px"
              />
            </div>
            <span className="text-sm sm:text-base font-heading font-bold text-[#0F172A]">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
