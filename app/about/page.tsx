"use client";

import ClientJourney from "@/components/ClientJourney";
import { TrendingUp, Truck, Server, PackageCheck, Banknote, Undo2, Layers, CheckCircle } from "lucide-react";
import Link from "next/link";

const differentiators = [
  {
    title: "High-conversion ecommerce platforms",
    desc: "We build storefronts designed for speed, user experience, and maximum conversion rates.",
    icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "RTO & logistics intelligence",
    desc: "Our solutions integrate deep data insights to minimize returns and optimize last-mile delivery.",
    icon: <Truck className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Scalable backend infrastructure",
    desc: "Robust systems capable of handling high traffic and complex operations without breaking a sweat.",
    icon: <Server className="w-8 h-8 text-blue-400" />,
  },
];

const missionOutcomes = [
  { title: "More delivered orders", icon: <PackageCheck className="w-5 h-5 text-green-400" /> },
  { title: "Fewer returns", icon: <Undo2 className="w-5 h-5 text-red-400" /> },
  { title: "Better margins", icon: <Banknote className="w-5 h-5 text-yellow-400" /> },
  { title: "Long-term scalability", icon: <Layers className="w-5 h-5 text-purple-400" /> },
];

const partners = [
  "Active ecommerce brands",
  "COD-heavy D2C businesses",
  "Founders serious about fixing fundamentals",
];

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white py-24 overflow-hidden">
      {/* Background subtle glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            About <span className="text-blue-400">Us</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
            At <span className="text-blue-400 font-semibold">LaunchUrPlatform</span>, we work exclusively with D2C and ecommerce brands.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            We help online businesses fix the real problems that block growth—low conversions, high COD returns, delivery failures, and weak infrastructure. Instead of just building websites, we design profit-focused systems that connect storefront, checkout, and last-mile delivery into one scalable growth engine.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            We’re engineers at heart, but we think like operators. Every solution we build is driven by real ecommerce data, not assumptions.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">What Makes Us <span className="text-blue-400">Different</span></h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Most agencies stop at design and development. We go deeper—into funnel performance, shipment behavior, and revenue leakage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="mb-6 bg-blue-500/10 p-4 rounded-xl w-fit group-hover:bg-blue-500/20 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-medium text-blue-200">
              This allows D2C brands to grow with clarity, control, and confidence.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-10 md:p-14 max-w-5xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-400 mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To help D2C and ecommerce brands scale profitably by building systems that reduce losses, improve delivery success, and turn traffic into reliable revenue.
              </p>
              <div className="space-y-4">
                {missionOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-white/5 border border-white/10">
                      {outcome.icon}
                    </div>
                    <span className="text-gray-200 font-medium">{outcome.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full flex flex-col justify-center items-center text-center p-8 bg-blue-600/10 rounded-xl border border-blue-500/20">
              <h4 className="text-2xl font-bold text-white mb-2">No buzzwords.</h4>
              <h4 className="text-2xl font-bold text-white mb-2">No templates.</h4>
              <h4 className="text-2xl font-bold text-blue-400">Just systems that work.</h4>
            </div>
          </div>
        </div>

        {/* Client Journey (Preserved) */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12">Our <span className="text-blue-400">Process</span></h3>
          <ClientJourney />
        </div>

        {/* Who We Work With */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <h3 className="text-3xl font-bold mb-10">Who We <span className="text-blue-400">Work With</span></h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all">
                <CheckCircle className="w-8 h-8 text-blue-400 mb-4" />
                <span className="text-lg font-medium text-gray-200">{partner}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-lg italic">
            "If you’re running real orders and want to understand what’s holding your store back, we’re built for you."
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center pb-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25"
          >
            👉 Check My Store Health
          </Link>
          <p className="text-blue-400 mt-4 font-medium uppercase tracking-wide text-sm">
            Free for active ecommerce brands
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
