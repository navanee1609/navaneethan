"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";
import SparkleIcon from "@/assets/icons/star.svg";
import { SkillsToolsSection } from "./Skills";
import { MyPersona } from "./MyPersona";
import ContactAnimation from "./ContactAnimation";
import DiverseNeeds from "./DiverseNeeds";
import { FaGithub } from "react-icons/fa";
import { LivingInterfacesCard } from "./LivingInterfacesCard";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const codeLines = [
  [
    { text: "import", className: "text-[#ff7b72]" },
    { text: " React ", className: "text-white" },
    { text: "from", className: "text-[#ff7b72]" },
    { text: " 'react'", className: "text-[#a5d6ff]" },
    { text: ";", className: "text-white" },
  ],
  [
    { text: "function", className: "text-[#ff7b72]" },
    { text: " Devfolio", className: "text-[#d2a8ff]" },
    { text: "() {", className: "text-white" },
  ],
  [
    { text: "  return", className: "text-[#ff7b72]" },
    { text: " (", className: "text-white" },
  ],
  [
    { text: '    "Elevating Digital Experiences"', className: "text-[#a5d6ff]" },
  ],
  [{ text: "  );", className: "text-white" }],
  [{ text: "}", className: "text-white" }],
  [
    { text: "export default", className: "text-[#ff7b72]" },
    { text: " Devfolio;", className: "text-white" },
  ],
];

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,

  }),
};


export const AboutSection = () => {

  return (
    <section id="about">
      <div className="">
        <div className="container">
          <DiverseNeeds />
          <SectionHeader
            eyebrow="Beyond Portfolio"
            title="The Story Behind the Code"
            description=""
          />
          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8">
              {/* First Card */}
              <Card className="h-[320px] col-span-1 md:col-span-2 p-0">
                <div className="flex flex-col h-full">
                  {/* Video Section */}

                  <video
                    className="w-full h-[200px] object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline

                  >
                    <source src="/video/web.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="flex flex-col group m-4">
                    {/* Heading with Sparkle Icon */}
                    <div className="flex items-center gap-2">
                      <SparkleIcon className="text-emerald-300 transition-transform duration-300 ease-in-out" />
                      <h3 className="text-white text-2xl font-semibold transition-colors duration-300 ease-in-out">
                        Visual Web Design
                      </h3>
                    </div>

                    {/* Steps Below the Heading */}
                    <p className="text-md text-white/60 mt-2">
                      Question It → Design It → Build It → Break It → Ship It

                    </p>
                  </div>
                </div>
              </Card>



              {/* second card */}
              <Card className="h-[320px] col-span-1 md:col-span-3 p-4 relative overflow-hidden flex flex-col justify-between bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg">
                {/* Text Section */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <SparkleIcon className="text-emerald-300 transition-transform duration-300 ease-in-out group-hover:rotate-12" />
                    <h3 className="text-white text-2xl font-semibold transition-colors duration-300 ease-in-out group-hover:text-emerald-400">
                      Frontend Development
                    </h3>
                  </div>
                  <p className="text-base mt-1 text-md text-white/60">
                    Modern UI, performance optimization, and seamless user experience.
                  </p>
                </div>

                {/* VS Code Styled Code Snippet */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-900 rounded-lg shadow-lg w-full h-[220px] flex flex-col mt-4 border border-gray-700"
                >
                  {/* VS Code File Tab */}
                  <div className="flex items-center justify-between bg-gray-800 px-2 rounded-t-lg border-b border-gray-700">
                    <div className="flex items-center gap-4 p-1">
                      <div className="flex gap-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <span className="text-gray-400 text-sm font-medium">Devfolio.tsx</span>
                      {/* Close Button (X Icon) */}
                      <X className="w-4 h-4 text-gray-500 cursor-pointer hover:text-white" />
                    </div>
                    {/* GitHub Icon - Positioned at the right */}
                    <a
                      href="https://github.com/navanee1609"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition duration-300"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  </div>

                  {/* Code Editor with Typing Animation */}
                  <div className="p-4 text-white font-mono text-sm flex-grow overflow-hidden">
                    {codeLines.map((lineTokens, i) => (
                      <motion.pre
                        key={i}
                        className="whitespace-pre-wrap"
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                      >
                        {lineTokens.map((token, j) => (
                          <span key={`${i}-${j}`} className={token.className}>
                            {token.text}
                          </span>
                        ))}
                      </motion.pre>
                    ))}
                  </div>
                </motion.div>
              </Card>

              {/* Third Card */}
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
              {/* My persona  */}
              <MyPersona />
              {/* Contact Animation Box */}

              <ContactAnimation />
            </div>
            <LivingInterfacesCard />
          </div>
        </div>
      </div>

      <SkillsToolsSection />

    </section>
  );
};
