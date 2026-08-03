"use client";

import { motion } from "framer-motion";
import { Bot, Zap, Sparkles, Cpu, Terminal, ShieldCheck, Wand2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/Card";

const AI_FEATURES = [
  {
    id: "pair-programming",
    step: "01",
    icon: Bot,
    title: "Agentic Pair Programming",
    description:
      "Partnering daily with autonomous AI coding agents and reasoning LLMs to architect complex systems, refactor state modules, and resolve tricky logic in real time.",
    badges: ["Claude 3.7", "Antigravity IDE", "Copilot"],
    color: "emerald",
  },
  {
    id: "rapid-velocity",
    step: "02",
    icon: Zap,
    title: "10x Prototyping Velocity",
    description:
      "Transforming concepts into production-grade web applications in hours—eliminating repetitive boilerplate and focusing on user experience.",
    badges: ["Rapid Iteration", "Next.js", "Component Specs"],
    color: "cyan",
  },
  {
    id: "quality-audits",
    step: "03",
    icon: ShieldCheck,
    title: "Automated QA & Code Auditing",
    description:
      "Enforcing strict type safety, edge-case checking, and performance tuning using AI-assisted code reviews before shipping to production.",
    badges: ["Code Audits", "Type Safety", "Optimization"],
    color: "purple",
  },
];

const AI_TOOLS = [
  { name: "Antigravity IDE", icon: Terminal },
  { name: "Claude 3.7", icon: Cpu },
  { name: "GitHub Copilot", icon: Bot },
  { name: "GPT-4o", icon: Wand2 },
  { name: "v0.dev / WebGL", icon: Sparkles },
];

const COLOR_STYLES = {
  emerald: {
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    border: "border-white/10 hover:border-emerald-500/30",
    stepColor: "text-emerald-400/40",
  },
  cyan: {
    iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    border: "border-white/10 hover:border-cyan-500/30",
    stepColor: "text-cyan-400/40",
  },
  purple: {
    iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    border: "border-white/10 hover:border-purple-500/30",
    stepColor: "text-purple-400/40",
  },
};

export const AiWorkflowSection = () => {
  return (
    <section id="ai-workflow" className="py-24 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Radial Aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <SectionHeader
          eyebrow="AI-Powered Engineering"
          title="Accelerating Digital Creation"
          description=""
        />

        {/* Side-by-Side Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Narrative, Stack & Metrics */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Future-Ready Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15]">
              Augmenting Human Creativity with <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">AI Synergy</span>
            </h2>

            <p className="text-base text-white/70 font-light leading-relaxed">
              Software engineering isn't just about writing code—it's about orchestrating intelligence. I integrate state-of-the-art AI agents and LLMs directly into my workflow to accelerate prototyping, catch edge cases early, and ship production-grade applications at 10x speed.
            </p>

            {/* Primary AI Stack Badge Row */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-white/40 block">
                Everyday AI Pair Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {AI_TOOLS.map((tool) => {
                  const ToolIcon = tool.icon;
                  return (
                    <span
                      key={tool.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/[0.04] border border-white/10 text-white/80 hover:bg-white/10 transition duration-200"
                    >
                      <ToolIcon className="w-3.5 h-3.5 text-white/60" />
                      {tool.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Impact Metric Cards Bar */}
            <div className="pt-2 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-left">
                <span className="text-2xl font-black text-white font-mono block">10x</span>
                <span className="text-[10px] text-white/50 font-medium uppercase tracking-wider block mt-0.5">Velocity</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-left">
                <span className="text-2xl font-black text-emerald-400 font-mono block">100%</span>
                <span className="text-[10px] text-white/50 font-medium uppercase tracking-wider block mt-0.5">Type Safe</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-left">
                <span className="text-2xl font-black text-cyan-400 font-mono block">0-to-1</span>
                <span className="text-[10px] text-white/50 font-medium uppercase tracking-wider block mt-0.5">Sprints</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="lg:col-span-7 space-y-5">
            {AI_FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              const style = COLOR_STYLES[feature.color as keyof typeof COLOR_STYLES] || COLOR_STYLES.emerald;

              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                >
                  <Card className={`p-6 border backdrop-blur-xl bg-gray-900/40 transition-all duration-300 ${style.border} group relative`}>

                    {/* Step Number Backdrop */}
                    <span className={`absolute top-4 right-6 font-mono text-2xl font-extrabold ${style.stepColor} select-none`}>
                      {feature.step}
                    </span>

                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`w-11 h-11 rounded-xl border shrink-0 flex items-center justify-center group-hover:scale-105 transition duration-300 ${style.iconBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <div className="space-y-2 flex-1 pr-6">
                        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors duration-200">
                          {feature.title}
                        </h3>

                        <p className="text-sm text-white/70 leading-relaxed font-light">
                          {feature.description}
                        </p>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {feature.badges.map((badge) => (
                            <span
                              key={badge}
                              className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.04] border border-white/10 text-white/75 group-hover:border-white/20 transition duration-200"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
