"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, allLanguages, languageCountryMap } from "../sprog/globe";

// Fun facts for popular languages
const sprogFakta: Record<string, { lande: string; talere: string; fakta: string }> = {
  "Arabisk": { lande: "22 lande i Mellemøsten og Nordafrika", talere: "Ca. 420 mio. talere", fakta: "Arabisk skrives fra højre mod venstre og er et af FN's seks officielle sprog." },
  "Somali": { lande: "Somalia, Djibouti, Etiopien, Kenya", talere: "Ca. 22 mio. talere", fakta: "Somali er et afroasiatisk sprog der først fik et officielt skriftsprog i 1972." },
  "Tyrkisk": { lande: "Tyrkiet og Cypern", talere: "Ca. 80 mio. talere", fakta: "Tyrkisk skiftede fra arabisk til latinsk alfabet i 1928 under Atatürk." },
  "Farsi": { lande: "Iran, Afghanistan, Tadsjikistan", talere: "Ca. 110 mio. talere", fakta: "Farsi er et af verdens ældste sprog med en litterær tradition på over 2.500 år." },
  "Dari": { lande: "Afghanistan", talere: "Ca. 29 mio. talere", fakta: "Dari er den afghanske variant af persisk og et af Afghanistans to officielle sprog." },
  "Kurdisk": { lande: "Tyrkiet, Irak, Iran, Syrien", talere: "Ca. 30 mio. talere", fakta: "Kurdisk har to hoveddialekter: Kurmanji (nord) og Sorani (syd)." },
  "Polsk": { lande: "Polen", talere: "Ca. 45 mio. talere", fakta: "Polsk har 7 kasus og anses for et af de sværeste europæiske sprog at lære." },
  "Rumænsk": { lande: "Rumænien og Moldova", talere: "Ca. 26 mio. talere", fakta: "Rumænsk er det eneste romanske sprog i Østeuropa og ligner italiensk." },
  "Ukrainsk": { lande: "Ukraine", talere: "Ca. 40 mio. talere", fakta: "Ukrainsk bruger det kyrilliske alfabet og har melodisk intonation." },
  "Russisk": { lande: "Rusland og flere ex-sovjetstater", talere: "Ca. 258 mio. talere", fakta: "Russisk er det mest talte slaviske sprog og bruges i rumfart." },
  "Spansk": { lande: "Spanien og 20 latinamerikanske lande", talere: "Ca. 560 mio. talere", fakta: "Spansk er verdens næstmest talte modersmål efter kinesisk." },
  "Fransk": { lande: "Frankrig og 28 andre lande i Afrika og verden", talere: "Ca. 310 mio. talere", fakta: "Fransk er officielt sprog i 29 lande og et af FN's arbejdssprog." },
  "Tysk": { lande: "Tyskland, Østrig, Schweiz", talere: "Ca. 130 mio. talere", fakta: "Tysk er EU's mest talte modersmål og kendt for sine lange sammensatte ord." },
  "Engelsk": { lande: "67 lande verden over", talere: "Ca. 1,5 mia. talere", fakta: "Engelsk er verdens mest udbredte andetsprog og lingua franca for forretning." },
  "Kinesisk (Mandarin)": { lande: "Kina, Taiwan, Singapore", talere: "Ca. 920 mio. talere", fakta: "Mandarin har fire toner — samme lyd med forskellig tone betyder noget helt andet." },
  "Hindi": { lande: "Indien", talere: "Ca. 600 mio. talere", fakta: "Hindi skrives med Devanagari-skrift og er Indiens mest talte sprog." },
  "Bengali": { lande: "Bangladesh og Indien (Vestbengalen)", talere: "Ca. 270 mio. talere", fakta: "Bengali har sit eget alfabet og er verdens 7. mest talte sprog." },
  "Portugisisk": { lande: "Portugal, Brasilien, Angola, Mozambique", talere: "Ca. 260 mio. talere", fakta: "Portugisisk tales på 4 kontinenter og er Sydamerikas mest talte sprog." },
  "Italiensk": { lande: "Italien, Schweiz, San Marino", talere: "Ca. 68 mio. talere", fakta: "Italiensk regnes for det sprog der ligger tættest på latin." },
  "Pashto": { lande: "Afghanistan og Pakistan", talere: "Ca. 60 mio. talere", fakta: "Pashto er Afghanistans andet officielle sprog ved siden af dari." },
  "Urdu": { lande: "Pakistan og Indien", talere: "Ca. 230 mio. talere", fakta: "Urdu skrives med arabisk skrift og deler grammatik med hindi." },
  "Tigrinya": { lande: "Eritrea og Etiopien", talere: "Ca. 9 mio. talere", fakta: "Tigrinya bruger Ge'ez-skriften — et af verdens ældste alfabeter." },
  "Amharisk": { lande: "Etiopien", talere: "Ca. 57 mio. talere", fakta: "Amharisk er Etiopiens officielle sprog og bruger det unikke Ge'ez-alfabet." },
  "Swahili": { lande: "Tanzania, Kenya, Uganda, DR Congo", talere: "Ca. 100 mio. talere", fakta: "Swahili er Afrikas mest talte sprog og blander bantu med arabisk." },
  "Thai": { lande: "Thailand", talere: "Ca. 60 mio. talere", fakta: "Thai har 5 toner og sit eget unikke alfabet med 44 konsonanter." },
  "Vietnamesisk": { lande: "Vietnam", talere: "Ca. 85 mio. talere", fakta: "Vietnamesisk har 6 toner og bruger det latinske alfabet med diakritiske tegn." },
  "Japansk": { lande: "Japan", talere: "Ca. 125 mio. talere", fakta: "Japansk har tre skriftsystemer: hiragana, katakana og kanji." },
  "Koreansk": { lande: "Sydkorea og Nordkorea", talere: "Ca. 80 mio. talere", fakta: "Det koreanske alfabet hangul blev opfundet i 1443 af Kong Sejong." },
  "Græsk": { lande: "Grækenland og Cypern", talere: "Ca. 13 mio. talere", fakta: "Græsk har den længste dokumenterede historie af alle indoeuropæiske sprog." },
  "Hollandsk": { lande: "Nederlandene og Belgien", talere: "Ca. 25 mio. talere", fakta: "Hollandsk ligner dansk og tysk og er let for skandinaver at forstå." },
  "Norsk": { lande: "Norge", talere: "Ca. 5 mio. talere", fakta: "Norsk og dansk er indbyrdes forståelige — mange danskere forstår norsk." },
  "Svensk": { lande: "Sverige og Finland", talere: "Ca. 10 mio. talere", fakta: "Svensk er også officielt sprog i Finland og forstås let af danskere." },
  "Finsk": { lande: "Finland", talere: "Ca. 5 mio. talere", fakta: "Finsk er ikke beslægtet med skandinaviske sprog men med estisk og ungarsk." },
  "Hebraisk": { lande: "Israel", talere: "Ca. 9 mio. talere", fakta: "Hebraisk blev genoplivet som talesprog i 1800-tallet efter årtusinders pause." },
  "Albansk": { lande: "Albanien og Kosovo", talere: "Ca. 7 mio. talere", fakta: "Albansk er en unik gren af de indoeuropæiske sprog uden nære slægtninge." },
  "Serbisk": { lande: "Serbien og Bosnien", talere: "Ca. 12 mio. talere", fakta: "Serbisk kan skrives med både kyrillisk og latinsk alfabet." },
  "Bosnisk": { lande: "Bosnien-Hercegovina", talere: "Ca. 3 mio. talere", fakta: "Bosnisk, serbisk og kroatisk er indbyrdes forståelige men politisk adskilte." },
  "Kroatisk": { lande: "Kroatien", talere: "Ca. 5 mio. talere", fakta: "Kroatisk bruger det latinske alfabet og er nært beslægtet med serbisk." },
};

