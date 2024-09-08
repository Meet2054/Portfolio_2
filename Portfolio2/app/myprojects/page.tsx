"use client";

import ProjectCard from "@/components/Projects/Projectcard";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Gitcode",
    description:
      "Experience the future of open-source contributions. Explore my projects and skills, all built on a transparent and rewarding platform.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma","Typescript","MetaMask","Aptos BlockChain", "Chainlink","Move"],
    githubLink: "https://github.com/Meet2054/Gitcode-v3/tree/main",
    liveLink: "https://gitcode-v3-eight.vercel.app/",
    imageUrl: "/gitcode.png",
  },
  {
    title: "ONWE",
    description:
      "Onwe is a social media platform that connects people with similar interests, allowing them to share their thoughts & ideas in compuses.",
    tags: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Tailwind",
      "Prisma",
      "Clerk Auth",
      "Typescript",
      "Ngrok",
      "Cloudinary",
    ],
    githubLink: "https://github.com/MayankUghade/NewsNugget",
    liveLink: "",
    imageUrl: "/onwe.png",
  },
  {
    title: "Automa8X",
    description:
      "AutoMa8X is a decentralized automation tool built on Aptos, enhancing business processes with scalable, secure, and efficient blockchain technology.",
    tags: ["Next.js", "Tailwind", "Typescript", "Aptos BlockChain","Move","Prisma","PostgreSQL"],
    githubLink: "https://github.com/Meet2054/automa8x-production",
    liveLink:"https://automa8x.vercel.app/",
    imageUrl: "/auto.png",
  },
  {
    title: "Aether",
    description:
    "AetherWallet enables seedless, gasless web3 onboarding with a multi-chain smart wallet and on-chain domain, simplifying account management across chains.",
    tags: ["React", "Next-Js", "Tailwind", "ShadCn-UI"],
    githubLink: "https://github.com/Meet2054/Web3Pay",
    liveLink: "",
    imageUrl: "/aether.png",
  },
  {
    title: "Convoia",
    description:
    "Convoia is a decentralized Web3 chat platform leveraging XMTP for an interoperable inbox, enabling seamless NFT discovery and cross-app messaging for collectors and Web3 enthusiasts.",
    tags: ["React", "Next-Js", "Python", "XMTP", "Tailwind"],
    githubLink: "https://github.com/Meet2054/Convoia",
    liveLink: "https://convoia.vercel.app/",
    imageUrl: "/convoia.png",
  },
  {
    title: "Guard Anon",
    description:
      "A sleek and engaging freelance landing page featuring cool animations to captivate visitors and showcase your portfolio effectively.",
    tags: [
      "ReactNative",
      "Tailwind",
      "Figma",
      "GPT API",
      "Supabase",
    ],
    githubLink: "https://github.com/gmpaliwal07/Guard_Anon",
    liveLink: "",
    imageUrl: "/guardanon.png",
  },
  {
    title: "HiLink",
    description:
      "Hilink is a user-friendly web app that simplifies travel planning, offering personalized recommendations and seamless booking for your next adventure.",
    tags: ["React", "Next.js", "Tailwind", "vercel"],
    githubLink: "https://github.com/Meet2054/Travel-WebSite",
    liveLink: "https://travel-web-site-mu.vercel.app/",
    imageUrl: "/insightful.png",
  },
];
export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="lg:container p-3 flex flex-col items-center justify-center mt-10"
    >
      <h1 className="text-3xl font-semibold underline"> More of my projects</h1>
      <div className="flex gap-5 flex-wrap items-center justify-center mt-10">
        {projectsData.map((data) => (
          <ProjectCard key={data.title} data={data} />
        ))}
      </div>
    </motion.div>
  );
}
