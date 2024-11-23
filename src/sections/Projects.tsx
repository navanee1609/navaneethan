import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Spritle",
    year: "2024",
    title: "proj 3",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "",
    image: darkSaasLandingPage,
    techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    company: "Spritle",
    year: "2024",
    title: "Proj 2",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "",
    image: lightSaasLandingPage,
    techStack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    company: "Spritle",
    year: "2024",
    title: "proj 1",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "",
    image: aiStartupLandingPage,
    techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
  },
];

// Tech colors array (will repeat)
const techColors = [
  { bg: "bg-[#AFD5F0]", text: "text-[#085063]" }, // Dark teal for blue
  { bg: "bg-[#F8C8DC]", text: "text-[#9B3253]" }, // Dark burgundy for pink
  { bg: "bg-[#FEDD9E]", text: "text-[#7A4C11]" }, // Dark amber for yellow
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real world results"
          description="Elevating the Digital Experience."
          title="Featured Projects"
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-14">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              key={project.title}
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-20">
                <div className="lg:pb-16">
                  <div className="flex justify-between">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result, index) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50" key={index}>
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Display */}
                  <div className="mt-6 flex gap-4 flex-wrap">
                    {project.techStack.map((tech, index) => {
                      const colorIndex = index % techColors.length; // To repeat the colors
                      return (
                        <span
                          key={index}
                          className={`text-xs font-semibold px-4 py-1 rounded-full ${techColors[colorIndex].bg} ${techColors[colorIndex].text}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Live Site</span>
                      <ArrowUpIcon className="size-4" />
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
