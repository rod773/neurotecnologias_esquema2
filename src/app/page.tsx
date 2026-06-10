"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck, MessageSquare, ListChecks, Zap, BarChart3, HeartPulse,
  ArrowRight, Check, Calendar, Globe, Users, FlaskConical, TrendingUp, Clock,
  CalendarDays, Brain, Stethoscope,
} from "lucide-react";
import { CLINICAL_AREAS, PRODUCTS, FAQS, SITE, CLINICAL_APPLICATIONS } from "@/lib/constants";
import BrandsCarousel from "@/components/brands-carousel";
import LogoSlider from "@/components/logo-slider";
import NebulaBackground from "@/components/nebula-background";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomePage() {
  return (
    <>
      {/* SKIP TO CONTENT */}
      <a href="#inicio" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#09B7AD] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Saltar al contenido
      </a>

      {/* HERO SEO */}
      <section id="inicio" className="relative overflow-hidden" aria-label="Inicio">
        <NebulaBackground />
        <div className="absolute inset-0 bg-white/50 z-[1]" />
        <div className="hero-bg-orb hero-bg-orb-1" style={{ zIndex: 2 }} aria-hidden="true" />
        <div className="hero-bg-orb hero-bg-orb-2" style={{ zIndex: 2 }} aria-hidden="true" />

        <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-7">
              <div className="badge">
                <ShieldCheck className="w-4 h-4" />
                Tecnología clínica desde {SITE.since}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight reveal-title">
                Soluciones avanzadas para<br />
                <span className="text-gradient">neurofisiología y neurorehabilitación</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-xl">
                Equipos médicos especializados para hospitales, clínicas e instituciones que buscan incorporar tecnología avanzada en neuromodulación, neurofisiología, neurorehabilitación, neurocirugía y tecnología clínica.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contacto" className="btn-gradient text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-[#09B7AD]/25 inline-flex items-center justify-center gap-2.5 transition-all">
                  <MessageSquare className="w-4 h-4" />
                  Solicitar asesoría
                </Link>
                <Link href="/productos" className="bg-white text-[#0F172A] text-base font-semibold px-7 py-3.5 rounded-xl border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] shadow-sm inline-flex items-center justify-center gap-2.5 transition-all">
                  <ListChecks className="w-4 h-4" />
                  Ver productos
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {[
                  { value: "20+", label: "Años de experiencia" },
                  { value: "EMT", label: "tDCS / TEC" },
                  { value: "Sol.", label: "Clínicas y hospitales" },
                  { value: "USA", label: "LatAm" },
                ].map((item) => (
                  <div key={item.value} className="glass-card rounded-xl px-4 py-3.5">
                    <div className="font-heading text-2xl font-extrabold bg-gradient-to-r from-[#09B7AD] to-[#078A82] bg-clip-text text-transparent">{item.value}</div>
                    <div className="text-xs text-[#64748B] font-medium mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

              <div className="relative lg:mt-0 mt-8">
                <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white animate-float-delayed animate-glow-border">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="/imagenes/Neurotecnoligias_1.webp"
                      alt="Tecnología médica avanzada para neurofisiología y neuromodulación"
                      width={1122}
                      height={1402}
                      className="w-full h-auto"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                <div className="absolute top-4 left-4 glass-card rounded-xl px-3.5 py-2.5 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-[#0F172A]">Neuromodulación</span>
                  </div>
                </div>
                <div className="absolute top-16 right-4 glass-card rounded-xl px-3.5 py-2.5 shadow-lg animate-float-delayed">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-400 flex items-center justify-center">
                      <BarChart3 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-[#0F172A]">Monitoreo</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 glass-card rounded-xl px-3.5 py-2.5 shadow-lg" style={{ animation: "float 7s ease-in-out 1s infinite" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                      <HeartPulse className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-[#0F172A]">Neurorehabilitación</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white border border-[#E2E8F0] backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <span className="text-[10px] font-semibold text-[#078A82] tracking-wider uppercase">EMT · tDCS · TEC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS DE PROVEEDORES */}
      <LogoSlider />

      {/* BLOQUE DE CONFIANZA / EXPERIENCIA */}
      <section id="experiencia" className="py-16 sm:py-20 lg:py-24" aria-label="Experiencia clínica y tecnológica">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title">
              Más de 20 años impulsando la <span className="text-gradient">neurotecnología clínica</span>
            </h2>
            <p className="mt-6 text-lg text-[#475569] leading-relaxed">
              Desde {SITE.since}, {SITE.name} acompaña a profesionales de la salud en la incorporación de equipos médicos avanzados para diagnóstico, tratamiento, rehabilitación e investigación neurológica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { num: "01", title: "Equipos especializados", desc: "Soluciones para neurofisiología, neuromodulación, neurorehabilitación, neurointensivismo y tecnología clínica avanzada." },
              { num: "02", title: "Soporte profesional", desc: "Acompañamiento técnico y orientación especializada para clínicas, hospitales y profesionales de la salud." },
              { num: "03", title: "Visión internacional", desc: "Atención para instituciones médicas, distribuidores, especialistas e investigadores que buscan tecnología fiable." },
            ].map((card, i) => (
              <article key={card.num} className={`glass-card rounded-2xl p-8 card-hover border border-[#E2E8F0] reveal reveal-delay-${i + 1}`}>
                <div className="icon-box w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-5">
                  <span className="text-2xl font-heading font-extrabold text-[#078A82]">{card.num}</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{card.title}</h3>
                <p className="text-[#475569] leading-relaxed text-sm">{card.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-[#64748B] max-w-2xl mx-auto">
              <strong className="text-[#0F172A]">{SITE.name}</strong> no es una tienda genérica de equipos médicos: es una empresa enfocada en soluciones avanzadas para neurología, neurorehabilitación, neurofisiología y salud cerebral.
            </p>
          </div>
        </div>
      </section>

      {/* CIFRAS CLAVE */}
      <section
        id="cifras"
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
        aria-label="Cifras clave"
      >
        <div className="relative w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {[
              {
                value: "20+",
                label: "Años de experiencia",
                sublabel: "Desde 2003",
                Icon: CalendarDays,
              },
              {
                value: "EMT",
                label: "tDCS / TEC",
                sublabel: "Tecnologías clínicas",
                Icon: Brain,
              },
              {
                value: "Sol.",
                label: "Clínicas y hospitales",
                sublabel: "Atención profesional",
                Icon: Stethoscope,
              },
              {
                value: "USA",
                label: "LatAm",
                sublabel: "Cobertura regional",
                Icon: Globe,
              },
            ].map((item, i) => (
              <button
                key={item.value}
                type="button"
                className={`group glass-card rounded-2xl px-5 py-6 sm:px-6 sm:py-7 text-center reveal reveal-delay-${(i % 3) + 1} hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-[#E2E8F0]`}
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <item.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#078A82] group-hover:text-[#056B65] transition-colors shrink-0" />
                  <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-br from-[#09B7AD] to-[#056B65] bg-clip-text text-transparent">
                    {item.value}
                  </div>
                </div>
                <div className="mt-2 text-sm font-semibold text-[#0F172A]">{item.label}</div>
                <div className="text-xs text-[#64748B] mt-0.5">{item.sublabel}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />
      {/* ÁREAS CLÍNICAS */}
      <section id="areas-clinicas" className="py-16 sm:py-20 lg:py-24" aria-label="Publicaciones">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mx-auto text-center mb-14 reveal">
            <span className="badge mb-4">Especialidades clínicas</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title">
              Soluciones clínicas para cada área de la <span className="text-gradient">neurotecnología</span>
            </h2>
            <p className="mt-4 text-lg text-[#475569]">Equipos médicos especializados para diagnóstico, tratamiento, rehabilitación e investigación.</p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {CLINICAL_AREAS.map((area, i) => (
              <div key={area.id} className={`glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] group reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center text-white font-heading font-extrabold text-sm`}>
                    {String(area.id).padStart(2, "0")}
                  </div>
                  <svg className="w-5 h-5 text-[#078A82] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{area.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {area.chips.map((chip) => (
                    <span key={chip} className="chip">{chip}</span>
                  ))}
                </div>
                <Link href={`/${area.slug}`} className="link-arrow text-sm font-semibold text-[#078A82] hover:text-[#056B65] transition-colors">
                  Ver solución
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section id="productos" className="py-16 sm:py-20 lg:py-24" aria-label="Productos destacados">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mx-auto text-center mb-14 reveal">
            <span className="badge mb-4">Productos destacados</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title">
              Equipos médicos especializados para <span className="text-gradient">neurotecnología clínica</span>
            </h2>
            <p className="mt-4 text-lg text-[#475569]">Tecnología avanzada para aplicaciones clínicas, terapéuticas, diagnósticas y de investigación.</p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PRODUCTS.map((product, i) => (
              <div key={product.slug} className={`glass-card rounded-2xl overflow-hidden border border-[#E2E8F0] card-hover reveal reveal-delay-${(i % 3) + 1}`}>
                <Link href={`/${product.slug}`} className={`bg-gradient-to-br ${product.gradient} block`}>
                  <Image src={product.img} alt={product.title} width={800} height={600} className={`w-full h-96 object-cover ${product.imgPosition ?? ""}`} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {product.chips.map((chip) => (
                      <span key={chip} className="chip text-[10px]">{chip}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-4">{product.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-[#64748B]">
                        <Check className="w-3.5 h-3.5 text-teal-500 mt-0.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
              <Link href={`/${product.slug}`} className="link-arrow w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#078A82] border border-[#E2E8F0] hover:bg-[#F8FAFC] px-4 py-2.5 rounded-xl transition-colors">
                {product.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APLICACIONES MÉDICAS */}
      <section id="aplicaciones" className="py-16 sm:py-20 lg:py-24" aria-label="Aplicaciones médicas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0] aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
                <Image src="/imagenes/cerebro_vertical.webp" alt="Aplicaciones médicas de neurotecnología" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-5 py-3 shadow-lg border border-[#E2E8F0] hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-[#078A82]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">Uso profesional</p>
                    <p className="text-[10px] text-[#64748B]">Aplicaciones clínicas especializadas</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="badge mb-4">Aplicaciones médicas</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold leading-tight mb-6 reveal-title">
                Tecnología médica para diagnóstico, tratamiento y <span className="text-gradient">rehabilitación neurológica</span>
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed mb-8">
                Las soluciones de neurotecnología pueden utilizarse en múltiples contextos profesionales: desde la evaluación neurofisiológica hasta la neuromodulación, la rehabilitación funcional, la investigación y el monitoreo de pacientes en entornos clínicos especializados.
              </p>

              <div className="space-y-3">
                {CLINICAL_APPLICATIONS.map((app) => (
                  <div key={app.id} className="flex items-start gap-3 glass-card rounded-xl p-4 border border-[#E2E8F0]">
                    <span className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] font-heading font-extrabold text-sm shrink-0">
                      {String(app.id).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-sm font-heading font-bold">{app.title}</h3>
                        <span className="chip text-[10px] shrink-0">{app.chip}</span>
                      </div>
                      <p className="text-xs text-[#64748B] leading-relaxed">{app.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS Y PROVEEDORES */}
      <BrandsCarousel />

      <div className="section-divider" aria-hidden="true" />
      {/* PARA QUIÉN ES */}
      <section id="audiencia" className="py-16 sm:py-20 lg:py-24" aria-label="Para quién es">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-14 reveal">
            <span className="badge mb-4">Para quién es</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title">
              Tecnología diseñada para <span className="text-gradient">centros médicos, especialistas e instituciones de salud</span>
            </h2>
            <p className="mt-4 text-lg text-[#475569] leading-relaxed">
              Nuestras soluciones están orientadas a profesionales y organizaciones que buscan incorporar equipos médicos avanzados para diagnóstico, tratamiento, rehabilitación, monitoreo e investigación en el área neurológica.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Clínicas neurológicas", desc: "Equipos avanzados para diagnóstico, tratamiento, monitoreo y seguimiento de pacientes con condiciones neurológicas." },
              { num: "02", title: "Hospitales e instituciones", desc: "Soluciones para integración en unidades especializadas, quirófanos, UCI, áreas de neurofisiología y servicios clínicos." },
              { num: "03", title: "Centros de neurorehabilitación", desc: "Tecnología enfocada en recuperación funcional, plasticidad cerebral, estimulación terapéutica y rehabilitación neurológica." },
              { num: "04", title: "Psiquiatras y salud mental", desc: "Equipos para neuromodulación, estimulación cerebral y terapia electroconvulsiva bajo criterio médico profesional." },
              { num: "05", title: "Investigadores y universidades", desc: "Herramientas para investigación en neurociencia, estimulación cerebral y tecnología aplicada al cerebro." },
              { num: "06", title: "Distribuidores médicos", desc: "Posibilidad de colaboración comercial, representación tecnológica y expansión regional en soluciones médicas especializadas." },
            ].map((card, i) => (
              <article key={card.num} className={`glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] flex gap-4 reveal reveal-delay-${(i % 3) + 1}`}>
                <span className="icon-box shrink-0 w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#078A82] font-heading font-extrabold text-sm">
                  {card.num}
                </span>
                <div>
                  <h3 className="font-heading font-bold mb-1">{card.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ¿QUÉ ES LA NEUROTECNOLOGÍA CLÍNICA? */}
      <section id="neurotecnologia-clinica" className="py-16 sm:py-20 lg:py-24" aria-label="Qué es la neurotecnología clínica">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-14 reveal">
            <span className="badge mb-4">Neurotecnología clínica</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title">
              ¿Qué es la <span className="text-gradient">neurotecnología clínica</span> y cómo transforma la medicina moderna?
            </h2>
            <p className="mt-4 text-lg text-[#475569] leading-relaxed">
              La neurotecnología clínica integra dispositivos médicos, sistemas de estimulación, monitoreo y análisis que permiten estudiar, acompañar o modular la actividad del sistema nervioso en contextos profesionales.
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="glass-card rounded-2xl p-8 lg:p-10 border border-[#E2E8F0]">
              <h3 className="text-2xl font-heading font-bold mb-4">Una nueva generación de tecnología médica neurológica</h3>
              <p className="text-[#475569] leading-relaxed mb-4">
                Su aplicación se encuentra en áreas como la neurología, psiquiatría, neurorehabilitación, neurocirugía, investigación clínica y cuidados intensivos.
              </p>
              <p className="text-[#475569] leading-relaxed">
                En Neurotecnologías trabajamos con soluciones orientadas a centros médicos, hospitales, clínicas especializadas, investigadores y profesionales que buscan incorporar tecnología avanzada en sus protocolos clínicos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { num: "01", title: "Diagnóstico y evaluación", desc: "Equipos que evalúan funciones neurológicas, actividad cerebral, conducción nerviosa o respuestas neurofisiológicas." },
                { num: "02", title: "Tratamiento y neuromodulación", desc: "Tecnologías como EMT, tDCS o TEC para intervenir en contextos clínicos especializados." },
                { num: "03", title: "Rehabilitación neurológica", desc: "Herramientas para estimular, medir y acompañar procesos de recuperación funcional." },
                { num: "04", title: "Investigación en neurociencia", desc: "Equipos para universidades y centros dedicados al estudio del cerebro y la conducta." },
              ].map((card) => (
                <article key={card.num} className="glass-card rounded-2xl p-5 card-hover border border-[#E2E8F0]">
                  <span className="icon-box inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] text-[#078A82] font-heading font-extrabold text-xs mb-3">
                    {card.num}
                  </span>
                  <h4 className="font-heading font-bold text-sm mb-1.5">{card.title}</h4>
                  <p className="text-xs text-[#475569] leading-relaxed">{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section id="por-que-neurotecnologias" className="py-16 sm:py-20 lg:py-24" aria-label="Por qué elegir Neurotecnologías">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mx-auto text-center mb-14 reveal">
            <span className="badge mb-4">Por qué elegirnos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title">
              Una empresa enfocada en <span className="text-gradient">neurotecnología clínica</span>
            </h2>
            <p className="mt-4 text-lg text-[#475569]">
              No somos una tienda genérica de equipos médicos. Nuestro enfoque está en soluciones avanzadas aplicadas al sistema nervioso.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Especialización real", desc: "Enfoque en neurología, neurofisiología, neuromodulación, neurorehabilitación y salud cerebral." },
              { num: "02", title: "Experiencia desde 2003", desc: "Más de dos décadas acompañando a profesionales, instituciones y distribuidores." },
              { num: "03", title: "Visión clínica y técnica", desc: "Entendemos la tecnología y las necesidades reales de implementación." },
              { num: "04", title: "Asesoría personalizada", desc: "Cada centro tiene una realidad distinta. Identificamos la solución ideal." },
              { num: "05", title: "Enfoque en innovación", desc: "Tecnologías que forman parte del presente y futuro de la medicina neurológica." },
            ].map((card, i) => (
              <article key={card.num} className={`glass-card rounded-2xl p-6 card-hover border border-[#E2E8F0] text-center reveal reveal-delay-${(i % 3) + 1}`}>
                <span className="icon-box inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] text-[#078A82] font-heading font-extrabold text-sm mb-4">
                  {card.num}
                </span>
                <h3 className="font-heading font-bold mb-2 text-sm">{card.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOPORTE Y ASESORÍA */}
      <section id="proceso" className="py-16 sm:py-20 lg:py-24" aria-label="Soporte y asesoría">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <span className="badge mb-4">Soporte y asesoría</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title">
              Asesoría técnica para elegir el <span className="text-gradient">equipo adecuado</span>
            </h2>
            <p className="mt-4 text-lg text-[#475569]">Ayudamos a clínicas, hospitales e instituciones a identificar soluciones médicas según especialidad, aplicación clínica, presupuesto y objetivos de crecimiento.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {[
              { num: "01", title: "Entendemos tu especialidad", desc: "Analizamos el tipo de centro, especialidad médica y necesidades clínicas." },
              { num: "02", title: "Identificamos la aplicación clínica", desc: "Evaluamos qué tipo de equipo se adapta mejor a tu área clínica." },
              { num: "03", title: "Recomendamos la tecnología adecuada", desc: "Recibes información clara sobre equipos, aplicaciones y posibilidades." },
              { num: "04", title: "Acompañamos la implementación", desc: "Orientación durante la selección, incorporación y expansión tecnológica." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="icon-box w-16 h-16 rounded-2xl bg-gradient-to-br from-[#09B7AD] to-[#078A82] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#09B7AD]/25">
                  <span className="text-2xl font-heading font-extrabold text-white">{step.num}</span>
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contacto" className="btn-gradient text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-[#09B7AD]/25 inline-flex items-center justify-center gap-2.5 transition-all">
              <MessageSquare className="w-4 h-4" />
              Solicitar asesoría
            </Link>
          </div>
        </div>
      </section>

      {/* CONGRESOS / FORMACIÓN */}
      <section id="congresos" className="py-16 sm:py-20 lg:py-24" aria-label="Congresos y formación">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <span className="badge mb-4">Congresos y formación</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title">
              Congresos, formación y <span className="text-gradient">actualización profesional</span>
            </h2>
            <p className="mt-4 text-lg text-[#475569]">Participamos en congresos, jornadas y eventos de neurotecnología para mantenerte al día con los avances del sector.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Congresos internacionales",
                desc: "Asistimos a los principales congresos de neurología, psiquiatría, neurofisiología y neurorehabilitación en USA y Latinoamérica.",
                Icon: Globe,
              },
              {
                title: "Capacitación in situ",
                desc: "Ofrecemos formación práctica para el personal de tu centro sobre el uso, calibración y mantenimiento de los equipos.",
                Icon: Users,
              },
              {
                title: "Webinars y jornadas técnicas",
                desc: "Organizamos sesiones online con especialistas para abordar aplicaciones clínicas, innovaciones y casos de éxito.",
                Icon: TrendingUp,
              },
              {
                title: "Actualización tecnológica",
                desc: "Te informamos sobre nuevas versiones, accesorios y avances en equipos de neuromodulación, neurofisiología y rehabilitación.",
                Icon: FlaskConical,
              },
              {
                title: "Soporte post-venta",
                desc: "Acompañamiento continuo después de la incorporación del equipo, incluyendo soporte técnico y resolución de dudas.",
                Icon: ShieldCheck,
              },
              {
                title: "Red de especialistas",
                desc: "Conexión con una red de profesionales e instituciones que comparten experiencia en neurotecnología clínica aplicada.",
                Icon: Clock,
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 border border-[#E2E8F0] card-hover text-center">
                <div className="icon-box w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center mx-auto mb-4">
                  <item.Icon className="w-6 h-6 text-[#078A82]" />
                </div>
                <h3 className="text-base font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/congresos" className="bg-white text-[#0F172A] text-base font-semibold px-8 py-3.5 rounded-xl border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] shadow-sm inline-flex items-center justify-center gap-2.5 transition-all">
              <Calendar className="w-4 h-4" />
              Ver próximos eventos
            </Link>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section id="faq" className="py-16 sm:py-20 lg:py-24" aria-label="Preguntas frecuentes">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="badge mb-4">FAQ</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title">
              Preguntas frecuentes sobre <span className="text-gradient">equipos de neurotecnología</span>
            </h2>
          </div>

          <Accordion className="w-full space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl border border-[#E2E8F0] px-6">
                <AccordionTrigger className="text-base font-heading font-semibold hover:no-underline py-4 [&>span]:bg-gradient-to-r [&>span]:from-[#0B0F19] [&>span]:via-[#078A82] [&>span]:to-[#09B7AD] [&>span]:bg-clip-text [&>span]:text-transparent">
                  <span>{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#475569] leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />
      {/* CTA FINAL */}
      <section id="contacto" className="py-16 sm:py-20 lg:py-24" aria-label="Contacto">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight reveal-title mb-6">
            ¿Buscas una solución de neurotecnología para tu centro?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8">
            Podemos ayudarte a identificar el equipo médico más adecuado según tu especialidad, aplicación clínica y necesidades técnicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-gradient text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-xl inline-flex items-center justify-center gap-2.5 transition-all">
              <MessageSquare className="w-4 h-4" />
              Solicitar asesoría
            </Link>
            <a href={SITE.whatsapp} target="_blank" rel="noopener" className="bg-white text-[#078A82] text-base font-semibold px-8 py-3.5 rounded-xl border border-[#E2E8F0] hover:bg-[#F8FAFC] inline-flex items-center justify-center gap-2.5 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
