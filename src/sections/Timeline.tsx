"use client";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaReact,
  FaBriefcase,
  FaSchool,
  FaUserGraduate,
} from "react-icons/fa";
import { SectionHeader } from "./SectionHeader";
import { Nutshell } from "./Nutshell";

// Data for the timeline in reversed order
const timelineData = [
  {
    date: "2025",
    title: "Associate Software Analyst",
    company: "Agilysys Technologies India Private Limited",
    description:
      "Joined Agilysys Technologies, a leading product-based company, as an Associate Software Analyst. Currently working on 'Stay,' a key product used in Marriott Hotels to enhance guest experiences by streamlining booking, check-in, and service management. Contributing to front-end development using modern web frameworks, focusing on improving user interface and overall product performance.",
    icon: <FaBriefcase size={18} />,
    image: "https://www.agilysys.com/en/wp-content/uploads/Agilysys-Logo-v1.png", // ✅ Path to Agilysys logo
    percentage: null,
  },
  {
    date: "2024",
    title: "Front-End Developer",
    company: "Spritle Software",
    description:
      "Worked as a Front-End Developer at Spritle Software, contributing to multiple client projects by developing responsive user interfaces using React, Next.js, HTML, and CSS. Focused on enhancing performance, usability, and cross-browser compatibility while collaborating with back-end teams to deliver seamless user experiences.",
    icon: <FaBriefcase size={18} />,
    image: "https://www.spritle.com/assets/img/logo/logo.svg", // ✅ Path to Spritle logo
    percentage: null,
  },
  {
    date: "2023",
    title: "Building Projects",
    company: "Self-Learn",
    description:
      "Actively contributed to open-source projects on GitHub, honing my collaboration skills and adopting industry best practices in software development.",
    icon: <FaLaptopCode size={18} />,
    percentage: null,
  },
  {
    date: "2022",
    title: "Started Learning Programming",
    company: "Self-Learning",
    description:
      "Dived deep into programming fundamentals, mastering key concepts and building a strong foundation for my development career through hands-on projects.",
    icon: <FaReact size={18} />,
    percentage: null,
  },
  {
    date: "2018 - 2022",
    title: "Bachelor of Mechanical Engineering",
    company: "Dhanalakshmi Srinivasan Engineering College",
    description:
      "Graduated with a strong academic record, while developing problem-solving skills and a passion for technology that paved the way for my transition into software development.",
    icon: <FaUserGraduate size={18} />,
    percentage: "86%",
  },
  {
    date: "2017",
    title: "Higher Secondary",
    company: "Vivekananda Higher Sec. School",
    description:
      "Excelled academically, demonstrating a keen interest in analytical thinking and logical problem-solving, which laid the groundwork for my future career in technology.",
    icon: <FaSchool size={18} />,
    percentage: "91.7%",
  },
  {
    date: "2015",
    title: "SSLC",
    company: "Vivekananda Higher Sec. School",
    description:
      "Achieved academic excellence, showcasing a strong aptitude for learning and a disciplined approach to education that shaped my future endeavors.",
    icon: <FaSchool size={18} />,
    percentage: "95%",
  },
];

export const Timeline = () => {
  return (
    <section>
      <section
        id="timeline"
        className="px-8 py-4 mt-12 bg-gray-900 text-white"
      >
        <div className="container mx-auto">
          <SectionHeader
            eyebrow="My Journey & Growth"
            title="A Glimpse Into My Professional Milestones"
            description="Explore key moments that shaped my development career."
          />

          <div className="mt-12 flex justify-center">
            <ul className="space-y-8 w-full max-w-[600px]">
              {timelineData.map((item, index) => (
                <motion.li
                  key={index}
                  className="relative flex items-start gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Vertical Line */}
                  <div className="absolute left-[18px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-gray-700 to-transparent"></div>

                  {/* Icon */}
                  <div className="relative z-10 bg-gray-800 p-2 rounded-full border-2 border-gray-700 flex-shrink-0">
                    {item.icon}
                  </div>

                  {/* Content Box */}
                  <div className="flex-1 bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-lg">
                    {/* Year and Percentage */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-emerald-400 font-bold">
                        {item.date}
                      </span>
                      {item.percentage && (
                        <span className="text-sm text-black font-medium bg-white px-2 py-1 rounded-full">
                          {item.percentage}
                        </span>
                      )}
                       {/* Logo (if available) */}
                    {item.image && (
                      <div className="mt-2">
                        <img
                          src={item.image}
                          alt={`${item.company} Logo`}
                          className="h-8 w-auto object-contain rounded-md"
                        />
                      </div>
                    )}
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 text-lg font-bold text-gray-100">
                      {item.title}
                    </h3>

                    {/* Company - Highlighted */}
                    <span className="text-sm text-emerald-400 font-semibold">
                      {item.company}
                    </span>

                    {/* Description */}
                    <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Nutshell */}
      <Nutshell />
    </section>
  );
};
