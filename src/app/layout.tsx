import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import ScrollReveal from "@/components/scroll-reveal";
import ScrollToTop from "@/components/scroll-to-top";
import WhatsAppFab from "@/components/whatsapp-fab";
import { LanguageProvider } from "@/lib/language-context";

const inter = localFont({
  variable: "--font-sans",
  src: [
    { path: "../fonts/Inter-Regular.ttf", weight: "400" },
    { path: "../fonts/Inter-Medium.ttf", weight: "500" },
    { path: "../fonts/Inter-SemiBold.ttf", weight: "600" },
    { path: "../fonts/Inter-Bold.ttf", weight: "700" },
  ],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Neurotecnologías | Equipos médicos para neurofisiología y neurorehabilitación",
  description:
    "Neurotecnologías ofrece equipos médicos avanzados para neurofisiología, neuromodulación, neurorehabilitación, neurocirugía y tecnología clínica para hospitales y clínicas.",
  keywords: [
    "neurotecnologías",
    "equipos médicos neurológicos",
    "neurofisiología",
    "neuromodulación",
    "neurorehabilitación",
    "estimulación magnética transcraneal",
    "terapia electroconvulsiva",
    "tDCS",
    "neurocirugía",
    "equipos médicos para hospitales",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://neurotecnologias.com",
  },
  openGraph: {
    title: "Neurotecnologías | Equipos médicos para neurofisiología y neurorehabilitación",
    description:
      "Soluciones avanzadas en neurotecnología clínica para hospitales, clínicas e instituciones médicas.",
    url: "https://neurotecnologias.com",
    siteName: "Neurotecnologías",
    locale: "es_US",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/espiral.svg", type: "image/svg+xml" }],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Neurotecnologías",
  url: "https://neurotecnologias.com",
  logo: "https://neurotecnologias.com/logo.png",
  description:
    "Soluciones avanzadas para neurofisiología, neuromodulación y neurorehabilitación. Equipos médicos especializados desde 2003.",
  foundingDate: "2003",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-305-320-4838",
    contactType: "sales",
    email: "info@neurotecnologias.com",
  },
  sameAs: ["https://wa.me/13053204838"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Neurotecnologías",
  url: "https://neurotecnologias.com",
  description:
    "Soluciones avanzadas para neurofisiología, neuromodulación y neurorehabilitación. Equipos médicos especializados desde 2003.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://neurotecnologias.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${montserrat.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <a href="#inicio" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#09B7AD] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg">
            Saltar al contenido
          </a>
          <div className="relative z-10 flex flex-col min-h-full">
            <Header />
            <main className="flex-1" id="inicio">{children}</main>
            <Footer />
          </div>
          <Chatbot />
          <ScrollReveal />
          <ScrollToTop />
          <WhatsAppFab />
        </LanguageProvider>
      </body>
    </html>
  );
}
