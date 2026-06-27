import type { Metadata } from "next";
import TilbehoerContent from "./Content";

export const metadata: Metadata = {
  title: "Staldinventar Tilbehør — Drikkeskåle, Fodervogne og Krybber",
  description:
    "Smulders staldinventar tilbehør til hestestalde: drikkeskåle Black Beauty 24 og Suevia P12, hækkekrybber, fodervogne (galvaniseret og pulverlakeret), beskyttelsesbeslag og solarier. Kontakt os for priser.",
  alternates: {
    canonical: "https://smulders.dk/produkter/tilbehoer",
  },
  openGraph: {
    title: "Staldinventar Tilbehør — Drikkeskåle og Fodervogne | Smulders Danmark",
    description:
      "Smulders staldinventar tilbehør: drikkeskåle, hækkekrybber, fodervogne og beskyttelsesbeslag. Alt du behøver til den komplette hestestald.",
    url: "https://smulders.dk/produkter/tilbehoer",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Staldinventar Tilbehør — Smulders",
  description: "Tilbehør til hestestalde inkl. drikkeskåle, hækkekrybber, fodervogne og beskyttelsesbeslag",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Drikkeskål Black Beauty 24" },
    { "@type": "ListItem", position: 2, name: "Drikkeskål Suevia P12 med termostat" },
    { "@type": "ListItem", position: 3, name: "Beskyttelsesbeslag til drikkeskåle" },
    { "@type": "ListItem", position: 4, name: "Hækkekrybbe" },
    { "@type": "ListItem", position: 5, name: "Fodervogn galvaniseret" },
    { "@type": "ListItem", position: 6, name: "Fodervogn pulverlakeret" },
    { "@type": "ListItem", position: 7, name: "Heste Solarium 3-panel" },
    { "@type": "ListItem", position: 8, name: "Heste Solarium 4-panel" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TilbehoerContent />
    </>
  );
}
