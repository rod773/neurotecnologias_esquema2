"use client";

import Link from "next/link";
import Image from "next/image";
import { SPECIALTIES } from "@/lib/constants";

export default function NeurocirugiaPage() {
  const spec = SPECIALTIES.find((s) => s.slug === "neurocirugia")!;

  return (
    <>
      <section className="relative overflow-hidden hero-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge animate-fade-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
              {spec.title}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight mt-6 reveal-title">
              <span className="text-gradient">{spec.title}</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto mt-6">
              Equipos de última generación para quirófanos: monitoreo intraoperatorio, neuronavegación y estimulación cortical.
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
            ¿Necesitas equipamiento para tu quirófano?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8">
            Proveemos tecnología de punta para salas de neurocirugía. Contáctanos para recibir asesoría especializada.
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
