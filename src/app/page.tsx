import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Signature from "@/components/Signature";

export const metadata: Metadata = {
  title: "Sweet Butterfly | Ankleshwar's Finest Dessert Cafe",
  description:
    "Ankleshwar's highest rated dessert cafe. Waffles, Crepes, Shakes & Custom Cakes. Rated 4.8/5.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Signature />
    </>
  );
}