export function HomeGlobe() {
  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  const fakta = selectedLang ? sprogFakta[selectedLang] : null;
  const lande = selectedLang ? languageCountryMap[selectedLang] : null;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#060c18] to-[#0d1a30] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Vi dækker hele verden
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-2">
              Med {allLanguages.length}+ sprog og tolke fra over 100 lande er vi
              klar til at hjælpe dig — uanset sprog og behov.
            </p>
            <p className="text-white/60 mb-6">
              Vores netværk spænder fra arabisk og somali til polsk, ukrainsk og
              tegnsprog. Vi finder altid den rette tolk.
            </p>

            {/* Language selector */}
            <div className="mb-6">
              <label htmlFor="sprog-select" className="block text-sm text-white/50 mb-2">
                Prøv at vælge et sprog og se det på kloden
              </label>
              <select
                id="sprog-select"
                value={selectedLang || ""}
                onChange={(e) => setSelectedLang(e.target.value || null)}
                className="w-full max-w-xs px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-[var(--brand-accent)] transition-colors appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
              >
                <option value="" className="bg-[#0d1a30]">Vælg sprog...</option>
                {allLanguages.map((lang) => (
                  <option key={lang} value={lang} className="bg-[#0d1a30]">{lang}</option>
                ))}
              </select>
            </div>

            {/* Fact card */}
            {selectedLang && (
              <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 animate-in fade-in duration-300">
                <h3 className="text-lg font-semibold text-[#ff6b35] mb-2">
                  {selectedLang}
                </h3>
                {fakta ? (
                  <>
                    <p className="text-sm text-white/80 mb-1">
                      <span className="text-white/50">Hvor:</span> {fakta.lande}
                    </p>
                    <p className="text-sm text-white/80 mb-1">
                      <span className="text-white/50">Talere:</span> {fakta.talere}
                    </p>
                    <p className="text-sm text-white/70 italic mt-2">
                      {fakta.fakta}
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-white/70">
                    {selectedLang} tales i {lande?.join(", ")}.
                  </p>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Link
                href="/sprog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--brand-accent)] text-white font-semibold hover:brightness-110 transition-all"
              >
                Se alle sprog
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/faa-tilbud"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Få tilbud
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Globe focusLang={selectedLang} />
          </div>
        </div>
      </div>
    </section>
  );
}
