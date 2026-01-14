"use client";

import { motion } from "framer-motion";

export default function Market() {
  return (
    <section id="market" className="py-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">From Farm to Market</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Mushrooms are harvested, packaged, and delivered fresh to markets,
          hotels, restaurants, and households.
        </p>
      </motion.div>
    </section>
  );
}
