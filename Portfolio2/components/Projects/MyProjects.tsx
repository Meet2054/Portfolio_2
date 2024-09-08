"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import ProjectCard from "./Projectcard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const projectsData = [
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
    title: "HiLink",
    description:
      "Hilink is a user-friendly web app that simplifies travel planning, offering personalized recommendations and seamless booking for your next adventure.",
    tags: ["React", "Next.js", "Tailwind", "vercel"],
    githubLink: "https://github.com/Meet2054/Travel-WebSite",
    liveLink: "https://travel-web-site-mu.vercel.app/",
    imageUrl: "/insightful.png",
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
] as const;

export default function Myprojects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="w-full flex flex-col items-center justify-center mt-[200px]"
    >
      <h1 className="text-4xl font-bold mb-7">My Projects</h1>

      <div className="flex flex-wrap gap-5 items-center justify-center ">
        {projectsData.map((data) => (
          <ProjectCard key={data.title} data={data} />
        ))}
      </div>
      <Button className="mt-3" asChild>
        <Link href="/myprojects">More Projects</Link>
      </Button>
    </motion.div>
  );
}
