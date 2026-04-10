import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { TilbudForm } from "./TilbudForm";

export const metadata: Metadata = {
  title: "Få tilbud – Tolkning og oversættelse",
  description:
    "Udfyld formularen og modtag et uforpligtende tilbud på tolkning eller skriftlig oversættelse fra Tolk360.",
};

export default function FaaTilbudPage() {
  return (
    <>
      <PageHero
        title="Få tilbud"
        description="Udfyld formularen nedenfor, og vi vender tilbage med et tilbud inden for kort tid."
      />
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <TilbudForm />
        </div>
      </section>
    </>
  );
}
