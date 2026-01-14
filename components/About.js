"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">About Our Farm</h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600">
          Our mushroom farm is dedicated to producing fresh, healthy, and
          organic mushrooms using modern cultivation techniques.
        </p>
      </motion.div>
    </section>
  );
}
