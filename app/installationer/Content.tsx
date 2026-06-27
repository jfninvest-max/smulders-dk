"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fade = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const projects = [
  {
    title: "Stallion Drive, Florida, USA",
    products: "Windsor bokse",
    images: [
      "https://www.smulders.pl/wp-content/uploads/2025/07/f001_stallion-drive-florida_SMULDERS_PL-1280x640.webp",
      "https://www.smulders.pl/wp-content/uploads/2025/07/f002_stallion-drive-florida_SMULDERS_PL.webp",
      "https://www.smulders.pl/wp-content/uploads/2025/07/f003_stallion-drive-florida_SMULDERS_PL.webp",
      "https://www.smulders.pl/wp-content/uploads/2025/07/f004_stallion-drive-florida_SMULDERS_PL.webp",
      "https://www.smulders.pl/wp-content/uploads/2025/07/f005_stallion-drive-florida_SMULDERS_PL.webp",
    ],
  },
  {
    title: "Archipp Stajnia, Polen",
    products: "Professional-Series, vinduer, døre, lavedøre",
    images: [
      "https://www.smulders.pl/wp-content/uploads/2025/07/f001_archipp-stajnia_SMULDERS_PL.webp",
      "https://www.smulders.pl/wp-content/uploads/2025/07/f002_archipp-stajnia_SMULDERS_PL.webp",
      "https://www.smulders.pl/wp-content/uploads/2025/07/f003_archipp-stajnia_SMULDERS_PL.webp",
      "https://www.smulders.pl/wp-content/uploads/2025/07/f004_archipp-stajnia_SMULDERS_PL.webp",
      "https://www.smulders.pl/wp-content/uploads/2025/07/f005_archipp-stajnia_SMULDERS_PL.webp",
      "https://www.smulders.pl/wp-content/uploads/2025/07/f006_archipp-stajnia_SMULDERS_PL.webp",
    ],
  },
  {
    title: "Udendørs stald, Spanien",
    products: "Udendørs bokse, lavedøre",
    images: [
      "https://www.smulders.pl/wp-content/uploads/2025/07/f001_outdoor-stables-spain_SMULDERS_PL-1280x640.webp",
      "https://www.smulders.pl/wp-content/uploads/2025/07/f002_outdoor-stables-spain_SMULDERS_PL.webp",
      "https://www.smulders.pl/wp-content/uploads/2025/07/f003_outdoor-stables-spain_SMULDERS_PL.webp",
      "https://www.smulders.pl/wp-content/uploads/2025/07/f004_outdoor-stables-spain_SMULDERS_PL.webp",
      "https://www.smulders.pl/wp-content/uploads/2025/07/f005_outdoor-stables-spain_SMULDERS_PL.webp",
    ],
  },
  {
    title: "Windsor stald, Nederlandene",
    products: "Windsor bokse, lavedøre, vinduer",
    images: [
      "https://www.smulders.pl/wp-content/uploads/2025/07/f001_windsor_netherlands_SMULDERS_PL-320x240.webp",
      "https://www.smulders.pl/wp-content/uploads/2015/09/f001_ADNV_Windsor_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2015/09/f002_ADNV_Windsor_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2015/09/f003_ADNV_Windsor_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2015/09/f004_ADNV_Windsor_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2015/09/f005_ADNV_Windsor_SMULDERS_PL.jpg",
    ],
  },
  {
    title: "Classic Wave, Nederlandene",
    products: "Classic Wave bokse, lavedøre, vinduer, solarium",
    images: [
      "https://www.smulders.pl/wp-content/uploads/2016/10/f001_TBV_Classic-Wave_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2016/10/f002_TBV_Classic-Wave_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2016/10/f003_TBV_barn-door_windows_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2016/10/f004_TBV_barn-door_windows_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2016/10/f006_TBV_Classic-Wave_solarium-for-horses_SMULDERS_PL.jpg",
    ],
  },
  {
    title: "Professional-Series, Australien",
    products: "Professional-Series bokse, heste walker",
    images: [
      "https://www.smulders.pl/wp-content/uploads/2025/07/f001_professional-series_australia_SMULDERS_PL-320x240.webp",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f001_internal-stables_professional-series_KIL_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f002_internal-stables_professional-series_KIL_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f003_internal-stables_professional-series_KIL_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f004_internal-stables_professional-series_KIL_SMULDERS_PL.jpg",
    ],
  },
  {
    title: "Fioravanti Horse Farm, Italien",
    products: "Windsor bokse, lavedøre, vinduer",
    images: [
      "https://www.smulders.pl/wp-content/uploads/2019/03/f001_FVTI_Windsor_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f002_FVTI_Windsor_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f003_FVTI_Windsor_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f004_FVTI_Windsor_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f005_FVTI_Windsor_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f006_FVTI_Windsor_SMULDERS_PL.jpg",
    ],
  },
  {
    title: "Magic Millions, Australien",
    products: "American Barns, udendørs bokse, heste walker",
    images: [
      "https://www.smulders.pl/wp-content/uploads/2019/02/f007_american-barns_outdoor-boxes_SMULDERS_PL-640x640.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f008_american-barns_outdoor-boxes_SMULDERS_PL-640x640.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/02/f009_american-barns_outdoor-boxes_SMULDERS_PL-640x640.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f021_horse-walkers_roofings_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f025_horse-walkers_roofings_SMULDERS_PL.jpg",
    ],
  },
  {
    title: "Windsor stald, Belgien",
    products: "Windsor bokse, lavedøre, vinduer, døre",
    images: [
      "https://www.smulders.pl/wp-content/uploads/2019/03/f002_internal-stables_windsor_doors_windows_barn-doors_PRSH_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f003_internal-stables_windsor_doors_windows_barn-doors_PRSH_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f004_internal-stables_windsor_doors_windows_barn-doors_PRSH_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f005_internal-stables_windsor_doors_windows_barn-doors_PRSH_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f006_internal-stables_windsor_doors_windows_barn-doors_PRSH_SMULDERS_PL.jpg",
    ],
  },
  {
    title: "EquiClub Zamłyniec, Polen",
    products: "Professional-Series, solarium",
    images: [
      "https://www.smulders.pl/wp-content/uploads/2019/03/f001_internal-stables_professional-series_WHE_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f002_internal-stables_professional-series_WHE_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f003_internal-stables_professional-series_WHE_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f004_internal-stables_professional-series_WHE_SMULDERS_PL.jpg",
      "https://www.smulders.pl/wp-content/uploads/2019/03/f005_internal-stables_professional-series_WHE_SMULDERS_PL.jpg",
    ],
  },
];

