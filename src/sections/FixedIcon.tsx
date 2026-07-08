'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import SparkleIcon from "@/assets/icons/star.svg";
import Navanee from "@/assets/images/Navanee.png"
import grainImage from "@/assets/images/grain.jpg"
export const FixedChatIcon = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isModalOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-[9999] flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6 pointer-events-none"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="relative w-full sm:w-[380px] bg-gray-800 border border-white/20 rounded-3xl shadow-2xl shadow-black/60 overflow-hidden pointer-events-auto"
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                />

                <motion.button
                  whileHover={{ scale: 1.08, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/50 hover:text-white transition-all duration-300 cursor-pointer"
                  onClick={closeModal}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                <div className="relative z-10 p-6">
                  {/* IG-style Header Row */}
                  <div className="flex flex-wrap items-start gap-4 mb-5">
                    {/* Avatar with story ring */}
                    <div className="relative shrink-0">
                      <div className="absolute -inset-[2px] rounded-full bg-gradient-to-tr from-emerald-300 via-emerald-400 to-sky-400" />
                      <div className="relative w-[68px] h-[68px] rounded-full overflow-hidden border-[2.5px] border-emerald-500/40  bg-gradient-to-br from-[#1a1a2e] to-[#0f3460]">
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

                    {/* Name + Company + Contact */}
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <h2 className="text-[17px] font-bold text-white tracking-tight">Navaneethan Vetriselvan</h2>
                        <svg className="w-4 h-4 text-[#0095F6] shrink-0" viewBox="0 0 24 24" fill="none">
                          <path d="M12 1L13.5 4.5L17 3.5L16 7L20 7.5L17.5 10.5L21 13L17.5 14.5L19 18L15.5 17.5L14 21L12 18.5L10 21L8.5 17.5L5 18L6.5 14.5L3 13L6.5 10.5L4 7.5L8 7L7 3.5L10.5 4.5L12 1Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
                          <path d="M17 9L11 15L7 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-[13px] text-white/50 leading-snug mb-1.5">
                        Front-End Developer (Angular | React.js) @ Agilysys
                      </p>
                      <div className="flex items-center gap-1.5 text-[12px] text-white/30">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span>Chennai, Tamil Nadu, India</span>
                      </div>
                    </div>

                    <div className="mt-1 grid w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-2">
                      <button
                        onClick={() => window.location.href = 'tel:6380939303'}
                        className="group/call inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-100 shadow-[0_0_18px_rgba(52,211,153,0.08)] transition-all duration-300 hover:border-emerald-300/40 hover:bg-emerald-400/15 hover:text-white"
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
                        className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.08)] transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/15 hover:text-white"
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-gray-950 transition-transform duration-300 hover:rotate-12">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 7.5-9.75-7.5" />
                          </svg>
                        </span>
                        <span className="truncate tracking-wide">navaneethanvs18@gmail.com</span>
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

                  <div className="mb-6 overflow-hidden rounded-2xl border border-emerald-400/10 bg-white/[0.03] p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200/70">
                        Available for UI work
                      </span>
                    </div>
                    <p className="text-[13px] leading-[1.65] text-white/[0.58]">
                      I shape fast, responsive product screens with clean component systems,
                      motion details, and production-ready front-end craft.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['React', 'Angular', 'TypeScript', 'Agilysys'].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-medium text-white/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Action Buttons */}
                      <a
                    href="https://www.linkedin.com/in/navaneethan-k-v-546a9025b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-full gap-3 px-6 py-4 bg-gradient-to-r from-[#0077b5]/20 via-[#0077b5]/10 to-[#0077b5]/20 hover:from-[#0077b5]/30 hover:via-[#0077b5]/20 hover:to-[#0077b5]/30 border border-[#0077b5]/30 hover:border-[#0077b5]/50 rounded-2xl transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0077b5]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <FaLinkedin className="w-6 h-6 text-[#0077b5] relative z-10" />
                    <span className="text-sm font-semibold text-white/90 group-hover:text-white relative z-10 transition-colors">Connect on LinkedIn</span>
                    <svg className="w-4 h-4 text-white/30 group-hover:text-[#0077b5] group-hover:translate-x-1 transition-all duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  {/* Bottom Note */}
                  <p className="text-center text-[10px] text-white/15 mt-4 tracking-wider uppercase">Typically replies within 24 hours</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={openModal}
        onMouseEnter={openModal}
        onFocus={openModal}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative group cursor-pointer"
        aria-haspopup="dialog"
        aria-expanded={isModalOpen}
      >
        <div className="absolute -inset-4 rounded-full border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-700 animate-[spin_8s_linear_infinite]" />
        <div className="absolute -inset-8 rounded-full border border-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-700 animate-[spin_12s_linear_infinite_reverse]" />
        <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl group-hover:bg-emerald-500/30 transition-all duration-500" />
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] border border-emerald-500/30 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 group-hover:border-emerald-500/50 transition-all duration-300 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10" />
          <SparkleIcon className="w-7 h-7 text-emerald-400 relative z-10" />
          <motion.div
  className="absolute inset-1 z-20 pointer-events-none"
  animate={{ rotate: 360 }}
  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
>
  <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#1a1a2e] shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
</motion.div>
        </div>
      </motion.button>
    </div>
  );
};
