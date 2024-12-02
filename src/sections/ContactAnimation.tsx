"use client";

import Image from "next/image"; // Assuming Next.js Image component is being used for optimization
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Replaced FaPhone with FaPhoneAlt
import { motion } from "framer-motion"; // Importing framer-motion for animation
import { IconType } from "react-icons"; // Explicitly import IconType

// Import the image (assuming Navaneethan is a local image)
import Navaneethan from "@/assets/images/Navaneethan.jpeg"; // Adjust path as per your structure
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";

const ContactAnimation = () => {
  // Define the social media data with the type of the icon explicitly
  const socialMedia = [
    { icon: FaWhatsapp, link: "https://whatsapp.com", color: "#25D366" },
    { icon: FaInstagram, link: "https://instagram.com", color: "#E4405F" },
    { icon: FaLinkedin, link: "https://linkedin.com", color: "#0077B5" },
    { icon: FaGithub, link: "https://github.com", color: "#333" },
    { icon: FaEnvelope, link: "mailto:example@mail.com", color: "#D44638" },
    { icon: FaPhoneAlt, link: "tel:+1234567890", color: "#25D366" },
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
