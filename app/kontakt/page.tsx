import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt Tolk360 – vi er klar til at hjælpe dig med tolkning, oversættelse og sprogkonsulenter. Ring eller skriv til os.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Kontakt os"
        description="Vi er klar til at hjælpe dig. Kontakt os for et uforpligtende tilbud eller for at bestille en tolk."
      />
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kontaktinfo */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-6">Kontaktoplysninger</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] text-[var(--brand-accent)] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-[var(--text-muted)]">Søvej 1, 8600 Silkeborg</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] text-[var(--brand-accent)] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefon</h3>
                    <p className="text-[var(--text-muted)]"><a href="tel:+4570604060" className="hover:text-[var(--brand-accent)]">+45 70 60 40 60</a></p>
                    <p className="text-sm text-[var(--text-muted)]">Man–fre 08:00–16:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] text-[var(--brand-accent)] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">E-mail</h3>
                    <p className="text-[var(--text-muted)]"><a href="mailto:mail@tolk360.dk" className="hover:text-[var(--brand-accent)]">mail@tolk360.dk</a></p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mt-10 mb-4">E-mail</h3>
              <div className="p-3 rounded-lg bg-[var(--bg-light)] text-sm">
                <a href="mailto:mail@tolk360.dk" className="text-[var(--brand-accent)] hover:underline font-medium">mail@tolk360.dk</a>
                <p className="text-[var(--text-muted)] mt-1">Alle henvendelser sendes til samme adresse.</p>
              </div>
            </div>

            {/* Kontaktformular */}
            <div className="bg-[var(--bg-light)] rounded-xl p-8 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Få et tilbud</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Navn</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="org" className="block text-sm font-medium text-gray-700 mb-1">Organisation / virksomhed</label>
                  <input type="text" id="org" name="org" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Hvad har du brug for?</label>
                  <select id="service" name="service" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent bg-white">
                    <option value="">Vælg ydelse</option>
                    <option value="fremmodetolkning">Fremmødetolkning</option>
                    <option value="telefontolkning">Telefontolkning</option>
                    <option value="videotolkning">Videotolkning</option>
                    <option value="konferencetolkning">Konferencetolkning</option>
                    <option value="tegnsprogstolkning">Tegnsprogstolkning</option>
                    <option value="oversaettelse">Oversættelse</option>
                    <option value="mentorer">Mentorer / kontaktpersoner</option>
                    <option value="andet">Andet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Besked</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent resize-y" placeholder="Beskriv dit behov – sprog, dato, type tolkning/oversættelse mv." />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-base font-semibold rounded-lg bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-accent)] transition-colors"
                >
                  Send forespørgsel
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
