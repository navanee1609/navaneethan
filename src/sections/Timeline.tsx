"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaBriefcase,
  FaLaptopCode,
  FaReact,
  FaUserGraduate,
  FaSchool,
} from "react-icons/fa";
import { SectionHeader } from "./SectionHeader";
import { Nutshell } from "./Nutshell";

const CAREER_DATA = [
  {
    date: "2025",
    endDate: "Present",
    title: "Associate Software Analyst",
    company: "Agilysys Technologies",
    description:
      "Working on 'Stay' — a key product powering Marriott Hotels. Streamlining booking, check-in, and service management with modern front-end frameworks.",
    icon: FaBriefcase,
    color: "emerald",
    logo: "https://www.agilysys.com/en/wp-content/uploads/Agilysys-Logo-v1.png",
    current: true,
    skills: ["Angular", "TypeScript", "Tailwind"],
  },
  {
    date: "2024",
    title: "Front-End Developer",
    company: "Spritle Software",
    description:
      "Developed responsive UIs using React, Next.js, and Tailwind. Collaborated with back-end teams to deliver seamless user experiences across multiple client projects.",
    icon: FaLaptopCode,
    color: "cyan",
    logo: "https://www.spritle.com/assets/img/logo/logo.svg",
    skills: ["React", "Next.js", "Tailwind", "HTML/CSS"],
  },
  {
    date: "2023",
    title: "Building Projects",
    company: "Open Source & Self-Learning",
    description:
      "Contributed to open-source projects on GitHub, honing collaboration skills and adopting industry best practices in software development.",
    icon: FaReact,
    color: "purple",
    skills: ["Git", "GitHub", "Open Source", "Collaboration"],
  },
  {
    date: "2022",
    title: "Started Programming",
    company: "Self-Learning Journey",
    description:
      "Dived deep into programming fundamentals, mastering key concepts and building a strong foundation through hands-on projects.",
    icon: FaLaptopCode,
    color: "amber",
    skills: ["JavaScript", "Python", "Problem Solving"],
  },
];

const EDUCATION_DATA = [
  {
    date: "2018 — 2022",
    title: "B.E. Mechanical Engineering",
    school: "Dhanalakshmi Srinivasan Engineering College",
    description:
      "Graduated with strong academic record, developing problem-solving skills and passion for technology.",
    icon: FaUserGraduate,
    percentage: "86%",
  },
  {
    date: "2017",
    title: "Higher Secondary",
    school: "Vivekananda Higher Sec. School",
    description:
      "Excelled academically with keen interest in analytical thinking and logical problem-solving.",
    icon: FaSchool,
    percentage: "91.7%",
  },
  {
    date: "2015",
    title: "SSLC",
    school: "Vivekananda Higher Sec. School",
    description:
      "Achieved academic excellence with strong aptitude for learning and disciplined approach to education.",
    icon: FaSchool,
    percentage: "95%",
  },
];

const COLOR_MAP = {
  emerald: {
    border: "border-emerald-500/30",
    borderHover: "group-hover:border-emerald-500/50",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    glow: "bg-emerald-500/20",
    shadow: "shadow-emerald-500/10",
    badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    skill: "bg-emerald-500/5 border-emerald-500/20 text-emerald-400/80",
    line: "from-emerald-500/40",
  },
  cyan: {
    border: "border-cyan-500/30",
    borderHover: "group-hover:border-cyan-500/50",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    glow: "bg-cyan-500/20",
    shadow: "shadow-cyan-500/10",
    badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
    skill: "bg-cyan-500/5 border-cyan-500/20 text-cyan-400/80",
    line: "from-cyan-500/40",
  },
  purple: {
    border: "border-purple-500/30",
    borderHover: "group-hover:border-purple-500/50",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    glow: "bg-purple-500/20",
    shadow: "shadow-purple-500/10",
    badge: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    skill: "bg-purple-500/5 border-purple-500/20 text-purple-400/80",
    line: "from-purple-500/40",
  },
  amber: {
    border: "border-amber-500/30",
    borderHover: "group-hover:border-amber-500/50",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    glow: "bg-amber-500/20",
    shadow: "shadow-amber-500/10",
    badge: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    skill: "bg-amber-500/5 border-amber-500/20 text-amber-400/80",
    line: "from-amber-500/40",
  },
};

