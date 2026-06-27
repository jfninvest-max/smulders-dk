import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Smulders — Premium Hestebokse og Staldinventar til Danmark",
  description:
    "Smulders leverer premium hestebokse og staldinventar til Danmark. Belgisk kvalitet, 9 boksserier, american barns, heste walkere og solarier. Over 25 års erfaring. Kontakt os for tilbud.",
  alternates: {
    canonical: "https://smulders.dk/",
  },
  openGraph: {
    title: "Smulders — Premium Hestebokse og Staldinventar til Danmark",
    description:
      "Premium hestebokse og staldinventar med over 25 års belgisk erfaring. 9 boksserier, american barns, heste walkere, solarier. Leverer til Danmark og 30+ lande.",
    url: "https://smulders.dk/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Smulders",
  description:
    "Premium hestebokse og staldinventar med over 25 års erfaring. Belgisk produceret kvalitet leveret til Danmark og 30+ lande. 9 boksserier, american barns, heste walkere og solarier.",
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
  areaServed: ["DK", "SE", "NO", "DE", "NL", "BE", "GB", "PL", "AU", "US"],
  sameAs: [
    "https://www.smulders.pl",
    "https://smuldersstables.co.uk",
  ],
  image:
    "https://www.smulders.pl/wp-content/uploads/2025/07/boksy-windsor_SMULDERS_PL.webp",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hestestaldsinventar",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Indendørs Hestebokse" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Udendørs Hestebokse" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "American Barns" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Heste Walker" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Solarier til Heste" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Stallboksdøre" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Vinduer til Stald" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Lavedøre" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Leverer Smulders hestebokse til Danmark?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Smulders leverer premium staldinventar til Danmark og over 30 andre lande. Kontakt os via office@smulders.pl eller tlf. +48 61 44 41 405 for et tilbud med levering til din adresse i Danmark.",
      },
    },
    {
      "@type": "Question",
      name: "Hvad koster hestebokse fra Smulders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prisen afhænger af serie, størrelse og konfiguration. Sport-Line er det mest prisvenlige valg, mens Windsor og Grand Prestige er premium-serier. Kontakt os for et gratis, uforpligtende tilbud tilpasset dit projekt.",
      },
    },
    {
      "@type": "Question",
      name: "Hvad er forskellen på indendørs og udendørs hestebokse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indendørs bokse er designet til placering inde i en stallbygning og fås i 9 serier. Udendørs bokse er selvstændige enheder med spids eller ensidig tagkonstruktion — et fleksibelt alternativ til den traditionelle stald.",
      },
    },
    {
      "@type": "Question",
      name: "Hvor mange boksserier tilbyder Smulders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Smulders tilbyder 9 serier indendørs hestebokse: Sport-Line, Professional-Series, Classic Wave, Royal Wave, Swing Wave, Windsor, Lexington, Grand Prestige og Young Horses — fra prisvenlig til absolut luksus.",
      },
    },
    {
      "@type": "Question",
      name: "Hvad er en American Barn fra Smulders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En American Barn er en komplet stallbygning med indendørs staldbokse integreret i konstruktionen. Alt leveres fra én producent. Bygningen kræver støbt betonfundament og kan konfigureres med plastik, bambus eller egetræ beklædning.",
      },
    },
    {
      "@type": "Question",
      name: "Hvad er en heste walker og hvilke størrelser fås den i?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En heste walker er en roterende træningskarussel til heste. Smulders walker fås i 4 størrelser: ⌀ 15 m (4 heste), ⌀ 16 m (4 eller 6 heste), ⌀ 18 m (6 eller 8 heste) og ⌀ 20 m (8 heste) — alle med trinløs hastighedsjustering og automatisk smøresystem.",
      },
    },
    {
      "@type": "Question",
      name: "Hvad bruges et heste solarium til?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Et heste solarium fremskynder regenerering af muskler og led efter træning og forbedrer hestens velvære. Smulders solarier fås i 3-panel (2.550 W, 49 kg) og 4-panel (3.000 W, 61 kg) version med 230 V strøm.",
      },
    },
    {
      "@type": "Question",
      name: "Hvad er Smulders hestebokse lavet af?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Smulders bokse er fremstillet af galvaniseret eller pulverlakeret stål. Beklædning fås i plastik (32 mm, farver: brun, sort, grå, rød), bambus eller egetræ. Alle dele er uden skarpe kanter for maksimal hestesikkerhed.",
      },
    },
    {
      "@type": "Question",
      name: "Kan Smulders levere et komplet staldprojekt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Smulders leverer staldbokse, døre, vinduer, lavedøre, heste walker, solarium og tilbehør fra én producent. Vores tekniske afdeling rådgiver om layout og konfiguration via CAD-tegninger tilpasset dit areal.",
      },
    },
    {
      "@type": "Question",
      name: "Har Smulders referencer fra kendte stalde og ryttere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Smulders har installeret staldinventar til kendte anlæg som Magic Millions (Australien), Stallion Drive (Florida, USA), EquiClub Zamłyniec (Polen) og mange europæiske stalde. Se vores installationsside for billeder og detaljer.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeContent />
    </>
  );
}
