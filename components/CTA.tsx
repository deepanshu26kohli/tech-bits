"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <>


      <section className="relative py-24 text-center text-white overflow-hidden">
        {/* Background Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/70 via-indigo-800/70 to-purple-900/70" />
        <div className="absolute inset-0 backdrop-blur-xl" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg"
          >
            Ready to Launch Your Next Big Idea?
          </motion.h2>

          <p className="text-gray-200 max-w-2xl mx-auto mb-10 text-lg">
            Join 50+ satisfied clients who've transformed their businesses with our cutting-edge solutions.
            Let's collaborate to turn your vision into reality — from concept to launch, we're with you every step of the way.
          </p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link href="/contact">
              <button
                className="relative px-10 py-4 rounded-xl font-semibold text-lg
                       bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600
                       shadow-lg shadow-blue-900/40 hover:shadow-indigo-900/50
                       transition-all duration-300 hover:scale-105"
              >
                Get in Touch
                <span className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-sm opacity-0 hover:opacity-20 transition" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CTA;
