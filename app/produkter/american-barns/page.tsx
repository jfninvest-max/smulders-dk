import type { Metadata } from "next";
import AmericanBarnsContent from "./Content";

export const metadata: Metadata = {
  title: "American Barns — Komplet Staldbygning med Hestebokse",
  description:
    "Smulders American Barns — komplet staldbygning med indendørs hestebokse integreret. Alt leveret fra én producent. Plastik, bambus eller egetræ beklædning. Galvaniseret eller pulverlakeret. Kontakt os for tilbud.",
  alternates: {
    canonical: "https://smulders.dk/produkter/american-barns",
  },
  openGraph: {
    title: "American Barns — Komplet Staldbygning med Hestebokse | Smulders Danmark",
    description:
      "Komplet staldbygning med indendørs hestebokse. Alt fra én producent. Plastik, bambus eller egetræ. Galvaniseret eller pulverlakeret finish.",
    url: "https://smulders.dk/produkter/american-barns",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "American Barns Hestestald — Smulders",
  description:
    "Komplet staldbygning med indendørs staldbokse integreret i konstruktionen. Alt leveret fra én producent. Kræver støbt betonfundament. Beklædning: plastik, bambus eller egetræ. Overfladebehandling: galvaniseret eller pulverlakeret.",
  brand: { "@type": "Brand", name: "Smulders" },
  category: "Staldbygninger",
  image: "https://www.smulders.pl/wp-content/uploads/2019/02/f000_american-barns_smulders_pl.jpg",
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
      <AmericanBarnsContent />
    </>
  );
}
