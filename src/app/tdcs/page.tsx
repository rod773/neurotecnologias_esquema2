"use client";

import Link from "next/link";

export default function TDCSPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge animate-fade-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              tDCS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight mt-6 reveal-title">
              <span className="text-gradient">Estimulación cerebral de baja intensidad</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto mt-6">
              La Estimulación Transcraneal por Corriente Directa (tDCS) es una técnica no invasiva
              que aplica corriente eléctrica de baja intensidad para modular la excitabilidad
              cortical. Ampliamente utilizada en investigación y con creciente aplicación clínica
              en neurorehabilitación y psiquiatría.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-6 reveal-title">
              ¿Cómo funciona la tDCS?
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed">
              La tDCS utiliza electrodos colocados sobre el cuero cabelludo para aplicar una
              corriente constante de baja intensidad (1-2 mA) que modula el potencial de membrana
              de las neuronas. La estimulación anódica aumenta la excitabilidad cortical, mientras
              que la catódica la disminuye, permitiendo intervenciones específicas sobre regiones
              cerebrales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <div className="glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center text-white font-heading font-extrabold text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">Estimulación anódica</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Aumenta la excitabilidad cortical. Utilizada para potenciar el aprendizaje, la
                rehabilitación motora y el tratamiento de la depresión.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="chip">Excitación</span>
                <span className="chip">Potenciación</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center text-white font-heading font-extrabold text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">Estimulación catódica</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Disminuye la excitabilidad cortical. Indicada para reducir la hiperactividad en
                condiciones como ansiedad, dolor crónico y tinnitus.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="chip">Inhibición</span>
                <span className="chip">Modulación</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center text-white font-heading font-extrabold text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">tDCS de alta definición</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Sistemas con múltiples electrodos de pequeño tamaño para una focalización más
                precisa de la estimulación en regiones cerebrales específicas.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="chip">Alta definición</span>
                <span className="chip">Focalización</span>
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
              Ventajas de la tDCS
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Segura y no invasiva</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Mínimos efectos secundarios, perfil de seguridad excelente.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Portátil y accesible</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Equipos compactos que pueden utilizarse en diversos entornos.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Versátil</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Aplicaciones en rehabilitación, psiquiatría e investigación.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-base font-heading font-bold mb-1.5">Costo eficiente</h3>
              <p className="text-sm text-[#475569] leading-relaxed">Tecnología accesible en comparación con otras técnicas de neuromodulación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-6 reveal-title">
            ¿Interesado en equipos de tDCS?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8">
            Proveemos sistemas de estimulación por corriente directa para investigación y uso
            clínico. Contáctanos para conocer nuestras soluciones y recibir asesoría
            especializada.
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
