"use client";

import Image from "next/image";
import { ArrowRight, MousePointer2 as LuMousePointer2 } from "lucide-react";
import Navanee from "@/assets/images/Navanee.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SectionHeader } from "./SectionHeader";
import { DiveIntoMyWorldModal } from "@/components/DiveIntoMyWorldModal";

export default function DiverseNeeds() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className="container text-white">
      <div className="mx-auto px-4 py-16">
        {/* About Me Section */}
        <div className="relative">
          <SectionHeader
            eyebrow="Who I Am"
            title="From Blueprints to Browsers"
            description=""
          />
          {/* Reduced overall vertical margin on the grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start my-8">
            <div className="space-y-6">
              <p className="text-[#9BA1A6] leading-relaxed text-lg w-full text-justify mx-auto font-manrope">
                I&apos;m a front-end developer with hands-on experience building product UIs with Angular and client-facing web apps with React.js and Next.js. My background in Mechanical Engineering shapes how I approach front-end work — breaking problems down systematically and optimizing for performance, not just polish. That mindset has translated into real results, including a 20% reduction in page load times on past projects. I care about interfaces that are fast and functional first, visually refined second — because the best-looking UI is worthless if it&apos;s slow.
              </p>

              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="px-6 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-200 transition flex items-center gap-2 lg:mx-0 mt-8 cursor-pointer"
              >
                <span className="font-semibold">Know More</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-[350px]">
                {/* White polaroid frame */}
                <div className="bg-white p-5 mb-6 md:mb-2 rounded-xl rotate-3 shadow-xl">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={Navanee}
                      alt="Portrait photo"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                {/* Mouse pointer icon and tooltip with responsive positioning */}
                <div className="absolute bottom-[-40px] md:bottom-[-70px] left-1/2 -translate-x-1/2 flex flex-col items-center mb-4">
                  <LuMousePointer2 className="mb-1 text-2xl" />
                  <div className="bg-gradient-to-r from-emerald-400 to-sky-400 text-black text-xs px-3 py-1 rounded">
                    That&apos;s me!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reusable Dive Into My World Modal */}
        <DiveIntoMyWorldModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}
