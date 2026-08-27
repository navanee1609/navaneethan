"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Briefcase, GraduationCap, ChevronDown, Sparkles, Building2, Calendar, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Nutshell } from "./Nutshell";
import { Card, PillBadge } from "@/components";

const CAREER_DATA = [
  {
    id: "agilysys",
    date: "2025 — Present",
    yearDisplay: "2025",
    title: "Associate Software Analyst",
    company: "Agilysys Technologies",
    description:
      "Engineering core modules for 'Stay' — a next-gen Property Management System (PMS) powering Marriott Hotels globally. Streamlining booking, check-in, and service management with modern front-end frameworks.",
    highlights: [
      "Streamlined guest check-in, reservation management, and front-desk operational flows.",
      "Optimized modular Angular components and TypeScript data structures for maximum performance.",
      "Collaborated with engineering leads to ensure strict enterprise UX and accessibility standards."
    ],
    icon: Briefcase,
    color: "emerald",
    logo: "https://www.agilysys.com/en/wp-content/uploads/Agilysys-Logo-v1.png",
    current: true,
    skills: ["Angular", "TypeScript", "Tailwind CSS", "RxJS", "REST APIs", "Micro-Frontends"],
  },
  {
    id: "spritle",
    date: "2024",
    yearDisplay: "2024",
    title: "Front-End Developer",
    company: "Spritle Software",
    description:
      "Crafted responsive UIs and web applications using React, Next.js, and Tailwind CSS across client projects.",
    highlights: [
      "Built modern interactive user interfaces with seamless state management and custom React hooks.",
      "Integrated backend endpoints and ensured strict cross-browser performance.",
      "Accelerated page load performance by implementing efficient component architecture."
    ],
    icon: Briefcase,
    color: "cyan",
    logo: "https://www.spritle.com/assets/img/logo/logo.svg",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
  {
    id: "projects",
    date: "2023",
    yearDisplay: "2023",
    title: "Project Development & Open Source",
    company: "Independent & Open Source",
    description:
      "Fostered deep hands-on expertise by engineering web applications and contributing to open-source GitHub projects.",
    highlights: [
      "Designed and launched production-ready web apps using modern JavaScript frameworks.",
      "Adopted industry standards for Git workflows, code reviews, and project architecture.",
      "Mastered dynamic animation principles using Framer Motion."
    ],
    icon: Briefcase,
    color: "purple",
    skills: ["Git & GitHub", "React", "Open Source", "System Design", "UI/UX"],
  },
  {
    id: "fundamentals",
    date: "2022",
    yearDisplay: "2022",
    title: "Programming Foundation",
    company: "Self-Driven Learning",
    description:
      "Initiated intensive practical learning in software engineering fundamentals, algorithms, and core web technologies.",
    highlights: [
      "Mastered JavaScript ES6+, semantic HTML5 structures, and responsive CSS layouts.",
      "Built foundational projects to solve practical coding problems."
    ],
    icon: Briefcase,
    color: "amber",
    skills: ["JavaScript ES6+", "Python", "Problem Solving", "Web Fundamentals"],
  },
];

const EDUCATION_DATA = [
  {
    id: "be",
    date: "2018 — 2022",
    yearDisplay: "2018–22",
    title: "B.E. Mechanical Engineering",
    school: "Dhanalakshmi Srinivasan Engineering College",
    description:
      "Graduated with a strong academic record, developing analytical problem-solving capabilities and transitioning passion into software engineering.",
    percentage: "86% (First Class with Distinction)",
    highlights: [
      "Developed quantitative problem-solving and analytical reasoning mindset.",
      "Led student tech initiatives and project demonstrations."
    ],
    icon: GraduationCap,
    color: "emerald",
  },
  {
    id: "hsc",
    date: "2017",
    yearDisplay: "2017",
    title: "Higher Secondary (HSC)",
    school: "Vivekananda Higher Sec. School",
    description:
      "Excelled academically with focused coursework in Mathematics, Physics, and Computer Science fundamentals.",
    percentage: "91.7%",
    highlights: [
      "Achieved top distinction marks across core analytical subjects."
    ],
    icon: GraduationCap,
    color: "cyan",
  },
  {
    id: "sslc",
    date: "2015",
    yearDisplay: "2015",
    title: "SSLC",
    school: "Vivekananda Higher Sec. School",
    description:
      "Demonstrated foundational academic excellence and consistent dedication to learning.",
    percentage: "95%",
    highlights: [
      "Recognized among top academic rank holders."
    ],
    icon: GraduationCap,
    color: "purple",
  },
];

const COLOR_MAP = {
  emerald: {
    text: "text-emerald-400",
    border: "border-white/10 hover:border-emerald-500/40",
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    hoverGlow: "",
    nodeBg: "bg-emerald-400",
    nodeRing: "ring-emerald-500/20",
    gradText: "from-white via-white/90 to-emerald-300",
  },
  cyan: {
    text: "text-cyan-400",
    border: "border-white/10 hover:border-cyan-500/40",
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    hoverGlow: "",
    nodeBg: "bg-cyan-400",
    nodeRing: "ring-cyan-500/20",
    gradText: "from-white via-white/90 to-cyan-300",
  },
  purple: {
    text: "text-purple-400",
    border: "border-white/10 hover:border-purple-500/40",
    badge: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    hoverGlow: "",
    nodeBg: "bg-purple-400",
    nodeRing: "ring-purple-500/20",
    gradText: "from-white via-white/90 to-purple-300",
  },
  amber: {
    text: "text-amber-400",
    border: "border-white/10 hover:border-amber-500/40",
    badge: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    hoverGlow: "",
    nodeBg: "bg-amber-400",
    nodeRing: "ring-amber-500/20",
    gradText: "from-white via-white/90 to-amber-300",
  },
};

const OppositeDateBadge = ({
  item,
  isEven,
  type,
}: {
  item: any;
  isEven: boolean;
  type: "career" | "education";
}) => {
  const c = COLOR_MAP[item.color as keyof typeof COLOR_MAP] || COLOR_MAP.emerald;

  return (
    <div
      className={`hidden md:flex flex-col justify-center ${isEven ? "items-start pl-10 text-left" : "items-end pr-10 text-right"
        }`}
    >
      <span className={`text-4xl lg:text-5xl font-black tracking-tight bg-gradient-to-r ${c.gradText} bg-clip-text text-transparent font-mono`}>
        {item.yearDisplay}
      </span>
      <div className={`flex items-center gap-2 mt-2 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
        <span className={`h-[2px] w-8 rounded-full ${c.nodeBg} opacity-70`} />
        <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
          {type === "career" ? item.company : item.school}
        </span>
      </div>
      {item.current && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 mt-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Active Role
        </span>
      )}
    </div>
  );
};

// Color-coded pill badge styles matching Awards & Projects sections
const pillColors = [
  { style: "bg-emerald-500/10 border border-emerald-500/25 text-emerald-400" },
  { style: "bg-cyan-500/10 border border-cyan-500/25 text-cyan-400" },
  { style: "bg-purple-500/10 border border-purple-500/25 text-purple-400" },
  { style: "bg-amber-500/10 border border-amber-500/25 text-amber-400" },
];

const TimelineCard = ({
  item,
  type,
}: {
  item: any;
  type: "career" | "education";
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const c = COLOR_MAP[item.color as keyof typeof COLOR_MAP] || COLOR_MAP.emerald;
  const Icon = item.icon;

  return (
    <Card className={`p-6 md:p-7 border backdrop-blur-xl bg-gray-900/50 transition-all duration-300 group relative ${c.border} ${c.hoverGlow}`}>
      {/* Top Bar: Date Badge & Type Icon */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase border ${c.badge}`}>
            <Calendar className="w-3 h-3 text-white/60" />
            {item.date}
            {item.current && (
              <span className="flex h-2 w-2 relative ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            )}
          </span>
          {item.current && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-md">
              Current Role
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {type === "education" && item.percentage && (
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${c.badge}`}>
              <Award className="w-3 h-3 text-white/60" />
              {item.percentage}
            </span>
          )}
          <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition duration-200">
            <Icon className={`w-4 h-4 ${c.text}`} />
          </div>
        </div>
      </div>

      {/* Main Title & Organization */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white/90 transition-colors duration-200">
            {item.title}
          </h3>
          <p className="text-sm font-medium text-white/50 mt-1 flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5 text-white/40" />
            {type === "career" ? item.company : item.school}
          </p>
        </div>

        {type === "career" && item.logo && (
          <div className="p-1.5 rounded-xl bg-white/5 border border-white/10">
            <Image
              src={item.logo}
              alt={item.company}
              width={75}
              height={22}
              className="object-contain h-5 w-auto"
              unoptimized
            />
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-white/70 leading-relaxed font-light mt-3">
        {item.description}
      </p>

      {/* Direct Tech Stack Badges Inline using Reusable PillBadge */}
      {item.skills && (
        <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
          {item.skills.map((skill: string, idx: number) => (
            <PillBadge key={skill} colorIndex={idx}>
              {skill}
            </PillBadge>
          ))}
        </div>
      )}

      {/* Expandable Key Highlights */}
      {item.highlights && item.highlights.length > 0 && (
        <div className="mt-4 pt-3 border-t border-white/5">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-white/90 transition duration-200 cursor-pointer w-full text-left"
          >
            <Sparkles className={`w-3.5 h-3.5 ${c.text}`} />
            <span>{isExpanded ? "Hide Highlights" : "Key Highlights & Impact"}</span>
            <ChevronDown
              className={`w-4 h-4 ml-auto transition-transform duration-300 ${isExpanded ? "rotate-180 text-white" : "text-white/40"
                }`}
            />
          </button>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.22, ease: "easeInOut" },
                }}
                className="mt-3 space-y-2 overflow-hidden transform-gpu"
              >
                {item.highlights.map((point: string, idx: number) => (
                  <li key={idx} className="text-xs text-white/70 flex items-start gap-2 leading-relaxed">
                    <span className={`w-1.5 h-1.5 rounded-full ${c.nodeBg} mt-1.5 shrink-0 opacity-80`} />
                    <span>{point}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      )}
    </Card>
  );
};

export const Timeline = () => {
  const [activeTab, setActiveTab] = useState<"career" | "education">("career");
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position relative to timeline list
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

  const items = activeTab === "career" ? CAREER_DATA : EDUCATION_DATA;

  return (
    <section id="timeline" className="py-24 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="My Journey & Growth"
          title="Professional Milestones"
          description="A chronological timeline of key career roles, open-source projects, and academic background."
        />

        {/* Sliding Tab Selector */}
        <div className="flex justify-center mt-12 mb-16">
          <div className="flex p-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md relative">
            {(["career", "education"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === tab ? "text-black font-bold" : "text-white/60 hover:text-white"
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="timeline-active-tab-indicator"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab === "career" ? "Career Experience" : "Education"}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative mt-12">

          {/* Desktop Central Track Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] -translate-x-1/2 bg-white/10" />

          {/* Desktop Animated Progress Line */}
          <motion.div
            style={{ scaleY }}
            className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1.5px] -translate-x-1/2 bg-gradient-to-b from-emerald-400 via-sky-400 to-purple-400 origin-top z-0 shadow-[0_0_8px_rgba(52,211,153,0.3)]"
          />

          {/* Mobile Left Track Line */}
          <div className="md:hidden absolute left-[19px] top-4 bottom-4 w-[1px] bg-white/10" />

          {/* Mobile Animated Progress Line */}
          <motion.div
            style={{ scaleY }}
            className="md:hidden absolute left-[19px] top-4 bottom-4 w-[1.5px] -translate-x-1/2 bg-gradient-to-b from-emerald-400 via-sky-400 to-purple-400 origin-top z-0 shadow-[0_0_8px_rgba(52,211,153,0.3)]"
          />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;
              const c = COLOR_MAP[item.color as keyof typeof COLOR_MAP] || COLOR_MAP.emerald;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                  className="relative flex flex-col md:grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Left Side Slot */}
                  <div className={`w-full pl-12 md:pl-0 ${isEven ? "md:pr-10" : "order-2 md:order-1"}`}>
                    {isEven ? (
                      <TimelineCard item={item} type={activeTab} />
                    ) : (
                      <OppositeDateBadge item={item} isEven={isEven} type={activeTab} />
                    )}
                  </div>

                  {/* Right Side Slot */}
                  <div className={`w-full pl-12 md:pl-0 ${isEven ? "order-2 md:order-2" : "order-1 md:order-2"}`}>
                    {isEven ? (
                      <OppositeDateBadge item={item} isEven={isEven} type={activeTab} />
                    ) : (
                      <TimelineCard item={item} type={activeTab} />
                    )}
                  </div>

                  {/* Central Node Marker */}
                  <div className="absolute left-[19px] md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-3.5 h-3.5 rounded-full ${c.nodeBg} border-2 border-gray-950 ring-2 ${c.nodeRing} flex items-center justify-center transition-all duration-300`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <Nutshell />
    </section>
  );
};