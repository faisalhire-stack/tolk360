import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Voiceover",
  description: "Professionel voiceover på flere sprog til videoer, e-learning, reklamer og præsentationer.",
};

export default function Page() {
  return (
    <ServicePage
      title="Voiceover"
      description="Professionel voiceover på flere sprog til videoer, e-learning, reklamer og præsentationer."
      content={[
        "Vi leverer professionel voiceover på en lang række sprog til videoer, e-learning-moduler, reklamefilm, præsentationer og andre audiovisuelle produktioner.",
        "Vores voiceover-kunstnere er native speakers med erfaring inden for professionel indtalning. Vi tilbyder også manuskriptoversættelse og timecoding.",
      ]}
      features={[
        "Native speakers i alle sprog",
        "Videoer, e-learning og reklamer",
        "Manuskriptoversættelse inkluderet",
        "Studieoptagelse i høj kvalitet",
        "Timecoding og synkronisering",
      ]}
    />
  );
}
