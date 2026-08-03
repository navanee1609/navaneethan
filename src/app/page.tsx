import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AiWorkflowSection } from "@/sections/AiWorkflow";
import { Articles } from "@/sections/Article";
import { Timeline } from "@/sections/Timeline";
import { AwardsSection } from "@/sections/Awards";
import { FixedChatIcon } from "@/sections/FixedIcon";

export default function Home() {
  return (
    <div>
     {/* Adding navbar */}
     <Header/>
     {/* Importing hero Section */}
     <HeroSection/>
      {/* Importing About Section */}
      <AboutSection/>
     {/* importing projects section */}
     <ProjectsSection/>
     {/*Importing Tape Section  */}
     <TapeSection/>
     {/* AI Collaboration & Workflow Section */}
     <AiWorkflowSection/>
     {/* Importing article section */}
     <Articles/>
     {/* Importing timeline */}
    <Timeline/>
     {/* Awards & Achievements Section */}
     <AwardsSection />
     {/* Contact Section */}
     <ContactSection/>
     {/* Footer section */}
     <Footer/>
     {/* fixed icon */}
     <FixedChatIcon/>
    </div>
  );
}
