"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import nutshellImage from "@/assets/images/nutshellImage.png";
import faq from "@/assets/images/faq.png";
import { SectionHeader } from "./SectionHeader";
import { DiveIntoMyWorldModal } from "@/components/DiveIntoMyWorldModal";

const nutshellData = [
  {
    question: "How do you ensure project deadlines are met?",
    answer: "I implement agile methodologies with bi-weekly sprints and daily standups. Using project management tools like Jira, I maintain transparent progress updates to ensure on-time delivery."
  },
  {
    question: "What industries have you worked with?",
    answer: "I've delivered hospitality, fintech, SaaS, and enterprise web platforms — including hotel management product screens at Agilysys."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "I specialize in REST API and GraphQL integrations, connecting payment gateways, CRM platforms, and custom backend microservices with zero workflow disruption."
  },
  {
    question: "What about post-launch support & updates?",
    answer: "I provide continuous post-launch maintenance including performance monitoring, UI component scaling, and priority bug fixes for complete peace of mind."
  }
];

export const Nutshell = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const hotspots = [
    { id: 1, x: "28%", y: "28%", icon: "⚡", title: "20% Page Load Speedup", detail: "Optimized component render cycles & asset chunking" },
    { id: 2, x: "72%", y: "40%", icon: "🎨", title: "Clean UI Craft", detail: "Modular React & Angular component design system" },
    { id: 3, x: "42%", y: "62%", icon: "🤝", title: "Agile Sprint Ready", detail: "REST APIs, bi-weekly sprints & daily standups" },
  ];

  return (
    <section className="text-white w-[95%] px-0 lg:max-w-5xl mx-auto py-16">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12 space-y-8"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <Image
            src={nutshellImage}
            alt="Design Process"
            className="mx-auto w-32 h-32"
            width={128}
            height={128}
          />
        </motion.div>
        <SectionHeader
          eyebrow="Me in a nutshell"
          title="Crafting Digital Excellence"
          description="Combining technical expertise with client-focused processes to deliver exceptional results"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-8 lg:gap-10 p-4 sm:p-6 rounded-2xl border border-white/10 backdrop-blur-sm bg-gradient-to-br from-[#0B162F]/40 to-[#121D3A]/30"
      >

        {/* Left Section - Interactive Parallax Hotspot Card */}
        <motion.div 
          variants={itemVariants}
          className="w-full lg:w-1/2 flex flex-col items-center text-center space-y-4"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2"
          >
            Let&apos;s Build Something Remarkable
          </motion.h2>

          <div className="w-full relative group">
            {/* Clean Razor-Sharp Frame Container */}
            <div className="w-full aspect-[4/3] sm:aspect-square relative overflow-hidden rounded-2xl border border-white/15 bg-gray-950 shadow-2xl">
              <Image
                src={faq}
                alt="Collaboration Process"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Clean Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

              {/* Top Status Bar */}
              <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10.5px] sm:text-[11px] font-bold text-white/90 shadow-md">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Interactive Blueprint • Tap Hotspots
                </div>
              </div>

              {/* Interactive Floating Hotspots */}
              {hotspots.map((spot) => (
                <div
                  key={spot.id}
                  style={{ top: spot.y, left: spot.x }}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                  onMouseEnter={() => setActiveHotspot(spot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  <motion.button
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                    aria-label={`View ${spot.title}`}
                    className={`relative flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-md text-xs font-extrabold cursor-pointer shadow-xl transition-all duration-300 ${
                      activeHotspot === spot.id
                        ? "bg-emerald-400 text-gray-950 ring-4 ring-emerald-400/40"
                        : "bg-gray-900/80 border border-emerald-400/50 text-emerald-300 hover:border-emerald-300"
                    }`}
                  >
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                    <span>{spot.icon}</span>
                  </motion.button>
                </div>
              ))}

              {/* Dynamic Hotspot Information Banner */}
              <AnimatePresence>
                {activeHotspot !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-3 left-3 right-3 z-30 p-3 sm:p-3.5 rounded-2xl bg-gray-950/95 border border-emerald-400/40 backdrop-blur-md text-left shadow-2xl flex items-start gap-2.5"
                  >
                    <span className="text-base select-none p-1.5 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 shrink-0">
                      {hotspots.find((s) => s.id === activeHotspot)?.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <p className="text-[12px] sm:text-[13px] font-bold text-white tracking-tight truncate">
                          {hotspots.find((s) => s.id === activeHotspot)?.title}
                        </p>
                        <button 
                          onClick={(e) => { e.stopPropagation(); setActiveHotspot(null); }}
                          className="text-white/40 hover:text-white text-xs px-1.5 py-0.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                          aria-label="Close hotspot detail"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="text-[10.5px] sm:text-[11px] text-white/70 leading-relaxed">
                        {hotspots.find((s) => s.id === activeHotspot)?.detail}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Card Action & Response Subtext (Original) */}
            <div className="w-full space-y-2 mt-4 text-center">
              <button 
                className="bg-white/90 text-[#0B162F] px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all mx-auto cursor-pointer"
                onClick={openModal}
              >
                👋 Let&apos;s talk
              </button>

              <p className="text-gray-200/90 text-sm font-medium">
                Average response time: 45 minutes
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Minimalist Apple-Style Accordion */}
        <motion.div 
          variants={containerVariants}
          className="w-full lg:w-1/2 flex flex-col justify-center py-2 divide-y divide-white/10"
        >
          {nutshellData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="py-4 first:pt-0 last:pb-0"
              >
                <button
                  className="flex items-center justify-between w-full text-left gap-4 cursor-pointer group py-1"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-base sm:text-lg font-medium tracking-tight transition-colors duration-300 ${
                    isOpen ? "text-emerald-300 font-semibold" : "text-white/85 group-hover:text-white"
                  }`}>
                    {item.question}
                  </h3>

                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "bg-emerald-400/10 border-emerald-400/40 text-emerald-300"
                      : "bg-white/5 border-white/10 text-white/40 group-hover:text-white group-hover:bg-white/10"
                  }`}>
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pb-1 text-white/70 leading-relaxed text-sm sm:text-[14.5px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Reusable Dive Into My World Modal */}
      <DiveIntoMyWorldModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};
