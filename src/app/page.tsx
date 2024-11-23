import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { Articles } from "@/sections/Article";

export default function Home() {
  return (
    <div>
     {/* Adding navbar */}
     <Header/>
     {/* Importing hero Section */}
     <HeroSection/>
     {/* importing projects section */}
     <ProjectsSection/>
     {/*Importing Tape Section  */}
     <TapeSection/>
     {/* Importing article section */}
     <Articles/>
     {/* Importing About Section */}
     <AboutSection/>
     {/* Contact Section */}
     <ContactSection/>
     {/* Footer section */}
     <Footer/>
    </div>
  );
}
