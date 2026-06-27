"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fade = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const features = [
  { title: "Ramme", desc: "Ingen skarpe kanter" },
  { title: "Hængsler", desc: "Rustfrit stål" },
  { title: "Glas", desc: "Sikkerhedsglas 3/0,5/3 mm" },
  { title: "Åbning", desc: "Justerbar åbningsgrad" },
];

const images = [
  "https://www.smulders.pl/wp-content/uploads/2019/02/f002_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f003_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f004_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f005_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f006_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f007_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f008_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f009_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f010_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f011_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f012_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f013_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f014_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f015_windows_SMULDERS_PL.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f016_windows_SMULDERS_PL.jpg",
];

export default function VinduerContent() {
  return (
    <main className="pt-20">
      <section className="relative h-[55vh] overflow-hidden flex items-end">
        <Image
          src="https://www.smulders.pl/wp-content/uploads/2025/07/windows-for-horse-stable_SMULDERS_PL.webp"
          alt="Smulders vinduer til hestestald — sikkerhedsglas og rustfrit stål hængsler"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-3">Produkter</motion.p>
            <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-normal mb-4">Vinduer til stald</motion.h1>
            <motion.p variants={fade} className="font-sans text-white/50 max-w-lg leading-relaxed">
              Sikre og holdbare vinduer designet specifikt til hestestalde.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fade} className="font-display text-3xl font-normal mb-6">Funktioner og specifikationer</motion.h2>
            <motion.p variants={fade} className="font-sans text-white/50 leading-relaxed mb-8">
              Smulders stallvinduer er designet med hestens sikkerhed i højsædet. Alle dele er uden skarpe kanter, og lamineret sikkerhedsglas sikrer mod splinter. Rustfrie stål hængsler garanterer lang levetid selv i fugtigt stallmiljø.
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
              src="https://www.smulders.pl/wp-content/uploads/2019/02/f002_windows_SMULDERS_PL.jpg"
              alt="Smulders staldsvindue med lamineret sikkerhedsglas og rustfri stål ramme"
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
                alt={`Staldsvindue galleri — billede ${i + 1}`}
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
          <motion.h2 variants={fade} className="font-display text-3xl font-normal mb-5">Spørg om vinduer til din stald</motion.h2>
          <motion.p variants={fade} className="font-sans text-white/40 mb-10 max-w-sm mx-auto">Vi hjælper med mål og montage.</motion.p>
          <motion.div variants={fade}>
            <Link href="/kontakt" className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-12 py-4 hover:opacity-85 transition-opacity duration-300">Kontakt os</Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
