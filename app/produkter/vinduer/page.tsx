import type { Metadata } from "next";
import VinduerContent from "./Content";

export const metadata: Metadata = {
  title: "Vinduer til Hestestald — Sikkerhedsglas og Rustfrit Stål Hængsler",
  description:
    "Smulders staldvinduer med sikkerhedsglas (3/0,5/3 mm lamineret) og rustfrie stål hængsler. Ingen skarpe kanter. Justerbar åbningsgrad. Designet til fugtigt staldmiljø. Kontakt os for mål og tilbud.",
  alternates: {
    canonical: "https://smulders.dk/produkter/vinduer",
  },
  openGraph: {
    title: "Vinduer til Hestestald — Sikkerhedsglas | Smulders Danmark",
    description:
      "Smulders staldvinduer: ingen skarpe kanter, rustfrie stål hængsler, sikkerhedsglas 3/0,5/3 mm lamineret, justerbar åbning. Til hestestalde i Danmark.",
    url: "https://smulders.dk/produkter/vinduer",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Vinduer til Hestestald — Smulders",
  description:
    "Staldvinduer designet til hestestalde. Ramme uden skarpe kanter, rustfrie stål hængsler, lamineret sikkerhedsglas 3/0,5/3 mm, justerbar åbningsgrad. Til fugtigt staldmiljø.",
  brand: { "@type": "Brand", name: "Smulders" },
  category: "Staldvinduer",
  image: "https://www.smulders.pl/wp-content/uploads/2025/07/windows-for-horse-stable_SMULDERS_PL.webp",
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
      <VinduerContent />
    </>
  );
}
