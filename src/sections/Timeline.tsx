"use client";
import { motion } from "framer-motion"; // Import motion for animations
import { FaLaptopCode, FaGraduationCap, FaReact, FaBriefcase, FaSchool, FaUserGraduate } from "react-icons/fa"; // Import icons
import { SectionHeader } from "./SectionHeader";

// Data for the timeline in reversed order
const timelineData = [
  {
    date: "2024",
    title: "Front-End Developer",
    company: "Spritle Software",
    description: "Embarked on a full-time role as a front-end developer, contributing to innovative projects and enhancing my expertise in modern web development frameworks and tools.",
    icon: <FaBriefcase size={18} />, // Relevant for professional role
    percentage: null, // No percentage needed
  },
  {
    date: "2023",
    title: "Building Projects",
    company: "Self-Learn",
    description: "Actively contributed to open-source projects on GitHub, honing my collaboration skills and adopting industry best practices in software development.",
    icon: <FaLaptopCode size={18} />, // Relevant for coding and projects
    percentage: null, // No percentage needed
  },
  {
    date: "2022",
    title: "Started Learning Programming",
    company: "Self-Learning",
    description: "Dived deep into programming fundamentals, mastering key concepts and building a strong foundation for my development career through hands-on projects.",
    icon: <FaReact size={18} />, // Relevant for learning programming
    percentage: null, // No percentage needed
  },
  {
    date: "2018 - 2022",
    title: "Bachelor of Mechanical Engineering",
    company: "Dhanalakshmi Srinivasan Engineering College",
    description: "Graduated with a strong academic record, while developing problem-solving skills and a passion for technology that paved the way for my transition into software development.",
    icon: <FaUserGraduate size={18} />, // Relevant for graduation
    percentage: "86%", // Percentage for college
  },
  {
    date: "2017",
    title: "Higher Secondary",
    company: "Vivekananda Higher Sec. School",
    description: "Excelled academically, demonstrating a keen interest in analytical thinking and logical problem-solving, which laid the groundwork for my future career in technology.",
    icon: <FaSchool size={18} />, // Relevant for school education
    percentage: "91.7%", // Percentage for higher secondary
  },
  {
    date: "2015",
    title: "SSLC",
    company: "Vivekananda Higher Sec. School",
    description: "Achieved academic excellence, showcasing a strong aptitude for learning and a disciplined approach to education that shaped my future endeavors.",
    icon: <FaSchool size={18} />, // Relevant for school education
    percentage: "95%", // Percentage for SSLC
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="px-8 py-16 bg-gray-900 text-white">
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
                initial={{ opacity: 0 }} // Start with opacity 0
                whileInView={{ opacity: 1 }} // Fade in when in view
                viewport={{ once: true }} // Animate only once
                transition={{ duration: 0.6, delay: index * 0.2 }} // Smooth transition with delay
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
  );
};