import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Brancher",
  description: "Tolk360 leverer specialiserede tolke og oversættere til jura, medicin, økonomi, teknik og mange andre brancher.",
};

const brancher = [
  {
    title: "Jura og retsvæsen",
    href: "/brancher/jura",
    description: "Retsmøder, advokater, politiafhøringer, asylsager og juridisk dokumentation. Vores tolke kender den juridiske terminologi og procedurer.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
      </svg>
    ),
  },
  {
    title: "Medicin og sundhed",
    href: "/brancher/medicin",
    description: "Hospitaler, læger, psykiatri, genoptræning og sundhedsvæsen. Præcis tolkning i situationer hvor misforståelser kan have alvorlige konsekvenser.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Økonomi og finans",
    href: "/brancher/oekonomi",
    description: "Banker, revisorer, forsikring og finansielle institutioner. Tolke med forståelse for økonomisk terminologi og finansielle processer.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Teknik og ingeniørfag",
    href: "/brancher/teknik",
    description: "Industri, bygge og anlæg, IT og tekniske virksomheder. Tolke og oversættere med teknisk baggrund og terminologikendskab.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.06a1.5 1.5 0 010-2.58l5.1-3.06a1.5 1.5 0 011.5 0l5.1 3.06a1.5 1.5 0 010 2.58l-5.1 3.06a1.5 1.5 0 01-1.5 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5 4.5 7.5-4.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 16.5l7.5 4.5 7.5-4.5" />
      </svg>
    ),
  },
];

export default function BrancherPage() {
  return (
    <>
      <PageHero
        title="Brancher vi betjener"
        description="Vi leverer specialiserede tolke og oversættere med faglig ekspertise inden for din branche."
      />
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {brancher.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="group p-8 rounded-xl border border-gray-100 hover:border-[var(--brand-accent)] hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--brand-light)] text-[var(--brand-accent)] flex items-center justify-center mb-5 group-hover:bg-[var(--brand-accent)] group-hover:text-white transition-colors">
                  {b.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[var(--brand-accent)]">
                  {b.title}
                </h2>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{b.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--brand-accent)]">
                  Læs mere
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
