"use client";

import Link from "next/link";
import { Globe, allLanguages } from "../sprog/globe";

export function HomeGlobe() {
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
            <p className="text-white/60 mb-8">
              Vores netværk spænder fra arabisk og somali til polsk, ukrainsk og
              tegnsprog. Vi finder altid den rette tolk.
            </p>
            <Link
              href="/sprog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--brand-accent)] text-white font-semibold hover:brightness-110 transition-all"
            >
              Se alle sprog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="flex justify-center">
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
}
