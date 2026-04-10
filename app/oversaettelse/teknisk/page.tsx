import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Teknisk oversættelse",
  description: "Professionel teknisk oversættelse af manualer, brugervejledninger, specifikationer og teknisk dokumentation.",
};

export default function Page() {
  return (
    <ServicePage
      title="Teknisk oversættelse"
      description="Oversættelse af tekniske manualer, brugervejledninger, specifikationer og ingeniørdokumentation."
      content={[
        "Teknisk oversættelse kræver forståelse for fagterminologi og evnen til at gengive komplekse tekniske begreber klart og præcist på målsproget.",
        "Vores tekniske oversættere har erfaring med bl.a. IT, ingeniørfag, maskinteknik, bygge- og anlæg samt energisektoren.",
      ]}
      features={[
        "Brugervejledninger og manualer",
        "Tekniske specifikationer",
        "Ingeniør- og maskindokumentation",
        "IT- og softwaredokumentation",
        "Konsistent terminologi",
      ]}
    />
  );
}
