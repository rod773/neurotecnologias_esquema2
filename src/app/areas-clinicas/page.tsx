"use client";

import Link from "next/link";
import Image from "next/image";
import { CLINICAL_AREAS } from "@/lib/constants";

export default function ClinicalAreasPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge animate-fade-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              Especialidades clínicas
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight mt-6 reveal-title">
              Áreas <span className="text-gradient">clínicas</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto mt-6">
              Equipos médicos especializados para cada área de la neurociencia clínica.
              Desde neuromodulación hasta neurointensivismo, ofrecemos tecnología avanzada
              para diagnóstico, tratamiento y rehabilitación neurológica.
            </p>
          </div>
        </div>
      </section>

      {/* CLINICAL AREAS GRID */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CLINICAL_AREAS.map((area) => (
              <Link key={area.id} href={`/${area.slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] card-hover bg-white shadow-sm hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <Image
                      src={area.img}
                      alt={area.title}
                      width={800}
                      height={600}
                      className="w-full h-auto group-hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-br ${area.gradient} text-white text-xs font-bold shadow-lg`}>
                        {String(area.id).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-heading font-bold text-white mb-1">{area.title}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {area.chips.map((chip) => (
                          <span key={chip} className="text-[10px] font-medium text-[#475569] bg-white border border-[#E2E8F0] backdrop-blur-sm px-2 py-0.5 rounded-full">{chip}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#475569] leading-relaxed">{area.description}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#078A82] group-hover:gap-2.5 transition-all">
                      Ver solución
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-6 reveal-title">
            ¿No encuentras el área clínica que buscas?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8">
            Cada centro tiene necesidades distintas. Contáctanos y te orientaremos sobre la solución más adecuada para tu especialidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-gradient text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-xl inline-flex items-center justify-center gap-2.5 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              Solicitar asesoría
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
