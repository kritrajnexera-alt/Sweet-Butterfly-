"use client";

import { ButterflySmall } from "./Butterfly";

export default function Footer() {
  return (
    <footer className="bg-midnight-light border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ButterflySmall className="w-6 h-5 text-gold" />
            <span className="font-heading text-lg italic text-cream">
              Sweet Butterfly
            </span>
          </div>

          <p className="font-body text-xs text-text-muted text-center">
            &copy; {new Date().getFullYear()} Sweet Butterfly. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-nav text-[10px] tracking-[3px] uppercase text-text-muted hover:text-gold transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="font-nav text-[10px] tracking-[3px] uppercase text-text-muted hover:text-gold transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
