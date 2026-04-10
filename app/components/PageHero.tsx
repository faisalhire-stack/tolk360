import { SpeechBubbles } from "./SpeechBubbles";

export function PageHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="relative bg-gradient-to-br from-[var(--brand-primary)] via-[#1a2d52] to-[#162444] text-white py-16 sm:py-20 overflow-hidden">
      <SpeechBubbles />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-lg text-white/80 max-w-2xl">{description}</p>
      </div>
    </section>
  );
}
