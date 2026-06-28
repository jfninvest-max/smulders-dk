"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fade = { hidden: { opacity: 1, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const categories = [
  {
    href: "/produkter/bokse-indendoers",
    label: "Indendørs Bokse",
    desc: "9 serier fra Sport-Line til Grand Prestige — det perfekte boksedesign til enhver hestestald.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/01/f002_cih_internal-stable_SMULDERS_PL-640x427.jpg",
  },
  {
    href: "/produkter/bokse-udendoers",
    label: "Udendørs Bokse",
    desc: "Et fleksibelt alternativ til den traditionelle stald som fås med 2 typer tagkonstruktioner.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/01/f003_cih_outdoor-stables_SMULDERS_PL-640x427.jpg",
  },
  {
    href: "/produkter/american-barns",
    label: "American Barns",
    desc: "Komplet staldbygning med indendørs staldbokse — leveret med alt inventar.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/01/f001_cih_american-barns_SMULDERS_PL-640x427.jpg",
  },
  {
    href: "/produkter/heste-walker",
    label: "Heste Walker",
    desc: "Ekstremt solid og driftsikker. Størrelser til 4–8 heste, trinløs hastighedsjustering.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/01/f004_cih_horse-walker_SMULDERS_PL-640x428.jpg",
  },
  {
    href: "/produkter/solarier",
    label: "Solarier",
    desc: "Fremskynder regenerering af muskler og led. 3- og 4-panel modeller.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/01/f005_cih_solarium-for-horses_SMULDERS_PL-640x427.jpg",
  },
  {
    href: "/produkter/doere",
    label: "Staldboksdøre",
    desc: "Låsbart rustfrit stål dørgreb. Tre modeller tilgængelige.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/01/f009_cih_doors_SMULDERS_PL-640x427.jpg",
  },
  {
    href: "/produkter/vinduer",
    label: "Vinduer",
    desc: "Rammer uden skarpe kanter, rustfrie stål hængsler og sikkerhedsglas.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/01/f008_cih_windows_SMULDERS_PL-640x427.jpg",
  },
  {
    href: "/produkter/lavedoere",
    label: "Ladedøre",
    desc: "Forbedrer staldens udvendige udseende markant. Lige og buede stilarter.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/01/f007_cih_barn-doors_SMULDERS_PL-640x427.jpg",
  },
  {
    href: "/produkter/tilbehoer",
    label: "Tilbehør",
    desc: "Drikkeskåle, fodervogne, hækkekrybber og beskyttelsesbeslag.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/01/f006_cih_accessories_SMULDERS_PL-640x427.jpg",
  },
];

export default function ProdukterContent() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden flex items-end">
        <Image
          src="https://www.smulders.pl/wp-content/uploads/2025/07/boksy-windsor_SMULDERS_PL.webp"
          alt="Smulders komplet produktsortiment — hestebokse og staldinventar"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-3">
              Komplet sortiment
            </motion.p>
            <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-normal">
              Hestebokse og staldinventar
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.href}
              initial={{ opacity: 1, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
            >
              <Link href={cat.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <Image
                    src={cat.img}
                    alt={`${cat.label} fra Smulders`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-background/25 group-hover:bg-background/5 transition-colors duration-400" />
                </div>
                <h2 className="font-display text-2xl font-normal mb-2 group-hover:text-gold transition-colors duration-300">
                  {cat.label}
                </h2>
                <p className="font-sans text-sm text-white/40 leading-relaxed">{cat.desc}</p>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60 mt-4 group-hover:text-gold transition-colors">
                  Se mere →
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
