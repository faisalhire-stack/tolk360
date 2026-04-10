import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Services | Tolk360",
  description:
    "Tolk360 offers interpreting, translation, subtitling and mentor services across Denmark. Onsite, phone and video interpreting in all languages.",
};

const interpretingServices = [
  {
    title: "Onsite Interpreting",
    description:
      "A professional interpreter physically present at your meeting, court hearing, medical consultation or other appointment. We cover all of Denmark.",
    href: "/tolkning/fremmodetolkning",
  },
  {
    title: "Phone Interpreting",
    description:
      "Fast and effective interpreting over the phone. Available at short notice for both urgent needs and planned conversations.",
    href: "/tolkning/telefontolkning",
  },
  {
    title: "Video Interpreting",
    description:
      "Interpreting via video with picture and sound – combining the flexibility of phone interpreting with the personal touch of face-to-face contact.",
    href: "/tolkning/videotolkning",
  },
  {
    title: "Conference Interpreting",
    description:
      "Simultaneous interpreting for conferences, seminars and larger events with professional equipment and experienced interpreters.",
    href: "/tolkning/konferencetolkning",
  },
  {
    title: "Sign Language Interpreting",
    description:
      "Certified sign language interpreters with short delivery times. We have a large network ensuring quick availability.",
    href: "/tolkning/tegnsprogstolkning",
  },
  {
    title: "Business Interpreting",
    description:
      "Interpreting for business meetings, negotiations, audits and company visits. Our interpreters understand professional terminology.",
    href: "/tolkning/erhvervstolkning",
  },
];

const translationServices = [
  {
    title: "Legal Translation",
    description: "Contracts, court documents, patents and other legal texts translated by specialised legal translators.",
    href: "/oversaettelse/juridisk",
  },
  {
    title: "Medical Translation",
    description: "Patient records, clinical studies, pharmaceutical documentation and other medical texts.",
    href: "/oversaettelse/medicinsk",
  },
  {
    title: "Technical Translation",
    description: "Manuals, technical specifications, engineering documentation and IT texts.",
    href: "/oversaettelse/teknisk",
  },
  {
    title: "Marketing Translation",
    description: "Brochures, websites, campaigns and marketing materials adapted for the target audience.",
    href: "/oversaettelse/marketing",
  },
];

const otherServices = [
  {
    title: "Subtitling",
    description:
      "Professional subtitling of video content in all languages. We deliver accurate subtitles with correct timing.",
    href: "/oversaettelse/undertekstning",
  },
  {
    title: "Voiceover",
    description:
      "Professional voiceover in multiple languages for videos, e-learning, presentations and other media.",
    href: "/oversaettelse/voiceover",
  },
  {
    title: "Mentors and Contact Persons",
    description:
      "Multilingual mentors and contact persons who support integration, guidance and cross-language communication for municipalities and institutions.",
    href: "/mentorer",
  },
  {
    title: "Proofreading",
    description:
      "Quality assurance and proofreading of translated or original texts by experienced language professionals.",
    href: "/oversaettelse/korrekturlaesning",
  },
];

function ServiceCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link
      href={href}
      className="group p-6 rounded-xl border border-gray-100 hover:border-[var(--brand-accent)] hover:shadow-lg transition-all bg-white"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[var(--brand-accent)] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[var(--text-muted)] leading-relaxed">{description}</p>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Professional language solutions for public authorities and private companies across Denmark."
      />

      {/* Interpreting */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brand-primary)] mb-4">
            Interpreting
          </h2>
          <p className="text-[var(--text-muted)] text-lg mb-10 max-w-2xl">
            We offer interpreting in all languages – onsite, by phone or via video. All our interpreters are trained and language-tested.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interpretingServices.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Translation */}
      <section className="py-16 sm:py-24 bg-[var(--bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brand-primary)] mb-4">
            Translation
          </h2>
          <p className="text-[var(--text-muted)] text-lg mb-10 max-w-2xl">
            Specialised translation by trained translators with industry-specific expertise.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {translationServices.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brand-primary)] mb-4">
            Subtitling, Mentors and More
          </h2>
          <p className="text-[var(--text-muted)] text-lg mb-10 max-w-2xl">
            Beyond interpreting and translation, we offer a range of additional language services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-primary)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto">
            Contact us and we will help you find the right solution for your language needs.
          </p>
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-white text-[var(--brand-primary)] hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
