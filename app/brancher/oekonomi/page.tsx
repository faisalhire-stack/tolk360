import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Økonomi og finans",
  description: "Tolke og oversættere med kendskab til finansiel terminologi – banker, revisorer, forsikring og finansielle institutioner.",
};

export default function Page() {
  return (
    <ServicePage
      title="Økonomi og finans"
      description="Professionelle tolke og oversættere med kendskab til økonomisk og finansiel terminologi."
      content={[
        "Den finansielle sektor kræver tolke og oversættere der forstår komplekse økonomiske begreber, regulatoriske rammer og branchespecifik terminologi. Vores specialiserede tolke har erfaring med bank, forsikring, revision og finansielle forhandlinger.",
        "Vi leverer tolkning til kundemøder i banker, forsikringsgennemgange, revisormøder, skattemøder og finansielle forhandlinger. Vores oversættere håndterer årsrapporter, kontrakter, forsikringspolicer og finansiel dokumentation.",
        "Fortrolighed er en grundsten i alt vores arbejde, og i den finansielle sektor er det særligt vigtigt. Alle vores tolke og oversættere er underlagt streng tavshedspligt.",
      ]}
      features={[
        "Bankmøder og kundesamtaler",
        "Forsikringsgennemgange og skadesanmeldelser",
        "Revision og skattemøder",
        "Finansielle forhandlinger",
        "Oversættelse af årsrapporter og kontrakter",
        "Forsikringspolicer og finansiel dokumentation",
        "Streng fortrolighed",
      ]}
    />
  );
}
