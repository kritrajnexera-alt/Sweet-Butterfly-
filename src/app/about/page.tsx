"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import TitleSetter from "@/components/TitleSetter";

export default function AboutPage() {
  const prefersReduced = useReducedMotion();
  return (
    <>
      <TitleSetter title="About" />
      <section className="relative bg-midnight-light overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_rgba(212,175,55,0.03)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: prefersReduced ? 1 : 0, x: prefersReduced ? 0 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReduced ? 0.01 : 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.span
              className="font-heading text-[clamp(6rem,15vw,200px)] italic font-light leading-none text-gold block"
              animate={prefersReduced ? {} : {
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              4.8
            </motion.span>
            <span className="font-nav text-xs tracking-[4px] uppercase text-text-muted mt-2 block">
              ★ Ankleshwar&apos;s Highest Rated
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: prefersReduced ? 1 : 0, x: prefersReduced ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReduced ? 0.01 : 0.8, delay: prefersReduced ? 0 : 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            <h2 className="font-nav text-xs tracking-[4px] uppercase text-gold">
              Our Story
            </h2>
            <p className="font-heading text-[clamp(1.5rem,3.5vw,32px)] italic text-cream leading-[1.3] text-balance">
              Born from a love for desserts and a dream to create something magical in Ankleshwar.
            </p>
            <p className="font-body text-base text-text-muted leading-relaxed">
              Sweet Butterfly began as a small idea — a place where every dessert is made with
              care, creativity, and the finest ingredients. From our signature waffles to
              handcrafted shakes and custom celebration cakes, every item tells a story of
              passion and quality.
            </p>
            <p className="font-body text-base text-text-muted leading-relaxed">
              Today, we are proud to be Ankleshwar&apos;s highest rated dessert cafe, serving
              smiles with every plate. Welcome to our garden of sweet dreams.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 sm:pb-32">
        <motion.div
          initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: prefersReduced ? 0.01 : 0.6 }}
          className="border-t border-gold/10 pt-16"
        >
          <h2 className="font-nav text-xs tracking-[4px] uppercase text-gold mb-10 text-center">
            Meet the Founder
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div
              initial={{ opacity: prefersReduced ? 1 : 0, scale: prefersReduced ? 1 : 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0.01 : 0.5 }}
              className="relative w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gold/20">
                <Image
                  src="/logo.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-midnight" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </motion.div>

            <div className="text-center md:text-left space-y-4">
              <h3 className="font-heading text-2xl sm:text-3xl italic text-cream">
                Riya Patel
              </h3>
              <p className="font-nav text-xs tracking-[4px] uppercase text-gold/70">
                Owner &amp; Head Pastry Chef
              </p>
              <p className="font-body text-base text-text-muted leading-relaxed max-w-lg">
                A pastry enthusiast who traded a corporate career for her true passion — 
                desserts. Riya trained at renowned patisseries before bringing her vision 
                to Ankleshwar. Every recipe at Sweet Butterfly is crafted, tested, and 
                perfected by her.
              </p>
              <p className="font-heading text-lg italic text-gold/60">
                &ldquo;A great dessert is not just about taste — it&apos;s about the 
                emotion it leaves behind.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 right-8 w-20 h-20 opacity-10 pointer-events-none"
        animate={prefersReduced ? {} : {
          y: [0, -6, 0],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-gold/10">
          <Image
            src="/logo.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
    </>
  );
}
