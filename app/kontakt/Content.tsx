"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fade = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const regions = [
  { region: "Polen", contact: "+48 600 370 537" },
  { region: "Benelux", contact: "+31 651 304 171" },
  { region: "Australien", contact: "+61 400 522 330" },
  { region: "Tyskland", contact: "Via kontor" },
  { region: "Frankrig", contact: "Via kontor" },
  { region: "Schweiz", contact: "Via kontor" },
  { region: "UK & Irland", contact: "Via kontor" },
  { region: "Sverige", contact: "Via kontor" },
  { region: "Spanien & Portugal", contact: "Via kontor" },
  { region: "Italien", contact: "Via kontor" },
  { region: "USA", contact: "Via kontor" },
  { region: "Øvrige lande inkl. Danmark", contact: "office@smulders.pl" },
];

export default function KontaktContent() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden flex items-end">
        <Image
          src="https://www.smulders.pl/wp-content/uploads/2025/07/boksy-windsor_SMULDERS_PL.webp"
          alt="Kontakt Smulders — få et tilbud på hestebokse og staldinventar"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative z-10 px-6 pb-14 max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-3">Kom i kontakt</motion.p>
            <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-normal">Kontakt os</motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Main contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="md:col-span-1"
          >
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-6">Hovedkontor</motion.p>
            <motion.div variants={fade} className="flex flex-col gap-5 font-sans text-sm">
              <div>
                <p className="text-[9px] tracking-widest text-white/30 uppercase mb-1">Adresse</p>
                <p className="text-white/60 leading-relaxed">ul. Grodziska 17 B<br />62-067 Rakoniewice<br />Polen</p>
              </div>
              <div>
                <p className="text-[9px] tracking-widest text-white/30 uppercase mb-1">Telefon</p>
                <a href="tel:+4861444405" className="inline-flex items-center min-h-[44px] text-white/60 hover:text-gold transition-colors">+48 61 44 41 405</a>
                <a href="tel:+4861444318" className="inline-flex items-center min-h-[44px] text-white/60 hover:text-gold transition-colors">+48 61 44 41 318</a>
              </div>
              <div>
                <p className="text-[9px] tracking-widest text-white/30 uppercase mb-1">E-mail</p>
                <a href="mailto:office@smulders.pl" className="inline-flex items-center min-h-[44px] text-gold hover:opacity-75 transition-opacity">office@smulders.pl</a>
              </div>
            </motion.div>
          </motion.div>

          {/* Message prompt */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="md:col-span-2 border border-white/8 p-8"
          >
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-6">Send en forespørgsel</motion.p>
            <motion.h2 variants={fade} className="font-display text-2xl md:text-3xl font-normal mb-4 leading-snug">
              Fortæl os om dit staldprojekt
            </motion.h2>
            <motion.p variants={fade} className="font-sans text-white/50 leading-relaxed mb-8">
              Vi besvarer alle henvendelser inden for 24 timer på hverdage. Beskriv gerne hvilke produkter du er interesseret i, antal bokse, areal og evt. tidsplan — så kan vi give dig et præcist tilbud på hestebokse hurtigst muligt.
            </motion.p>
            <motion.div variants={fade} className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:office@smulders.pl"
                className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-10 py-4 hover:opacity-85 transition-opacity duration-300 text-center"
              >
                Skriv til os
              </a>
              <a
                href="tel:+4861444405"
                className="inline-block font-sans text-xs tracking-[0.25em] uppercase border border-white/20 text-white/60 px-10 py-4 hover:border-gold/50 hover:text-gold transition-all duration-300 text-center"
              >
                Ring til os
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Regional reps */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-6">Salgsrepræsentanter</motion.p>
          <motion.h2 variants={fade} className="font-display text-2xl md:text-3xl font-normal mb-8">Vi leverer til hele verden</motion.h2>
          <motion.div variants={fade} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px border border-white/5 overflow-hidden">
            {regions.map((r) => (
              <div key={r.region} className="px-5 py-4 bg-white/[0.015] border border-white/5">
                <p className="font-sans text-[9px] tracking-widest text-gold/60 uppercase mb-1">{r.region}</p>
                <p className="font-sans text-xs text-white/45">{r.contact}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
