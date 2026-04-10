import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Cookiepolitik",
  description: "Tolk360s cookiepolitik – sådan bruger vi cookies på vores hjemmeside.",
};

export default function Page() {
  return (
    <>
      <PageHero title="Cookiepolitik" description="Sådan bruger vi cookies på tolk360.dk." />
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <h2 className="text-xl font-bold text-[var(--brand-primary)] mb-4">Hvad er cookies?</h2>
          <p className="text-[var(--text-muted)] mb-6">
            Cookies er små tekstfiler, der gemmes på din enhed, når du besøger vores hjemmeside. De bruges til at huske dine indstillinger og forbedre din oplevelse.
          </p>
          <h2 className="text-xl font-bold text-[var(--brand-primary)] mb-4">Hvilke cookies bruger vi?</h2>
          <p className="text-[var(--text-muted)] mb-6">
            Vi bruger nødvendige cookies til at sikre hjemmesidens funktionalitet, samt analytiske cookies til at forstå hvordan besøgende bruger vores side.
          </p>
          <h2 className="text-xl font-bold text-[var(--brand-primary)] mb-4">Sådan slår du cookies fra</h2>
          <p className="text-[var(--text-muted)] mb-6">
            Du kan til enhver tid slå cookies fra i din browsers indstillinger. Bemærk at dette kan påvirke hjemmesidens funktionalitet.
          </p>
        </div>
      </section>
    </>
  );
}
