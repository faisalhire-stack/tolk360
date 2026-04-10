import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Medicin og sundhed",
  description: "Professionelle tolke til hospitaler, læger, psykiatri og sundhedsvæsen. Præcis tolkning hvor misforståelser kan have alvorlige konsekvenser.",
};

export default function Page() {
  return (
    <ServicePage
      title="Medicin og sundhed"
      description="Præcis og professionel tolkning i sundhedsvæsenet – hvor klar kommunikation kan være livsvigtig."
      content={[
        "I sundhedsvæsenet kan en misforståelse have alvorlige konsekvenser. Derfor er det afgørende at bruge professionelle tolke med medicinsk viden og erfaring fra hospitaler, lægeklinikker og psykiatrien.",
        "Vores medicinske tolke kender den sundhedsfaglige terminologi og forstår vigtigheden af præcis og neutral tolkning. De har erfaring med lægekonsultationer, indlæggelser, psykiatriske samtaler, genoptræning, tandlægebesøg og jordemoder-konsultationer.",
        "Vi leverer tolkning som fremmøde, telefon eller video – afhængigt af situationen og hospitalets præference. Ved akutte behov kan vi ofte stille en telefontolk til rådighed inden for minutter.",
      ]}
      features={[
        "Lægekonsultationer og hospitalsindlæggelser",
        "Psykiatriske samtaler og terapi",
        "Genoptræning og fysioterapi",
        "Tandlæge og speciallæge",
        "Jordemoder og fødselsforberedelse",
        "Akut telefontolkning med kort varsel",
        "Medicinsk terminologi og empati",
      ]}
    />
  );
}
