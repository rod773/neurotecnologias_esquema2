import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#09B7AD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 pb-24 lg:pb-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex flex-col">
                <span className="text-base font-heading font-bold text-white leading-tight">{SITE.name}</span>
                <span className="text-[10px] font-medium text-white/70 tracking-wider uppercase leading-tight">{SITE.tagline}</span>
              </div>
            </Link>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Equipos médicos para neurofisiología, neuromodulación, neurorehabilitación, neurocirugía y tecnología clínica.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/neurotecnologias" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/30 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/30 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              <a href="https://www.youtube.com/@neurotecnologias" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/30 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-heading font-bold text-black mb-4">Explorar</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-white/80 hover:text-black transition-colors">Inicio</Link></li>
              <li><Link href="/nosotros" className="text-sm text-white/80 hover:text-black transition-colors">Nosotros</Link></li>
              <li><Link href="/productos" className="text-sm text-white/80 hover:text-black transition-colors">Productos</Link></li>
              <li><Link href="/areas-clinicas" className="text-sm text-white/80 hover:text-black transition-colors">Publicaciones</Link></li>
              <li><Link href="/congresos" className="text-sm text-white/80 hover:text-black transition-colors">Congresos</Link></li>
              <li><Link href="/contacto" className="text-sm text-white/80 hover:text-black transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-heading font-bold text-black mb-4">Publicaciones</h4>
            <ul className="space-y-2.5">
              <li><Link href="/neuromodulacion" className="text-sm text-white/80 hover:text-black transition-colors">Neuromodulación</Link></li>
              <li><Link href="/neurofisiologia" className="text-sm text-white/80 hover:text-black transition-colors">Neurofisiología</Link></li>
              <li><Link href="/neurorehabilitacion" className="text-sm text-white/80 hover:text-black transition-colors">Neurorehabilitación</Link></li>
              <li><Link href="/neurocirugia" className="text-sm text-white/80 hover:text-black transition-colors">Neurocirugía</Link></li>
              <li><Link href="/investigacion-neurociencia" className="text-sm text-white/80 hover:text-black transition-colors">Investigación</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-heading font-bold text-black mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${SITE.email}`} className="text-sm text-white/80 hover:text-black transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-black shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.whatsapp} target="_blank" rel="noopener" className="text-sm text-white/80 hover:text-black transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  {SITE.phone}
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contacto" className="link-arrow text-sm font-semibold text-black hover:text-white/80 transition-colors">
                  Solicitar información
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/30 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/70">
            &copy; 2026 {SITE.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/70 text-center sm:text-right max-w-2xl leading-relaxed">
            La información presentada tiene fines informativos y comerciales. El uso de equipos médicos debe realizarse por profesionales autorizados y de acuerdo con la normativa aplicable.
          </p>
        </div>
      </div>
    </footer>
  );
}