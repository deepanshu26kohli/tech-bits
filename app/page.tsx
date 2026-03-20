

import LightRaysWrapper from "@/components/LightRaysWrapper";
import Hero from "@/components/Hero";
import SolutionsTab from "@/components/SolutionsTab";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientJourney from "@/components/ClientJourney";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";



import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Launch Your Platform - Build, Market & Scale Your D2C Business",
  description: "We help D2C brands scale profitably. Fix low conversions, RTO, and weak infrastructure with our proven profit-focused systems.",
  openGraph: {
    title: "Launch Your Platform - Build, Market & Scale Your D2C Business",
    description: "We help D2C brands scale profitably. Fix low conversions, RTO, and weak infrastructure with our proven profit-focused systems.",
    type: "website",
    url: "https://launchurplatform.com", // Keeping it generic or as placeholder if actual domain isn't known, but usually good to put something
    images: [
      {
        url: "/lyp-preview.png",
        width: 1200,
        height: 630,
        alt: "LaunchUrPlatform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch Your Platform - Build, Market & Scale Your D2C Business",
    description: "We help D2C brands scale profitably. Fix low conversions, RTO, and weak infrastructure with our proven profit-focused systems.",
    images: ["/lyp-preview.png"],
  },
};

export default function Home() {


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
    <main className="relative w-full bg-gradient-to-br from-gray-950 via-black to-gray-950 ">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_60%)]"></div>
      {/* Hero Section with Lightning */}
      {/* <div className="relative  h-auto  bg-[#0F2241]  "> */}


      {/* </div> */}
      <Hero />
      <SolutionsTab />
      {/* Next Sections */}
      <Services />
      <TechStack />
      <WhyChooseUs />
      <ClientJourney />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
