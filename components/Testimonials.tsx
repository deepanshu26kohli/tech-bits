"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Akash Sharma",
    role: "Owner, AKS Fitness",
    feedback:
      "The website transformed our fitness center! Member signups increased by 40% and our online booking system streamlined operations beautifully. The modern design perfectly captures our brand energy!",
    img: "https://placehold.co/600x400?text=Client",
    link: "https://aksfitness.vercel.app/",
  },
  {
    name: "Abstract Galiyara Team",
    role: "E-Commerce Manager",
    feedback:
      "Our sales doubled within 3 months of launch! The intuitive product filtering and seamless checkout experience delighted our customers. Truly exceptional work that exceeded all expectations!",
    img: "https://placehold.co/600x400?text=Client",
    link: "https://www.abstractgaliyara.com/",
  },
  {
    name: "Rohit Patel",
    role: "Founder, Arbuda Mobile",
    feedback:
      "The e-commerce platform revolutionized our business! WhatsApp integration alone boosted customer engagement by 60%. Our conversion rates soared and the admin dashboard makes inventory management effortless!",
    img: "https://placehold.co/600x400?text=Client",
    link: "https://www.arbudamobile.com/",
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollMap = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.85; // Scroll by one card width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          What Our <span className="text-blue-400">Clients Say</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Do not just take our word for it — hear from the businesses we have
          helped transform with innovative digital solutions and measurable
          results.
        </p>

        <div className="relative">
          {/* Mobile Arrows */}
          <button
            onClick={() => scrollMap("left")}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 p-2 bg-blue-500/20 hover:bg-blue-500/40 border border-blue-500/50 rounded-full text-white transition-all backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scrollMap("right")}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 p-2 bg-blue-500/20 hover:bg-blue-500/40 border border-blue-500/50 rounded-full text-white transition-all backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide px-4 -mx-4 md:mx-0 md:px-0 scroll-smooth"
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-[85vw] md:min-w-0 snap-center p-6 rounded-2xl shadow-lg border border-white/10 
                             bg-white/10 backdrop-blur-lg 
                             hover:bg-blue-500/10 hover:border-blue-400/20 
                             transition-colors duration-300 cursor-pointer flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-lg font-bold text-white shadow-md flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-blue-300">
                  {t.name}
                </h3>
                {/* <p className="text-sm text-gray-400">{t.role}</p> */}
                <p className="mt-3 text-gray-200 text-sm italic">
                  {'"' + t.feedback + '"'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10 blur-3xl" />
    </section>
  );
};

export default Testimonials;
