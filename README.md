# Neurotecnologías — Web Corporativa

Sitio web corporativo de **Neurotecnologías, Inc.**, empresa especializada en soluciones avanzadas para neurofisiología, neuromodulación y neurorehabilitación. Construido con Next.js, Tailwind CSS y shadcn/ui.

## Tecnologías

- **Framework:** Next.js 16.2.6 (Turbopack)
- **UI:** shadcn/ui + Tailwind CSS v4
- **Animaciones:** GSAP v3.15.0, Swiper v12.1.4, Lottie Web v5.13.0, tw-animate-css v1.4.0
- **Lenguaje:** TypeScript
- **Fuentes:** Inter (sans) — local, fallback `"Helvetica Neue", Arial, sans-serif`

## Cambios implementados

### De `prompt.txt` (diseño original)

| Requerimiento | Estado |
|---|---|
| Header con logo, navegación y CTA "Contactar" | Implementado |
| Hero con título, descripción y CTAs | Implementado |
| Estadísticas (20+ años, EMT/tDCS/TEC, USA/LatAm) | Implementado |
| Sección "Más de 20 años impulsando la neurotecnología" | Implementado |
| 6 áreas clínicas (grid con chips) | Implementado — Anestesiología eliminada posteriormente |
| Productos destacados (EMT, tDCS, TEC, Monitoreo, Neurorehabilitación, Investigación) | Implementado |
| Sección "Para quién es" (6 tipos de cliente) | Implementado |
| Contenido educativo / SEO | Implementado |
| FAQ con acordeón | Implementado |
| Formulario de contacto | Implementado |
| Footer completo | Implementado |
| Menú responsive con hamburguesa | Implementado |
| Animaciones GSAP (hero, stagger, scroll) | Implementado |
| Paleta azul/teal profesional | Implementado |
| Fuentes Inter + Manrope locales | Implementado |

### De `prompt_cambios.txt` (actualizaciones)

| Requerimiento | Estado | Archivos afectados |
|---|---|---|
| **Logo oficial** en header, footer y favicon | Implementado | `layout.tsx`, `footer.tsx`, `header.tsx` |
| **Carrusel de marcas/proveedores** (Neurosoft, SigmaStim, SigmaEstem) | Implementado | `brands-carousel.tsx` (nuevo), `page.tsx` |
| **Eliminar sección Anestesiología** | Implementado | `anestesiologia/page.tsx` (eliminado), `constants.ts`, `page.tsx`, `nosotros/page.tsx`, `chatbot.tsx` |
| **Actualizar referencias Mecta → SigmaStim/SigmaEstem** | No había referencias a Mecta en el código | — |
| **Eliminar enlaces de video antiguos** | No había enlaces de video en el código | — |
| **Conservar documentación y catálogos** | Verificado — no había PDFs en `/public` | — |
| **Filosofía de comunicación alineada con proveedores** | Implementado en carrusel de marcas y textos | — |

### Actualizaciones recientes

| Cambios | Estado | Archivos afectados |
|---|---|---|
| **Imágenes de productos** — reemplazadas URLs de Unsplash por assets locales `/neurotec/` | Implementado | `constants.ts`, `page.tsx`, `productos/page.tsx` |
| **Assets neurotec** — 13 imágenes reorganizadas de `public/1 -NEUROTEC/` a `public/neurotec/` | Implementado | `public/neurotec/*.webp` |
| **Logo SVG** — versión vectorial del logo con gradiente teal→cyan | Implementado | `public/logo.svg` |
| **AGENTS.md** — guía de instrucciones para agentes IA | Implementado | `AGENTS.md` |
| **Productos reestructurados por especialidad** — `/productos/` ahora muestra 5 categorías (Neurofisiología, Neuromodulación, Neurointensivismo, Neurocirugía, Neurorehabilitación) con imágenes del live site, cada una enlazando a su página de especialidad | Implementado | `constants.ts`, `productos/page.tsx`, `page.tsx` |
| **Imágenes descargadas del live site** — 6 imágenes de categoría + 24 imágenes de productos | Implementado | `public/neurotec/cat-*.png/jpg`, `public/neurotec/prod-*.png/jpg` |
| **Páginas de especialidad actualizadas** — cada una muestra sus productos con imágenes | Implementado | `neuromodulacion/page.tsx`, `neurofisiologia/page.tsx`, `neurointensivismo/page.tsx`, `neurocirugia/page.tsx`, `neurorehabilitacion/page.tsx` |
| **Tipografía unificada** — se eliminó Manrope, todo el sitio usa Inter con fallback estándar | Implementado | `layout.tsx`, `globals.css` |
| **Metadata SEO** — title, description, keywords, OpenGraph | Implementado | `layout.tsx` |
| **Nuevas secciones homepage** — Soluciones por especialidad, Aplicaciones clínicas, Congresos/formación | Implementado | `page.tsx`, `constants.ts` |
| **Página áreas clínicas** — cards con imágenes Unsplash + opacidad + gradiente | Implementado | `areas-clinicas/page.tsx` |
| **Reestructura homepage** — se alinearon secciones al orden definitivo (Hero, Logos, Confianza, Áreas, Productos, Aplicaciones, Marcas, Soporte, Congresos, FAQ, CTA) | Implementado | `page.tsx` |

> **Nota:** Las páginas de detalle de producto individual (`/estimulacion-magnetica-transcraneal/`, `/tdcs/`, `/terapia-electroconvulsiva/`, `/investigacion-neurociencia/`) existen pero ya no están enlazadas desde `/productos/`. La navegación ahora es categoría → producto dentro de la página de especialidad.

## Estructura del proyecto

```
src/
├── app/
│   ├── areas-clinicas/
│   ├── congresos/
│   ├── contacto/
│   ├── neurocirugia/         # 3 productos (monitor IO, neuronavegador, estimulador cortical)
│   ├── neurofisiologia/      # 16 productos (EEG, EMG, PE, PSG, etc.)
│   ├── neurointensivismo/    # 3 productos (monitor, Doppler, pupilometría)
│   ├── neuromodulacion/      # 6 productos (EMT, tDCS, TEC, TPS, etc.)
│   ├── neurorehabilitacion/  # 2 productos (marcha, EMT terapéutica)
│   ├── nosotros/
│   ├── productos/            # Mosaico de 5 especialidades
│   ├── estimulacion-magnetica-transcraneal/   # Rutas heredadas (no enlazadas)
│   ├── tdcs/
│   ├── terapia-electroconvulsiva/
│   ├── investigacion-neurociencia/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/          (shadcn components)
│   ├── brands-carousel.tsx
│   ├── chatbot.tsx
│   ├── footer.tsx
│   └── header.tsx
└── lib/
    └── constants.ts          # SITE, NAV_LINKS, CLINICAL_AREAS, PRODUCTS, FAQS, AUDIENCE_ITEMS, CLINICAL_APPLICATIONS, SPECIALTY_SOLUTIONS, SPECIALTIES
```

## Desarrollo

```bash
yarn dev     # servidor de desarrollo
yarn build   # build producción
yarn start   # servidor producción
yarn lint    # linting
```
