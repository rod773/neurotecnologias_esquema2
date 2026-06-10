"use client";

import Link from "next/link";

export default function TECPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge animate-fade-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              TEC / ECT
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight mt-6 reveal-title">
              <span className="text-gradient">Equipos especializados para salud mental</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto mt-6">
              La Terapia Electroconvulsiva (TEC/ECT) moderna es un procedimiento seguro y altamente
              eficaz para el tratamiento de trastornos psiquiátricos severos. Equipos con monitoreo
              EEG integrado, estimulación personalizada y perfiles de seguridad avanzados.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-6 reveal-title">
              ¿Qué es la TEC/ECT moderna?
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed">
              La Terapia Electroconvulsiva consiste en la inducción controlada de una convulsión
              generalizada mediante estímulos eléctricos bajo anestesia general y relajación
              muscular. La TEC moderna utiliza equipos sofisticados con monitoreo EEG y EMG,
              estimulación ultrabrief y protocolos individualizados para maximizar la eficacia
              y minimizar los efectos cognitivos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <div className="glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center text-white font-heading font-extrabold text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">Estimulación personalizada</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Parámetros ajustables de intensidad, frecuencia y duración del pulso para adaptar
                la estimulación a las características de cada paciente.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="chip">Ultrabrief</span>
                <span className="chip">Personalizado</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center text-white font-heading font-extrabold text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">Monitoreo EEG integrado</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Registro continuo de la actividad cerebral durante la sesión para confirmar la
                convulsión terapéutica y evaluar su calidad.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="chip">EEG</span>
                <span className="chip">Monitoreo en tiempo real</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center text-white font-heading font-extrabold text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">Seguridad avanzada</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Sistemas de monitoreo de signos vitales, relajación muscular y protección
                de vía aérea para garantizar la seguridad del procedimiento.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="chip">Monitoreo múltiple</span>
                <span className="chip">Protocolos de seguridad</span>
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
              Beneficios de la TEC/ECT moderna
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Alta eficacia</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Respuesta superior al 80% en depresión severa y catatonía.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Respuesta rápida</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Mejoría clínica significativa desde las primeras sesiones.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Seguro y controlado</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Procedimiento realizado bajo anestesia con monitoreo continuo.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Evidencia sólida</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Respaldado por décadas de investigación y guías clínicas internacionales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-6 reveal-title">
            ¿Buscas equipos de TEC/ECT?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8">
            Ofrecemos equipos de terapia electroconvulsiva de última generación con monitoreo
            integrado. Contáctanos para recibir asesoría especializada.
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
