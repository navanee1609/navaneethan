"use client";

import { Card } from "@/components/Card";
import { motion } from "framer-motion";
import SparkleIcon from "@/assets/icons/star.svg";
import {
  Code2,
  Rocket,
  Cpu,
  Layers3,
} from "lucide-react";

const skills = [
  {
    icon: <Code2 size={16} />,
    title: "React",
    sub: "Modern UI",
  },
  {
    icon: <Rocket size={16} />,
    title: "Next.js",
    sub: "Fast Apps",
  },
  {
    icon: <Cpu size={16} />,
    title: "TypeScript",
    sub: "Scalable Code",
  },
  {
    icon: <Layers3 size={16} />,
    title: "Architecture",
    sub: "Reusable Systems",
  },
];
{/* Orbit Pills Data */}
const orbitPills = [
  {
    label: "React",
    className: `
      absolute
      top-[-10px]
      left-[2%]

      sm:top-[-6px]
      sm:left-[8%]

      lg:top-[0px]
      lg:left-[22%]
    `,
    bg: "bg-white/10 border-white/15 text-white/90",
    glow: "via-white/15",
    animation: {
      y: [0, -4, 0],
      rotate: [0, 2, 0],
    },
    duration: 4,
    linePos: { x2: "22%", y2: "15%" },
  },

  {
    label: "Tailwind",
    className: `
      absolute
      top-[-10px]
      right-[2%]

      sm:top-[-6px]
      sm:right-[8%]

      lg:top-[0px]
      lg:right-[22%]
    `,
    bg: "bg-white/10 border-white/15 text-white/90",
    glow: "via-white/15",
    animation: {
      y: [0, -4, 0],
      rotate: [0, -2, 0],
    },
    duration: 4.5,
    linePos: { x2: "78%", y2: "15%" },
  },

  {
    label: "TypeScript",
    className: `
      absolute
      left-[-5%]
      top-[38%]

      sm:left-[1%]

      lg:left-[15%]
    `,
    bg: "bg-white/10 border-white/15 text-white/90",
    glow: "via-white/15",
    animation: {
      x: [0, 3, 0],
    },
    duration: 6,
    linePos: { x2: "14%", y2: "50%" },
  },

  {
    label: "Angular",
    className: `
      absolute
      right-[-5%]
      top-[38%]

      sm:right-[1%]

      lg:right-[15%]
    `,
    bg: "bg-white/10 border-white/15 text-white/90",
    glow: "via-white/15",
    animation: {
      x: [0, -3, 0],
    },
    duration: 5,
    linePos: { x2: "86%", y2: "50%" },
  },

  {
    label: "Redux",
    className: `
      absolute
      bottom-[-10px]
      left-[2%]

      sm:bottom-[-6px]
      sm:left-[8%]

      lg:bottom-[0px]
      lg:left-[22%]
    `,
    bg: "bg-white/10 border-white/15 text-white/90",
    glow: "via-white/15",
    animation: {
      y: [0, 4, 0],
      rotate: [0, 2, 0],
    },
    duration: 5.5,
    linePos: { x2: "22%", y2: "85%" },
  },

  {
    label: "Next.js",
    className: `
      absolute
      bottom-[-10px]
      right-[2%]

      sm:bottom-[-6px]
      sm:right-[8%]

      lg:bottom-[0px]
      lg:right-[22%]
    `,
    bg: "bg-white/10 border-white/15 text-white/90",
    glow: "via-white/15",
    animation: {
      y: [0, 4, 0],
      rotate: [0, -2, 0],
    },
    duration: 5,
    linePos: { x2: "78%", y2: "85%" },
  },

  {
    label: "Vite",
    className: `
      absolute
      top-[-14px]
      left-[42%]

      sm:top-[-12px]
      sm:left-[45%]

      lg:top-[-10px]
    `,
    bg: "bg-white/10 border-white/15 text-white/90",
    glow: "via-white/15",
    animation: {
      y: [0, -3, 0],
    },
    duration: 4.2,
    linePos: { x2: "50%", y2: "10%" },
  },
];

