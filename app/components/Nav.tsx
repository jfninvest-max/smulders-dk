"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const productLinks = [
  { href: "/produkter/bokse-indendoers", label: "Indendørs Bokse" },
  { href: "/produkter/bokse-udendoers", label: "Udendørs Bokse" },
  { href: "/produkter/american-barns", label: "American Barns" },
  { href: "/produkter/heste-walker", label: "Heste Walker" },
  { href: "/produkter/solarier", label: "Solarier" },
  { href: "/produkter/doere", label: "Staldboksdøre" },
  { href: "/produkter/vinduer", label: "Vinduer" },
  { href: "/produkter/lavedoere", label: "Ladedøre" },
  { href: "/produkter/tilbehoer", label: "Tilbehør" },
];

const mainLinks = [
  { href: "/installationer", label: "Installationer" },
  { href: "/om-os", label: "Om os" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {/* Hidden checkbox — styrer mobil menu via CSS, kræver nul JavaScript */}
      <input type="checkbox" id="nav-open" className="peer sr-only" />

      <nav className="fixed top-0 w-full z-[50] border-b border-white/5 backdrop-blur-md bg-background/85">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="font-display text-xl tracking-[0.2em] text-gold uppercase">
            Smulders
          </Link>

          {/* Desktop nav — CSS hover dropdown, ingen JavaScript */}
          <div className="hidden md:flex items-center gap-8 font-sans text-[11px] tracking-[0.18em] text-white/50 uppercase">
            <div className="group relative">
              <Link
                href="/produkter"
                className={`hover:text-gold transition-colors duration-300 ${pathname.startsWith("/produkter") ? "text-gold" : ""}`}
              >
                Produkter
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-56 border border-white/8 bg-[#0f0f0f]
                              invisible opacity-0 translate-y-[6px]
                              group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                              transition-all duration-[180ms] pointer-events-none group-hover:pointer-events-auto">
                {productLinks.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className={`block px-5 py-3 text-[10px] tracking-widest hover:text-gold hover:bg-white/[0.03] transition-colors duration-200 border-b border-white/5 last:border-0 ${pathname === p.href ? "text-gold" : "text-white/45"}`}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/installationer" className={`hover:text-gold transition-colors duration-300 ${pathname === "/installationer" ? "text-gold" : ""}`}>
              Installationer
            </Link>
            <Link href="/om-os" className={`hover:text-gold transition-colors duration-300 ${pathname === "/om-os" ? "text-gold" : ""}`}>
              Om os
            </Link>
            <Link href="/kontakt" className="border border-gold/40 text-gold px-6 py-2 hover:bg-gold hover:text-background transition-all duration-300">
              Kontakt
            </Link>
          </div>

          {/* Placeholder så logo holder venstre-alignment på mobil */}
          <div className="md:hidden w-11 h-11" aria-hidden="true" />
        </div>
      </nav>

      {/* Hamburger <label> — klikker på checkbox, ingen JavaScript */}
      <label
        htmlFor="nav-open"
        className="md:hidden fixed top-0 right-6 z-[65] h-16 flex flex-col items-center justify-center gap-[5px] cursor-pointer select-none"
        aria-label="Åbn/luk menu"
      >
        <span className="block w-6 h-px bg-white/60" />
        <span className="block w-6 h-px bg-white/60" />
        <span className="block w-6 h-px bg-white/60" />
      </label>

      {/* Mobil overlay — vises med CSS peer-checked, kræver nul JavaScript */}
      <div
        className="md:hidden fixed inset-0 z-[55] bg-[#0a0a0a] overflow-y-auto
                   opacity-0 invisible pointer-events-none
                   peer-checked:opacity-100 peer-checked:visible peer-checked:pointer-events-auto
                   transition-opacity duration-200"
        style={{ paddingTop: "64px" }}
      >
        <div className="px-6 pt-8 pb-16 flex flex-col">

          <Link
            href="/"
            className={`font-display text-2xl font-normal py-4 border-b border-white/5 ${pathname === "/" ? "text-gold" : "text-foreground"}`}
          >
            Forside
          </Link>

          <div className="mt-8 mb-2">
            <p className="font-sans text-[9px] tracking-[0.35em] text-gold/50 uppercase mb-3">Produkter</p>
            <Link
              href="/produkter"
              className={`block font-display text-xl font-normal py-4 border-b border-white/5 ${pathname === "/produkter" ? "text-gold" : "text-foreground/80"}`}
            >
              Alle produkter
            </Link>
            {productLinks.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className={`block font-sans text-xs tracking-[0.12em] uppercase py-4 pl-4 border-b border-white/5 ${pathname === p.href ? "text-gold" : "text-white/45"}`}
              >
                {p.label}
              </Link>
            ))}
          </div>

          <div className="h-px bg-white/8 my-6" />

          {mainLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-display text-2xl font-normal py-4 border-b border-white/5 ${pathname === l.href ? "text-gold" : "text-foreground"}`}
            >
              {l.label}
            </Link>
          ))}

          <div className="mt-10">
            <Link
              href="/kontakt"
              className="inline-block font-sans text-xs tracking-[0.25em] uppercase bg-gold text-background px-10 py-4"
            >
              Få et tilbud
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
