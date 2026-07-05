'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import SparkleIcon from "@/assets/icons/star.svg";
import Navanee from "@/assets/images/Navanee.png"
export const FixedChatIcon = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-xl"
          >
            <motion.div
              className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-[9999] flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full sm:w-[380px] bg-[#13131f]/80 border border-white/[0.08] rounded-3xl shadow-2xl shadow-black/60 overflow-hidden pointer-events-auto"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 rounded-3xl p-[1px] pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/30 via-transparent to-cyan-500/30 opacity-50" />
                </div>

                <div className="absolute -top-16 -right-16 w-32 h-32 bg-emerald-500/20 rounded-full blur-[50px] pointer-events-none animate-pulse" />
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px] pointer-events-none" />

                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                <motion.button
                  whileHover={{ scale: 1.08, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/50 hover:text-white transition-all duration-300 cursor-pointer"
                  onClick={closeModal}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                <div className="relative z-10 p-8">
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-4">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 opacity-60 blur-sm animate-pulse" />

                      {/* ✅ Using your existing Navanee import with Next.js Image */}
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-500/40 bg-gradient-to-br from-[#1a1a2e] to-[#0f3460]">
                        <Image
                          src={Navanee}
                          alt="Navaneethan K V"
                          fill
                          className="object-cover object-top"
                          sizes="80px"
                          priority
                        />
                      </div>

                      {/* Meta Verified Badge */}
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 flex items-center justify-center">
                        <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 1L13.5 4.5L17 3.5L16 7L20 7.5L17.5 10.5L21 13L17.5 14.5L19 18L15.5 17.5L14 21L12 18.5L10 21L8.5 17.5L5 18L6.5 14.5L3 13L6.5 10.5L4 7.5L8 7L7 3.5L10.5 4.5L12 1Z"
                                fill="#0095F6" stroke="#0095F6" strokeWidth="0.5"/>
                          <path d="M17 9L11 15L7 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white tracking-tight mb-1">Navaneethan K V</h2>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-emerald-400/80 font-medium tracking-wide uppercase">Open to Work</span>
                    </div>
                  </div>

                  <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                  </div>

                  <p className="text-sm text-white/50 text-center leading-relaxed mb-6">
                    Whether you have a groundbreaking idea or just want to chat, I&apos;m all ears. Let&apos;s explore new possibilities together.
                  </p>

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

                  <p className="text-center text-[10px] text-white/15 mt-5 tracking-wider uppercase">Typically replies within 24 hours</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setModalOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative group cursor-pointer"
      >
        <div className="absolute -inset-4 rounded-full border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-700 animate-[spin_8s_linear_infinite]" />
        <div className="absolute -inset-8 rounded-full border border-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-700 animate-[spin_12s_linear_infinite_reverse]" />
        <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl group-hover:bg-emerald-500/30 transition-all duration-500" />
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] border border-emerald-500/30 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 group-hover:border-emerald-500/50 transition-all duration-300 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10" />
          <SparkleIcon className="w-7 h-7 text-emerald-400 relative z-10" />
          <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#1a1a2e] animate-pulse" />
        </div>
      </motion.button>
    </div>
  );
};