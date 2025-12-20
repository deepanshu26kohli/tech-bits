"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link"; // ✅ import Link for routing
import CircularText from "./CircularText";

const images = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Space/Network
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", // Chips/Tech
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Cyberpunk/Neon
  "https://images.unsplash.com/photo-1558494949-ef2a0de472f1?q=80&w=2000&auto=format&fit=crop", // Abstract Glitch
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-[90vh] py-28 w-full overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Hero Background"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Dark Overlay for readability - Reduced opacity for visibility */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold drop-shadow-2xl"
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
          drive measurable results. Let us build something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          {/* ✅ Get Started -> Contact Page */}
          <Link href="/contact">
            <button className="px-6 py-3 text-lg rounded-xl bg-blue-500 hover:bg-blue-600 transition duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              Get Started
            </button>
          </Link>

          {/* ✅ Book a Demo -> Demo Page */}
          <Link href="/book-demo">
            <button className="px-6 py-3 text-lg rounded-xl border border-white text-white hover:bg-white hover:text-blue-700 transition duration-300 backdrop-blur-sm bg-white/5">
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
