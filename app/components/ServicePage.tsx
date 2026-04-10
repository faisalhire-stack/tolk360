import Link from "next/link";
import { PageHero } from "./PageHero";

interface ServicePageProps {
  title: string;
  description: string;
  content: string[];
  features?: string[];
  ctaText?: string;
}

export function ServicePage({ title, description, content, features, ctaText = "Kontakt os for tilbud" }: ServicePageProps) {
  return (
    <>
      <PageHero title={title} description={description} />
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {content.map((paragraph, i) => (
                <p key={i} className="text-[var(--text-muted)] leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              {features && features.length > 0 && (
                <>
                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Hvad vi tilbyder</h2>
                  <ul className="space-y-3 text-[var(--text-muted)]">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[var(--brand-accent)] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-[var(--bg-light)] rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Har du brug for denne ydelse?</h3>
                <p className="text-sm text-[var(--text-muted)] mb-5">
                  Kontakt os for et uforpligtende tilbud, eller bestil direkte hvis du har en rammeaftale.
                </p>
                <Link href="/faa-tilbud" className="block w-full text-center px-5 py-3 text-sm font-semibold rounded-lg bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-accent)] transition-colors mb-3">
                  {ctaText}
                </Link>
                <a href="https://tolkeplan.dk" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-5 py-3 text-sm font-semibold rounded-lg border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-light)] transition-colors">
                  Bestil tolk
                </a>
                <p className="mt-4 text-xs text-[var(--text-muted)] text-center">
                  Ring: <a href="tel:+4570604060" className="text-[var(--brand-accent)]">+45 70 60 40 60</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
