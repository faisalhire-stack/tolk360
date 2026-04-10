import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Contact | Tolk360",
  description:
    "Contact Tolk360 – we are ready to help you with interpreting, translation and language consultants. Call or write to us.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        description="We are ready to help you. Contact us for a no-obligation quote or to book an interpreter."
      />
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-6">Contact details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] text-[var(--brand-accent)] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-[var(--text-muted)]">Soevej 1, 8600 Silkeborg, Denmark</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] text-[var(--brand-accent)] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-[var(--text-muted)]"><a href="tel:+4570604060" className="hover:text-[var(--brand-accent)]">+45 70 60 40 60</a></p>
                    <p className="text-sm text-[var(--text-muted)]">Mon–Fri 08:00–16:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] text-[var(--brand-accent)] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-[var(--text-muted)]"><a href="mailto:mail@tolk360.dk" className="hover:text-[var(--brand-accent)]">mail@tolk360.dk</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-[var(--bg-light)] rounded-xl p-8 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Get a quote</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="org" className="block text-sm font-medium text-gray-700 mb-1">Organisation / Company</label>
                  <input type="text" id="org" name="org" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">What do you need?</label>
                  <select id="service" name="service" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent bg-white">
                    <option value="">Select service</option>
                    <option value="onsite">Onsite interpreting</option>
                    <option value="phone">Phone interpreting</option>
                    <option value="video">Video interpreting</option>
                    <option value="conference">Conference interpreting</option>
                    <option value="sign-language">Sign language interpreting</option>
                    <option value="translation">Translation</option>
                    <option value="mentors">Mentors / contact persons</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent resize-y" placeholder="Describe your needs – language, date, type of interpreting/translation etc." />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-base font-semibold rounded-lg bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-accent)] transition-colors"
                >
                  Send enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
