import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg" 
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
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
  },
  {
    company: "spritle",
    year: "2024",
    title: "proj 1",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
          Real-world Results
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">Elevating the Digital Experience.</p>
      <div className="mt-10 md:mt-20 flex flex-col gap-14">
        {portfolioProjects.map((project) => (
          <div
            className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:absolute after:inset-0 after:border-2 after:border-white/20 after:rounded-3xl after:pointer-events-none after:z-[-1] px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-16"
            key={project.title}
          >
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: `url(${grainImage.src})`,
                zIndex: -1, // Ensure background image is below the content
              }}
            ></div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-20" >
              <div className="lg:pb-16">
            <div className="flex justify-between">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl md:text-4xl  md:mt-5">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
            <ul className="flex flex-col gap-4 mt-4">
              {project.results.map((result, index) => (
                <li className="flex gap-2 text-sm md:text-base text-white/50" key={index}>
                  <CheckIcon className="size-5 md:size-6" />
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
            <a href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                <span>View Live Site</span>
                <ArrowUpIcon className="size-4" />
              </button>
            </a>
            </div>
            <div className="relative">
            <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute h-full lg:w-auto lg:max-w-none"  />
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};
