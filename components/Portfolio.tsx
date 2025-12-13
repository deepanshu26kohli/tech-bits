"use client";

const projects = [
  {
    title: "Abstract Galiyara",
    desc: "A sophisticated e-commerce platform featuring advanced product filtering, seamless checkout, and intuitive admin dashboard. Built with modern tech stack for optimal performance and user experience.",
    link: "https://www.abstractgaliyara.com/",
  },
  {
    title: "AKS Fitness - Premium Fitness Hub",
    desc: "Modern fitness website with dynamic membership management, workout tracking, and trainer profiles. Features responsive design with smooth animations and engaging user interface built using React and Next.js.",
    link: "https://aksfitness.vercel.app/",
  },
  {
    title: "Arbuda Mobile - E-Commerce Excellence",
    desc: "Full-featured e-commerce platform for mobile covers and accessories with WhatsApp integration, product catalog management, and streamlined shopping experience. Built with React and Ant Design for a premium user journey.",
    link: "https://www.arbudamobile.com/",
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
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
          Explore our portfolio of cutting-edge digital solutions — from dynamic e-commerce platforms to innovative fitness hubs. Each project showcases our commitment to excellence, creativity, and delivering measurable results for our clients.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl shadow-xl border border-white/20 
  bg-white/10 backdrop-blur-xl transition-transform 
  hover:scale-105 hover:shadow-blue-500/30
  flex flex-col h-[400px]"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                {project.desc}
              </p>

              {/* View Project Button - Fixed at bottom */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-5 py-2 rounded-lg bg-blue-500 text-white font-medium 
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
