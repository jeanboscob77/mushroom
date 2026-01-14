"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const NAV_HEIGHT = 64;

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Process", id: "process" },
    { name: "Market", id: "market" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    // Close the menu first
    setOpen(false);

    // Wait for animation to finish (300ms)
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop - NAV_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 300); // match motion exit duration
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-green-900/95 backdrop-blur shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 h-16">
        <h1 className="font-bold text-white text-xl">MushroomFarm</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-white">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScroll(link.id)}
                className="hover:text-green-300 transition cursor-pointer"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-green-900 text-white px-6 pb-4"
          >
            {links.map((link) => (
              <li key={link.id} className="py-2">
                <button
                  onClick={() => handleScroll(link.id)}
                  className="block w-full text-left hover:text-green-300 transition"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
