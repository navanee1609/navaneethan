"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, X, ExternalLink, Download, Sparkles, CheckCircle2, ZoomIn, ShieldCheck } from "lucide-react";
import { Card } from "@/components/Card";
import { SectionHeader } from "./SectionHeader";
import rockstarImage from "@/assets/images/rockstar.jpg";
import supersquadImage from "@/assets/images/supersquad.jpg";
import grainImage from "@/assets/images/grain.jpg";

interface AwardItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  highlights: string[];
  icon: any;
  color: "emerald" | "cyan";
  image: string;
}

const AWARDS_DATA: AwardItem[] = [
  {
    id: "rockstar-2025",
    title: "Rockstar Award",
    organization: "Agilysys Technologies",
    date: "2025",
    description: "Awarded for outstanding contributions to the Stay R&D team, most notably for leading the 'Post Taxes for Tax Exemption' feature. Navigated multiple complex folio flows with thorough analysis and attention to detail, ensuring a smooth, minimal-defect delivery that significantly enhanced release quality.",
    highlights: ["Stay R&D Lead Contribution", "Tax Exemption Folio Flow", "Zero-Defect Release Quality"],
    icon: Trophy,
    color: "emerald",
    image: rockstarImage.src,
  },
  {
    id: "super-squad-2025",
    title: "Super Squad Award",
    organization: "Agilysys Technologies",
    date: "2025",
    description: "Recognized in the Stay R&D team alongside my squad for playing a pivotal role during the critical bug-fix phase of Shared Reservations. Coordinated effectively across engineering teams to deliver high-quality, reliable fixes under tight production deadlines.",
    highlights: ["Shared Reservations Architecture", "Critical Production Phase", "Cross-Team Engineering Sync"],
    icon: Award,
    color: "cyan",
    image: supersquadImage.src,
  },
];

