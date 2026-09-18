"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navanee from "@/assets/images/Navanee.png";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";
import { FaMapPin } from "react-icons/fa";

const ContactAnimation = () => {
  return (
    <Card className="h-[320px] p-0 relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl group cursor-pointer">
      <a
        href="https://www.google.com/maps?q=13.0678784,80.1767424"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full relative"
      >
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/mapvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Ambient Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-gray-950/60" />
        </div>

        {/* Top Header Layer */}
        <div className="relative z-20 p-6">
          <CardHeader title="Reach me" description="" className="text-white" />
        </div>

        {/* Centered Avatar with Glowing Pulse Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative size-16 sm:size-20">
            {/* Emerald Glowing Pulse Rings */}
            <div className="absolute -inset-2 rounded-full bg-emerald-400/50 animate-ping" />
            <div className="absolute -inset-1 rounded-full bg-emerald-400/40" />

            {/* Profile Avatar Image */}
            <Image
              src={Navanee}
              alt="Navaneethan KV Location"
              className="size-16 sm:size-20 rounded-full relative z-10 border-2 border-white object-cover object-top shadow-xl"
            />
          </div>
        </div>

        {/* Location Label Badge */}
        <motion.div
          className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-20"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gray-950/80 border border-white/20 backdrop-blur-md shadow-lg group-hover:border-emerald-400/50 transition-colors">
            <FaMapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 animate-bounce" />
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
              Chennai, India
            </span>
          </div>
        </motion.div>
      </a>
    </Card>
  );
};

export default ContactAnimation;
