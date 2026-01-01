import { Metadata } from 'next';
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | LaunchUrPlatform",
  description: "Talk to a D2C Growth Specialist. Identify where you're losing revenue and how to fix it.",
  openGraph: {
    title: "Contact Us | LaunchUrPlatform",
    description: "Talk to a D2C Growth Specialist. Identify where you're losing revenue and how to fix it.",
    type: "website",
    url: "https://launchurplatform.com/contact",
    images: [
      {
        url: "/lyp-preview.png",
        width: 1200,
        height: 630,
        alt: "Contact LaunchUrPlatform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | LaunchUrPlatform",
    description: "Talk to a D2C Growth Specialist. Identify where you're losing revenue and how to fix it.",
    images: ["/lyp-preview.png"],
  },
};

const Contact = () => {
  return <ContactContent />;
};

export default Contact;
