import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Vores tolke",
  description: "Lær om Tolk360s tolke – fuldt uddannede, sprogtestede og specialiserede inden for juridisk, medicinsk og social tolkning.",
};

export default function VoresTolkePage() {
  return (
    <>
      <PageHero
        title="Vores tolke"
        description="Fuldt uddannede, sprogtestede og specialiserede tolke og oversættere."
      />
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-6">
                Kvalitet starter med mennesker
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                Hos Tolk360 stiller vi høje krav til vores tolke og oversættere. Alle gennemgår en grundig screeningsproces, hvor vi vurderer sproglige kompetencer, faglig baggrund og professionelle kvalifikationer.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                Vi samarbejder udelukkende med tolke der har en formel tolkeuddannelse eller tilsvarende kvalifikationer, og som løbende evalueres på kvaliteten af deres arbejde.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Vores tolke dækker alle verdens sprog og er specialiserede inden for bl.a. juridisk, medicinsk, social og teknisk tolkning.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-[var(--bg-light)] border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Screeningsproces</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Alle tolke gennemgår sprogtest, baggrundstjek og interview inden de kan levere tolkninger for Tolk360.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-[var(--bg-light)] border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Uddannelsesniveau</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Vi prioriterer tolke med formel tolkeuddannelse fra anerkendte institutioner og løbende efteruddannelse.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-[var(--bg-light)] border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kvalitetssikring</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Vi evaluerer løbende tolkenes præstationer og modtager feedback fra kunder for at sikre konstant høj kvalitet.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-xl bg-[var(--brand-light)]">
              <span className="block text-3xl font-bold text-[var(--brand-primary)]">Alle</span>
              <span className="text-sm text-[var(--text-muted)]">Verdens sprog</span>
            </div>
            <div className="p-6 rounded-xl bg-[var(--brand-light)]">
              <span className="block text-3xl font-bold text-[var(--brand-primary)]">7.000+</span>
              <span className="text-sm text-[var(--text-muted)]">Tilknyttede tolke</span>
            </div>
            <div className="p-6 rounded-xl bg-[var(--brand-light)]">
              <span className="block text-3xl font-bold text-[var(--brand-primary)]">100%</span>
              <span className="text-sm text-[var(--text-muted)]">Uddannede tolke</span>
            </div>
            <div className="p-6 rounded-xl bg-[var(--brand-light)]">
              <span className="block text-3xl font-bold text-[var(--brand-primary)]">20+</span>
              <span className="text-sm text-[var(--text-muted)]">Års erfaring</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/bliv-tolk" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-accent)] transition-colors">
              Bliv tolk hos Tolk360
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
