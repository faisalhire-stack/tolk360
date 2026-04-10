import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Teknik og ingeniørfag",
  description: "Tekniske tolke og oversættere til industri, bygge og anlæg, IT og ingeniørvirksomheder.",
};

export default function Page() {
  return (
    <ServicePage
      title="Teknik og ingeniørfag"
      description="Tolke og oversættere med teknisk baggrund til industri, bygge og anlæg, IT og ingeniørfag."
      content={[
        "Teknisk tolkning og oversættelse kræver en dyb forståelse af fagterminologi og tekniske processer. Vores tekniske tolke og oversættere har baggrund inden for ingeniørfag, IT, bygge og anlæg, maskinteknik og energisektoren.",
        "Vi leverer tolkning til tekniske møder, fabriksbesøg, sikkerhedsinstruktioner, installationsvejledning og projektmøder med internationale partnere. Vores oversættere håndterer tekniske manualer, brugervejledninger, sikkerhedsdatablade og specifikationer.",
        "Præcision er altafgørende i teknisk kommunikation. En fejloversættelse i en sikkerhedsinstruktion kan have alvorlige konsekvenser. Derfor matcher vi altid tolke og oversættere med den rette faglige baggrund.",
      ]}
      features={[
        "Industri og produktion",
        "Bygge og anlæg",
        "IT og software",
        "Maskinteknik og energi",
        "Tekniske manualer og brugervejledninger",
        "Sikkerhedsdatablade og specifikationer",
        "Fabriksbesøg og installationsvejledning",
      ]}
    />
  );
}
