"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  X,
  ExternalLink,
  Download,
  Sparkles,
  CheckCircle2,
  FileText,
  Camera,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { Card, AppModal, AppButton, PillBadge } from "@/components";
import { SectionHeader } from "./SectionHeader";

import rockstarImage from "@/assets/images/rockstar.jpg";
import rockstarCertImage from "@/assets/images/rockstar certificate.jpg";
import supersquadImage from "@/assets/images/supersquad.jpg";
import supersquadCertImage from "@/assets/images/super squad certificate.jpg";

interface AwardItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  highlights: string[];
  icon: any;
  color: "emerald" | "cyan";
  certificateImage: string;
  awardImage: string;
}

const AWARDS_DATA: AwardItem[] = [
  {
    id: "rockstar-2025",
    title: "Rockstar Award",
    organization: "Agilysys Technologies",
    date: "2025",
    description:
      "Awarded for outstanding contributions to the Stay R&D team, most notably for leading the 'Post Taxes for Tax Exemption' feature. Navigated multiple complex folio flows with thorough analysis and attention to detail, ensuring a smooth, minimal-defect delivery that significantly enhanced release quality.",
    highlights: ["Stay R&D Lead Contribution", "Tax Exemption Folio Flow", "Zero-Defect Release Quality"],
    icon: Trophy,
    color: "emerald",
    certificateImage: rockstarCertImage.src,
    awardImage: rockstarImage.src,
  },
  {
    id: "super-squad-2025",
    title: "Super Squad Award",
    organization: "Agilysys Technologies",
    date: "2025",
    description:
      "Recognized in the Stay R&D team alongside my squad for playing a pivotal role during the critical bug-fix phase of Shared Reservations. Coordinated effectively across engineering teams to deliver high-quality, reliable fixes under tight production deadlines.",
    highlights: ["Shared Reservations Architecture", "Critical Production Phase", "Cross-Team Engineering Sync"],
    icon: Award,
    color: "cyan",
    certificateImage: supersquadCertImage.src,
    awardImage: supersquadImage.src,
  },
];

