"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import TitleSetter from "@/components/TitleSetter";

const images = [
  { src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80", alt: "Dessert" },
  { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80", alt: "Cake" },
  { src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80", alt: "Coffee" },
  { src: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80", alt: "Waffles" },
  { src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80", alt: "Milkshake" },
  { src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80", alt: "Shakes" },
  { src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80", alt: "Crepes" },
  { src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80", alt: "Berries" },
  { src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80", alt: "Macarons" },
  { src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80", alt: "Donuts" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  const close = useCallback(() => setSelectedIndex(null), []);
  const prev = useCallback(() => {
    setSelectedIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, []);
  const next = useCallback(() => {
    setSelectedIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, close, prev, next]);

  return (
    <>
      <TitleSetter title="Gallery" />
      <section className="relative bg-midnight overflow-hidden pt-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-nav text-xs tracking-[4px] uppercase text-gold mb-4">
            Visual Stories
          </h2>
          <p className="font-heading text-[clamp(2rem,5vw,44px)] italic text-cream">
            A Glimpse of Our World
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setSelectedIndex(i)}
              initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReduced ? 0.01 : 0.5,
                delay: prefersReduced ? 0 : i * 0.06,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ scale: 1.015 }}
              className="group relative overflow-hidden break-inside-avoid cursor-pointer text-left w-full p-0 border-0 bg-transparent"
            >
              <div className="relative overflow-hidden bg-midnight-light">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="font-nav text-xs tracking-[3px] uppercase text-gold">
                    {img.alt}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-sm text-text-muted">
            Follow us for daily dessert stories
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 font-nav text-xs tracking-[4px] uppercase text-gold hover:text-gold-dark transition-colors duration-300"
          >
            @sweetbutterfly.ankleshwar
          </a>
        </motion.div>
      </div>

    </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-midnight/95 backdrop-blur-xl p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-cream hover:text-gold transition-colors z-10"
              aria-label="Close lightbox"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-cream/60 hover:text-gold transition-colors z-10"
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].src.replace("w=600", "w=1200")}
                alt={images[selectedIndex].alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
                priority
              />
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-nav text-xs tracking-[3px] uppercase text-gold bg-midnight/60 px-4 py-2">
                {images[selectedIndex].alt}
              </p>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-cream/60 hover:text-gold transition-colors z-10"
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === selectedIndex ? "bg-gold w-4" : "bg-cream/20 hover:bg-cream/40"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
