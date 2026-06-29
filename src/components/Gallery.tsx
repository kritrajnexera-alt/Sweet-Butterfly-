"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80", alt: "Dessert", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80", alt: "Cake", span: "" },
  { src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80", alt: "Coffee", span: "" },
  { src: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80", alt: "Waffles", span: "" },
  { src: "https://images.unsplash.com/photo-1570197785657-d9fe21a8e8e8?w=600&q=80", alt: "Ice Cream", span: "" },
  { src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80", alt: "Shakes", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80", alt: "Crepes", span: "" },
  { src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80", alt: "Berries", span: "" },
];

export default function Gallery() {
  const prefersReduced = useReducedMotion();
  return (
    <section id="gallery" className="relative bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
            <motion.div
              key={i}
              initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: prefersReduced ? 0.01 : 0.5,
                delay: prefersReduced ? 0 : i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative overflow-hidden break-inside-avoid"
            >
              <div className="relative overflow-hidden">
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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
  );
}
