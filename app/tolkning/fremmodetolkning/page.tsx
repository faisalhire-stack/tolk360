import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Fremmødetolkning",
  description: "Professionel fremmødetolkning i hele Danmark. Fysisk tolk til møder, retssager, lægebesøg og andre situationer.",
};

export default function Page() {
  return (
    <ServicePage
      title="Fremmødetolkning"
      description="Professionel tolk til stede fysisk – til møder, retssager, lægebesøg og alle situationer hvor personlig tilstedeværelse gør en forskel."
      content={[
        "Fremmødetolkning er den mest udbredte form for tolkning, hvor tolken er fysisk til stede i rummet. Det giver mulighed for at opfange nonverbale signaler og skabe en tryg ramme for samtalen.",
        "Vores fremmødetolke er uddannede, sprogtestede og specialiserede inden for bl.a. juridisk, medicinsk og social tolkning. De møder altid forberedt op og overholder strenge etiske retningslinjer.",
        "Vi dækker hele Danmark og kan levere fremmødetolke med kort varsel. Kontakt os for at høre mere om muligheder og tilgængelighed.",
      ]}
      features={[
        "Tolke med formel uddannelse og faglig specialisering",
        "Dækning i hele Danmark",
        "Kort varsel – også til akutte situationer",
        "Tolkning ved retsmøder, hospitaler, kommuner og virksomheder",
        "Alle verdens sprog tilgængelige",
      ]}
    />
  );
}
