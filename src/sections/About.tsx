"use client"
import { Card } from "@/components/Card";
import { SectionHeader } from "./SectionHeader";
import book from "@/assets/images/book-cover.png";
import Navaneethan from "@/assets/images/Navaneethan.jpeg"
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import Html from "@/assets/icons/html5.svg";
import Css from "@/assets/icons/css3.svg";
import React from "@/assets/icons/react.svg";
import Github from "@/assets/icons/github.svg";
import Chrome from "@/assets/icons/chrome.svg";
import Map from "@/assets/images/map.png";
import Smile from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/Cardheader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Timeline } from "./Timeline";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { faDatabase, faLink, faBoxes, faSquare, faTree, faNetworkWired, faBrain, faSort, faSearch, faLightbulb, faSyncAlt, faCog, faFont, faTimes } from '@fortawesome/free-solid-svg-icons';
import grainImage from "@/assets/images/grain.jpg"

import { SkillsToolsSection } from "./Skills";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SocialConnect } from "./SocialConnect";
import ArrowUp from "@/assets/icons/arrow-up-right.svg"
import { twMerge } from "tailwind-merge";
import Draggable from "react-draggable";


interface DsaTopic {
  link: string | URL | undefined;
  title: string;
  icon: IconDefinition;
  left: string;
  top: string;
}
// Define DSA topics with more organized and neat positions
const dsaTopics: DsaTopic[] = [
  { title: "Arrays", icon: faDatabase, left: '10%', top: '10%', link: "https://www.linkedin.com/posts/navaneethan-k-v-546a9025b_artificialintelligence-frontenddevelopment-activity-7262849634589384704-xt0a?utm_source=share&utm_medium=member_desktop" },
  { title: "Linked List", icon: faLink, left: '30%', top: '10%', link: "https://www.linkedin.com/pulse/linked-list-in-dsa" },
  { title: "Stacks", icon: faBoxes, left: '50%', top: '10%', link: "https://www.linkedin.com/pulse/stacks-in-dsa" },
  { title: "Queues", icon: faSquare, left: '70%', top: '10%', link: "https://www.linkedin.com/pulse/queues-in-dsa" },
  { title: "Trees", icon: faTree, left: '10%', top: '35%', link: "https://www.linkedin.com/pulse/trees-in-dsa" },
  { title: "Graphs", icon: faNetworkWired, left: '30%', top: '35%', link: "https://www.linkedin.com/pulse/graphs-in-dsa" },
  { title: "Dynamic Programming", icon: faBrain, left: '50%', top: '35%', link: "https://www.linkedin.com/pulse/dynamic-programming-in-dsa" },
  { title: "Sorting", icon: faSort, left: '70%', top: '35%', link: "https://www.linkedin.com/pulse/sorting-in-dsa" },
  { title: "Searching", icon: faSearch, left: '10%', top: '60%', link: "https://www.linkedin.com/pulse/searching-in-dsa" },
  { title: "Greedy Algorithms", icon: faLightbulb, left: '30%', top: '60%', link: "https://www.linkedin.com/pulse/greedy-algorithms-in-dsa" },
  { title: "Backtracking", icon: faSyncAlt, left: '50%', top: '60%', link: "https://www.linkedin.com/pulse/backtracking-in-dsa" },
  { title: "Bit Manipulation", icon: faCog, left: '70%', top: '60%', link: "https://www.linkedin.com/pulse/bit-manipulation-in-dsa" },
  { title: "Mathematical Algorithms", icon: faFont, left: '50%', top: '80%', link: "https://www.linkedin.com/pulse/mathematical-algorithms-in-dsa" }
];





