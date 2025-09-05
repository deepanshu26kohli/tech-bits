"use client";

import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-center text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-4"
      >
        Ready to Build Something Amazing?
      </motion.h2>
      <p className="text-gray-200 max-w-2xl mx-auto mb-6">
        Let’s collaborate and bring your ideas to life with techbits.
      </p>
      <motion.button
        initial={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
      >
        Get in Touch
      </motion.button>
    </section>
  );
};

export default CTA;
