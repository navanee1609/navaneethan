"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, X, ArrowRight } from "lucide-react";
import { Card } from "@/components/Card";
import { SectionHeader } from "./SectionHeader";
import rockstarImage from "@/assets/images/rockstar.jpg";
import supersquadImage from "@/assets/images/supersquad.jpg";

interface AwardItem {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: any;
  color: string;
  image: string;
}

const AWARDS_DATA: AwardItem[] = [
  {
    title: "Rockstar Award",
    organization: "Agilysys Technologies",
    date: "2025",
    description: "Awarded for outstanding contributions to the Stay R&D team, most notably for the 'Post Taxes for Tax Exemption' feature. Navigated multiple complex folio flows with thorough analysis and attention to detail, ensuring a a smooth, minimal-defect delivery that significantly enhanced release quality.",
    icon: Trophy,
    color: "emerald",
    image: rockstarImage.src,
  },
  {
    title: "Super Squad Award",
    organization: "Agilysys Technologies",
    date: "2025",
    description: "Recognized in the Stay R&D team alongside my squad for playing a significant role during the critical bug-fix phase of Shared Reservations. Coordinated effectively across teams and worked extra hours to deliver high-quality, reliable fixes under tight schedules.",
    icon: Award,
    color: "cyan",
    image: supersquadImage.src,
  },
];

const COLOR_MAP = {
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    accent: "bg-emerald-400",
  },
  cyan: {
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
    accent: "bg-cyan-400",
  },
};

export const AwardsSection = () => {
  const [activeAward, setActiveAward] = useState<AwardItem | null>(null);

  // Disable background scrolling when modal is active
  useEffect(() => {
    if (activeAward) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeAward]);

  return (
    <section id="awards" className="py-24 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Recognition & Achievements"
          title="Milestones of Excellence"
          description="Honors and awards received for outstanding contributions and professional performance."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {AWARDS_DATA.map((award, index) => {
            const c = COLOR_MAP[award.color as keyof typeof COLOR_MAP] || COLOR_MAP.emerald;
            const Icon = award.icon;

            return (
              <motion.div
                key={award.title + award.organization}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <Card className="relative h-full p-8 rounded-3xl bg-gray-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl shadow-black/10 flex flex-col justify-between border border-white/5">
                  <div>
                    {/* Header: Icon & Date Badge */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-white/20">
                        <Icon className={`w-5 h-5 ${c.text}`} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${c.badge} backdrop-blur-sm`}>
                        {award.date}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <p className="text-[10px] font-extrabold tracking-[0.2em] text-white/40 uppercase mb-2">
                      {award.organization}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                      {award.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 leading-relaxed text-sm font-light">
                      {award.description}
                    </p>
                  </div>

                  {/* Card Footer: Interactive CTA */}
                  <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                    {award.image ? (
                      <button
                        onClick={() => {
                          setActiveAward(award);
                        }}
                        className="bg-white text-gray-950 h-10 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-4 cursor-pointer hover:bg-white/90 transition duration-300"
                      >
                        <span>View Certificate</span>
                        <ArrowRight className="size-4" />
                      </button>
                    ) : (
                      <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">Verified Achievement</span>
                    )}
                    <div className={`w-2 h-2 rounded-full ${c.accent} bg-current opacity-70`} />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Premium Showcase Modal */}
      <AnimatePresence>
        {activeAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm cursor-default pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <Card className="relative p-6 md:p-10 rounded-3xl bg-gray-900 border border-white/10 shadow-2xl flex flex-col gap-8 text-white overflow-hidden">
                {/* Top aesthetic gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-300 via-sky-400 to-emerald-300 z-10" />

                {/* Close Button */}
                <div className="absolute top-6 right-6 z-20">
                  <button
                    onClick={() => setActiveAward(null)}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Responsive Split Pane Layout */}
                <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 items-center mt-4">
                  
                  {/* Left Column: Framed Certificate Image */}
                  <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-2 flex items-center justify-center shadow-inner">
                    <img
                      src={activeAward.image}
                      alt={activeAward.title}
                      className="max-h-[50vh] md:max-h-[60vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                    />
                  </div>

                  {/* Right Column: Detailed Credentials Metadata */}
                  <div className="flex flex-col gap-6">
                    
                    {/* Header bar */}
                    <div>
                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-widest uppercase border border-white/10 bg-white/5 text-white/60">
                          {activeAward.date}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-widest uppercase border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                          Active Credential
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none">
                        {activeAward.title}
                      </h3>
                      <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1.5">
                        {activeAward.organization}
                      </p>
                    </div>

                    {/* Detailed award summary */}
                    <div className="border-t border-white/[0.08] pt-6">
                      <p className="text-white/70 leading-relaxed text-sm font-light">
                        {activeAward.description}
                      </p>
                    </div>

                    {/* Verification / recipient block */}
                    <div className="border-t border-white/[0.08] pt-6 flex flex-col gap-3">
                      <span className="text-[9px] font-bold text-white/30 tracking-widest uppercase">Credential Verification</span>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                        <div>
                          <span className="text-white/40 block text-[10px]">RECIPIENT</span>
                          <span className="text-white font-medium">Navaneethan KV</span>
                        </div>
                        <div>
                          <span className="text-white/40 block text-[10px]">ORGANISATION</span>
                          <span className="text-white font-medium">{activeAward.organization}</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
