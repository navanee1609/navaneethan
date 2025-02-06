"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navaneethan from "@/assets/images/Navaneethan.png";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";
import { FaMapPin } from "react-icons/fa";

const ContactAnimation = () => {
  return (
    <Card className="h-[320px] p-6 relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl">
      <CardHeader title="Reach me" description="" className="mb-6 text-white" />
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {/* Wrap the map container in an anchor tag for redirection */}
        <a 
          href="https://www.google.com/maps?q=13.0678784,80.1767424" 
          target="_blank"  // Open the link in a new tab
          rel="noopener noreferrer"  // For security reasons
          className="relative w-full h-full"
        >
          {/* Local Video Background */}
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              style={{ zIndex: 0 }}
            >
              <source src="/video/mapvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Optional: Add a blur effect or overlay if needed */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        </a>

        {/* Centered Avatar with Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative size-20">
            {/* Ping animation background */}
            <div className="absolute inset-0 rounded-full bg-emerald-300/50 -z-20 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-emerald-300/50 -z-10"></div>
            
            {/* Profile Image */}
            <Image 
              src={Navaneethan || "/placeholder.svg"} 
              alt="profile" 
              className="size-20 rounded-full relative z-10 border-2 border-white"
            />
          </div>
        </div>

        {/* Location Label */}
        <motion.div 
          className="absolute bottom-6 left-6 z-20"  
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900/70 backdrop-blur-sm">
            <FaMapPin className="w-5 h-5 text-pink-500" />
            <span className="text-white text-lg font-semibold">Chennai, India</span>
          </div>
        </motion.div>
      </div>  
    </Card>
  );
};

export default ContactAnimation;
