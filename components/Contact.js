"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <p className="text-center mb-6">
        Phone: +250 XXX XXX XXX <br />
        Location: Rwanda
      </p>

      <motion.a
        href="https://wa.me/250783214787"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="
    fixed bottom-6 right-6 
    bg-green-600 text-white 
    p-2 md:p-3 rounded-full 
    shadow-lg 
    flex items-center justify-center
    z-50
  "
      >
        <span className="text-2xl md:text-3xl">💬</span>
      </motion.a>
    </section>
  );
}
