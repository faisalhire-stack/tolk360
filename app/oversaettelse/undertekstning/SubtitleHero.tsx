"use client";

import { useEffect, useState } from "react";

const subtitleLines = [
  { time: "00:01:24", text: "Kan du forstå, hvad han siger?", lang: "da" },
  { time: "00:01:27", text: "Can you understand what he's saying?", lang: "en" },
  { time: "00:01:31", text: "Vi har brug for en oversætter.", lang: "da" },
  { time: "00:01:34", text: "We need a translator.", lang: "en" },
  { time: "00:01:38", text: "Det handler ikke bare om ordene.", lang: "da" },
  { time: "00:01:41", text: "It's not just about the words.", lang: "en" },
  { time: "00:01:45", text: "Det handler om følelsen.", lang: "da" },
  { time: "00:01:48", text: "It's about the feeling.", lang: "en" },
];

const colorBars = [
  "#C0C0C0", // Gray
  "#C8C800", // Yellow
  "#00C8C8", // Cyan
  "#00C800", // Green
  "#C800C8", // Magenta
  "#C80000", // Red
  "#0000C8", // Blue
];

export function SubtitleHero() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [currentPair, setCurrentPair] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPair((prev) => {
        const next = (prev + 1) % (subtitleLines.length / 2);
        setVisibleLines([next * 2, next * 2 + 1]);
        return next;
      });
    }, 3000);

    // Show first pair immediately
    setVisibleLines([0, 1]);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* SMPTE Color bars at top */}
      <div className="flex w-full h-2">
        {colorBars.map((color, i) => (
          <div key={i} className="flex-1" style={{ backgroundColor: color }} />
        ))}
      </div>

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
        }}
      />

      {/* Animated glowing color bar reflections */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {colorBars.map((color, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-[0.07]"
            style={{
              backgroundColor: color,
              width: "200px",
              height: "200px",
              left: `${(i / colorBars.length) * 100}%`,
              top: "20%",
              animation: `subtitleGlow ${4 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Undertekstning
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
            Professionel undertekstning til film, tv, dokumentarer og virksomhedsvideoer – udført af erfarne billedmedieoversættere.
          </p>

          {/* Subtitle simulation */}
          <div className="mt-12 relative">
            {/* Fake TV screen */}
            <div className="bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] rounded-lg border border-white/10 overflow-hidden shadow-2xl">
              {/* Mini color bars */}
              <div className="flex w-full h-1">
                {colorBars.map((color, i) => (
                  <div key={i} className="flex-1" style={{ backgroundColor: color }} />
                ))}
              </div>

              {/* Screen content */}
              <div className="px-6 sm:px-10 py-10 sm:py-14 min-h-[180px] flex flex-col justify-end">
                {/* Timecode */}
                <div className="text-[10px] font-mono text-white/30 mb-3 tracking-widest">
                  TC {subtitleLines[currentPair * 2]?.time || "00:00:00"}
                </div>

                {/* Subtitle lines */}
                <div className="space-y-1.5">
                  {visibleLines.map((lineIdx) => {
                    const line = subtitleLines[lineIdx];
                    if (!line) return null;
                    return (
                      <div
                        key={`${lineIdx}-${currentPair}`}
                        className="subtitle-line-enter"
                      >
                        <span
                          className={`inline-block px-3 py-1 rounded text-sm sm:text-base ${
                            line.lang === "da"
                              ? "bg-white/90 text-black font-medium"
                              : "bg-yellow-400/90 text-black font-medium"
                          }`}
                        >
                          {line.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom color bars */}
              <div className="flex w-full h-1">
                {colorBars.map((color, i) => (
                  <div key={i} className="flex-1" style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom color bars */}
      <div className="flex w-full h-2">
        {colorBars.map((color, i) => (
          <div key={i} className="flex-1" style={{ backgroundColor: color }} />
        ))}
      </div>
    </section>
  );
}
