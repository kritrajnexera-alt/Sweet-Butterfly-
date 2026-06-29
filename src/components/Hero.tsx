"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const titleText = "Where Every Dessert Tells A Story.";

const floatingFood = [
  { src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&q=80", alt: "Dessert", x: "75%", y: "20%", delay: 0, size: 120 },
  { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&q=80", alt: "Cake", x: "15%", y: "55%", delay: 1.2, size: 100 },
  { src: "https://images.unsplash.com/photo-1570197785657-d9fe21a8e8e8?w=300&q=80", alt: "Shake", x: "82%", y: "65%", delay: 2.4, size: 90 },
  { src: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=300&q=80", alt: "Waffle", x: "10%", y: "18%", delay: 0.6, size: 110 },
];

function GoldParticles() {
  const prefersReduced = useReducedMotion();
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    if (prefersReduced) return;
    const arr = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 3,
    }));
    setParticles(arr);
  }, [prefersReduced]);

  if (prefersReduced || particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[1]">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-midnight overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=85"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/95 to-midnight/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40" />
      </div>

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_60%)]"
        animate={prefersReduced ? {} : {
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold/3 blur-3xl"
        animate={prefersReduced ? {} : {
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 left-16 w-64 h-64 rounded-full bg-gold/2 blur-3xl"
        animate={prefersReduced ? {} : {
          y: [0, 15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <GoldParticles />

      {!prefersReduced && floatingFood.map((item, i) => (
        <motion.div
          key={i}
          className="absolute z-[2] pointer-events-none"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.15, 0],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-gold/10"
            style={{ width: item.size, height: item.size }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes={`${item.size}px`}
            />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-4"
          >
            <span className="font-nav text-xs tracking-[4px] uppercase text-gold/80">
              Ankleshwar&apos;s Premium Dessert Cafe
            </span>
          </motion.div>

          <h1 className="font-heading text-[clamp(3rem,8vw,88px)] italic font-light leading-[1.1] text-cream text-balance">
            {titleText.split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
                <motion.span
                  className="inline-block"
                  initial={prefersReduced ? { opacity: 0 } : { y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: prefersReduced ? 0.01 : 0.6,
                    delay: prefersReduced ? 0 : i * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {word === "Story." ? (
                    <span className="bg-gradient-to-r from-cream via-gold to-cream bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                  {i === 1 ? <br /> : i === 3 ? <br /> : ""}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-body text-base sm:text-lg text-text-muted max-w-xl mt-6 leading-relaxed"
          >
            Handcrafted waffles, artisan shakes, and bespoke cakes — 
            every bite tells a story of passion and the finest ingredients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-10 sm:mt-12 flex flex-wrap gap-4 items-center"
          >
            <Link
              href="/menu"
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-gold text-midnight font-nav text-xs tracking-[4px] uppercase font-bold hover:bg-gold-dark hover:shadow-[0_0_40px_-5px_rgba(212,175,55,0.4)] transition-all duration-400"
            >
              View Menu
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/#signature"
              className="group inline-flex items-center gap-3 px-8 py-3.5 border border-gold/40 text-gold font-nav text-xs tracking-[4px] uppercase hover:bg-gold/10 hover:border-gold transition-all duration-400"
            >
              Explore
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2 }}
          className="absolute bottom-12 left-6 lg:left-12"
        >
          <p className="font-nav text-xs tracking-[3px] uppercase text-text-muted">
            <motion.span
              className="text-gold inline-block"
              animate={prefersReduced ? {} : {
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              4.8 ★
            </motion.span>
            · Ankleshwar&apos;s Finest Desserts
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="absolute bottom-12 right-6 lg:right-12"
        >
          <motion.div
            animate={prefersReduced ? {} : {
              y: [0, -6, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-20 h-20 sm:w-28 sm:h-28 opacity-20 hover:opacity-40 transition-opacity duration-500"
          >
            <Image
              src="/logo.jpg"
              alt=""
              fill
              className="object-cover rounded-full"
              sizes="112px"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={prefersReduced ? {} : {
            y: [0, 6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-1"
        >
          <span className="font-nav text-[9px] tracking-[3px] uppercase text-text-muted/50">
            Scroll
          </span>
          <svg className="w-4 h-4 text-gold/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
