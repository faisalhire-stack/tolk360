import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Bliv tolk",
  description: "Bliv en del af Tolk360s netværk af professionelle tolke og oversættere. Vi søger uddannede tolke i alle sprog.",
};

export default function BlivTolkPage() {
  return (
    <>
      <PageHero
        title="Bliv tolk hos Tolk360"
        description="Vi søger altid kvalificerede tolke og oversættere til vores netværk. Er du uddannet tolk? Så vil vi gerne høre fra dig."
      />
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-6">Vi søger dig, der</h2>
              <ul className="space-y-4 text-[var(--text-muted)]">
                {[
                  "Har en formel tolkeuddannelse eller tilsvarende kvalifikationer",
                  "Behersker dansk flydende samt et eller flere fremmedsprog",
                  "Har erfaring med tolkning i professionelle sammenhænge",
                  "Er pålidelig, diskret og professionel",
                  "Kan arbejde fleksibelt med varierende opgaver",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--brand-accent)] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-[var(--brand-primary)] mt-10 mb-6">Det tilbyder vi</h2>
              <ul className="space-y-4 text-[var(--text-muted)]">
                {[
                  "Konkurrencedygtig aflønning",
                  "Fleksible arbejdstider og varierede opgaver",
                  "Et professionelt arbejdsmiljø med fokus på kvalitet",
                  "Løbende mulighed for kompetenceudvikling",
                  "Et stærkt netværk af kolleger i hele Danmark",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--brand-accent)] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--bg-light)] rounded-xl p-8 border border-gray-100 h-fit">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send din ansøgning</h3>
              <p className="text-[var(--text-muted)] mb-6">
                Send dit CV og en kort beskrivelse af dine sproglige kompetencer og erfaring til:
              </p>
              <a
                href="mailto:mail@tolk360.dk"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-accent)] transition-colors w-full"
              >
                mail@tolk360.dk
              </a>
              <p className="mt-4 text-sm text-[var(--text-muted)]">
                Eller kontakt os på <a href="tel:+4570604060" className="text-[var(--brand-accent)] hover:underline">+45 70 60 40 60</a> for mere information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
