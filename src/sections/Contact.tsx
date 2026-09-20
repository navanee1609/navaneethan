"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaCopy,
  FaCheck,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaClock,
  FaRedo,
} from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/sections/SectionHeader";
import { AppButton } from "@/components/AppButton";

const contactLinks = [
  {
    label: "LinkedIn",
    handle: "navaneethan-k-v",
    href: "https://www.linkedin.com/in/navaneethan-k-v-546a9025b",
    icon: FaLinkedin,
    brandColor: "#0A66C2",
    hoverBorder: "hover:border-[#0A66C2]/50 hover:shadow-[0_4px_20px_rgba(10,102,194,0.25)] hover:bg-[#0A66C2]/10",
  },
  {
    label: "WhatsApp",
    handle: "+91 76390 96688",
    href: "https://wa.me/917639096688?text=Hi%20Navaneethan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    icon: FaWhatsapp,
    brandColor: "#25D366",
    hoverBorder: "hover:border-[#25D366]/50 hover:shadow-[0_4px_20px_rgba(37,211,102,0.25)] hover:bg-[#25D366]/10",
  },
  {
    label: "Instagram",
    handle: "@navneethkrishna_05",
    href: "https://www.instagram.com/navneethkrishna_05/profilecard/?igsh=enk2MzVleHo5NTZl",
    icon: FaInstagram,
    brandColor: "#E4405F",
    hoverBorder: "hover:border-[#E4405F]/50 hover:shadow-[0_4px_20px_rgba(228,64,95,0.25)] hover:bg-[#E4405F]/10",
  },
  {
    label: "Email",
    handle: "navaneethanvs18@gmail.com",
    href: "mailto:navaneethanvs18@gmail.com?subject=Portfolio%20Inquiry",
    icon: FaEnvelope,
    brandColor: "#10B981",
    hoverBorder: "hover:border-emerald-400/50 hover:shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:bg-emerald-400/10",
  },
  {
    label: "Phone",
    handle: "+91 76390 96688",
    href: "tel:+917639096688",
    icon: FaPhoneAlt,
    brandColor: "#38BDF8",
    hoverBorder: "hover:border-sky-400/50 hover:shadow-[0_4px_20px_rgba(56,189,248,0.25)] hover:bg-sky-400/10",
  },
];