export const MyPersona = () => {
  console.log("My Persona Section Rendered");

  return (
    <Card className="relative overflow-hidden h-[460px] sm:h-[340px] col-span-1 md:col-span-3 bg-gray-950/40 backdrop-blur-3xl border border-white/[0.08] rounded-[32px] p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

      {/* Ambient Widget Glows (Native Apple feel) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-10 w-64 h-64 rounded-full bg-emerald-500/20 blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-sky-500/20 blur-[80px]"
        />
      </div>

      {/* Subtle Noise Texture for material feel */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')] mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* iOS Widget Style Header */}
        <div className="flex items-start justify-between gap-4 relative">
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-8 h-8 rounded-full bg-emerald-400/10 flex items-center justify-center border border-emerald-400/20 shadow-sm"
              >
                <SparkleIcon className="text-emerald-400 w-4 h-4" />
              </motion.div>
              <h3 className="text-white text-[22px] font-bold tracking-tight">
                Frontend Essence
              </h3>
            </div>
            <p className="text-[14px] text-white/60 mt-1.5 max-w-[500px] leading-relaxed font-medium">
              Building sleek, scalable and high-performance frontend experiences.
            </p>
          </div>

          {/* iOS Dynamic Island Style Badge */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 shadow-sm backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] text-emerald-300 font-bold tracking-wide uppercase">
              Available
            </span>
          </motion.div>
        </div>

        {/* Center Visual - Refined iOS Orbits */}
        <div className="relative flex items-center justify-center my-6 sm:my-4 h-[120px] sm:h-[100px]">
          {/* Interconnecting Circuit/Orbit Stroke Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {orbitPills.map((pill, idx) => (
              <line
                key={`stroke-line-${idx}`}
                x1="50%"
                y1="50%"
                x2={pill.linePos.x2}
                y2={pill.linePos.y2}
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            ))}
          </svg>

          {/* iOS Style Orbit Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-28 h-28 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute w-20 h-20 border border-emerald-400/20 rounded-full"
          />

          {orbitPills?.length > 0 &&
            orbitPills.map((pill, index) => {
              return (
                <motion.div
                  key={index}
                  animate={pill.animation}
                  transition={{ duration: pill.duration, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                  className={pill.className}
                >
                  <div className={`group relative flex items-center justify-center px-3.5 py-1.5 rounded-full backdrop-blur-2xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] overflow-hidden border border-white/[0.12] bg-white/[0.06] hover:bg-white/[0.1] transition-colors`}>
                    <span className="relative z-10 leading-none text-[11px] font-semibold text-white/90">
                      {pill.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}

          {/* Center Core - iOS App Icon Style */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-[14px] bg-gradient-to-br from-emerald-300 via-emerald-400 to-teal-500 flex items-center justify-center shadow-[0_8px_24px_rgba(16,185,129,0.3)] border border-white/20 z-10"
          >
            <div className="absolute inset-0 rounded-[14px] bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            <span className="flex items-center justify-center leading-none text-white font-extrabold text-[13px] tracking-wide relative z-10 drop-shadow-sm">
              UI
            </span>
          </motion.div>
        </div>

        {/* Bottom Skill Cards - iOS App Library / Widget Style */}
        <div className="mt-4 sm:mt-2">
          {/* Desktop / Large Devices */}
          <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-3">
            {skills.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="group relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] px-4 py-3.5 backdrop-blur-3xl transition-colors cursor-default shadow-sm"
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[12px] bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
                      {item.icon}
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-white text-[13px] font-semibold tracking-tight leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-white/50 mt-0.5 font-medium">
                        {item.sub}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile / Tablet Infinite Carousel */}
          <div className="relative overflow-hidden lg:hidden mt-4">
            <div className="absolute left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-[#0a0f16] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-[#0a0f16] to-transparent pointer-events-none" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="flex gap-3 w-max"
            >
              {[...skills, ...skills].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 backdrop-blur-3xl min-w-[170px] flex items-center gap-3 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-[12px] bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-[13px] font-semibold tracking-tight leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-white/50 mt-0.5 font-medium">
                        {item.sub}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

      </div>
    </Card>
  );
};
