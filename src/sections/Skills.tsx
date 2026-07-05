"use client";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";
import Draggable from "react-draggable";
import { SectionHeader } from "./SectionHeader";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiRedux,
  SiAngular,
  SiNextdotjs,
  SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiNetlify,
  SiVite,
  SiGooglechrome,
} from "react-icons/si";

const frontEndSkills = [
  { title: "HTML", icon: SiHtml5, color: "#E34F26" },
  { title: "CSS", icon: SiCss3, color: "#1572B6" },
  { title: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { title: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { title: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { title: "React", icon: SiReact, color: "#61DAFB" },
  { title: "React-Redux", icon: SiRedux, color: "#764ABC" },
  { title: "Angular", icon: SiAngular, color: "#DD0031" },
  { title: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
];

const tools = [
  { title: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
  { title: "Git", icon: SiGit, color: "#F05032" },
  { title: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { title: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  { title: "Vite", icon: SiVite, color: "#646CFF" },
  { title: "Chrome DevTools", icon: SiGooglechrome, color: "#4285F4" },
];

export const SkillsToolsSection = () => {
  return (
    <section id="skills-tools">
      <div className="py-4 mt-12">
        <div className="container">
          <SectionHeader
            eyebrow="Technical Mastery"
            title="Skills & Tools That Empower My Creations"
            description="A glimpse into the technologies and tools I leverage to craft seamless and innovative web experiences."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 my-14">
            <Card className="h-auto p-6 shadow-lg bg-gray-900 overflow-hidden">
              <CardHeader
                title="Front-End Skills"
                description="These are the technologies I use to build web applications."
                className="mb-6 text-white"
              />
              <div className="relative w-full min-h-[200px] bg-gray-800/90 rounded-md overflow-hidden p-4">
                <div className="grid grid-cols-2 gap-4">
                  {frontEndSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <Draggable key={index} bounds="parent">
                        <div
                          className="flex items-center justify-center gap-4 px-4 py-2 bg-gray-700 rounded-lg shadow-lg cursor-move"
                          style={{ transition: "all 0.2s ease" }}
                        >
                          <Icon size={32} color={skill.color} aria-hidden />
                          <span className="text-white text-sm">{skill.title}</span>
                        </div>
                      </Draggable>
                    );
                  })}
                </div>
              </div>
            </Card>

            <Card className="h-auto p-6 shadow-lg bg-gray-900 overflow-hidden">
              <CardHeader
                title="Tools"
                description="Here are the tools I use to streamline my development workflow."
                className="mb-6 text-white"
              />
              <div className="relative w-full min-h-[200px] bg-gray-800/90 rounded-md overflow-hidden p-4 flex items-center justify-center">
                <div className="flex flex-wrap gap-4 justify-center">
                  {tools.map((tool, index) => {
                    const Icon = tool.icon;
                    return (
                      <Draggable key={index} bounds="parent">
                        <div
                          className="flex items-center justify-center gap-4 px-4 py-2 bg-gray-700 rounded-lg shadow-lg cursor-move"
                          style={{ transition: "all 0.2s ease" }}
                        >
                          <Icon size={32} color={tool.color} aria-hidden />
                          <span className="text-white text-sm">{tool.title}</span>
                        </div>
                      </Draggable>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
