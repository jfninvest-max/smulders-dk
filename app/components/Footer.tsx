import Link from "next/link";

const col1 = [
  { href: "/produkter/bokse-indendoers", label: "Indendørs Bokse" },
  { href: "/produkter/bokse-udendoers", label: "Udendørs Bokse" },
  { href: "/produkter/american-barns", label: "American Barns" },
  { href: "/produkter/heste-walker", label: "Heste Walker" },
  { href: "/produkter/solarier", label: "Solarier" },
];
const col2 = [
  { href: "/produkter/doere", label: "Stallboksdøre" },
  { href: "/produkter/vinduer", label: "Vinduer" },
  { href: "/produkter/lavedoere", label: "Lavedøre" },
  { href: "/produkter/tilbehoer", label: "Tilbehør" },
  { href: "/installationer", label: "Installationer" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-14 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="font-display text-xl tracking-[0.2em] text-gold uppercase mb-4">Smulders</p>
            <p className="font-sans text-xs text-white/28 leading-relaxed max-w-[200px]">
              Premium hestestaldsinventar med over 25 års erfaring inden for hesteindustrien.
            </p>
          </div>
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] text-gold/50 uppercase mb-5">Produkter</p>
            <div className="flex flex-col gap-2.5">
              {col1.map((l) => (
                <Link key={l.href} href={l.href} className="font-sans text-xs text-white/28 hover:text-gold transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] text-gold/50 uppercase mb-5">Mere</p>
            <div className="flex flex-col gap-2.5">
              {col2.map((l) => (
                <Link key={l.href} href={l.href} className="font-sans text-xs text-white/28 hover:text-gold transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] text-gold/50 uppercase mb-5">Kontakt</p>
            <div className="flex flex-col gap-2.5 font-sans text-xs text-white/28 leading-relaxed">
              <a href="mailto:office@smulders.pl" className="inline-flex items-center min-h-[44px] hover:text-gold transition-colors">office@smulders.pl</a>
              <a href="tel:+4861444405" className="inline-flex items-center min-h-[44px] hover:text-gold transition-colors">+48 61 44 41 405</a>
              <p>ul. Grodziska 17 B<br />62-067 Rakoniewice<br />Polen</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-sans text-[10px] text-white/18 tracking-[0.15em]">
            © 2025 Smulders Sp. z o.o. · Alle rettigheder forbeholdes
          </p>
          <div className="flex gap-6">
            <Link href="/om-os" className="font-sans text-[10px] tracking-[0.15em] text-white/18 uppercase hover:text-gold transition-colors">Om os</Link>
            <Link href="/kontakt" className="font-sans text-[10px] tracking-[0.15em] text-white/18 uppercase hover:text-gold transition-colors">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
