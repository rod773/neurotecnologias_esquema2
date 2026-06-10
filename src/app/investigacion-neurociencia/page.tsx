"use client";

import Link from "next/link";

export default function InvestigacionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-grid bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge animate-fade-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              Investigación
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight mt-6 reveal-title">
              <span className="text-gradient">Herramientas para la ciencia del cerebro</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto mt-6">
              Equipos especializados para investigación en neurociencia, incluyendo sistemas de
              neuromodulación, electrofisiología, neuroimagen funcional y análisis de datos.
              Soluciones para laboratorios académicos, centros de investigación y la industria
              farmacéutica.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-6 reveal-title">
              Tecnología para la investigación en neurociencia
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed">
              La investigación en neurociencia requiere equipos de alta precisión para explorar
              los misterios del cerebro. Desde sistemas de estimulación cerebral no invasiva hasta
              equipos de registro electrofisiológico de alta densidad, ofrecemos las herramientas
              que los científicos necesitan para realizar investigaciones de vanguardia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <div className="glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center text-white font-heading font-extrabold text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">Estimulación cerebral</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Sistemas de EMT/TMS, tDCS, tACS y TEC para investigación básica y clínica en
                neurociencia cognitiva y trastornos neurológicos.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="chip">TMS</span>
                <span className="chip">tDCS</span>
                <span className="chip">tACS</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center text-white font-heading font-extrabold text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">Electrofisiología</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Equipos de EEG de alta densidad, potenciales evocados y registro intracraneal
                para estudios de conectividad cerebral y dinámica neuronal.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="chip">EEG</span>
                <span className="chip">Potenciales evocados</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center text-white font-heading font-extrabold text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">Neuroimagen funcional</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Sistemas de espectroscopía funcional (fNIRS) y análisis avanzado de imágenes
                para estudios de activación cerebral y metabolismo.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="chip">fNIRS</span>
                <span className="chip">Análisis avanzado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-6 reveal-title">
              Ventajas de nuestros equipos de investigación
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Alta precisión</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Equipos con especificaciones técnicas para investigación de alto nivel.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Reproducibilidad</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Protocolos estandarizados y resultados consistentes entre sesiones.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Multimodalidad</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Integración de estimulación, registro y análisis en una plataforma.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Soporte técnico</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Acompañamiento especializado durante todo el ciclo de investigación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-6 reveal-title">
            ¿Necesitas equipos para tu laboratorio?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8">
            Proveemos tecnología de punta para investigación en neurociencia. Contáctanos para
            conocer nuestras soluciones y recibir asesoría especializada.
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
