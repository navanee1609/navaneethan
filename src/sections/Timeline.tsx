"use client";
import { motion } from "framer-motion";

// Data for the timeline
const timelineData = [
  {
    date: "2020",
    title: "Started Coding",
    description: "I started learning the basics of JavaScript, HTML, and CSS.",
    icon: "🖥️",
  },
  {
    date: "2021",
    title: "Built My First Project",
    description: "Created a personal portfolio website and integrated React.",
    icon: "🌐",
  },
  {
    date: "2022",
    title: "Learned Advanced React",
    description: "Mastered React concepts like hooks, context API, and state management.",
    icon: "⚛️",
  },
  {
    date: "2023",
    title: "Started Contributing to Open Source",
    description: "Contributed to several open-source projects on GitHub, improving my collaboration skills.",
    icon: "📦",
  },
  {
    date: "2024",
    title: "Full-time Developer",
    description: "Started my full-time role as a front-end developer and expanded my skillset.",
    icon: "💼",
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="px-8 py-16 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-clip-text from-blue-400 to-purple-600">
          My Journey
        </h2>
        <div className="relative">
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
                  className={`absolute top-8 h-6 w-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping ${
                    index % 2 === 0 ? "left-1/2 -ml-3" : "right-1/2 -mr-3"
                  }`}
                ></div>

                {/* Timeline Card */}
                <motion.div
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md"
                  style={{
                    transformOrigin: index % 2 === 0 ? "left center" : "right center",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="h-16 w-16 bg-gradient-to-tr from-purple-600 to-blue-400 flex items-center justify-center rounded-full text-2xl"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <span className="text-sm font-semibold text-emerald-400">
                        {item.date}
                      </span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300">{item.description}</p>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
