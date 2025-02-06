"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import nutshellImage from "@/assets/images/nutshellImage.png";
import faq from "@/assets/images/faq.png";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "./SectionHeader";

const nutshellData = [
  {
    question: "How do you ensure project deadlines are met?",
    answer: "I implement agile methodologies with bi-weekly sprints and daily standups. Using project management tools like Jira, I maintain clear communication and provide progress updates to ensure timely delivery."
  },
  {
    question: "What industries have you worked with?",
    answer: "I've delivered solutions for fintech, healthcare, e-commerce, and SaaS platforms. My adaptable approach allows me to meet diverse regulatory and user experience requirements."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely. I specialize in REST API and GraphQL integrations, with experience connecting to payment gateways, CRM platforms, and custom enterprise systems."
  },
  {
    question: "What about post-launch support?",
    answer: "I offer tiered support packages including bug fixes, performance optimization, and feature updates. All clients receive detailed documentation and priority support access."
  }
];

export const Nutshell = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

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
        className="flex flex-col lg:flex-row gap-6 sm:gap-8 p-4 rounded-none sm:rounded-2xl border border-white/10 backdrop-blur-sm bg-gradient-to-br from-[#0B162F]/30 to-[#121D3A]/20"
      >

        {/* Left Section - Image Card */}
        <motion.div 
          variants={itemVariants}
          className="w-full lg:w-1/2 flex flex-col items-center text-center space-y-4 sm:space-y-6"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4"
          >
            Let&apos;s Build Something Remarkable
          </motion.h2>
          <div className="w-full relative group">
            <div className="w-full aspect-square relative overflow-hidden rounded-xl">
              <Image
                src={faq}
                alt="Collaboration Process"
                className="object-cover"
                fill
                sizes="100vw"
              />
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-cyan-400/30 to-transparent rounded-l-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-xl" />
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/90 text-[#0B162F] px-8 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all mx-auto"
                  onClick={openModal}
                >
                  👋 Let&apos;s talk
                </motion.button>
                <p className="text-gray-200/90 text-sm font-medium">
                  Average response time: 45 minutes
                </p>
              </div>
            </div>
            <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-400/20 to-transparent pointer-events-none z-0" />
          </div>
        </motion.div>

        {/* Right Section - Accordion */}
        <motion.div 
          variants={containerVariants}
          className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 px-2 sm:px-0"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4"
          >
            Partnership FAQs
          </motion.h2>
          {nutshellData.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-4 sm:p-5 rounded-xl border border-white/10 bg-[#121D3A] hover:border-cyan-400/30 transition-all"
            >
              <button
                className="flex justify-between items-center w-full text-left gap-3"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-base sm:text-lg font-medium text-cyan-100">
                  {item.question}
                </span>
                <span className="text-cyan-400">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
                  ) : (
                    <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
                  )}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                className="overflow-hidden"
              >
                <p className="pt-3 sm:pt-4 text-gray-300/90 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center mx-2 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800 rounded-3xl p-6 w-full max-w-md relative z-0 overflow-hidden after:absolute after:inset-0 after:border-2 after:border-white/20 after:rounded-3xl after:pointer-events-none after:z-[-1] transition-all transform duration-500 ease-out opacity-100 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl text-black" />
            </button>

            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: `url(${grainImage.src})`,
                zIndex: -1,
              }}
            ></div>

            <SectionHeader eyebrow="Dive Into My World" title="" description="" />

            <div className="space-y-4 text-gray-300 text-sm leading-relaxed max-h-[400px] overflow-y-auto">
              <motion.p
                className="text-lg font-bold text-teal-400"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                React & Next.js Developer | Building Seamless User Experiences
              </motion.p>

              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              >
                Passionate about creating responsive and engaging web apps with React, Next.js, and modern web technologies.
              </motion.p>

              <motion.p
                className="text-teal-300 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Why work with me?
              </motion.p>

              <motion.ul
                className="list-disc pl-5 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <motion.li>Creative & Clean Designs</motion.li>
                <motion.li>Innovative Problem Solving</motion.li>
                <motion.li>Constant Learning & Growth</motion.li>
              </motion.ul>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                Let&apos;s collaborate and build something exceptional together!
              </motion.p>

              <motion.div
                className="flex items-center space-x-2 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.2 }}
              >
                <motion.p
                  className="text-teal-300 font-semibold italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    scale: 1.1,
                    color: '#00bfae',
                    transition: { type: 'spring', stiffness: 100 },
                  }}
                >
                  Don’t hesitate to reach out, I’m up for a tech chat or a virtual coffee! ☕
                </motion.p>

                <motion.a
                  href="tel:6380939303"
                  className="w-8 h-8"
                  whileHover={{
                    scale: 1.5,
                    rotate: 20,
                    y: -10,
                    transition: { type: 'spring', stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="text-teal-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <ArrowUp className="text-xl" />
                  </motion.div>
                </motion.a>
              </motion.div>
            </div>

            <div className="flex justify-center mt-4">
              <a
                href="https://drive.google.com/file/d/1ImDljm1VBgIdV9Airxm8VHmd-UEo12pG/view?usp=drive_link"  
                download="Navaneethan KV.pdf"  
                className="mt-4 px-6 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-200 transition flex items-center gap-2"
              >
                <span className="font-semibold">Check Resume</span>
                <ArrowUp className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};