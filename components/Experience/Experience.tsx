"use client";
import { IoCodeWorking, IoLaptopOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiencesData = [
  {
    title: "Developer Relations Manager",
    organization: "0xGasless",
    location: "Remote, Bangalore",
    url: "https://0xgasless.com",
    description:
      "Served as a Developer Relations professional, fostering engagement between 0xGasless and the developer community. Organized webinars and workshops, increasing active developer participation by 30%. Developed comprehensive documentation and tutorials, reducing support queries by 25%. Established feedback loops with developers, leading to the implementation of 15 new features.",
  },
  {
    title: "CTO and Backend Developer",
    location: "Remote",
    organization: "Self-Employed",
    description:
      "As the CTO and backend developer of Onwe, I lead the development of a campus-centric social media platform, overseeing the technical architecture and API creation to connect students and enhance campus engagement.",
    icon: <IoCodeWorking className="w-[40px] h-[40px]" />,
    date: "June 2024 - present",
  },
  {
    title: "Freelance Front-End Developer",
    location: "Remote",
    organization: "Self-Employed",
    description:
      "As a freelance front-end developer, I specialize in creating dynamic and visually appealing landing pages. My work involves using modern technologies to deliver responsive and user-friendly designs that help businesses enhance their online presence.",
    icon: <IoLaptopOutline className="w-[40px] h-[40px]" />,
    date: "Ongoing",
  },
  {
    title: "Computer-Science Degree",
    location: "Vadodara, India",
    organization: "Parul University",
    description:
      "I am nearing the completion of my computer engineering degree, currently in the final year.",
    icon: <FaGraduationCap className="w-[40px] h-[40px]" />,
    date: "2021 - present",
  },
];

export default function Experience() {
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
      className="mt-[200px] flex items-center flex-col justify-center scroll-mt-28"
      id="experience"
    >
      <h1 className="font-bold text-3xl">My Experience</h1>
      <div>
        <section className="w-full flex flex-col gap-10 items-center justify-center scroll-mt-28 py-[120px]">
          <div className="flex flex-col gap-10 max-w-[900px]">
            {experiencesData.map((item, index) => (
              <div key={index}>
                <div className="p-5 w-full border rounded-lg">
                  <h1 className="font-semibold text-2xl capitalize">
                    {item.title}
                  </h1>
                  <p className="font-normal mt-2">{item.location}</p>
                  <p className="font-normal mt-1">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {item.organization}
                      </a>
                    ) : (
                      item.organization
                    )}
                  </p>
                  <p className="mt-4 font-normal text-gray-700 dark:text-white/75">
                    {item.description}
                  </p>
                  <p className="font-normal mt-5">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
