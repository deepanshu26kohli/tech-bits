"use client"
import LightRays from "@/components/LightRays";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Header from "@/components/Header";

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
      <div className="relative abc h-auto">
        <div className="absolute top-0 left-0 w-full h-full">


          {/* <Lightning hue={hue} speed={1.2} intensity={1.4} size={1} /> */}
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1}
            lightSpread={2}
            rayLength={3}
            followMouse={true}
            mouseInfluence={1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays absolute"
          />
        </div>
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
