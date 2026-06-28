"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const fade = { hidden: { opacity: 1, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const stats = [
  { value: "25+", label: "Års erfaring" },
  { value: "30+", label: "Lande leveret til" },
  { value: "9", label: "Boksserier" },
  { value: "100%", label: "Egenproduktion" },
];

const machines = [
  { name: "Svejserobotten", desc: "Præcisionsvejsning til ensartet høj kvalitet i stor skala.", img: "https://www.smulders.pl/wp-content/uploads/2019/03/f001_video-picture_FD-B4L_SMULDERS_PL-320x240.jpg", embedUrl: "https://www.youtube.com/embed/zvIu72oBsJc" },
  { name: "Laserskærer", desc: "Laserskæring af stål med submillimeter præcision.", img: "https://www.smulders.pl/wp-content/uploads/2019/03/f002_video-picture_bodor-T230_SMULDERS_PL-320x240.jpg", embedUrl: "https://www.youtube.com/embed/2eTHpNnh0YQ" },
];

const partners = [
  { name: "Graphic World", url: null, logoUrl: "https://www.smulders.pl/wp-content/uploads/2019/03/graphic_world_logo.png" },
  { name: "Enterbrook", url: "https://www.enterbrook.nl/", logoUrl: "https://www.smulders.pl/wp-content/uploads/2019/03/enterbrook_logo.png" },
  { name: "Stal Heijligers", url: "http://www.stalheijligers.nl/", logoUrl: "https://www.smulders.pl/wp-content/uploads/2019/03/stal_heijligers_logo.png" },
  { name: "CHIO Rotterdam", url: "http://www.chio.nl/", logoUrl: "https://www.smulders.pl/wp-content/uploads/2019/03/chio_logo.png" },
  { name: "King Stables", url: "http://www.kingstables.com/", logoUrl: "https://www.smulders.pl/wp-content/uploads/2019/03/king_stables_logo.png" },
  { name: "EquiClub Zamłyniec", url: "https://pl-pl.facebook.com/EquiClubZamlyniec/", logoUrl: "https://www.smulders.pl/wp-content/uploads/2019/03/equiclub_zamlyniec_logo.jpg" },
  { name: "KF Showjumping", url: null, logoUrl: "https://www.smulders.pl/wp-content/uploads/2019/03/karim_fares_logo.png" },
  { name: "Stal Willig", url: "http://www.stalwillig.nl/", logoUrl: "https://www.smulders.pl/wp-content/uploads/2019/03/stal_willig_logo.png" },
  { name: "Domingo Sporthorses", url: "http://domingosporthorses.com/", logoUrl: "https://www.smulders.pl/wp-content/uploads/2019/03/domingo_sporthorses_sl_logo.png" },
  { name: "Persoons Vastgoed", url: "http://www.persoonsvastgoed.nl/", logoUrl: "https://www.smulders.pl/wp-content/uploads/2019/03/persoons_vastgoed_logo.png" },
  { name: "Hippisch Centrum Dordrecht", url: "http://www.hippischcentrumdordrecht.nl/", logoUrl: "https://www.smulders.pl/wp-content/uploads/2019/03/hippisch_cetrum_dordrecht_logo.png" },
  { name: "Equivets", url: "http://www.equivets.be/", logoUrl: "https://www.smulders.pl/wp-content/uploads/2019/03/equivets_logo.png" },
  { name: "Dennis van Tilburg", url: null, logoUrl: "https://www.smulders.pl/wp-content/uploads/2019/03/dennis_van_tilburg_logo.png" },
];

const factoryImages = [
  { src: "https://www.smulders.pl/wp-content/uploads/2019/03/spawacz_SMULDERS_PL-1280x1280.jpg", alt: "Smulders svejsning — stålproduktion af hestebokse" },
  { src: "https://www.smulders.pl/wp-content/uploads/2019/03/f001_machine_SMULDERS_PL-1280x1280.jpg", alt: "Smulders fabrik — CNC maskiner til stålbearbejdning" },
  { src: "https://www.smulders.pl/wp-content/uploads/2019/03/f002_machine_SMULDERS_PL-1280x1280.jpg", alt: "Smulders produktionslinje — staldinventar fremstilling" },
  { src: "https://www.smulders.pl/wp-content/uploads/2019/03/f003_machine_SMULDERS_PL-1280x1280.jpg", alt: "Smulders fabrik — laserskæring af stål" },
  { src: "https://www.smulders.pl/wp-content/uploads/2019/03/f004_machine_SMULDERS_PL-1280x1280.jpg", alt: "Smulders fabrik — stålbearbejdning til hestestaldsinventar" },
  { src: "https://www.smulders.pl/wp-content/uploads/2019/01/office_SMULDERS_PL.jpg", alt: "Smulders kontor og teknisk afdeling i Rakoniewice" },
];

