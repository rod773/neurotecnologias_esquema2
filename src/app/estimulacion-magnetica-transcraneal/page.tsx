"use client";

import Link from "next/link";

export default function EMTPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge animate-fade-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              EMT / TMS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight mt-6 reveal-title">
              <span className="text-gradient">Tecnología no invasiva para neurología y psiquiatría</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto mt-6">
              La Estimulación Magnética Transcraneal (EMT/TMS) es una técnica no invasiva que utiliza
              campos magnéticos para estimular regiones específicas del cerebro. Aprobada para el
              tratamiento de la depresión mayor, TOC, ansiedad y migraña, con aplicaciones crecientes
              en rehabilitación neurológica.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-6 reveal-title">
              ¿Cómo funciona la EMT/TMS?
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed">
              La EMT utiliza una bobina electromagnética colocada sobre el cuero cabelludo para
              generar pulsos magnéticos que inducen corrientes eléctricas en la corteza cerebral.
              Dependiendo de la frecuencia y el patrón de estimulación, puede aumentar o disminuir
              la excitabilidad cortical, modulando circuitos neuronales disfuncionales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <div className="glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center text-white font-heading font-extrabold text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">TMS repetitivo (rTMS)</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Estimulación repetitiva a baja o alta frecuencia para modular la actividad cortical.
                Indicado en depresión, ansiedad, TOC y rehabilitación motora post-ACV.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="chip">Depresión</span>
                <span className="chip">TOC</span>
                <span className="chip">Ansiedad</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center text-white font-heading font-extrabold text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">Theta Burst (TBS)</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Patrones de estimulación intermitente (iTBS) o continua (cTBS) que imitan ritmos
                cerebrales naturales, con sesiones más cortas y efectos potentes.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="chip">iTBS</span>
                <span className="chip">cTBS</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center text-white font-heading font-extrabold text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">Navegación estereotáxica</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Sistemas de neuronavegación basados en resonancia magnética para posicionar la
                bobina con precisión milimétrica sobre el área cortical objetivo.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="chip">Precisión</span>
                <span className="chip">Navegación</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-6 reveal-title">
              Ventajas de la Estimulación Magnética Transcraneal
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">No invasivo</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Sin cirugía, sin anestesia, sin efectos secundarios sistémicos.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Resultados rápidos</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Mejoría clínica observable desde las primeras sesiones de tratamiento.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Ambulatorio</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Sesiones de 20-40 minutos, el paciente retorna a sus actividades.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Aprobado FDA</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Respaldado por agencias regulatorias internacionales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-6 reveal-title">
            ¿Quieres incorporar EMT/TMS en tu práctica?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8">
            Ofrecemos equipos de estimulación magnética transcraneal de última generación.
            Contáctanos para recibir asesoría sobre el equipo más adecuado para tu centro.
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
