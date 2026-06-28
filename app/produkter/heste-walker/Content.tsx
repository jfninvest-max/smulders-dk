"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fade = { hidden: { opacity: 1, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const specs = [
  { size: "15 m", horses: "4 heste" },
  { size: "16 m", horses: "4 eller 6 heste" },
  { size: "18 m", horses: "6 eller 8 heste" },
  { size: "20 m", horses: "8 heste" },
];

const features = [
  { title: "Hastighedsstyring", desc: "Trinløs hastighedsjustering" },
  { title: "Sikkerhed", desc: "Nødstopper ved hvert segment" },
  { title: "Smøring", desc: "Automatisk smøresystem" },
  { title: "Rotation", desc: "Venstre, højre eller automatisk skift" },
  { title: "Hegn", desc: "Plastik, net eller bambus" },
  { title: "Tag", desc: "Valgfri overdækning tilgængelig" },
];

const images = [
  "https://www.smulders.pl/wp-content/uploads/2019/03/f001_horse-walkers_roofings_1200_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/03/f004_horse-walkers_roofings_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/03/f005_horse-walkers_roofings_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/03/f006_horse-walkers_roofings_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/03/f009_horse-walkers_roofings_1200_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/03/f012_horse-walkers_roofings_1200_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/03/f014_horse-walkers_roofings_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/03/f015_horse-walkers_roofings_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/03/f021_horse-walkers_roofings_1200_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/03/f023_horse-walkers_roofings_1200_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/03/f024_horse-walkers_roofings_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/03/f027_horse-walkers_roofings_1200_SMULDERS_PL.jpg",
];

export default function HesteWalkerContent() {
  return (
    <main className="pt-20">
      <section className="relative h-[55vh] overflow-hidden flex items-end">
        <Image
          src="https://www.smulders.pl/wp-content/uploads/2019/03/f001_horse-walkers_roofings_1200_SMULDERS_PL.jpg"
          alt="Smulders heste walker karussel til 4–8 heste med overdækning"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-3">Produkter</motion.p>
            <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-normal mb-4">Heste Walker</motion.h1>
            <motion.p variants={fade} className="font-sans text-white/50 max-w-lg leading-relaxed">
              Ekstremt solid, driftsikker og konkurrencedygtig. Til 4–8 heste med automatisk hastighedsjustering.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-16 md:mb-20">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h2 variants={fade} className="font-display text-3xl md:text-4xl font-normal mb-6">Størrelser og kapacitet</motion.h2>
            <motion.p variants={fade} className="font-sans text-white/50 leading-relaxed mb-8">
              Smulders heste walker fås i fire størrelser, alle med den samme høje kvalitet og driftsikkerhed. Hegnet kan leveres i plastik, net eller bambus — og overdækning er tilgængeligt som tilvalg.
            </motion.p>
            <motion.div variants={fade} className="border border-white/8">
              {specs.map((s, i) => (
                <div key={i} className={`flex justify-between px-6 py-4 font-sans text-sm ${i < specs.length - 1 ? "border-b border-white/5" : ""}`}>
                  <span className="text-white/40 tracking-widest uppercase text-[10px]">⌀ {s.size}</span>
                  <span className="text-foreground/70">{s.horses}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h2 variants={fade} className="font-display text-3xl md:text-4xl font-normal mb-6">Funktioner</motion.h2>
            <motion.div variants={fade} className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="border border-white/8 p-4">
                  <p className="font-sans text-[9px] tracking-widest text-gold/60 uppercase mb-1">{f.title}</p>
                  <p className="font-sans text-sm text-white/60">{f.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 1, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={src}
                alt={`Smulders heste walker galleri — billede ${i + 1}`}
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
          <motion.h2 variants={fade} className="font-display text-3xl font-normal mb-5">Hvad er den rette heste walker til din stald?</motion.h2>
          <motion.p variants={fade} className="font-sans text-white/40 mb-10 max-w-sm mx-auto">Kontakt os for rådgivning og et tilbud.</motion.p>
          <motion.div variants={fade}>
            <Link href="/kontakt" className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-12 py-4 hover:opacity-85 transition-opacity duration-300">Kontakt os</Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
