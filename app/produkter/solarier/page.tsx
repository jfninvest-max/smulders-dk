import type { Metadata } from "next";
import SolarierContent from "./Content";

export const metadata: Metadata = {
  title: "Solarier til Heste — 3-Panel (2.550 W) og 4-Panel (3.000 W)",
  description:
    "Smulders heste solarier fremskynder regenerering af muskler og led. 3-panel (15 lamper, 2.550 W, 49 kg) og 4-panel (20 lamper, 3.000 W, 61 kg). 230 V. Kontakt os for pris og tilbud.",
  alternates: {
    canonical: "https://smulders.dk/produkter/solarier",
  },
  openGraph: {
    title: "Solarier til Heste — 3- og 4-Panel | Smulders Danmark",
    description:
      "Heste solarier fra Smulders: 3-panel (2.550 W) og 4-panel (3.000 W). Fremskynder restitution af muskler og led. Tilvalg: lift og møntbetjening.",
    url: "https://smulders.dk/produkter/solarier",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Heste Solarium — Smulders",
  description:
    "Smulders solarier til heste fås i 3-panel og 4-panel versioner. Fremskynder regenerering af muskler og led. 3-panel: 15 lamper, 2.550 W total, 49 kg. 4-panel: 20 lamper, 3.000 W total, 61 kg. Begge 230 V.",
  brand: { "@type": "Brand", name: "Smulders" },
  category: "Heste Solarium",
  image: "https://www.smulders.pl/wp-content/uploads/2025/07/solaria-dla-koni_SMULDERS_PL.webp",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "DKK",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Smulders", url: "https://smulders.dk" },
  },
  hasVariant: [
    { "@type": "Product", name: "3-Panel Heste Solarium", description: "15 lamper á 150–250 W, 2.550 W total, 230 V, 49 kg" },
    { "@type": "Product", name: "4-Panel Heste Solarium", description: "20 lamper á 150–250 W, 3.000 W total, 230 V, 61 kg" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SolarierContent />
    </>
  );
}
