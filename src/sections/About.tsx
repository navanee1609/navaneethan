"use client"
import { Card } from "@/components/Card";
import { SectionHeader } from "./SectionHeader";
import book from "@/assets/images/book-cover.png";
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
import { useRef } from "react";

// Data for the timeline
const timelineData = [
  {
    date: "2020",
    title: "Started Coding",
    description: "I started learning the basics of JavaScript, HTML, and CSS.",
    icon: "🖥️"
  },
  {
    date: "2021",
    title: "Built My First Project",
    description: "Created a personal portfolio website and integrated React.",
    icon: "🌐"
  },
  {
    date: "2022",
    title: "Learned Advanced React",
    description: "Mastered React concepts like hooks, context API, and state management.",
    icon: "⚛️"
  },
  {
    date: "2023",
    title: "Started Contributing to Open Source",
    description: "Contributed to several open-source projects on GitHub, improving my collaboration skills.",
    icon: "📦"
  },
  {
    date: "2024",
    title: "Full-time Developer",
    description: "Started my full-time role as a front-end developer and expanded my skillset.",
    icon: "💼"
  },
];

// Toolbox items
const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon
  },
  {
    title: "HTML5",
    iconType: Html,
  },
  {
    title: "CSS3",
    iconType: Css,
  },
  {
    title: "React",
    iconType: React,
  },
  {
    title: "Chrome",
    iconType: Chrome,
  },
  {
    title: "Github",
    iconType: Github,
  },
];

// Hobbies data
const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: '5%',
    top: '5%',
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: '50%',
    top: '5%',
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: '35%',
    top: '40%',
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: '10%',
    top: '35%',
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: '70%',
    top: '45%',
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: '5%',
    top: '65%',
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: '45%',
    top: '70%',
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null); // Initialize the ref for drag constraints

  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader eyebrow="Learn a glimpse about me" title="About me" description="something about me" />
      
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] col-span-2">
              <CardHeader title="My Reads" description="something" />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={book} alt="book" />
              </div>
            </Card>
            
            <Card className="h-[320px] p-0 col-span-3">
              <CardHeader title="My Toolbox" description="skills" className="px-6 pt-6" /> 
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-left-card" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-left-card" />
            </Card>
          </div>

          {/* Timeline Section */}
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-5">
            <Card className="h-[auto] p-0 col-span-5">
              <CardHeader title="Timeline" description="A glimpse into my journey" className="px-6 py-6" />
              <div className="timeline">
                <ul className="timeline-list">
                  {timelineData.map((item, index) => (
                    <li key={index} className="timeline-item">
                      <div className="timeline-icon">{item.icon}</div>
                      <div className="timeline-content">
                        <span className="timeline-date">{item.date}</span>
                        <h3 className="timeline-title">{item.title}</h3>
                        <p className="timeline-description">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* Hobbies Section */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="h-[320px] p-0 flex flex-col col-span-3">
              <CardHeader title="My hobbies" description="hobbies" className="px-6 py-6"/> 
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={`${hobby.title}-${hobby.left}-${hobby.top}`}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top
                    }}
                    drag
                    dragConstraints={constrainRef} // Corrected property name
                  >
                    <span className="font-medium text-gray-950"> {hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            
            <Card className="h-[320px] p-0 relative col-span-2">
              <Image src={Map} alt="map" className="w-full h-full object-cover object-left-top" />
              <div className="absolute size-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after-outline-2 after-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r bg-emerald-300 to-sky-400 -z-20 animate-ping"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r bg-emerald-300 to-sky-400 -z-10"></div>
                <Image src={Smile} alt="smile" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
