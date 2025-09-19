"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#2563eb20,_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Get in <span className="text-blue-400">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Have an idea or project in mind? Let’s talk and bring your vision to
          life. Our team is here to answer questions and craft solutions
          tailored to your business.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto text-left"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 mb-6 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 mb-6 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:opacity-90 transition font-semibold shadow-lg"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12"
        >
          <p className="text-gray-300">
            Or reach us directly at{" "}
            <span className="text-blue-400 font-semibold">
              info@launchurplatform.com
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
