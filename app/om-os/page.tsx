import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Om os",
  description:
    "Tolk360 har været på markedet siden 2004. Med over 7.000 tilknyttede tolke og kontorer i Aarhus og København leverer vi professionelle sprogløsninger i hele Danmark.",
};

export default function OmOsPage() {
  return (
    <>
      <PageHero
        title="Om Tolk360"
        description="Et af Danmarks mest erfarne tolke- og oversættelsesbureauer – på markedet siden 2004."
      />
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-6">
              Vores historie
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Tolk360 udspringer fra tidligere tolkefirmaer og en gruppe professionelle tolke med mange års erfaring i branchen. Vi har været på markedet siden 2004 og har i løbet af to årtier opbygget et af Danmarks største netværk af sprogprofessionelle.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              I dag har vi over 7.000 tolke tilknyttet og leverer tolkning, oversættelse, undertekstning, mentorer og kontaktpersoner i alle verdens sprog. Vi dækker hele Danmark fra vores kontorer i Aarhus og København.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-10">
              Vi adskiller os ved udelukkende at samarbejde med uddannede og sprogtestede tolke, og ved at tilbyde et bredt spektrum af ydelser der dækker alle sproglige behov – fra akut telefontolkning til specialiseret juridisk oversættelse og langvarig mentorstøtte.
            </p>

            {/* Nøgletal */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-5 rounded-xl bg-[var(--brand-light)]">
                <span className="block text-3xl font-bold text-[var(--brand-primary)]">2004</span>
                <span className="text-sm text-[var(--text-muted)]">Grundlagt</span>
              </div>
              <div className="text-center p-5 rounded-xl bg-[var(--brand-light)]">
                <span className="block text-3xl font-bold text-[var(--brand-primary)]">7.000+</span>
                <span className="text-sm text-[var(--text-muted)]">Tilknyttede tolke</span>
              </div>
              <div className="text-center p-5 rounded-xl bg-[var(--brand-light)]">
                <span className="block text-3xl font-bold text-[var(--brand-primary)]">Alle</span>
                <span className="text-sm text-[var(--text-muted)]">Verdens sprog</span>
              </div>
              <div className="text-center p-5 rounded-xl bg-[var(--brand-light)]">
                <span className="block text-3xl font-bold text-[var(--brand-primary)]">2</span>
                <span className="text-sm text-[var(--text-muted)]">Kontorer i DK</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-6">
              Hvad vi står for
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Kvalitet",
                  text: "Vi stiller høje krav til alle vores tolke og oversættere. Uddannelse, erfaring og specialisering er grundlaget.",
                },
                {
                  title: "Pålidelighed",
                  text: "Når vi aftaler en tolkning, så møder tolken op – forberedt og professionel. Vores kunder kan regne med os.",
                },
                {
                  title: "Bredde",
                  text: "Fra tolkning og oversættelse til mentorer, undertekstning og kontaktpersoner – vi dækker alle sproglige behov.",
                },
                {
                  title: "Nærhed",
                  text: "Vi kender vores tolke og kunder personligt. Det giver bedre match og bedre resultater.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="p-5 rounded-xl bg-[var(--bg-light)] border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">{v.text}</p>
                </div>
              ))}
            </div>

            {/* Kontorer */}
            <h2 className="text-2xl font-bold text-[var(--brand-primary)] mt-16 mb-6">
              Vores kontorer
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-[var(--brand-light)] border border-[var(--brand-accent)]/20">
                <h3 className="text-lg font-semibold text-[var(--brand-primary)] mb-2">
                  Hovedkontor – Aarhus
                </h3>
                <p className="text-[var(--text-muted)]">Søvej 1</p>
                <p className="text-[var(--text-muted)]">8600 Silkeborg</p>
                <p className="text-[var(--text-muted)] mt-2">Tlf: +45 70 60 40 60</p>
                <p className="text-[var(--text-muted)]">E-mail: mail@tolk360.dk</p>
              </div>
              <div className="p-6 rounded-xl bg-[var(--brand-light)] border border-[var(--brand-accent)]/20">
                <h3 className="text-lg font-semibold text-[var(--brand-primary)] mb-2">
                  Kontor – København
                </h3>
                <p className="text-[var(--text-muted)]">Tlf: +45 70 60 40 60</p>
                <p className="text-[var(--text-muted)]">E-mail: mail@tolk360.dk</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