export default function InstallationerContent() {
  return (
    <main className="pt-20">
      <section className="relative h-[50vh] overflow-hidden flex items-end">
        <Image
          src="https://www.smulders.pl/wp-content/uploads/2025/07/f001_stallion-drive-florida_SMULDERS_PL-1280x640.webp"
          alt="Smulders installation — Stallion Drive Florida med Windsor hestebokse"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fade} className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-3">Referencer</motion.p>
            <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-normal mb-4">Vores installationer</motion.h1>
            <motion.p variants={fade} className="font-sans text-white/50 max-w-lg leading-relaxed">
              Udvalgte projekter fra hele verden — fra private ryttere til professionelle anlæg.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-24">
          {projects.map((proj, pi) => (
            <motion.div
              key={proj.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <motion.div variants={fade} className="mb-8">
                <p className="font-sans text-[9px] tracking-[0.35em] text-gold/60 uppercase mb-2">{proj.products}</p>
                <h2 className="font-display text-2xl md:text-3xl font-normal">{proj.title}</h2>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {proj.images.map((src, i) => (
                  <motion.div
                    key={i}
                    variants={fade}
                    className={`overflow-hidden ${i === 0 ? "col-span-2 row-span-1" : ""}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={src}
                        alt={i === 0 ? `${proj.title} — Smulders hestestald installation` : `${proj.title} — billede ${i + 1}`}
                        fill
                        loading={pi === 0 && i === 0 ? "eager" : "lazy"}
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 50vw, 20vw"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 text-center border-t border-white/5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fade} className="font-display text-3xl font-normal mb-5">Din stald kan blive den næste</motion.h2>
          <motion.p variants={fade} className="font-sans text-white/40 mb-10 max-w-sm mx-auto">Kontakt os og fortæl os om dit projekt.</motion.p>
          <motion.div variants={fade}>
            <Link href="/kontakt" className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-12 py-4 hover:opacity-85 transition-opacity duration-300">Kontakt os</Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
