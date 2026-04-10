import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Handelsbetingelser",
  description: "Tolk360s generelle handelsbetingelser for tolkning og oversættelse.",
};

export default function Page() {
  return (
    <>
      <PageHero title="Handelsbetingelser" description="Generelle handelsbetingelser for ydelser leveret af Tolk360." />
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <h2 className="text-xl font-bold text-[var(--brand-primary)] mb-4">Generelt</h2>
          <p className="text-[var(--text-muted)] mb-6">
            Disse handelsbetingelser gælder for alle ydelser leveret af Tolk360, Søvej 1, 8600 Silkeborg, medmindre andet er skriftligt aftalt.
          </p>
          <h2 className="text-xl font-bold text-[var(--brand-primary)] mb-4">Bestilling og afbestilling</h2>
          <p className="text-[var(--text-muted)] mb-6">
            Bestilling af tolkning og oversættelse sker via vores bestillingssystem, telefonisk eller pr. e-mail. Afbestilling skal ske inden for de tidsfrister, der er angivet i den konkrete aftale.
          </p>
          <h2 className="text-xl font-bold text-[var(--brand-primary)] mb-4">Priser og betaling</h2>
          <p className="text-[var(--text-muted)] mb-6">
            Priser aftales ved bestilling og fremgår af tilbud eller rammeaftale. Betaling sker efter faktura med de betalingsbetingelser, der er angivet i aftalen.
          </p>
          <h2 className="text-xl font-bold text-[var(--brand-primary)] mb-4">Fortrolighed</h2>
          <p className="text-[var(--text-muted)] mb-6">
            Alle tolke og oversættere hos Tolk360 er underlagt tavshedspligt. Alt materiale og alle samtaler behandles fortroligt.
          </p>
          <h2 className="text-xl font-bold text-[var(--brand-primary)] mb-4">Klager</h2>
          <p className="text-[var(--text-muted)]">
            Eventuelle klager skal rettes til mail@tolk360.dk. Vi behandler alle henvendelser hurtigst muligt og senest inden for 14 dage.
          </p>
        </div>
      </section>
    </>
  );
}
