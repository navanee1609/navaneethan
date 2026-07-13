"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Briefcase, GraduationCap, X, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Nutshell } from "./Nutshell";
import { Card } from "@/components/Card";

const CAREER_DATA = [
  {
    date: "2025",
    endDate: "Present",
    title: "Associate Software Analyst",
    company: "Agilysys Technologies",
    teaser: "Working on 'Stay' — a key PMS product powering Marriott Hotels.",
    description:
      "Working on 'Stay' — a key PMS product powering Marriott Hotels. Streamlining booking, check-in, and service management with modern front-end frameworks.",
    icon: Briefcase,
    color: "emerald",
    logo: "https://www.agilysys.com/en/wp-content/uploads/Agilysys-Logo-v1.png",
    current: true,
    skills: ["Angular", "TypeScript", "Tailwind"],
  },
  {
    date: "2024",
    title: "Front-End Developer",
    company: "Spritle Software",
    teaser: "Developed responsive UIs using React, Next.js, and Tailwind CSS.",
    description:
      "Developed responsive UIs using React, Next.js, and Tailwind CSS. Collaborated with back-end engineering teams to deliver seamless user experiences across multiple client projects.",
    icon: Briefcase,
    color: "cyan",
    logo: "https://www.spritle.com/assets/img/logo/logo.svg",
    skills: ["React", "Next.js", "Tailwind", "HTML/CSS"],
  },
  {
    date: "2023",
    title: "Building Projects",
    company: "Open Source & Self-Learning",
    teaser: "Contributed to open-source projects on GitHub, honing collaboration skills.",
    description:
      "Contributed to open-source projects on GitHub, honing collaboration skills and adopting industry best practices in software development.",
    icon: Briefcase,
    color: "purple",
    skills: ["Git", "GitHub", "Open Source", "Collaboration"],
  },
  {
    date: "2022",
    title: "Started Programming",
    company: "Self-Learning Journey",
    teaser: "Dived deep into programming fundamentals, mastering key concepts.",
    description:
      "Dived deep into programming fundamentals, mastering key concepts and building a strong foundation through hands-on projects.",
    icon: Briefcase,
    color: "amber",
    skills: ["JavaScript", "Python", "Problem Solving"],
  },
];

const EDUCATION_DATA = [
  {
    date: "2018 — 2022",
    title: "B.E. Mechanical Engineering",
    school: "Dhanalakshmi Srinivasan Engineering College",
    teaser: "Graduated with strong academic record, developing problem-solving skills.",
    description:
      "Graduated with strong academic record, developing problem-solving skills and passion for technology.",
    icon: GraduationCap,
    percentage: "86%",
    color: "emerald",
  },
  {
    date: "2017",
    title: "Higher Secondary",
    school: "Vivekananda Higher Sec. School",
    teaser: "Excelled academically with keen interest in analytical thinking.",
    description:
      "Excelled academically with keen interest in analytical thinking and logical problem-solving.",
    icon: GraduationCap,
    percentage: "91.7%",
    color: "cyan",
  },
  {
    date: "2015",
    title: "SSLC",
    school: "Vivekananda Higher Sec. School",
    teaser: "Achieved academic excellence with strong aptitude for learning.",
    description:
      "Achieved academic excellence with strong aptitude for learning and disciplined approach to education.",
    icon: GraduationCap,
    percentage: "95%",
    color: "purple",
  },
];

const COLOR_MAP = {
  emerald: {
    text: "text-emerald-400",
    border: "border-emerald-400",
    badge: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400",
  },
  cyan: {
    text: "text-cyan-400",
    border: "border-cyan-400",
    badge: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400",
  },
  purple: {
    text: "text-purple-400",
    border: "border-purple-400",
    badge: "bg-purple-500/10 border-purple-500/25 text-purple-400",
  },
  amber: {
    text: "text-amber-400",
    border: "border-amber-400",
    badge: "bg-amber-500/10 border-amber-500/25 text-amber-400",
  },
};

const TimelineItem = ({
  item,
  index,
  type,
  onOpenDetails,
}: {
  item: any;
  index: number;
  type: "career" | "education";
  onOpenDetails: (item: any) => void;
}) => {
  const c = COLOR_MAP[item.color as keyof typeof COLOR_MAP] || COLOR_MAP.emerald;
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      className="relative pl-10 md:pl-16 pb-12 last:pb-0 group text-left"
    >
      {/* Dynamic Spring-Scaling Node Dot */}
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1.2 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`absolute left-[14px] top-8 w-3 h-3 rounded-full bg-gray-900 border-2 ${c.border} z-10 group-hover:scale-130 transition duration-300`}
      />

      <Card className="p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-white/10 shadow-xl shadow-black/10">
        <div className="flex flex-col gap-4">
          
          {/* Header Row: Date & Icon Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${c.badge} backdrop-blur-sm`}>
              {item.date}
              {item.endDate && ` — ${item.endDate}`}
              {item.current && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
            </span>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Icon className={`w-4 h-4 ${c.text}`} />
              </div>
              {type === "education" && item.percentage && (
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${c.badge}`}>
                  {item.percentage}
                </span>
              )}
            </div>
          </div>

          {/* Title & Organization */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-1">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-white/50 mt-0.5">
                {type === "career" ? item.company : item.school}
              </p>
            </div>

            {type === "career" && item.logo && (
              <Image
                src={item.logo}
                alt={item.company}
                width={80}
                height={24}
                className="object-contain opacity-60 h-5 w-auto"
                unoptimized
              />
            )}
          </div>

          {/* Teaser Description */}
          <p className="text-sm text-white/70 leading-relaxed font-light mt-1">
            {item.teaser}
          </p>

          {/* Footer: View Details CTA */}
          <div className="mt-2 pt-4 border-t border-white/[0.05] flex items-center">
            <button
              onClick={() => onOpenDetails(item)}
              className="bg-white text-gray-950 h-10 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-2 cursor-pointer hover:bg-white/90 transition duration-300 text-xs"
            >
              <span>View Details</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>

        </div>
      </Card>
    </motion.div>
  );
};

