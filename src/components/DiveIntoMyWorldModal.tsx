"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedin } from "react-icons/fa";
import Navanee from "@/assets/images/Navanee.png";
import grainImage from "@/assets/images/grain.jpg";

interface DiveIntoMyWorldModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiveIntoMyWorldModal = ({ isOpen, onClose }: DiveIntoMyWorldModalProps) => {
  const [isResumeExpanded, setIsResumeExpanded] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsResumeExpanded(false);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsResumeExpanded(false);
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="dive-into-my-world-modal"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={handleClose}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dive-modal-title"
            className={`bg-gray-900 border border-white/20 rounded-3xl p-5 sm:p-7 w-full ${isResumeExpanded ? "max-w-3xl max-h-[90vh]" : "max-w-lg"
              } relative z-10 overflow-hidden shadow-2xl shadow-black/90 transition-all duration-500 ease-out after:absolute after:inset-0 after:border-2 after:border-white/10 after:rounded-3xl after:pointer-events-none`}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background grain texture */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: `url(${grainImage.src})`,
                zIndex: -1,
              }}
            />

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.08, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
              onClick={handleClose}
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faTimes} className="text-sm" />
            </motion.button>

            <AnimatePresence mode="wait">
              {!isResumeExpanded ? (
                <motion.div
                  key="modal-story-view"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header Section */}
                  <div className="flex items-center gap-4 mb-6 pr-8">
                    <div className="relative shrink-0 select-none">
                      <motion.div
                        className="absolute -inset-[2px] rounded-full bg-gradient-to-tr from-emerald-300 via-sky-400 to-emerald-300"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-900 bg-gray-950">
                        <Image
                          src={Navanee}
                          alt="Navaneethan Vetriselvan"
                          fill
                          className="object-cover object-top"
                          sizes="64px"
                          priority
                        />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-[10px] font-bold text-emerald-300 uppercase tracking-widest mb-1.5">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                        ✨ Why Work With Me
                      </div>
                      <h2 id="dive-modal-title" className="text-xl font-bold text-white tracking-tight flex items-center gap-1.5 truncate">
                        Navaneethan Vetriselvan
                        <span className="flex h-4 w-4 rounded-full bg-emerald-500 items-center justify-center text-white shrink-0 shadow-[0_0_6px_rgba(16,185,129,0.4)]">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      </h2>
                      <p className="text-[12.5px] text-white/50 truncate">
                        Front-End Developer <span className="text-emerald-300 font-medium">@ Agilysys</span>
                      </p>
                    </div>
                  </div>

                  {/* Un-boxed Fluid Editorial Story */}
                  <div className="space-y-4 mb-6 text-white/80 text-[13px] leading-relaxed max-h-[310px] overflow-y-auto pr-1 select-text">
                    <p>
                      I bring a background in <span className="text-white font-semibold">Mechanical Engineering</span> to front-end development. That engineering mindset means I break down UI problems systematically, optimizing for <span className="text-emerald-300 font-bold underline decoration-emerald-400/40 underline-offset-4">performance first</span> and visual refinement second — because a stunning interface is worthless if it&apos;s slow.
                    </p>

                    <p>
                      Currently at <span className="text-cyan-300 font-semibold">Agilysys</span>, I build fast, production-ready product screens with <span className="text-white font-medium">Angular</span> and <span className="text-white font-medium">React.js</span>. On past projects, this focus resulted in a <span className="text-emerald-300 font-bold">20% reduction in page load times</span>.
                    </p>

                    {/* Minimal Accent Key Highlights (No Boxes!) */}
                    <div className="pt-2 pb-1 space-y-2.5 border-l-2 border-emerald-400/40 pl-3.5 my-3">
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-300 font-bold text-sm select-none">⚡</span>
                        <p className="text-[12.5px] text-white/90">
                          <strong className="text-white font-semibold">Speed & Architecture:</strong> Modular component systems built for scalability and fast render cycles.
                        </p>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="text-cyan-300 font-bold text-sm select-none">🎨</span>
                        <p className="text-[12.5px] text-white/90">
                          <strong className="text-white font-semibold">Modern Aesthetics:</strong> Responsive layouts, dark glassmorphism, and micro-animations with Framer Motion.
                        </p>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="text-purple-300 font-bold text-sm select-none">🤝</span>
                        <p className="text-[12.5px] text-white/90">
                          <strong className="text-white font-semibold">Sprint Ready:</strong> Independent execution, REST API integrations, and daily Agile teamwork.
                        </p>
                      </div>
                    </div>

                    <p className="text-[12px] text-white/40 italic">
                      Always open for a tech chat or virtual coffee to discuss UI architecture and collaboration! ☕
                    </p>
                  </div>

                  {/* Quick Action Toolbar & Social */}
                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    <div className="flex flex-wrap gap-2">
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        onClick={() => (window.location.href = "tel:6380939303")}
                        className="flex-1 min-w-[95px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-emerald-400/30 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-300 text-[11px] font-bold transition-all cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-1.068-.63-2.02-1.587-2.449a15.34 15.34 0 01-4.26-2.95 15.34 15.34 0 01-2.95-4.26c-.429-.957-1.381-1.587-2.449-1.587H6.75a2.25 2.25 0 00-2.25 2.25v1.372z" />
                        </svg>
                        <span>Call Me</span>
                      </motion.button>

                      <motion.a
                        whileTap={{ scale: 0.96 }}
                        href="mailto:navaneethanvs18@gmail.com"
                        className="flex-1 min-w-[95px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 text-[11px] font-bold transition-all"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 7.5-9.75-7.5" />
                        </svg>
                        <span>Email Me</span>
                      </motion.a>

                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setIsResumeExpanded(true)}
                        className="flex-1 min-w-[110px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-purple-400/30 bg-purple-400/10 hover:bg-purple-400/20 text-purple-300 text-[11px] font-bold transition-all cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <span>View Resume</span>
                      </motion.button>
                    </div>

                    {/* LinkedIn CTA Button */}
                    <motion.a
                      whileTap={{ scale: 0.98 }}
                      href="https://www.linkedin.com/in/navaneethan-k-v-546a9025b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 hover:from-emerald-500/20 hover:to-sky-500/20 border border-white/10 hover:border-emerald-300/40 rounded-xl transition-all duration-300 overflow-hidden shadow-sm"
                    >
                      <FaLinkedin className="w-4 h-4 text-sky-400 relative z-10" />
                      <span className="text-[12px] font-bold text-white relative z-10">Connect on LinkedIn</span>
                    </motion.a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="modal-resume-view"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full max-h-[560px]"
                >
                  {/* Resume View Header */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10 pr-7 sm:pr-10">
                    <div className="flex items-center gap-2 min-w-0">
                      <button
                        onClick={() => setIsResumeExpanded(false)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-bold text-white/80 hover:text-white transition-colors duration-200 cursor-pointer shrink-0"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        <span>Back</span>
                      </button>

                      <h3 className="text-[13.5px] sm:text-[14px] font-bold text-white tracking-tight flex items-center gap-1.5 whitespace-nowrap truncate">
                        <span className="hidden sm:flex h-5 w-5 rounded-full bg-cyan-500/20 items-center justify-center text-cyan-300 shrink-0">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                        </span>
                        Resume
                      </h3>
                    </div>

                    {/* Icon-Only Action Buttons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href="/Navaneethan_Resume.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open Full Screen"
                        aria-label="Open Full Screen"
                        className="w-8 h-8 flex items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 transition-all duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>

                      <a
                        href="/Navaneethan_Resume.jpg"
                        download="Navaneethan_Resume.jpg"
                        title="Download Resume"
                        aria-label="Download Resume"
                        className="w-8 h-8 flex items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-300 transition-all duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* High Resolution Image View Container */}
                  <div className="relative flex-1 w-full rounded-2xl border border-white/10 bg-gray-950/70 p-2 flex flex-col items-center overflow-y-auto max-h-[580px] scrollbar-thin shadow-inner">
                    <Image
                      src="/Navaneethan_Resume.jpg"
                      alt="Navaneethan Vetriselvan Resume"
                      width={900}
                      height={1260}
                      className="w-full h-auto object-contain rounded-xl shadow-lg transition-transform duration-500 hover:scale-[1.01]"
                      priority
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
