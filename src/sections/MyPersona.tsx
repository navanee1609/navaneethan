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
      left-[8%]

      sm:top-[-6px]
      sm:left-[14%]

      lg:top-[2px]
      lg:left-[30%]
    `,
    bg: "bg-white/8 border-white/10 text-white/85",
    glow: "via-white/10",
    animation: {
      y: [0, -4, 0],
      rotate: [0, 2, 0],
    },
    duration: 4,
  },

  {
    label: "Next.js",
    className: `
      absolute
      bottom-[-10px]
      right-[8%]

      sm:bottom-[-6px]
      sm:right-[14%]

      lg:bottom-[2px]
      lg:right-[29%]
    `,
    bg: "bg-emerald-400/10 border-emerald-400/20 text-emerald-100",
    glow: "via-emerald-200/10",
    animation: {
      y: [0, 4, 0],
      rotate: [0, -2, 0],
    },
    duration: 5,
  },

  {
    label: "TypeScript",
    className: `
      absolute
      left-[-6%]
      top-[42%]

      sm:left-[2%]

      lg:left-[22%]
      lg:top-[42%]
    `,
    bg: "bg-sky-400/10 border-sky-400/20 text-sky-100",
    glow: "via-sky-200/10",
    animation: {
      x: [0, 3, 0],
    },
    duration: 6,
  },

  /* ADD MORE PILLS LIKE THIS */
  {
    label: "Angular",
    className: `
      absolute
      right-[-2%]
      top-[38%]

      sm:right-[6%]

      lg:right-[20%]
    `,
    bg: "bg-sky-400/10 border-sky-400/20 text-sky-100",
    glow: "via-sky-200/10",
    animation: {
      x: [0, -3, 0],
    },
    duration: 5,
  },
];

export const MyPersona = () => {
  console.log("My Persona Section Rendered");

  return (
    <Card className="relative overflow-hidden h-[420px] sm:h-[320px] col-span-1 md:col-span-3 bg-gradient-to-br from-[#1b2a3c] to-[#12202f] p-6">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute -top-10 right-0 w-40 h-40 rounded-full bg-emerald-400/15 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute -bottom-14 -left-6 w-36 h-36 rounded-full bg-sky-500/15 blur-3xl"
        />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      <div className="relative z-10 h-full flex flex-col justify-between">

        {/* Heading Section */}
<div className="flex items-start justify-between gap-4 relative">

  <div className="flex flex-col">

    <div className="flex items-center gap-2">

      {/* Original Icon Style */}
      <motion.div
        whileHover={{ rotate: 12 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
        }}
      >
        <SparkleIcon className="text-emerald-300" />
      </motion.div>

      {/* Original Heading Style */}
      <h3 className="text-white text-2xl font-semibold">
        Frontend Essence
      </h3>
    </div>

    {/* Original Paragraph Style */}
    <p className="text-md text-white/60 mt-1 max-w-[500px]">
      Building sleek, scalable and high-performance frontend experiences.
    </p>
  </div>

  {/* Available Tag */}
  <motion.div
    animate={{
      y: [0, -3, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10"
  >
    <div className="w-2 h-2 rounded-full bg-emerald-300" />

    <span className="text-[11px] text-emerald-200">
      Available
    </span>
  </motion.div>
</div>


{/* Center Visual */}
{/* Center Visual */}
{/* Center Visual */}
<div className="relative flex items-center justify-center my-4 sm:my-3 h-[110px] sm:h-[90px]">

  {/* Orbit 1 */}
  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute w-24 h-24 border border-dashed border-white/10 rounded-full"
  />

  {/* Orbit 2 */}
  <motion.div
    animate={{
      rotate: -360,
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute w-16 h-16 border border-emerald-400/20 rounded-full"
  />

  {/* Dynamic Orbit Pills */}
  {orbitPills?.length > 0 &&
    orbitPills.map((pill, index) => {
      console.log("Orbit Pill:", pill.label);

      return (
        <motion.div
          key={index}
          animate={pill.animation}
          transition={{
            duration: pill.duration,
            repeat: Infinity,
          }}
          whileHover={{
            scale: 1.08,
          }}
          className={pill.className}
        >
          <div
            className={`
              group
              relative
              flex
              items-center
              justify-center
              px-3
              py-1.5
              rounded-full
              backdrop-blur-xl
              shadow-lg
              overflow-hidden
              border
              ${pill.bg}
            `}
          >

            {/* Glow */}
            <div
              className={`
                absolute
                inset-0
                bg-gradient-to-r
                from-transparent
                ${pill.glow}
                to-transparent
                translate-x-[-120%]
                group-hover:translate-x-[120%]
                transition
                duration-1000
              `}
            />

            <span className="relative leading-none text-[11px] font-medium">
              {pill.label}
            </span>
          </div>
        </motion.div>
      );
    })}

  {/* Center Core */}
  <motion.div
    whileHover={{
      scale: 1.08,
      rotate: 6,
    }}
    transition={{
      type: "spring",
      stiffness: 220,
    }}
    className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-300 via-teal-300 to-sky-400 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.28)]"
  >

    {/* Pulse Ring */}
    <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20" />

    <span className="flex items-center justify-center leading-none text-black font-bold text-[11px] tracking-wide">
      UI
    </span>
  </motion.div>

  {console.log("Dynamic Orbit Pills Rendered")}
</div>


{/* Bottom Skill Cards */}
<div className="mt-2">

  {/* Desktop / Large Devices */}
  <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-3">

    {skills.map((item, index) => {
      console.log("Desktop Skill Card:", item.title);

      return (
        <motion.div
          key={index}
          whileHover={{
            y: -5,
            scale: 1.02,
            borderColor: "rgba(16,185,129,0.4)",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
          }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur-xl"
        >

          {/* Shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000" />

          <div className="relative z-10">

            <div className="flex items-center gap-2 text-emerald-300">
              {item.icon}

              <span className="text-white text-sm font-medium">
                {item.title}
              </span>
            </div>

            <p className="text-[10px] text-white/45 mt-1.5">
              {item.sub}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>

  {/* Mobile / Tablet Infinite Carousel */}
  <div className="relative overflow-hidden lg:hidden mt-3">

    {/* Left Fade */}
    <div className="absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-[#18283a] to-transparent" />

    {/* Right Fade */}
    <div className="absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-l from-[#132231] to-transparent" />

    <motion.div
      animate={{
        x: ["0%", "-50%"],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex gap-3 w-max"
    >

      {[...skills, ...skills].map((item, index) => {
        console.log("Carousel Skill:", item.title);

        return (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-[22px]
              border border-white/10
              bg-white/[0.06]
              px-4 py-3
              backdrop-blur-xl
              min-w-[180px]
              shadow-[0_10px_30px_rgba(0,0,0,0.25)]
            "
          >

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition duration-1000" />

            <div className="relative z-10 flex items-center gap-3">

              {/* Icon Bubble */}
              <div className="w-9 h-9 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-300 shrink-0">
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col">

                <span className="text-white text-sm font-medium leading-none">
                  {item.title}
                </span>

                <p className="text-[10px] text-white/45 mt-1 leading-none">
                  {item.sub}
                </p>
              </div>
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
