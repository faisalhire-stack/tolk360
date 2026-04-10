"use client";

import { useState } from "react";
import Link from "next/link";

const sprogListe = [
  "Afghansk/Dari", "Albansk", "Amharisk", "Arabisk", "Armenisk", "Azerbajdsjansk",
  "Bengali", "Bosnisk", "Bulgarsk", "Burmesisk", "Cebuano", "Dansk", "Engelsk",
  "Eritreansk/Tigrinya", "Estisk", "Farsi", "Filippinsk/Tagalog", "Finsk", "Fransk",
  "Georgisk", "Græsk", "Gujarati", "Hausa", "Hebraisk", "Hindi", "Indonesisk",
  "Islandsk", "Italiensk", "Japansk", "Kannada", "Kashmiri", "Kinesisk (Mandarin)",
  "Kinesisk (Kantonesisk)", "Koreansk", "Kroatisk", "Kurdisk (Kurmanci)",
  "Kurdisk (Sorani)", "Lettisk", "Litauisk", "Makedonsk", "Malaysisk", "Malayalam",
  "Mongolsk", "Nederlandsk", "Nepalesisk", "Norsk", "Oromo", "Pashto", "Persisk",
  "Polsk", "Portugisisk", "Punjabi", "Rumænsk", "Russisk", "Serbisk", "Singalesisk",
  "Slovakisk", "Slovensk", "Somali", "Spansk", "Svensk", "Swahili", "Tamilsk",
  "Telugu", "Thai", "Tibetansk", "Tjekkisk", "Tyrkisk", "Tysk", "Ukrainsk",
  "Ungarsk", "Urdu", "Uzbekisk", "Vietnamesisk",
];

const tolkningsTyper = [
  "Fremmødetolkning",
  "Telefontolkning",
  "Videotolkning",
  "Konferencetolkning",
  "Tegnsprogstolkning",
  "Telefonbesked tolkning",
];

const tider = [
  "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30",
  "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30",
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30",
];

