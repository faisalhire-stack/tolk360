import type { Metadata } from "next";
import { SprogContent } from "./SprogContent";

export const metadata: Metadata = {
  title: "Sprog – Alle sprog i verden",
  description:
    "Tolk360 tilbyder tolkning og oversættelse på alle verdens sprog. Se vores komplette sprogliste og find det sprog, du har brug for.",
};

export default function SprogPage() {
  return <SprogContent />;
}
