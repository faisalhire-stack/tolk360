import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Videotolkning",
  description: "Professionel videotolkning – kombinerer fleksibiliteten fra telefontolkning med den personlige kontakt.",
};

export default function Page() {
  return (
    <ServicePage
      title="Videotolkning"
      description="Tolkning via video med billede og lyd – kombinerer fleksibilitet med den personlige kontakt."
      content={[
        "Videotolkning giver dig det bedste fra to verdener: fleksibiliteten fra telefontolkning og den visuelle kontakt fra fremmødetolkning. Tolken deltager via video og kan opfange nonverbale signaler.",
        "Denne løsning er ideel til møder hvor fremmøde ikke er muligt, men hvor det er vigtigt at have visuel kontakt mellem alle parter. Det fungerer på alle gængse videoplatforme.",
        "Vores videotolke har erfaring med at arbejde professionelt på digitale platforme og sikrer en flydende og præcis tolkning.",
      ]}
      features={[
        "Visuel kontakt uden fysisk fremmøde",
        "Fungerer på alle gængse videoplatforme",
        "Fleksibel og tidsbesparende",
        "Alle verdens sprog",
        "Uddannede og erfarne tolke",
      ]}
    />
  );
}
