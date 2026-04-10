import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Konferencetolkning",
  description: "Simultantolkning til konferencer, seminarer og større arrangementer med professionelt udstyr.",
};

export default function Page() {
  return (
    <ServicePage
      title="Konferencetolkning"
      description="Simultantolkning til konferencer, seminarer og større arrangementer med professionelt tolkudstyr."
      content={[
        "Konferencetolkning kræver særligt uddannede tolke der kan tolke simultant – dvs. i realtid mens taleren taler. Det er den mest krævende form for tolkning og stiller høje krav til tolkens kompetencer.",
        "Vi leverer konferencetolke med erfaring fra internationale konferencer, seminarer, politiske møder og virksomhedsarrangementer. Tolkene arbejder altid i par for at sikre konstant kvalitet.",
        "Vi kan også hjælpe med professionelt tolkudstyr – tolkeanlæg, kabiner og headsets – tilpasset jeres arrangement.",
      ]}
      features={[
        "Simultantolkning i realtid",
        "Erfarne konferencetolke",
        "Tolkene arbejder i par for kvalitetssikring",
        "Levering af tolkudstyr og kabiner",
        "Flersprogede arrangementer",
      ]}
    />
  );
}
