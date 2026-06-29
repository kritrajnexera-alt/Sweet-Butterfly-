"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ButterflyGold } from "./Butterfly";

const titleText = "Where Every Dessert Tells A Story.";

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-midnight overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.04)_0%,_transparent_60%)]"
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
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gold/3 blur-3xl"
        animate={prefersReduced ? {} : {
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 left-16 w-48 h-48 rounded-full bg-gold/2 blur-3xl"
        animate={prefersReduced ? {} : {
          y: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl">
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
                  {word}
                  {i === 1 ? <br /> : i === 3 ? <br /> : ""}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 sm:mt-12"
          >
            <Link
              href="/#signature"
              className="group inline-flex items-center gap-3 px-8 py-3.5 border border-gold/40 text-gold font-nav text-xs tracking-[4px] uppercase hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.2)] transition-all duration-400"
            >
              Explore our world
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="absolute bottom-12 left-6 lg:left-12"
        >
          <p className="font-nav text-xs tracking-[3px] uppercase text-text-muted">
            <span className="text-gold">4.8 ★</span> · Ankleshwar&apos;s Finest Desserts
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="absolute bottom-12 right-6 lg:right-12"
        >
          <motion.div
            animate={prefersReduced ? {} : {
              y: [0, -6, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ButterflyGold className="w-20 h-16 sm:w-28 sm:h-22 text-gold opacity-20 hover:opacity-40 transition-opacity duration-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
