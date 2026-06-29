"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconWaffle, IconCrepe, IconShake, IconIceCream, IconCake, IconCoffee } from "@/components/MenuIcons";
import TitleSetter from "@/components/TitleSetter";

type CategoryKey = "waffles" | "crepes" | "shakes" | "icecream" | "cakes" | "coffee";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
  image: string;
}

const categoryImages: Record<CategoryKey, string> = {
  waffles: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
  crepes: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&q=80",
  shakes: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
  icecream: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&q=80",
  cakes: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
  coffee: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
};

const menuData: Record<CategoryKey, { label: string; icon: React.ReactNode; items: MenuItem[] }> = {
  waffles: {
    label: "Waffles",
    icon: <IconWaffle className="w-6 h-6" />,
    items: [
      { name: "Classic Belgian Waffle", description: "Golden crisp waffle with maple syrup & butter", price: "₹149", tag: "Bestseller", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&q=80" },
      { name: "Chocolate Drizzle Waffle", description: "Belgian waffle with dark chocolate ganache & whipped cream", price: "₹199", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&q=80" },
      { name: "Berry Bliss Waffle", description: "Mixed berries, honey, and vanilla ice cream on a crisp waffle", price: "₹249", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=200&q=80" },
      { name: "Caramel Crunch Waffle", description: "Caramel sauce, toasted nuts, and a scoop of butterscotch ice cream", price: "₹229", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&q=80" },
      { name: "Nutella Paradise", description: "Warm waffle loaded with Nutella, banana slices & sprinkles", price: "₹269", tag: "Popular", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=200&q=80" },
    ],
  },
  crepes: {
    label: "Crepes",
    icon: <IconCrepe className="w-6 h-6" />,
    items: [
      { name: "Classic French Crepe", description: "Thin golden crepe with powdered sugar & lemon zest", price: "₹129", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=200&q=80" },
      { name: "Chocolate Hazelnut Crepe", description: "Filled with Nutella, hazelnuts & fresh strawberries", price: "₹219", tag: "Bestseller", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=200&q=80" },
      { name: "Banana Caramel Crepe", description: "Caramelized bananas with salted caramel drizzle", price: "₹199", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=200&q=80" },
      { name: "Mixed Berry Crepe", description: "Fresh blueberries, raspberries & cream cheese filling", price: "₹239", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=200&q=80" },
      { name: "Savory Spinach Crepe", description: "Spinach, ricotta & sundried tomato — a savory classic", price: "₹179", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=200&q=80" },
    ],
  },
  shakes: {
    label: "Shakes",
    icon: <IconShake className="w-6 h-6" />,
    items: [
      { name: "Classic Oreo Shake", description: "Creamy vanilla shake blended with crushed Oreos", price: "₹149", tag: "Bestseller", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&q=80" },
      { name: "Belgian Chocolate Shake", description: "Rich dark chocolate shake topped with whipped cream", price: "₹179", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&q=80" },
      { name: "Mango Tango Shake", description: "Fresh alphonso mango pulp blended with milk & cream", price: "₹199", tag: "Seasonal", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&q=80" },
      { name: "Salted Caramel Shake", description: "Buttery caramel with sea salt & vanilla bean ice cream", price: "₹189", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&q=80" },
      { name: "Red Velvet Shake", description: "Red velvet cake crumble blended into a creamy milkshake", price: "₹219", tag: "Popular", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&q=80" },
      { name: "Tropical Coconut Shake", description: "Coconut milk, pineapple & a hint of vanilla", price: "₹199", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&q=80" },
    ],
  },
  icecream: {
    label: "Ice Cream",
    icon: <IconIceCream className="w-6 h-6" />,
    items: [
      { name: "Belgian Dark Chocolate", description: "Intense 70% cocoa ice cream made in-house", price: "₹99", tag: "Signature", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=200&q=80" },
      { name: "Mango Cream", description: "Alphonso mango pulp in a creamy milk base", price: "₹99", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=200&q=80" },
      { name: "Pistachio Delight", description: "Premium Iranian pistachios in a soft cream base", price: "₹119", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=200&q=80" },
      { name: "Strawberry Fields", description: "Fresh strawberry puree swirled through vanilla cream", price: "₹99", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=200&q=80" },
      { name: "Butterscotch Crunch", description: "Butterscotch ribbons with honeycomb crunch", price: "₹109", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=200&q=80" },
      { name: "Tender Coconut", description: "Real coconut chunks & coconut milk ice cream", price: "₹109", tag: "Refreshing", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=200&q=80" },
    ],
  },
  cakes: {
    label: "Cakes & Pastries",
    icon: <IconCake className="w-6 h-6" />,
    items: [
      { name: "Signature Chocolate Cake", description: "Three-layer dark chocolate mousse cake with gold leaf", price: "₹499", tag: "Signature", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80" },
      { name: "Red Velvet Cake", description: "Classic red velvet with cream cheese frosting", price: "₹449", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80" },
      { name: "Blueberry Cheesecake", description: "Baked New York style with blueberry compote", price: "₹399", tag: "Popular", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80" },
      { name: "Mango Pastry", description: "Light sponge with fresh mango cream & jelly topping", price: "₹149", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80" },
      { name: "Tiramisu Cup", description: "Coffee-soaked ladyfingers with mascarpone cream", price: "₹199", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80" },
      { name: "Custom Celebration Cake", description: "Personalized design — order 48 hours ahead", price: "On order", tag: "Custom", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80" },
    ],
  },
  coffee: {
    label: "Hot Beverages",
    icon: <IconCoffee className="w-6 h-6" />,
    items: [
      { name: "Espresso", description: "Single shot of our signature dark roast", price: "₹89", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80" },
      { name: "Cappuccino", description: "Velvety espresso with steamed milk & foam", price: "₹129", tag: "Popular", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80" },
      { name: "Hot Chocolate", description: "Rich Belgian cocoa steamed with whole milk", price: "₹149", tag: "Bestseller", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80" },
      { name: "Masala Chai", description: "Traditional Indian spiced tea brewed fresh", price: "₹79", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80" },
      { name: "Irish Coffee", description: "Coffee with a hint of whiskey cream (non-alcoholic)", price: "₹169", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80" },
      { name: "Caramel Latte", description: "Smooth espresso with caramel syrup & steamed milk", price: "₹149", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80" },
    ],
  },
};

const categoryKeys: CategoryKey[] = ["waffles", "crepes", "shakes", "icecream", "cakes", "coffee"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("waffles");
  const prefersReduced = useReducedMotion();

  return (
    <>
      <TitleSetter title="Menu" />
      <section className="relative bg-midnight-light overflow-hidden pt-28 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.03)_0%,_transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-48 sm:h-64 w-full overflow-hidden"
      >
        <Image
          src={categoryImages[activeCategory]}
          alt={menuData[activeCategory].label}
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight-light/60 to-midnight-light" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-nav text-xs tracking-[4px] uppercase text-gold mb-4">
            Our Offerings
          </h2>
          <p className="font-heading text-[clamp(2rem,5vw,44px)] italic text-cream">
            Explore the Menu
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-12 sticky top-20 z-20 pb-4 bg-midnight-light/90 backdrop-blur-sm">
          {categoryKeys.map((key) => {
            const cat = menuData[key];
            const isActive = key === activeCategory;
            return (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                whileHover={prefersReduced ? {} : { scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2.5 px-5 py-3 font-nav text-xs tracking-[3px] uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-gold text-midnight shadow-[0_0_20px_-5px_rgba(212,175,55,0.3)]"
                    : "bg-midnight text-text-muted border border-white/10 hover:border-gold/40 hover:text-gold"
                }`}
              >
                <span className={isActive ? "text-midnight" : "text-gold"}>{cat.icon}</span>
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReduced ? 0 : -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="grid grid-cols-1 gap-4">
              {menuData[activeCategory].items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: prefersReduced ? 0 : i * 0.06,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="group flex gap-4 sm:gap-6 p-4 bg-midnight border border-white/5 hover:border-gold/20 transition-all duration-300"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-midnight-light">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-heading text-lg sm:text-xl text-cream group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="font-nav text-[9px] tracking-[2px] uppercase px-2 py-0.5 border border-gold/30 text-gold">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm text-text-muted mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-nav text-sm tracking-wider text-gold whitespace-nowrap mt-1 flex-shrink-0">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-sm text-text-muted mb-2">
            * Prices may vary. Custom cakes require 48 hours notice.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-gold text-midnight font-nav text-xs tracking-[4px] uppercase font-bold hover:bg-gold-dark transition-all duration-300 mt-4"
          >
            Place an Order
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
    </>
  );
}
