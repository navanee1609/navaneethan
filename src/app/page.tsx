import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";

export default function Home() {
  return (
    <div>
     {/* Adding navbar */}
     <Header/>
     {/* Importing hero Section */}
     <HeroSection/>
    </div>
  );
}
