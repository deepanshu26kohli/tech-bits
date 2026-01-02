"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Globe,
    TrendingUp,
    ChevronDown,
} from "lucide-react";
import Image from "next/image";
import websiteTab from "@/public/website_tab.avif"
import marketingTab from "@/public/marketing_tab.avif"
const tabs = [
    {
        id: "website",
        label: "Website",
        icon: <Globe className="w-5 h-5" />,
        title: "Website - Power Up Your Storefront",
        description: "Build a high-converting storefront that turns visitors into loyal customers.",
        features: [
            "Endless Customization",
            "Built for Speed & Growth",
            "Mobile-Ready",
            "Flexible Checkout",
            "Financial Tools",
            "Customer Support Automation",
            "Seamless Catalogue Management",
        ],
        image: websiteTab,
        color: "from-white to-white",
    },
    {
        id: "marketing",
        label: "Marketing",
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Marketing - Drive Traffic & Sales",
        description: "Scale your reach with multi-channel marketing automation and deep analytics.",
        features: [
            "Meta & Google Ads Integration",
            "SEO Optimization",
            "Email & SMS Marketing",
            "Influencer Tracking",
            "Retention Analytics",
            "Multi-Channel Campaigns",
            "Pixel Setup",
        ],
        image: marketingTab,
        color: "from-white to-white",
    },
];

const SolutionsTab = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className="p-6 max-w-7xl mx-auto relative z-10 border border-white/25 rounded-2xl ">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 ">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab)}
                        className={`
              flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 font-medium
              ${activeTab.id === tab.id
                                ? "bg-white text-black shadow-lg shadow-white/10"
                                : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 hover:text-white"}
            `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
                >
                    {/* Left Side: Mockup/Image */}
                    <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${activeTab.color} p-1 md:p-12 aspect-[4/3] lg:aspect-auto`}>
                        <div className="absolute inset-0 opacity-20 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-white/5" style={{ borderRadius: '50%', transform: 'scale(1.5)', translate: '-25% -25%' }}></div>
                        </div>

                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                            <Image
                                src={activeTab.image}
                                alt={activeTab.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>

                        {/* Optional Floating Card Mockup Look */}
                        <motion.div
                            initial={{ x: 20, y: 20, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="absolute bottom-4 right-4 md:bottom-10 md:right-10 w-32 md:w-48 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-2xl hidden md:block"
                        >
                            <div className="h-2 w-12 bg-white/30 rounded-full mb-3"></div>
                            <div className="h-2 w-full bg-white/20 rounded-full mb-2"></div>
                            <div className="h-2 w-2/3 bg-white/20 rounded-full"></div>
                        </motion.div>
                    </div>

                    {/* Right Side: Features */}
                    <div className="bg-[#151b2b] rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-white/5">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                                {activeTab.icon}
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                {activeTab.title}
                            </h3>

                            <p className="text-gray-400 text-lg mb-8">
                                {activeTab.description}
                            </p>

                            <ul className="space-y-4 mb-10">
                                {activeTab.features.map((feature, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * idx }}
                                        className="flex items-center gap-3 text-gray-300"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default SolutionsTab;
