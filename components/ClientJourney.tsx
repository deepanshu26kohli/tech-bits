"use client";

import React from "react";

const ClientJourney = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-black text-white">
            {/* Background glow effect matches Portfolio/About styles */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_60%)]"></div>

            <div className="relative max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Your Journey with <span className="text-blue-400">Us</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From a social media page to a scalable, independent e-commerce brand. Here is how we make it happen.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto px-4">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500/50 hidden md:block transform -translate-x-1/2"></div>
                    {/* Mobile Vertical Line */}
                    <div className="absolute left-8 top-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500/50 md:hidden"></div>

                    <div className="space-y-12">
                        {/* Step 1: The Problem */}
                        <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                            {/* Node */}
                            <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-gray-950 border border-blue-500/30 rounded-full flex items-center justify-center z-10 group-hover:border-blue-400 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] md:transform md:-translate-x-1/2">
                                <span className="text-blue-400 text-xl font-bold">1</span>
                            </div>

                            {/* Content Left (Empty for alternating on desktop) */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Content Right */}
                            <div className="pl-24 md:pl-0 w-full md:w-5/12 text-left">
                                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-blue-400/30 transition-all relative">
                                    {/* Mobile Arrow/Connector */}
                                    <div className="absolute top-8 -left-4 w-4 h-0.5 bg-blue-500/30 md:hidden"></div>
                                    <h4 className="text-xl font-bold text-white mb-3">Beyond Social Media</h4>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        You{"'"}ve successfully built a following on Instagram, but relying solely on a social platform limits your growth and control. We help you take the next big step.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: The Solution */}
                        <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                            {/* Node */}
                            <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-gray-950 border border-pink-500/30 rounded-full flex items-center justify-center z-10 group-hover:border-pink-400 transition-colors shadow-[0_0_15px_rgba(236,72,153,0.3)] md:transform md:-translate-x-1/2">
                                <span className="text-pink-400 text-xl font-bold">2</span>
                            </div>

                            {/* Content Left (Alternating) */}
                            <div className="pl-24 md:pl-0 w-full md:w-5/12 text-left md:text-right md:order-1">
                                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-pink-500/30 transition-all relative">
                                    {/* Mobile Arrow/Connector */}
                                    <div className="absolute top-8 -left-4 w-4 h-0.5 bg-pink-500/30 md:hidden"></div>
                                    <h4 className="text-xl font-bold text-white mb-3">Custom E-Commerce Hub</h4>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        We custom-develop a <span className="text-pink-400">robust, secure website</span> that fully integrates with your brand. This gives you a professional, centralized sales hub, eliminating platform reliance.
                                    </p>
                                </div>
                            </div>

                            {/* Spacer Right */}
                            <div className="hidden md:block w-5/12 md:order-2"></div>
                        </div>

                        {/* Step 3: Marketing & RTO */}
                        <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                            {/* Node */}
                            <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-gray-950 border border-purple-500/30 rounded-full flex items-center justify-center z-10 group-hover:border-purple-400 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)] md:transform md:-translate-x-1/2">
                                <span className="text-purple-400 text-xl font-bold">3</span>
                            </div>

                            {/* Content Left (Empty) */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Content Right */}
                            <div className="pl-24 md:pl-0 w-full md:w-5/12 text-left">
                                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-purple-400/30 transition-all relative">
                                    <div className="absolute top-8 -left-4 w-4 h-0.5 bg-purple-500/30 md:hidden"></div>
                                    <h4 className="text-xl font-bold text-white mb-3">Growth & Profitability</h4>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        Our marketing team deploys strategies to maximize reach, while our proprietary <span className="text-purple-400 font-semibold">RTO prediction system</span> dramatically boosts profitability by preventing return losses.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4: The Team */}
                        <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                            {/* Node */}
                            <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-gray-950 border border-green-500/30 rounded-full flex items-center justify-center z-10 group-hover:border-green-400 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.3)] md:transform md:-translate-x-1/2">
                                <span className="text-green-400 text-xl font-bold">4</span>
                            </div>

                            {/* Content Left (Alternating) */}
                            <div className="pl-24 md:pl-0 w-full md:w-5/12 text-left md:text-right md:order-1">
                                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-green-400/30 transition-all relative">
                                    <div className="absolute top-8 -left-4 w-4 h-0.5 bg-green-500/30 md:hidden"></div>
                                    <h4 className="text-xl font-bold text-white mb-3">20+ Experts Strong</h4>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        We are not just freelancers. We are a dedicated <span className="text-green-400">Web Development & Marketing Company</span> with over 20 members working around the clock to scale your financial future.
                                    </p>
                                </div>
                            </div>

                            {/* Spacer Right */}
                            <div className="hidden md:block w-5/12 md:order-2"></div>
                        </div>

                        {/* Step 5: Start Your Journey */}
                        <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                            {/* Node */}
                            <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-gray-950 border border-blue-500/30 rounded-full flex items-center justify-center z-10 group-hover:border-blue-400 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] md:transform md:-translate-x-1/2">
                                <span className="text-blue-400 text-xl font-bold">5</span>
                            </div>

                            {/* Content Left (Empty for alternating on desktop) */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Content Right */}
                            <div className="pl-24 md:pl-0 w-full md:w-5/12 text-left">
                                <a href="/contact" className="block group cursor-pointer">
                                    <div className="bg-blue-600/10 border border-blue-500/30 p-8 rounded-2xl hover:bg-blue-600/20 hover:border-blue-400 transition-all relative group-hover:scale-[1.02]">
                                        <div className="absolute top-8 -left-4 w-4 h-0.5 bg-blue-500/30 md:hidden"></div>
                                        <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                            Start Your Journey <span className="text-blue-400">→</span>
                                        </h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">
                                            Ready to transform your business? connect with us today and let's build something extraordinary together.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientJourney;
