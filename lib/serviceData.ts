
import {
    Code2,
    Cloud,
    ShieldCheck,
    Smartphone,
    BarChart,
    Users,
    Megaphone,
    TrendingUp,
    Brain,
} from "lucide-react";

export const servicesData = [
    {
        slug: "web-app-development",
        title: "Web & App Development",
        iconName: "Code2",
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
            technologies: [
                {
                    slug: "react",
                    title: "React",
                    description: "A JavaScript library for building user interfaces. React allows us to create reusable UI components and manage complex state efficiently.",
                    features: ["Component-Based", "Virtual DOM", "One-Way Data Binding", "Rich Ecosystem"]
                },
                {
                    slug: "nextjs",
                    title: "Next.js",
                    description: "The React Framework for the Web. Next.js enables us to build full-stack web applications with features like server-side rendering and static site generation.",
                    features: ["Server-Side Rendering", "Static Site Generation", "API Routes", "Built-in CSS Support"]
                },
                {
                    slug: "laravel",
                    title: "Laravel",
                    description: "A PHP web application framework with expressive, elegant syntax. Laravel takes the pain out of development by easing common tasks used in many web projects.",
                    features: ["MVC Architecture", "Eloquent ORM", "Blade Templating", "Task Scheduling"]
                },
                {
                    slug: "nodejs",
                    title: "Node.js",
                    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js allows us to build scalable network applications.",
                    features: ["Event-Driven", "Non-Blocking I/O", "NPM Ecosystem", "Cross-Platform"]
                },
                {
                    slug: "tailwindcss",
                    title: "TailwindCSS",
                    description: "A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
                    features: ["Utility-First", "Responsive Design", "Customizable", "Dark Mode Support"]
                },
                {
                    slug: "shopify",
                    title: "Shopify",
                    description: "A leading e-commerce platform that allows you to set up an online store and sell your products. We build custom themes and apps to extend Shopify's functionality.",
                    features: ["E-commerce Solutions", "Custom Themes", "App Development", "Secure Payments"]
                }
            ],
        },
    },
    {
        slug: "marketing-branding",
        title: "Marketing & Branding",
        iconName: "Megaphone",
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
            technologies: [
                {
                    slug: "google-ads",
                    title: "Google Ads",
                    description: "Google's online advertising program. We use Google Ads to reach potential customers precisely when they're searching for what you offer.",
                    features: ["Targeted Advertising", "Measurable Results", "Cost Control", "Campaign Optimization"]
                },
                {
                    slug: "meta-ads",
                    title: "Meta Ads",
                    description: "Advertising on Facebook and Instagram. We leverage Meta's powerful targeting options to connect with your ideal audience.",
                    features: ["Detailed Targeting", "Visual Formats", "Retargeting", "Analytics & Insights"]
                }
            ],
        },
    },
    {
        slug: "sales-maximization",
        title: "Sales Maximization",
        iconName: "TrendingUp",
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
            technologies: [
                {
                    slug: "google-optimize",
                    title: "Google Optimize",
                    description: "A tool for running A/B tests and personalization campaigns. We use it to test different variations of your site to see what performs best.",
                    features: ["A/B Testing", "Multivariate Testing", "Personalization", "Integration with Analytics"]
                },
                {
                    slug: "clickfunnels",
                    title: "ClickFunnels",
                    description: "A sales funnel builder. We use ClickFunnels to create high-converting sales funnels that guide visitors towards making a purchase.",
                    features: ["Drag-and-Drop Editor", "Email Marketing Automation", "A/B Split Testing", "Payment Gateway Integration"]
                }
            ],
        },
    },
    {
        slug: "rto-prevention-ai",
        title: "RTO Prevention AI",
        iconName: "Brain",
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
            technologies: [
                {
                    slug: "python",
                    title: "Python",
                    description: "A powerful programming language used for AI and data analysis. We use Python to build robust fraud detection models.",
                    features: ["Simple Syntax", "Extensive Libraries", "Community Support", "Versatility"]
                },
                {
                    slug: "tensorflow",
                    title: "TensorFlow",
                    description: "An end-to-end open source platform for machine learning. We use TensorFlow to build and train our AI models.",
                    features: ["Flexible Architecture", "Scalable", "Robust Ecosystem", "Production Ready"]
                },
                {
                    slug: "scikit-learn",
                    title: "Scikit-learn",
                    description: "A machine learning library for Python. We use it for data mining and data analysis tasks.",
                    features: ["Classification", "Regression", "Clustering", "Dimensionality Reduction"]
                }
            ],
        },
    },
    {
        slug: "cloud-devops",
        title: "Cloud & DevOps",
        iconName: "Cloud",
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
            technologies: [
                {
                    slug: "aws",
                    title: "AWS",
                    description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. We use AWS to host and scale applications.",
                    features: ["Global Infrastructure", "Scalability", "Security", "Cost-Effective"]
                },
                {
                    slug: "docker",
                    title: "Docker",
                    description: "A platform for developing, shipping, and running applications in containers. Docker ensures consistency across different environments.",
                    features: ["Containerization", "Portability", "Efficiency", "Microservices Support"]
                },
                {
                    slug: "kubernetes",
                    title: "Kubernetes",
                    description: "An open-source system for automating deployment, scaling, and management of containerized applications.",
                    features: ["Automated Rollouts", "Service Discovery", "Load Balancing", "Self-Healing"]
                }
            ],
        },
    },
    {
        slug: "security-compliance",
        title: "Security & Compliance",
        iconName: "ShieldCheck",
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
            technologies: [
                {
                    slug: "oauth2",
                    title: "OAuth2",
                    description: "An authorization framework that enables applications to obtain limited access to user accounts on an HTTP service.",
                    features: ["Secure Access", "Token-Based", "Granular Permissions", "Industry Standard"]
                },
                {
                    slug: "jwt",
                    title: "JWT",
                    description: "JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.",
                    features: ["Compact", "Self-Contained", "Stateless Authentication", "Secure Information Exchange"]
                }
            ],
        },
    },
    {
        slug: "ui-ux-design",
        title: "UI/UX & Design Systems",
        iconName: "Smartphone",
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
            technologies: [
                {
                    slug: "figma",
                    title: "Figma",
                    description: "A collaborative interface design tool. We use Figma to create wireframes, prototypes, and high-fidelity designs.",
                    features: ["Real-Time Collaboration", "Vector Graphics", "Prototyping", "Design Systems"]
                },
                {
                    slug: "framer-motion",
                    title: "Framer Motion",
                    description: "A production-ready motion library for React. We use it to create fluid animations and interactions.",
                    features: ["declarative animations", "layout animations", "gestures", "drag and drop"]
                }
            ],
        },
    },
    {
        slug: "data-analytics",
        title: "Data & Analytics",
        iconName: "BarChart",
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
            technologies: [
                {
                    slug: "tableau",
                    title: "Tableau",
                    description: "A visual analytics platform transforming the way we use data to solve problems. We use Tableau to create interactive dashboards.",
                    features: ["Visual Analytics", "Interactive Dashboards", "Data Blending", "Real-Time Analysis"]
                },
                {
                    slug: "power-bi",
                    title: "Power BI",
                    description: "A collection of software services, apps, and connectors that work together to turn your unrelated sources of data into coherent, visually immersive, and interactive insights.",
                    features: ["Data Connectivity", "Data Preparation", "Interactive Reporting", "Advanced Analytics"]
                }
            ],
        },
    },
    {
        slug: "consulting-strategy",
        title: "Consulting & Strategy",
        iconName: "Users",
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
            technologies: [],
        },
    },
];
