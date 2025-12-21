"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
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
    <section className="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#2563eb20,_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Talk to a <span className="text-blue-400">D2C Growth Specialist</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Running an ecommerce brand? Let’s identify where you’re losing revenue and how to fix it.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto text-left"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={(e) =>
                  setFormData({ ...formData, contactNumber: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              {errors.contactNumber && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.contactNumber}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email (Optional)"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="text"
                placeholder="Store Website URL (Optional)"
                value={formData.storeUrl}
                onChange={(e) =>
                  setFormData({ ...formData, storeUrl: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Monthly Orders"
                value={formData.monthlyOrders}
                onChange={(e) =>
                  setFormData({ ...formData, monthlyOrders: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              {errors.monthlyOrders && (
                <p className="text-red-400 text-sm mt-1">{errors.monthlyOrders}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">What are you struggling with most?</label>
            <select
              value={formData.primaryChallenge}
              onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition [&>option]:text-black"
            >
              <option value="" disabled className="text-gray-500">Select Primary Challenge</option>
              <option value="High COD RTO">High COD RTO</option>
              <option value="Low conversion rate">Low conversion rate</option>
              <option value="Checkout drop-offs">Checkout drop-offs</option>
              <option value="Scaling profitably">Scaling profitably</option>
            </select>
            {errors.primaryChallenge && (
              <p className="text-red-400 text-sm mt-1">{errors.primaryChallenge}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Any other details? (Optional)"
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 mb-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mb-4">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:opacity-90 transition font-semibold shadow-lg disabled:opacity-50"
          >
            {loading ? "Sending..." : "Review My Store"}
          </button>

          {success && (
            <p className="text-center text-sm mt-4">{success}</p>
          )}
        </motion.form>

        {/* WhatsApp Info */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex flex-col items-center"
        >
          <p className="text-gray-300 mb-4 text-lg">
            Prefer WhatsApp? Talk to a D2C expert directly
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#1EBE57] transition shadow-lg"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>
          <p className="text-gray-400 text-sm mt-3">
            For Indian D2C founders, WhatsApp converts 2–3× better.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Contact;
