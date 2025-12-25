"use client";

import { User, Megaphone, TrendingUp, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Account Setup",
        desc: "Website, ad account, ad campaigns, payment gateway, & pricing.",
        icon: <User className="w-6 h-6 text-blue-400" />,
        color: "blue"
    },
    {
        title: "Optimized Marketing",
        desc: "Optimise marketing campaigns to maximise ROI & reduce RTO.",
        icon: <Megaphone className="w-6 h-6 text-pink-500" />,
        color: "pink"
    },
    {
        title: "Achieve Profitability",
        desc: "More than 40% of Launchurplatform brands reach profitability after an average spend of ₹42k.",
        icon: <IndianRupee className="w-6 h-6 text-green-400" />,
        color: "green"
    },
    {
        title: "Scale to Pan Indian",
        desc: "Grow to ₹50L+ yearly revenue as a sustainable brand.",
        icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
        color: "purple"
    }
];

const RoadToProfitability = () => {
    return (
        <section className="py-20 bg-[#0F2241] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b82f610,_transparent_70%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white mb-4"
                    >
                        Your Road to <span className="text-green-400">Profitability</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A proven path designed to take you from launch to scalable success.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-gray-700/50 -z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center relative group"
                            >
                                {/* Icon Circle */}
                                <div className={`w-20 h-20 rounded-full bg-gray-900 border-2 border-${step.color}-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:border-${step.color}-400 group-hover:scale-110 transition-all duration-300 relative z-20`}>
                                    {step.icon}
                                    {/* Pulse Effect */}
                                    <div className={`absolute inset-0 rounded-full bg-${step.color}-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadToProfitability;