export const AboutSection = () => {
  const [showDsaTopics, ] = useState(false);
  const constrainRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isDsaModalOpen, setIsDsaModalOpen] = useState(false);
  // Open and close DSA Topics modal
  const openDsaModal = () => setIsDsaModalOpen(true);
  const closeDsaModal = () => setIsDsaModalOpen(false);


    return (
    <section id="about">
      <div className="py-20">
      <div className="container">
      <SectionHeader 
  eyebrow="Discover My Expertise" 
  title="My Technical Journey" 
  description="Elevating the Digital Experience!" 
/>

      
        <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8">
  {/* First Card */}
  <Card className="h-[320px] col-span-1 md:col-span-2 p-6 lg:p-8">
    <CardHeader 
      title="About Me" 
      description="I bring a mix of technical expertise, creative problem-solving, and a passion for building engaging, user-friendly web experiences. I enjoy turning challenges into opportunities to learn and grow, pushing myself to deliver impactful results." 
      className="text-justify max-w-4xl mx-auto"
    />

    <button
      onClick={openModal}
      className="mt-4 px-6 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-200 transition flex items-center gap-2 mx-auto lg:mx-0"
    >
      <span className="font-semibold">Unveil More</span>
      <ArrowUp className="size4" />
    </button>
  </Card>
  {/* Modal */}
       {/* Modal */}
       {isModalOpen && (
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center mx-2 bg-black bg-opacity-50 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={twMerge(
                  "bg-gray-800 rounded-3xl p-6 w-full max-w-md relative z-0 overflow-hidden after:absolute after:inset-0 after:border-2 after:border-white/20 after:rounded-3xl after:pointer-events-none after:z-[-1]",
                  "transition-all transform duration-500 ease-out opacity-0 scale-95",
                  isModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                   className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition"
                  onClick={closeModal}

                >
                  <FontAwesomeIcon icon={faTimes} className="text-xl text-black" />
                </button>

                {/* Background grain image */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                    zIndex: -1, // Ensure background image is below the content
                  }}
                ></div>

                {/* Modal Content */}
                
                <SectionHeader eyebrow="Dive Into My World" title="" description=""/>

                {/* About Me Content */}
          <div className="space-y-4 text-white text-sm leading-relaxed">
            <p>
              I am a passionate web developer with expertise in front-end technologies. I focus on delivering clean, responsive designs for seamless user experiences.
            </p>
            <p>
              My experience spans HTML, CSS, JavaScript, and React, with a constant drive to learn and improve in the ever-evolving tech landscape.
            </p>
            <p>
              I am committed to writing scalable and efficient code while maintaining high standards of performance and accessibility.
            </p>
            <p>
              With every project, I strive to create a product that not only meets but exceeds client expectations, ensuring top-notch results.
            </p>
          </div>


          <div className="flex justify-center mt-4">
  <a
    href="/path-to-your-resume.pdf"  // Replace with the actual path to your resume file
    download="My_Resume.pdf"  // Optional: name the file when downloaded
    className="mt-4 px-6 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-200 transition flex items-center gap-2"
  >
    <span className="font-semibold">Check Resume</span>
    {/* Replace with your desired icon */}
    <ArrowUp className="text-xl" />  {/* Adjust size as needed */}
  </a>
</div>

              </div>
            </div>
          )}

  

  {/* Second Card */}
  <Card className="h-[400px] col-span-1 md:col-span-3 p-6 lg:p-8 md:h-[320px]">
    <CardHeader
      title="Passionate About DSA"
      description="With a strong foundation in Data Structures and Algorithms, I am driven by a passion for optimizing solutions to complex problems. I enjoy breaking down intricate challenges into manageable pieces and crafting efficient, scalable algorithms. Whether it's designing robust data structures or finding elegant solutions to computational puzzles, I am continually inspired to learn and refine my skills."
      className="text-justify max-w-full mx-auto"
    />
    <button
      onClick={openDsaModal}
      className="mt-4 px-6 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-200 transition flex items-center gap-2 mx-auto lg:mx-0"
    >
      <span className="font-semibold">Explore DSA Topics</span>
      <ArrowUp className="size4" />
    </button>
  </Card>
</div>


 {/* Modal for DSA Topics */}
 {isDsaModalOpen && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center mx-2 bg-black bg-opacity-50 backdrop-blur-sm"
    onClick={(e) => e.stopPropagation()}
  >
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl p-6 w-full max-w-3xl relative z-0 overflow- mx-4 after:absolute after:inset-0 after:border-2 after:border-white/20 after:rounded-3xl after:pointer-events-none after:z-[-1]",
        "transition-all transform duration-500 ease-out opacity-0 scale-95",
        isDsaModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition"
        onClick={closeDsaModal}
      >
        <FontAwesomeIcon icon={faTimes} className="text-xl text-black" />
      </button>

      {/* Background grain image */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          zIndex: -1, // Ensure background image is below the content
        }}
      ></div>

      {/* Modal Content */}
      <SectionHeader eyebrow="Click here to view more" title="" description="" />

      {/* Cards inside modal with drag functionality */}
      <motion.div
        className="modal-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4 px-4 max-h-[60vh] overflow-y-auto"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {dsaTopics.map((topic, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 bg-gray-800/90 px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700/90 transition cursor-pointer"
            onClick={() => window.open(topic.link, "_blank")}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} // Makes cards draggable
          >
            {/* Icon */}
            <FontAwesomeIcon icon={topic.icon} className="text-2xl text-white" />

            {/* Title */}
            <span className="font-medium text-md text-white">{topic.title}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
)}




<div className="grid grid-cols-1 gap-8 md:grid-cols-5">
  {/* Social Media Section */}
  <SocialConnect/>

  {/* Map Box */}
  <Card className="h-[320px] p-0 relative col-span-1 md:col-span-2">
    <Image
      src={Map}
      alt="map"
      className="w-full h-full object-cover object-left-top"
    />
    <div className="absolute size-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after-outline-2 after-outline-offset-2 after:rounded-full after:outline-gray-950/30">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r bg-emerald-300 to-sky-400 -z-20 animate-ping"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r bg-emerald-300 to-sky-400 -z-10"></div>
      <Image
        src={Navaneethan}
        alt="smile"
        className="size-20 rounded-full"
      />
    </div>
  </Card>
</div>





        </div>
      </div>
    </div>
    <Timeline/>
    <SkillsToolsSection/>
    </section>
  );
};
