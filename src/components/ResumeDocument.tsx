"use client";

import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaDownload,
  FaCheck,
  FaCopy,
  FaAward,
  FaBolt,
  FaStar,
  FaUsers,
  FaBullseye,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { RESUME_PDF } from "@/constants";

interface ResumeDocumentProps {
  className?: string;
  defaultTheme?: "light" | "dark";
  theme?: "light" | "dark";
  showToolbar?: boolean;
}

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({
  className = "",
  defaultTheme = "dark",
  theme: controlledTheme,
  showToolbar = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [internalTheme, setInternalTheme] = useState<"light" | "dark">(defaultTheme);
  const theme = controlledTheme ?? internalTheme;
  const setTheme = setInternalTheme;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("navaneethanvs18@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isDark = theme === "dark";

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      {/* Top Action / Theme Toolbar */}
      {showToolbar && (
        <div className="w-full flex items-center justify-between gap-3 px-3 py-2 mb-3 rounded-xl bg-white/5 border border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Interactive Resume
            </span>
          </div>

        <div className="flex items-center gap-2">
          {/* Theme switcher */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all text-[11px] font-medium"
            title={isDark ? "Switch to Classic Paper theme" : "Switch to Dark theme"}
          >
            {isDark ? <FaSun className="text-amber-400 w-3 h-3" /> : <FaMoon className="text-sky-300 w-3 h-3" />}
            <span>{isDark ? "Paper View" : "Dark View"}</span>
          </button>

          {/* Quick Copy Email */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all text-[11px] font-medium"
            title="Copy email to clipboard"
          >
            {copied ? <FaCheck className="text-emerald-400 w-3 h-3" /> : <FaCopy className="w-3 h-3" />}
            <span>{copied ? "Copied!" : "Copy Email"}</span>
          </button>

          {/* Download PDF */}
          <a
            href={RESUME_PDF}
            download="Navaneethan_KV_Resume.pdf"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 hover:text-emerald-200 transition-all text-[11px] font-medium"
            title="Download official PDF"
          >
            <FaDownload className="w-3 h-3" />
            <span className="hidden sm:inline">PDF</span>
          </a>
        </div>
      </div>
    )}

      {/* Main Resume Sheet */}
      <div
        className={`w-full max-w-[850px] rounded-xl sm:rounded-2xl shadow-2xl transition-colors duration-300 overflow-hidden text-left border ${
          isDark
            ? "bg-gray-900/95 text-slate-100 border-white/15 shadow-2xl shadow-black/80"
            : "bg-white text-slate-900 border-slate-300 shadow-black/25"
        }`}
      >
        {/* Top accent gradient line matching story ring and app branding */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-300 via-sky-400 to-emerald-300" />

        <div className="p-3.5 sm:p-7 space-y-3.5 sm:space-y-4">
          {/* Header */}
          <header className={`border-b pb-3 sm:pb-4 ${isDark ? "border-white/10" : "border-slate-200"}`}>
            <div className="flex flex-col items-start gap-1 mb-2.5">
              <h1
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight ${
                  isDark ? "text-white" : "text-[#0f172a]"
                }`}
              >
                NAVANEETHAN KV
              </h1>
              <p
                className={`text-[11px] sm:text-xs md:text-sm font-bold tracking-wide ${
                  isDark ? "text-emerald-300" : "text-[#0f766e]"
                }`}
              >
                Front-End Developer <span className="text-white/30 font-normal">|</span> Chennai, India
              </p>
            </div>

            {/* Contact row */}
            <div
              className={`flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1.5 text-[11px] sm:text-xs pt-1 ${
                isDark ? "text-white/70" : "text-slate-700"
              }`}
            >
              <a
                href="tel:6380939303"
                className={`inline-flex items-center gap-1.5 font-medium transition-colors ${
                  isDark ? "hover:text-emerald-300" : "hover:text-teal-700"
                }`}
              >
                <FaPhoneAlt className={isDark ? "text-emerald-400" : "text-teal-700"} />
                <span>6380939303</span>
              </a>

              <a
                href="mailto:navaneethanvs18@gmail.com"
                className={`inline-flex items-center gap-1.5 font-medium transition-colors ${
                  isDark ? "hover:text-emerald-300" : "hover:text-teal-700"
                }`}
              >
                <FaEnvelope className={isDark ? "text-emerald-400" : "text-teal-700"} />
                <span>navaneethanvs18@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/navaneethan-k-v-546a9025b"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 font-medium transition-colors ${
                  isDark ? "hover:text-cyan-300" : "hover:text-teal-700"
                }`}
              >
                <FaLinkedin className={isDark ? "text-cyan-400" : "text-teal-700"} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/navanee1609"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 font-medium transition-colors ${
                  isDark ? "hover:text-cyan-300" : "hover:text-teal-700"
                }`}
              >
                <FaGithub className={isDark ? "text-cyan-400" : "text-teal-700"} />
                <span>GitHub</span>
              </a>

              <a
                href="https://navaneethan.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 font-medium transition-colors ${
                  isDark ? "hover:text-emerald-300" : "hover:text-teal-700"
                }`}
              >
                <FaGlobe className={isDark ? "text-emerald-400" : "text-teal-700"} />
                <span>Portfolio</span>
              </a>

              <span className="inline-flex items-center gap-1.5 font-medium">
                <FaMapMarkerAlt className={isDark ? "text-emerald-400" : "text-teal-700"} />
                <span>Chennai</span>
              </span>
            </div>
          </header>

          {/* Two-Column Grid Body */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 items-start">
            {/* Left Column (35%) */}
            <div className="md:col-span-5 space-y-3.5 order-2 md:order-1">
              {/* SKILLS */}
              <section>
                <h2
                  className={`text-xs font-black tracking-wider uppercase pb-1.5 mb-2.5 border-b-2 ${
                    isDark
                      ? "text-emerald-300 border-emerald-400/30"
                      : "text-slate-900 border-[#0f766e]"
                  }`}
                >
                  Skills
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "ANGULAR",
                    "REACT.JS",
                    "TYPESCRIPT",
                    "JAVASCRIPT",
                    "NEXT.JS",
                    "TAILWIND CSS",
                    "HTML5 / CSS3",
                    "REST API",
                    "GIT / GITHUB",
                    "MAGIC UI",
                    "FIGMA",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className={`text-[10.5px] font-bold px-2 py-0.5 rounded border transition-colors ${
                        isDark
                          ? "bg-emerald-400/10 text-emerald-300 border-emerald-400/20"
                          : "bg-teal-50 text-teal-900 border-teal-300"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* PORTFOLIO HIGHLIGHT */}
              <section>
                <h2
                  className={`text-xs font-black tracking-wider uppercase pb-1.5 mb-2.5 border-b-2 ${
                    isDark
                      ? "text-emerald-300 border-emerald-400/30"
                      : "text-slate-900 border-[#0f766e]"
                  }`}
                >
                  Portfolio
                </h2>
                <a
                  href="https://navaneethan.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold underline mb-2 ${
                    isDark ? "text-cyan-300 hover:text-cyan-200" : "text-teal-700 hover:text-teal-900"
                  }`}
                >
                  <FaGlobe className="w-3 h-3 text-emerald-400" />
                  <span>navaneethan.vercel.app</span>
                  <FaExternalLinkAlt className="w-2.5 h-2.5" />
                </a>
                <ul
                  className={`text-[11.5px] leading-relaxed space-y-1.5 list-disc pl-4 ${
                    isDark ? "text-white/75" : "text-slate-700"
                  }`}
                >
                  <li>Interactive showcase of frontend projects & components</li>
                  <li>Live interactive demos of React & Angular web apps</li>
                  <li>Built with Next.js, TypeScript, Tailwind & Magic UI animations</li>
                </ul>
              </section>

              {/* AI SKILLS & TOOLS */}
              <section>
                <h2
                  className={`text-xs font-black tracking-wider uppercase pb-1.5 mb-2.5 border-b-2 ${
                    isDark
                      ? "text-emerald-300 border-emerald-400/30"
                      : "text-slate-900 border-[#0f766e]"
                  }`}
                >
                  AI Skills & Tools
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "GITHUB COPILOT",
                    "CLAUDE",
                    "ANTIGRAVITY",
                    "PROMPT ENGINEERING",
                    "AI CODE REFACTORING",
                    "TEST SCAFFOLDING",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className={`text-[10.5px] font-bold px-2 py-0.5 rounded border transition-colors ${
                        isDark
                          ? "bg-cyan-400/10 text-cyan-300 border-cyan-400/20"
                          : "bg-sky-50 text-sky-950 border-sky-300"
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </section>

              {/* AWARDS & RECOGNITION */}
              <section>
                <h2
                  className={`text-xs font-black tracking-wider uppercase pb-1.5 mb-2.5 border-b-2 ${
                    isDark
                      ? "text-emerald-300 border-emerald-400/30"
                      : "text-slate-900 border-[#0f766e]"
                  }`}
                >
                  Awards & Recognition
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`text-xs font-bold flex items-center gap-1.5 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        <FaAward className={isDark ? "text-amber-400" : "text-amber-500"} />
                        <span>Rockstar Award</span>
                      </h3>
                      <span
                        className={`text-[11px] font-bold ${
                          isDark ? "text-emerald-400" : "text-teal-700"
                        }`}
                      >
                        Agilysys
                      </span>
                    </div>
                    <p
                      className={`text-[11px] mt-0.5 leading-snug ${
                        isDark ? "text-white/70" : "text-slate-600"
                      }`}
                    >
                      High ownership & end-to-end delivery of Tax Exemption Reconciliation feature in Stay.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`text-xs font-bold flex items-center gap-1.5 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        <FaAward className={isDark ? "text-amber-400" : "text-amber-500"} />
                        <span>Super Squad Award</span>
                      </h3>
                      <span
                        className={`text-[11px] font-bold ${
                          isDark ? "text-emerald-400" : "text-teal-700"
                        }`}
                      >
                        Agilysys
                      </span>
                    </div>
                    <p
                      className={`text-[11px] mt-0.5 leading-snug ${
                        isDark ? "text-white/70" : "text-slate-600"
                      }`}
                    >
                      Recognized for cross-functional collaboration on Share Reservation feature in Stay.
                    </p>
                  </div>
                </div>
              </section>

              {/* STRENGTHS */}
              <section>
                <h2
                  className={`text-xs font-black tracking-wider uppercase pb-1.5 mb-2.5 border-b-2 ${
                    isDark
                      ? "text-emerald-300 border-emerald-400/30"
                      : "text-slate-900 border-[#0f766e]"
                  }`}
                >
                  Strengths
                </h2>
                <div className="relative pl-6 space-y-3.5 py-1">
                  {/* Timeline vertical bar */}
                  <div className="absolute left-2.5 top-2.5 bottom-2.5 w-[1.5px] bg-emerald-400/30" />

                  {[
                    {
                      title: "High Ownership",
                      desc: "End-to-end accountability from concept to reliable production delivery",
                      icon: FaBolt,
                    },
                    {
                      title: "Analytical Problem Solver",
                      desc: "Rapid root-cause diagnosis, sharp debugging, and robust edge-case handling",
                      icon: FaStar,
                    },
                    {
                      title: "Collaborative Team Player",
                      desc: "Proactive communication across product, QA, and cross-functional teams",
                      icon: FaUsers,
                    },
                    {
                      title: "Attention to Detail",
                      desc: "Committed to pixel-perfect UI execution, clean code, and user experience",
                      icon: FaBullseye,
                    },
                  ].map((strength) => (
                    <div key={strength.title} className="relative flex items-start gap-2.5">
                      {/* Proper Circular Icon Badge matching resume theme */}
                      <div
                        className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[9px] shadow-sm shrink-0 transition-colors ${
                          isDark
                            ? "bg-emerald-950 border border-emerald-400/50 text-emerald-300 ring-4 ring-gray-900"
                            : "bg-teal-50 border border-teal-500/50 text-teal-700 ring-4 ring-white"
                        }`}
                      >
                        <strength.icon />
                      </div>
                      <div className="min-w-0">
                        <h4
                          className={`text-xs font-bold leading-tight ${
                            isDark ? "text-emerald-300" : "text-slate-900"
                          }`}
                        >
                          {strength.title}
                        </h4>
                        <p
                          className={`text-[11px] leading-snug mt-0.5 ${
                            isDark ? "text-white/70" : "text-slate-600"
                          }`}
                        >
                          {strength.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* EDUCATION */}
              <section>
                <h2
                  className={`text-xs font-black tracking-wider uppercase pb-1.5 mb-2.5 border-b-2 ${
                    isDark
                      ? "text-emerald-300 border-emerald-400/30"
                      : "text-slate-900 border-[#0f766e]"
                  }`}
                >
                  Education
                </h2>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={`text-xs font-bold ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      B.E. Mechanical Engineering
                    </h3>
                    <span
                      className={`text-[11px] font-bold ${
                        isDark ? "text-emerald-400" : "text-emerald-700"
                      }`}
                    >
                      85%
                    </span>
                  </div>
                  <p
                    className={`text-[11px] font-semibold mt-0.5 ${
                      isDark ? "text-cyan-300" : "text-teal-700"
                    }`}
                  >
                    Dhanalakshmi Srinivasan Engineering College
                  </p>
                  <p
                    className={`text-[11px] mt-0.5 ${
                      isDark ? "text-white/50" : "text-slate-500"
                    }`}
                  >
                    2018 – 2022
                  </p>
                </div>
              </section>
            </div>

            {/* Right Column (65%) */}
            <div className="md:col-span-7 space-y-3.5 order-1 md:order-2">
              {/* SUMMARY */}
              <section>
                <h2
                  className={`text-xs font-black tracking-wider uppercase pb-1.5 mb-2.5 border-b-2 ${
                    isDark
                      ? "text-emerald-300 border-emerald-400/30"
                      : "text-slate-900 border-[#0f766e]"
                  }`}
                >
                  Summary
                </h2>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? "text-white/80" : "text-slate-800"
                  }`}
                >
                  Results-driven Frontend Developer with 2.5+ years of experience in building and enhancing
                  enterprise web applications using Angular, TypeScript, and JavaScript. Experienced in developing
                  user-focused interfaces, resolving complex UI issues, implementing product features, and delivering
                  reliable solutions for large-scale applications. Recognized with performance and team awards for
                  technical contributions and successful delivery. Adaptable to emerging technologies with hands-on
                  experience in AI-assisted development and a strong interest in integrating AI into modern software
                  applications.
                </p>
              </section>

              {/* EXPERIENCE */}
              <section>
                <h2
                  className={`text-xs font-black tracking-wider uppercase pb-1.5 mb-2.5 border-b-2 ${
                    isDark
                      ? "text-emerald-300 border-emerald-400/30"
                      : "text-slate-900 border-[#0f766e]"
                  }`}
                >
                  Experience
                </h2>
                <div className="space-y-4">
                  {/* Agilysys */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3
                        className={`text-xs sm:text-sm font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        Associate Software Analyst
                      </h3>
                      <span
                        className={`text-[11px] font-medium ${
                          isDark ? "text-white/50" : "text-slate-500"
                        }`}
                      >
                        March 2025 – Present
                      </span>
                    </div>
                    <p
                      className={`text-xs font-semibold mb-2 ${
                        isDark ? "text-emerald-300" : "text-teal-700"
                      }`}
                    >
                      Agilysys Technologies India Pvt. Ltd. | Chennai
                    </p>
                    <ul
                      className={`text-[11.5px] leading-relaxed space-y-1.5 list-disc pl-4 ${
                        isDark ? "text-white/75" : "text-slate-700"
                      }`}
                    >
                      <li>
                        Develop and maintain front-end features in Angular 16 and TypeScript as part of a
                        cross-functional product team.
                      </li>
                      <li>
                        Diagnose and fix reported bugs and UI defects, keeping the product stable and consistent across
                        browsers.
                      </li>
                      <li>
                        Refactor complex Angular/TypeScript logic and improve component maintainability using
                        AI-assisted workflows.
                      </li>
                    </ul>
                  </div>

                  {/* Spritle */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3
                        className={`text-xs sm:text-sm font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        UI Developer
                      </h3>
                      <span
                        className={`text-[11px] font-medium ${
                          isDark ? "text-white/50" : "text-slate-500"
                        }`}
                      >
                        May 2024 – Feb 2025
                      </span>
                    </div>
                    <p
                      className={`text-xs font-semibold mb-2 ${
                        isDark ? "text-emerald-300" : "text-teal-700"
                      }`}
                    >
                      Spritle Software | Chennai
                    </p>
                    <ul
                      className={`text-[11.5px] leading-relaxed space-y-1.5 list-disc pl-4 ${
                        isDark ? "text-white/75" : "text-slate-700"
                      }`}
                    >
                      <li>
                        Built responsive, interactive web applications using React.js, HTML, CSS, Tailwind CSS, and
                        JavaScript.
                      </li>
                      <li>
                        Improved page performance by optimizing assets and reducing load times.
                      </li>
                      <li>
                        Converted Figma designs into pixel-accurate UI components, working closely with designers and
                        backend developers.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* PROJECTS */}
              <section>
                <h2
                  className={`text-xs font-black tracking-wider uppercase pb-1.5 mb-2.5 border-b-2 ${
                    isDark
                      ? "text-emerald-300 border-emerald-400/30"
                      : "text-slate-900 border-[#0f766e]"
                  }`}
                >
                  Projects
                </h2>
                <div className="space-y-4">
                  {/* STAY */}
                  <div>
                    <h3
                      className={`text-xs sm:text-sm font-bold ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      STAY: Marriott Hotels Booking Platform
                    </h3>
                    <p
                      className={`text-[11.5px] font-semibold mb-2 ${
                        isDark ? "text-cyan-300" : "text-teal-700"
                      }`}
                    >
                      Angular 16, TypeScript, JavaScript, Tailwind CSS | Agilysys IDC
                    </p>
                    <ul
                      className={`text-[11.5px] leading-relaxed space-y-1.5 list-disc pl-4 ${
                        isDark ? "text-white/75" : "text-slate-700"
                      }`}
                    >
                      <li>
                        Front-end developer on an enterprise hospitality platform that handles the complete guest journey
                        for Marriott Hotels, from search to checkout.
                      </li>
                      <li>
                        Own front-end features for the BRM module, turning hotel-management business rules into
                        reusable, production-ready Angular components.
                      </li>
                      <li>
                        Work in a large-scale Angular codebase with cross-functional teams, shipping features to a live
                        product.
                      </li>
                      <li>
                        Developed bug-free features and maintained high scalability across application modules.
                      </li>
                    </ul>
                  </div>

                  {/* Cookie */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3
                        className={`text-xs sm:text-sm font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        Cookio – Recipe Hub Web Application
                      </h3>
                      <a
                        href="https://cookio-recipehub.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-[11px] font-bold underline ${
                          isDark ? "text-cyan-300 hover:text-cyan-200" : "text-teal-700 hover:text-teal-900"
                        }`}
                      >
                        <span>cookio-recipehub.netlify.app</span>
                        <FaExternalLinkAlt className="w-2.5 h-2.5 text-emerald-400" />
                      </a>
                    </div>
                    <p
                      className={`text-[11.5px] font-semibold mb-2 ${
                        isDark ? "text-cyan-300" : "text-teal-700"
                      }`}
                    >
                      React.js, JavaScript, Tailwind CSS, REST API – Axios
                    </p>
                    <ul
                      className={`text-[11.5px] leading-relaxed space-y-1.5 list-disc pl-4 ${
                        isDark ? "text-white/75" : "text-slate-700"
                      }`}
                    >
                      <li>
                        Built a responsive recipe discovery application with real-time dish search, cuisine filtering,
                        and interactive preparation guides.
                      </li>
                      <li>
                        Integrated REST APIs for automated recipe data fetching, nutritional information, and responsive
                        layout performance.
                      </li>
                      <li>
                        Implemented recipe bookmarking and local storage persistence, enabling users to curate and save
                        favorite dishes offline.
                      </li>
                      <li>
                        Engineered modular UI components with Tailwind CSS, ensuring fast asset loading and seamless
                        mobile responsiveness.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* AI COLLABORATION & WORKFLOWS */}
              <section>
                <h2
                  className={`text-xs font-black tracking-wider uppercase pb-1.5 mb-2.5 border-b-2 ${
                    isDark
                      ? "text-emerald-300 border-emerald-400/30"
                      : "text-slate-900 border-[#0f766e]"
                  }`}
                >
                  AI Collaboration & Workflows
                </h2>
                <ul
                  className={`text-[11.5px] leading-relaxed space-y-1.5 list-disc pl-4 ${
                    isDark ? "text-white/75" : "text-slate-700"
                  }`}
                >
                  <li>
                    <strong className={isDark ? "text-white" : "text-slate-900"}>
                      Component development:
                    </strong>{" "}
                    Use GitHub Copilot, Claude, and Antigravity to prototype Angular components and refactor TypeScript
                    logic, then review and adapt the output to project standards.
                  </li>
                  <li>
                    <strong className={isDark ? "text-white" : "text-slate-900"}>Debugging:</strong>{" "}
                    Give AI tools the error context, expected behavior, and relevant code to isolate the cause of
                    edge-case UI defects faster.
                  </li>
                  <li>
                    <strong className={isDark ? "text-white" : "text-slate-900"}>Testing:</strong>{" "}
                    Generate unit test scaffolding for new components, then add edge cases manually.
                  </li>
                  <li>
                    <strong className={isDark ? "text-white" : "text-slate-900"}>
                      Responsive layouts:
                    </strong>{" "}
                    Draft Tailwind/CSS layouts with AI and verify them against breakpoints and cross-browser behavior
                    before committing.
                  </li>
                </ul>
              </section>

            </div>
          </div>

          {/* Centered Motto Footer Across Whole Page */}
          <div className={`mt-5 pt-3 pb-1 text-center w-full border-t ${isDark ? "border-white/10" : "border-slate-200"}`}>
            <p
              className={`text-xs font-bold tracking-wider italic ${
                isDark ? "text-emerald-300" : "text-[#0f766e]"
              }`}
            >
              Elevating the Digital Experience !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
