"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Globe, allLanguages, languageCountryMap } from "./globe";
import { SpeechBubbles } from "../components/SpeechBubbles";

export function SprogContent() {
  const [search, setSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return allLanguages;
    const q = search.toLowerCase();
    return allLanguages.filter((l) => l.toLowerCase().includes(q));
  }, [search]);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--brand-primary)] via-[#1a2d52] to-[#162444] text-white py-16 sm:py-20 overflow-hidden">
        <SpeechBubbles />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Alle verdens sprog
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Tolk360 tilbyder tolkning og oversættelse på alle sprog. Uanset
            hvilket sprog du har brug for – vi finder den rette tolk eller
            oversætter.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="max-w-xl mx-auto mb-12">
            <label htmlFor="sprogSearch" className="sr-only">
              Søg efter sprog
            </label>
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                id="sprogSearch"
                type="text"
                placeholder="Søg efter sprog – fx arabisk, somali, polsk..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedLang(null);
                }}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent shadow-sm"
              />
            </div>
            <p className="mt-3 text-center text-sm text-[var(--text-muted)]">
              Vi tilbyder tolkning og oversættelse på{" "}
              <span className="font-semibold text-[var(--brand-primary)]">
                {allLanguages.length}+ sprog
              </span>{" "}
              – og kan altid skaffe flere
            </p>
          </div>

          {/* Language grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-16">
            {filtered.map((lang) => (
              <button
                key={lang}
                onClick={() =>
                  setSelectedLang(selectedLang === lang ? null : lang)
                }
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
                  selectedLang === lang
                    ? "bg-[var(--brand-primary)] text-white shadow-md scale-[1.02]"
                    : "bg-[var(--bg-light)] text-gray-700 hover:bg-[var(--brand-light)] hover:text-[var(--brand-primary)] border border-gray-100"
                }`}
              >
                <span className="block">{lang}</span>
                {languageCountryMap[lang] && (
                  <span
                    className={`block text-xs mt-0.5 ${
                      selectedLang === lang
                        ? "text-white/70"
                        : "text-gray-400"
                    }`}
                  >
                    {languageCountryMap[lang].length === 1
                      ? languageCountryMap[lang][0]
                      : `${languageCountryMap[lang].length} lande`}
                  </span>
                )}
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[var(--text-muted)]">
                Ingen sprog fundet for &quot;{search}&quot;
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Kan du ikke finde dit sprog?{" "}
                <Link
                  href="/kontakt"
                  className="text-[var(--brand-accent)] hover:underline"
                >
                  Kontakt os
                </Link>{" "}
                – vi kan altid skaffe en tolk.
              </p>
            </div>
          )}

          {/* Selected language detail */}
          {selectedLang && languageCountryMap[selectedLang] && (
            <div className="mb-12 p-6 rounded-xl bg-[var(--brand-light)] border border-[var(--brand-accent)]/20">
              <h3 className="text-xl font-bold text-[var(--brand-primary)] mb-2">
                {selectedLang}
              </h3>
              <p className="text-[var(--text-muted)] mb-3">
                Vi tilbyder professionel tolkning og oversættelse på{" "}
                {selectedLang.toLowerCase()}. Vores tolke er uddannede og
                specialiserede.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                <span className="font-medium text-gray-700">
                  Lande hvor sproget tales:{" "}
                </span>
                {languageCountryMap[selectedLang].join(", ")}
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-accent)] transition-colors"
                >
                  Bestil {selectedLang.toLowerCase()}-tolk
                </Link>
                <a
                  href="tel:+4570604060"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-white transition-colors"
                >
                  Ring: +45 70 60 40 60
                </a>
              </div>
            </div>
          )}

          {/* Globe section */}
          <div className="mt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brand-primary)] text-center mb-4">
              Vi dækker hele verden
            </h2>
            <p className="text-center text-[var(--text-muted)] text-lg mb-8 max-w-2xl mx-auto">
              {selectedLang
                ? `Se hvor ${selectedLang.toLowerCase()} tales på verdenskortet`
                : "Klik på et sprog ovenfor for at se det på globussen – eller drej den rundt"}
            </p>
            <Globe focusLang={selectedLang} />
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Kan du ikke finde dit sprog?
            </h3>
            <p className="text-[var(--text-muted)] mb-6 max-w-lg mx-auto">
              Listen viser de mest efterspurgte sprog, men vi kan skaffe tolke
              og oversættere på alle verdens sprog. Kontakt os med dit behov.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-accent)] transition-colors"
            >
              Kontakt os
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
