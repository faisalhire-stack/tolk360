import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Marketing-oversættelse",
  description: "Kreativ og kulturelt tilpasset oversættelse af markedsføringsmateriale, websites og kampagner.",
};

export default function Page() {
  return (
    <ServicePage
      title="Marketing-oversættelse"
      description="Kreativ og kulturelt tilpasset oversættelse af markedsføringsmateriale, websites og kampagner."
      content={[
        "Marketing-oversættelse handler om mere end ord – det handler om at formidle dit budskab, din tone og din brandidentitet på et nyt sprog. Vi tilpasser teksten kulturelt, så den resonerer med målgruppen.",
        "Vores oversættere har erfaring med marketing og kommunikation og forstår vigtigheden af at bevare kreativitet og slagkraft i oversættelsen.",
      ]}
      features={[
        "Websites og digitalt indhold",
        "Brochurer og kampagnemateriale",
        "Annoncetekster og SoMe-indhold",
        "Kulturel tilpasning (transkreation)",
        "Konsistent brand-stemme på tværs af sprog",
      ]}
    />
  );
}
