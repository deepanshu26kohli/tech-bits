"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Innovation",
    desc: "We craft cutting-edge digital solutions that help businesses launch and scale faster.",
  },
  {
    title: "Collaboration",
    desc: "We partner with you at every step, ensuring your vision comes to life with precision.",
  },
  {
    title: "Excellence",
    desc: "We deliver quality-driven products with performance, security, and scalability at the core.",
  },
];

const About = () => {
  return (
    <section className="bg-gray-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
        
          className="text-4xl font-bold mb-4"
        >
          About <span className="text-blue-400">Us</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          At <span className="text-blue-400 font-semibold">LaunchUrPlatform</span>, 
          we are passionate about transforming ideas into powerful digital products. 
          From startups to enterprises, we help businesses leverage modern technology 
          to accelerate growth, improve efficiency, and create impact.
        </p>

        {/* Mission Statement */}
        <div
     
          className="bg-gray-900 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-300">
            To empower businesses by delivering scalable, secure, and user-focused 
            digital platforms that drive long-term success.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
            
              className="bg-gray-900 rounded-2xl shadow-lg p-6"
            >
              <h4 className="text-xl font-bold mb-3 text-blue-400">
                {value.title}
              </h4>
              <p className="text-gray-300 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
