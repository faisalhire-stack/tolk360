import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Tegnsprogstolkning",
  description:
    "Tolk360 leverer certificerede tegnsprogstolke med kort leveringstid. Stort netværk af tolke i dansk tegnsprog til alle typer situationer.",
};

export default function Page() {
  return (
    <ServicePage
      title="Tegnsprogstolkning"
      description="Certificerede tegnsprogstolke med kort leveringstid – vi har et af Danmarks største netværk af tegnsprogstolke."
      content={[
        "Tolk360 samarbejder med et stort antal professionelle tegnsprogstolke i hele Danmark. Det betyder, at vi kan stille kvalificerede tolke til rådighed hurtigere end de fleste bureauer – også ved akutte behov og med kort varsel.",
        "Vores tegnsprogstolke er uddannede og certificerede i dansk tegnsprog (DTS) og har erfaring med et bredt spektrum af situationer: fra sundhedsfaglige samtaler og retsmøder til uddannelsesforløb, arbejdspladssamtaler og større arrangementer.",
        "Tegnsprogstolkning kan leveres som fysisk fremmødetolkning eller via video, afhængigt af situationen og borgerens behov. Vi rådgiver gerne om, hvilken løsning der passer bedst.",
        "Vi har løbende tolke til rådighed i alle dele af landet og kan ofte dække opgaver samme dag eller næste dag. Vores brede netværk gør det muligt at matche den rette tolk til den konkrete opgave – uanset fagområde eller geografisk placering.",
      ]}
      features={[
        "Et af Danmarks største netværk af tegnsprogstolke",
        "Kort leveringstid – ofte samme dag eller næste dag",
        "Uddannede og certificerede i dansk tegnsprog (DTS)",
        "Fysisk fremmøde eller videotolkning",
        "Alle typer situationer – sundhed, jura, uddannelse, beskæftigelse",
        "Landsdækkende dækning",
        "Erfaring med konferencer, undervisning og større arrangementer",
        "Rådgivning om den bedste løsning til jeres behov",
      ]}
    />
  );
}