export const AwardsSection = () => {
  const [activeAward, setActiveAward] = useState<AwardItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Disable background scrolling & calculate dynamic scrollbar padding
  useEffect(() => {
    if (activeAward) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setActiveAward(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      };
    }
  }, [activeAward]);

  const modalContent = (
    <AnimatePresence>
      {activeAward && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => setActiveAward(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md cursor-default pointer-events-auto overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[90vh] bg-gray-800 border border-white/20 rounded-3xl shadow-2xl shadow-black/80 overflow-hidden relative my-auto text-white flex flex-col after:absolute after:inset-0 after:border-2 after:border-white/10 after:rounded-3xl after:pointer-events-none"
          >
            {/* Background grain texture */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: `url(${grainImage.src})`,
                zIndex: 0,
              }}
            />

            {/* Top gradient accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-300/60 via-sky-400/60 to-emerald-300/60 z-20" />

            {/* Modal Header */}
            <div className="relative z-10 px-5 sm:px-7 py-4 sm:py-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02] shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-2xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0 shadow-sm">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-300">
                      VERIFIED CREDENTIAL
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="text-[10px] font-mono text-white/50">{activeAward.date}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight truncate">
                    {activeAward.title}
                  </h3>
                </div>
              </div>

              {/* Action Buttons matching standard application style */}
              <div className="flex items-center gap-2 shrink-0">
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  href={activeAward.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer shadow-md"
                  title="Open Full Image"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  href={activeAward.image}
                  download={`${activeAward.title}.jpg`}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer shadow-md"
                  title="Download Certificate"
                >
                  <Download className="w-3.5 h-3.5" />
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.08, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  onClick={() => setActiveAward(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer shadow-md"
                  aria-label="Close award modal"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Modal Body: Dual Pane Layout */}
            <div className="relative z-10 p-5 sm:p-8 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">

                {/* Left Column (7 cols): Certificate Image Spotlight */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  <div className="relative w-full overflow-hidden rounded-2xl border border-white/20 bg-gray-900/80 p-3 shadow-2xl flex items-center justify-center group/cert backdrop-blur-sm">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 rounded-2xl blur-xl opacity-0 group-hover/cert:opacity-100 transition-opacity duration-500 -z-10" />
                    <img
                      src={activeAward.image}
                      alt={activeAward.title}
                      className="max-h-[46vh] sm:max-h-[52vh] w-auto max-w-full rounded-xl object-contain shadow-2xl transition-transform duration-500 group-hover/cert:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Right Column (5 cols): Editorial Narrative Details */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div>
                    <p className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-widest mb-1">
                      {activeAward.organization}
                    </p>
                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {activeAward.title}
                    </h4>
                  </div>

                  <div className="border-t border-white/10 pt-3.5">
                    <p className="text-white/70 leading-relaxed text-xs sm:text-sm font-normal">
                      {activeAward.description}
                    </p>
                  </div>

                  {/* Key Impact Tags */}
                  <div className="space-y-2 border-t border-white/10 pt-3.5">
                    <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider block">
                      KEY DELIVERABLES
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeAward.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-3 py-1 rounded-full bg-emerald-300/10 border border-emerald-300/20 text-xs font-semibold text-emerald-300 shadow-sm"
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verified Credential Spec */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mt-1">
                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div>
                        <span className="text-white/40 block text-[9.5px]">RECIPIENT</span>
                        <span className="text-white font-medium">Navaneethan KV</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[9.5px]">VERIFICATION</span>
                        <span className="text-emerald-300 font-bold flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 inline text-emerald-400" /> Verified
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section id="awards" className="py-24 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Recognition & Achievements"
          title="Milestones of Excellence"
          description="Honors and awards received for outstanding contributions and professional performance."
        />

        {/* Retained Homepage Award Cards with Live Certificate Thumbnail Previews */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {AWARDS_DATA.map((award, index) => {
            const isEmerald = award.color === "emerald";
            const Icon = award.icon;

            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
                onClick={() => setActiveAward(award)}
              >
                <Card className="relative h-full p-6 sm:p-7 rounded-3xl bg-gray-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl shadow-black/50 flex flex-col justify-between border border-white/10 hover:border-emerald-400/40 overflow-hidden">

                  {/* Top Header: Icon & Verified Pill */}
                  <div>
                    <div className="flex justify-between items-center mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10 shadow-md">
                        <Icon className={`w-5 h-5 ${isEmerald ? "text-emerald-400" : "text-cyan-400"}`} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10.5px] font-mono font-extrabold tracking-widest uppercase border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 backdrop-blur-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {award.date} • VERIFIED
                      </span>
                    </div>

                    {/* Certificate Thumbnail Preview Frame */}
                    <div className="relative w-full aspect-[16/9] rounded-2xl border border-white/10 bg-black/60 overflow-hidden mb-5 group/img">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-85 group-hover/img:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Zoom Overlay Badge */}
                      <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white flex items-center gap-1.5 shadow-lg group-hover/img:bg-white group-hover/img:text-gray-950 transition-colors">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Inspect Certificate</span>
                      </div>
                    </div>

                    {/* Title & Organization */}
                    <p className="text-[10px] font-mono font-extrabold tracking-[0.2em] text-white/40 uppercase mb-1">
                      {award.organization}
                    </p>
                    <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                      {award.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed text-xs font-normal line-clamp-3">
                      {award.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      className="bg-white hover:bg-gray-100 text-gray-950 h-9 px-5 rounded-xl font-bold inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all duration-300 text-xs"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="size-3.5" />
                    </button>

                    <div className="flex items-center gap-1.5 text-white/40 group-hover:text-emerald-300 transition-colors">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-[10.5px] font-mono font-bold tracking-wider uppercase">AGILYSYS R&D</span>
                    </div>
                  </div>

                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Redesigned Dual-Pane Certificate Modal (Rendered via Portal) */}
      {isMounted && createPortal(modalContent, document.body)}
    </section>
  );
};

