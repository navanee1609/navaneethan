"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home"); // Default to "home"

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollY = window.scrollY + window.innerHeight / 2; // Adjust offset for accurate detection
      let currentSection = "";

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionElement = document.getElementById(section);
        const isLastSection = i === sections.length - 1;

        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;

          if (
            (isLastSection && window.innerHeight + window.scrollY >= document.body.offsetHeight) || // Bottom of page
            (offsetTop <= scrollY && offsetTop + offsetHeight > scrollY)
          ) {
            currentSection = section;
            break;
          }
        }
      }

      // Update active section and URL hash
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        window.history.replaceState(null, "", `#${currentSection}`); // Update URL hash without reload
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="fixed top-3 left-0 right-0 flex justify-center items-center w-full z-10">
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link
          href="#home"
          className={`nav-item px-4 py-2 rounded-full transition-all duration-300 ${
            activeSection === "home" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="#about"
          className={`nav-item px-4 py-2 rounded-full transition-all duration-300 ${
            activeSection === "about" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="#projects"
          className={`nav-item px-4 py-2 rounded-full transition-all duration-300 ${
            activeSection === "projects" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className={`nav-item px-4 py-2 rounded-full transition-all duration-300 ${
            activeSection === "contact" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""
          }`}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
