"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGlobe, FaReact, FaGithub, FaBriefcase, FaDotCircle } from "react-icons/fa"; // Import icons
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "./SectionHeader";

// Data for the timeline
const timelineData = [
  {
    date: "2020",
    title: "Started Coding",
    company: "Self-Learning", // Organization name
    description: "I started learning the basics of JavaScript, HTML, and CSS.",
    icon: <FaLaptopCode size={28} />, // Icon for this entry
  },
  {
    date: "2021",
    title: "Built My First Project",
    company: "Personal Portfolio", // Organization name
    description: "Created a personal portfolio website and integrated React.",
    icon: <FaGlobe size={28} />, // Icon for this entry
  },
  {
    date: "2022",
    title: "Learned Advanced React",
    company: "React Academy", // Organization name
    description: "Mastered React concepts like hooks, context API, and state management.",
    icon: <FaReact size={28} />, // Icon for this entry
  },
  {
    date: "2023",
    title: "Started Contributing to Open Source",
    company: "GitHub", // Organization name
    description: "Contributed to several open-source projects on GitHub, improving my collaboration skills.",
    icon: <FaGithub size={28} />, // Icon for this entry
  },
  {
    date: "2024",
    title: "Full-time Developer",
    company: "TechCorp Inc.", // Organization name
    description: "Started my full-time role as a front-end developer and expanded my skillset.",
    icon: <FaBriefcase size={28} />, // Icon for this entry
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

        <div className="relative mt-6">
          {/* Timeline Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-emerald-400 to-sky-600 animate-pulse rounded-full"></div>

          <ul className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.li
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                {/* Connector Dots */}
                <div
  className={`absolute top-8 h-6 w-6 text-white flex items-center justify-center ${
    index % 2 === 0 ? "left-1/2 -ml-3" : "right-1/2 -mr-3"
  }`}
>
  <FaDotCircle size={24} />
</div>


                {/* Timeline Card */}
                <motion.div
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md"
                  style={{
                    transformOrigin: index % 2 === 0 ? "left center" : "right center",
                  }}
                >
                  {/* Flex container for icon and year */}
                  <div className="flex items-center gap-6">
                    {/* Icon with updated styles */}
                    <motion.div
                      className="bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0 w-12 h-12"
                    >
                      {item.icon}
                    </motion.div>

                    {/* Date */}
                    <span className="text-sm font-semibold text-emerald-400">
                      {item.date}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    {/* Organization name */}
                    <span className="text-sm text-gray-400">{item.company}</span>
                    <p className="mt-4 text-gray-300">{item.description}</p>
                  </div>

                  {/* Background grain image */}
                  <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                      backgroundImage: `url(${grainImage.src})`,
                      zIndex: -1, // Ensure background image is below the content
                    }}
                  ></div>

                  {/* Apply Border using ::after pseudo-element */}
                  <div className="absolute inset-0 border-2 border-white/20 rounded-3xl pointer-events-none"></div>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
