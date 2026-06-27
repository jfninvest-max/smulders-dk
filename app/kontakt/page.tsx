import type { Metadata } from "next";
import KontaktContent from "./Content";

export const metadata: Metadata = {
  title: "Kontakt Smulders — Få et Tilbud på Hestebokse",
  description:
    "Kontakt Smulders for tilbud på hestebokse og staldinventar til Danmark. Vi besvarer alle henvendelser inden for 24 timer. Tlf: +48 61 44 41 405. E-mail: office@smulders.pl",
  alternates: {
    canonical: "https://smulders.dk/kontakt",
  },
  openGraph: {
    title: "Kontakt Smulders — Hestebokse og Staldinventar til Danmark",
    description:
      "Kontakt os for tilbud på hestebokse, american barns, heste walker og staldinventar. Svar inden for 24 timer. +48 61 44 41 405 · office@smulders.pl",
    url: "https://smulders.dk/kontakt",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt Smulders",
  description:
    "Kontakt Smulders for tilbud på hestebokse og staldinventar til Danmark",
  url: "https://smulders.dk/kontakt",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Smulders",
    description:
      "Premium producent af hestebokse og staldinventar med over 25 års erfaring. Leverer til Danmark og 30+ lande.",
    url: "https://smulders.dk",
    telephone: "+4861444405",
    email: "office@smulders.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Grodziska 17 B",
      addressLocality: "Rakoniewice",
      postalCode: "62-067",
      addressCountry: "PL",
    },
    areaServed: [
      { "@type": "Country", name: "Danmark" },
      { "@type": "Country", name: "Polen" },
      { "@type": "Country", name: "Nederlandene" },
      { "@type": "Country", name: "Belgien" },
      { "@type": "Country", name: "Australien" },
      { "@type": "Country", name: "USA" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <KontaktContent />
    </>
  );
}
