"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // ✅ import Link for routing
import CircularText from "./CircularText";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-auto py-28 w-full">
      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Transform Your Vision Into{" "}
          <span className="text-blue-400">Digital Reality.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200 drop-shadow-md"
        >
          From innovative startups to established enterprises, we craft scalable,
          secure, and cutting-edge digital solutions that accelerate growth and
          drive measurable results. Let's build something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          {/* ✅ Get Started -> Contact Page */}
          <Link href="/contact">
            <button className="px-6 py-3 text-lg rounded-xl bg-blue-500 hover:bg-blue-600 transition duration-300">
              Get Started
            </button>
          </Link>

          {/* ✅ Book a Demo -> Demo Page */}
          <Link href="/book-demo">
            <button className="px-6 py-3 text-lg rounded-xl border border-white text-white hover:bg-white hover:text-blue-700 transition duration-300">
              Book a Demo
            </button>
          </Link>
        </motion.div>

        <CircularText
          text="LAUNCH*YOUR*PLATFORM*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class mt-10"
        />
      </div>
    </section>
  );
};

export default Hero;
