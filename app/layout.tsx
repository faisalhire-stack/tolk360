import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { ChatWidget } from "./components/ChatWidget";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tolk360 – Professionelle tolke og oversættere i hele Danmark",
    template: "%s | Tolk360",
  },
  description:
    "Tolk360 leverer professionelle tolke, oversættere, mentorer og kontaktpersoner til kommuner, regioner, hospitaler og advokater. Fuldt uddannede og sprogtestede.",
  keywords: [
    "tolkebureau",
    "professionel tolk",
    "oversættelse",
    "tolkning",
    "rammeaftale tolkning",
    "tolk Aarhus",
    "tolk København",
    "tolk Silkeborg",
    "tolk Danmark",
    "arabisk tolk",
    "somalisk tolk",
    "tyrkisk tolk",
    "farsi tolk",
    "dari tolk",
    "kurdisk tolk",
    "polsk tolk",
    "ukrainsk tolk",
    "videotolkning",
    "fremmødetolkning",
    "telefontolkning",
    "tegnsprogstolkning",
    "undertekstning",
    "mentor kontaktperson",
  ],
  openGraph: {
    title: "Tolk360 – Professionelle tolke og oversættere",
    description:
      "Tolkning, oversættelse og sprogkonsulenter til offentlige myndigheder og private virksomheder i hele Danmark.",
    url: "https://tolk360.dk",
    siteName: "Tolk360",
    locale: "da_DK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="google-site-verification" content="REPLACE_WITH_VERIFICATION_CODE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Tolk360",
              description:
                "Professionelle tolke, oversættere, mentorer og kontaktpersoner til kommuner, regioner, hospitaler og advokater i hele Danmark. På markedet siden 2004.",
              url: "https://tolk360.dk",
              telephone: "+45 70 60 40 60",
              email: "mail@tolk360.dk",
              foundingDate: "2004",
              numberOfEmployees: { "@type": "QuantitativeValue", value: "7000+" },
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Søvej 1",
                  addressLocality: "Silkeborg",
                  postalCode: "8600",
                  addressCountry: "DK",
                },
              ],
              areaServed: { "@type": "Country", name: "Denmark" },
              serviceType: [
                "Tolkning",
                "Oversættelse",
                "Fremmødetolkning",
                "Telefontolkning",
                "Videotolkning",
                "Konferencetolkning",
                "Tegnsprogstolkning",
                "Undertekstning",
                "Mentorer",
                "Kontaktpersoner",
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "16:00",
              },
              sameAs: [
                "https://www.linkedin.com/company/tolk360",
                "https://www.facebook.com/tolk360",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <ChatWidget />
      </body>
    </html>
  );
}
