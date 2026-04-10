"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/Region M.png", alt: "Region Midtjylland" },
  { src: "/logos/RegionN.png", alt: "Region Nordjylland" },
  { src: "/logos/Region Syd.png", alt: "Region Syddanmark" },
  { src: "/logos/Region SJ.png", alt: "Region Sjælland" },
  { src: "/logos/RegionH.png", alt: "Region Hovedstaden" },
  { src: "/logos/RingSkjK.png", alt: "Ringkøbing-Skjern Kommune" },
  { src: "/logos/Frederiksberg.png", alt: "Frederiksberg Kommune" },
  { src: "/logos/Helsingoer.png", alt: "Helsingør Kommune" },
  { src: "/logos/Ballerup.png", alt: "Ballerup Kommune" },
  { src: "/logos/Hvidovre.png", alt: "Hvidovre Kommune" },
  { src: "/logos/Gladsaxe.png", alt: "Gladsaxe Kommune" },
  { src: "/logos/Haderslev.png", alt: "Haderslev Kommune" },
  { src: "/logos/Lyngby-Taarbaek.png", alt: "Lyngby-Taarbæk Kommune" },
  { src: "/logos/Hilleroed.png", alt: "Hillerød Kommune" },
  { src: "/logos/Gribskov.png", alt: "Gribskov Kommune" },
];

function LogoItem({ logo }: { logo: { src: string; alt: string } }) {
  return (
    <div className="flex items-center justify-center h-12 px-8 min-w-[160px] shrink-0">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={120}
        height={40}
        className="h-8 sm:h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
}

export function TrustLogos() {
  return (
    <section className="py-6 bg-gray-50 border-b border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Et udpluk af vores kunder
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
          <div className="flex shrink-0">
            {logos.map((logo) => (
              <LogoItem key={logo.alt} logo={logo} />
            ))}
          </div>
          <div className="flex shrink-0" aria-hidden="true">
            {logos.map((logo) => (
              <LogoItem key={`dup-${logo.alt}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
