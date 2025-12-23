

import LightRaysWrapper from "@/components/LightRaysWrapper";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientJourney from "@/components/ClientJourney";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";



import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "LaunchUrPlatform - D2C Growth Infrastructure",
  description: "We help D2C brands scale profitably. Fix low conversions, RTO, and weak infrastructure with our proven profit-focused systems.",
  openGraph: {
    title: "LaunchUrPlatform - D2C Growth Infrastructure",
    description: "We help D2C brands scale profitably. Fix low conversions, RTO, and weak infrastructure with our proven profit-focused systems.",
    type: "website",
    url: "https://launchurplatform.com", // Keeping it generic or as placeholder if actual domain isn't known, but usually good to put something
    images: [
      {
        url: "/default-og-image.jpg", // Using the default image from user snippet
        width: 1200,
        height: 630,
        alt: "LaunchUrPlatform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchUrPlatform - D2C Growth Infrastructure",
    description: "We help D2C brands scale profitably. Fix low conversions, RTO, and weak infrastructure with our proven profit-focused systems.",
    images: ["/default-og-image.jpg"],
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
    <main className="relative w-full bg-black">

      {/* Hero Section with Lightning */}
      {/* <div className="relative  h-auto  bg-black "> */}


      {/* </div> */}
      <Hero />
      {/* Next Sections */}
      <Services />
      <WhyChooseUs />
      <ClientJourney />
      <Testimonials />
      <CTA />
    </main>
  );
}
