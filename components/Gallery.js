"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = ["/g1.jpg", "/g2.jpg", "/g3.jpg", "/g4.jpg"];
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={src}
              alt={`Mushroom ${i + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
