"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Organic Mushroom Farming
          </h1>
          <p className="mt-4 max-w-2xl mx-auto">
            We grow high-quality organic mushrooms using sustainable farming
            methods – from production to market.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
