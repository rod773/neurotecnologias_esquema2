"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

const UPCOMING_CONFERENCES = [
  {
    id: 1,
    title: "Congreso Latinoamericano de Neuromodulación Clínica",
    date: "22–24 Oct 2026",
    location: "Buenos Aires, Argentina",
    description:
      "Evento académico centrado en avances en estimulación magnética transcraneal, tDCS y nuevas fronteras en neuromodulación para neurología, psiquiatría y rehabilitación.",
    gradient: "from-[#09B7AD] to-[#078A82]",
    topics: ["EMT / TMS", "tDCS", "Neuropsiquiatría"],
  },
  {
    id: 2,
    title: "International Symposium on Clinical Neurotechnology",
    date: "10–12 Mar 2026",
    location: "Miami, FL, Estados Unidos",
    description:
      "Simposio internacional que reúne a fabricantes, investigadores y clínicos para explorar el estado del arte en neurofisiología, monitoreo intraoperatorio y neurorehabilitación asistida.",
    gradient: "from-[#078A82] to-[#09B7AD]",
    topics: ["Monitoreo", "Neurofisiología", "Rehabilitación"],
  },
  {
    id: 3,
    title: "Jornadas Iberoamericanas de Neurotecnología Clínica",
    date: "15–17 Abr 2027",
    location: "Ciudad de México, México",
    description:
      "Encuentro interdisciplinario sobre tecnología aplicada al sistema nervioso: equipos para diagnóstico, neuromodulación, cuidados intensivos neurológicos e investigación clínica.",
    gradient: "from-[#09B7AD] to-[#14B8A6]",
    topics: ["Diagnóstico", "UCI neurológica", "Investigación"],
  },
];

const PAST_CONFERENCES = [
  {
    year: "2025",
    events: [
      "III Congreso Internacional de Neuroestimulación — Madrid, España",
      "Simposio de Actualización en Neurofisiología Clínica — São Paulo, Brasil",
      "Workshop de Tecnología para Neurorehabilitación — Bogotá, Colombia",
    ],
  },
  {
    year: "2024",
    events: [
      "Congreso Panamericano de Neurología — Cartagena, Colombia",
      "Feria Internacional de Tecnología Médica — Miami, FL, Estados Unidos",
      "Jornadas de Neurointensivismo y Monitoreo — Santiago, Chile",
    ],
  },
  {
    year: "2023",
    events: [
      "Congreso Mundial de Neuromodulación — Barcelona, España",
      "Encuentro Latinoamericano de Neurotecnología — Lima, Perú",
      "Simposio de Estimulación Cerebral No Invasiva — Ciudad de Panamá, Panamá",
    ],
  },
];

export default function CongresosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-7">
              <div className="badge animate-fade-in">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Congresos
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight reveal-title">
                Agenda científica y <span className="text-gradient">congresos</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-xl">
                {SITE.name} participa activamente en congresos, simposios y encuentros académicos de neurotecnología clínica en Estados Unidos, Latinoamérica y Europa. Conoce nuestra agenda y los eventos donde nos puedes encontrar.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contacto" className="btn-gradient text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-[#09B7AD]/25 inline-flex items-center justify-center gap-2.5 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  Solicitar información
                </Link>
                <a href={SITE.whatsapp} target="_blank" rel="noopener" className="bg-white text-[#0F172A] text-base font-semibold px-7 py-3.5 rounded-xl border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] shadow-sm inline-flex items-center justify-center gap-2.5 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Contactar por WhatsApp
                </a>
              </div>
            </div>

            <div className="relative lg:mt-0 mt-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E2E8F0] bg-white">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                  <Image
                    src="/imagenes/congresos.webp"
                    alt="Conferencia y congreso de neurotecnología clínica"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute top-4 left-4 glass-card rounded-xl px-3.5 py-2.5 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="text-xs font-semibold text-[#0F172A]">Agenda 2026–2027</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white border border-[#E2E8F0] backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <span className="text-[10px] font-semibold text-[#078A82] tracking-wider uppercase">Eventos científicos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING CONFERENCES */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="badge mb-4">Próximos eventos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title">
              Congresos y simposios donde <span className="text-gradient">participamos</span>
            </h2>
            <p className="mt-4 text-lg text-[#475569]">
              Te invitamos a conocer los eventos científicos donde estaremos presentes con nuestros equipos y asesoría especializada.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {UPCOMING_CONFERENCES.map((conf) => (
              <div key={conf.id} className="glass-card rounded-2xl overflow-hidden border border-[#E2E8F0] card-hover flex flex-col">
                <div className={`h-2 bg-gradient-to-r ${conf.gradient}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#078A82] bg-white border border-[#E2E8F0] rounded-full px-3 py-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {conf.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#64748B]">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {conf.location}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-3 leading-snug">{conf.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed mb-4 flex-1">{conf.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {conf.topics.map((topic) => (
                      <span key={topic} className="chip">{topic}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="badge mb-4">Eventos anteriores</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title">
              Trayectoria de <span className="text-gradient">participación científica</span>
            </h2>
            <p className="mt-4 text-lg text-[#475569]">
              Hemos estado presentes en los congresos y encuentros más relevantes de neurotecnología clínica a nivel internacional.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PAST_CONFERENCES.map((item) => (
              <div key={item.year} className="glass-card rounded-2xl p-6 border border-[#E2E8F0] card-hover">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-4">
                  <span className="text-2xl font-heading font-extrabold text-gradient">{item.year}</span>
                </div>
                <ul className="space-y-3">
                  {item.events.map((event) => (
                    <li key={event} className="flex items-start gap-2.5 text-sm text-[#475569] leading-relaxed">
                      <svg className="w-4 h-4 text-[#078A82] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - INVITACIÓN */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-6 reveal-title">
            ¿Organizas un evento y quieres contar con nosotros?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8">
            Si estás organizando un congreso, simposio o jornada académica y deseas que {SITE.name} participe como expositor, patrocinador o colaborador, contáctanos y coordinamos tu invitación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-gradient text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-xl inline-flex items-center justify-center gap-2.5 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              Invitarnos a tu evento
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
