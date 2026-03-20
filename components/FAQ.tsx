"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What is Launch Your Platform (LYP)?",
        answer: "Launch Your Platform (LYP) is a growth infrastructure partner for D2C brands. We don't just build websites; we build revenue-generating engines. Our focus is on fixing low conversion rates, reducing RTO (Return to Origin), and creating scalable technological foundations that allow your brand to grow profitably."
    },
    {
        question: "How does LYP help reduce RTO for D2C brands?",
        answer: "We implement specialized D2C tech solutions like custom RTO protection algorithms, address verification systems, and one-click checkout flows. These optimizations help filter out high-risk orders and ensure better delivery success rates, directly impacting your bottom line."
    },
    {
        question: "Do you work with early-stage startups?",
        answer: "Yes! We work with ambitious D2C brands at various stages. Whether you're just starting out and need a solid foundation or you're scaling rapidly and need to optimize your infrastructure for high traffic and sales volume, we have solutions tailored to your growth phase."
    },
    {
        question: "how is LYP different from a standard web development agency?",
        answer: "Most agencies focus on aesthetics or basic functionality. We focus on Metrics. Every line of code we write and every design decision we make is backed by data to improve your Conversion Rate (CR), Average Order Value (AOV), and Customer Lifetime Value (LTV). We are partners in your growth, not just service providers."
    },
    {
        question: "What platforms do you specialize in?",
        answer: "We specialize in modern, high-performance tech stacks including Shopify, Next.js, and custom headless commerce solutions. We choose the best technology based on your specific scaling needs to ensure speed, security, and flexibility."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="relative py-24 bg-[#0F2241] text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#8b5cf615,_transparent_70%)] pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                        <HelpCircle size={16} />
                        <span>Got Questions?</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Frequently Asked <span className="text-blue-400">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Everything you need to know about how we help D2C brands scale profitably.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeIndex === index
                                    ? "bg-white/10 border-blue-500/50"
                                    : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-semibold transition-colors ${activeIndex === index ? "text-blue-300" : "text-white"}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-blue-400" : ""}`}
                                />
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
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

export default FAQ;
