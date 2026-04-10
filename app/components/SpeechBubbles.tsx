"use client";

import { useEffect, useState } from "react";

const greetings = [
  { text: "Hej", lang: "Dansk" },
  { text: "Hello", lang: "English" },
  { text: "مرحبا", lang: "Arabisk" },
  { text: "Hallo", lang: "Tysk" },
  { text: "Bonjour", lang: "Fransk" },
  { text: "Hola", lang: "Spansk" },
  { text: "Merhaba", lang: "Tyrkisk" },
  { text: "سلام", lang: "Farsi" },
  { text: "Witaj", lang: "Polsk" },
  { text: "Xin chào", lang: "Vietnamesisk" },
  { text: "Здравей", lang: "Bulgarsk" },
  { text: "Salaam", lang: "Somali" },
  { text: "สวัสดี", lang: "Thai" },
  { text: "Привет", lang: "Russisk" },
  { text: "你好", lang: "Kinesisk" },
  { text: "こんにちは", lang: "Japansk" },
  { text: "Cześć", lang: "Polsk" },
  { text: "Salam", lang: "Kurdisk" },
  { text: "Selamat", lang: "Indonesisk" },
  { text: "Olá", lang: "Portugisisk" },
  { text: "Ciao", lang: "Italiensk" },
  { text: "Γεια σας", lang: "Græsk" },
  { text: "Hallå", lang: "Svensk" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "안녕", lang: "Koreansk" },
  { text: "Habari", lang: "Swahili" },
  { text: "Hei", lang: "Norsk" },
  { text: "Tere", lang: "Estisk" },
  { text: "Buna", lang: "Rumænsk" },
  { text: "Ahoj", lang: "Tjekkisk" },
];

interface Bubble {
  id: number;
  text: string;
  lang: string;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  sway: number;
  swayEnd: number;
}

function generateBubbles(count: number): Bubble[] {
  const shuffled = [...greetings].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((g, i) => ({
    id: i,
    text: g.text,
    lang: g.lang,
    x: 3 + (i / count) * 90 + Math.random() * 6,
    size: 0.6 + Math.random() * 0.35,
    duration: 10 + Math.random() * 14,
    delay: -(Math.random() * 20),
    opacity: 0.06 + Math.random() * 0.08,
    sway: -30 + Math.random() * 60,
    swayEnd: -20 + Math.random() * 40,
  }));
}

function BubbleElement({ b }: { b: Bubble }) {
  return (
    <div
      className="absolute bottom-0 animate-rise-bubble"
      style={{
        left: `${b.x}%`,
        ["--rise-duration" as string]: `${b.duration}s`,
        ["--rise-delay" as string]: `${b.delay}s`,
        ["--sway" as string]: `${b.sway}px`,
        ["--sway-end" as string]: `${b.swayEnd}px`,
      }}
    >
      <div
        className="relative px-3 py-1.5 rounded-2xl bg-white backdrop-blur-[1px] border border-white"
        style={{
          transform: `scale(${b.size})`,
          backgroundColor: `rgba(255,255,255,${b.opacity})`,
          borderColor: `rgba(255,255,255,${b.opacity * 0.6})`,
        }}
      >
        <span className="block text-white font-semibold text-sm whitespace-nowrap">
          {b.text}
        </span>
        <span className="block text-white/40 text-[9px] mt-0.5">
          {b.lang}
        </span>
        <div
          className="absolute -bottom-1 left-3 w-2.5 h-2.5 rotate-45"
          style={{
            backgroundColor: `rgba(255,255,255,${b.opacity})`,
            borderRight: `1px solid rgba(255,255,255,${b.opacity * 0.6})`,
            borderBottom: `1px solid rgba(255,255,255,${b.opacity * 0.6})`,
          }}
        />
      </div>
    </div>
  );
}

export function SpeechBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(generateBubbles(20));
  }, []);

  if (bubbles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b) => (
        <BubbleElement key={b.id} b={b} />
      ))}
    </div>
  );
}
