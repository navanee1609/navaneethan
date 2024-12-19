"use client";

import Image from "next/image"; 
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Replaced FaPhone with FaPhoneAlt
import { motion } from "framer-motion"; 
import Navaneethan from "@/assets/images/Navaneethan.png"; 
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";

const ContactAnimation = () => {
  const socialMedia = [
    { icon: FaWhatsapp, link: "https://wa.me/7639096688"
      , color: "#25D366" },
    { icon: FaInstagram, link: "https://https://spritle.slack.com/archives/D072P4WGGEB/p1734005101081149", color: "#E4405F" },
    { icon: FaLinkedin, link: "www.linkedin.com/in/navaneethacn-k-v-546a9025b", color: "#0077B5" },
    { icon: FaGithub, link: "https://github.com/navanee1609", color: "#333" },
    { icon: FaEnvelope, link: "mailto:navaneethanvs18@gmail.com", color: "#D44638" },
    { icon: FaPhoneAlt, link: "tel:+6380939303", color: "#25D366" },
  ];

  return (
    <Card className="h-[320px] p-6 relative col-span-1 md:col-span-2">
      <CardHeader title="Reach me" description="" className="mb-6 text-white" />
      <div className="absolute mt-7 size-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after-outline-2 after-outline-offset-2 after:rounded-full after:outline-gray-950/30">
        {/* Ping animation background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r bg-emerald-300 to-sky-400 -z-20 animate-ping"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r bg-emerald-300 to-sky-400 -z-10"></div>

        {/* Navaneethan Image */}
        <Image src={Navaneethan} alt="smile" className="size-20 rounded-full" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[240px] h-[240px]">
            {/* Mapping Social Media Icons */}
            {socialMedia.map((social, index) => {
              const angle = (360 / 6) * index; // Calculate angle for even spacing
              const radian = (angle * Math.PI) / 180;
              const x = Math.cos(radian) * 100; // Radius of 100px for spacing around the image
              const y = Math.sin(radian) * 100; // Same for y-axis

              return (
                <a
                  key={index}
                  href={social.link}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Icon Styling: Rounded, Shadow, Hover Effects with Framer Motion for animation */}
                  <motion.div
                    className="w-12 h-12 bg-gray-800/90 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-white transition duration-300"
                    whileHover={{
                      scale: 1.4, // Larger scale on hover
                      rotate: 0, // No rotation on hover
                      opacity: 1, // Full opacity on hover
                      transition: { duration: 0.2 }, // Smooth transition for hover
                    }}
                    whileTap={{
                      scale: 0.9, // Shrink the icon when clicked
                    }}
                    animate={{
                      y: [0, -15, 0], // Bounce animation with more amplitude
                      opacity: [1, 0.8, 1], // Pulse effect for opacity
                    }}
                    transition={{
                      duration: 0.6, // Smooth and long transition for the bounce
                      repeat: Infinity, // Continuous bounce
                      repeatType: 'reverse', // Reverse the animation to create a ping effect
                      ease: "easeOut", // Smooth easing for the bouncing effect
                    }}
                  >
                    <motion.div
                      className="w-6 h-6"
                      initial={{ color: "gray" }} // Default color is gray
                      whileHover={{ color: social.color }} // On hover, change to the original color
                      transition={{ duration: 0.3 }} // Smooth transition for the color change
                    >
                      {/* Type Assertion: Explicitly assert that icon is a valid JSX element */}
                      <social.icon className="w-6 h-6" />
                    </motion.div>
                  </motion.div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactAnimation;
