"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-midnight-light border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 pb-20 md:pb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-gold/20 group-hover:ring-gold/50 transition-all duration-300"
            >
              <Image
                src="/logo.jpg"
                alt="Sweet Butterfly Logo"
                fill
                className="object-cover"
                sizes="32px"
              />
            </motion.div>
            <span className="font-heading text-lg italic text-cream">
              Sweet Butterfly
            </span>
          </Link>

          <p className="font-body text-xs text-text-muted text-center">
            &copy; {new Date().getFullYear()} Sweet Butterfly. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/gallery"
              className="font-nav text-[10px] tracking-[3px] uppercase text-text-muted hover:text-gold transition-colors duration-300"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="font-nav text-[10px] tracking-[3px] uppercase text-text-muted hover:text-gold transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
