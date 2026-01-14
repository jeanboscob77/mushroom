"use client";

import { motion } from "framer-motion";

const items = [
  { title: "Spores", desc: "Mushrooms grow from spores." },
  { title: "Substrate", desc: "Natural materials provide nutrients." },
  { title: "Environment", desc: "Humidity and temperature are controlled." },
];

export default function HowItGrows() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          How Mushrooms Grow
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
