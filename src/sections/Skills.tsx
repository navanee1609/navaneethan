"use client";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";
import Draggable from "react-draggable"; // For drag functionality
import Image from "next/image"; // Import the Next.js Image component
import { SectionHeader } from "./SectionHeader";

// Data for Front-End Skills with SVG Links
const frontEndSkills = [
  { title: "HTML", imageUrl: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
  { title: "CSS", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  { title: "Bootstrap", imageUrl: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" },
  { title: "Tailwind", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { title: "JavaScript", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" },
  { title: "React", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { title: "React-Redux", imageUrl: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" },
  { title: "Next.js", imageUrl: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" },
];

// Data for Tools with SVG Links
const tools = [
  { title: "VS Code", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
  { title: "Git", imageUrl: "https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png" },
  { title: "GitHub", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { title: "Netlify", imageUrl: "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" },
  { title: "Vite", imageUrl: "https://vitejs.dev/logo.svg" },
  { title: "Chrome DevTools", imageUrl: "https://seeklogo.com/images/G/google-chrome-dev-logo-375457E020-seeklogo.com.png" },
];

export const SkillsToolsSection = () => {
  return (
    <section id="skills-tools">
      <div className="py-20">
        <div className="container">
          <SectionHeader 
            eyebrow="Technical Mastery" 
            title="Skills & Tools That Empower My Creations" 
            description="A glimpse into the technologies and tools I leverage to craft seamless and innovative web experiences." 
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 my-14">
            {/* Front-End Skills Card */}
            <Card className="h-auto p-6 shadow-lg bg-gray-900 overflow-hidden">
              <CardHeader
                title="Front-End Skills"
                description="These are the technologies I use to build web applications."
                className="mb-6 text-white"
              />
              <div className="relative w-full min-h-[200px] bg-gray-800/90 rounded-md overflow-hidden p-4">
                <div className="grid grid-cols-2 gap-4">
                  {frontEndSkills.map((skill, index) => (
                    <Draggable key={index} bounds="parent">
                      <div
                        className="flex items-center justify-center gap-4 px-4 py-2 bg-gray-700 rounded-lg shadow-lg cursor-move"
                        style={{
                          transition: "all 0.2s ease",
                        }}
                      >
                        <Image 
                          src={skill.imageUrl} 
                          alt={`${skill.title} logo`} 
                          width={32} 
                          height={32} 
                          loader={({ src }) => src} // Handle external images
                          priority={index < 4} // Prioritize above-the-fold images
                        />
                        <span className="text-white text-sm">{skill.title}</span>
                      </div>
                    </Draggable>
                  ))}
                </div>
              </div>
            </Card>

            {/* Tools Card */}
            <Card className="h-auto p-6 shadow-lg bg-gray-900 overflow-hidden">
              <CardHeader
                title="Tools"
                description="Here are the tools I use to streamline my development workflow."
                className="mb-6 text-white"
              />
              <div className="relative w-full min-h-[200px] bg-gray-800/90 rounded-md overflow-hidden p-4 flex items-center justify-center">
                <div className="flex flex-wrap gap-4 justify-center">
                  {tools.map((tool, index) => (
                    <Draggable key={index} bounds="parent">
                      <div
                        className="flex items-center justify-center gap-4 px-4 py-2 bg-gray-700 rounded-lg shadow-lg cursor-move"
                        style={{
                          transition: "all 0.2s ease",
                        }}
                      >
                        <Image 
                          src={tool.imageUrl} 
                          alt={`${tool.title} logo`} 
                          width={32} 
                          height={32} 
                          loader={({ src }) => src} // Handle external images
                          priority={index < 4} // Prioritize above-the-fold images
                        />
                        <span className="text-white text-sm">{tool.title}</span>
                      </div>
                    </Draggable>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};