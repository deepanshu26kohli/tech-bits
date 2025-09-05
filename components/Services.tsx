"use client";

import { motion } from "framer-motion";
import { Code, Cloud, Lock, Cpu } from "lucide-react";
import LogoLoop from "./LogoLoop";
import FallingText from './FallingText';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiDocker,
  SiKubernetes,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiMaterialdesign,
  SiGit,
  SiGooglecloud,
  SiEthereum,
  SiSolidity,
  SiWeb3Dotjs,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiPrisma,
  SiNestjs,
  SiReduxsaga,
  SiJsonwebtokens,
  SiAntdesign,
} from "react-icons/si";
const iconStyle = "w-8 h-8"; // ✅ Consistent size for all icons

const techLogos = [
  // --------------------
  // 🌐 FRONTEND TECHNOLOGIES
  // --------------------
  { node: <SiReact className={`${iconStyle} text-[#61DAFB]`} />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className={`${iconStyle} text-black`} />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className={`${iconStyle} text-[#3178C6]`} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript className={`${iconStyle} text-[#F7DF1E]`} />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTailwindcss className={`${iconStyle} text-[#38B2AC]`} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiBootstrap className={`${iconStyle} text-[#7952B3]`} />, title: "Bootstrap", href: "https://getbootstrap.com" },
  { node: <SiMaterialdesign className={`${iconStyle} text-[#0081CB]`} />, title: "Material UI", href: "https://mui.com" },
  { node: <SiAntdesign className={`${iconStyle} text-[#0170FE]`} />, title: "Ant Design", href: "https://ant.design" },
  { node: <SiHtml5 className={`${iconStyle} text-[#E34F26]`} />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 className={`${iconStyle} text-[#1572B6]`} />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },

  // --------------------
  // ⚡ STATE MANAGEMENT
  // --------------------
  { node: <SiRedux className={`${iconStyle} text-[#764ABC]`} />, title: "Redux", href: "https://redux.js.org" },
  { node: <SiReduxsaga className={`${iconStyle} text-[#999999]`} />, title: "Redux-Saga", href: "https://redux-saga.js.org" },

  // --------------------
  // ⚡ BACKEND & API
  // --------------------
  { node: <SiNodedotjs className={`${iconStyle} text-[#339933]`} />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress className={`${iconStyle} text-[#000000]`} />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiNestjs className={`${iconStyle} text-[#E0234E]`} />, title: "NestJS", href: "https://nestjs.com" },
  { node: <SiGraphql className={`${iconStyle} text-[#E10098]`} />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiJsonwebtokens className={`${iconStyle} text-[#D63AFF]`} />, title: "JWT Auth", href: "https://jwt.io" },

  // --------------------
  // 🗄 DATABASES
  // --------------------
  { node: <SiPostgresql className={`${iconStyle} text-[#336791]`} />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiSupabase className={`${iconStyle} text-[#3ECF8E]`} />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiMysql className={`${iconStyle} text-[#4479A1]`} />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiMongodb className={`${iconStyle} text-[#47A248]`} />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPrisma className={`${iconStyle} text-[#2D3748]`} />, title: "Prisma ORM", href: "https://www.prisma.io" },

  // --------------------
  // ☁️ CLOUD & DEPLOYMENT
  // --------------------
  { node: <SiGooglecloud className={`${iconStyle} text-[#4285F4]`} />, title: "Google Cloud", href: "https://cloud.google.com" },
  { node: <SiFirebase className={`${iconStyle} text-[#FFCA28]`} />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiVercel className={`${iconStyle} text-black`} />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiDocker className={`${iconStyle} text-[#2496ED]`} />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiKubernetes className={`${iconStyle} text-[#326CE5]`} />, title: "Kubernetes", href: "https://kubernetes.io" },

  // --------------------
  // 🔗 VERSION CONTROL & DEVOPS
  // --------------------
  { node: <SiGithub className={`${iconStyle} text-white`} />, title: "GitHub", href: "https://github.com" },
  { node: <SiGit className={`${iconStyle} text-[#F05032]`} />, title: "Git", href: "https://git-scm.com" },

  // --------------------
  // ⛓ BLOCKCHAIN & WEB3
  // --------------------
  { node: <SiEthereum className={`${iconStyle} text-[#3C3C3D]`} />, title: "Ethereum", href: "https://ethereum.org" },
  { node: <SiSolidity className={`${iconStyle} text-[#363636]`} />, title: "Solidity", href: "https://soliditylang.org" },
  { node: <SiWeb3Dotjs className={`${iconStyle} text-[#F16822]`} />, title: "Web3.js", href: "https://web3js.readthedocs.io" },

  // --------------------
  // 🤖 AI / MACHINE LEARNING
  // --------------------
  { node: <SiTensorflow className={`${iconStyle} text-[#FF6F00]`} />, title: "TensorFlow", href: "https://www.tensorflow.org" },
  { node: <SiPytorch className={`${iconStyle} text-[#EE4C2C]`} />, title: "PyTorch", href: "https://pytorch.org" },
  { node: <SiOpenai className={`${iconStyle} text-[#412991]`} />, title: "OpenAI", href: "https://openai.com" },
];
const services = [
  {
    title: "Web & Mobile Development",
    desc: "Build fast, scalable, and stunning apps with techbits technologies.",
    icon: <Code size={40} />,
  },
  {
    title: "Cloud & DevOps Solutions",
    desc: "Seamless migration, automation, and deployment pipelines for scalability.",
    icon: <Cloud size={40} />,
  },
  {
    title: "AI & Automation",
    desc: "Leverage AI-driven solutions to streamline processes and boost productivity.",
    icon: <Cpu size={40} />,
  },
  {
    title: "Cybersecurity Consulting",
    desc: "Protect your business with robust security and compliance solutions.",
    icon: <Lock size={40} />,
  },
];

const Services = () => {
  return (
    <section className="relative bg-black/80 text-white ">
      <div className="h-48">
        <FallingText
          text={`Please click me to make TECH BITS fall`}
          highlightWords={["click" , "TECH" , "BITS"]}
          trigger="click"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="1rem"
          // mouseConstraintStiffness={0.9}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-4"
        >
          Our <span className="text-blue-400">Services</span>
        </motion.h2>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="black"
          ariaLabel="Technology partners"
        />
        <p className="text-gray-300 mt-5 max-w-2xl mx-auto mb-12">
          We provide world-class IT solutions tailored to help your business grow, innovate, and scale seamlessly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-4 text-blue-400">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
