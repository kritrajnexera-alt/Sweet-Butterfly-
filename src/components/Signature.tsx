"use client";

import { motion, useReducedMotion } from "framer-motion";

const menuItems = [
  { name: "Waffles & Crepes", price: "from ₹99" },
  { name: "Artisan Shakes", price: "from ₹129" },
  { name: "Custom Cakes", price: "on order" },
];

export default function Signature() {
  const prefersReduced = useReducedMotion();
  return (
    <section
      id="signature"
      className="relative bg-midnight overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 sm:py-36">
        <motion.blockquote
          initial={{ opacity: prefersReduced ? 1 : 0, x: prefersReduced ? 0 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReduced ? 0.01 : 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20"
        >
          <p className="font-heading text-[clamp(1.8rem,5vw,48px)] italic font-light leading-[1.2] text-cream">
            &ldquo;We don&apos;t just make desserts.
            <br />
            <span className="text-gold">We craft experiences.&rdquo;</span>
          </p>
        </motion.blockquote>

        <div className="space-y-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: prefersReduced ? 1 : 0, x: prefersReduced ? 0 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: prefersReduced ? 0.01 : 0.6,
                delay: prefersReduced ? 0 : i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex items-baseline gap-4 sm:gap-8 group"
            >
              <span className="font-body text-lg sm:text-xl text-text font-light">
                {item.name}
              </span>
              <span className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
              <span className="font-nav text-sm tracking-wider text-gold whitespace-nowrap">
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 right-0 w-64 h-64 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full rounded-full bg-gold blur-3xl" />
      </div>
    </section>
  );
}
