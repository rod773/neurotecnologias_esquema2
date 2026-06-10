"use client";

import Link from "next/link";
import Image from "next/image";
import { SPECIALTIES } from "@/lib/constants";

export default function ProductosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge mb-4 animate-fade-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Especialidades clínicas
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight reveal-title">
              <span className="text-gradient">Productos</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto">
              Equipos médicos avanzados organizados por especialidad clínica. Soluciones especializadas para centros de salud, hospitales e instituciones académicas.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALTIES GRID */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SPECIALTIES.map((spec) => (
              <Link key={spec.id} href={`/${spec.slug}`} className="glass-card rounded-2xl overflow-hidden border border-[#E2E8F0] card-hover group block">
                <div className="bg-gradient-to-br from-gray-50 to-white p-4">
                  <Image src={spec.img} alt={spec.title} width={800} height={600} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="w-full h-96 object-cover rounded-lg" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-[#078A82] transition-colors">{spec.title}</h3>
                  <p className="text-sm text-[#64748B]">{spec.products.length} equipos disponibles</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#078A82]">
                    Ver equipos
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
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
            ¿Necesitas una solución específica para tu centro médico?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8">
            Te asesoramos sobre los equipos más adecuados según tu especialidad, tipo de institución y aplicación clínica.
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
