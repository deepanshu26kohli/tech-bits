"use client";

const testimonials = [
  {
    name: "Guneesh Kaur",
    role: "CEO, Meerani",
    feedback:
      "The team built an amazing ecommerce platform that exceeded our expectations. Highly satisfied!",
    img: "https://placehold.co/600x400?text=Client",
    link: "https://clothingbrand1.odoo.com/",
  },
  {
    name: "Abstract Galiyara",
    role: "CTO, Abstract Galiyara",
    feedback:
      "Their expertise and dedication to our project were outstanding. We couldn't have done it without them!",
    img: "https://placehold.co/600x400?text=Client",
    link: "https://www.abstractgaliyara.com/",
  },
  {
    name: "James Parker",
    role: "Founder, FinTechPro",
    feedback:
      "Our SaaS platform wouldn’t have been possible without their expert developers. Top-notch service!",
    img: "https://placehold.co/600x400?text=Client",
    link: "https://www.launchurplatform.com/",
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          What Our <span className="text-blue-400">Clients Say</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          We value our clients feedback and strive to deliver the best.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <a
              key={index}
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className="p-6 rounded-2xl shadow-lg border border-white/10 
                           bg-white/10 backdrop-blur-lg 
                           group-hover:bg-blue-500/10 group-hover:border-blue-400/20 
                           transition-colors duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-lg font-bold text-white shadow-md">
                  {t.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-blue-300">{t.name}</h3>
                <p className="text-sm text-gray-400">{t.role}</p>
                <p className="mt-3 text-gray-200 text-sm italic">“{t.feedback}”</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10 blur-3xl" />
    </section>
  );
};

export default Testimonials;
