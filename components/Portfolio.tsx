"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Econix Dashboard",
    desc: "Built a scalable finance dashboard with real-time analytics and Snowflake integration.",
    img: "https://placehold.co/600x400",
  },
  {
    title: "Accountizer",
    desc: "An accounting SaaS platform built with React & Laravel for managing finances efficiently.",
    img: "https://placehold.co/600x400",
  },
  {
    title: "Hydrogen Shopify App",
    desc: "Custom Hydrogen storefront with seamless authentication and optimized APIs.",
    img: "https://placehold.co/600x400",
  },
];

const Portfolio = () => {
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
          Our <span className="text-blue-400">Work</span>
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Take a look at some of the projects we've delivered for our clients.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