// ─── Mobile: Simple Stacked Cards ───────────────────
const MobileCareerCard = ({ item, index }: { item: typeof CAREER_DATA[0]; index: number }) => {
  const c = COLOR_MAP[item.color as keyof typeof COLOR_MAP] || COLOR_MAP.emerald;
  const Icon = item.icon;

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`relative p-5 rounded-2xl border border-white/[0.06] ${c.border} ${c.borderHover} transition-all duration-500 backdrop-blur-sm bg-white/[0.02] group-hover:shadow-lg ${c.shadow} overflow-hidden`}>
        <div className={`absolute -z-10 w-32 h-32 ${c.glow} rounded-full blur-[60px] opacity-0 group-hover:opacity-50 transition-opacity duration-700 -right-16 top-1/2 -translate-y-1/2`} />

        {/* Header: icon + date badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] border ${c.border} flex items-center justify-center flex-shrink-0`}>
            <Icon className={`w-4 h-4 ${c.text}`} />
          </div>
          <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border ${c.badge}`}>
            {item.date}
            {item.endDate && <span className="text-white/30">— {item.endDate}</span>}
            {item.current && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
          </div>
        </div>

        {/* Logo */}
        {item.logo && (
          <div className="mb-3">
            <Image 
              src={item.logo} 
              alt={item.company} 
              width={80} 
              height={24} 
              className="object-contain opacity-80 h-6 w-auto" 
              unoptimized 
            />
          </div>
        )}

        <h3 className="text-lg font-bold text-white tracking-tight mb-1">{item.title}</h3>
        <p className="text-sm text-white/50 font-medium mb-3">{item.company}</p>
        <p className="text-sm text-white/40 leading-relaxed mb-4">{item.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {item.skills?.map((skill) => (
            <span key={skill} className={`px-2.5 py-1 rounded-md text-[11px] font-medium border ${c.skill}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const MobileEducationCard = ({ item, index }: { item: typeof EDUCATION_DATA[0]; index: number }) => {
  const Icon = item.icon;

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative p-5 rounded-2xl border border-white/[0.04] group-hover:border-white/[0.08] transition-all duration-500 backdrop-blur-sm bg-white/[0.01]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] border border-white/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-4 h-4 text-white/40" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white/30 tracking-wider uppercase">{item.date}</span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">{item.percentage}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-white/80 tracking-tight mb-1">{item.title}</h3>
        <p className="text-sm text-white/40 font-medium mb-2">{item.school}</p>
        <p className="text-sm text-white/30 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
};

// ─── Desktop: Zigzag Timeline ───────────────────────
const DesktopCareerCard = ({ item, index }: { item: typeof CAREER_DATA[0]; index: number }) => {
  const c = COLOR_MAP[item.color as keyof typeof COLOR_MAP] || COLOR_MAP.emerald;
  const Icon = item.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-start gap-6 ${isLeft ? "flex-row" : "flex-row-reverse"} group`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`flex-1 ${isLeft ? "text-right pr-10" : "pl-10"}`}>
        <div className={`relative inline-block max-w-md p-6 rounded-2xl border border-white/[0.06] ${c.border} ${c.borderHover} transition-all duration-500 backdrop-blur-sm bg-white/[0.02] group-hover:shadow-lg ${c.shadow} overflow-hidden`}>
          <div className={`absolute -z-10 w-32 h-32 ${c.glow} rounded-full blur-[60px] opacity-0 group-hover:opacity-50 transition-opacity duration-700 ${isLeft ? "-right-16" : "-left-16"} top-1/2 -translate-y-1/2`} />

          <div className={`flex items-center gap-3 mb-3 ${isLeft ? "flex-row-reverse" : ""}`}>
            {item.logo && (
              <Image 
                src={item.logo} 
                alt={item.company} 
                width={80} 
                height={24} 
                className="object-contain opacity-80 h-6 w-auto" 
                unoptimized 
              />
            )}
            <div className={`flex-1 ${isLeft ? "text-right" : ""}`}>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border ${c.badge}`}>
                {item.date}
                {item.endDate && <span className="text-white/30">— {item.endDate}</span>}
                {item.current && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white tracking-tight mb-1">{item.title}</h3>
          <p className="text-sm text-white/50 font-medium mb-3">{item.company}</p>
          <p className="text-sm text-white/40 leading-relaxed mb-4">{item.description}</p>

          <div className={`flex flex-wrap gap-1.5 ${isLeft ? "justify-end" : ""}`}>
            {item.skills?.map((skill) => (
              <span key={skill} className={`px-2.5 py-1 rounded-md text-[11px] font-medium border ${c.skill}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex-shrink-0 z-10">
        <div className={`absolute top-1/2 -translate-y-1/2 h-px w-12 ${isLeft ? "right-full mr-0" : "left-full ml-0"} bg-gradient-to-r ${c.line} to-transparent`} />
        <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] border-2 ${c.border} ${c.borderHover} flex items-center justify-center shadow-lg ${c.shadow} transition-all duration-500`}>
          <Icon className={`w-6 h-6 ${c.text}`} />
        </div>
        {item.current && (
          <>
            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 animate-ping" />
            <div className="absolute inset-[-4px] rounded-full border border-emerald-500/15 animate-pulse" />
          </>
        )}
      </div>

      <div className="flex-1" />
    </motion.div>
  );
};

const DesktopEducationCard = ({ item, index }: { item: typeof EDUCATION_DATA[0]; index: number }) => {
  const Icon = item.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-start gap-6 ${isLeft ? "flex-row" : "flex-row-reverse"} group`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`flex-1 ${isLeft ? "text-right pr-10" : "pl-10"}`}>
        <div className="relative inline-block max-w-md p-5 rounded-2xl border border-white/[0.04] group-hover:border-white/[0.08] transition-all duration-500 backdrop-blur-sm bg-white/[0.01]">
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? "flex-row-reverse" : ""}`}>
            <span className="text-xs font-bold text-white/30 tracking-wider uppercase">{item.date}</span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">{item.percentage}</span>
          </div>
          <h3 className="text-lg font-bold text-white/80 tracking-tight mb-1">{item.title}</h3>
          <p className="text-sm text-white/40 font-medium mb-2">{item.school}</p>
          <p className="text-sm text-white/30 leading-relaxed">{item.description}</p>
        </div>
      </div>

      <div className="relative flex-shrink-0 z-10">
        <div className={`absolute top-1/2 -translate-y-1/2 h-px w-12 ${isLeft ? "right-full" : "left-full"} bg-gradient-to-r from-white/20 to-transparent`} />
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] border border-white/10 group-hover:border-white/20 flex items-center justify-center transition-all duration-500">
          <Icon className="w-6 h-6 text-white/40" />
        </div>
      </div>

      <div className="flex-1" />
    </motion.div>
  );
};

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="My Journey & Growth"
          title="Professional Milestones"
          description="Key moments that shaped my development career."
        />

        {/* Mobile: Simple stacked cards */}
        <div className="md:hidden mt-16 space-y-6">
          {CAREER_DATA.map((item, index) => (
            <MobileCareerCard key={item.date} item={item} index={index} />
          ))}
        </div>

        {/* Desktop: Zigzag timeline */}
        <div className="hidden md:block mt-20 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/40 via-cyan-500/30 via-purple-500/20 to-white/5" />
            <div className="absolute inset-0 blur-sm bg-gradient-to-b from-emerald-500/20 via-cyan-500/15 to-transparent" />
          </div>

          <div className="space-y-20">
            {CAREER_DATA.map((item, index) => (
              <DesktopCareerCard key={item.date} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Education Divider */}
        <motion.div
          className="flex items-center gap-4 my-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.08] bg-white/[0.02]">
            <FaUserGraduate className="w-4 h-4 text-white/30" />
            <span className="text-xs font-medium text-white/30 tracking-[0.2em] uppercase">Education</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>

        {/* Mobile: Simple stacked education cards */}
        <div className="md:hidden space-y-6">
          {EDUCATION_DATA.map((item, index) => (
            <MobileEducationCard key={item.date} item={item} index={index} />
          ))}
        </div>

        {/* Desktop: Zigzag education timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-white/10 to-transparent" />
          <div className="space-y-20">
            {EDUCATION_DATA.map((item, index) => (
              <DesktopEducationCard key={item.date} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      <Nutshell />
    </section>
  );
};