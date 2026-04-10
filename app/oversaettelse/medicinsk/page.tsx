import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Medicinsk oversættelse",
  description: "Specialiseret medicinsk oversættelse af patientjournaler, kliniske rapporter og medicinsk faglitteratur.",
};

export default function Page() {
  return (
    <ServicePage
      title="Medicinsk oversættelse"
      description="Specialiseret oversættelse af medicinsk dokumentation udført af oversættere med sundhedsfaglig baggrund."
      content={[
        "Medicinsk oversættelse kræver dyb faglig viden og præcision. Fejl kan have alvorlige konsekvenser. Derfor arbejder vi udelukkende med oversættere der har sundhedsfaglig baggrund eller omfattende erfaring med medicinsk terminologi.",
        "Vi oversætter patientjournaler, kliniske studier, indlægssedler, medicinske rapporter og forskningsartikler. Alle oversættelser gennemgår faglig kvalitetskontrol.",
      ]}
      features={[
        "Oversættere med sundhedsfaglig baggrund",
        "Patientjournaler og kliniske rapporter",
        "Indlægssedler og medicinsk dokumentation",
        "Forskningsartikler og fagpublikationer",
        "Streng kvalitetskontrol",
      ]}
    />
  );
}
