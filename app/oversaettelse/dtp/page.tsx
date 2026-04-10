import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "DTP – Desktop Publishing",
  description: "Desktop Publishing – vi tilpasser layout og grafik, så din oversatte tekst passer perfekt i det endelige format.",
};

export default function Page() {
  return (
    <ServicePage
      title="DTP – Desktop Publishing"
      description="Vi tilpasser layout og grafik, så din oversatte tekst passer perfekt i det endelige format."
      content={[
        "Når tekst oversættes, ændrer den ofte længde og format. DTP (Desktop Publishing) sikrer at dit oversatte materiale ser professionelt ud i det endelige layout – uanset om det er en brochure, et magasin eller en præsentation.",
        "Vores DTP-specialister arbejder med alle gængse formater og programmer, herunder InDesign, Illustrator, QuarkXPress og PowerPoint.",
      ]}
      features={[
        "Layout-tilpasning efter oversættelse",
        "Alle gængse formater og programmer",
        "Brochurer, magasiner, præsentationer",
        "Højre-til-venstre sprog (arabisk, hebraisk)",
        "Print-klare filer",
      ]}
    />
  );
}
