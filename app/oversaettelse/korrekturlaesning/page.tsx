import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Korrekturlæsning",
  description: "Grundig korrekturlæsning og kvalitetssikring af oversatte tekster.",
};

export default function Page() {
  return (
    <ServicePage
      title="Korrekturlæsning"
      description="Grundig gennemgang og rettelse af oversatte tekster for at sikre sproglig kvalitet og nøjagtighed."
      content={[
        "Korrekturlæsning er det afgørende sidste skridt i enhver oversættelsesproces. Vores korrekturlæsere gennemgår teksten for stavefejl, grammatik, terminologikonsistens og sproglig flydende.",
        "Vi tilbyder korrekturlæsning af både egne og eksterne oversættelser, så du altid kan være sikker på kvaliteten.",
      ]}
      features={[
        "Stavefejl, grammatik og tegnsætning",
        "Terminologikonsistens",
        "Sproglig flydende og naturlighed",
        "Kontrol af kildetekst-overensstemmelse",
        "Fagspecifik korrektur",
      ]}
    />
  );
}
