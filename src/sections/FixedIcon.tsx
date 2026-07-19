'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import SparkleIcon from "@/assets/icons/star.svg";
import Navanee from "@/assets/images/Navanee.png";
import grainImage from "@/assets/images/grain.jpg";

export const FixedChatIcon = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    // Show tooltip after 1.5 seconds and keep it visible while modal is closed
    const timer = setTimeout(() => {
      if (!isModalOpen) setShowTooltip(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [isModalOpen]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isModalOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Floating Tooltip */}
      <AnimatePresence>
        {showTooltip && !isModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-20 right-0 bg-gray-900 border border-white/20 rounded-2xl px-3.5 py-2 text-[12px] font-semibold text-white shadow-xl shadow-black/40 flex items-center gap-1.5 whitespace-nowrap z-50 cursor-pointer pointer-events-auto"
            onClick={openModal}
            whileHover={{ y: -2 }}
          >
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-gray-900 border-r border-b border-white/20 rotate-45" />
            <span className="flex h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>Connect with me! 👋</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal Dialog */}
            <motion.div
              className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-[9999] flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6 pointer-events-none"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="relative w-full sm:w-[380px] bg-gray-800 border border-white/20 rounded-3xl shadow-2xl shadow-black/60 overflow-hidden pointer-events-auto after:absolute after:inset-0 after:border-2 after:border-white/20 after:rounded-3xl after:pointer-events-none after:z-[-1]"
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Background Grain */}
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
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white transition-all duration-300 cursor-pointer"
                  onClick={closeModal}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                <div className="relative z-10 p-6">
                  {/* Header Row */}
                  <div className="flex flex-col items-start gap-4 mb-5">
                    <div className="flex items-start gap-4 w-full">
                      {/* Avatar with animated story ring */}
                      <div className="relative shrink-0 select-none">
                        <motion.div 
                          className="absolute -inset-[2px] rounded-full bg-gradient-to-tr from-emerald-300 via-sky-400 to-emerald-300"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="relative w-[68px] h-[68px] rounded-full overflow-hidden border-[2.5px] border-gray-800 bg-gray-900 shadow-md">
                          <Image
                            src={Navanee}
                            alt="Navaneethan Vetriselvan"
                            fill
                            className="object-cover object-top"
                            sizes="68px"
                            priority
                          />
                        </div>
                      </div>

                      {/* Name + Verified Badge + Title */}
                      <div className="flex-1 min-w-0 pt-1">
                        <div className="flex items-center gap-1.5 mb-1">
                          <h2 className="text-[17px] font-bold text-white tracking-tight">Navaneethan Vetriselvan</h2>
                          <span className="flex h-4 w-4 rounded-full bg-emerald-500 items-center justify-center text-white shrink-0 shadow-[0_0_6px_rgba(16,185,129,0.4)] select-none">
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        </div>
                        
                        <p className="text-[12px] leading-relaxed text-white/50 mb-2.5">
                          Front-End Developer (Angular | React.js) <span className="text-emerald-300 font-medium">@ Agilysys</span>
                        </p>

                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/5 text-[10px] text-white/40">
                          <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          <span>Chennai, India</span>
                        </div>
                      </div>
                    </div>

                    {/* Direct Call / Email pills */}
                    <div className="flex flex-wrap gap-2 w-full mt-1">
                      <button
                        onClick={() => window.location.href = 'tel:6380939303'}
                        className="group/call flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 py-2 text-[10.5px] font-semibold text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.04)] transition-all duration-300 hover:border-emerald-300/40 hover:bg-emerald-400/10 hover:text-white cursor-pointer"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-300 text-gray-950 transition-transform duration-300 group-hover/call:rotate-12">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.4}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-1.068-.63-2.02-1.587-2.449a15.34 15.34 0 01-4.26-2.95 15.34 15.34 0 01-2.95-4.26c-.429-.957-1.381-1.587-2.449-1.587H6.75a2.25 2.25 0 00-2.25 2.25v1.372z" />
                          </svg>
                        </span>
                        <span className="tracking-wide">6380939303</span>
                      </button>

                      <a
                        href="mailto:navaneethanvs18@gmail.com"
                        className="flex-1 inline-flex min-w-0 items-center justify-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 py-2 text-[10.5px] font-semibold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.04)] transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-white"
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-gray-950 transition-transform duration-300 hover:rotate-12">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 7.5-9.75-7.5" />
                          </svg>
                        </span>
                        <span className="truncate tracking-wide text-[10px]">Email Me</span>
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

                  {/* Availability Block */}
                  <div className="mb-5 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-4 shadow-inner">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                        Available for UI Work
                      </span>
                    </div>
                    
                    <p className="text-[13px] leading-[1.6] text-white/70 mb-4">
                      I shape fast, responsive product screens with clean component systems,
                      motion details, and production-ready front-end craft.
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-300 hover:border-cyan-400/40 transition-colors">
                        React
                      </span>
                      <span className="rounded-full border border-rose-500/20 bg-rose-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-rose-300 hover:border-rose-400/40 transition-colors">
                        Angular
                      </span>
                      <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-blue-300 hover:border-blue-400/40 transition-colors">
                        TypeScript
                      </span>
                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300 hover:border-emerald-400/40 transition-colors">
                        Agilysys
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn CTA Button */}
                  <a
                    href="https://www.linkedin.com/in/navaneethan-k-v-546a9025b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-full gap-2.5 px-6 py-3.5 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 hover:from-emerald-500/20 hover:to-sky-500/20 border border-white/10 hover:border-emerald-300/40 rounded-2xl transition-all duration-300 overflow-hidden shadow-lg shadow-black/25"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <FaLinkedin className="w-5 h-5 text-sky-400 relative z-10" />
                    <span className="text-[13px] font-bold text-white relative z-10">Connect on LinkedIn</span>
                    <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  {/* Bottom Note */}
                  <p className="text-center text-[9px] text-white/20 mt-4 tracking-widest uppercase">Typically replies within 24 hours</p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={openModal}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative group cursor-pointer"
        aria-haspopup="dialog"
        aria-expanded={isModalOpen}
      >
        <div className="absolute -inset-4 rounded-full border border-white/10 group-hover:border-emerald-300/30 transition-all duration-700 animate-[spin_10s_linear_infinite]" />
        <div className="absolute -inset-8 rounded-full border border-sky-400/10 group-hover:border-sky-400/20 transition-all duration-700 animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute inset-0 rounded-full bg-emerald-300/20 blur-xl group-hover:bg-emerald-300/30 transition-all duration-500" />

        <div className="relative w-14 h-14 rounded-full bg-gray-800 border border-white/20 shadow-lg shadow-black/40 group-hover:shadow-emerald-300/20 group-hover:border-emerald-300/40 transition-all duration-300 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/10 to-sky-400/10" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          />
          <SparkleIcon className="w-6 h-6 text-emerald-300 relative z-10" />

          <motion.div
            className="absolute inset-1 z-20 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 border-2 border-gray-800 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
          </motion.div>
        </div>
      </motion.button>
    </div>
  );
};
