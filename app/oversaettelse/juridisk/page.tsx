import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Juridisk oversættelse",
  description: "Certificeret juridisk oversættelse af kontrakter, domme, lovtekster og juridiske dokumenter.",
};

export default function Page() {
  return (
    <ServicePage
      title="Juridisk oversættelse"
      description="Præcis og certificeret oversættelse af kontrakter, domme, lovtekster og juridiske dokumenter."
      content={[
        "Juridisk oversættelse kræver præcision, faglig indsigt og forståelse for juridiske systemer i både kilde- og målsprog. Vores juridiske oversættere har baggrund i jura eller lang erfaring med juridisk oversættelse.",
        "Vi oversætter kontrakter, domme, lovtekster, patentdokumenter, selskabsdokumenter og andre juridiske tekster. Alle oversættelser gennemgår kvalitetskontrol.",
        "Ved behov kan vi levere certificerede oversættelser til brug ved myndigheder og domstole.",
      ]}
      features={[
        "Oversættere med juridisk baggrund",
        "Certificerede oversættelser til myndighedsbrug",
        "Kontrakter, domme, lovtekster og patenter",
        "Kvalitetskontrol af alle oversættelser",
        "Fortrolighed og diskretion",
      ]}
    />
  );
}
