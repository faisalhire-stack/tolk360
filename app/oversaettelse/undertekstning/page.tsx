import type { Metadata } from "next";
import Link from "next/link";
import { SubtitleHero } from "./SubtitleHero";

export const metadata: Metadata = {
  title: "Undertekstning – Professionel tekstning til film og tv",
  description:
    "Tolk360 leverer professionel undertekstning til film, tv-serier, dokumentarer og virksomhedsvideoer. Alle oversættelser udføres af erfarne billedmedieoversættere.",
};

export default function UndertekstningPage() {
  return (
    <>
      <SubtitleHero />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-[var(--brand-primary)]">
                Undertekster af høj kvalitet
              </h2>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                Tolk360 leverer professionel undertekstning til tv, film, streaming og virksomhedsvideoer. Vores erfarne billedmedieoversættere sikrer undertekster, der er korrekte, mundrette, rammer sprogtonen og formidler både den leksikale og underforståede betydning i et læsevenligt tempo.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Alle vores oversættelser udføres af mennesker – ikke maskiner. Det gør en afgørende forskel, når nuancer, humor, tone og kulturelle referencer skal formidles korrekt til et dansk publikum.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                Hvad undertekster vi?
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                Vi undertekster bredt – fra fiktion og dokumentar til virksomhedsvideoer og e-learning. Vores oversættere har erfaring med alle genrer:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Film og tv-serier",
                  "Dokumentarer",
                  "Reality-tv",
                  "Retssalsdramaer og krimier",
                  "Debatprogrammer og nyheder",
                  "Børne-tv og animation",
                  "Science fiction og drama",
                  "Virksomhedsvideoer og e-learning",
                  "Konference- og eventvideoer",
                  "YouTube og sociale medier",
                ].map((genre) => (
                  <div key={genre} className="flex items-start gap-2 text-[var(--text-muted)]">
                    <svg className="w-5 h-5 text-[var(--brand-accent)] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {genre}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                Sprog vi undertekster fra
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                Vi oversætter til dansk fra en lang række sprog. Vores kernesprog er:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Engelsk",
                  "Norsk",
                  "Svensk",
                  "Tysk",
                  "Fransk",
                  "Spansk",
                  "Russisk",
                  "Arabisk",
                  "Og mange flere",
                ].map((sprog) => (
                  <div key={sprog} className="flex items-start gap-2 text-[var(--text-muted)]">
                    <svg className="w-5 h-5 text-[var(--brand-accent)] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {sprog}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                Kvalitet frem for alt
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                God undertekstning handler om mere end at oversætte ord. Det handler om at formidle stemning, humor, tempo og kulturelle referencer, så seeren får den fulde oplevelse. Vores oversættere er specialiserede i audiovisuel oversættelse og forstår de særlige krav, der stilles til undertekster: timing, læsehastighed, linjebrud og kondensering – alt sammen uden at gå på kompromis med indholdet.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed mt-4">
                Vi følger gældende retningslinjer for undertekstning i Danmark og leverer i alle gængse formater, herunder SRT, VTT, STL, EBU og brændt tekst.
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-[var(--bg-light)] rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Har du brug for undertekster?
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mb-5">
                    Send os din video eller dit manuskript, og vi vender tilbage med et tilbud – typisk inden for samme arbejdsdag.
                  </p>
                  <Link
                    href="/faa-tilbud"
                    className="block w-full text-center px-5 py-3 text-sm font-semibold rounded-lg bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-accent)] transition-colors mb-3"
                  >
                    Få tilbud på undertekstning
                  </Link>
                  <Link
                    href="/kontakt"
                    className="block w-full text-center px-5 py-3 text-sm font-semibold rounded-lg border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-light)] transition-colors"
                  >
                    Kontakt os
                  </Link>
                  <p className="mt-4 text-xs text-[var(--text-muted)] text-center">
                    Ring: <a href="tel:+4570604060" className="text-[var(--brand-accent)]">+45 70 60 40 60</a>
                  </p>
                </div>

                <div className="bg-[var(--bg-light)] rounded-xl p-6 border border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Leveringsformater</h3>
                  <ul className="text-sm text-[var(--text-muted)] space-y-1">
                    <li>SRT (SubRip)</li>
                    <li>VTT (WebVTT)</li>
                    <li>STL (EBU Subtitle)</li>
                    <li>Brændt tekst (hardcoded)</li>
                    <li>Andre formater efter aftale</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
