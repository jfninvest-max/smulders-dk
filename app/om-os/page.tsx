import type { Metadata } from "next";
import OmOsContent from "./Content";

export const metadata: Metadata = {
  title: "Om Smulders — 25+ Års Erfaring med Premium Hestestaldsinventar",
  description:
    "Smulders er en belgisk producent af premium hestestaldsinventar med over 25 års erfaring. 100% egenproduktion med CNC-laserskærer og svejserobotter. Leverer til 30+ lande. Læs vores historie.",
  alternates: {
    canonical: "https://smulders.dk/om-os",
  },
  openGraph: {
    title: "Om Smulders — 25+ Års Erfaring med Hestestaldsinventar",
    description:
      "Belgisk producent af premium hestestaldsinventar. 25+ års erfaring, 30+ lande, 9 boksserier, 100% egenproduktion med CNC-laserskærer og svejserobotter.",
    url: "https://smulders.dk/om-os",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Om Smulders",
  description: "Smulders er en belgisk producent af premium hestestaldsinventar med over 25 års erfaring i hesteindustrien",
  url: "https://smulders.dk/om-os",
  mainEntity: {
    "@type": "Organization",
    name: "Smulders",
    description: "Premium producent af hestebokse og staldinventar med over 25 års erfaring",
    url: "https://smulders.dk",
    telephone: "+4861444405",
    email: "office@smulders.pl",
    foundingDate: "2000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Grodziska 17 B",
      addressLocality: "Rakoniewice",
      postalCode: "62-067",
      addressCountry: "PL",
    },
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
    knowsAbout: ["Hestebokse", "Staldinventar", "American Barns", "Heste Walker", "Heste Solarium", "Stallboksdøre"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <OmOsContent />
    </>
  );
}
