"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const productLinks = [
  { href: "/produkter/bokse-indendoers", label: "Indendørs Bokse" },
  { href: "/produkter/bokse-udendoers", label: "Udendørs Bokse" },
  { href: "/produkter/american-barns", label: "American Barns" },
  { href: "/produkter/heste-walker", label: "Heste Walker" },
  { href: "/produkter/solarier", label: "Solarier" },
  { href: "/produkter/doere", label: "Stallboksdøre" },
  { href: "/produkter/vinduer", label: "Vinduer" },
  { href: "/produkter/lavedoere", label: "Lavedøre" },
  { href: "/produkter/tilbehoer", label: "Tilbehør" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-md bg-background/85">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 md:h-20">
        <Link href="/" className="font-display text-xl tracking-[0.2em] text-gold uppercase">
          Smulders
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 font-sans text-[11px] tracking-[0.18em] text-white/50 uppercase">
          <div
            className="relative"
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <Link
              href="/produkter"
              className={`hover:text-gold transition-colors duration-300 ${pathname.startsWith("/produkter") ? "text-gold" : ""}`}
            >
              Produkter
            </Link>
            <AnimatePresence>
              {dropOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-56 border border-white/8 bg-[#0f0f0f]"
                >
                  {productLinks.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className={`block px-5 py-3 text-[10px] tracking-widest hover:text-gold hover:bg-white/[0.03] transition-colors duration-200 border-b border-white/5 last:border-0 ${pathname === p.href ? "text-gold" : "text-white/45"}`}
                    >
                      {p.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/installationer" className={`hover:text-gold transition-colors duration-300 ${pathname === "/installationer" ? "text-gold" : ""}`}>
            Installationer
          </Link>
          <Link href="/om-os" className={`hover:text-gold transition-colors duration-300 ${pathname === "/om-os" ? "text-gold" : ""}`}>
            Om os
          </Link>
          <Link
            href="/kontakt"
            className="border border-gold/40 text-gold px-6 py-2 hover:bg-gold hover:text-background transition-all duration-300"
          >
            Kontakt
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden min-h-[44px] min-w-[44px] flex flex-col items-center justify-center gap-[5px]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px bg-white/60 transition-all duration-300 origin-center"
            style={{ transform: mobileOpen ? "translateY(6px) rotate(45deg)" : "none" }}
          />
          <span
            className="block w-6 h-px bg-white/60 transition-opacity duration-300"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px bg-white/60 transition-all duration-300 origin-center"
            style={{ transform: mobileOpen ? "translateY(-6px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/5 bg-[#0a0a0a] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              <p className="font-sans text-[9px] tracking-[0.3em] text-gold/50 uppercase mb-2">Produkter</p>
              {productLinks.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-xs tracking-[0.15em] text-white/50 uppercase hover:text-gold transition-colors py-2 pl-3"
                >
                  {p.label}
                </Link>
              ))}
              <div className="h-px bg-white/5 my-3" />
              {[
                { href: "/installationer", label: "Installationer" },
                { href: "/om-os", label: "Om os" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-xs tracking-[0.15em] text-white/50 uppercase hover:text-gold transition-colors py-2"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
