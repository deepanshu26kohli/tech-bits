"use client"
import Lightning from "@/components/Lightning";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  const hue = 230 // initial hue

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Generate a random hue between 0 and 360
  //     const randomHue = Math.floor(Math.random() * 360);
  //     setHue(randomHue);
  //   }, 5000); // change every second

  //   // Cleanup interval on unmount
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <main className="relative w-full bg-black">
      {/* Hero Section with Lightning */}
      <div className="relative h-screen">
        <Lightning hue={hue} speed={1.2} intensity={1.4} size={1} />
        <Hero />
      </div>

      {/* Next Sections */}
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  );
}
