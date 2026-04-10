import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Oversættelse",
  description: "Professionel oversættelse – juridisk, medicinsk, teknisk og marketing-oversættelse udført af specialiserede, uddannede oversættere.",
};

const typer = [
  { title: "Juridisk oversættelse", href: "/oversaettelse/juridisk", description: "Præcis og certificeret oversættelse af kontrakter, domme, lovtekster og juridiske dokumenter." },
  { title: "Medicinsk oversættelse", href: "/oversaettelse/medicinsk", description: "Specialiseret oversættelse af patientjournaler, kliniske rapporter og medicinsk faglitteratur." },
  { title: "Teknisk oversættelse", href: "/oversaettelse/teknisk", description: "Oversættelse af tekniske manualer, brugervejledninger, specifikationer og ingeniørdokumentation." },
  { title: "Marketing-oversættelse", href: "/oversaettelse/marketing", description: "Kreativ og kulturelt tilpasset oversættelse af markedsføringsmateriale, websites og kampagner." },
  { title: "Korrekturlæsning", href: "/oversaettelse/korrekturlaesning", description: "Grundig gennemgang og rettelse af oversatte tekster for at sikre sproglig kvalitet og nøjagtighed." },
  { title: "DTP", href: "/oversaettelse/dtp", description: "Desktop Publishing – vi tilpasser layout og grafik, så din oversatte tekst passer perfekt i det endelige format." },
  { title: "Voiceover", href: "/oversaettelse/voiceover", description: "Professionel voiceover på flere sprog til videoer, e-learning, reklamer og præsentationer." },
  { title: "Undertekstning", href: "/oversaettelse/undertekstning", description: "Professionel undertekstning til film, tv-serier, dokumentarer og virksomhedsvideoer – udført af erfarne billedmedieoversættere." },
];

export default function OversaettelsePage() {
  return (
    <>
      <PageHero
        title="Oversættelse"
        description="Specialiserede oversættelser udført af fagligt kvalificerede oversættere med branchekendskab."
      />
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {typer.map((type) => (
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
