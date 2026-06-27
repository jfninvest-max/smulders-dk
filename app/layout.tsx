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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
