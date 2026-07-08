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

const typedCodeLines = [
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

export const AboutSection = () => {
  const [visibleChars, setVisibleChars] = useState(0);
  const totalCodeChars = typedCodeLines.reduce(
    (lineTotal, line) =>
      lineTotal + line.reduce((tokenTotal, token) => tokenTotal + token.text.length, 0),
    0
  );

  useEffect(() => {
  if (visibleChars >= totalCodeChars) return; // Don't start if already done

  const timer = window.setInterval(() => {
    setVisibleChars((current) => {
      if (current >= totalCodeChars) {
        window.clearInterval(timer);
        return current;
      }
      return current + 1;
    });
  }, 45);

  return () => window.clearInterval(timer);
}, [totalCodeChars]); // Intentionally NOT depending on visibleChars

  return (
    <section id="about">
      <div className="">
        <div className="container">
          <DiverseNeeds/>
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
<Card className="h-[320px] col-span-1 md:col-span-3 p-4 relative overflow-hidden flex flex-col justify-between bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg group">
      {/* Text Section */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <SparkleIcon className="text-emerald-300 transition-transform duration-300 ease-in-out" />
          <h3 className="text-white text-2xl font-semibold transition-colors duration-300 ease-in-out">
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
        className="bg-[#0d1117] rounded-xl shadow-lg w-full h-[220px] flex flex-col mt-4 border border-[#30363d] overflow-hidden"
      >
        {/* VS Code Title Bar */}
        <div className="flex items-center justify-between bg-[#161b22] px-3 py-2 border-b border-[#30363d]">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#ff5f56] rounded-full hover:bg-[#ff5f56]/80 transition-colors" />
              <span className="w-2.5 h-2.5 bg-[#ffbd2e] rounded-full hover:bg-[#ffbd2e]/80 transition-colors" />
              <span className="w-2.5 h-2.5 bg-[#27c93f] rounded-full hover:bg-[#27c93f]/80 transition-colors" />
            </div>
            <div className="flex items-center gap-2 ml-2 px-3 py-1 bg-[#0d1117] rounded-md border border-[#30363d]">
              <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <span className="text-gray-300 text-xs font-medium">Devfolio.tsx</span>
            </div>
          </div>
          <a
            href="https://github.com/navanee1609"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition duration-300"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>

        {/* Code Editor with Line Numbers & Syntax Highlighting */}
        <div className="flex flex-1 overflow-hidden">
          {/* Line Numbers */}
          <div className="bg-[#0d1117] border-r border-[#30363d] px-3 py-4 text-right select-none">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div key={num} className="text-[#484f58] text-xs font-mono leading-6">{num}</div>
            ))}
          </div>

          {/* Code Content with Typing Animation */}
          <div className="flex-1 p-4 text-sm font-mono overflow-hidden">
            {typedCodeLines.map((line, lineIndex) => {
              const charsBeforeLine = typedCodeLines
                .slice(0, lineIndex)
                .reduce(
                  (lineTotal, previousLine) =>
                    lineTotal +
                    previousLine.reduce(
                      (tokenTotal, token) => tokenTotal + token.text.length,
                      0
                    ),
                  0
                );
              const charsVisibleInLine = Math.max(0, visibleChars - charsBeforeLine);

              return (
                <div key={lineIndex} className="leading-6 whitespace-pre">
                  {line.map((token, tokenIndex) => {
                    const charsBeforeToken = line
                      .slice(0, tokenIndex)
                      .reduce((total, previousToken) => total + previousToken.text.length, 0);
                    const tokenVisibleChars = Math.max(
                      0,
                      Math.min(token.text.length, charsVisibleInLine - charsBeforeToken)
                    );

                    return (
                      <span key={`${lineIndex}-${tokenIndex}`} className={token.className}>
                        {token.text.slice(0, tokenVisibleChars)}
                      </span>
                    );
                  })}
                  {visibleChars >= charsBeforeLine &&
                    visibleChars <= charsBeforeLine + line.reduce((total, token) => total + token.text.length, 0) && (
                      <motion.span
                        className="inline-block h-4 w-2 translate-y-0.5 bg-emerald-400"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between bg-[#161b22] px-3 py-1.5 border-t border-[#30363d] text-[10px] text-[#8b949e]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.612 10.066l.094-.083 2.495-2.13.095-.08c.1-.076.238-.147.422-.147.266 0 .498.133.632.332.133.2.166.466.1.699-.066.233-.232.399-.465.532l-.1.066-2.495 2.13-.1.066c-.2.133-.466.166-.699.1-.233-.066-.399-.232-.532-.465Z"/>
              </svg>
              TypeScript React
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146Z"/>
              </svg>
              UTF-8
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146Z"/>
              </svg>
              Ln 7, Col 23
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146Z"/>
              </svg>
              2 spaces
            </span>
          </div>
        </div>
      </motion.div>
    </Card>y

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
