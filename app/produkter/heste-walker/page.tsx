import type { Metadata } from "next";
import HesteWalkerContent from "./Content";

export const metadata: Metadata = {
  title: "Heste Walker — 15–20 m, Kapacitet til 4–8 Heste",
  description:
    "Smulders heste walker til 4–8 heste. Størrelser fra ⌀ 15 til 20 meter. Trinløs hastighedsjustering, nødstopper og automatisk smøresystem. Hegn i plastik, net eller bambus. Kontakt os for pris og tilbud.",
  alternates: {
    canonical: "https://smulders.dk/produkter/heste-walker",
  },
  openGraph: {
    title: "Heste Walker — 4–8 Heste, 15–20 m | Smulders Danmark",
    description:
      "Smulders heste walker: 4 størrelser (15–20 m), kapacitet til 4–8 heste. Trinløs hastighed, nødstopper, automatisk smøring. Hegn i plastik, net eller bambus.",
    url: "https://smulders.dk/produkter/heste-walker",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Heste Walker — Smulders",
  description:
    "Roterende heste walker karussel i 4 størrelser: ⌀ 15 m (4 heste), 16 m (4/6 heste), 18 m (6/8 heste), 20 m (8 heste). Trinløs hastighedsjustering, nødstopper ved hvert segment, automatisk smøresystem. Hegn: plastik, net eller bambus. Valgfri overdækning.",
  brand: { "@type": "Brand", name: "Smulders" },
  category: "Heste Walker",
  image: "https://www.smulders.pl/wp-content/uploads/2019/03/f001_horse-walkers_roofings_1200_SMULDERS_PL.jpg",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "DKK",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Smulders", url: "https://smulders.dk" },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HesteWalkerContent />
    </>
  );
}
