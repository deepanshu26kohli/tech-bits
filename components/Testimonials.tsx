"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "CEO, TechNova",
    feedback:
      "The team built an amazing solution for us! Everything from design to deployment was flawless.",
    img: "https://placehold.co/600x400?text=Client",
  },
  {
    name: "Ayesha Khan",
    role: "CTO, CloudSphere",
    feedback:
      "Their expertise in cloud solutions helped us scale seamlessly. Highly recommended!",
    img: "https://placehold.co/600x400?text=Client",
  },
  {
    name: "James Parker",
    role: "Founder, FinTechPro",
    feedback:
      "Our SaaS platform wouldn’t have been possible without their expert developers. Top-notch service!",
   img: "https://placehold.co/600x400?text=Client",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black/90 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-4"
        >
          What Our <span className="text-blue-400">Clients Say</span>
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          We value our clients feedback and strive to deliver the best.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg"
            >
              <Image
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-400">{t.role}</p>
              <p className="mt-3 text-gray-200 text-sm">{t.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
