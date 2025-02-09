"use client";

import { Card } from "@/components/Card";
import { motion } from "framer-motion";
import SparkleIcon from "@/assets/icons/star.svg";

export const MyPersona = () => {
  const personaTags = [
    "Frontend",
    "React",
    "Next.js",
    "Performance",
    "Reusable",
    "Maintainable",
    "Cross-Browser",
    "JavaScript",
    "TypeScript",
    "API",
    "Fetching",
    "Innovation",
  ];

  return (
    <Card className="p-6 col-span-1 md:col-span-3 overflow-hidden h-[320px] relative bg-gradient-to-br from-[#1b2a3c] to-[#12202f]">

      {/* Heading Section */}
      <div className="flex flex-col group relative">
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 12 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <SparkleIcon className="text-emerald-300" />
          </motion.div>

          <h3 className="text-white text-2xl font-semibold">My Persona</h3>
        </div>
        <p className="text-md text-white/60 mt-1">
          Passionate about building fast, accessible, and engaging digital experiences.
        </p>
      </div>

      {/* Draggable Animated Tags */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 mt-6 relative justify-start items-center">
        {personaTags.map((tag, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileDrag={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="cursor-grab active:cursor-grabbing bg-gradient-to-r from-emerald-300 to-sky-400 text-black text-sm px-2 py-2 rounded-full shadow-lg w-full"
          >
            {tag}
          </motion.div>
        ))}
      </div>
    </Card>
  );
};
