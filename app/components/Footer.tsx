import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[var(--brand-primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kolonne 1: Om Tolk360 */}
          <div>
            <Image
              src="/logo.png"
              alt="Tolk360"
              width={140}
              height={36}
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Professionelle tolke, oversættere, mentorer og kontaktpersoner til offentlige myndigheder og private virksomheder i hele Danmark.
            </p>
            <div className="text-sm text-white/80 space-y-1">
              <p>Søvej 1, 8600 Silkeborg</p>
              <p>
                <a href="tel:+4570604060" className="hover:text-white">+45 70 60 40 60</a>
              </p>
              <p>Man–fre 08:00–16:00</p>
            </div>
          </div>

          {/* Kolonne 2: Ydelser */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Ydelser</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/tolkning" className="hover:text-white">Tolkning</Link></li>
              <li><Link href="/oversaettelse" className="hover:text-white">Oversættelse</Link></li>
              <li><Link href="/mentorer" className="hover:text-white">Mentorer og kontaktpersoner</Link></li>
              <li><Link href="/vores-tolke" className="hover:text-white">Vores tolke</Link></li>
              <li><Link href="/bliv-tolk" className="hover:text-white">Bliv tolk</Link></li>
            </ul>
          </div>

          {/* Kolonne 3: Kontakt */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Kontakt</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="mailto:mail@tolk360.dk" className="hover:text-white">mail@tolk360.dk</a></li>
              <li><a href="tel:+4570604060" className="hover:text-white">+45 70 60 40 60</a></li>
              <li>Man–fre 08:00–16:00</li>
            </ul>
          </div>

          {/* Kolonne 4: Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Information</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/om-os" className="hover:text-white">Om os</Link></li>
              <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
              <li><Link href="/persondatapolitik" className="hover:text-white">Persondatapolitik</Link></li>
              <li><Link href="/cookiepolitik" className="hover:text-white">Cookiepolitik</Link></li>
              <li><Link href="/handelsbetingelser" className="hover:text-white">Handelsbetingelser</Link></li>
            </ul>
          </div>
        </div>

        {/* Bund */}
        <div className="mt-10 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Tolk360. Alle rettigheder forbeholdes.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/tolk360" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/tolk360" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
