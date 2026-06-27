import type { Metadata } from "next";
import UdendoersBokseContent from "./Content";

export const metadata: Metadata = {
  title: "Udendørs Hestebokse — Friluftsstald med Spids eller Ensidig Tag",
  description:
    "Smulders udendørs hestebokse — spids eller ensidig (pent) tag, plastik, bambus eller egetræ beklædning. Galvaniseret eller pulverlakeret. Fleksibelt alternativ til traditionel hestestald i Danmark.",
  alternates: {
    canonical: "https://smulders.dk/produkter/bokse-udendoers",
  },
  openGraph: {
    title: "Udendørs Hestebokse — Friluftsstald | Smulders Danmark",
    description:
      "Smulders udendørs hestebokse med spids eller ensidig tag. Beklædning i plastik, bambus eller egetræ. Galvaniseret eller pulverlakeret. Til heste i Danmark og Skandinavien.",
    url: "https://smulders.dk/produkter/bokse-udendoers",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Udendørs Hestebokse — Smulders",
  description:
    "Selvstændige udendørs hestebokse med spids eller ensidig (pent) tagkonstruktion. Beklædning i plastik, bambus eller egetræ. Overfladebehandling: galvaniseret eller pulverlakeret. Fleksibelt alternativ til traditionel stallbygning.",
  brand: { "@type": "Brand", name: "Smulders" },
  category: "Udendørs Hestebokse",
  image: "https://www.smulders.pl/wp-content/uploads/2025/07/boksy-zewnetrzne-dla-koni_SMULDERS_PL.webp",
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
      <UdendoersBokseContent />
    </>
  );
}
