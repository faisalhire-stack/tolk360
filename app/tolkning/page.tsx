import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Tolkning",
  description: "Professionel tolkning i hele Danmark – fremmødetolkning, telefontolkning, videotolkning, konferencetolkning og tegnsprogstolkning.",
};

const tolkningstyper = [
  {
    title: "Fremmødetolkning",
    href: "/tolkning/fremmodetolkning",
    description: "Professionel tolk til stede fysisk ved møder, retssager, lægebesøg og andre situationer hvor personlig tilstedeværelse er vigtig.",
  },
  {
    title: "Telefontolkning",
    href: "/tolkning/telefontolkning",
    description: "Hurtig og effektiv tolkning over telefon – tilgængelig med kort varsel til akutte behov og planlagte samtaler.",
  },
  {
    title: "Videotolkning",
    href: "/tolkning/videotolkning",
    description: "Tolkning via video med billede og lyd – kombinerer fleksibiliteten fra telefontolkning med den personlige kontakt.",
  },
  {
    title: "Konferencetolkning",
    href: "/tolkning/konferencetolkning",
    description: "Simultantolkning til konferencer, seminarer og større arrangementer med professionelt tolkudstyr.",
  },
  {
    title: "Erhvervstolkning",
    href: "/tolkning/erhvervstolkning",
    description: "Professionel tolkning til erhvervslivet – forretningsmøder, forhandlinger, messer og internationale samarbejder.",
  },
  {
    title: "Tegnsprogstolkning",
    href: "/tolkning/tegnsprogstolkning",
    description: "Professionel tegnsprogstolkning til døve og hørehæmmede i alle typer situationer.",
  },
];

export default function TolkningPage() {
  return (
    <>
      <PageHero
        title="Tolkning"
        description="Vi tilbyder professionel tolkning i alle verdens sprog. Vores tolke er fuldt uddannede og specialiserede inden for deres fagområder."
      />
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tolkningstyper.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group p-6 rounded-xl border border-gray-100 hover:border-[var(--brand-accent)] hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[var(--brand-accent)]">
                  {type.title}
                </h2>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{type.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--brand-accent)]">
                  Læs mere
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
