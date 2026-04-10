import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Mentorer og kontaktpersoner",
  description:
    "Tolk360 leverer flersprogede mentorer og kontaktpersoner efter integrationsloven, LAB og serviceloven. Støtte til integration, beskæftigelse og social indsats.",
};

const checkIcon = (
  <svg
    className="w-5 h-5 text-[var(--brand-accent)] mt-0.5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

export default function MentorerPage() {
  return (
    <>
      <PageHero
        title="Mentorer og kontaktpersoner"
        description="Flersprogede mentorer og kontaktpersoner der bygger bro mellem borgere, myndigheder og det danske samfund – med afsæt i gældende lovgivning."
      />

      {/* Intro */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-[var(--brand-primary)]">
                Mere end tolkning – en bro til det danske samfund
              </h2>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                Tolk360 er et af de få bureauer i Danmark, der udover tolkning og oversættelse også leverer kvalificerede mentorer og kontaktpersoner. Vores mentorer og kontaktpersoner taler borgerens sprog, forstår deres kultur og kender det danske system – og kan derfor skabe den tillid og tryghed, som er afgørende for en vellykket indsats.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Vi samarbejder med kommuner, jobcentre, skoler og socialforvaltninger om at levere den rette støtte til borgere i integrations-, beskæftigelses- og socialindsatser. Alle vores mentorer og kontaktpersoner er nøje udvalgte, og vi matcher altid sprog, kulturel baggrund og faglige kompetencer til den konkrete opgave.
              </p>
            </div>

            {/* Sidebar med nøgletal */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-[var(--brand-light)] border border-[var(--brand-accent)]/20">
                <span className="block text-3xl font-bold text-[var(--brand-primary)]">Alle</span>
                <span className="text-sm text-[var(--text-muted)]">Verdens sprog</span>
              </div>
              <div className="p-6 rounded-xl bg-[var(--bg-light)] border border-gray-100">
                <span className="block text-3xl font-bold text-[var(--brand-primary)]">Landsdækkende</span>
                <span className="text-sm text-[var(--text-muted)]">Vi dækker hele Danmark</span>
              </div>
              <div className="p-6 rounded-xl bg-[var(--bg-light)] border border-gray-100">
                <span className="block text-3xl font-bold text-[var(--brand-primary)]">Individuel</span>
                <span className="text-sm text-[var(--text-muted)]">Matching på sprog, kultur og faglighed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorer */}
      <section className="py-16 sm:py-24 bg-[var(--bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-2">
              Mentorer
            </h2>
            <p className="text-sm text-[var(--brand-accent)] font-medium mb-6">
              Jf. Lov om en aktiv beskæftigelsesindsats (LAB) kapitel 26, §167–170 og Integrationsloven §23
            </p>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">
              En mentor er en personlig støtteperson, som hjælper borgeren med at fastholde tilknytning til uddannelse, arbejdsmarked eller integrationsforløb. Mentoren kan støtte med alt fra at forstå breve fra myndigheder til at navigere i det danske uddannelses- og arbejdsmarkedssystem.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Mentorer efter LAB (beskæftigelseslovgivningen)</h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Kommunen kan efter Lov om en aktiv beskæftigelsesindsats (LAB) §167 bevilge en mentor til borgere, der har brug for særlig støtte for at opnå eller fastholde beskæftigelse, uddannelse eller deltagelse i aktiverings- eller revalideringstilbud. Mentoren er typisk tilknyttet i en afgrænset periode og med et konkret mål.
            </p>
            <ul className="space-y-3 text-[var(--text-muted)] mb-6">
              <li className="flex items-start gap-3">{checkIcon} Støtte til jobsøgning, CV og ansøgninger på borgerens eget sprog</li>
              <li className="flex items-start gap-3">{checkIcon} Hjælp til at forstå og fastholde en praktik- eller ansættelsesaftale</li>
              <li className="flex items-start gap-3">{checkIcon} Ledsagelse til møder med jobcenter, a-kasse og arbejdsgiver</li>
              <li className="flex items-start gap-3">{checkIcon} Kulturel brobygning mellem borger og arbejdsplads</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Mentorer efter Integrationsloven</h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Integrationsloven §23 giver kommunen mulighed for at tilbyde en mentor som del af integrationsprogrammet. Mentoren støtter nyankomne flygtninge og familiesammenførte i at finde fodfæste i det danske samfund – sprogligt, kulturelt og praktisk.
            </p>
            <ul className="space-y-3 text-[var(--text-muted)]">
              <li className="flex items-start gap-3">{checkIcon} Støtte under selvforsørgelses- og hjemrejseprogrammet eller introduktionsprogrammet</li>
              <li className="flex items-start gap-3">{checkIcon} Hjælp til at navigere i det danske sundhedssystem, skolesystem og offentlige instanser</li>
              <li className="flex items-start gap-3">{checkIcon} Kulturel vejledning og praktisk støtte i hverdagen</li>
              <li className="flex items-start gap-3">{checkIcon} Sparring om rettigheder, pligter og muligheder i Danmark</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Kontaktpersoner */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-2">
              Kontaktpersoner
            </h2>
            <p className="text-sm text-[var(--brand-accent)] font-medium mb-6">
              Jf. Lov om social service (Serviceloven) §52 stk. 3 nr. 6 og §99
            </p>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">
              En kontaktperson er en fast støtteperson for borgere, der har behov for en stabil relation til en person, som kan vejlede, lytte og støtte i svære situationer. Kontaktpersoner anvendes primært inden for det sociale område – både for børn, unge og voksne.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Kontaktpersoner for børn og unge (§52)</h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Kommunen kan som led i en forebyggende indsats efter Serviceloven §52 tildele et barn eller en ung en fast kontaktperson. Kontaktpersonen fungerer som en stabil og tryg voksenrelation, der hjælper barnet eller den unge med at navigere i hverdagen.
            </p>
            <ul className="space-y-3 text-[var(--text-muted)] mb-6">
              <li className="flex items-start gap-3">{checkIcon} Støtte og vejledning i hverdagen – skole, fritid og familie</li>
              <li className="flex items-start gap-3">{checkIcon} Bindeled mellem barnet/den unge, familien og kommunen</li>
              <li className="flex items-start gap-3">{checkIcon} Kulturelt og sprogligt match sikrer tillid og forståelse</li>
              <li className="flex items-start gap-3">{checkIcon} Hjælp til at forebygge mistrivsel og skolefravær</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Kontaktpersoner for voksne (§99)</h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Kommunen skal efter Serviceloven §99 tilbyde en kontaktperson til voksne med sindslidelser, der ikke har eller kan opholde sig i egen bolig. Kontaktpersonen hjælper borgeren med at opretholde sociale relationer, kontakt til myndigheder og struktur i hverdagen.
            </p>
            <ul className="space-y-3 text-[var(--text-muted)]">
              <li className="flex items-start gap-3">{checkIcon} Fast kontaktperson der taler borgerens sprog</li>
              <li className="flex items-start gap-3">{checkIcon} Støtte til kontakt med sundhedsvæsen og socialforvaltning</li>
              <li className="flex items-start gap-3">{checkIcon} Hjælp til praktiske gøremål og struktur i hverdagen</li>
              <li className="flex items-start gap-3">{checkIcon} Forebyggelse af isolation gennem stabil, tillidsfuld kontakt</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fordelen ved Tolk360 */}
      <section className="py-16 sm:py-24 bg-[var(--bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-10 text-center">
            Derfor vælger kommuner Tolk360
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sprogligt og kulturelt match",
                text: "Vi matcher altid mentor eller kontaktperson på sprog, dialekt og kulturel baggrund – så borgeren føler sig tryg fra første møde.",
              },
              {
                title: "Kendskab til det danske system",
                text: "Vores mentorer og kontaktpersoner kender det danske sundheds-, uddannelses- og beskæftigelsessystem og kan bygge bro mellem borger og myndighed.",
              },
              {
                title: "Dokumentation og opfølgning",
                text: "Vi leverer løbende statusrapporter til kommunen, så sagsbehandleren altid har overblik over borgerens udvikling og indsatsens effekt.",
              },
              {
                title: "Fleksibel tilrettelæggelse",
                text: "Indsatsen tilpasses den enkelte borger – fra få timer om ugen til intensiv daglig støtte, fysisk eller via telefon/video.",
              },
              {
                title: "Erfaring med lovgivningen",
                text: "Vi kender rammerne i integrationsloven, LAB og serviceloven og sikrer, at vores indsats altid lever op til de lovgivningsmæssige krav.",
              },
              {
                title: "Landsdækkende dækning",
                text: "Vi dækker hele Danmark og kan stille mentorer og kontaktpersoner til rådighed uanset kommune – også med kort varsel.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-white border border-gray-100 hover:border-[var(--brand-accent)] hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hvem bruger vores mentorer */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-10">
              Hvem samarbejder vi med?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Jobcentre", desc: "Mentorer til borgere i beskæftigelsesindsatser efter LAB" },
              { title: "Integrationsafdelinger", desc: "Mentorer til flygtninge og familiesammenførte efter integrationsloven" },
              { title: "Socialforvaltninger", desc: "Kontaktpersoner til børn, unge og voksne efter serviceloven" },
              { title: "Skoler og institutioner", desc: "Flersprogede kontaktpersoner til forældresamarbejde og elevstøtte" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-light)] text-[var(--brand-accent)] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-primary)] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Har I brug for en mentor eller kontaktperson?
          </h2>
          <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto">
            Kontakt os for en uforpligtende samtale om, hvordan vi kan støtte jeres borgere med den rette flersprogede indsats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-white text-[var(--brand-primary)] hover:bg-gray-100 transition-colors shadow-lg"
            >
              Kontakt os
            </Link>
            <a
              href="tel:+4570604060"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Ring +45 70 60 40 60
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
