"use client"
import Image from "next/image"; 
import ArrowIcon from "@/assets/icons/arrow-down.svg"; // Importing an arrow icon
import grainImage from "@/assets/images/grain.jpg"; // Importing a grain texture image
import StartIcon from "@/assets/icons/star.svg"; // Importing a star icon
import { HeroOrbit } from "@/components/HeroOrbit"; // Importing a custom component for orbit animations
import SparkleIcon from "@/assets/icons/sparkle.svg"; // Importing a sparkle icon
import Navanee from "@/assets/images/Navanee.png"
import { faArrowDown, faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
// import NavaneethanResume from "../../public/Navaneethan_resume.pdf";
export const HeroSection = () => {
  // Function to scroll to the contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const [resumeModalVisible, setResumeModalVisible] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const resumeUrl =
    "https://drive.google.com/file/d/10gFsIBaL8r8K8BQGxeXboBcyvJWmL8zx/view?usp=sharing"; // Google Drive view link

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (resumeModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [resumeModalVisible]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=10gFsIBaL8r8K8BQGxeXboBcyvJWmL8zx"; // Updated direct download link
    link.setAttribute("download", "Navaneethan_KV.pdf"); // Ensures file is downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setResumeModalVisible(false);
  };
  

  const handleViewResume = () => {
    setShowResume(true);
  };

  const closeModal = () => {
    setResumeModalVisible(false);
    setShowResume(false);
  };

  

  return (
    <section id="home">
      <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
        {/* Masking background with gradient for visual effect */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
            maskMode: "alpha",
          }}
        >
          {/* Background grain texture */}
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>

          {/* Multiple animated hero rings */}
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>

          {/* Adding orbiting icons using HeroOrbit component */}
          <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
            <SparkleIcon className="w-2 h-2 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="6s">
            <SparkleIcon className="w-2 h-2 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
            <div className="w-2 h-2 rounded-full bg-emerald-300/20"></div>
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s">
            <SparkleIcon className="w-2 h-2 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
            <StartIcon className="w-3 h-3 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
            <StartIcon className="w-2 h-2 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
            <div className="w-2 h-2 rounded-full bg-emerald-300/20"></div>
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="6s">
            <SparkleIcon className="w-3 h-3 text-emerald-300/20" />
          </HeroOrbit>

          {/* Adding plain circular elements */}
          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
            <div className="w-3 h-3 rounded-full bg-emerald-300/20"></div>
          </HeroOrbit>
          
          <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
            <StartIcon className="w-7 h-7 text-emerald-300" />
          </HeroOrbit>
        </div>

        {/* Main content container */}
        <div className="container">
          <div className="flex flex-col items-center">
            <Image
              src={Navanee}
              className="size-[200px] rounded-full object-cover object-top"
              alt="Navaneethan"
            />
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 w-2.5 h-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="text-sm font-medium">Front End Developer | Perfectionist  </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Navaneethan KV
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              Front-End Developer who builds responsive, performance-driven websites with clean code and a keen eye for detail.
            </p>

          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            {/* Explore my work Button */}
            <div className="relative">
      {/* Explore my work Button */}
      <motion.a
        onClick={() => setResumeModalVisible(true)}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-20 cursor-pointer"
      >
        <span className="font-semibold">View Resume</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </motion.a>

      {/* Modal */}
      {isMounted &&
        createPortal(
      <AnimatePresence mode="wait">
        {resumeModalVisible && (
          <motion.div
            key="resume-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Side Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.5 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full sm:w-[480px] lg:w-[520px] bg-gray-800 border-l border-white/20 shadow-2xl shadow-black/80 flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-300/60 via-sky-400/60 to-emerald-300/60" />

              {/* Top bar */}
              <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-300 to-sky-400 opacity-50 blur-sm" />
                    <div className="relative w-9 h-9 rounded-full bg-gray-900 border border-white/20 flex items-center justify-center overflow-hidden">
                      <Image src={Navanee} alt="Navaneethan" fill className="object-cover object-top" sizes="36px" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight">Navaneethan KV</h3>
                    <p className="text-[10px] text-emerald-300/70">Resume</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-300/30 rounded-lg text-xs text-emerald-300 hover:text-emerald-200 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faArrowDown} className="text-[10px]" />
                    <span className="font-medium hidden sm:inline">Download</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/50 hover:text-white transition-all duration-300"
                    onClick={closeModal}
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-xs" />
                  </motion.button>
                </div>
              </div>

              {/* Resume Image */}
              <div className="relative z-10 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                <div className="p-6">
                  <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-gray-900/70 shadow-lg shadow-black/40">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-300/60 via-sky-400/60 to-emerald-300/60 z-10" />
                    <Image
                      src="/Navaneethan_Resume.jpg"
                      alt="Resume"
                      width={800}
                      height={1132}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Bottom hint */}
              <div className="relative z-10 px-6 py-3 border-t border-white/10 text-center">
                <p className="text-[10px] text-white/25 tracking-wider">Click outside or swipe right to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      , document.body)}

    </div>



            {/* Let's Connect Button */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-20"
              onClick={handleScrollToContact} // Scroll to contact section
            >
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