export default function OmOsContent() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveVideo(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activeVideo]);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden flex items-end">
        <Image
          src="https://www.smulders.pl/wp-content/uploads/2019/03/spawacz_SMULDERS_PL-1280x1280.jpg"
          alt="Smulders fabrik i Rakoniewice, Polen — svejseproduktion af premium staldinventar"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-3">Virksomheden</motion.p>
            <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-normal mb-4">Om Smulders</motion.h1>
            <motion.p variants={fade} className="font-sans text-white/50 max-w-lg leading-relaxed">
              Over 25 år med passion for hestevelfærd og belgisk håndværk.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`px-8 py-12 text-center ${i < stats.length - 1 ? "border-r border-white/5" : ""}`}
            >
              <p className="font-display text-4xl md:text-5xl font-normal text-gold mb-2">{s.value}</p>
              <p className="font-sans text-[10px] tracking-tight md:tracking-[0.25em] text-white/40 uppercase">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-10 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-5">Vores historie</motion.p>
            <motion.h2 variants={fade} className="font-display text-3xl md:text-4xl font-normal mb-6 leading-snug">
              Høj kvalitet til konkurrencedygtige priser
            </motion.h2>
            <motion.p variants={fade} className="font-sans text-white/50 leading-relaxed mb-5">
              Med vores egne tekniske- og kreative afdelingsteams er vi i stand til at producere højkvalitetsprodukter til meget konkurrencedygtige priser - optimeret og tilpasset til dine ønsker.
            </motion.p>
            <motion.p variants={fade} className="font-sans text-white/50 leading-relaxed">
              Fabrikken råder over svejserobotter og laserskærer som giver maksimal præcision.
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 1, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://www.smulders.pl/wp-content/uploads/2019/01/office_SMULDERS_PL.jpg"
              alt="Smulders kontor og ingeniørafdeling — design og projektering af staldinventar"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Machines */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-24">
          <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-5">Vores udstyr</motion.p>
          <motion.h2 variants={fade} className="font-display text-3xl font-normal mb-10">Moderne produktionsfaciliteter</motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {machines.map((m) => (
              <motion.div key={m.name} variants={fade} className="flex gap-6 border border-white/8 p-6">
                <button onClick={() => setActiveVideo(m.embedUrl)} className="flex-shrink-0 relative group cursor-pointer">
                  <Image
                    src={m.img}
                    alt={`${m.name} — Smulders produktionsmaskine`}
                    width={96}
                    height={80}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                    <span className="text-white text-2xl">▶</span>
                  </div>
                </button>
                <div>
                  <h3 className="font-display text-lg font-normal mb-2">{m.name}</h3>
                  <p className="font-sans text-sm text-white/45 leading-relaxed">{m.desc}</p>
                  <button onClick={() => setActiveVideo(m.embedUrl)} className="font-sans text-xs tracking-widest text-gold/60 hover:text-gold transition-colors uppercase mt-3 inline-block cursor-pointer">Se video →</button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Factory gallery */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-24">
          <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-5">Fabrikken</motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {factoryImages.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 1, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: i * 0.07 }} className="relative aspect-square overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-5">Samarbejdspartnere</motion.p>
          <motion.h2 variants={fade} className="font-display text-3xl font-normal mb-10">Vores kunder og partnere</motion.h2>
          <motion.div variants={fade} className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {partners.map((p, i) => {
              const img = (
                <Image
                  src={p.logoUrl}
                  alt={p.name}
                  width={120}
                  height={48}
                  loading="lazy"
                  className="max-h-12 w-auto object-contain filter invert"
                />
              );
              return p.url ? (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 opacity-40 hover:opacity-70 transition-opacity duration-300">
                  {img}
                </a>
              ) : (
                <div key={i} className="flex items-center justify-center p-3 opacity-40">
                  {img}
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 px-6 text-center border-t border-white/5">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.h2 variants={fade} className="font-display text-3xl font-normal mb-5">Lad os arbejde sammen</motion.h2>
          <motion.p variants={fade} className="font-sans text-white/40 mb-10 max-w-sm mx-auto">Kontakt os og fortæl om dit staldprojekt.</motion.p>
          <motion.div variants={fade}>
            <Link href="/kontakt" className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-12 py-4 hover:opacity-85 transition-opacity duration-300">Kontakt os</Link>
          </motion.div>
        </motion.div>
      </section>
      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl mx-4 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${activeVideo}?autoplay=1&rel=0`}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full"
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white font-sans text-sm tracking-widest uppercase transition-colors"
            >
              Luk ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
