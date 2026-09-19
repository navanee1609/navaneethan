"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/mobile-logo.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Once set to true, stays true permanently
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const allSections = ["home", "about", "projects", "contact"];
    let lastSection = "";

    const handleScroll = () => {
      // Use getBoundingClientRect for accuracy with sticky children
      let currentSection = "";
      const mid = window.innerHeight / 2;

      for (let i = allSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(allSections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= mid) {
            currentSection = allSections[i];
            break;
          }
        }
      }

      if (!currentSection) currentSection = "home";

      // Only update state & history when section actually changed
      if (currentSection !== lastSection) {
        lastSection = currentSection;
        setActiveSection(currentSection);
        window.history.replaceState(null, "", `#${currentSection}`);
      }

      // Once projects section or beyond is visible → show Contact pill permanently
      const projectsEl = document.getElementById("projects");
      if (projectsEl) {
        const projectsRect = projectsEl.getBoundingClientRect();
        if (projectsRect.top <= mid) {
          setShowContact(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopSections = ["home", "about", "projects"];

  return (
    <header className="fixed top-3 left-0 right-0 flex justify-center items-center w-full z-50">

      {/* ── Mobile Navbar ─────────────────────────────────── */}
      <div className="md:hidden flex flex-col w-[78%] bg-white/30 backdrop-blur-lg rounded-3xl border border-white/20 transition-all duration-300">
        <div className="flex justify-between items-center px-4 py-2">
          <Link href="/" className="text-white text-lg font-semibold">
            <Image src={logo} alt="Logo" width={40} height={30} className="object-contain" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white transition-transform duration-300"
          >
            {isMobileMenuOpen ? <X size={28} /> : <HiMenuAlt4 size={28} />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col">
            {["home", "about", "projects", "contact"].map((section) => {
              const isActive = activeSection === section;
              return (
                <Link
                  key={section}
                  href={`#${section}`}
                  className={`flex items-center justify-between p-3.5 m-1.5 transition-all duration-300 rounded-2xl ${isActive
                      ? "bg-white text-gray-950 font-bold shadow-lg"
                      : "hover:bg-white/10"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span
                    className={
                      isActive
                        ? "text-2xl font-bold tracking-widest text-gray-950"
                        : "text-2xl font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent"
                    }
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                  {isActive && (
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] shrink-0" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Desktop Navbar ─────────────────────────────────── */}
      <nav className="hidden md:flex items-center gap-1 p-1 border border-white/25 rounded-full bg-white/20 backdrop-blur-lg">
        {desktopSections.map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            className={`nav-item px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${activeSection === section
                ? "bg-white text-black"
                : "text-white hover:scale-105 hover:bg-white/20"
              }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}

        {/* Contact pill — slides in once Projects is crossed, never leaves */}
        <AnimatePresence>
          {showContact && (
            <motion.div
              key="contact-pill"
              initial={{ opacity: 0, x: 24, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              style={{ flexShrink: 0 }}
            >
              <Link
                href="#contact"
                className={`nav-item block px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${activeSection === "contact"
                    ? "bg-white text-black"
                    : "text-white hover:scale-105 hover:bg-white/20"
                  }`}
              >
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Command Palette Trigger Badge */}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white/90 hover:text-white transition-all cursor-pointer font-mono ml-1 shadow-sm"
          title="Open Command Palette (Cmd + K)"
        >
          <span className="text-[11px] text-emerald-300 font-extrabold tracking-wide">⌘K</span>
        </button>
      </nav>
    </header>
  );
};