export const AwardsSection = () => {
  const [activeAward, setActiveAward] = useState<AwardItem | null>(null);
  const [activeMediaTab, setActiveMediaTab] = useState<"certificate" | "photo">("certificate");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openModal = (award: AwardItem) => {
    setActiveAward(award);
    setActiveMediaTab("certificate");
    setIsLightboxOpen(false);
  };

  const closeModal = () => {
    setActiveAward(null);
    setIsLightboxOpen(false);
  };

  const activeImageSrc = activeAward
    ? activeMediaTab === "certificate"
      ? activeAward.certificateImage
      : activeAward.awardImage
    : "";

  const activeImageTitle = activeAward
    ? activeMediaTab === "certificate"
      ? `${activeAward.title} - Official Certificate`
      : `${activeAward.title} - Award Ceremony`
    : "";

  return (
    <section id="awards" className="py-24 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Recognition & Achievements"
          title="Milestones of Excellence"
          description="Honors and awards received for outstanding contributions and professional performance."
        />

        {/* Homepage Award Cards */}
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
                className="group"
              >
                <Card className="relative h-full p-6 sm:p-8 rounded-3xl bg-gray-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl shadow-black/40 flex flex-col justify-between border border-white/10 hover:border-white/25 overflow-hidden">
                  <div>
                    {/* Top Header: Icon & Verified Pill */}
                    <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
                        <Icon className={`w-6 h-6 ${isEmerald ? "text-emerald-400" : "text-cyan-400"}`} />
                      </div>
                      <PillBadge
                        customStyle="px-3 py-1 rounded-full text-[10.5px] font-mono font-extrabold tracking-widest uppercase border border-white/15 bg-white/5 text-emerald-400"
                        icon={<span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                      >
                        {award.date} • VERIFIED
                      </PillBadge>
                    </div>

                    {/* Organization & Title */}
                    <p className="text-[11px] font-mono font-extrabold tracking-[0.2em] text-emerald-400 uppercase mb-1.5">
                      {award.organization}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                      {award.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed text-sm font-normal mb-6">
                      {award.description}
                    </p>

                    {/* Key Deliverables Highlights with Reusable PillBadge */}
                    <div className="space-y-2 border-t border-white/10 pt-5 mb-6">
                      <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider block">
                        KEY DELIVERABLES
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {award.highlights.map((h, hIdx) => (
                          <PillBadge key={hIdx} colorIndex={hIdx}>
                            ✓ {h}
                          </PillBadge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <AppButton
                      onClick={() => openModal(award)}
                      icon={<ArrowRight className="w-4 h-4" />}
                      fullWidthOnMobile
                    >
                      View Certificate & Media
                    </AppButton>

                    <div className="flex items-center gap-1.5 text-white/40 group-hover:text-white/70 transition-colors justify-end sm:justify-start">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10.5px] font-mono font-bold tracking-wider uppercase">AGILYSYS R&D</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Reusable AppModal Component for Certificate Details */}
      <AppModal
        isOpen={!!activeAward}
        onClose={closeModal}
        title={activeAward?.title}
        badgeDate={activeAward?.date}
        headerActions={
          <>
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              href={activeImageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 hover:text-white transition-all cursor-pointer"
              title="Open Full Image in New Tab"
            >
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              href={activeImageSrc}
              download={`${activeAward?.title}-${activeMediaTab}.jpg`}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 hover:text-white transition-all cursor-pointer"
              title="Download File"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </motion.a>
          </>
        }
      >
        {activeAward && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left Column (7 cols): Media Tabs & Display */}
            <div className="lg:col-span-7 flex flex-col items-center gap-4">
              {/* Media Tab Switcher */}
              <div className="w-full p-1.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveMediaTab("certificate")}
                  title="Official Certificate"
                  aria-label="Official Certificate"
                  className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 cursor-pointer ${
                    activeMediaTab === "certificate"
                      ? "bg-white text-gray-950 font-bold shadow-md"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span className="hidden md:inline">Official Certificate</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveMediaTab("photo")}
                  title="Award Photo"
                  aria-label="Award Photo"
                  className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 cursor-pointer ${
                    activeMediaTab === "photo"
                      ? "bg-white text-gray-950 font-bold shadow-md"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Camera className="w-4 h-4" />
                  <span className="hidden md:inline">Award Photo</span>
                </motion.button>
              </div>

              {/* Image Display Card */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-black/80 p-3 flex items-center justify-center group/cert min-h-[260px] sm:min-h-[380px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeMediaTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    src={activeImageSrc}
                    alt={activeImageTitle}
                    className="max-h-[44vh] sm:max-h-[50vh] w-auto max-w-full rounded-xl object-contain shadow-lg"
                  />
                </AnimatePresence>

                {/* Expand Zoom Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLightboxOpen(true);
                  }}
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-black/80 border border-white/20 text-[11px] sm:text-xs font-semibold text-white flex items-center gap-1.5 hover:bg-white hover:text-gray-950 transition-colors cursor-pointer shadow-lg"
                  title="Expand Lightbox"
                  aria-label="Expand Lightbox"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Click to Expand</span>
                </motion.button>
              </div>
            </div>

            {/* Right Column (5 cols): Narrative Details & Specs */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div>
                <p className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-1.5">
                  {activeAward.organization}
                </p>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {activeAward.title}
                </h4>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-white/80 leading-relaxed text-xs sm:text-sm font-normal">
                  {activeAward.description}
                </p>
              </div>

              {/* Key Impact Tags with Reusable PillBadge */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                <span className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-wider block">
                  KEY DELIVERABLES & IMPACT
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeAward.highlights.map((h, hIdx) => (
                    <PillBadge
                      key={hIdx}
                      colorIndex={hIdx}
                      icon={<CheckCircle2 className="w-3.5 h-3.5 shrink-0" />}
                    >
                      {h}
                    </PillBadge>
                  ))}
                </div>
              </div>

              {/* Verified Credential Spec */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mt-2 space-y-3">
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-white/40 block text-[9.5px] uppercase tracking-wider">RECIPIENT</span>
                    <span className="text-white font-bold">Navaneethan KV</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[9.5px] uppercase tracking-wider">VERIFICATION</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Authenticated
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-white/50">
                  <span>ISSUER: AGILYSYS R&D</span>
                  <span>YEAR: {activeAward.date}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </AppModal>

      {/* Lightbox Zoom Overlay */}
      {isLightboxOpen && activeAward && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-10 bg-black/95 cursor-default"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-xl z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </motion.button>

          <div className="relative max-w-6xl max-h-[90vh] flex items-center justify-center p-2">
            <img
              src={activeImageSrc}
              alt={activeImageTitle}
              className="max-h-[88vh] max-w-[92vw] w-auto h-auto rounded-2xl object-contain shadow-2xl border border-white/20"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};
