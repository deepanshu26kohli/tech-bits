"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, ShieldCheck, Smartphone, BarChart, Users } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-10 h-10 text-blue-400" />,
    title: "Web & App Development",
    desc: "We build high-performance web and mobile applications tailored to your business needs using React, Next.js, Laravel, and modern stacks.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-blue-400" />,
    title: "Cloud & DevOps",
    desc: "From AWS to Vercel, we set up scalable, secure, and automated deployments that ensure your product is always available.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
    title: "Security & Compliance",
    desc: "We integrate authentication, role-based access control, and data protection measures to keep your platform safe.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-blue-400" />,
    title: "UI/UX & Design Systems",
    desc: "Clean, responsive, and user-friendly designs that improve engagement and deliver seamless user experiences.",
  },
  {
    icon: <BarChart className="w-10 h-10 text-blue-400" />,
    title: "Data & Analytics",
    desc: "We implement dashboards, BI solutions, and analytics pipelines so you can make data-driven decisions with confidence.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-400" />,
    title: "Consulting & Strategy",
    desc: "We partner with you to define a clear digital roadmap, reduce technical risks, and launch faster with expert guidance.",
  },
];

const Services = () => {
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
          Our <span className="text-blue-400">Services</span>
        </motion.h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          At <span className="text-blue-400 font-semibold">LaunchUrPlatform</span>, 
          we provide end-to-end digital services to help businesses transform, scale, and thrive in today’s tech-driven world.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-900 rounded-2xl shadow-lg p-6 text-left hover:scale-105 transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-blue-400">
                {service.title}
              </h4>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
