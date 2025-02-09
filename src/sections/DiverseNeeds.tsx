import Image from "next/image";
import { ArrowRight, ArrowUp, MousePointer2 as LuMousePointer2 } from "lucide-react";
import Navaneethan from "@/assets/images/Navaneethan.png";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import grainImage from "@/assets/images/grain.jpg";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { SectionHeader } from "./SectionHeader";

export default function DiverseNeeds() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container text-white">
      <div className="mx-auto px-4 py-16">
        {/* About Me Section */}
        <div className="relative">
          <SectionHeader
            eyebrow="Who I Am"
            title="My journey in a few words"
            description=""
          />
          {/* Reduced overall vertical margin on the grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start my-8">
            <div className="space-y-6">
            <p className="text-[#9BA1A6] leading-relaxed text-lg w-full text-justify mx-auto font-manrope">
  I’m a passionate front-end developer with 1 year of experience dedicated to crafting pixel-perfect, responsive web experiences. Leveraging modern technologies like HTML, CSS, and JavaScript—along with libraries such as React and frameworks like Next.js — I transform innovative ideas into interactive, user-friendly interfaces. With a keen eye for detail and a commitment to quality, I merge design and functionality to build digital solutions that not only look great but perform flawlessly.
</p>

              <button
          onClick={openModal}
          className="px-6 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-200 transition flex items-center gap-2 lg:mx-0 mt-8"
        >
          <span className="font-semibold">Know More</span>
          <ArrowRight className="w-5 h-5" />

        </button>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-[350px]">
                {/* White polaroid frame */}
                <div className="bg-white p-5 mb-6 md:mb-2 rounded-xl rotate-3 shadow-xl">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={Navaneethan}
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


        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center mx-2 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={twMerge(
                "bg-gray-800 rounded-3xl p-6 w-full max-w-md relative z-0 overflow-hidden after:absolute after:inset-0 after:border-2 after:border-white/20 after:rounded-3xl after:pointer-events-none after:z-[-1]",
                "transition-all transform duration-500 ease-out opacity-0 scale-95",
                isModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition"
                onClick={closeModal}
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl text-black" />
              </button>

              {/* Background grain image */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                  zIndex: -1,
                }}
              ></div>

              {/* Modal Content */}
              <SectionHeader eyebrow="Dive Into My World" title="" description="" />

              {/* About Me Content */}
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed max-h-[400px] overflow-y-auto">
                <motion.p
                  className="text-lg font-bold text-teal-400"
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  React & Next.js Developer | Building Seamless User Experiences
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
                  Let’s collaborate and build something exceptional together!
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
                      color: "#00bfae",
                      transition: { type: "spring", stiffness: 100 },
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
                      transition: { type: "spring", stiffness: 300 },
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
      </div>
    </div>
  );
}