export function TilbudForm() {
  const [step, setStep] = useState(1);
  const [type, setType] = useState<"tolkning" | "oversaettelse">("tolkning");
  const [kildesprog, setKildesprog] = useState("Dansk");
  const [maalsprog, setMaalsprog] = useState<string[]>([]);
  const [maalsprogSearch, setMaalsprogSearch] = useState("");
  const [showMaalsprogDropdown, setShowMaalsprogDropdown] = useState(false);
  const [dato, setDato] = useState("");
  const [tidStart, setTidStart] = useState("08:00");
  const [tidSlut, setTidSlut] = useState("09:00");
  const [tolkningsType, setTolkningsType] = useState("");
  const [kommentar, setKommentar] = useState("");
  const [filNavn, setFilNavn] = useState("");

  // Step 2
  const [navn, setNavn] = useState("");
  const [firma, setFirma] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [samtykke, setSamtykke] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const filteredSprog = sprogListe.filter(
    (s) =>
      s.toLowerCase().includes(maalsprogSearch.toLowerCase()) &&
      !maalsprog.includes(s)
  );

  const removeMaalsprog = (sprog: string) => {
    setMaalsprog((prev) => prev.filter((s) => s !== sprog));
  };

  const canProceed =
    maalsprog.length > 0 &&
    (type === "oversaettelse" || tolkningsType !== "");

  const canSubmit = firma.trim() !== "" && email.trim() !== "" && samtykke;

  const handleSubmit = () => {
    // Build mailto or form submission
    const subject = encodeURIComponent(
      `Tilbud – ${type === "tolkning" ? "Tolkning" : "Skriftlig oversættelse"}`
    );
    const body = encodeURIComponent(
      `Type: ${type === "tolkning" ? "Tolkning" : "Skriftlig oversættelse"}\n` +
        `Kildesprog: ${kildesprog}\n` +
        `Målsprog: ${maalsprog.join(", ")}\n` +
        (type === "tolkning"
          ? `Dato: ${dato}\nTid: ${tidStart} – ${tidSlut}\nTolkningstype: ${tolkningsType}\n`
          : `Fil: ${filNavn || "Ingen"}\n`) +
        `Kommentar: ${kommentar || "Ingen"}\n\n` +
        `--- Kontaktoplysninger ---\n` +
        `Navn: ${navn || "Ikke angivet"}\n` +
        `Firma: ${firma}\n` +
        `Email: ${email}\n` +
        `Telefon: ${telefon || "Ikke angivet"}\n`
    );
    window.location.href = `mailto:mail@tolk360.dk?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Tak for din forespørgsel!</h2>
        <p className="text-[var(--text-muted)] mb-6">
          Din mailklient er åbnet med forespørgslen. Send mailen, og vi vender tilbage hurtigst muligt.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-accent)] transition-colors"
        >
          Tilbage til forsiden
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex mb-8 rounded-lg overflow-hidden">
        <div
          className={`flex-1 py-3 text-center font-semibold text-sm ${
            step === 1
              ? "bg-[var(--brand-accent)] text-white"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-current mr-2 text-xs">
            1
          </span>
          Bestilling
        </div>
        <div
          className={`flex-1 py-3 text-center font-semibold text-sm ${
            step === 2
              ? "bg-[var(--brand-accent)] text-white"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-current mr-2 text-xs">
            2
          </span>
          Kontaktoplysninger
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          {/* Vælg type */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Vælg venligst
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  checked={type === "tolkning"}
                  onChange={() => setType("tolkning")}
                  className="w-4 h-4 text-[var(--brand-accent)]"
                />
                <span className={type === "tolkning" ? "font-medium text-[var(--brand-accent)]" : "text-gray-600"}>
                  Tolkning
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  checked={type === "oversaettelse"}
                  onChange={() => setType("oversaettelse")}
                  className="w-4 h-4 text-[var(--brand-accent)]"
                />
                <span className={type === "oversaettelse" ? "font-medium text-[var(--brand-accent)]" : "text-gray-600"}>
                  Skriftlig oversættelse
                </span>
              </label>
            </div>
          </div>

          <hr className="border-[var(--brand-accent)]" />

          {/* Kildesprog */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Kildesprog <span className="text-red-500">*</span>
            </label>
            <select
              value={kildesprog}
              onChange={(e) => setKildesprog(e.target.value)}
              className="w-full sm:w-48 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent"
            >
              {sprogListe.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Målsprog */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Målsprog <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {maalsprog.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--brand-light)] text-[var(--brand-primary)] text-sm font-medium"
                >
                  {s}
                  <button
                    type="button"
                    onClick={() => removeMaalsprog(s)}
                    className="hover:text-red-500 text-lg leading-none"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Søg sprog..."
              value={maalsprogSearch}
              onChange={(e) => {
                setMaalsprogSearch(e.target.value);
                setShowMaalsprogDropdown(true);
              }}
              onFocus={() => setShowMaalsprogDropdown(true)}
              onBlur={() => setTimeout(() => setShowMaalsprogDropdown(false), 200)}
              className="w-full sm:w-48 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent"
            />
            {showMaalsprogDropdown && filteredSprog.length > 0 && (
              <div className="absolute z-20 mt-1 w-full sm:w-48 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg">
                {filteredSprog.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      setMaalsprog((prev) => [...prev, s]);
                      setMaalsprogSearch("");
                      setShowMaalsprogDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-[var(--brand-light)] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Tolkning-specifik */}
          {type === "tolkning" && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">
                  Dato
                </label>
                <input
                  type="date"
                  value={dato}
                  onChange={(e) => setDato(e.target.value)}
                  className="w-full sm:w-56 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">
                    Tid start
                  </label>
                  <select
                    value={tidStart}
                    onChange={(e) => setTidStart(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent"
                  >
                    {tider.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">
                    Tid slut
                  </label>
                  <select
                    value={tidSlut}
                    onChange={(e) => setTidSlut(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent"
                  >
                    {tider.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">
                    Type tolkning <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={tolkningsType}
                    onChange={(e) => setTolkningsType(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent"
                  >
                    <option value="">Vælg venligst</option>
                    {tolkningsTyper.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Oversættelse-specifik */}
          {type === "oversaettelse" && (
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-1">
                Upload dine filer her
              </label>
              <input
                type="file"
                onChange={(e) =>
                  setFilNavn(e.target.files?.[0]?.name || "")
                }
                className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[var(--brand-light)] file:text-[var(--brand-primary)] hover:file:bg-[var(--brand-accent)] hover:file:text-white file:transition-colors file:cursor-pointer"
              />
            </div>
          )}

          {/* Kommentar */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Kommentar
            </label>
            <textarea
              value={kommentar}
              onChange={(e) => setKommentar(e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent resize-y"
            />
          </div>

          {/* Næste */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => canProceed && setStep(2)}
              disabled={!canProceed}
              className="px-8 py-3 rounded-lg font-semibold text-white bg-[var(--brand-accent)] hover:bg-[var(--brand-primary)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Næste
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Navn
            </label>
            <input
              type="text"
              value={navn}
              onChange={(e) => setNavn(e.target.value)}
              className="w-full sm:w-72 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Firmanavn <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={firma}
              onChange={(e) => setFirma(e.target.value)}
              className="w-full sm:w-72 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-72 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Telefonnummer
            </label>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50">
                🇩🇰 +45
              </span>
              <input
                type="tel"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
                placeholder="20 12 34 56"
                className="w-full sm:w-48 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent"
              />
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={samtykke}
              onChange={(e) => setSamtykke(e.target.checked)}
              className="mt-1 w-4 h-4"
            />
            <span className="text-sm text-gray-700">
              Jeg giver samtykke til, at Tolk360 behandler mine{" "}
              <Link href="/persondatapolitik" className="text-[var(--brand-accent)] hover:underline">
                personoplysninger
              </Link>
              . <span className="text-red-500">*</span>
            </span>
          </label>

          {/* Buttons */}
          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-6 py-3 rounded-lg font-semibold text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Forrige
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="px-8 py-3 rounded-lg font-semibold text-white bg-[var(--brand-accent)] hover:bg-[var(--brand-primary)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Indsend
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