export const Timeline = () => {
  const [activeTab, setActiveTab] = useState<"career" | "education">("career");
  const [activeMilestone, setActiveMilestone] = useState<any | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position relative to the timeline container list
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Transform scroll range to scaleY progress line
  const scaleY = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

  // Disable background scrolling when modal is active
  useEffect(() => {
    if (activeMilestone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeMilestone]);

  return (
    <section id="timeline" className="py-24 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="My Journey & Growth"
          title="Professional Milestones"
          description="Key moments that shaped my development career and academic foundation."
        />

        {/* sliding Tab selector */}
        <div className="flex justify-center mt-12 mb-16">
          <div className="flex p-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md relative">
            {["career", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`relative px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  activeTab === tab ? "text-black" : "text-white/60 hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="timeline-active-tab"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {tab === "career" ? "Career Experience" : "Education"}
              </button>
            ))}
          </div>
        </div>

        {/* Milestone Timeline List container */}
        <div ref={containerRef} className="max-w-2xl mx-auto relative mt-16 pl-2">
          
          {/* Background Track Line (Muted) */}
          <div className="absolute left-[19px] top-8 bottom-8 w-[2px] bg-white/5" />

          {/* Animated Glowing Progress Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[19px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-emerald-400 via-sky-400 to-emerald-500 origin-top z-0"
          />

          {activeTab === "career"
            ? CAREER_DATA.map((item, index) => (
                <TimelineItem
                  key={item.date}
                  item={item}
                  index={index}
                  type="career"
                  onOpenDetails={(val) => setActiveMilestone(val)}
                />
              ))
            : EDUCATION_DATA.map((item, index) => (
                <TimelineItem
                  key={item.date}
                  item={item}
                  index={index}
                  type="education"
                  onOpenDetails={(val) => setActiveMilestone(val)}
                />
              ))}
        </div>
      </div>

      {/* Milestone Details Modal */}
      <AnimatePresence>
        {activeMilestone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md cursor-default pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-2xl w-full bg-gray-900 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md text-white flex flex-col gap-6"
            >
              {/* Close Button */}
              <div className="absolute top-6 right-6 z-20">
                <button
                  onClick={() => setActiveMilestone(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Header */}
              <div className="flex flex-col gap-3 pr-12">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
                  COLOR_MAP[activeMilestone.color as keyof typeof COLOR_MAP]?.badge
                } backdrop-blur-sm w-max`}>
                  {activeMilestone.date}
                  {activeMilestone.endDate && <span className="text-white/30">— {activeMilestone.endDate}</span>}
                  {activeMilestone.current && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                </span>
                
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                  {activeMilestone.title}
                </h3>
                <div className="flex items-center gap-3">
                  <p className="text-base font-semibold text-white/60">
                    {activeMilestone.company || activeMilestone.school}
                  </p>
                  {activeMilestone.logo && (
                    <Image
                      src={activeMilestone.logo}
                      alt={activeMilestone.company}
                      width={80}
                      height={24}
                      className="object-contain opacity-80 h-5 w-auto"
                      unoptimized
                    />
                  )}
                </div>
              </div>

              {/* Modal Body */}
              <div className="border-t border-white/[0.08] pt-6 flex flex-col gap-4">
                <p className="text-white/80 leading-relaxed text-sm md:text-base font-light">
                  {activeMilestone.description}
                </p>
              </div>

              {/* Modal Footer: Skills or Performance indicator */}
              {activeMilestone.skills && (
                <div className="border-t border-white/[0.08] pt-6 flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">Key Skills & Technologies</span>
                  <div className="flex flex-wrap gap-2">
                    {activeMilestone.skills.map((skill: string) => (
                      <span key={skill} className="px-3 py-1 rounded-md text-xs font-semibold bg-white/5 border border-white/10 text-white/70">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeMilestone.percentage && (
                <div className="border-t border-white/[0.08] pt-6 flex justify-between items-center">
                  <span className="text-xs font-bold text-white/30 tracking-widest uppercase">Academic Performance</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${
                    COLOR_MAP[activeMilestone.color as keyof typeof COLOR_MAP]?.badge
                  }`}>
                    {activeMilestone.percentage}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Nutshell />
    </section>
  );
};