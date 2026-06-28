import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smulders.dk"),
  title: {
    template: "%s | Smulders Danmark",
    default: "Smulders — Premium Hestebokse og Staldinventar til Danmark",
  },
  description:
    "Smulders leverer premium hestebokse og staldinventar til Danmark. Belgisk kvalitet med over 25 års erfaring. 9 boksserier, american barns, heste walkere og solarier.",
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName: "Smulders Danmark",
    images: [
      {
        url: "https://www.smulders.pl/wp-content/uploads/2025/07/boksy-windsor_SMULDERS_PL.webp",
        width: 1280,
        height: 853,
        alt: "Smulders Windsor hestebokse — premium staldinventar",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "D4be6JqUUqxK9vQv_T5m5shTwa83uQF6VAHyb-VsXr0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
(function(){
  if(typeof globalThis==='undefined'){Object.defineProperty(Object.prototype,'__magic__',{get:function(){return this},configurable:true});__magic__.globalThis=__magic__;delete Object.prototype.__magic__;}
  if(typeof queueMicrotask==='undefined'){globalThis.queueMicrotask=function(fn){Promise.resolve().then(fn);};}
  if(typeof Promise.withResolvers==='undefined'){Promise.withResolvers=function(){var r,j;var p=new Promise(function(a,b){r=a;j=b;});return{promise:p,resolve:r,reject:j};};}
  if(typeof structuredClone==='undefined'){globalThis.structuredClone=function(v){return JSON.parse(JSON.stringify(v));};}
  if(typeof Array.prototype.at==='undefined'){Array.prototype.at=function(i){i=Math.trunc(i)||0;if(i<0)i+=this.length;if(i<0||i>=this.length)return undefined;return this[i];};}
  if(typeof Object.hasOwn==='undefined'){Object.hasOwn=function(o,p){return Object.prototype.hasOwnProperty.call(o,p);};}
})();
        `.trim() }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
