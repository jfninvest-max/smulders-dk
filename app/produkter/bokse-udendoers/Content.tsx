"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fade = { hidden: { opacity: 1, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const images = [
  "https://www.smulders.pl/wp-content/uploads/2019/02/f001_outdoor-boxes_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f002_outdoor-boxes_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f003b_outdoor-boxes_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f004_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f005_outdoor-boxes_SMULDERS_PL-1280x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f006_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f008_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f009_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f010_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f011_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f012_outdoor-boxes_SMULDERS_PL-1280x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f013_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f014_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f020_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f021_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f023_outdoor-boxes_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f024_outdoor-boxes_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f025_outdoor-boxes_SMULDERS_PL-1280x640.jpg",
];

const features = [
  { title: "Tagformer", desc: "Spids eller ensidig (pent) tag" },
  { title: "Beklædning", desc: "Plastik, bambus eller egetræ" },
  { title: "Overfladebehandling", desc: "Galvaniseret eller pulverlakeret" },
  { title: "Fleksibelt design", desc: "Tilpasses dit areal og dine heste" },
];

export default function UdendoersBokseContent() {
  return (
    <main className="pt-20">
      <section className="relative h-[55vh] overflow-hidden flex items-end">
        <Image
          src="https://www.smulders.pl/wp-content/uploads/2025/07/boksy-zewnetrzne-dla-koni_SMULDERS_PL.webp"
          alt="Smulders udendørs hestebokse — friluftsstald med spids tag"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-3">Produkter</motion.p>
            <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-normal mb-4">Udendørs Hestebokse</motion.h1>
            <motion.p variants={fade} className="font-sans text-white/50 max-w-lg leading-relaxed">
              Et fleksibelt og moderne alternativ til den traditionelle stald — designet til at klare alle vejrforhold.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-5">Om produktet</motion.p>
            <motion.h2 variants={fade} className="font-display text-3xl md:text-4xl font-normal mb-6">
              Friluftsstald med komfort og stil
            </motion.h2>
            <motion.p variants={fade} className="font-sans text-white/50 leading-relaxed mb-8">
              Smulders udendørs bokse er det ideelle valg for dem, der ønsker en solid og æstetisk løsning uden en komplet staldbygning. Boksene kan konfigureres med forskellig beklædning og tagformer, og de fås i både galvaniseret og pulverlakeret finish.
            </motion.p>
            <motion.div variants={fade} className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="border border-white/8 p-4">
                  <p className="font-sans text-[9px] tracking-widest text-gold/60 uppercase mb-1">{f.title}</p>
                  <p className="font-sans text-sm text-white/60">{f.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 1, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://www.smulders.pl/wp-content/uploads/2019/02/f001_outdoor-boxes_SMULDERS_PL-1280x640.jpg"
              alt="Smulders udendørs hesteboks med ensidig tagkonstruktion"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        <motion.h2 initial="hidden" animate="visible" variants={fade} className="font-display text-2xl md:text-3xl font-normal mb-8">
          Galleri — udendørs hestebokse
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 1, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: i * 0.04 }} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={src}
                alt={`Udendørs hesteboks galleri — billede ${i + 1}`}
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
          <motion.h2 variants={fade} className="font-display text-3xl font-normal mb-5">Interesseret i udendørs hestebokse?</motion.h2>
          <motion.p variants={fade} className="font-sans text-white/40 mb-10 max-w-sm mx-auto">Kontakt os for priser og konfigurationsmuligheder.</motion.p>
          <motion.div variants={fade}>
            <Link href="/kontakt" className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-12 py-4 hover:opacity-85 transition-opacity duration-300">Kontakt os</Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
