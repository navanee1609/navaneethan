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
import { WelcomeToast } from "@/sections/WelcomeToast";

export default function Home() {
  return (
    <div>
      {/* Welcome Toast Notification */}
      <WelcomeToast />
      
      {/* Top Navbar */}
      <Header />
      
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. About Section (Directly below Hero) */}
      <AboutSection />
      
      {/* 3. Featured Projects */}
      <ProjectsSection />
      
      {/* 4. Ticker Tape Section */}
      <TapeSection />
      
      {/* 5. Career Journey & Education Timeline */}
      <Timeline />
      
      {/* 6. Recognition & Awards Section */}
      <AwardsSection />
      
      {/* 7. AI Collaboration & Workflow */}
      <AiWorkflowSection />
      
      {/* 8. Articles & Publications */}
      <Articles />
      
      {/* 9. Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Chat Icon & Modal */}
      <FixedChatIcon />
    </div>
  );
}
