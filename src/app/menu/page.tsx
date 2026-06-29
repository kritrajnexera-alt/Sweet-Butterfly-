"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { IconWaffle, IconCrepe, IconShake, IconIceCream, IconCake, IconCoffee } from "@/components/MenuIcons";
import TitleSetter from "@/components/TitleSetter";

type CategoryKey = "waffles" | "crepes" | "shakes" | "icecream" | "cakes" | "coffee";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

const menuData: Record<CategoryKey, { label: string; icon: React.ReactNode; items: MenuItem[] }> = {
  waffles: {
    label: "Waffles",
    icon: <IconWaffle className="w-6 h-6" />,
    items: [
      { name: "Classic Belgian Waffle", description: "Golden crisp waffle with maple syrup & butter", price: "₹149", tag: "Bestseller" },
      { name: "Chocolate Drizzle Waffle", description: "Belgian waffle with dark chocolate ganache & whipped cream", price: "₹199" },
      { name: "Berry Bliss Waffle", description: "Mixed berries, honey, and vanilla ice cream on a crisp waffle", price: "₹249" },
      { name: "Caramel Crunch Waffle", description: "Caramel sauce, toasted nuts, and a scoop of butterscotch ice cream", price: "₹229" },
      { name: "Nutella Paradise", description: "Warm waffle loaded with Nutella, banana slices & sprinkles", price: "₹269", tag: "Popular" },
    ],
  },
  crepes: {
    label: "Crepes",
    icon: <IconCrepe className="w-6 h-6" />,
    items: [
      { name: "Classic French Crepe", description: "Thin golden crepe with powdered sugar & lemon zest", price: "₹129" },
      { name: "Chocolate Hazelnut Crepe", description: "Filled with Nutella, hazelnuts & fresh strawberries", price: "₹219", tag: "Bestseller" },
      { name: "Banana Caramel Crepe", description: "Caramelized bananas with salted caramel drizzle", price: "₹199" },
      { name: "Mixed Berry Crepe", description: "Fresh blueberries, raspberries & cream cheese filling", price: "₹239" },
      { name: "Savory Spinach Crepe", description: "Spinach, ricotta & sundried tomato — a savory classic", price: "₹179" },
    ],
  },
  shakes: {
    label: "Shakes",
    icon: <IconShake className="w-6 h-6" />,
    items: [
      { name: "Classic Oreo Shake", description: "Creamy vanilla shake blended with crushed Oreos", price: "₹149", tag: "Bestseller" },
      { name: "Belgian Chocolate Shake", description: "Rich dark chocolate shake topped with whipped cream", price: "₹179" },
      { name: "Mango Tango Shake", description: "Fresh alphonso mango pulp blended with milk & cream", price: "₹199", tag: "Seasonal" },
      { name: "Salted Caramel Shake", description: "Buttery caramel with sea salt & vanilla bean ice cream", price: "₹189" },
      { name: "Red Velvet Shake", description: "Red velvet cake crumble blended into a creamy milkshake", price: "₹219", tag: "Popular" },
      { name: "Tropical Coconut Shake", description: "Coconut milk, pineapple & a hint of vanilla", price: "₹199" },
    ],
  },
  icecream: {
    label: "Ice Cream",
    icon: <IconIceCream className="w-6 h-6" />,
    items: [
      { name: "Belgian Dark Chocolate", description: "Intense 70% cocoa ice cream made in-house", price: "₹99", tag: "Signature" },
      { name: "Mango Cream", description: "Alphonso mango pulp in a creamy milk base", price: "₹99" },
      { name: "Pistachio Delight", description: "Premium Iranian pistachios in a soft cream base", price: "₹119" },
      { name: "Strawberry Fields", description: "Fresh strawberry puree swirled through vanilla cream", price: "₹99" },
      { name: "Butterscotch Crunch", description: "Butterscotch ribbons with honeycomb crunch", price: "₹109" },
      { name: "Tender Coconut", description: "Real coconut chunks & coconut milk ice cream", price: "₹109", tag: "Refreshing" },
    ],
  },
  cakes: {
    label: "Cakes & Pastries",
    icon: <IconCake className="w-6 h-6" />,
    items: [
      { name: "Signature Chocolate Cake", description: "Three-layer dark chocolate mousse cake with gold leaf", price: "₹499", tag: "Signature" },
      { name: "Red Velvet Cake", description: "Classic red velvet with cream cheese frosting", price: "₹449" },
      { name: "Blueberry Cheesecake", description: "Baked New York style with blueberry compote", price: "₹399", tag: "Popular" },
      { name: "Mango Pastry", description: "Light sponge with fresh mango cream & jelly topping", price: "₹149" },
      { name: "Tiramisu Cup", description: "Coffee-soaked ladyfingers with mascarpone cream", price: "₹199" },
      { name: "Custom Celebration Cake", description: "Personalized design — order 48 hours ahead", price: "On order", tag: "Custom" },
    ],
  },
  coffee: {
    label: "Hot Beverages",
    icon: <IconCoffee className="w-6 h-6" />,
    items: [
      { name: "Espresso", description: "Single shot of our signature dark roast", price: "₹89" },
      { name: "Cappuccino", description: "Velvety espresso with steamed milk & foam", price: "₹129", tag: "Popular" },
      { name: "Hot Chocolate", description: "Rich Belgian cocoa steamed with whole milk", price: "₹149", tag: "Bestseller" },
      { name: "Masala Chai", description: "Traditional Indian spiced tea brewed fresh", price: "₹79" },
      { name: "Irish Coffee", description: "Coffee with a hint of whiskey cream (non-alcoholic)", price: "₹169" },
      { name: "Caramel Latte", description: "Smooth espresso with caramel syrup & steamed milk", price: "₹149" },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-nav text-xs tracking-[4px] uppercase text-gold mb-4">
            Our Offerings
          </h2>
          <p className="font-heading text-[clamp(2rem,5vw,44px)] italic text-cream">
            Explore the Menu
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-14">
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
                    ? "bg-gold text-midnight"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
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
                  className="group py-5 border-b border-white/5 last:border-b-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-heading text-xl text-cream group-hover:text-gold transition-colors duration-300">
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
                    <span className="font-nav text-sm tracking-wider text-gold whitespace-nowrap mt-1">
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
    </>
  );
}
