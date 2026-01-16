"use client";

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Cloud,
  ShieldCheck,
  Smartphone,
  BarChart,
  Users,
  ArrowRight,
  X,
  Megaphone,
  TrendingUp,
  Brain,
  LucideIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/lib/serviceData";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Code2,
  Cloud,
  ShieldCheck,
  Smartphone,
  BarChart,
  Users,
  Megaphone,
  TrendingUp,
  Brain,
};

// Define Service type derived from data but with resolved Icon
type Service = typeof servicesData[0] & {
  icon: JSX.Element;
};

const Services = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const router = useRouter();

  // Transform data to include the icon component
  const services: Service[] = servicesData.map((service) => ({
    ...service,
    icon: iconMap[service.iconName] ? (
      <div className="w-10 h-10 text-blue-400">
        {(() => {
          const Icon = iconMap[service.iconName];
          return <Icon className="w-full h-full" />;
        })()}
      </div>
    ) : (
      <Code2 className="w-10 h-10 text-blue-400" />
    ),
  }));

  return (
    <section className="relative bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white py-24 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our <span className="text-blue-400">Services</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          At <span className="text-blue-400 font-semibold">LaunchUrPlatform</span>,
          we provide end-to-end digital services to help businesses transform, scale, and thrive in today’s tech-driven world.
        </motion.p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl p-6 text-left hover:border-blue-400/40 transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveService(service)}
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-blue-400">
                {service.title}
              </h4>
              <p className="text-gray-200 text-sm leading-relaxed">{service.desc}</p>
              <div className="mt-4 flex items-center text-blue-400 text-sm font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            className="fixed inset-0 bg-[#0F2241] /70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveService(null);
            }}
          >
            <motion.div
              className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl max-w-2xl w-full p-8 shadow-2xl border border-white/10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                type="button"
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setActiveService(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6">{activeService.icon}</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {activeService.title}
              </h3>
              <p className="text-gray-300 mb-6">{activeService.details.intro}</p>

              <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-gray-300 mb-6">
                {activeService.details.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeService.details.technologies.map((tech, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${activeService.slug}/${tech.slug}`}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/40 hover:text-blue-200 transition-colors"
                  >
                    {tech.title}
                  </Link>
                ))}
              </div>

              <button
                type="button"
                className="mt-4 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
                onClick={() => router.push("/contact")}
              >
                Get Started
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
