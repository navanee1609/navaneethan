"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image"; // Import next/image for logo
import logo from "@/assets/images/mobile-logo.png";
import { CgMenuMotion } from "react-icons/cg";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollY = window.scrollY + window.innerHeight / 2;
      let currentSection = "";

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionElement = document.getElementById(section);
        const isLastSection = i === sections.length - 1;

        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;

          if (
            (isLastSection && window.innerHeight + window.scrollY >= document.body.offsetHeight) ||
            (offsetTop <= scrollY && offsetTop + offsetHeight > scrollY)
          ) {
            currentSection = section;
            break;
          }
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        window.history.replaceState(null, "", `#${currentSection}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <header className="fixed top-3 left-0 right-0 flex justify-center items-center w-full z-10">
      {/* Mobile Navbar & Expanded Menu Together */}
      <div
        className={`md:hidden flex flex-col w-[75%] bg-white/30 backdrop-blur-lg rounded-3xl border border-white/20 transition-all duration-300 ${
          isMobileMenuOpen ? "rounded-3xl" : ""
        }`}
      >
        {/* Top Section (Logo + Hamburger) */}
        <div className="flex justify-between items-center px-4 py-2">
          {/* Logo */}
          <Link href="/" className="text-white text-lg font-semibold">
            <Image
              src={logo} 
              alt="Logo"
              width={30}
              height={30} // Adjust dimensions as needed
              className="object-contain"
            />
          </Link>

          {/* Hamburger Menu */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white transition-transform duration-300">
            {isMobileMenuOpen ? <X size={28} /> : <CgMenuMotion size={28} />}
          </button>
        </div>

        {/* Smoothly Expanding Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col">
            {["home", "about", "projects", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`block text-2xl font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent p-3 m-2 transition-all duration-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop & Tablet Navbar */}
      <nav className="hidden md:flex gap-1 p-1 border border-white/25 rounded-full bg-white/20 backdrop-blur-lg">
        {["home", "about", "projects", "contact"].map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            className={`nav-item px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === section
                ? "bg-white text-black" // Keep this consistent
                : "text-white hover:scale-105 hover:bg-white/20"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </nav>
    </header>
  );
};