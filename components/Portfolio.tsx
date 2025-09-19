"use client";

const projects = [
  {
    title: "Meerani",
    desc: "An ecommerce platform built with Odoo for a seamless online shopping experience.",
    link: "https://clothingbrand1.odoo.com/",
  },
  {
    title: "Abstract Galiyara",
    desc: "Built an ecommerce platform for a dynamic and user-friendly online store.",
    link: "https://www.abstractgaliyara.com/",
  },
  {
    title: "Food Delivery App",
    desc: "Built a food delivery app for a convenient and hassle-free food delivery experience.",
    link: "https://www.launchurplatform.com/",
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
              hover:scale-105 hover:shadow-blue-500/30"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                {project.desc}
              </p>

              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-5 py-2 rounded-lg bg-blue-500 text-white font-medium 
                hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
              >
                View Project
              </a>

              {/* Subtle gradient border glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/40 transition-all pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
