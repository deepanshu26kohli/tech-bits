"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import contactusimg from "@/public/contactusimg.png"

// High-quality themed images from Unsplash
const CAROUSEL_IMAGES = [
    {
        src: contactusimg,
        alt: "Business Growth",
        text: "Grow your business with Launch Your Platform"
    },
    {
        src: contactusimg,
        alt: "Get in touch",
        text: "Get in touch with us to know more"
    },
    {
        src: contactusimg,
        alt: "Business Success",
        text: "Take your business to the next level with Launch Your Platform"
    }
];

const TESTIMONIALS = [
    {
        name: "Aditi S.",
        brand: "The Organic Jar",
        text: "Our RTO reduced by 40% in just 2 months. The insights were game-changing!",
        rating: 5
    },
    {
        name: "Rahul Verma",
        brand: "Urban Weaves",
        text: "We were stuck at 50 orders/day. Now we are doing 200+ comfortably.",
        rating: 5
    },
    {
        name: "Sneha Kapoor",
        brand: "Glow & Co.",
        text: "The checkout optimization tips helped us recover so many lost sales.",
        rating: 5
    },
    {
        name: "Vikram Malhotra",
        brand: "FitGear India",
        text: "Best decision for our scaling journey. Highly recommended!",
        rating: 4
    }
];

const ContactContent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        message: "",
        storeUrl: "",
        monthlyOrders: "",
        primaryChallenge: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    // Carousel Autoplay
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters.";
        }

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = "Contact number is required.";
        } else if (!phoneRegex.test(formData.contactNumber.replace(/\s/g, ""))) {
            newErrors.contactNumber = "Enter a valid contact number (10-15 digits).";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters.";
        }

        if (!formData.monthlyOrders.trim()) {
            newErrors.monthlyOrders = "Monthly orders is required.";
        }

        if (!formData.primaryChallenge) {
            newErrors.primaryChallenge = "Please select a primary challenge.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        setSuccess(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccess("✅ Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    contactNumber: "",
                    message: "",
                    storeUrl: "",
                    monthlyOrders: "",
                    primaryChallenge: "",
                });
            } else {
                setSuccess("❌ Failed to send. Try again later.");
            }
        } catch (error) {
            setSuccess("❌ Something went wrong.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative py-24 md:py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden min-h-screen">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#2563eb20,_transparent_60%)] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 md:px-6">

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-24">

                    {/* LEFT COLUMN - Form & Headers */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col"
                    >
                        <div className="mb-8 text-left">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                Talk to a <span className="text-blue-400">D2C Growth Specialist</span>
                            </h2>
                            {/* <p className="text-gray-300 text-lg max-w-xl">
                                Running an ecommerce brand? Let’s identify where you’re losing revenue and how to fix it.
                            </p> */}
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 w-full"
                        >
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    />
                                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Contact Number"
                                        value={formData.contactNumber}
                                        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    />
                                    {errors.contactNumber && <p className="text-red-400 text-xs mt-1">{errors.contactNumber}</p>}
                                </div>
                            </div>

                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Your Email (Optional)"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Store Website URL (Optional)"
                                        value={formData.storeUrl}
                                        onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Monthly Orders"
                                        value={formData.monthlyOrders}
                                        onChange={(e) => setFormData({ ...formData, monthlyOrders: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    />
                                    {errors.monthlyOrders && <p className="text-red-400 text-xs mt-1">{errors.monthlyOrders}</p>}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm mb-2">Primary Challenge</label>
                                <div className="relative">
                                    <select
                                        value={formData.primaryChallenge}
                                        onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition appearance-none [&>option]:bg-gray-900"
                                    >
                                        <option value="" disabled>Select Challenge</option>
                                        <option value="High COD RTO">High COD RTO</option>
                                        <option value="Low conversion rate">Low conversion rate</option>
                                        <option value="Checkout drop-offs">Checkout drop-offs</option>
                                        <option value="Scaling profitably">Scaling profitably</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
                                </div>
                                {errors.primaryChallenge && <p className="text-red-400 text-xs mt-1">{errors.primaryChallenge}</p>}
                            </div>

                            <div className="mb-6">
                                <textarea
                                    placeholder="Any other details? (Optional)"
                                    rows={3}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                ></textarea>
                                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition font-bold text-white shadow-lg disabled:opacity-50 transform hover:scale-[1.01]"
                            >
                                {loading ? "Sending..." : "Review My Store"}
                            </button>

                            {success && <p className="text-center text-sm mt-4 animate-fade-in">{success}</p>}
                        </form>
                    </motion.div>

                    {/* RIGHT COLUMN - Image Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-full min-h-[500px] hidden lg:block rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0"
                            >
                                <div className="absolute inset-0 bg-gray-950">
                                    <Image
                                        src={CAROUSEL_IMAGES[currentImageIndex].src}
                                        alt={CAROUSEL_IMAGES[currentImageIndex].alt}
                                        fill
                                        unoptimized // Using external URLs, next/image optimization might need domain config, unoptimized is safer for quick demo
                                        className="object-cover opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent mix-blend-overlay" />

                                    <div className="absolute inset-0 flex items-end p-10">
                                        <div className="relative z-10">
                                            <h3 className="text-3xl font-bold mb-2 text-white drop-shadow-lg">{CAROUSEL_IMAGES[currentImageIndex].alt}</h3>
                                            <p className="text-gray-200 text-lg drop-shadow-md">{CAROUSEL_IMAGES[currentImageIndex].text}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Indicators */}
                        <div className="absolute bottom-6 right-6 flex space-x-2 z-20">
                            {CAROUSEL_IMAGES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-blue-500' : 'bg-white/40'}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>


                {/* BOTTOM SECTION - What Our Sellers Saying */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full mt-24"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Sellers Are Saying</h2>
                        <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 md:px-12">
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition z-10 hidden md:block"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition z-10 hidden md:block"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>

                        <div className="overflow-hidden relative min-h-[200px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonialIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 text-center"
                                >
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < TESTIMONIALS[currentTestimonialIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-xl md:text-2xl text-gray-200 italic mb-6">
                                        {TESTIMONIALS[currentTestimonialIndex].text}
                                    </p>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">{TESTIMONIALS[currentTestimonialIndex].name}</h4>
                                        <p className="text-blue-400 text-sm">{TESTIMONIALS[currentTestimonialIndex].brand}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Mobile Navigation Dots for Testimonials */}
                        <div className="flex justify-center mt-6 gap-2 md:hidden">
                            {TESTIMONIALS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentTestimonialIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentTestimonialIndex ? 'bg-blue-500 w-4' : 'bg-gray-600'}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ContactContent;


