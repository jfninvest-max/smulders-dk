"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fade = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const styles = [
  { name: "Lige lavedør", img: "https://www.smulders.pl/wp-content/uploads/2019/02/f002_stable-barn-doors_980_SMULDERS_PL.jpg", desc: "Klassisk rektangulær form — enkelt eller delt vandret" },
  { name: "Buet lavedør", img: "https://www.smulders.pl/wp-content/uploads/2019/02/f010_stable-barn-doors_980_SMULDERS_PL.jpg", desc: "Elegant buet top — giver stalden et herskabeligt udtryk" },
  { name: "Enkelt delt lavedør", img: "https://www.smulders.pl/wp-content/uploads/2025/04/f011_stable-barn-doors_980_one-divided_SMULDERS_PL.jpg", desc: "Enkelt fløj med vandret opdeling for fleksibel brug" },
];

const images = [
  "https://www.smulders.pl/wp-content/uploads/2019/02/f002_stable-barn-doors_SMULDERS_PL-1280x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f003_stable-barn-doors_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f004_stable-barn-doors_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f005_stable-barn-doors_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f006_stable-barn-doors_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f007_stable-barn-doors_SMULDERS_PL-1280x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f008_stable-barn-doors_SMULDERS_PL-1280x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f009_stable-barn-doors_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f010_stable-barn-doors_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f011_stable-barn-doors_SMULDERS_PL-640x640.jpg",
  "https://www.smulders.pl/wp-content/uploads/2019/02/f012_stable-barn-doors_SMULDERS_PL-640x640.jpg",
];

export default function LavedoereContent() {
  return (
    <main className="pt-20">
      <section className="relative h-[55vh] overflow-hidden flex items-end">
        <Image
          src="https://www.smulders.pl/wp-content/uploads/2025/07/barn-doors_SMULDERS_PL.webp"
          alt="Smulders lavedøre til stald — lige og buede stilarter"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-3">Produkter</motion.p>
            <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-normal mb-4">Lavedøre</motion.h1>
            <motion.p variants={fade} className="font-sans text-white/50 max-w-lg leading-relaxed">
              Forbedrer stallens udvendige udseende markant — afrundet ramme, ingen skarpe kanter.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16">
          <motion.h2 variants={fade} className="font-display text-3xl font-normal mb-6">Stilarter</motion.h2>
          <motion.p variants={fade} className="font-sans text-white/50 leading-relaxed max-w-2xl mb-12">
            Smulders lavedøre fås i lige og buede stilarter. De kan leveres som enkelt eller dobbelt fløj, og som fuldt lukket eller vandret opdelt. Overfladen kan galvaniseres eller pulverlakeres i valgfri farve.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            {styles.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}>
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={s.img}
                    alt={`${s.name} til hestestald — Smulders`}
                    fill
                    loading="lazy"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-display text-xl font-normal mb-2">{s.name}</h3>
                <p className="font-sans text-sm text-white/40">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={src}
                alt={`Lavedør til stald galleri — billede ${i + 1}`}
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
          <motion.h2 variants={fade} className="font-display text-3xl font-normal mb-5">Opgrader din stalddør</motion.h2>
          <motion.p variants={fade} className="font-sans text-white/40 mb-10 max-w-sm mx-auto">Kontakt os for mål, farver og leveringstid.</motion.p>
          <motion.div variants={fade}>
            <Link href="/kontakt" className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-12 py-4 hover:opacity-85 transition-opacity duration-300">Kontakt os</Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
