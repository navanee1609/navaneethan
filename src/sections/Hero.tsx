"use client"
import Image from "next/image"; 
import ArrowIcon from "@/assets/icons/arrow-down.svg"; // Importing an arrow icon
import grainImage from "@/assets/images/grain.jpg"; // Importing a grain texture image
import StartIcon from "@/assets/icons/star.svg"; // Importing a star icon
import { HeroOrbit } from "@/components/HeroOrbit"; // Importing a custom component for orbit animations
import SparkleIcon from "@/assets/icons/sparkle.svg"; // Importing a sparkle icon
import Navaneethan from "@/assets/images/Navaneethan.png"
import { faArrowDown, faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

  const resumeUrl =
    "https://drive.google.com/file/d/1ImDljm1VBgIdV9Airxm8VHmd-UEo12pG/view"; // Google Drive view link

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
    link.href =
      "https://drive.google.com/uc?export=download&id=1ImDljm1VBgIdV9Airxm8VHmd-UEo12pG"; // Direct download link
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
              src={Navaneethan}
              className="size-[200px] rounded-full"
              alt="Navaneethan"
            />
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 w-2.5 h-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="text-sm font-medium">Front End Developer</div>
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Navaneethan KV
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
  Passionate Front End Developer focused on creating responsive, user-friendly websites with clean code, performance optimization, and seamless digital experiences.
</p>

          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            {/* Explore my work Button */}
            <div className="relative">
      {/* Explore my work Button */}
      <a
        onClick={() => setResumeModalVisible(true)}
        className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-20 cursor-pointer"
      >
        <span className="font-semibold">Explore my work</span>
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
      </a>

      {/* Modal */}
      {resumeModalVisible && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 rounded-2xl p-6 w-full max-w-lg relative mx-4 shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background grain image */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `url(${grainImage.src})`,
                zIndex: -1,
              }}
            ></div>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl text-black" />
            </button>

            {/* Modal Title */}
            <h2 className="text-lg font-semibold text-white text-center mb-4">
              {showResume ? "Resume Preview" : "What would you like to do?"}
            </h2>

            {/* Buttons Row */}
            {!showResume ? (
              <div className="flex gap-4 justify-center">
                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition font-medium"
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                  Download Resume
                </button>

                {/* View Button */}
                <button
                  onClick={handleViewResume}
                  className="flex items-center gap-2 px-4 py-2 border border-white text-white rounded-lg hover:bg-white/10 transition font-medium"
                >
                  <FontAwesomeIcon icon={faEye} />
                  View Resume
                </button>
              </div>
            ) : (
              <div className="mt-4">
                {/* Resume Opens Directly in Modal */}
                <iframe
  src="/Navaneethan_Resume.pdf"
  className="w-full h-[80vh] rounded-lg border border-white/20"
></iframe>


              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>



            {/* Let's Connect Button */}
            <button
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-20"
              onClick={handleScrollToContact} // Scroll to contact section
            >
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};



