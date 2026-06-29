"use client";

import { motion, useReducedMotion } from "framer-motion";

const categories = [
  { name: "Waffles", items: 8, icon: "🧇" },
  { name: "Crepes", items: 6, icon: "🥞" },
  { name: "Shakes", items: 12, icon: "🥤" },
  { name: "Ice Cream", items: 10, icon: "🍨" },
  { name: "Cakes & Pastries", items: 9, icon: "🎂" },
  { name: "Hot Beverages", items: 7, icon: "☕" },
];

export default function Menu() {
  const prefersReduced = useReducedMotion();
  return (
    <section id="menu" className="relative bg-midnight-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-nav text-xs tracking-[4px] uppercase text-gold mb-4">
            Our Offerings
          </h2>
          <p className="font-heading text-[clamp(2rem,5vw,44px)] italic text-cream">
            Explore the Menu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: prefersReduced ? 0.01 : 0.5,
                delay: prefersReduced ? 0 : i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={prefersReduced ? {} : { scale: 1.02 }}
              className="group block w-full text-left bg-midnight border border-white/5 p-8 transition-all duration-400 hover:border-gold hover:shadow-[0_0_35px_-8px_rgba(212,175,55,0.25)] cursor-pointer"
            >
              <span className="text-2xl block mb-4" aria-hidden="true">{cat.icon}</span>
              <h3 className="font-heading text-2xl text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                {cat.name}
              </h3>
              <p className="font-body text-sm text-text-muted">
                {cat.items} items
              </p>
              <div className="mt-4 w-8 h-px bg-gold/30 group-hover:w-12 transition-all duration-300" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
