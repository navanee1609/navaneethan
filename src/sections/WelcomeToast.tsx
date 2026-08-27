"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Sparkles, CheckCircle2 } from "lucide-react";
import Navanee from "@/assets/images/Navanee.png";
import grainImage from "@/assets/images/grain.jpg";

export const WelcomeToast = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Pop out from the bottom-right fixed icon 500ms after load
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // 2. Display at center for 5 seconds, then auto-disappear back into the icon at 5.5s
    const autoCloseTimer = setTimeout(() => {
      setIsVisible(false);
    }, 8500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(autoCloseTimer);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Full-Screen Backdrop Layer matching application standard */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-md pointer-events-auto"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 pointer-events-none z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.15,
                x: "38vw",
                y: "38vh",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.15,
                x: "38vw",
                y: "38vh",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 28,
                mass: 0.9,
              }}
              className="w-full max-w-[420px] pointer-events-auto"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gray-900/95 border border-white/20 backdrop-blur-2xl p-5 shadow-2xl shadow-black/90 text-white">
                {/* Background grain texture */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                />

                {/* Top Header: Badge & Close Button */}
                <div className="relative z-10 flex items-center justify-between gap-2 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Welcome Visitor 👋</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleDismiss}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Dismiss welcome modal"
                  >
                    <X className="w-3.5 h-3.5" />
                  </motion.button>
                </div>

                {/* Card Body */}
                <div className="relative z-10 flex items-start gap-4">
                  {/* Profile Image Avatar */}
                  <div className="relative shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full border-2 border-emerald-400/50 overflow-hidden bg-white/10 shadow-lg">
                      <Image
                        src={Navanee}
                        alt="Navaneethan KV"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-gray-900" />
                  </div>

                  {/* Narrative Info */}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-bold text-white tracking-tight leading-snug flex items-center gap-1.5">
                      <span>Glad you&apos;re here!</span>
                      <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                    </h4>
                    <p className="text-xs text-white/75 leading-relaxed font-normal mt-1.5">
                      Hi! I&apos;m <strong className="text-white">Navaneethan KV</strong> — Associate Software Analyst @ Agilysys. Crafting high-performance enterprise web applications &amp; modern UI modules.
                    </p>
                  </div>
                </div>

                {/* Footer Spec */}
                <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3 text-[10.5px] font-mono text-white/50">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Enterprise Web Eng
                  </span>
                  <span className="text-white/40 font-bold uppercase tracking-wider">BANGALORE / CHENNAI</span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
