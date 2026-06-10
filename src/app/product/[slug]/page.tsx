import Link from "next/link";
import Image from "next/image";
import { SPECIALTIES } from "@/lib/constants";
import { notFound } from "next/navigation";

function findProduct(slug: string) {
  for (const spec of SPECIALTIES) {
    const prod = spec.products.find((p) => p.slug === slug);
    if (prod) return { ...prod, category: spec.title, categorySlug: spec.slug };
  }
  return null;
}

export function generateStaticParams() {
  return SPECIALTIES.flatMap((spec) =>
    spec.products.map((p) => ({ slug: p.slug }))
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  return (
    <>
      <section className="relative overflow-hidden hero-grid">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#09B7AD]/5 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#09B7AD]/5 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href={`/${product.categorySlug}`}
              className="badge animate-fade-in hover:bg-[#09B7AD]/10 transition-colors"
            >
              {product.category}
            </Link>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.1] tracking-tight mt-6 reveal-title">
              <span className="text-gradient">{product.title}</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="glass-card rounded-2xl overflow-hidden border border-[#E2E8F0]">
              <div className="bg-gradient-to-br from-gray-50 to-white p-4">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">
                Descripción
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 leading-tight mb-6 reveal-title">
            ¿Interesado en {product.title}?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Contáctanos para recibir asesoría personalizada y conocer
            especificaciones técnicas, precios y disponibilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="btn-gradient text-base font-semibold px-8 py-3.5 rounded-xl shadow-xl inline-flex items-center justify-center gap-2.5 transition-all"
            >
              Solicitar información
            </Link>
            <Link
              href={`/${product.categorySlug}`}
              className="border-2 border-gray-300 text-gray-700 text-base font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-100 inline-flex items-center justify-center gap-2.5 transition-all"
            >
              Ver más de {product.category}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
