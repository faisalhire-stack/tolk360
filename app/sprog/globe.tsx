"use client";

import { useState } from "react";

// Country coordinates with languages
const countryData: { name: string; lat: number; lng: number; languages: string[] }[] = [
  { name: "Danmark", lat: 56.26, lng: 9.50, languages: ["Dansk"] },
  { name: "Sverige", lat: 60.13, lng: 18.64, languages: ["Svensk"] },
  { name: "Norge", lat: 60.47, lng: 8.47, languages: ["Norsk"] },
  { name: "Finland", lat: 61.92, lng: 25.75, languages: ["Finsk"] },
  { name: "Island", lat: 64.96, lng: -19.02, languages: ["Islandsk"] },
  { name: "Storbritannien", lat: 55.38, lng: -3.44, languages: ["Engelsk"] },
  { name: "Irland", lat: 53.14, lng: -7.69, languages: ["Irsk", "Engelsk"] },
  { name: "Tyskland", lat: 51.17, lng: 10.45, languages: ["Tysk"] },
  { name: "Frankrig", lat: 46.23, lng: 2.21, languages: ["Fransk"] },
  { name: "Spanien", lat: 40.46, lng: -3.75, languages: ["Spansk", "Catalansk", "Baskisk"] },
  { name: "Portugal", lat: 39.40, lng: -8.22, languages: ["Portugisisk"] },
  { name: "Italien", lat: 41.87, lng: 12.57, languages: ["Italiensk"] },
  { name: "Nederlandene", lat: 52.13, lng: 5.29, languages: ["Hollandsk"] },
  { name: "Belgien", lat: 50.50, lng: 4.47, languages: ["Flamsk", "Fransk", "Tysk"] },
  { name: "Schweiz", lat: 46.82, lng: 8.23, languages: ["Tysk", "Fransk", "Italiensk", "Rætoromansk"] },
  { name: "Østrig", lat: 47.52, lng: 14.55, languages: ["Tysk"] },
  { name: "Polen", lat: 51.92, lng: 19.15, languages: ["Polsk"] },
  { name: "Tjekkiet", lat: 49.82, lng: 15.47, languages: ["Tjekkisk"] },
  { name: "Slovakiet", lat: 48.67, lng: 19.70, languages: ["Slovakisk"] },
  { name: "Ungarn", lat: 47.16, lng: 19.50, languages: ["Ungarsk"] },
  { name: "Rumænien", lat: 45.94, lng: 24.97, languages: ["Rumænsk"] },
  { name: "Bulgarien", lat: 42.73, lng: 25.49, languages: ["Bulgarsk"] },
  { name: "Grækenland", lat: 39.07, lng: 21.82, languages: ["Græsk"] },
  { name: "Kroatien", lat: 45.10, lng: 15.20, languages: ["Kroatisk"] },
  { name: "Serbien", lat: 44.02, lng: 21.01, languages: ["Serbisk"] },
  { name: "Bosnien-Hercegovina", lat: 43.92, lng: 17.68, languages: ["Bosnisk"] },
  { name: "Montenegro", lat: 42.71, lng: 19.37, languages: ["Montenegrinsk"] },
  { name: "Nordmakedonien", lat: 41.51, lng: 21.75, languages: ["Makedonsk"] },
  { name: "Slovenien", lat: 46.15, lng: 14.99, languages: ["Slovensk"] },
  { name: "Albanien", lat: 41.15, lng: 20.17, languages: ["Albansk"] },
  { name: "Kosovo", lat: 42.60, lng: 20.90, languages: ["Albansk", "Serbisk"] },
  { name: "Estland", lat: 58.60, lng: 25.01, languages: ["Estisk"] },
  { name: "Letland", lat: 56.88, lng: 24.60, languages: ["Lettisk"] },
  { name: "Litauen", lat: 55.17, lng: 23.88, languages: ["Litauisk"] },
  { name: "Ukraine", lat: 48.38, lng: 31.17, languages: ["Ukrainsk"] },
  { name: "Rusland", lat: 61.52, lng: 105.32, languages: ["Russisk"] },
  { name: "Belarus", lat: 53.71, lng: 27.95, languages: ["Hviderussisk"] },
  { name: "Moldova", lat: 47.41, lng: 28.37, languages: ["Rumænsk"] },
  { name: "Georgien", lat: 42.32, lng: 43.36, languages: ["Georgisk"] },
  { name: "Armenien", lat: 40.07, lng: 45.04, languages: ["Armensk"] },
  { name: "Aserbajdsjan", lat: 40.14, lng: 47.58, languages: ["Aserbajdsjansk"] },
  { name: "Tyrkiet", lat: 38.96, lng: 35.24, languages: ["Tyrkisk", "Kurdisk"] },
  { name: "Irak", lat: 33.22, lng: 43.68, languages: ["Arabisk", "Kurdisk"] },
  { name: "Iran", lat: 32.43, lng: 53.69, languages: ["Farsi", "Kurdisk"] },
  { name: "Saudi-Arabien", lat: 23.89, lng: 45.08, languages: ["Arabisk"] },
  { name: "Yemen", lat: 15.55, lng: 48.52, languages: ["Arabisk"] },
  { name: "Oman", lat: 21.51, lng: 55.92, languages: ["Arabisk"] },
  { name: "De Forenede Arabiske Emirater", lat: 23.42, lng: 53.85, languages: ["Arabisk"] },
  { name: "Qatar", lat: 25.35, lng: 51.18, languages: ["Arabisk"] },
  { name: "Bahrain", lat: 26.07, lng: 50.56, languages: ["Arabisk"] },
  { name: "Kuwait", lat: 29.31, lng: 47.48, languages: ["Arabisk"] },
  { name: "Jordan", lat: 30.59, lng: 36.24, languages: ["Arabisk"] },
  { name: "Libanon", lat: 33.85, lng: 35.86, languages: ["Arabisk", "Fransk"] },
  { name: "Syrien", lat: 34.80, lng: 39.00, languages: ["Arabisk", "Kurdisk"] },
  { name: "Israel", lat: 31.05, lng: 34.85, languages: ["Hebraisk", "Arabisk"] },
  { name: "Palæstina", lat: 31.95, lng: 35.23, languages: ["Arabisk"] },
  { name: "Afghanistan", lat: 33.94, lng: 67.71, languages: ["Dari", "Pashto"] },
  { name: "Pakistan", lat: 30.38, lng: 69.35, languages: ["Urdu", "Panjabi", "Pashto"] },
  { name: "Indien", lat: 20.59, lng: 78.96, languages: ["Hindi", "Urdu", "Bengali", "Tamil", "Telugu", "Gujarati", "Panjabi"] },
  { name: "Bangladesh", lat: 23.68, lng: 90.36, languages: ["Bengali"] },
  { name: "Sri Lanka", lat: 7.87, lng: 80.77, languages: ["Singalesisk", "Tamil"] },
  { name: "Nepal", lat: 28.39, lng: 84.12, languages: ["Nepalesisk"] },
  { name: "Myanmar", lat: 21.91, lng: 95.96, languages: ["Burmesisk"] },
  { name: "Thailand", lat: 15.87, lng: 100.99, languages: ["Thai"] },
  { name: "Vietnam", lat: 14.06, lng: 108.28, languages: ["Vietnamesisk"] },
  { name: "Cambodja", lat: 12.57, lng: 104.99, languages: ["Khmer"] },
  { name: "Laos", lat: 19.86, lng: 102.50, languages: ["Laotisk"] },
  { name: "Indonesien", lat: -0.79, lng: 113.92, languages: ["Indonesisk"] },
  { name: "Malaysia", lat: 4.21, lng: 101.98, languages: ["Malaysisk"] },
  { name: "Filippinerne", lat: 12.88, lng: 121.77, languages: ["Filipino", "Tagalog"] },
  { name: "Kina", lat: 35.86, lng: 104.20, languages: ["Kinesisk (Mandarin)", "Kantonesisk"] },
  { name: "Japan", lat: 36.20, lng: 138.25, languages: ["Japansk"] },
  { name: "Sydkorea", lat: 35.91, lng: 127.77, languages: ["Koreansk"] },
  { name: "Nordkorea", lat: 40.34, lng: 127.51, languages: ["Koreansk"] },
  { name: "Mongoliet", lat: 46.86, lng: 103.85, languages: ["Mongolsk"] },
  { name: "Egypten", lat: 26.82, lng: 30.80, languages: ["Arabisk"] },
  { name: "Libyen", lat: 26.34, lng: 17.23, languages: ["Arabisk"] },
  { name: "Tunesien", lat: 33.89, lng: 9.54, languages: ["Arabisk", "Fransk"] },
  { name: "Algeriet", lat: 28.03, lng: 1.66, languages: ["Arabisk", "Berbisk", "Fransk"] },
  { name: "Marokko", lat: 31.79, lng: -7.09, languages: ["Arabisk", "Berbisk", "Fransk"] },
  { name: "Somalia", lat: 5.15, lng: 46.20, languages: ["Somali", "Arabisk"] },
  { name: "Etiopien", lat: 9.15, lng: 40.49, languages: ["Amharisk", "Tigrinya", "Oromo"] },
  { name: "Eritrea", lat: 15.18, lng: 39.78, languages: ["Tigrinya", "Arabisk"] },
  { name: "Sudan", lat: 12.86, lng: 30.22, languages: ["Arabisk"] },
  { name: "Sydsudan", lat: 6.88, lng: 31.31, languages: ["Engelsk", "Arabisk"] },
  { name: "Kenya", lat: -0.02, lng: 37.91, languages: ["Swahili", "Engelsk"] },
  { name: "Tanzania", lat: -6.37, lng: 34.89, languages: ["Swahili"] },
  { name: "Uganda", lat: 1.37, lng: 32.29, languages: ["Swahili", "Engelsk"] },
  { name: "Rwanda", lat: -1.94, lng: 29.87, languages: ["Kinyarwanda", "Fransk"] },
  { name: "Burundi", lat: -3.37, lng: 29.92, languages: ["Kirundi", "Fransk"] },
  { name: "DR Congo", lat: -4.04, lng: 21.76, languages: ["Fransk", "Lingala", "Swahili"] },
  { name: "Congo", lat: -0.23, lng: 15.83, languages: ["Fransk"] },
  { name: "Nigeria", lat: 9.08, lng: 8.68, languages: ["Engelsk", "Hausa", "Yoruba", "Igbo"] },
  { name: "Ghana", lat: 7.95, lng: -1.02, languages: ["Engelsk", "Akan"] },
  { name: "Senegal", lat: 14.50, lng: -14.45, languages: ["Fransk", "Wolof"] },
  { name: "Sydafrika", lat: -30.56, lng: 22.94, languages: ["Afrikaans", "Engelsk", "Zulu"] },
  { name: "Mozambique", lat: -18.67, lng: 35.53, languages: ["Portugisisk"] },
  { name: "Angola", lat: -11.20, lng: 17.87, languages: ["Portugisisk"] },
  { name: "Cameroun", lat: 7.37, lng: 12.35, languages: ["Fransk", "Engelsk"] },
  { name: "Elfenbenskysten", lat: 7.54, lng: -5.55, languages: ["Fransk"] },
  { name: "Mali", lat: 17.57, lng: -4.00, languages: ["Fransk", "Bambara"] },
  { name: "Burkina Faso", lat: 12.24, lng: -1.56, languages: ["Fransk"] },
  { name: "Niger", lat: 17.61, lng: 8.08, languages: ["Fransk", "Hausa"] },
  { name: "Tchad", lat: 15.45, lng: 18.73, languages: ["Fransk", "Arabisk"] },
  { name: "USA", lat: 37.09, lng: -95.71, languages: ["Engelsk", "Spansk"] },
  { name: "Canada", lat: 56.13, lng: -106.35, languages: ["Engelsk", "Fransk"] },
  { name: "Mexico", lat: 23.63, lng: -102.55, languages: ["Spansk"] },
  { name: "Brasilien", lat: -14.24, lng: -51.93, languages: ["Portugisisk"] },
  { name: "Argentina", lat: -38.42, lng: -63.62, languages: ["Spansk"] },
  { name: "Colombia", lat: 4.57, lng: -74.30, languages: ["Spansk"] },
  { name: "Peru", lat: -9.19, lng: -75.02, languages: ["Spansk", "Quechua"] },
  { name: "Chile", lat: -35.68, lng: -71.54, languages: ["Spansk"] },
  { name: "Cuba", lat: 21.52, lng: -77.78, languages: ["Spansk"] },
  { name: "Australien", lat: -25.27, lng: 133.78, languages: ["Engelsk"] },
  { name: "New Zealand", lat: -40.90, lng: 174.89, languages: ["Engelsk", "Maori"] },
  { name: "Tibet", lat: 29.65, lng: 91.10, languages: ["Tibetansk"] },
  { name: "Usbekistan", lat: 41.38, lng: 64.59, languages: ["Usbekisk"] },
  { name: "Kasakhstan", lat: 48.02, lng: 66.92, languages: ["Kasakhisk", "Russisk"] },
  { name: "Tadsjikistan", lat: 38.86, lng: 71.28, languages: ["Tadsjikisk"] },
  { name: "Turkmenistan", lat: 38.97, lng: 59.56, languages: ["Turkmensk"] },
  { name: "Kirgisistan", lat: 41.20, lng: 74.77, languages: ["Kirgisisk", "Russisk"] },
];

