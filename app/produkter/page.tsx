import type { Metadata } from "next";
import ProdukterContent from "./Content";

export const metadata: Metadata = {
  title: "Hestebokse og Staldinventar — Komplet Sortiment",
  description:
    "Komplet sortiment af hestebokse og staldinventar fra Smulders. Indendørs og udendørs bokse, american barns, heste walkere, solarier, døre, vinduer og tilbehør til hestestalde i Danmark.",
  alternates: {
    canonical: "https://smulders.dk/produkter",
  },
  openGraph: {
    title: "Hestebokse og Staldinventar — Komplet Sortiment | Smulders Danmark",
    description:
      "Komplet sortiment af premium hestebokse og staldinventar. 9 boksserier, american barns, heste walkere, solarier, døre, vinduer og tilbehør.",
    url: "https://smulders.dk/produkter",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Smulders Hestebokse og Staldinventar",
  description: "Komplet sortiment af premium hestebokse og staldinventar til hestestalde i Danmark",
  url: "https://smulders.dk/produkter",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Indendørs Hestebokse", url: "https://smulders.dk/produkter/bokse-indendoers" },
    { "@type": "ListItem", position: 2, name: "Udendørs Hestebokse", url: "https://smulders.dk/produkter/bokse-udendoers" },
    { "@type": "ListItem", position: 3, name: "American Barns", url: "https://smulders.dk/produkter/american-barns" },
    { "@type": "ListItem", position: 4, name: "Heste Walker", url: "https://smulders.dk/produkter/heste-walker" },
    { "@type": "ListItem", position: 5, name: "Solarier til Heste", url: "https://smulders.dk/produkter/solarier" },
    { "@type": "ListItem", position: 6, name: "Staldboksdøre", url: "https://smulders.dk/produkter/doere" },
    { "@type": "ListItem", position: 7, name: "Vinduer til Stald", url: "https://smulders.dk/produkter/vinduer" },
    { "@type": "ListItem", position: 8, name: "Ladedøre", url: "https://smulders.dk/produkter/lavedoere" },
    { "@type": "ListItem", position: 9, name: "Staldinventar Tilbehør", url: "https://smulders.dk/produkter/tilbehoer" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProdukterContent />
    </>
  );
}
