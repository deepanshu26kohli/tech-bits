"use client";

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
    <section className="relative bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white py-24 overflow-hidden">
      {/* Background subtle glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Our <span className="text-blue-400">Services</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          At <span className="text-blue-400 font-semibold">LaunchUrPlatform</span>, 
          we provide end-to-end digital services to help businesses transform, scale, and thrive in today’s tech-driven world.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-white/10 bg-white/10 
              backdrop-blur-xl shadow-xl p-6 text-left 
              hover:border-blue-400/40 transition-colors duration-300"
            >
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-blue-500/30 pointer-events-none"></div>

              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-blue-400">
                {service.title}
              </h4>
              <p className="text-gray-200 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
