import type { Metadata } from "next";
import IndendoersBokseContent from "./Content";

export const metadata: Metadata = {
  title: "Indendørs Hestebokse — 9 Serier fra Sport-Line til Windsor",
  description:
    "9 serier indendørs hestebokse fra Smulders — Sport-Line, Professional-Series, Classic Wave, Windsor, Lexington, Grand Prestige og mere. Belgisk kvalitet til hestestalde i Danmark. Kontakt os for tilbud og priser.",
  alternates: {
    canonical: "https://smulders.dk/produkter/bokse-indendoers",
  },
  openGraph: {
    title: "Indendørs Hestebokse — 9 Serier | Smulders Danmark",
    description:
      "9 serier premium indendørs hestebokse — fra prisvenlig Sport-Line til luksuriøs Windsor og Grand Prestige. Belgisk produceret staldinventar til hestestalde i Danmark.",
    url: "https://smulders.dk/produkter/bokse-indendoers",
    images: [{ url: "https://www.smulders.pl/wp-content/uploads/2025/07/boksy-windsor_SMULDERS_PL.webp", alt: "Smulders indendørs hestebokse — Windsor serie" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Indendørs Hestebokse — Smulders",
  description:
    "9 serier indendørs hestebokse tilpasset enhver staldstype og ethvert budget. Fra Sport-Line til Grand Prestige og Windsor luksusboks. Belgisk produceret med galvaniseret eller pulverlakeret stål og plastik, bambus eller egetræ beklædning.",
  brand: { "@type": "Brand", name: "Smulders" },
  category: "Hestebokse",
  image: "https://www.smulders.pl/wp-content/uploads/2025/07/boksy-windsor_SMULDERS_PL.webp",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "DKK",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Smulders", url: "https://smulders.dk" },
  },
  hasVariant: [
    { "@type": "Product", name: "Sport-Line Hesteboks" },
    { "@type": "Product", name: "Professional-Series Hesteboks" },
    { "@type": "Product", name: "Classic Wave Hesteboks" },
    { "@type": "Product", name: "Royal Wave Hesteboks" },
    { "@type": "Product", name: "Swing Wave Hesteboks" },
    { "@type": "Product", name: "Windsor Hesteboks" },
    { "@type": "Product", name: "Lexington Hesteboks" },
    { "@type": "Product", name: "Grand Prestige Hesteboks" },
    { "@type": "Product", name: "Young Horses Hesteboks" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <IndendoersBokseContent />
    </>
  );
}
