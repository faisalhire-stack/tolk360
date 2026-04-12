"use client";

const logos = [
  // Regioner
  "Region Hovedstaden",
  "Region Sjælland",
  "Region Syddanmark",
  "Region Midtjylland",
  "Region Nordjylland",
  // Kommuner
  "Silkeborg Kommune",
  "Herning Kommune",
  "Aarhus Kommune",
  "Københavns Kommune",
  "Odense Kommune",
  "Aalborg Kommune",
  "Randers Kommune",
  "Vejle Kommune",
  "Horsens Kommune",
  "Esbjerg Kommune",
  "Fredericia Kommune",
  "Viborg Kommune",
  "Kolding Kommune",
  "Roskilde Kommune",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-20 px-8 min-w-[200px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
      <span className="text-base font-semibold text-gray-500 whitespace-nowrap tracking-wide">
        {name}
      </span>
    </div>
  );
}

export function LogoCarousel() {
  return (
    <section className="py-14 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brand-primary)]">
          Betroet af offentlige myndigheder i hele Danmark
        </h2>
        <p className="mt-4 text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
          Vi samarbejder med kommuner, regioner, hospitaler, advokater og andre offentlige og private aktører.
        </p>
      </div>

      {/* Carousel row 1 - scrolls left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-scroll-left">
          <div className="flex shrink-0">
            {logos.slice(0, 11).map((name) => (
              <LogoItem key={name} name={name} />
            ))}
          </div>
          <div className="flex shrink-0" aria-hidden="true">
            {logos.slice(0, 11).map((name) => (
              <LogoItem key={`dup-${name}`} name={name} />
            ))}
          </div>
        </div>
      </div>

      {/* Carousel row 2 - scrolls right */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-scroll-right">
          <div className="flex shrink-0">
            {logos.slice(11).map((name) => (
              <LogoItem key={name} name={name} />
            ))}
          </div>
          <div className="flex shrink-0" aria-hidden="true">
            {logos.slice(11).map((name) => (
              <LogoItem key={`dup-${name}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
