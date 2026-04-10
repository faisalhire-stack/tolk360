import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Persondatapolitik",
  description: "Tolk360s persondatapolitik – sådan behandler vi dine personoplysninger.",
};

export default function Page() {
  return (
    <>
      <PageHero title="Persondatapolitik" description="Sådan behandler vi dine personoplysninger." />
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <h2 className="text-xl font-bold text-[var(--brand-primary)] mb-4">Dataansvarlig</h2>
          <p className="text-[var(--text-muted)] mb-6">
            Tolk360, Søvej 1, 8600 Silkeborg, er dataansvarlig for behandlingen af de personoplysninger, vi modtager om dig. Kontakt os på mail@tolk360.dk.
          </p>
          <h2 className="text-xl font-bold text-[var(--brand-primary)] mb-4">Formål med behandlingen</h2>
          <p className="text-[var(--text-muted)] mb-6">
            Vi behandler personoplysninger for at kunne levere vores ydelser, besvare henvendelser, administrere kundeforhold og opfylde lovkrav.
          </p>
          <h2 className="text-xl font-bold text-[var(--brand-primary)] mb-4">Opbevaring</h2>
          <p className="text-[var(--text-muted)] mb-6">
            Vi opbevarer dine personoplysninger så længe det er nødvendigt for at opfylde det formål, de er indsamlet til, eller som krævet af lovgivningen.
          </p>
          <h2 className="text-xl font-bold text-[var(--brand-primary)] mb-4">Dine rettigheder</h2>
          <p className="text-[var(--text-muted)] mb-6">
            Du har ret til indsigt, berigtigelse, sletning og begrænsning af behandlingen af dine personoplysninger. Kontakt os for at udøve dine rettigheder.
          </p>
        </div>
      </section>
    </>
  );
}
