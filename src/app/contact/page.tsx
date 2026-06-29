"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ButterflyGold } from "@/components/Butterfly";
import TitleSetter from "@/components/TitleSetter";

export default function ContactPage() {
  const prefersReduced = useReducedMotion();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.phone.trim()) e.phone = "Phone is required";
    else if (!/^[+]?[\d\s-]{8,15}$/.test(formData.phone)) e.phone = "Enter a valid phone number";
    if (!formData.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <TitleSetter title="Contact" />
      <section className="relative bg-midnight overflow-hidden pt-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0.01 : 0.6 }}
          className="mb-16"
        >
          <h2 className="font-nav text-xs tracking-[4px] uppercase text-gold mb-4">
            Visit Us
          </h2>
          <p className="font-heading text-[clamp(2rem,5vw,44px)] italic text-cream">
            Find Your Sweet Escape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: prefersReduced ? 1 : 0, x: prefersReduced ? 0 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReduced ? 0.01 : 0.6, delay: prefersReduced ? 0 : 0.1 }}
          >
            <div className="space-y-8 mb-12">
              <div>
                <h3 className="font-nav text-xs tracking-[4px] uppercase text-text-muted mb-2">
                  Location
                </h3>
                <p className="font-body text-base text-text">
                  GIDC, Ankleshwar<br />
                  Gujarat, India
                </p>
              </div>
              <div>
                <h3 className="font-nav text-xs tracking-[4px] uppercase text-text-muted mb-2">
                  Phone
                </h3>
                <p className="font-body text-base text-text">
                  +91 98765 43210
                </p>
              </div>
              <div>
                <h3 className="font-nav text-xs tracking-[4px] uppercase text-text-muted mb-2">
                  Follow Us
                </h3>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base text-gold hover:text-gold-dark transition-colors duration-300"
                >
                  @sweetbutterfly.ankleshwar
                </a>
              </div>
            </div>

            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: prefersReduced ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-midnight font-nav text-xs tracking-[4px] uppercase font-bold hover:bg-gold-dark transition-colors duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order on WhatsApp
            </motion.a>

            <div className="mt-12">
              <h3 className="font-nav text-xs tracking-[4px] uppercase text-gold mb-6">
                Drop us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                    className={`w-full bg-midnight border px-5 py-3.5 font-body text-sm text-text placeholder:text-text-muted/50 outline-none transition-all duration-300 focus:border-gold ${
                      errors.name ? "border-red-500/60" : "border-white/10"
                    }`}
                  />
                  {errors.name && <p className="font-body text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                    className={`w-full bg-midnight border px-5 py-3.5 font-body text-sm text-text placeholder:text-text-muted/50 outline-none transition-all duration-300 focus:border-gold ${
                      errors.phone ? "border-red-500/60" : "border-white/10"
                    }`}
                  />
                  {errors.phone && <p className="font-body text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message"
                    value={formData.message}
                    onChange={(e) => { setFormData({ ...formData, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                    className={`w-full bg-midnight border px-5 py-3.5 font-body text-sm text-text placeholder:text-text-muted/50 outline-none transition-all duration-300 focus:border-gold resize-none ${
                      errors.message ? "border-red-500/60" : "border-white/10"
                    }`}
                  />
                  {errors.message && <p className="font-body text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: prefersReduced ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-gold text-midnight font-nav text-xs tracking-[4px] uppercase font-bold hover:bg-gold-dark transition-colors duration-300"
                >
                  Send message
                </motion.button>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-body text-sm text-gold text-center"
                  >
                    Thank you! We&apos;ll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: prefersReduced ? 1 : 0, x: prefersReduced ? 0 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReduced ? 0.01 : 0.6, delay: prefersReduced ? 0 : 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="w-full aspect-[4/3] bg-midnight-light border border-white/5 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.123456789012!2d73.0!3d21.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM2JzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sweet Butterfly Location"
                className="opacity-70 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <motion.div
              animate={prefersReduced ? {} : {
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ButterflyGold className="w-32 h-24 text-gold opacity-10 self-center hover:opacity-20 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
