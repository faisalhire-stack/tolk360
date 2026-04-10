import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sprogData } from "../sprogdata";
import { PageHero } from "../../components/PageHero";

export function generateStaticParams() {
  return sprogData.map((sprog) => ({ slug: sprog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sprog = sprogData.find((s) => s.slug === slug);
  if (!sprog) return {};

  return {
    title: `${sprog.name} tolk – Bestil ${sprog.name.toLowerCase()} tolkning | Tolk360`,
    description: `Bestil ${sprog.name.toLowerCase()} tolk hos Tolk360. Vi leverer professionel ${sprog.name.toLowerCase()} tolkning til kommuner, hospitaler, advokater og virksomheder i hele Danmark. Ring +45 70 60 40 60.`,
    keywords: [
      `${sprog.name.toLowerCase()} tolk`,
      `${sprog.name.toLowerCase()} tolkning`,
      `${sprog.name.toLowerCase()} oversætter`,
      `${sprog.name.toLowerCase()} oversættelse`,
      `bestil ${sprog.name.toLowerCase()} tolk`,
      `${sprog.name.toLowerCase()} tolk danmark`,
      `${sprog.name.toLowerCase()} tolk pris`,
      "tolk",
      "tolkning",
      "Tolk360",
    ],
  };
}

export default async function SprogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sprog = sprogData.find((s) => s.slug === slug);

  if (!sprog) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${sprog.name} tolkning`,
    description: `Professionel ${sprog.name.toLowerCase()} tolkning og oversættelse i hele Danmark.`,
    provider: {
      "@type": "LocalBusiness",
      name: "Tolk360",
      telephone: "+45 70 60 40 60",
      email: "mail@tolk360.dk",
      url: "https://tolk360.dk",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "Søvej 1",
          addressLocality: "Silkeborg",
          postalCode: "8600",
          addressCountry: "DK",
        },
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "Denmark",
    },
    serviceType: [
      `${sprog.name} tolkning`,
      `${sprog.name} oversættelse`,
      "Fremmødetolkning",
      "Telefontolkning",
      "Videotolkning",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        title={`${sprog.name} tolk`}
        description={`Professionel ${sprog.name.toLowerCase()} tolkning og oversættelse – til kommuner, hospitaler, advokater og virksomheder i hele Danmark.`}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-[var(--brand-primary)]">
                {sprog.name} tolkning og oversættelse
              </h2>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                {sprog.description}
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Tolk360 har over 7.000 tilknyttede tolke og har leveret professionelle sprogløsninger siden 2004. Vi kan stille {sprog.name.toLowerCase()}e tolke til rådighed til alle typer opgaver – fra akut telefontolkning med kort varsel til planlagte fremmødetolkninger og skriftlig oversættelse.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                Sådan bestiller du en {sprog.name.toLowerCase()} tolk
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    step: "1",
                    title: "Kontakt os",
                    text: "Ring, send en mail eller udfyld vores tilbudsformular med dine behov.",
                  },
                  {
                    step: "2",
                    title: "Vi matcher",
                    text: `Vi finder den rette ${sprog.name.toLowerCase()}e tolk til din opgave – tilpasset fagområde og situation.`,
                  },
                  {
                    step: "3",
                    title: "Tolkning",
                    text: "Tolken møder op, ringer eller kobler på video – klar, forberedt og professionel.",
                  },
                ].map((s) => (
                  <div key={s.step} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-[var(--brand-accent)] text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      {s.step}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{s.title}</h4>
                    <p className="text-sm text-[var(--text-muted)]">{s.text}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                {sprog.name} tolkning – alle formater
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Fremmødetolkning – tolken møder fysisk op",
                  "Telefontolkning – hurtigt og fleksibelt",
                  "Videotolkning – personlig kontakt på afstand",
                  "Konferencetolkning – til større arrangementer",
                  `Skriftlig oversættelse fra/til ${sprog.name.toLowerCase()}`,
                  "Akut tolkning med kort varsel",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[var(--text-muted)]">
                    <svg className="w-5 h-5 text-[var(--brand-accent)] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                Typiske situationer for {sprog.name.toLowerCase()} tolkning
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Lægebesøg og hospitalssamtaler",
                  "Kommunale møder og sagsbehandling",
                  "Retsmøder og advokatsamtaler",
                  "Jobcentre og beskæftigelsesindsatser",
                  "Skole-hjem-samtaler",
                  "Psykologsamtaler og terapiforløb",
                  "Asylsamtaler og udlændingesager",
                  "Virksomhedsmøder og forhandlinger",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[var(--text-muted)]">
                    <svg className="w-5 h-5 text-[var(--brand-accent)] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-[var(--bg-light)] rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Bestil {sprog.name.toLowerCase()} tolk
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mb-5">
                    Vi kan ofte stille en {sprog.name.toLowerCase()} tolk til rådighed med kort varsel – ring eller udfyld formularen.
                  </p>
                  <a
                    href="tel:+4570604060"
                    className="block w-full text-center px-5 py-3 text-sm font-semibold rounded-lg bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-accent)] transition-colors mb-3"
                  >
                    Ring +45 70 60 40 60
                  </a>
                  <Link
                    href="/faa-tilbud"
                    className="block w-full text-center px-5 py-3 text-sm font-semibold rounded-lg border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-light)] transition-colors mb-3"
                  >
                    Få tilbud
                  </Link>
                  <a
                    href="https://tolkeplan.dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-5 py-3 text-sm font-semibold rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Bestil tolk / Login
                  </a>
                </div>

                <div className="bg-[var(--brand-light)] rounded-xl p-6 border border-[var(--brand-accent)]/20">
                  <h3 className="text-sm font-semibold text-[var(--brand-primary)] mb-3">Hvorfor Tolk360?</h3>
                  <ul className="text-sm text-[var(--text-muted)] space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[var(--brand-accent)] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Uddannede og sprogtestede tolke
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[var(--brand-accent)] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      7.000+ tilknyttede tolke
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[var(--brand-accent)] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      På markedet siden 2004
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[var(--brand-accent)] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Landsdækkende dækning
                    </li>
                  </ul>
                </div>

                <div className="text-center text-xs text-[var(--text-muted)]">
                  <Link href="/sprog" className="text-[var(--brand-accent)] hover:underline">
                    Se alle sprog →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
