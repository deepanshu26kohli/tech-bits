"use client";

import ClientJourney from "@/components/ClientJourney";

const values = [
  {
    title: "Innovation",
    desc: "We craft cutting-edge digital solutions that help businesses launch, adapt, and scale faster in the ever-evolving digital landscape.",
  },
  {
    title: "Collaboration",
    desc: "We work hand-in-hand with our clients, ensuring transparency, alignment, and trust at every stage of the journey.",
  },
  {
    title: "Excellence",
    desc: "We push beyond the ordinary, delivering quality-driven solutions with performance, security, and scalability at the core.",
  },
  {
    title: "Customer-Centric",
    desc: "Our focus is on solving real problems and creating value for your users to ensure lasting success for your business.",
  },
  {
    title: "Integrity",
    desc: "We build long-term relationships based on honesty, responsibility, and delivering on our promises.",
  },
  {
    title: "Future-Ready",
    desc: "We help you adopt next-gen technologies to stay competitive and prepare for tomorrow's challenges today.",
  },
];

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white py-24 overflow-hidden">
      {/* Background subtle glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header with Image + Text */}
        <div className=" gap-12 items-center mb-20">
          {/* Text */}
          <div>
            <h2 className="text-4xl font-extrabold mb-4">
              About <span className="text-blue-400">Us</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At <span className="text-blue-400 font-semibold">LaunchUrPlatform</span>,
              we are a team of passionate technologists, designers, and innovators dedicated
              to transforming ambitious ideas into powerful digital solutions. With years of
              expertise across web development, cloud infrastructure, AI, and cybersecurity,
              we empower startups and enterprises alike to leverage cutting-edge technology,
              accelerate growth, and create lasting impact in the digital landscape.
            </p>
          </div>

          {/* Image */}


        </div>

        {/* Mission Statement */}
        <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl p-10 max-w-4xl mx-auto mb-20 text-center">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Our Mission</h3>
          <p className="text-gray-200 text-lg leading-relaxed">
            To empower businesses worldwide by delivering <span className="font-semibold text-white">innovative</span>,
            <span className="font-semibold text-white"> scalable</span>, and
            <span className="font-semibold text-white"> secure</span> digital platforms that drive
            real business outcomes. We go beyond code — we build partnerships, solve complex challenges,
            and equip our clients with technology that not only meets {"today's"} demands but anticipates
            {"tomorrow's"} opportunities.
          </p>
        </div>

        {/* Client Journey Section */}
        <div className="mb-24">
          <ClientJourney />
        </div>

        {/* Core Values */}
        <h3 className="text-2xl font-bold mb-10 text-blue-400 text-center">
          Our Core Values
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-lg p-8 text-left hover:border-blue-400/40 transition-colors"
            >
              <h4 className="text-xl font-bold mb-3 text-blue-400">
                {value.title}
              </h4>
              <p className="text-gray-200 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
