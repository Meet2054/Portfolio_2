"use client";

import Image from "next/image";
import profile from "@/public/profile.jpeg";
import { IoLogoHtml5, IoLogoNodejs, IoLogoPython } from "react-icons/io5";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaGitAlt, FaPaintbrush } from "react-icons/fa6";
import {
  SiExpress,
  SiFramer,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiNextdotjs,
  SiDocker,
  SiAdobephotoshop,
  SiLinux,
  SiFigma,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    icon: <IoLogoHtml5 className="text-4xl" />,
  },
  {
    name: "CSS",
    icon: <IoLogoCss3 className="text-4xl" />,
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript className="text-4xl" />,
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript className="text-4xl" />,
  },
  {
    name: "ReactJS",
    icon: <FaReact className="text-4xl" />,
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs className="text-4xl" />,
  },
  {
    name: "NodeJS",
    icon: <IoLogoNodejs className="text-4xl" />,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress className="text-4xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-4xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-4xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-4xl" />,
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql className="text-4xl" />,
  },
  {
    name: "Python",
    icon: <IoLogoPython className="text-4xl" />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer className="text-4xl" />,
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-4xl" />,
  },
  {
    name: "AdobePS",
    icon: <SiAdobephotoshop className="text-4xl" />,
  },
  {
    name: "Linux",
    icon: <SiLinux className="text-4xl" />,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-4xl" />,
  },
  {
    name: "C++",
    icon: <TbBrandCpp className="text-4xl" />,
  },
];

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="mt-10 lg:container w-full p-2"
    >
      <h1 className="font-bold text-3xl mb-2 ml-3">Who am I</h1>
      <div className="border-t p-3 flex md:flex-row flex-col gap-10 items-center">
        <div>
          <p className="mt-5">
            I'm a 20-year-old full-stack developer who loves building web
            applications. I started coding when I was 17 and have been hooked
            ever since. I use Next.js, TypeScript, Prisma, Node.js, and other
            technologies to create strong and scalable projects. I love solving
            problems and making exciting applications.
          </p>
          <p className="mt-5 mb-10">
            Beyond coding, I love hiking, swimming, and playing badminton. My
            enthusiasm for both programming and outdoor activities drives me to
            balance my time between tech projects and exploring nature.
          </p>

          <h1 className="font-bold text-3xl mb-2">My Tech Stack</h1>
          <div className="border-t">
            <div className="flex md:gap-4 flex-wrap p-2 mt-5">
              {skills?.filter(skill => skill.name && skill.icon).map((skill, index) => (
                <div key={skill.name || index} className="flex items-center gap-3 p-2 md:p-1">
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Image
          src={profile}
          alt="Profile"
          width={450}
          height={200}
          className="mt-3"
        />
      </div>

      <h1 className="font-bold text-3xl mb-2 mt-8 ml-2">About this website</h1>
      <div className="border-t p-3">
        <h1 className="p-2">Next.js</h1>
        <h1 className="p-2">Typescript</h1>
        <h1 className="p-2">Deployed on Vercel</h1>
        <h1 className="p-2">Shadcn</h1>
        <h1 className="p-2">Aceternity UI</h1>
        <h1 className="p-2">Tailwind CSS</h1>
      </div>
    </motion.div>
  );
}
