"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fade = { hidden: { opacity: 1, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const accessories = [
  {
    name: "Drikkeskål Black Beauty 24",
    desc: "Robust og lettilgængelig drikkeskål til alle hesteracer.",
    img: "https://www.smulders.pl/wp-content/uploads/2016/05/f003_b_drinking-bowl_BB24_SMULDERS_PL.jpg",
  },
  {
    name: "Drikkeskål Suevia P12",
    desc: "Automatisk drikkeskål med termostatstyret opvarmning til kolde klimaer.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/03/f001_drinking-bowl_p12_poidlo-dla-koni_SMULDERS_PL-300x300.jpg",
  },
  {
    name: "Beskyttelsesbeslag til drikkeskåle",
    desc: "Galvaniserede beskyttelsesbeslag forhindrer beskadigelse af drikkeskålen.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/03/f001_protection-brackets-for-drinking-bowls_SMULDERS_PL-300x300.jpg",
  },
  {
    name: "Hækkekrybbe",
    desc: "Europæisk foderfront til hø og kraftfoder — solid og let at rengøre.",
    img: "https://www.smulders.pl/wp-content/uploads/2016/05/f001_feeder-for-a-horse_karmidlo-zlob_SMULDERS_PL-300x300.jpg",
  },
  {
    name: "Fodervogn — galvaniseret",
    desc: "Praktisk vogn til distribution af foder i stalden. Galvaniseret finish.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/03/f001_feed-trolley-galvanized_wozek-do-paszy_SMULDERS_PL-300x300.jpg",
  },
  {
    name: "Fodervogn — pulverlakeret",
    desc: "Samme robuste vogn i pulverlakeret version — fås i flere farver.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/03/f001_feed-trolley-painted_wozek-do-paszy_SMULDERS_PL-300x300.jpg",
  },
  {
    name: "Solarium 3-panel",
    desc: "Kompakt solarium til varme og restitution. 15 lamper, 2.550 W.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/03/f001_horse-solarium_solarium-dla-koni_SMULDERS_PL-300x300.jpg",
  },
  {
    name: "Solarium 4-panel",
    desc: "Større solarium til maksimal dækning. 20 lamper, 3.000 W.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/03/f002_horse-solarium_solarium-dla-koni_SMULDERS_PL-300x300.jpg",
  },
];

export default function TilbehoerContent() {
  return (
    <main className="pt-20">
      <section className="relative h-[45vh] overflow-hidden flex items-end">
        <Image
          src="https://www.smulders.pl/wp-content/uploads/2019/01/f006_cih_accessories_SMULDERS_PL-640x427.jpg"
          alt="Smulders staldinventar tilbehør — drikkeskåle, fodervogne og hækkekrybber"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-3">Produkter</motion.p>
            <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-normal mb-4">Tilbehør</motion.h1>
            <motion.p variants={fade} className="font-sans text-white/50 max-w-lg leading-relaxed">
              Drikkeskåle, fodervogne, krybber og solariebeslage — alt det du behøver til den komplette hestestald.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((acc, i) => (
            <motion.div
              key={acc.name}
              initial={{ opacity: 1, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden bg-white/[0.025] mb-4 border border-white/[0.06] group-hover:border-gold/25 transition-colors duration-400">
                <Image
                  src={acc.img}
                  alt={`${acc.name} — staldinventar tilbehør fra Smulders`}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-600"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-display text-lg font-normal mb-2 group-hover:text-gold transition-colors duration-300">{acc.name}</h3>
              <p className="font-sans text-sm text-white/40 leading-relaxed">{acc.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-20 px-6 text-center border-t border-white/5">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.h2 variants={fade} className="font-display text-3xl font-normal mb-5">Spørg om priser på staldinventar tilbehør</motion.h2>
          <motion.p variants={fade} className="font-sans text-white/40 mb-10 max-w-sm mx-auto">Vi sender tilbud på det tilbehør, du har brug for.</motion.p>
          <motion.div variants={fade}>
            <Link href="/kontakt" className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-12 py-4 hover:opacity-85 transition-opacity duration-300">Kontakt os</Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
