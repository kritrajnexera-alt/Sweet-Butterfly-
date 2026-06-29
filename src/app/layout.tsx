import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-nav",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Sweet Butterfly | Ankleshwar's Finest Dessert Cafe",
  description:
    "Ankleshwar's highest rated dessert cafe. Waffles, Crepes, Shakes & Custom Cakes. Rated 4.8/5.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-midnight text-text overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-gold focus:text-midnight focus:px-6 focus:py-3 focus:font-nav focus:text-xs focus:tracking-[4px] focus:uppercase focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
