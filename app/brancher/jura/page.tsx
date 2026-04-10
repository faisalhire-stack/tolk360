import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Jura og retsvæsen",
  description: "Specialiserede tolke og oversættere til retsmøder, advokater, politiafhøringer, asylsager og juridisk dokumentation.",
};

export default function Page() {
  return (
    <ServicePage
      title="Jura og retsvæsen"
      description="Specialiserede tolke og oversættere til det juridiske område – retsmøder, advokater, politi og asylsager."
      content={[
        "Juridisk tolkning og oversættelse stiller de højeste krav til præcision, neutralitet og fortrolighed. En fejltolkning kan have vidtrækkende konsekvenser for den involverede borger. Derfor arbejder vi udelukkende med tolke, der har dokumenteret erfaring med juridisk terminologi og retsprocedurer.",
        "Vores juridiske tolke har erfaring fra retsmøder, advokatsamtaler, politiafhøringer, asylsamtaler, notarforretninger og fogedretsmøder. De kender processen, terminologien og de etiske retningslinjer, der gælder for tolkning i retsvæsenet.",
        "Vi leverer også certificerede oversættelser af juridiske dokumenter – kontrakter, domme, fuldmagter, vielsesattester og andre dokumenter der kræver præcision og ofte myndighedsanerkendelse.",
      ]}
      features={[
        "Retsmøder og fogedretsmøder",
        "Politiafhøringer og afhøringer",
        "Asylsamtaler og udlændingesager",
        "Advokatsamtaler og retshjælp",
        "Notarforretninger",
        "Certificerede oversættelser af juridiske dokumenter",
        "Streng tavshedspligt og neutralitet",
      ]}
    />
  );
}
