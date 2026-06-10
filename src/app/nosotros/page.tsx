"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

const MILESTONES = [
  { year: "2003", title: "Fundación", desc: "Iniciamos operaciones enfocados en equipos de neurofisiología clínica en Estados Unidos y Latinoamérica." },
  { year: "2008", title: "Expansión en neuromodulación", desc: "Incorporamos soluciones de estimulación magnética transcraneal (EMT/TMS) y ampliamos nuestra cartera clínica." },
  { year: "2012", title: "Alianzas internacionales", desc: "Establecimos acuerdos estratégicos con fabricantes líderes en neurotecnología para distribución regional." },
  { year: "2016", title: "Nuevas áreas clínicas", desc: "Integramos neurorehabilitación, monitoreo intraoperatorio y soluciones para cuidados intensivos y neurointensivismo." },
  { year: "2020", title: "Presencia digital", desc: "Fortalecimos nuestra plataforma de asesoría remota y atención personalizada a distancia para toda la región." },
  { year: "2024", title: "Innovación continua", desc: "Seguimos incorporando tecnologías emergentes en neuromodulación, neurodiagnóstico e investigación clínica." },
];

const VALUES = [
  {
    title: "Misión",
    desc: "Acompañar a profesionales e instituciones de la salud en la incorporación de neurotecnología clínica avanzada, ofreciendo equipos médicos especializados, asesoría técnica y soporte continuo para mejorar la calidad del diagnóstico, tratamiento y rehabilitación neurológica.",
    icon: "target",
  },
  {
    title: "Visión",
    desc: "Ser el referente en distribución y asesoría de neurotecnología clínica en Estados Unidos y Latinoamérica, impulsando la adopción de soluciones innovadoras que transformen la práctica neurológica en beneficio de los pacientes.",
    icon: "eye",
  },
  {
    title: "Valores",
    desc: "Compromiso clínico, honestidad técnica, enfoque en el paciente, innovación constante y cercanía con cada profesional que confía en nosotros para llevar tecnología neurológica a su centro.",
    icon: "heart",
  },
];

