"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMobileOpen(false);
      document.body.style.overflow = "";
    });
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => firstLinkRef.current?.focus(), 250);
      return () => clearTimeout(t);
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (active: boolean) =>
    `relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
      active
        ? "text-[#078A82] bg-[#09B7AD]/10"
        : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
    }`;

  return (
    <>
      <div className="bg-white border-b border-[#E2E8F0] text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#64748B] min-w-0">
            <span className="relative w-2 h-2 shrink-0">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
              <span className="absolute inset-0 rounded-full bg-emerald-400" />
            </span>
            <span className="hidden md:inline truncate">Desde el {SITE.since} · Tecnología médica avanzada para neurofisiología, neuromodulación y neurorehabilitación</span>
            <span className="md:hidden text-xs">Desde {SITE.since}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#64748B] shrink-0">
            <a href={SITE.whatsapp} target="_blank" rel="noopener" className="hover:text-[#078A82] transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              <span className="sm:hidden">{SITE.phone}</span>
              <span className="hidden sm:inline">{SITE.phone}</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="hidden md:flex hover:text-[#078A82] transition-colors items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {SITE.email}
            </a>
          </div>
        </div>
      </div>


      <header
        id="header"
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md scrolled" : ""}`}
      >
        <nav className="bg-white border-b border-[#E2E8F0]" aria-label="Navegación principal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <Link
                href="/"
                className="flex items-center shrink-0 transition-transform duration-200 hover:scale-[1.02]"
                aria-label={`${SITE.name} - Inicio`}
              >
                <div className="relative h-12 sm:h-14 md:h-16 lg:h-20 w-auto shrink-0 aspect-[3.125/1]">
                  <Image
                    src="/LOGO VECTORIZADO.svg"
                    alt={SITE.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              <div className="hidden lg:flex items-center gap-1" role="menubar">
                {NAV_LINKS.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      aria-current={active ? "page" : undefined}
                      className={linkClass(active)}
                    >
                      {link.label}
                      <span
                        className={`absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#09B7AD] to-[#078A82] origin-left transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0"}`}
                      />
                    </Link>
                  );
                })}
              </div>

              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/contacto"
                  aria-current={pathname.startsWith("/contacto") ? "page" : undefined}
                  className="btn-gradient glow-on-hover text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-[#09B7AD]/25 inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Contactar
                </Link>
              </div>

              <button
                ref={triggerRef}
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-lg text-[#0F172A] hover:bg-[#09B7AD]/10 active:bg-[#09B7AD]/15 transition-colors"
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">{mobileOpen ? "Cerrar menú" : "Abrir menú"}</span>
                <span className="relative w-5 h-5">
                  <span
                    className={`absolute left-0 right-0 h-0.5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"}`}
                  />
                  <span
                    className={`absolute left-0 right-0 h-0.5 bg-current rounded-full transition-opacity duration-200 top-1/2 -translate-y-1/2 ${mobileOpen ? "opacity-0" : "opacity-100"}`}
                  />
                  <span
                    className={`absolute left-0 right-0 h-0.5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-1"}`}
                  />
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`mobile-panel-backdrop ${mobileOpen ? "open" : ""}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        id="mobile-menu"
        className={`mobile-panel ${mobileOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 h-16 border-b border-[#E2E8F0]">
          <Link href="/" onClick={closeMobile} aria-label={`${SITE.name} - Inicio`}>
            <div className="relative h-12 w-40">
              <Image
                src="/LOGO VECTORIZADO.svg"
                alt={SITE.name}
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>
          <button
            onClick={closeMobile}
            className="w-11 h-11 flex items-center justify-center rounded-lg text-[#0F172A] hover:bg-[#F1F5F9] active:bg-[#E2E8F0] transition-colors"
            aria-label="Cerrar menú"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 sm:px-6 py-6" aria-label="Navegación móvil">
          <ul className="space-y-1">
            {NAV_LINKS.map((link, i) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={closeMobile}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-center justify-between px-4 py-3.5 text-base font-semibold rounded-xl transition-colors ${
                      active
                        ? "text-[#078A82] bg-[#09B7AD]/10"
                        : "text-[#0F172A] hover:bg-[#F1F5F9]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg className="w-4 h-4 text-[#94A3B8] group-hover:text-[#078A82] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-6 border-t border-[#E2E8F0] space-y-3">
            <Link
              href="/contacto"
              onClick={closeMobile}
              aria-current={pathname.startsWith("/contacto") ? "page" : undefined}
              className="btn-gradient glow-on-hover text-white text-base font-semibold px-5 py-3.5 rounded-xl shadow-lg shadow-[#09B7AD]/25 inline-flex items-center justify-center gap-2 w-full"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Solicitar asesoría
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener"
              className="text-[#078A82] text-sm font-semibold inline-flex items-center justify-center gap-2 w-full py-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
              O escríbenos por WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