export const allLanguages: string[] = Array.from(
  new Set(countryData.flatMap((c) => c.languages))
).sort((a, b) => a.localeCompare(b, "da"));

export const languageCountryMap: Record<string, string[]> = {};
for (const c of countryData) {
  for (const lang of c.languages) {
    if (!languageCountryMap[lang]) languageCountryMap[lang] = [];
    languageCountryMap[lang].push(c.name);
  }
}

// Mercator projection
function project(lat: number, lng: number): { x: number; y: number } {
  const x = ((lng + 180) / 360) * 100;
  const latRad = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = 50 - (mercN / Math.PI) * 50;
  return { x, y };
}

interface WorldMapProps {
  focusLang?: string | null;
}

export function Globe({ focusLang }: WorldMapProps) {
  const [tooltip, setTooltip] = useState<{ name: string; langs: string[]; x: number; y: number } | null>(null);

  const highlighted = focusLang
    ? new Set(countryData.filter((c) => c.languages.includes(focusLang)).map((c) => c.name))
    : null;

  return (
    <div className="relative w-full max-w-[900px] mx-auto">
      <div className="relative bg-gradient-to-b from-[#e8f1f8] to-[#d5e8f0] rounded-2xl overflow-hidden border border-gray-200/60 shadow-sm">
        {/* Grid lines */}
        <svg
          viewBox="0 0 100 62"
          className="w-full"
          style={{ minHeight: 300 }}
        >
          {/* Ocean background */}
          <rect x="0" y="0" width="100" height="62" fill="none" />

          {/* Latitude lines */}
          {[-60, -40, -20, 0, 20, 40, 60].map((lat) => {
            const { y } = project(lat, 0);
            return (
              <line
                key={`lat-${lat}`}
                x1="0"
                y1={y}
                x2="100"
                y2={y}
                stroke="#b8d4e8"
                strokeWidth="0.15"
                strokeDasharray="0.5,0.5"
              />
            );
          })}

          {/* Longitude lines */}
          {[-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150].map((lng) => {
            const { x } = project(0, lng);
            return (
              <line
                key={`lng-${lng}`}
                x1={x}
                y1="0"
                x2={x}
                y2="62"
                stroke="#b8d4e8"
                strokeWidth="0.15"
                strokeDasharray="0.5,0.5"
              />
            );
          })}

          {/* Country dots */}
          {countryData.map((country) => {
            const { x, y } = project(country.lat, country.lng);
            const isHighlighted = highlighted ? highlighted.has(country.name) : false;
            const isDefault = !highlighted;

            return (
              <g key={country.name}>
                {/* Pulse ring for highlighted */}
                {isHighlighted && (
                  <circle
                    cx={x}
                    cy={y}
                    r="1.8"
                    fill="none"
                    stroke="var(--brand-accent)"
                    strokeWidth="0.2"
                    opacity="0.4"
                  >
                    <animate
                      attributeName="r"
                      from="0.8"
                      to="2.5"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                <circle
                  cx={x}
                  cy={y}
                  r={isHighlighted ? 0.9 : isDefault ? 0.55 : 0.4}
                  fill={
                    isHighlighted
                      ? "var(--brand-primary)"
                      : isDefault
                      ? "var(--brand-accent)"
                      : "#c0cdd8"
                  }
                  opacity={highlighted && !isHighlighted ? 0.3 : 1}
                  className="transition-all duration-300 cursor-pointer"
                  onMouseEnter={(e) => {
                    const rect = (e.target as SVGCircleElement).ownerSVGElement?.getBoundingClientRect();
                    if (rect) {
                      setTooltip({
                        name: country.name,
                        langs: country.languages,
                        x: ((x / 100) * rect.width) + rect.left,
                        y: ((y / 62) * rect.height) + rect.top,
                      });
                    }
                  }}
                  onMouseLeave={() => setTooltip(null)}
                />
              </g>
            );
          })}

          {/* Denmark highlight ring */}
          {!highlighted && (() => {
            const dk = project(56.26, 9.50);
            return (
              <circle
                cx={dk.x}
                cy={dk.y}
                r="1.5"
                fill="none"
                stroke="var(--brand-primary)"
                strokeWidth="0.25"
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="0.8"
                  to="2.2"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            );
          })()}
        </svg>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 px-3 py-2 bg-white rounded-lg shadow-lg border border-gray-200 pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y - 45,
            transform: "translateX(-50%)",
          }}
        >
          <p className="text-sm font-semibold text-gray-900">{tooltip.name}</p>
          <p className="text-xs text-gray-500">{tooltip.langs.join(", ")}</p>
        </div>
      )}
    </div>
  );
}