const APPROACH = [
  {
    title: "Asesoría personalizada",
    desc: "No trabajamos con catálogos genéricos. Analizamos el perfil de cada centro para recomendar la tecnología más adecuada a su especialidad y necesidades clínicas.",
    icon: "user-check",
  },
  {
    title: "Visión clínica",
    desc: "Entendemos la práctica médica y las necesidades reales de neurólogos, psiquiatras, neurofisiólogos, rehabilitadores e investigadores clínicos.",
    icon: "brain",
  },
  {
    title: "Soporte continuo",
    desc: "Acompañamos cada etapa del proceso: selección, implementación, puesta en marcha y expansión tecnológica del centro.",
    icon: "headphones",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-7">
              <div className="badge animate-fade-in">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {SITE.name}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight reveal-title">
                Sobre nosotros
              </h1>

              <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-xl">
                <span className="text-gradient font-semibold">Más de 20 años de experiencia en neurotecnología clínica</span>
                . Desde {SITE.since}, acompañamos a profesionales e instituciones en la incorporación de equipos médicos avanzados para neurología, neurorehabilitación, neuromodulación e investigación clínica.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contacto" className="btn-gradient text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-[#09B7AD]/25 inline-flex items-center justify-center gap-2.5 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  Solicitar asesoría
                </Link>
                <Link href="/productos" className="bg-white text-[#0F172A] text-base font-semibold px-7 py-3.5 rounded-xl border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] shadow-sm inline-flex items-center justify-center gap-2.5 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                  Ver productos
                </Link>
              </div>
            </div>

            <div className="relative lg:mt-0 mt-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E2E8F0] bg-white">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                  <Image
                    src="/imagenes/aplicaciones-medicas.webp"
                    alt="Neurotecnología clínica avanzada"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute top-4 left-4 glass-card rounded-xl px-3.5 py-2.5 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <span className="text-xs font-semibold text-[#0F172A]">Desde 2003</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white border border-[#E2E8F0] backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <span className="text-[10px] font-semibold text-[#078A82] tracking-wider uppercase">Neurotecnología clínica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="badge mb-4">Nuestra identidad</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title">
              Propósito, visión y principios que guían nuestro <span className="text-gradient">compromiso clínico</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {VALUES.map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-8 card-hover border border-[#E2E8F0] flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-5 shadow-sm">
                  {item.icon === "target" && (
                    <svg className="w-7 h-7 text-[#078A82]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  )}
                  {item.icon === "eye" && (
                    <svg className="w-7 h-7 text-[#078A82]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  )}
                  {item.icon === "heart" && (
                    <svg className="w-7 h-7 text-[#078A82]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  )}
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE / HISTORY */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="badge mb-4">Trayectoria</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title">
              Más de dos décadas de <span className="text-gradient">innovación en neurotecnología</span>
            </h2>
            <p className="mt-4 text-lg text-[#475569]">Desde nuestra fundación en {SITE.since}, hemos evolucionado junto a la neurotecnología clínica.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#09B7AD]/30 via-[#078A82]/30 to-[#09B7AD]/30 -translate-x-1/2" />

            <div className="space-y-8 lg:space-y-12">
              {MILESTONES.map((item, i) => (
                <div key={item.year} className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-10 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className={`flex-1 w-full lg:w-1/2 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`glass-card rounded-2xl p-6 border border-[#E2E8F0] card-hover ${i % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}>
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#078A82] bg-white border border-[#E2E8F0] rounded-full px-3 py-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          {item.year}
                        </span>
                        <span className="text-lg font-heading font-bold text-[#0F172A]">{item.title}</span>
                      </div>
                      <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center justify-center absolute left-1/2 top-0 -translate-x-1/2 w-full h-full pointer-events-none">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#09B7AD] to-[#078A82] shadow-lg shadow-[#09B7AD]/35 ring-4 ring-white z-10" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-[#E2E8F0]">
              <svg className="w-5 h-5 text-[#078A82]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span className="text-sm font-semibold text-[#0F172A]">Seguimos evolucionando para ofrecer la mejor tecnología a tu centro</span>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM / APPROACH */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="badge mb-4">Nuestro enfoque</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold leading-tight mb-6 reveal-title">
                Una empresa con visión clínica, no solo un <span className="text-gradient">proveedor de equipos</span>
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed mb-8">
                En {SITE.name} no trabajamos con catálogos genéricos. Nos especializamos en neurotecnología clínica y entendemos las necesidades reales de neurólogos, psiquiatras, neurofisiólogos, rehabilitadores e investigadores.
              </p>

              <div className="space-y-4">
                {APPROACH.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 glass-card rounded-xl p-4 border border-[#E2E8F0]">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0">
                      {item.icon === "user-check" && (
                        <svg className="w-5 h-5 text-[#078A82]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      )}
                      {item.icon === "brain" && (
                        <svg className="w-5 h-5 text-[#078A82]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      )}
                      {item.icon === "headphones" && (
                        <svg className="w-5 h-5 text-[#078A82]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                      )}
                    </div>
                    <div>
                      <h3 className="text-sm font-heading font-bold">{item.title}</h3>
                      <p className="text-xs text-[#64748B] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E2E8F0] aspect-[4/3] sm:aspect-[16/10]">
                <Image
                  src="/imagenes/nosotros-equipo.webp"
                  alt="Equipo profesional de neurotecnología clínica"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-5 py-3 shadow-xl border border-[#E2E8F0] hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#078A82]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">Innovación constante</p>
                    <p className="text-[10px] text-[#64748B]">al servicio de la medicina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-6 reveal-title">
            ¿Listo para llevar neurotecnología clínica a tu centro?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8">
            Cuéntanos tu especialidad y necesidades. Te orientamos para encontrar la solución más adecuada para tu institución.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-gradient text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-xl inline-flex items-center justify-center gap-2.5 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              Solicitar asesoría
            </Link>
            <a href={SITE.whatsapp} target="_blank" rel="noopener" className="bg-white text-[#0F172A] text-base font-semibold px-8 py-3.5 rounded-xl border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] shadow-sm inline-flex items-center justify-center gap-2.5 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
