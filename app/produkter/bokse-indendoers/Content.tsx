"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fade = { hidden: { opacity: 1, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.11 } } };

const series = [
  {
    name: "Windsor",
    desc: "Den mest populære luksusboks. Et ægte klassisk design med høje fronter og elegante detaljer.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/04/f008_windsor-front_SMULDERS_PL-640x567.jpg",
    gallery: [
      "https://www.smulders.pl/wp-content/uploads/2019/02/f001_internal-stables_windsor_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f002_internal-stables_windsor_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f003_internal-stables_windsor_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f004_internal-stables_windsor_SMULDERS_PL.jpg",
    ],
  },
  {
    name: "Professional-Series",
    desc: "Velegnet til alle heste. Omdesignet i 2016 med afrundede kanaler for øget sikkerhed.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/04/f002_professional-series-front_SMULDERS_PL-640x506.jpg",
    gallery: [
      "https://www.smulders.pl/wp-content/uploads/2019/02/f001_internal-stables_professional-series_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f002_internal-stables_professional-series_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f003_internal-stables_professional-series_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f004_internal-stables_professional-series_SMULDERS_PL.jpg",
    ],
  },
  {
    name: "Classic Wave",
    desc: "Bølgeformede bokse med klassisk design. Afrundede kanaler siden 2016, populær i hele Europa.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/04/f005_classic-wave-front_SMULDERS_PL-640x506.jpg",
    gallery: [
      "https://www.smulders.pl/wp-content/uploads/2019/02/f001_internal-stables_classic-wave_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f002_internal-stables_classic-wave_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f003_internal-stables_classic-wave_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f004_internal-stables_classic-wave_SMULDERS_PL.jpg",
    ],
  },
  {
    name: "Royal Wave",
    desc: "Den ældste i vores lavfronserie med kongelig lås og karakteristisk profil.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/04/f004_royal-wave-front_SMULDERS_PL-640x506.jpg",
    gallery: [
      "https://www.smulders.pl/wp-content/uploads/2019/02/f001_internal-stables_royal-wave_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f002_internal-stables_royal-wave_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f003_internal-stables_royal-wave_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f004_internal-stables_royal-wave_SMULDERS_PL.jpg",
    ],
  },
  {
    name: "Swing Wave",
    desc: "Den nyeste i Wave-serien. Moderne linjer kombineret med afprøvet holdbarhed.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/02/f006_internal-stables_preview_swing-wave_SMULDERS_PL.jpg",
    gallery: [
      "https://www.smulders.pl/wp-content/uploads/2019/02/f001_internal-stables_swing-wave_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f002_internal-stables_swing-wave_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f003_internal-stables_swing-wave_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f004_internal-stables_swing-wave_SMULDERS_PL.jpg",
    ],
  },
  {
    name: "Lexington",
    desc: "Luksusfron med centraldør og unikt smedejernsmotiv — til den ultimative VIP-stald.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/04/f007_lexington-front_SMULDERS_PL-640x565.jpg",
    gallery: [
      "https://www.smulders.pl/wp-content/uploads/2019/03/f001_internal-stables_lexington_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f002_internal-stables_lexington_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f003_internal-stables_lexington_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f004_internal-stables_lexington_SMULDERS_PL.jpg",
    ],
  },
  {
    name: "Grand Prestige",
    desc: "Stil med referencer til fortiden — høj kvalitet og moderne materialer med klassisk udtryk.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/02/f009_internal-stables_preview_grand-prestige_SMULDERS_PL.jpg",
    gallery: [
      "https://www.smulders.pl/wp-content/uploads/2019/03/f001_internal-stables_grand-prestige_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f002_internal-stables_grand-prestige_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f003_internal-stables_grand-prestige_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f004_internal-stables_grand-prestige_SMULDERS_PL.jpg",
    ],
  },
  {
    name: "Sport-Line",
    desc: "Det mest prisvenlige valg. Meget populær hos private og professionelle ryttere over hele verden.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/04/f001_sport-line-front_SMULDERS_PL-640x506.jpg",
    gallery: [
      "https://www.smulders.pl/wp-content/uploads/2019/02/f001_internal-stables_sport-line_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f002_internal-stables_sport-line_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f006_internal-stables_sport-line_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f007_internal-stables_sport-line_SMULDERS_PL.jpg",
    ],
  },
  {
    name: "Young Horses",
    desc: "Europæisk foderfront med justerbar åbningsbredde — designet til unghestes sikkerhed.",
    img: "https://www.smulders.pl/wp-content/uploads/2019/02/f003_internal-stables_preview_young-horses_SMULDERS_PL.jpg",
    gallery: [
      "https://www.smulders.pl/wp-content/uploads/2019/02/f001_internal-stables_young-horses_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f003_internal-stables_young-horses_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f006_internal-stables_young-horses_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f007_internal-stables_young-horses_SMULDERS_PL.jpg",
    ],
  },
];

export default function IndendoersBokseContent() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden flex items-end">
        <Image
          src="https://www.smulders.pl/wp-content/uploads/2025/07/boksy-windsor_SMULDERS_PL.webp"
          alt="Smulders indendørs hestebokse — Windsor serie premium staldinventar"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-3">
              Produkter
            </motion.p>
            <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-normal mb-4">
              Indendørs Hestebokse
            </motion.h1>
            <motion.p variants={fade} className="font-sans text-white/50 max-w-lg text-base leading-relaxed">
              9 serier hestebokse tilpasset enhver staldstype og ethvert budget — fra det prisvenlige Sport-Line til det absolutte luksussegment med Windsor og Grand Prestige.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Series */}
      <section className="py-10 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-16 md:gap-28">
          {series.map((s, i) => (
            <motion.div
              key={s.name}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <motion.div variants={fade} className={i % 2 === 1 ? "md:order-2" : ""}>
                <p className="font-sans text-[9px] tracking-[0.35em] text-gold/60 uppercase mb-3">Serie {i + 1} af 9</p>
                <h2 className="font-display text-3xl md:text-4xl font-normal mb-5">{s.name}</h2>
                <p className="font-sans text-white/50 leading-relaxed mb-8">{s.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {s.gallery.map((src, gi) => (
                    <div key={gi} className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={src}
                        alt={`${s.name} staldboks — galleri billede ${gi + 1}`}
                        fill
                        loading="lazy"
                        className="object-cover hover:scale-105 transition-transform duration-600"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fade} className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <Image
                  src={s.img}
                  alt={`${s.name} hesteboks front — Smulders staldinventar`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 px-6 text-center border-t border-white/5">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.h2 variants={fade} className="font-display text-3xl md:text-4xl font-normal mb-5">
            Find den rigtige hesteboks til din stald
          </motion.h2>
          <motion.p variants={fade} className="font-sans text-white/40 mb-10 max-w-sm mx-auto">
            Kontakt os for rådgivning og et skræddersyet tilbud på hestebokse til Danmark.
          </motion.p>
          <motion.div variants={fade}>
            <Link href="/kontakt" className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-12 py-4 hover:opacity-85 transition-opacity duration-300">
              Kontakt os
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
