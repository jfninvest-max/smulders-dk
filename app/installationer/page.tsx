import type { Metadata } from "next";
import InstallationerContent from "./Content";

export const metadata: Metadata = {
  title: "Installationer — Smulders Referenceprojekter Verden Over",
  description:
    "Se Smulders installationer fra Florida, Australien, Nederlandene, Spanien, Polen, Belgien og Italien. Fra private ryttere til professionelle anlæg som Magic Millions og Stallion Drive. Kontakt os for tilbud.",
  alternates: {
    canonical: "https://smulders.dk/installationer",
  },
  openGraph: {
    title: "Installationer — Smulders Referenceprojekter | Smulders Danmark",
    description:
      "Smulders installationer fra hele verden: Florida, Australien, Nederlandene, Spanien, Polen, Belgien, Italien. Premium hestestaldsinventar til private og professionelle anlæg.",
    url: "https://smulders.dk/installationer",
    images: [{ url: "https://www.smulders.pl/wp-content/uploads/2025/07/f001_stallion-drive-florida_SMULDERS_PL-1280x640.webp", alt: "Stallion Drive Florida — Smulders Windsor hestebokse installation" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Smulders Installationer — Referenceprojekter",
  description: "Udvalgte Smulders installationsprojekter fra hele verden — fra private ryttere til professionelle anlæg",
  url: "https://smulders.dk/installationer",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Stallion Drive, Florida, USA" },
      { "@type": "ListItem", position: 2, name: "Archipp Stajnia, Polen" },
      { "@type": "ListItem", position: 3, name: "Udendørs stald, Spanien" },
      { "@type": "ListItem", position: 4, name: "Windsor stald, Nederlandene" },
      { "@type": "ListItem", position: 5, name: "Classic Wave, Nederlandene" },
      { "@type": "ListItem", position: 6, name: "Professional-Series, Australien" },
      { "@type": "ListItem", position: 7, name: "Fioravanti Horse Farm, Italien" },
      { "@type": "ListItem", position: 8, name: "Magic Millions, Australien" },
      { "@type": "ListItem", position: 9, name: "Windsor stald, Belgien" },
      { "@type": "ListItem", position: 10, name: "EquiClub Zamłyniec, Polen" },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <InstallationerContent />
    </>
  );
}
