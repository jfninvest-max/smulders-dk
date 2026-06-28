import type { Metadata } from "next";
import LavedoereContent from "./Content";

export const metadata: Metadata = {
  title: "Ladedøre til Stald — Lige og Buede Stilarter",
  description:
    "Smulders ladedøre til hestestald — 3 stilarter: lige, buet og enkelt delt. Enkelt eller dobbelt fløj. Galvaniseret eller pulverlakeret i valgfri farve. Kontakt os for mål og tilbud.",
  alternates: {
    canonical: "https://smulders.dk/produkter/lavedoere",
  },
  openGraph: {
    title: "Ladedøre til Stald — Lige og Buede | Smulders Danmark",
    description:
      "Smulders ladedøre: 3 stilarter (lige, buet, enkelt delt), enkelt eller dobbelt fløj, galvaniseret eller pulverlakeret. Forbedrer staldens udseende markant.",
    url: "https://smulders.dk/produkter/lavedoere",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Ladedøre til Hestestald — Smulders",
  description:
    "Ladedøre til hestestalde i 3 stilarter: lige ladedør, buet ladedør, enkelt delt ladedør. Leveres som enkelt eller dobbelt fløj, fuldt lukket eller vandret opdelt. Overfladebehandling: galvaniseret eller pulverlakeret i valgfri farve.",
  brand: { "@type": "Brand", name: "Smulders" },
  category: "Ladedøre",
  image: "https://www.smulders.pl/wp-content/uploads/2025/07/barn-doors_SMULDERS_PL.webp",
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
      <LavedoereContent />
    </>
  );
}
