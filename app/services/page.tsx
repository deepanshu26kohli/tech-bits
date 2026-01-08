"use client";

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Cloud,
  ShieldCheck,
  Smartphone,
  BarChart,
  Users,
  ArrowRight,
  X,
  Megaphone,
  TrendingUp,
  Brain,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Define Service type
type Service = {
  icon: JSX.Element;
  title: string;
  desc: string;
  details: {
    intro: string;
    features: string[];
    technologies: string[];
  };
};

const services: Service[] = [
  {
    icon: <Code2 className="w-10 h-10 text-blue-400" />,
    title: "Web & App Development",
    desc: "We build high-performance web and mobile applications tailored to your business needs using React, Next.js, Laravel, and modern stacks.",
    details: {
      intro:
        "Our Web & App development service is designed to deliver scalable, fast, and user-friendly solutions that align with your business goals.",
      features: [
        "Responsive design for all devices",
        "Scalable architecture for future growth",
        "Performance optimization & SEO-ready",
        "Cross-platform mobile apps",
      ],
      technologies: ["React", "Next.js", "Laravel", "Node.js", "TailwindCSS"],
    },
  },
  {
    icon: <Megaphone className="w-10 h-10 text-blue-400" />,
    title: "Marketing & Branding",
    desc: "Data-driven strategies to amplify your brand presence and drive real engagement.",
    details: {
      intro:
        "We craft compelling marketing narratives and deploy targeted campaigns that resonate with your audience and drive growth.",
      features: [
        "SEO & Content Strategy",
        "Social Media Management",
        "PPC & Performance Marketing",
        "Brand Identity Design",
      ],
      technologies: ["Google Ads", "Meta Ads"],
    },
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
    title: "Sales Maximization",
    desc: "Conversion rate optimization strategies that turn visitors into paying customers.",
    details: {
      intro:
        "Your traffic means nothing if it doesn't convert. We optimize every touchpoint to maximize revenue per user.",
      features: [
        "Conversion Rate Optimization (CRO)",
        "Sales Funnel Architecture",
        "A/B Testing",
        "Customer Retention Strategies",
      ],
      technologies: ["Google Optimize", "ClickFunnels"],
    },
  },
  {
    icon: <Brain className="w-10 h-10 text-blue-400" />,
    title: "RTO Prevention AI",
    desc: "Proprietary AI models that predict and prevent Return-to-Origin losses for e-commerce.",
    details: {
      intro:
        "Stop losing money on returns. Our AI analyzes hundreds of data points to flag risky orders before you ship them.",
      features: [
        "Real-time Risk Scoring",
        "Address Validation",
        "User Behavior Analysis",
        "COD Verification Automation",
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "FastAPI", "Pandas"],
    },
  },
  {
    icon: <Cloud className="w-10 h-10 text-blue-400" />,
    title: "Cloud & DevOps",
    desc: "From AWS to Vercel, we set up scalable, secure, and automated deployments that ensure your product is always available.",
    details: {
      intro:
        "We offer end-to-end cloud and DevOps solutions ensuring scalability, high availability, and faster deployments.",
      features: [
        "CI/CD pipelines setup",
        "Infrastructure as Code (IaC)",
        "Auto-scaling & monitoring",
        "Multi-cloud deployment",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Vercel", "Terraform"],
    },
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
    title: "Security & Compliance",
    desc: "We integrate authentication, role-based access control, and data protection measures to keep your platform safe.",
    details: {
      intro:
        "Security is at the core of every project. We ensure your platform is compliant and resilient to attacks.",
      features: [
        "Role-based access control",
        "Encryption & SSL implementation",
        "GDPR & HIPAA compliance",
        "Regular penetration testing",
      ],
      technologies: ["OAuth2", "JWT", "SSL", "Snyk", "OWASP"],
    },
  },
  {
    icon: <Smartphone className="w-10 h-10 text-blue-400" />,
    title: "UI/UX & Design Systems",
    desc: "Clean, responsive, and user-friendly designs that improve engagement and deliver seamless user experiences.",
    details: {
      intro:
        "We create human-centered designs that elevate user experience while maintaining brand consistency.",
      features: [
        "Wireframes & prototypes",
        "Interactive design systems",
        "Responsive mobile-first approach",
        "Accessibility standards (WCAG)",
      ],
      technologies: ["Figma", "Adobe XD", "TailwindCSS", "Framer Motion"],
    },
  },
  {
    icon: <BarChart className="w-10 h-10 text-blue-400" />,
    title: "Data & Analytics",
    desc: "We implement dashboards, BI solutions, and analytics pipelines so you can make data-driven decisions with confidence.",
    details: {
      intro:
        "We help businesses unlock insights through powerful analytics and visualizations.",
      features: [
        "Custom dashboards",
        "ETL pipelines",
        "Real-time analytics",
        "Business intelligence solutions",
      ],
      technologies: ["Tableau", "Power BI", "Snowflake", "Chart.js", "Supabase"],
    },
  },
  {
    icon: <Users className="w-10 h-10 text-blue-400" />,
    title: "Consulting & Strategy",
    desc: "We partner with you to define a clear digital roadmap, reduce technical risks, and launch faster with expert guidance.",
    details: {
      intro:
        "Our consulting services ensure you make the right technology choices and scale efficiently.",
      features: [
        "Digital transformation strategies",
        "Product roadmapping",
        "Cost optimization",
        "Agile coaching & mentoring",
      ],
      technologies: ["Agile", "Scrum", "Lean", "Jira", "Notion"],
    },
  },

];

const Services = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const router = useRouter();

  return (
    <section className="relative bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white py-24 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our <span className="text-blue-400">Services</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          At <span className="text-blue-400 font-semibold">LaunchUrPlatform</span>,
          we provide end-to-end digital services to help businesses transform, scale, and thrive in today’s tech-driven world.
        </motion.p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl p-6 text-left hover:border-blue-400/40 transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveService(service)}
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-blue-400">
                {service.title}
              </h4>
              <p className="text-gray-200 text-sm leading-relaxed">{service.desc}</p>
              <div className="mt-4 flex items-center text-blue-400 text-sm font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            className="fixed inset-0 bg-[#0F2241] /70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl max-w-2xl w-full p-8 shadow-2xl border border-white/10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                type="button"
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setActiveService(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6">{activeService.icon}</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {activeService.title}
              </h3>
              <p className="text-gray-300 mb-6">{activeService.details.intro}</p>

              <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-gray-300 mb-6">
                {activeService.details.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeService.details.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="mt-4 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
                onClick={() => router.push("/contact")}
              >
                Get Started
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
