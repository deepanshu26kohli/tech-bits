"use client";

import { motion } from "framer-motion";
import { TrendingUp, Cpu, Zap, BarChart3, Rocket, ShieldCheck } from "lucide-react";

const features = [
    {
        title: "Revenue-First Approach",
        desc: "We don't just write code; we build engines that drive sales. Every feature is optimized for high conversion and low drop-offs.",
        icon: <TrendingUp size={32} />,
    },
    {
        title: "Specialized D2C Tech",
        desc: "Custom RTO protection, one-click checkout flows, and logistics intelligence models built specifically for Indian D2C brands.",
        icon: <Cpu size={32} />,
    },
    {
        title: "Speed & Scalability",
        desc: "Infrastructure designed to handle flash sales and high traffic spikes without crashing. 99.9% uptime guaranteed for your store.",
        icon: <Zap size={32} />,
    },
    {
        title: "Data-Driven Decisions",
        desc: "Integrated analytics that tell you exactly where you’re losing money, which channels work, and how to fix leaks immediately.",
        icon: <BarChart3 size={32} />,
    },
];

const WhyChooseUs = () => {
    return (
        <section className="relative py-24 bg-[#0F2241]  text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2563eb10,_transparent_70%)] pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why <span className="text-blue-400">D2C Brands</span> Choose Us?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We act as your <span className="text-blue-200 font-semibold">Growth Infrastructure Partner</span>, not just a dev shop.
                    </p>
                </motion.div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group text-left"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
