"use client";

const projects = [
  {
    title: "Econix Dashboard",
    desc: "Built a scalable finance dashboard with real-time analytics and Snowflake integration.",
  },
  {
    title: "Accountizer",
    desc: "An accounting SaaS platform built with React & Laravel for managing finances efficiently.",
  },
  {
    title: "Hydrogen Shopify App",
    desc: "Custom Hydrogen storefront with seamless authentication and optimized APIs.",
  },
  
];

const Portfolio = () => {
  return (
    <section className="bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white py-24 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.2),transparent_50%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-6">
          Our <span className="text-blue-400">Work</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
          Take a look at some of the projects we have delivered for our clients.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl shadow-xl border border-white/20 
              bg-white/10 backdrop-blur-xl transition-transform 
              hover:scale-105 hover:shadow-blue-500/30 cursor-pointer"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                {project.desc}
              </p>

              {/* Subtle gradient border glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/40 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
