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


interface DsaTopic {
  title: string;
  icon: IconDefinition;
  left: string;
  top: string;
}
// Define DSA topics with more organized and neat positions
const dsaTopics: DsaTopic[] = [
  { title: "Arrays", icon: faDatabase, left: '10%', top: '10%' },
  { title: "Linked List", icon: faLink, left: '30%', top: '10%' },
  { title: "Stacks", icon: faBoxes, left: '50%', top: '10%' },
  { title: "Queues", icon: faSquare, left: '70%', top: '10%' },
  { title: "Trees", icon: faTree, left: '10%', top: '35%' },
  { title: "Graphs", icon: faNetworkWired, left: '30%', top: '35%' },
  { title: "Dynamic Programming", icon: faBrain, left: '50%', top: '35%' },
  { title: "Sorting", icon: faSort, left: '70%', top: '35%' },
  { title: "Searching", icon: faSearch, left: '10%', top: '60%' },
  { title: "Greedy Algorithms", icon: faLightbulb, left: '30%', top: '60%' },
  { title: "Backtracking", icon: faSyncAlt, left: '50%', top: '60%' },
  { title: "Bit Manipulation", icon: faCog, left: '70%', top: '60%' },
  { title: "Mathematical Algorithms", icon: faFont, left: '50%', top: '80%' }
];




export const AboutSection = () => {
  const [showDsaTopics, setShowDsaTopics] = useState(false);
  const constrainRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false); // State to track hover effect
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const handleShowDsaTopics = () => {
    setShowDsaTopics(true);
  };

  const handleCloseDsaTopics = () => {
    setShowDsaTopics(false);
  };
  return (
    <section id="about">
      <div className="py-20">
      <div className="container">
        <SectionHeader eyebrow="Learn a glimpse about me" title="About me" description="something about me" />
      
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 md:gap-8">
          <Card className="h-[320px] col-span-2 p-6 lg:p-8">
  <CardHeader 
    title="About Me" 
    description="I bring a mix of technical expertise, creative problem-solving, and a passion for building engaging, user-friendly web experiences. I enjoy turning challenges into opportunities to learn and grow, pushing myself to deliver impactful results." 
    className=" text-justify max-w-4xl mx-auto"
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
                  className="absolute top-4 right-4 text-white rounded-full px-2 text-2xl"
                  onClick={closeModal}

                >
                  &times;
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

            
            {/* <Card className="h-[320px] p-0 col-span-3">
              <CardHeader title="My Toolbox" description="skills" className="px-6 pt-6" /> 
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-left-card" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-left-card" />
            </Card> */}


            {/* dsa section */}


            {/* DSA Box */}
  <Card className="h-[320px] p-6 col-span-3">
    <h2 className="text-xl font-bold mb-4 text-white">My Interest in DSA</h2>
    <p className="text-white/50 text-center mb-6">
      Data Structures and Algorithms form the backbone of efficient
      problem-solving. I love how DSA combines logical thinking and
      technical precision to build optimal solutions.
    </p>
    <button
      onClick={handleShowDsaTopics}
      className="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 transition"
    >
      Explore My Favorite DSA Topics
    </button>
  </Card>
  


   



          </div>
          {/* Topics Box */}
          {showDsaTopics && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-8"
        >
          <Card className="h-[320px] p-6 flex flex-col col-span-5 relative">
            <h2 className="text-xl font-bold mb-4 text-white">
              My Favorite DSA Topics
            </h2>

            {/* Close button (X Icon) */}
            <button
              onClick={handleCloseDsaTopics}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl text-black" />
            </button>

            {/* Overlay message when not hovered */}
            {!isHovered && (
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center text-white text-lg font-semibold rounded-lg z-10 pointer-events-none">
                Drag to explore DSA topics

              </div>
            )}

            {/* Container for DSA topics */}
            <div
              className="relative flex-1"
              ref={constrainRef}
              onMouseEnter={() => setIsHovered(true)} // Set to true when mouse enters
              onMouseLeave={() => setIsHovered(false)} // Set to false when mouse leaves
            >
              {dsaTopics.map((dsa, index) => (
                <motion.div
                  key={`${dsa.title}-${index}`}
                  className="absolute inline-flex items-center justify-center gap-4 px-6 py-2 bg-gray-800/90 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700/90 transition"
                  style={{
                    left: dsa.left,
                    top: dsa.top,
                  }}
                  drag
                  dragConstraints={constrainRef} // Enforces the boundaries within the container
                >
                  <span className="font-medium text-white">{dsa.title}</span>
                  <FontAwesomeIcon
                    icon={dsa.icon}
                    className="text-2xl text-white"
                  />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      )}

          {/* Bento grid */}
          <div className="">

  {/* Bento Grid Section */}
  <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
    {/* Card 1: Reasons to Hire Me */}
    <Card className="h-[320px]">
      <CardHeader
        title="Reasons to Hire Me"
        description="Why I would be a great addition to your team."
        className="px-6 py-6"
      />
      <div className="px-6 pb-6">
        <p className="text-white/50">
          I bring a mix of technical expertise, creative problem-solving, and a
          passion for building engaging, user-friendly web experiences. My dedication
          and attention to detail ensure quality in every project I undertake.
        </p>
      </div>
    </Card>

    {/* Card 2: What Drives Me */}
    <Card className="h-[320px]">
      <CardHeader
        title="What Drives Me"
        description="The motivation behind my passion for development."
        className="px-6 py-6"
      />
      <div className="px-6 pb-6">
        <p className="text-white/50">
          My drive comes from a deep curiosity about technology and a desire to
          create meaningful solutions. I enjoy turning challenges into opportunities
          to learn and grow, pushing myself to deliver impactful results.
        </p>
      </div>
    </Card>
  </div>
</div>


          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
           {/* Updated Social Media Section with Icons */}
      <SocialConnect/>

  {/* Map Box */}
  <Card className="h-[320px] p-0 relative col-span-2">
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
