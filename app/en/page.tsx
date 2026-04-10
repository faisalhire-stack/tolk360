import type { Metadata } from "next";
import Link from "next/link";
import { SpeechBubbles } from "../components/SpeechBubbles";
import { TrustLogos } from "../components/TrustLogos";
import { LogoCarousel } from "../components/LogoCarousel";

export const metadata: Metadata = {
  title: "Tolk360 – Professional Interpreters and Translators in Denmark",
  description:
    "Tolk360 provides professional interpreters, translators, mentors and contact persons for municipalities, regions, hospitals and lawyers across Denmark. Fully trained and language-tested.",
  keywords: [
    "interpreter agency Denmark",
    "professional interpreter",
    "translation services",
    "interpreting Denmark",
    "video interpreting",
    "onsite interpreting",
    "phone interpreting",
    "sign language interpreting",
    "subtitling",
    "mentor contact person",
  ],
  openGraph: {
    title: "Tolk360 – Professional Interpreters and Translators",
    description:
      "Interpreting, translation and language consultants for public authorities and private companies across Denmark.",
    url: "https://tolk360.dk/en",
    siteName: "Tolk360",
    locale: "en_GB",
    type: "website",
  },
};

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--brand-primary)] via-[#1a2d52] to-[#162444] text-white overflow-hidden">
      <SpeechBubbles />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Your dedicated contact person – from booking to completion
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl">
            Tolk360 is one of Denmark&apos;s most experienced interpreter agencies with over 7,000 interpreters. We deliver interpreting, translation and mentoring – and you always get one dedicated contact person who knows your case. Since 2004.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://tolkeplan.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-white text-[var(--brand-primary)] hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book an interpreter
            </a>
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Get a quote
            </Link>
          </div>
          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap gap-8 sm:gap-12 text-sm">
            <div>
              <span className="block text-3xl font-bold">All</span>
              <span className="text-white/70">Languages</span>
            </div>
            <div>
              <span className="block text-3xl font-bold">7,000+</span>
              <span className="text-white/70">Interpreters</span>
            </div>
            <div>
              <span className="block text-3xl font-bold">20+</span>
              <span className="text-white/70">Years experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Onsite Interpreting",
    description:
      "A professional interpreter physically present at meetings, court hearings, medical appointments and other situations where personal presence is essential.",
    href: "/tolkning/fremmodetolkning",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Phone Interpreting",
    description:
      "Fast and effective interpreting over the phone – available at short notice for urgent needs and scheduled conversations.",
    href: "/tolkning/telefontolkning",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: "Video Interpreting",
    description:
      "Interpreting via video with picture and sound – combining the flexibility of phone interpreting with personal contact.",
    href: "/tolkning/videotolkning",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9.75a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Translation",
    description:
      "Legal, medical, technical and marketing translation carried out by specialised, trained translators.",
    href: "/oversaettelse",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Sign Language",
    description:
      "Certified sign language interpreters with short delivery times. We have a large network and can provide interpreters faster than most.",
    href: "/tolkning/tegnsprogstolkning",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3.15M10.05 4.575a1.575 1.575 0 013.15 0v3.15M10.05 4.575v3.15M3.75 7.725h16.5M3.75 7.725a1.575 1.575 0 01-1.575-1.575M3.75 7.725v8.55a4.5 4.5 0 004.5 4.5h7.5a4.5 4.5 0 004.5-4.5v-8.55M20.25 7.725a1.575 1.575 0 001.575-1.575M13.2 4.575v3.15" />
      </svg>
    ),
  },
  {
    title: "Mentors",
    description:
      "Multilingual mentors and contact persons who support integration, guidance and communication across languages.",
    href: "/mentorer",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brand-primary)]">
            Our services
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-lg">
            We deliver professional language solutions tailored to your needs – from urgent phone interpreting to specialised legal translation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group p-6 rounded-xl border border-gray-100 hover:border-[var(--brand-accent)] hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--brand-light)] text-[var(--brand-accent)] flex items-center justify-center mb-4 group-hover:bg-[var(--brand-accent)] group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    {
      title: "Fully trained interpreters",
      description:
        "All our interpreters are trained and language-tested. We set high standards for qualifications so you always receive a professional interpreting service.",
    },
    {
      title: "Industry-specific expertise",
      description:
        "Our interpreters and translators specialise in legal, medical, technical and social interpreting.",
    },
    {
      title: "Fast response time",
      description:
        "We can provide interpreters at short notice – even for urgent situations. Call us and we will find a solution.",
    },
    {
      title: "Nationwide coverage",
      description:
        "We cover all of Denmark with onsite interpreting, video interpreting and phone interpreting – wherever you are located.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[var(--bg-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brand-primary)]">
            Why choose Tolk360?
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-lg">
            We are an interpreting and translation agency focused on quality, reliability and specialisation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--brand-accent)] text-white flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{reason.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-primary)] text-white overflow-hidden">
      <SpeechBubbles />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Need an interpreter or translator?
        </h2>
        <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto">
          Contact us today for a no-obligation quote, or book directly if you already have a framework agreement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://tolkeplan.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-white text-[var(--brand-primary)] hover:bg-gray-100 transition-colors shadow-lg"
          >
            Book an interpreter
          </a>
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function EnglishHomePage() {
  return (
    <>
      <HeroSection />
      <TrustLogos />
      <ServicesSection />
      <WhyChooseSection />
      <LogoCarousel />
      <CTASection />
    </>
  );
}
