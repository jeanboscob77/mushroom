"use client";

import { motion } from "framer-motion";

const steps = [
  "Substrate Preparation",
  "Sterilization",
  "Inoculation",
  "Incubation",
  "Fruiting",
  "Harvesting",
];

export default function Process() {
  return (
    <section id="process" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Growing Process</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
          >
            <h3 className="font-semibold">{step}</h3>
            <p className="mt-2 text-gray-600">
              Carefully controlled step ensuring healthy growth.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
