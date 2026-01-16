"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Layers, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { servicesData } from "@/lib/serviceData";

const TechStack = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="relative py-24 bg-[#0F2241] text-white overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                        <Layers size={16} />
                        <span>Our Arsenal</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Explore Our <span className="text-blue-400">Tech Stack</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We use the best tools for the job. Click on a service to reveal the technologies we power it with.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {servicesData.filter(service => service.details?.technologies && service.details.technologies.length > 0).map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeIndex === index
                                ? "bg-white/10 border-blue-500/50 shadow-lg shadow-blue-500/10"
                                : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-xl font-bold transition-colors ${activeIndex === index ? "text-blue-300" : "text-white"}`}>
                                    {service.title}
                                </span>
                                <div className={`flex items-center gap-2 text-sm text-gray-400 transition-colors ${activeIndex === index ? "text-blue-300" : ""}`}>
                                    <span className="hidden md:inline-block">
                                        {service.details?.technologies.length || 0} Technologies
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-blue-400" : ""}`}
                                    />
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-8 pt-2">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                                {service.details?.technologies.map((tech) => (
                                                    <Link
                                                        key={tech.slug}
                                                        href={`/services/${service.slug}/${tech.slug}`}
                                                        className="group flex flex-col p-4 rounded-xl bg-black/20 hover:bg-blue-600/20 border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                                                    >
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="font-semibold text-white group-hover:text-blue-300 transition-colors">{tech.title}</span>
                                                            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                                        </div>
                                                        <p className="text-xs text-gray-400 line-clamp-2">
                                                            {tech.description}
                                                        </p>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
