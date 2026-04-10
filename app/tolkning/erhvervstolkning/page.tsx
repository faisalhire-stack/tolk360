import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Erhvervstolkning",
  description: "Professionel erhvervstolkning til virksomheder – forretningsmøder, forhandlinger, messer og internationale samarbejder.",
};

export default function Page() {
  return (
    <ServicePage
      title="Erhvervstolkning"
      description="Professionel tolkning til erhvervslivet – forretningsmøder, forhandlinger, messer og internationale samarbejder."
      content={[
        "Erhvervstolkning er målrettet virksomheder med internationale relationer. Vores erhvervstolke forstår forretningssprog, brancheterminologi og kulturelle nuancer, så kommunikationen flyder naturligt i professionelle sammenhænge.",
        "Vi leverer tolkning til forretningsmøder, kontraktforhandlinger, bestyrelsesmøder, messer, fabriksbesøg, due diligence-processer og internationale samarbejdsprojekter.",
        "Tolkningen kan foregå som konsekutiv tolkning (tolken oversætter efter hvert indlæg) eller simultan tolkning (realtidstolkning med udstyr). Vi rådgiver om den bedste løsning til jeres behov.",
      ]}
      features={[
        "Tolke med forretnings- og branchekendskab",
        "Forretningsmøder, forhandlinger og bestyrelsesmøder",
        "Messer, fabriksbesøg og virksomhedsbesøg",
        "Due diligence og kontraktforhandlinger",
        "Konsekutiv og simultan tolkning",
        "Fysisk fremmøde eller video",
      ]}
    />
  );
}
