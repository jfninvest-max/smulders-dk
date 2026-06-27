import type { Metadata } from "next";
import DoereContent from "./Content";

export const metadata: Metadata = {
  title: "Stallboksdøre — 3 Modeller med Sikkerhedsglas og Rustfrit Stål",
  description:
    "Smulders stallboksdøre i tre modeller — ingen skarpe kanter, låsbart rustfrit stål 2-finger greb. Plastik eller bambus brædder. Sikkerhedsglas 3/0,5/3 mm lamineret. Kontakt os for mål og tilbud.",
  alternates: {
    canonical: "https://smulders.dk/produkter/doere",
  },
  openGraph: {
    title: "Stallboksdøre — 3 Modeller | Smulders Danmark",
    description:
      "Smulders stallboksdøre: dobbeltdør (lukket/glas) og buet dør. Ingen skarpe kanter, rustfrit stål greb, lamineret sikkerhedsglas, plastik eller bambus brædder.",
    url: "https://smulders.dk/produkter/doere",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Stallboksdøre — Smulders",
  description:
    "Stallboksdøre til heste i tre modeller: dobbeltdør fuldt lukket, dobbeltdør med sikkerhedsglas, buet dør med sikkerhedsglas. Ingen skarpe kanter, låsbart rustfrit stål 2-finger greb, plastik 32 mm eller bambus brædder, lamineret sikkerhedsglas 3/0,5/3 mm.",
  brand: { "@type": "Brand", name: "Smulders" },
  category: "Stallboksdøre",
  image: "https://www.smulders.pl/wp-content/uploads/2023/01/door-for-stables.jpg",
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
      <DoereContent />
    </>
  );
}
