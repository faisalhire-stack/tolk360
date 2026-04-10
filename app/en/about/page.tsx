import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";

export const metadata: Metadata = {
  title: "About Us | Tolk360",
  description:
    "Tolk360 has been in the market since 2004. With over 7,000 interpreters and offices in Aarhus and Copenhagen, we deliver professional language solutions across Denmark.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Tolk360"
        description="One of Denmark's most experienced interpreting and translation agencies – in the market since 2004."
      />
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-6">
              Our history
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Tolk360 originates from former interpreting companies and a group of professional interpreters with many years of experience in the industry. We have been in the market since 2004 and over two decades have built one of Denmark&apos;s largest networks of language professionals.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Today we have over 7,000 interpreters connected and deliver interpreting, translation, subtitling, mentors and contact persons in all the world&apos;s languages. We cover all of Denmark from our offices in Aarhus and Copenhagen.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-10">
              We distinguish ourselves by exclusively working with trained and language-tested interpreters, and by offering a wide range of services covering all linguistic needs – from urgent phone interpreting to specialised legal translation and long-term mentor support.
            </p>

            {/* Key figures */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-5 rounded-xl bg-[var(--brand-light)]">
                <span className="block text-3xl font-bold text-[var(--brand-primary)]">2004</span>
                <span className="text-sm text-[var(--text-muted)]">Founded</span>
              </div>
              <div className="text-center p-5 rounded-xl bg-[var(--brand-light)]">
                <span className="block text-3xl font-bold text-[var(--brand-primary)]">7,000+</span>
                <span className="text-sm text-[var(--text-muted)]">Interpreters</span>
              </div>
              <div className="text-center p-5 rounded-xl bg-[var(--brand-light)]">
                <span className="block text-3xl font-bold text-[var(--brand-primary)]">All</span>
                <span className="text-sm text-[var(--text-muted)]">Languages</span>
              </div>
              <div className="text-center p-5 rounded-xl bg-[var(--brand-light)]">
                <span className="block text-3xl font-bold text-[var(--brand-primary)]">2</span>
                <span className="text-sm text-[var(--text-muted)]">Offices in DK</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-6">
              What we stand for
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Quality",
                  text: "We set high standards for all our interpreters and translators. Education, experience and specialisation are the foundation.",
                },
                {
                  title: "Reliability",
                  text: "When we agree on an interpreting assignment, the interpreter shows up – prepared and professional. Our clients can count on us.",
                },
                {
                  title: "Breadth",
                  text: "From interpreting and translation to mentors, subtitling and contact persons – we cover all linguistic needs.",
                },
                {
                  title: "Proximity",
                  text: "We know our interpreters and clients personally. This results in better matches and better outcomes.",
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

            {/* Offices */}
            <h2 className="text-2xl font-bold text-[var(--brand-primary)] mt-16 mb-6">
              Our offices
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-[var(--brand-light)] border border-[var(--brand-accent)]/20">
                <h3 className="text-lg font-semibold text-[var(--brand-primary)] mb-2">
                  Head Office – Aarhus
                </h3>
                <p className="text-[var(--text-muted)]">Soevej 1</p>
                <p className="text-[var(--text-muted)]">8600 Silkeborg</p>
                <p className="text-[var(--text-muted)] mt-2">Tel: +45 70 60 40 60</p>
                <p className="text-[var(--text-muted)]">Email: mail@tolk360.dk</p>
              </div>
              <div className="p-6 rounded-xl bg-[var(--brand-light)] border border-[var(--brand-accent)]/20">
                <h3 className="text-lg font-semibold text-[var(--brand-primary)] mb-2">
                  Office – Copenhagen
                </h3>
                <p className="text-[var(--text-muted)]">Tel: +45 70 60 40 60</p>
                <p className="text-[var(--text-muted)]">Email: mail@tolk360.dk</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
