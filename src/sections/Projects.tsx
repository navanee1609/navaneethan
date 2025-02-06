import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/Card";
import retrorift from "@/assets/images/retrorift.png"
import cque from "@/assets/images/cque.png"
import haleon from "@/assets/images/haleon.png"
import shopcart from "@/assets/images/shopcart.png"
import sbg from "@/assets/images/sbg.png"
import notekeeper from "@/assets/images/notekeeper.png"
import cookio from "@/assets/images/cookio.png"
import nutshellImage from "@/assets/images/nutshellImage.png"
const portfolioProjects = [
  {
    company: "Spritle Software",
    year: "2024",
    title: "Haleon",
    results: [
      { title: "Developed the frontend for Haleon's e-commerce platform with brands like Eno, Iodex, and Centrum." },
      { title: "Built admin features for product management, order tracking, and user management." },
      { title: "Integrated modern web technologies for an interactive, dynamic user experience." },
    ],
    link: "https://haleon-test.spritle.com/products",
    image: haleon,
    techStack: ["HTML","CSS","Bootstrap","Javascript", "ruby-on-rails","Spree"],
  },
  {
    company: "Spritle Software",
    year: "2024",
    title: "CQUE.AI",
    results: [
      { title: "Created a professional portfolio site with modern design principles and smooth navigation." },
      { title: "Implemented interactive JavaScript for dynamic and engaging browsing experience." },
      { title: "Deployed the site with Vercel to optimize performance and ensure device compatibility." },
    ],
    link: "https://cque-archie.vercel.app/",
    image: cque,
    techStack: ["Reactjs","Tailwind CSS","Magic UI"]
  },
  {
    company: "Spritle Software",
    year: "2024",
    title: "SBG - Teknomaju",
    results: [
      { title: "Built a responsive, user-centric interface to serve diverse audiences across devices." },
      { title: "Integrated AI and cloud-native solutions to highlight the company's DevOps offerings." },
      { title: "Implemented business-driven features to enhance user engagement with detailed service exploration." },
    ],
    link: "https://teknomaju.my/",
    image: sbg,
    techStack: ["HTML","CSS","Bootstrap","Javascript"],
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "RetroRift - Where Gaming Nostalgia Meets Modern Excitement!",
    results: [
      { title: "Brought together a diverse game library, live events, and exclusive content for gamers." },
      { title: "Blended retro nostalgia with modern trends in a user-friendly interface for easy navigation." },
      { title: "Built a vibrant community experience to unite gamers in an engaging and exciting platform." },
    ],
    link: "https://retrorift-gaming-paradise.netlify.app/",
    image: retrorift,
    techStack: ["React","React-Redux", "RAWG.API - Axios"],
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "Shop Cart - Where Every Click Unveils a Seamless Shopping Experience.",
    results: [
      { title: "Developed Shop Cart with React and Firebase for secure user authentication and smooth shopping." },
      { title: "Created a responsive design with collaborative wishlists and a streamlined checkout process." },
      { title: "Used intuitive interfaces to deliver an enhanced online shopping experience with modern technology." },
    ],
    link: "https://shopcart-ecommerce-project.netlify.app/",
    image: shopcart,
    techStack: ["Reactjs", "Bootstrap"],
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "Note Keeper - CRUD Operations in JavaScript",
    results: [
      { title: "Developed a JavaScript app that allows users to create, read, update, and delete notes." },
      { title: "Styled the app with CSS to create a visually appealing and user-friendly interface." },
      { title: "Demonstrated JavaScript skills with a fully functional CRUD application for note management." },
    ],
    link: "https://notekeeper-dailynotes.netlify.app/",
    image: notekeeper,
    techStack: ["HTML","CSS","Javascript"],
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "Cook.io",
    results: [
      { title: "Showcased skills in HTML, CSS, JavaScript, and Edamam API to build a recipe discovery platform." },
      { title: "Integrated the Edamam API for interactive recipe searches, filtering, and shopping list creation." },
      { title: "Planned future features, including user accounts, for a more personalized and advanced experience." },
    ],
    link: "https://cookio-recipehub.netlify.app/",
    image: cookio,
    techStack: ["HTML", "CSS", "Javascript", "Edaman API"],
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
    <section id="projects" className="pb-16">
      <div className="container flex flex-col items-center text-center mb-16">
        {/* Me in a Nutshell Section */}
        <Image src={nutshellImage} alt="Me in a Nutshell" className="w-32 h-32" />
        <h2 className="mt-6 text-3xl font-bold">Me in a Nutshell</h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          Outside the world of pixels and vectors, I am a full-time dog mom and explorer.
          I love spending my time of leisure traveling and meeting new people.
          Practicing yoga is my safe space; I love the peace and quiet it gives me.
          Art has been another enriching aspect of my life. Whether it&apos;s exploring local galleries during my travels
          or finding inspiration from the landscapes and cultures I encounter, art has offered me a unique perspective on the world!
        </p>
      </div>
      <div className="container">
      <SectionHeader
  eyebrow="Real-World Impact"
  title="Showcasing My Featured Projects"
  description="Discover how I bring ideas to life, creating seamless and transformative digital experiences."
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
                      <li className="flex gap-2 text-md md:text-base text-white/50" key={index}>
                        <CheckIcon className="size-8 md:size-10" />
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
                    className="mt-8 -mb-4 rounded-2xl md:-mb-0 lg:mt-0 lg:absolute h-full lg:w-auto lg:max-w-none"
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
