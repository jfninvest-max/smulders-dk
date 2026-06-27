"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fade = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };
const stagger = { visible: { transition: { staggerChildren: 0.13 } } };

const categories = [
  { href: "/produkter/bokse-indendoers", label: "Indendørs Bokse", sub: "9 serier", img: "https://www.smulders.pl/wp-content/uploads/2025/07/boksy-windsor_SMULDERS_PL.webp" },
  { href: "/produkter/bokse-udendoers", label: "Udendørs Bokse", sub: "Alternativ til traditionelle stalde", img: "https://www.smulders.pl/wp-content/uploads/2025/07/boksy-zewnetrzne-dla-koni_SMULDERS_PL.webp" },
  { href: "/produkter/american-barns", label: "American Barns", sub: "Komplet bygning med staldbokse", img: "https://www.smulders.pl/wp-content/uploads/2019/01/f001_cih_american-barns_SMULDERS_PL-640x427.jpg" },
  { href: "/produkter/heste-walker", label: "Heste Walker", sub: "15–20 m, 4–8 heste", img: "https://www.smulders.pl/wp-content/uploads/2025/07/karuzela-dla-koni_SMULDERS_PL.webp" },
  { href: "/produkter/solarier", label: "Solarier", sub: "3- og 4-panel modeller", img: "https://www.smulders.pl/wp-content/uploads/2025/07/solaria-dla-koni_SMULDERS_PL.webp" },
  { href: "/produkter/doere", label: "Stallboksdøre", sub: "3 modeller, ingen skarpe kanter", img: "https://www.smulders.pl/wp-content/uploads/2023/01/door-for-stables.jpg" },
  { href: "/produkter/vinduer", label: "Vinduer", sub: "Sikkerhedsglas, rustfri stål", img: "https://www.smulders.pl/wp-content/uploads/2025/07/windows-for-horse-stable_SMULDERS_PL.webp" },
  { href: "/produkter/lavedoere", label: "Lavedøre", sub: "Lige og buede stilarter", img: "https://www.smulders.pl/wp-content/uploads/2025/07/barn-doors_SMULDERS_PL.webp" },
  { href: "/produkter/tilbehoer", label: "Tilbehør", sub: "Drikkeskåle, fodervogne m.m.", img: "https://www.smulders.pl/wp-content/uploads/2019/01/f006_cih_accessories_SMULDERS_PL-640x427.jpg" },
];

const installations = [
  { img: "https://www.smulders.pl/wp-content/uploads/2025/07/f001_stallion-drive-florida_SMULDERS_PL-320x240.webp", label: "Florida, USA" },
  { img: "https://www.smulders.pl/wp-content/uploads/2025/07/f001_classic-wave_netherlands_SMULDERS_PL-320x240.webp", label: "Nederlandene" },
  { img: "https://www.smulders.pl/wp-content/uploads/2025/07/f001_outdoor-stables-spain_SMULDERS_PL-320x240.webp", label: "Spanien" },
  { img: "https://www.smulders.pl/wp-content/uploads/2025/07/f001_archipp-stajnia_SMULDERS_PL-320x240.webp", label: "Polen" },
  { img: "https://www.smulders.pl/wp-content/uploads/2025/07/f001_windsor_netherlands_SMULDERS_PL-320x240.webp", label: "Nederlandene" },
  { img: "https://www.smulders.pl/wp-content/uploads/2025/07/f001_professional-series_australia_SMULDERS_PL-320x240.webp", label: "Australien" },
];

