"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Sparkles } from "lucide-react";
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

      {/* Content Section - Bento Box Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10 w-full mt-4">

        {/* Widget 1: Interactive Parallax Hotspot Card (Span 2 columns) */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-[2.5rem] bg-gray-950 border border-white/10 shadow-2xl min-h-[350px] md:min-h-[400px] flex items-center justify-center"
        >
          <Image
            src={faq}
            alt="Collaboration Process"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
          />

          {/* Clean Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

          {/* Top Status Bar */}
          <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white/90 shadow-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Interactive Blueprint
            </div>
            <div className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] font-medium text-white/70">
              Tap points to explore
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
             <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">Let&apos;s Build Something Remarkable</h3>
             <p className="text-white/70 text-sm sm:text-base max-w-md drop-shadow-md">A transparent, agile workflow designed for scale and velocity.</p>
          </div>

          {/* Dim Overlay when a hotspot is active */}
          <AnimatePresence>
            {activeHotspot !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-[25] bg-black/60 backdrop-blur-md pointer-events-none"
              />
            )}
          </AnimatePresence>

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
                className={`relative flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md text-sm font-extrabold cursor-pointer shadow-xl transition-all duration-300 ${
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

          {/* Dynamic Hotspot Information Banner (Centered inside widget) */}
          <AnimatePresence>
            {activeHotspot !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-[90%] sm:w-[75%] max-w-sm pointer-events-none flex justify-center items-center"
              >
                <motion.div
                  initial={{ y: 10, scale: 0.95 }}
                  animate={{ y: 0, scale: 1 }}
                  exit={{ y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-950 border border-white/10 rounded-3xl p-6 sm:p-8 text-center shadow-2xl flex flex-col items-center gap-4 w-full"
                >
                  <span className="text-3xl select-none p-4 rounded-2xl bg-white/5 border border-white/10 text-emerald-300">
                    {hotspots.find((s) => s.id === activeHotspot)?.icon}
                  </span>
                  <div className="flex flex-col gap-2 w-full text-center">
                    <p className="text-lg font-bold text-white tracking-tight">
                      {hotspots.find((s) => s.id === activeHotspot)?.title}
                    </p>
                    <p className="text-[14px] text-white/70 leading-relaxed">
                      {hotspots.find((s) => s.id === activeHotspot)?.detail}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Widget 2: "Let's Talk" Contact Card (Span 1 column) */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-1 flex flex-col justify-center items-center p-8 text-center space-y-6 relative overflow-hidden"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 shadow-inner">
             <span className="text-3xl">👋</span>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Ready to start?</h3>
            <p className="text-white/60 text-sm leading-relaxed">Drop me a line. I usually respond within <span className="text-emerald-400 font-semibold">45 minutes</span> during business hours.</p>
          </div>

          <button 
            className="w-full bg-white text-gray-950 px-6 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            onClick={openModal}
          >
            <Sparkles className="w-5 h-5 text-emerald-600" />
            Dive into my world
          </button>
        </motion.div>

        {/* Widget 3: FAQ Accordion Settings App Style (Span 3 columns) */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-1 md:col-span-3 overflow-hidden md:mt-4"
        >
          <div className="p-6 md:px-8 md:pt-8 md:pb-4 text-center">
            <h3 className="font-serif text-2xl md:text-3xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-white/50 text-sm">Everything you need to know about my process.</p>
          </div>
          
          <div className="flex flex-col p-2 md:p-4 gap-2">
            {nutshellData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={`w-full rounded-2xl transition-all duration-300 ${isOpen ? 'bg-white/10' : 'bg-transparent hover:bg-white/5'}`}>
                  <button
                    className="flex items-center justify-between w-full text-left px-5 md:px-6 py-4 cursor-pointer outline-none group"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={`text-[15px] sm:text-base font-medium tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-emerald-400" : "text-white/80 group-hover:text-white"
                    }`}>
                      {item.question}
                    </span>
                    
                    <span className={`shrink-0 transition-transform duration-500 ease-[0.32,0.72,0,1] ml-4 ${
                      isOpen ? "-rotate-180 text-emerald-400" : "text-white/30 group-hover:text-white/50"
                    }`}>
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
                          opacity: { duration: 0.3, ease: "easeInOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 pt-0">
                          <p className="text-white/60 leading-relaxed text-[14.5px] max-w-3xl">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
        
      </div>

      {/* Reusable Dive Into My World Modal */}
      <DiveIntoMyWorldModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};
