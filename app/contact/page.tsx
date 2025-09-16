"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-gray-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-4"
        >
          Get in <span className="text-blue-400">Touch</span>
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Have an idea or project in mind? Let’s talk and bring your vision to life.
          Our team is here to answer questions and craft solutions tailored to your business.
        </p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gray-900 rounded-2xl shadow-lg p-8 max-w-3xl mx-auto text-left"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 mb-6 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 mb-6 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <p className="text-gray-300">
            Or reach us directly at{" "}
            <span className="text-blue-400 font-semibold">
              hello@launchurplatform.com
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