const faqs = [
  {
    q: "Leverer Smulders hestebokse til Danmark?",
    a: "Ja. Smulders leverer premium staldinventar til Danmark og over 30 andre lande. Kontakt os via office@smulders.pl eller tlf. +48 61 44 41 405 for et tilbud med levering til din adresse i Danmark.",
  },
  {
    q: "Hvad koster hestebokse fra Smulders?",
    a: "Prisen afhænger af serie, størrelse og konfiguration. Sport-Line er det mest prisvenlige valg, mens Windsor og Grand Prestige er premium-serier. Kontakt os for et gratis, uforpligtende tilbud tilpasset dit projekt.",
  },
  {
    q: "Hvad er forskellen på indendørs og udendørs hestebokse?",
    a: "Indendørs bokse er designet til placering inde i en stallbygning og fås i 9 serier. Udendørs bokse er selvstændige enheder med spids eller ensidig tagkonstruktion — et fleksibelt alternativ til den traditionelle stald.",
  },
  {
    q: "Hvor mange boksserier tilbyder Smulders?",
    a: "Smulders tilbyder 9 serier indendørs hestebokse: Sport-Line, Professional-Series, Classic Wave, Royal Wave, Swing Wave, Windsor, Lexington, Grand Prestige og Young Horses — fra prisvenlig til absolut luksus.",
  },
  {
    q: "Hvad er en American Barn fra Smulders?",
    a: "En American Barn er en komplet stallbygning med indendørs staldbokse integreret i konstruktionen. Alt leveres fra én producent. Bygningen kræver støbt betonfundament og kan konfigureres med plastik, bambus eller egetræ beklædning.",
  },
  {
    q: "Hvad er en heste walker og hvilke størrelser fås den i?",
    a: "En heste walker er en roterende træningskarussel til heste. Smulders walker fås i 4 størrelser: ⌀ 15 m (4 heste), ⌀ 16 m (4 eller 6 heste), ⌀ 18 m (6 eller 8 heste) og ⌀ 20 m (8 heste) — alle med trinløs hastighedsjustering og automatisk smøresystem.",
  },
  {
    q: "Hvad bruges et heste solarium til?",
    a: "Et heste solarium fremskynder regenerering af muskler og led efter træning og forbedrer hestens velvære. Smulders solarier fås i 3-panel (2.550 W, 49 kg) og 4-panel (3.000 W, 61 kg) version med 230 V strøm.",
  },
  {
    q: "Hvad er Smulders hestebokse lavet af?",
    a: "Smulders bokse er fremstillet af galvaniseret eller pulverlakeret stål. Beklædning fås i plastik (32 mm, farver: brun, sort, grå, rød), bambus eller egetræ. Alle dele er uden skarpe kanter for maksimal hestesikkerhed.",
  },
  {
    q: "Kan Smulders levere et komplet staldprojekt?",
    a: "Ja. Smulders leverer staldbokse, døre, vinduer, lavedøre, heste walker, solarium og tilbehør fra én producent. Vores tekniske afdeling rådgiver om layout og konfiguration via CAD-tegninger tilpasset dit areal.",
  },
  {
    q: "Har Smulders referencer fra kendte stalde og ryttere?",
    a: "Ja. Smulders har installeret staldinventar til kendte anlæg som Magic Millions (Australien), Stallion Drive (Florida, USA), EquiClub Zamłyniec (Polen) og mange europæiske stalde. Se vores installationsside for billeder og detaljer.",
  },
];

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <Image
          src="https://www.smulders.pl/wp-content/uploads/2025/07/boksy-windsor_SMULDERS_PL.webp"
          alt="Smulders Windsor hestebokse — premium indendørs staldbokse"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-7">
            Premium Hestestaldsinventar
          </motion.p>
          <motion.h1 variants={fade} className="font-display text-5xl md:text-7xl lg:text-[88px] leading-[1.05] font-normal text-foreground mb-8">
            Nogle heste<br />har al heldet.
          </motion.h1>
          <motion.p variants={fade} className="font-sans text-base md:text-lg text-white/45 max-w-md mx-auto mb-12 leading-relaxed">
            Belgisk håndværkstradition og over 25 års erfaring bag hvert eneste stykke staldinventar til Danmark.
          </motion.p>
          <motion.div variants={fade} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/produkter"
              className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-10 py-4 hover:opacity-85 transition-opacity duration-300"
            >
              Se alle produkter
            </Link>
            <Link
              href="/installationer"
              className="inline-block font-sans text-xs tracking-[0.25em] uppercase border border-white/20 text-white/60 px-10 py-4 hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              Vores installationer
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-sans text-[9px] tracking-[0.35em] text-white/25 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-gold/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* Product categories */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mb-16"
        >
          <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-4">
            Vores produkter
          </motion.p>
          <motion.h2 variants={fade} className="font-display text-3xl md:text-5xl font-normal">
            Alt til den perfekte hestestald
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <Link href={cat.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={cat.img}
                    alt={`${cat.label} — Smulders staldinventar`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
                </div>
                <p className="font-sans text-[9px] tracking-[0.3em] text-gold/60 uppercase mb-1">{cat.sub}</p>
                <h3 className="font-display text-xl font-normal group-hover:text-gold transition-colors duration-300">
                  {cat.label}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured installations */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-4">
              Udvalgte projekter
            </motion.p>
            <motion.h2 variants={fade} className="font-display text-3xl md:text-4xl font-normal">
              Smulders installationer verden over
            </motion.h2>
          </div>
          <motion.div variants={fade}>
            <Link href="/installationer" className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 hover:text-gold transition-colors border-b border-white/15 pb-0.5 hover:border-gold/50">
              Se alle →
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {installations.map((inst, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={inst.img}
                alt={`Smulders hestestald installation — ${inst.label}`}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/5 transition-colors duration-400" />
              <p className="absolute bottom-3 left-3 font-sans text-[9px] tracking-widest text-white/60 uppercase">{inst.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="py-28 px-6 border-y border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-5">
              Om Smulders
            </motion.p>
            <motion.h2 variants={fade} className="font-display text-3xl md:text-5xl font-normal leading-snug mb-8">
              Over 25 år med passion for hestevelfærd
            </motion.h2>
            <motion.p variants={fade} className="font-sans text-white/50 leading-relaxed mb-8 max-w-md">
              Med et eget teknisk og kreativt afdelingsteam, CAD-teknologi og en moderne fabrik med svejserobotter og laserskærer, kan vi levere premium staldinventar af højeste kvalitet til konkurrencedygtige priser.
            </motion.p>
            <motion.div variants={fade}>
              <Link href="/om-os" className="inline-block font-sans text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold px-8 py-3 hover:bg-gold hover:text-background transition-all duration-300">
                Læs mere om os
              </Link>
            </motion.div>
          </div>
          <motion.div variants={fade} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://www.smulders.pl/wp-content/uploads/2019/03/spawacz_SMULDERS_PL-1280x1280.jpg"
              alt="Smulders fabrik — svejseproduktion af premium staldinventar"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16"
        >
          <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-4">
            Ofte stillede spørgsmål
          </motion.p>
          <motion.h2 variants={fade} className="font-display text-3xl md:text-5xl font-normal">
            Spørgsmål om hestebokse og staldinventar
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
            >
              <h3 className="font-sans text-sm font-medium text-foreground mb-3 leading-snug">
                {faq.q}
              </h3>
              <p className="font-sans text-sm text-white/45 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fade} className="font-display text-3xl md:text-5xl font-normal mb-6">
            Klar til at bygge drømmestalden?
          </motion.h2>
          <motion.p variants={fade} className="font-sans text-white/40 mb-10 max-w-sm mx-auto leading-relaxed">
            Kontakt os i dag og få et uforpligtende tilbud på hestebokse tilpasset dine behov.
          </motion.p>
          <motion.div variants={fade}>
            <Link
              href="/kontakt"
              className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-14 py-5 hover:opacity-85 transition-opacity duration-300"
            >
              Få et tilbud
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
