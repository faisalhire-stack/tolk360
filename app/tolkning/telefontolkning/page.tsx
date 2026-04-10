import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Telefontolkning",
  description: "Hurtig telefontolkning med kort varsel. Professionelle tolke tilgængelige i alle verdens sprog.",
};

export default function Page() {
  return (
    <ServicePage
      title="Telefontolkning"
      description="Hurtig og effektiv tolkning over telefon – tilgængelig med kort varsel til akutte behov og planlagte samtaler."
      content={[
        "Telefontolkning er den hurtigste løsning når du har brug for en tolk her og nu. Tolken forbinder til samtalen telefonisk og tolker konsekutivt mellem parterne.",
        "Denne form for tolkning er ideel til korte samtaler, akutte situationer og tilfælde hvor fremmøde ikke er praktisk muligt. Det er også en omkostningseffektiv løsning til hyppige tolkebehov.",
        "Vores telefontolke er fuldt uddannede og vant til at arbejde professionelt over telefon. De sikrer en præcis og neutral tolkning uanset emne.",
      ]}
      features={[
        "Tilgængelig med meget kort varsel",
        "Omkostningseffektiv løsning",
        "Ideel til akutte og kortvarige tolkebehov",
        "Alle verdens sprog",
        "Professionelle, uddannede tolke",
      ]}
    />
  );
}
