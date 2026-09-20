"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Sparkles, CheckCircle2, ArrowRight, Mail, Zap, Code2, Rocket } from "lucide-react";
import { PROFILE_IMAGE } from "@/constants";
import grainImage from "@/assets/images/grain.jpg";

export const WelcomeToast = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Pop up centered modal 500ms after load
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // 2. Display for 7.5 seconds, then auto-dismiss
    const autoCloseTimer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(autoCloseTimer);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const handleNavigate = (targetId: string) => {
    setIsVisible(false);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Soft Translucent Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-md pointer-events-auto"
            onClick={handleDismiss}
          />

          {/* Centered Modal Wrapper */}
          <div className="fixed inset-0 pointer-events-none z-[9999] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="w-full max-w-[460px] relative overflow-hidden rounded-3xl bg-gray-950/90 border border-white/20 shadow-2xl shadow-black/90 text-white p-6 sm:p-8 backdrop-blur-2xl pointer-events-auto"
            >
              {/* Top Hairline Gradient Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400" />

              {/* Background grain texture */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              />

              {/* Top Header Row: Availability Badge & Close Button */}
              <div className="relative z-10 flex items-center justify-between gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Available for Hire 👋</span>
                </div>

                <button
                  onClick={handleDismiss}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/70 hover:text-white flex items-center justify-center transition cursor-pointer"
                  aria-label="Close welcome modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Profile Intro Section */}
              <div className="relative z-10 flex items-start gap-4 mb-6">
                {/* Avatar with Active Dot */}
                <div className="relative shrink-0 select-none">
                  <div className="w-16 h-16 rounded-full border-2 border-emerald-400/80 shadow-lg shadow-emerald-500/20 overflow-hidden relative bg-gray-800">
                    <Image
                      src={PROFILE_IMAGE}
                      alt="Navaneethan KV"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  {/* Instagram Active Now Dot */}
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-gray-950 shadow-sm" />
                </div>

                {/* Developer Bio */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-1.5">
                    <span>Hi, I'm Navaneethan KV</span>
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  </h3>
                  <p className="text-xs text-emerald-300/90 font-semibold mt-0.5">
                    Front-End Developer (Angular & React){" "}
                    <span className="text-white/60 font-normal">
                      • Associate Software Analyst @ Agilysys
                    </span>
                  </p>
                  <p className="text-xs text-white/75 leading-relaxed font-normal mt-2">
                    Building fast, scalable web apps with Angular, React & Next.js — from enterprise booking platforms to modern UI systems.
                  </p>
                </div>
              </div>

              {/* Key Highlights List Box */}
              <div className="relative z-10 p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-6 space-y-2.5">
                <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider block">
                  EXPERTISE
                </span>

                <div className="space-y-2 text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong className="text-white">20% Faster Page Loads</strong> through targeted performance optimizations</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Production grade</span> <strong className="text-white">Angular &amp; React.js</strong> Development
                  </div>

                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-purple-400 shrink-0" />
                    <span><strong className="text-white">Scalable Architecture</strong> &amp; Micro-Frontends</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons (2-column Row on all screens) */}
              <div className="relative z-10 grid grid-cols-2 gap-2.5 sm:gap-3">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavigate("projects")}
                  className="w-full py-3 px-2.5 sm:px-4 rounded-xl bg-emerald-50 hover:bg-white text-emerald-950 text-xs font-bold transition duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-lg"
                >
                  <span className="truncate">View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavigate("contact")}
                  className="w-full py-3 px-2.5 sm:px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold transition duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Get in Touch</span>
                </motion.button>
              </div>

              {/* Footer Spec */}
              <div className="relative z-10 mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-3 text-[10.5px] font-mono text-white/50">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Front-End Developer | Chennai
                </span>
                <span className="text-white/40 font-bold uppercase tracking-wider">	Open to Remote & Chennai-based Roles</span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
