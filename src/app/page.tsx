import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
  return (
    <div>
     {/* Adding navbar */}
     <Header/>
     {/* Importing hero Section */}
     <HeroSection/>
     {/* importing projects section */}
     <ProjectsSection/>
    </div>
  );
}
