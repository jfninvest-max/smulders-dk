"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fade = { hidden: { opacity: 1, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };


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

      <section className="py-10 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Main contact */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="md:col-span-1"
          >
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-6">Hovedkontor</motion.p>
            <motion.div variants={fade} className="flex flex-col gap-5 font-sans text-sm">
              <div>
                <p className="text-[9px] tracking-widest text-white/30 uppercase mb-1">E-mail</p>
                <a href="mailto:smulders.dk@gmail.com" className="inline-flex items-center min-h-[44px] text-gold hover:opacity-75 transition-opacity">smulders.dk@gmail.com</a>
              </div>
            </motion.div>
          </motion.div>

          {/* Message prompt */}
          <motion.div
            initial="hidden"
            animate="visible"
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
                href="mailto:smulders.dk@gmail.com"
                className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-10 py-4 hover:opacity-85 transition-opacity duration-300 text-center"
              >
                Skriv til os
              </a>
            </motion.div>
          </motion.div>
        </div>

      </section>
    </main>
  );
}
