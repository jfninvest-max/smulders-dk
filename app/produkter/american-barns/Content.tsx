"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fade = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const images = [
  "https://www.smulders.pl/wp-content/uploads/2019/02/f000_american-barns_smulders_pl.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f001_american-barns_smulders_pl.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f002_american-barns_smulders_pl.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f003_american-barns_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f004_american-barns_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f005_american-barns_outdoor-boxes_SMULDERS_PL-1280x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f006_american-barns_outdoor-boxes_SMULDERS_PL-1280x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f007_american-barns_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f008_american-barns_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f009_american-barns_outdoor-boxes_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f010_american-barns_outdoor-boxes_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f011_american-barns_outdoor-boxes_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f013_american-barns_outdoor-boxes_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f014_american-barns_outdoor-boxes_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f015_american-barns_outdoor-boxes_SMULDERS_PL-1280x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f016_american-barns_outdoor-boxes_SMULDERS_PL-640x640.jpg",
];

const features = [
  { title: "Komplet løsning", desc: "Bygning inkl. indendørs staldbokse" },
  { title: "Fundament", desc: "Kræver støbt betonfundament" },
  { title: "Beklædning", desc: "Plastik, bambus eller egetræ" },
  { title: "Finish", desc: "Galvaniseret eller pulverlakeret" },
];

export default function AmericanBarnsContent() {
  return (
    <main className="pt-20">
      <section className="relative h-[55vh] overflow-hidden flex items-end">
        <Image
          src="https://www.smulders.pl/wp-content/uploads/2019/02/f000_american-barns_smulders_pl.jpg"
          alt="Smulders American Barn — komplet stallbygning med indendørs hestebokse"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-3">Produkter</motion.p>
            <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-normal mb-4">American Barns</motion.h1>
            <motion.p variants={fade} className="font-sans text-white/50 max-w-lg leading-relaxed">
              En komplet stallbygning med indendørs hestebokse — alt leveret fra én producent.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fade} className="font-display text-3xl md:text-4xl font-normal mb-6">
              Den komplette stallbygning
            </motion.h2>
            <motion.p variants={fade} className="font-sans text-white/50 leading-relaxed mb-8">
              Smulders American Barns er den totale løsning for den seriøse hesteejer. Bygningen kombinerer robuste ydervægge med vores premium indendørs staldbokse og kan konfigureres med valgfri beklædning og overfladebehandling. Fundament medfølger ikke, men vi rådgiver gerne.
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
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://www.smulders.pl/wp-content/uploads/2019/02/f001_american-barns_smulders_pl.jpg"
              alt="American Barn indvendig med indendørs hestebokse fra Smulders"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={src}
                alt={`American Barn hestestald galleri — billede ${i + 1}`}
                fill
                loading="lazy"
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 text-center border-t border-white/5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fade} className="font-display text-3xl font-normal mb-5">Planlæg din American Barn</motion.h2>
          <motion.p variants={fade} className="font-sans text-white/40 mb-10 max-w-sm mx-auto">Vi hjælper med projektering og tilbud tilpasset dit areal.</motion.p>
          <motion.div variants={fade}>
            <Link href="/kontakt" className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-12 py-4 hover:opacity-85 transition-opacity duration-300">Kontakt os</Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