function ContactPill({ item }: { item: (typeof contactLinks)[number] }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  const actionTag =
    item.label === "Email" || item.href.startsWith("mailto:")
      ? "Mail"
      : item.label === "Phone" || item.href.startsWith("tel:")
        ? "Call"
        : item.label === "Instagram"
          ? "Explore"
          : item.label === "LinkedIn"
            ? "Connect"
            : item.label === "WhatsApp"
              ? "Chat"
              : "Visit";

  return (
    <div className="relative">
      <div className="absolute -top-12 inset-x-0 flex justify-center z-50 pointer-events-none">
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.88 }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              className="relative"
            >
              {/* Dynamic Island style glass capsule */}
              <div className="relative bg-gray-950/90 border border-white/20 text-white font-mono text-[11px] px-3.5 py-1.5 rounded-full shadow-2xl backdrop-blur-xl flex items-center gap-2.5 whitespace-nowrap">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse"
                  style={{ backgroundColor: item.brandColor }}
                />

                <span className="text-white/90 font-medium tracking-tight">
                  {item.handle}
                </span>

                <span className="text-[9px] text-emerald-400 font-semibold uppercase tracking-wider bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                  {actionTag} ↗
                </span>
              </div>

              {/* Arrow pointer */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-950/90 border-b border-r border-white/20 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.a
        href={item.href}
        target={
          item.href.startsWith("mailto:") || item.href.startsWith("tel:")
            ? undefined
            : "_blank"
        }
        rel="noopener noreferrer"
        onClick={(e) => {
          if (item.href.startsWith("mailto:") || item.href.startsWith("tel:")) {
            window.location.href = item.href;
          } else {
            e.preventDefault();
            window.open(item.href, "_blank", "noopener,noreferrer");
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        aria-label={item.label}
        className={twMerge(
          "group flex items-center justify-between px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300 shadow-sm cursor-pointer hover:border-emerald-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/10"
        )}
      >
        <div className="flex items-center gap-3 min-w-0">
          <Icon className="text-white text-base transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
          <span className="text-xs font-semibold tracking-wide text-white/90 group-hover:text-white truncate">
            {item.label}
          </span>
        </div>

        <ArrowUp className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 ml-1" />
      </motion.a>
    </div>
  );
}

export const ContactSection = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "navaneethanvs18@gmail.com";



  const handleCopyEmail = () => {
    console.log("Copy email clicked:", emailAddress);

    navigator.clipboard.writeText(emailAddress);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);


  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    console.log("Contact form submitted");

    setIsSending(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted successfully:", data);

        setIsSuccess(true);
        setIsSending(false);

        form.reset();

        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Form submission error:", error);

        setIsSending(false);
      });


  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 relative overflow-hidden"
    >

      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrow="GET IN TOUCH"
          title="Let's Build Something Amazing Together"
          description="Have a project idea, a job opportunity, or just want to connect? Send a message below or reach out directly!"
        />

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12 relative">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative z-20 space-y-6"
          >
            {/* Live Availability Card */}
            <div className="bg-gray-800/70 border border-emerald-500/30 rounded-3xl p-6 relative overflow-hidden backdrop-blur-md shadow-xl group isolate">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />

                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
                  </span>

                  <span className="text-emerald-300 font-semibold text-sm tracking-wide uppercase">
                    Available for Hire & Collaboration
                  </span>
                </div>

                <h3 className="text-xl font-serif text-white mt-3 leading-snug">
                  Open for full-time roles, freelance projects & exciting tech
                  ideas.
                </h3>

                <p className="text-white/60 text-sm mt-2 leading-relaxed">
                  Fast turnarounds, clean modular code, and high-impact designs
                  tailored to your vision.
                </p>
              </div>
            </div>

            {/* DIRECT CONTACT CARDS */}
            <div className="bg-gray-800/80 border border-white/15 rounded-3xl p-6 backdrop-blur-md shadow-xl space-y-5 relative overflow-hidden isolate">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              />

              <div className="relative z-10 space-y-5">
                {/* EMAIL */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-3 bg-emerald-400/10 text-emerald-400 rounded-xl flex-shrink-0">
                      <FaEnvelope className="text-lg" />
                    </div>

                    <div className="truncate">
                      <p className="text-xs text-white/50 font-medium uppercase tracking-wider">
                        Direct Email
                      </p>

                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-sm font-medium text-white hover:text-emerald-300 transition-colors truncate block cursor-pointer"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyEmail}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-white/10 hover:bg-emerald-400 hover:text-gray-900 text-white transition-all duration-200 flex-shrink-0 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <FaCheck className="text-xs text-emerald-400 group-hover:text-gray-900" />

                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="text-xs" />

                        <span>Copy</span>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* LOCATION */}
                <a
                  href="https://www.google.com/maps?q=13.0678784,80.1767424"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.google.com/maps?q=13.0678784,80.1767424", "_blank", "noopener,noreferrer");
                  }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/40 transition-colors group cursor-pointer"
                >
                  <div className="p-3 bg-sky-400/10 text-sky-400 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>

                  <div>
                    <p className="text-xs text-white/50 font-medium uppercase tracking-wider">
                      Location
                    </p>

                    <p className="text-sm font-medium text-white group-hover:text-sky-300 transition-colors">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </a>

                {/* PHONE / WHATSAPP */}
                <a
                  href="https://wa.me/917639096688?text=Hi%20Navaneethan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://wa.me/917639096688?text=Hi%20Navaneethan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!", "_blank", "noopener,noreferrer");
                  }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors group cursor-pointer"
                >
                  <div className="p-3 bg-emerald-400/10 text-emerald-400 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                    <FaPhoneAlt className="text-lg" />
                  </div>

                  <div>
                    <p className="text-xs text-white/50 font-medium uppercase tracking-wider">
                      Phone / WhatsApp
                    </p>

                    <span className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
                      +91 76390 96688
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* FROSTED BADGES — 2 COLUMNS WITH HOVER TOOLTIPS */}
            <div className="bg-gray-800/60 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-xl relative z-30">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-white/50 font-semibold uppercase tracking-wider">
                    Connect Across Platforms
                  </p>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Direct Channels
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {contactLinks.map((item) => (
                    <ContactPill key={item.label} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="lg:col-span-7 relative z-0 pointer-events-none"
          >
            <div className="pointer-events-auto bg-gray-800/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden isolate">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              />

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success-card"
                      initial={{ opacity: 0, scale: 0.94, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="relative flex flex-col items-center justify-center text-center py-4 sm:py-6 px-1 space-y-4 sm:space-y-5"
                    >
                      {/* Background Ambient Glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-emerald-500/20 via-teal-400/20 to-sky-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

                      {/* Animated Checkmark Badge */}
                      <div className="relative">
                        <span className="absolute -inset-2.5 rounded-full bg-emerald-400/20 animate-ping opacity-75" />
                        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 opacity-30 blur-md" />

                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-950/60 border border-emerald-400/50 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.35)] backdrop-blur-xl">
                          <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.1 }}
                          >
                            <FaCheckCircle className="text-emerald-400 text-2xl sm:text-3xl" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Text Details */}
                      <div className="space-y-1.5 max-w-md">
                        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Delivered to Inbox
                        </div>

                        <h3 className="text-xl sm:text-2xl font-serif text-white tracking-tight">
                          Message Sent Successfully!
                        </h3>

                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed px-2">
                          Thank you for reaching out! Your message has landed safely in Navaneethan&apos;s inbox. I will review it and reply promptly.
                        </p>
                      </div>

                      {/* Metadata Cards (Side-by-Side 2 Columns on Mobile & Desktop) */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-md text-left">
                        <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 sm:gap-2.5 backdrop-blur-md min-w-0">
                          <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-400/10 text-emerald-400 flex-shrink-0">
                            <FaClock className="text-xs sm:text-sm" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-white/40 uppercase font-bold text-[9px] sm:text-[10px] tracking-wider truncate">Expected Reply</p>
                            <p className="text-white text-[11px] sm:text-xs font-semibold truncate">Within 24 Hours</p>
                          </div>
                        </div>

                        <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 sm:gap-2.5 backdrop-blur-md min-w-0">
                          <div className="p-1.5 sm:p-2 rounded-lg bg-sky-400/10 text-sky-400 flex-shrink-0">
                            <FaEnvelope className="text-xs sm:text-sm" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-white/40 uppercase font-bold text-[9px] sm:text-[10px] tracking-wider truncate">Direct Mail</p>
                            <p className="text-white text-[11px] sm:text-xs font-semibold truncate" title="navaneethanvs18@gmail.com">navaneethanvs18@gmail.com</p>
                          </div>
                        </div>
                      </div>

                      {/* Action & Auto-Reset Timer */}
                      <div className="w-full max-w-md pt-1 space-y-2.5">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          onClick={() => setIsSuccess(false)}
                          className="w-full h-10 px-4 rounded-xl bg-white/10 hover:bg-emerald-400 hover:text-gray-950 text-white font-semibold text-xs transition-all duration-300 border border-white/15 hover:border-emerald-400 shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                        >
                          <FaRedo className="text-xs group-hover:rotate-180 transition-transform duration-500" />
                          <span>Send Another Message</span>
                        </motion.button>

                        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden relative">
                          <motion.div
                            initial={{ width: "100%" }}
                            animate={{ width: "0%" }}
                            transition={{ duration: 5, ease: "linear" }}
                            className="h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="contact-form"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-serif text-white">
                            Send a Message
                          </h3>

                          <p className="text-white/60 text-sm mt-1">
                            Fill in the details below and I&apos;ll get back to you
                            promptly.
                          </p>
                        </div>

                        <div className="hidden sm:flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-sky-400/20 border border-white/10">
                          <FaPaperPlane className="text-emerald-300 text-xl" />
                        </div>
                      </div>

                      <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <input
                          type="hidden"
                          name="access_key"
                          value="89c046ff-8f76-47dd-9562-7105809a3576"
                        />

                        {/* NAME + EMAIL */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-white/70 mb-1.5">
                              Your Name{" "}
                              <span className="text-emerald-400">*</span>
                            </label>

                            <input
                              type="text"
                              name="name"
                              placeholder="John Doe"
                              className="w-full px-4 py-3 border border-white/15 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 rounded-xl text-white bg-gray-900/60 placeholder-white/30 outline-none transition-all duration-300"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-white/70 mb-1.5">
                              Your Email{" "}
                              <span className="text-emerald-400">*</span>
                            </label>

                            <input
                              type="email"
                              name="email"
                              placeholder="john@example.com"
                              className="w-full px-4 py-3 border border-white/15 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 rounded-xl text-white bg-gray-900/60 placeholder-white/30 outline-none transition-all duration-300"
                              required
                            />
                          </div>
                        </div>

                        {/* PHONE + SUBJECT */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-white/70 mb-1.5">
                              Phone Number
                            </label>

                            <input
                              type="tel"
                              name="phone"
                              placeholder="+91 98765 43210"
                              className="w-full px-4 py-3 border border-white/15 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 rounded-xl text-white bg-gray-900/60 placeholder-white/30 outline-none transition-all duration-300"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-white/70 mb-1.5">
                              Subject{" "}
                              <span className="text-emerald-400">*</span>
                            </label>

                            <input
                              type="text"
                              name="subject"
                              placeholder="Project Discussion / Inquiry"
                              className="w-full px-4 py-3 border border-white/15 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 rounded-xl text-white bg-gray-900/60 placeholder-white/30 outline-none transition-all duration-300"
                              required
                            />
                          </div>
                        </div>

                        {/* MESSAGE */}
                        <div>
                          <label className="block text-xs font-medium text-white/70 mb-1.5">
                            Your Message{" "}
                            <span className="text-emerald-400">*</span>
                          </label>

                          <textarea
                            name="message"
                            placeholder="Hi Navaneethan, I'd like to discuss a project regarding..."
                            className="w-full px-4 py-3 border border-white/15 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 rounded-xl text-white bg-gray-900/60 placeholder-white/30 outline-none transition-all duration-300"
                            rows={4}
                            required
                          />
                        </div>

                        {/* SUBMIT */}
                        <AppButton
                          type="submit"
                          variant="primary"
                          disabled={isSending}
                          icon={
                            !isSending && !isSuccess ? (
                              <ArrowUp className="size-4" />
                            ) : undefined
                          }
                          className="w-full mt-2 h-12 text-sm font-semibold cursor-pointer"
                        >
                          {isSending ? "Sending Message..." : "Send Message"}
                        </AppButton>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>


  );
};
