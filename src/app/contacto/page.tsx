"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge mb-4">Contacto</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight mb-6 reveal-title">
              Hablemos de tu <span className="text-gradient">proyecto clínico</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto">
              Cuéntanos sobre tu centro, especialidad o necesidad técnica. Te orientamos para encontrar la solución de neurotecnología más adecuada.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* LEFT - Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold reveal-title">
                Información de <span className="text-gradient">contacto</span>
              </h2>
              <p className="text-[#475569] leading-relaxed">
                Estamos para atenderte. Puedes escribirnos, llamarnos o enviarnos un mensaje por WhatsApp. Te responderemos a la brevedad.
              </p>

              <div className="glass-card rounded-2xl p-6 border border-[#E2E8F0]">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#078A82]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Email</p>
                      <a href={`mailto:${SITE.email}`} className="text-sm font-semibold text-[#0F172A] hover:text-[#078A82] transition-colors">{SITE.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#078A82]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Teléfono</p>
                      <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-sm font-semibold text-[#0F172A] hover:text-[#078A82] transition-colors">{SITE.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">WhatsApp</p>
                      <a href={SITE.whatsapp} target="_blank" rel="noopener" className="text-sm font-semibold text-[#0F172A] hover:text-[#078A82] transition-colors">+1 305 320 4838</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Oficina</p>
                      <p className="text-sm font-semibold text-[#0F172A]">Miami, FL · Atención USA y Latinoamérica</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-[#E2E8F0] bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-heading font-bold text-[#0F172A]">Respuesta rápida</p>
                    <p className="text-xs text-[#64748B] mt-1">Por lo general respondemos en menos de 24 horas hábiles.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Contact form */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-8 sm:p-10 border border-[#E2E8F0]">
                <h3 className="text-xl font-heading font-bold mb-1">Envíanos un mensaje</h3>
                <p className="text-sm text-[#64748B] mb-8">Completa el formulario y te contactaremos a la brevedad.</p>

                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-[#0F172A] mb-1.5">Nombre completo</label>
                      <Input id="nombre" placeholder="Tu nombre" className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#0F172A] mb-1.5">Correo electrónico</label>
                      <Input id="email" type="email" placeholder="tu@correo.com" className="w-full" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-[#0F172A] mb-1.5">Teléfono</label>
                      <Input id="telefono" type="tel" placeholder="+1 305 320 4838" className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="centro" className="block text-sm font-medium text-[#0F172A] mb-1.5">Centro / Institución</label>
                      <Input id="centro" placeholder="Nombre de tu centro" className="w-full" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-[#0F172A] mb-1.5">Mensaje</label>
                    <Textarea id="mensaje" placeholder="Cuéntanos sobre tu centro, especialidad, necesidades clínicas o el equipo que te interesa..." className="w-full min-h-[140px]" />
                  </div>

                  <button type="submit" className="btn-gradient text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-[#09B7AD]/25 inline-flex items-center justify-center gap-2.5 transition-all w-full sm:w-auto">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-6 reveal-title">
            ¿Prefieres contactarnos por WhatsApp?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8">
            Respondemos rápido y de forma directa. Escríbenos para recibir información sobre equipos, cotizaciones o asesoría personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SITE.whatsapp} target="_blank" rel="noopener" className="btn-gradient text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-xl inline-flex items-center justify-center gap-2.5 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Contactar por WhatsApp
            </a>
            <Link href="mailto:info@neurotecnologias.com" className="bg-white text-[#0F172A] text-base font-semibold px-8 py-3.5 rounded-xl border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] shadow-sm inline-flex items-center justify-center gap-2.5 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Enviar email
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
