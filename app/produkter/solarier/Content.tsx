"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fade = { hidden: { opacity: 1, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const models = [
  {
    name: "3-Panel Solarium",
    specs: [
      { label: "Lamper", value: "15 stk. á 150–250 W" },
      { label: "Ventilatorer", value: "3 stk. (1 pr. panel)" },
      { label: "Effekt", value: "2.550 W total" },
      { label: "Strøm", value: "230 V" },
      { label: "Vægt", value: "49 kg" },
    ],
    img: "https://www.smulders.pl/wp-content/uploads/2019/03/f001_horse-solarium_solarium-dla-koni_SMULDERS_PL-300x300.jpg",
  },
  {
    name: "4-Panel Solarium",
    specs: [
      { label: "Lamper", value: "20 stk. á 150–250 W" },
      { label: "Ventilatorer", value: "4 stk. (1 pr. panel)" },
      { label: "Effekt", value: "3.000 W total" },
      { label: "Strøm", value: "230 V" },
      { label: "Vægt", value: "61 kg" },
    ],
    img: "https://www.smulders.pl/wp-content/uploads/2019/03/f002_horse-solarium_solarium-dla-koni_SMULDERS_PL-300x300.jpg",
  },
];

const images = [
  "https://www.smulders.pl/wp-content/uploads/2019/02/f001_horse-solariums_solarium-for-horses_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f002_horse-solariums_solarium-for-horses_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f003_horse-solariums_solarium-for-horses_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f004_horse-solariums_solarium-for-horses_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f005_horse-solariums_solarium-for-horses_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f006_horse-solariums_solarium-for-horses_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f008_horse-solariums_solarium-for-horses_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f009_horse-solariums_solarium-for-horses_SMULDERS_PL-1280x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f010_horse-solariums_solarium-for-horses_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f011_horse-solariums_solarium-for-horses_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f012_horse-solariums_solarium-for-horses_SMULDERS_PL.jpg",
];

export default function SolarierContent() {
  return (
    <main className="pt-20">
      <section className="relative h-[55vh] overflow-hidden flex items-end">
        <Image
          src="https://www.smulders.pl/wp-content/uploads/2025/07/solaria-dla-koni_SMULDERS_PL.webp"
          alt="Smulders heste solarium — 3-panel og 4-panel modeller til hestestald"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-3">Produkter</motion.p>
            <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-normal mb-4">Solarier til heste</motion.h1>
            <motion.p variants={fade} className="font-sans text-white/50 max-w-lg leading-relaxed">
              Fremskynder regenerering af muskler og led og forbedrer hestens velvære året rundt.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-20 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-16 max-w-2xl">
          <motion.h2 variants={fade} className="font-display text-3xl md:text-4xl font-normal mb-6">To modeller tilgængelige</motion.h2>
          <motion.p variants={fade} className="font-sans text-white/50 leading-relaxed">
            Smulders solarier fås i 3- og 4-panel versioner. Begge modeller har kraftige varmelegemer, indbygget ventilation og kan suppleres med lift, møntbetjening og pulverlakering i valgfri farve.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {models.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 1, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} className="border border-white/8 p-8">
              <h3 className="font-display text-2xl font-normal mb-6">{m.name}</h3>
              <div className="flex flex-col gap-3">
                {m.specs.map((s) => (
                  <div key={s.label} className="flex justify-between border-b border-white/5 pb-3">
                    <span className="font-sans text-[10px] tracking-widest text-gold/60 uppercase">{s.label}</span>
                    <span className="font-sans text-sm text-white/60">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 1, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: i * 0.04 }} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={src}
                alt={`Smulders heste solarium galleri — billede ${i + 1}`}
                fill
                loading="lazy"
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-20 px-6 text-center border-t border-white/5">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.h2 variants={fade} className="font-display text-3xl font-normal mb-5">Giv din hest det bedste</motion.h2>
          <motion.p variants={fade} className="font-sans text-white/40 mb-10 max-w-sm mx-auto">Kontakt os for priser og yderligere specifikationer på vores solarier.</motion.p>
          <motion.div variants={fade}>
            <Link href="/kontakt" className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-12 py-4 hover:opacity-85 transition-opacity duration-300">Kontakt os</Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
