"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const tolkningItems = [
  { label: "Fremmødetolkning", href: "/tolkning/fremmodetolkning" },
  { label: "Telefontolkning", href: "/tolkning/telefontolkning" },
  { label: "Videotolkning", href: "/tolkning/videotolkning" },
  { label: "Konferencetolkning", href: "/tolkning/konferencetolkning" },
  { label: "Erhvervstolkning", href: "/tolkning/erhvervstolkning" },
  { label: "Tegnsprogstolkning", href: "/tolkning/tegnsprogstolkning" },
];

const brancherItems = [
  { label: "Jura og retsvæsen", href: "/brancher/jura" },
  { label: "Medicin og sundhed", href: "/brancher/medicin" },
  { label: "Økonomi og finans", href: "/brancher/oekonomi" },
  { label: "Teknik og ingeniørfag", href: "/brancher/teknik" },
];

const oversaettelseItems = [
  { label: "Juridisk oversættelse", href: "/oversaettelse/juridisk" },
  { label: "Medicinsk oversættelse", href: "/oversaettelse/medicinsk" },
  { label: "Teknisk oversættelse", href: "/oversaettelse/teknisk" },
  { label: "Marketing-oversættelse", href: "/oversaettelse/marketing" },
  { label: "Korrekturlæsning", href: "/oversaettelse/korrekturlaesning" },
  { label: "DTP", href: "/oversaettelse/dtp" },
  { label: "Voiceover", href: "/oversaettelse/voiceover" },
  { label: "Undertekstning", href: "/oversaettelse/undertekstning" },
];

const navItems = [
  { label: "Tolkning", href: "/tolkning", children: tolkningItems },
  { label: "Oversættelse", href: "/oversaettelse", children: oversaettelseItems },
  { label: "Brancher", href: "/brancher", children: brancherItems },
  { label: "Mentorer", href: "/mentorer" },
  { label: "Sprog", href: "/sprog" },
  { label: "Vores tolke", href: "/vores-tolke" },
  { label: "Om os", href: "/om-os" },
  { label: "Bliv tolk", href: "/bliv-tolk" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-b-lg shadow-lg border border-gray-100 py-2 z-50">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--brand-light)] hover:text-[var(--brand-primary)] transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Tolk360"
              width={140}
              height={36}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--brand-primary)] transition-colors rounded-md hover:bg-gray-50"
                >
                  {item.label}
                  {item.children && (
                    <svg className="inline-block w-3.5 h-3.5 ml-1 -mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </Link>
                {item.children && openDropdown === item.label && (
                  <DropdownMenu items={item.children} />
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[var(--brand-primary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-[var(--brand-light)] hover:text-[var(--brand-primary)] rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 text-sm text-gray-600 hover:text-[var(--brand-primary)]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
