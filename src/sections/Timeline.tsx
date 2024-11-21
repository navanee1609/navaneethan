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
    <section
      id="timeline"
      className="flex justify-center items-center mx-8"
    >
      <div className="relative w-full max-w-xl">
        <div className="absolute top-0 left-6 w-1 h-full bg-gradient-to-b from-emerald-300 to-sky-400 rounded-full"></div>
        <ul className="space-y-8">
          {timelineData.map((item, index) => (
            <li key={index} className="relative pl-16 flex items-start">
              <div className="absolute left-0 top-1.5 h-12 w-12 bg-blue-400 text-white flex items-center justify-center rounded-full shadow-lg">
                {item.icon}
              </div>
              <div>
                <span className="text-sm font-semibold text-blue-400">
                  {item.date}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
