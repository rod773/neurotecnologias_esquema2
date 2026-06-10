"use client";

import Link from "next/link";
import Image from "next/image";
import { SPECIALTIES } from "@/lib/constants";

export default function NeurointensivismoPage() {
  const spec = SPECIALTIES.find((s) => s.slug === "neurointensivismo")!;

  return (
    <>
      <section className="relative overflow-hidden hero-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge animate-fade-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
              {spec.title}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight mt-6 reveal-title">
              <span className="text-gradient">{spec.title}</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto mt-6">
              Equipos especializados para unidades de cuidados intensivos neurológicos: monitoreo EEG continuo, Doppler transcraneal y pupilometría.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {spec.products.map((prod, i) => (
              <Link key={i} href={`/product/${prod.slug}`} className="glass-card rounded-2xl overflow-hidden border border-[#E2E8F0] card-hover group">
                <div className="bg-gradient-to-br from-gray-50 to-white p-3">
                  <Image src={prod.img} alt={prod.title} width={800} height={600} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="w-full h-96 object-cover rounded-lg" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-heading font-bold group-hover:text-[#078A82] transition-colors">{prod.title}</h3>
                  <p className="text-sm text-[#64748B] mt-2 line-clamp-2">{prod.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-6 reveal-title">
            ¿Equipas una unidad de cuidados neurocríticos?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8">
            Ofrecemos soluciones completas de monitoreo para UCI neurológica. Contáctanos para conocer nuestros equipos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-gradient text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-xl inline-flex items-center justify-center gap-2.5 transition-all">
              Solicitar asesoría
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
