"use client";

import { useState, useEffect, useCallback, Fragment } from "react";
import { Card } from "@/components/Card";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitCompare,
  CheckCircle2,
  XCircle,
  Zap,
  Code2,
  ShieldCheck,
  Activity,
  FileCode2,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import SparkleIcon from "@/assets/icons/star.svg";

type ViewState = "before" | "after";

const CASE_STUDIES = [
  {
    id: "load-time-optimization",
    title: "Page Load & Asset Optimization",
    category: "Performance Engineering",
    icon: Zap,
    metricHighlight: "20% Speed Boost",
    before: {
      tag: "Unoptimized Legacy Build",
      loadTime: "3.8s",
      fcp: "2.4s",
      score: 58,
      statusText: "Slow load times, uncompressed raw assets, render-blocking scripts",
      issues: [
        "Uncompressed images causing network bottlenecks",
        "Render-blocking scripts delaying First Contentful Paint",
        "Large monolithic bundle causing high TTFB",
      ],
      codeSnippet: `// ❌ Legacy: Render-blocking monolithic import
import MassiveLibrary from "heavy-library";
import BigAsset from "./assets/huge-image.png";

export default function Page() {
  return <img src={BigAsset} />;
}`,
    },
    after: {
      tag: "Optimized Production Build",
      loadTime: "0.6s",
      fcp: "0.4s",
      score: 100,
      statusText: "Instant load, WebP Next.js images, dynamic code splitting",
      improvements: [
        "20% load time reduction on production client builds",
        "Next.js dynamic imports & automatic WebP image optimization",
        "Critical CSS inline with zero render-blocking JS",
      ],
      codeSnippet: `// ✅ Solution: Dynamic import & Next.js Image
import dynamic from "next/dynamic";
import Image from "next/image";

const FastComponent = dynamic(() => import("./FastComponent"));`,
    },
  },
  {
    id: "state-refactoring",
    title: "State Refactoring & Re-renders",
    category: "Architecture & React",
    icon: Code2,
    metricHighlight: "98% Fewer Renders",
    before: {
      tag: "Legacy Prop Drilling",
      loadTime: "45 renders/action",
      fcp: "120ms lag",
      score: 62,
      statusText: "Deep prop drilling, context bloat causing main-thread stutter",
      issues: [
        "Passing state through 6 nested levels of component props",
        "Monolithic context re-rendering screen on every keystroke",
        "Laggy typing experience on mid-tier mobile devices",
      ],
      codeSnippet: `// ❌ Legacy: Prop drilling 6 levels deep
<Parent state={state}>
  <Child1 state={state}>
    <Child2 state={state}>
      <Input value={state.val} />
    </Child2>
  </Child1>
</Parent>`,
    },
    after: {
      tag: "Isolated Reactive Hooks",
      loadTime: "1 render/action",
      fcp: "0ms lag",
      score: 98,
      statusText: "Decoupled state hooks, memoized selectors, 60 FPS interactions",
      improvements: [
        "Isolated state scope preventing parent re-renders",
        "Atomic React custom hooks & memoized selectors",
        "Silky smooth 60 FPS input experience",
      ],
      codeSnippet: `// ✅ Solution: Atomic custom hook selector
const { value, updateValue } = useIsolatedField("user-input");

return <Input value={value} onChange={updateValue} />;`,
    },
  },
  {
    id: "type-safety-audit",
    title: "TypeScript Payload Guarding",
    category: "Quality & Resilience",
    icon: ShieldCheck,
    metricHighlight: "0 Runtime Crashes",
    before: {
      tag: "Unchecked Any Payload",
      loadTime: "Intermittent Crashes",
      fcp: "High Error Rate",
      score: 54,
      statusText: "Unchecked API payloads leading to TypeError in production",
      issues: [
        "Using implicit 'any' types on API response schemas",
        "Unhandled null/undefined dereferencing crashing client UIs",
        "No runtime validation for user inputs",
      ],
      codeSnippet: `// ❌ Legacy: Loose typing & zero payload safety
async function fetchUser(id: any) {
  const res = await fetch('/api/user/' + id);
  const data = await res.json();
  return data.profile.name; // Crashes if undefined!
}`,
    },
    after: {
      tag: "Strict Schema Guarding",
      loadTime: "Zero Crashes",
      fcp: "100% Validated",
      score: 100,
      statusText: "Strict Zod & TypeScript interfaces with defensive error boundaries",
      improvements: [
        "100% strict TypeScript types across all API payloads",
        "Runtime payload validation with fallback default states",
        "Zero unhandled runtime exceptions in production",
      ],
      codeSnippet: `// ✅ Solution: Strict Zod validation & safe payload
const UserSchema = z.object({ profile: z.object({ name: z.string() }) });

const data = UserSchema.safeParse(await res.json());
return data.success ? data.data.profile.name : "Guest";`,
    },
  },
];

export const LivingInterfacesCard = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [viewState, setViewState] = useState<ViewState>("after");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isCodeExpanded, setIsCodeExpanded] = useState<boolean>(false);

  const activeCase = CASE_STUDIES[activeCaseIndex];
  const activeContent = viewState === "before" ? activeCase.before : activeCase.after;

  // Auto-slide carousel every 5 seconds (5000ms)
  useEffect(() => {
    if (isHovered || isCodeExpanded) return;
    const interval = setInterval(() => {
      setActiveCaseIndex((prev) => (prev + 1) % CASE_STUDIES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, isCodeExpanded]);

  const handleNext = useCallback(() => {
    setActiveCaseIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveCaseIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  }, []);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full p-4 sm:p-5 md:p-6 relative overflow-hidden bg-gray-900 border border-white/10 rounded-3xl shadow-xl"
    >
      <div className="space-y-4 sm:space-y-6 relative z-10">
        {/* Compact Section Header */}
        <div className="flex flex-col gap-2.5 border-b border-white/10 pb-4 text-left">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <SparkleIcon className="size-4 text-emerald-300 shrink-0" />
              <p className="uppercase text-[10px] sm:text-xs font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                Architecture & Engineering
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Before & After</span>
            </div>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white tracking-wide leading-tight">
            Real-World Problem Solving Architecture
          </h3>

          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal max-w-2xl">
            Interactive case studies showing how complex front-end bottlenecks were diagnosed and refactored.
          </p>
        </div>

        {/* DESKTOP VIEW: 3 Compact Case Study Cards */}
        <div className="hidden lg:block space-y-3 w-full">
          <div className="flex items-center justify-between px-1 mb-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/60 flex items-center gap-2">
              <GitCompare className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>Select Case Study:</span>
            </span>

            <div className="flex items-center gap-1.5">
              {CASE_STUDIES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCaseIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeCaseIndex === idx
                      ? "w-5 bg-emerald-400"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {CASE_STUDIES.map((c, idx) => {
              const Icon = c.icon;
              const isSelected = activeCaseIndex === idx;

              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCaseIndex(idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-2.5 w-full overflow-hidden ${
                    isSelected
                      ? "bg-emerald-500/10 border-emerald-500/50 text-white shadow-lg ring-1 ring-emerald-300/40"
                      : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] text-white/60 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className={`p-1.5 rounded-xl border shrink-0 ${isSelected ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300" : "bg-white/5 border-white/10 text-white/50"}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${isSelected ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300" : "bg-white/5 border-white/10 text-white/40"}`}>
                      {c.metricHighlight}
                    </span>
                  </div>

                  <div className="space-y-0.5 w-full">
                    <h4 className="text-xs font-bold text-white tracking-tight leading-snug truncate">
                      {c.title}
                    </h4>
                    <span className="text-[10px] text-white/40 font-mono block">
                      {c.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET VIEW: Compact Case Carousel */}
        <div className="block lg:hidden space-y-3 w-full">
          <div className="flex items-center justify-between px-1 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <GitCompare className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/70">
                Case Study ({activeCaseIndex + 1} of 3)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous case study"
                className="p-1 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 transition cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next case study"
                className="p-1 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 transition cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="w-full p-4 rounded-xl border border-white/10 bg-gray-950/80 backdrop-blur-xl text-left flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-emerald-300 shrink-0">
                <activeCase.icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-white truncate">
                  {activeCase.title}
                </h4>
                <span className="text-[10px] font-mono text-white/50 block">
                  {activeCase.category}
                </span>
              </div>
            </div>

            <span className="text-[10px] font-mono font-bold text-emerald-300 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">
              {activeCase.metricHighlight}
            </span>
          </div>
        </div>

        {/* Expandable "Inspect Architecture & Code Diff" Toggle Button */}
        <div className="pt-1">
          <button
            onClick={() => setIsCodeExpanded(!isCodeExpanded)}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md group"
          >
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span>
              {isCodeExpanded
                ? "Hide Code Diff & Diagnostics"
                : `Inspect Architecture Code & Diff (${activeCase.metricHighlight})`}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-emerald-400 transition-transform duration-300 ${
                isCodeExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Expandable Code Diff & Diagnostics Showcase Panel (On Demand) */}
        <AnimatePresence initial={false}>
          {isCodeExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.25, ease: "easeInOut" },
              }}
              className="overflow-hidden space-y-4 pt-1 transform-gpu"
            >
              {/* Before / After View Toggle Bar */}
              <div className="p-3 rounded-xl bg-gray-950 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2 min-w-0">
                    <FileCode2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span className="truncate">{activeCase.title}</span>
                  </span>

                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest shrink-0">
                    Case 0{activeCaseIndex + 1}
                  </span>
                </div>

                {/* Toggle Buttons */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 border border-white/10 rounded-lg w-full">
                  <button
                    onClick={() => setViewState("before")}
                    className={`py-1.5 px-3 rounded-md text-xs font-bold transition duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                      viewState === "before"
                        ? "bg-red-500/20 border border-red-500/40 text-red-300 shadow-md"
                        : "text-white/40 hover:text-white"
                    }`}
                  >
                    <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span>BEFORE (Problem)</span>
                  </button>

                  <button
                    onClick={() => setViewState("after")}
                    className={`py-1.5 px-3 rounded-md text-xs font-bold transition duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                      viewState === "after"
                        ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 shadow-md"
                        : "text-white/40 hover:text-white"
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span>AFTER (Optimized)</span>
                  </button>
                </div>
              </div>

              {/* Active View Details Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCase.id}-${viewState}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch text-left"
                >
                  {/* Left Column: Diagnostics */}
                  <div
                    className={`lg:col-span-6 p-4 rounded-xl border backdrop-blur-xl flex flex-col justify-between space-y-3 shadow-lg ${
                      viewState === "before"
                        ? "bg-red-950/20 border-red-500/30"
                        : "bg-emerald-950/20 border-emerald-500/30"
                    }`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border ${
                            viewState === "before"
                              ? "bg-red-500/10 border-red-500/30 text-red-300"
                              : "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                          }`}
                        >
                          {activeContent.tag}
                        </span>

                        <span className="text-xs font-mono font-extrabold text-white">
                          Score:{" "}
                          <span className={viewState === "before" ? "text-red-400" : "text-emerald-300"}>
                            {activeContent.score} / 100
                          </span>
                        </span>
                      </div>

                      <p className="text-xs font-semibold text-white leading-relaxed">
                        {activeContent.statusText}
                      </p>

                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/40 block">
                          {viewState === "before" ? "Identified Bottlenecks:" : "Implemented Optimizations:"}
                        </span>

                        <div className="space-y-1.5">
                          {"issues" in activeContent
                            ? activeContent.issues.map((issue, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-[11.5px] text-white/70">
                                  <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                                  <span>{issue}</span>
                                </div>
                              ))
                            : activeContent.improvements.map((imp, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-[11.5px] text-white/80">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0 mt-0.5" />
                                  <span>{imp}</span>
                                </div>
                              ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-white/40">Measured Speed:</span>
                      <span className={`font-bold ${viewState === "before" ? "text-red-400" : "text-emerald-300"}`}>
                        {activeContent.loadTime}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Code Snippet Diff Box */}
                  <div className="lg:col-span-6 p-3.5 rounded-xl bg-gray-950 border border-white/10 flex flex-col justify-between space-y-2.5 font-mono overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-white/50 border-b border-white/10 pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
                        <span className="text-[10.5px] text-white/40 font-mono pl-1">solution.tsx</span>
                      </div>

                      <span className={`shrink-0 font-bold text-[10.5px] ${viewState === "before" ? "text-red-400" : "text-emerald-300"}`}>
                        {viewState === "before" ? "❌ Unoptimized" : "✅ Refactored"}
                      </span>
                    </div>

                    <div className="w-full max-w-full overflow-x-auto custom-code-scrollbar">
                      <pre
                        className={`text-[10.5px] leading-relaxed p-3 rounded-lg overflow-x-auto border max-w-full whitespace-pre-wrap sm:whitespace-pre break-words custom-code-scrollbar ${
                          viewState === "before"
                            ? "bg-red-950/20 text-red-200 border-red-500/20"
                            : "bg-emerald-950/20 text-emerald-200 border-emerald-500/20"
                        }`}
                      >
                        <code>{activeContent.codeSnippet}</code>
                      </pre>
                    </div>

                    <div className="pt-0.5 text-[9.5px] text-white/40 text-right flex items-center justify-end gap-1 font-sans">
                      <span>Toggle BEFORE / AFTER above to inspect</span>
                      <TrendingUp className="w-3 h-3 text-emerald-300" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Real-World Impact Badges Marquee Carousel */}
        <div className="pt-3 border-t border-white/10 overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-3 py-1 animate-move-left min-w-[200%] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center gap-2.5 shrink-0 min-w-[150px]">
                  <Zap className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block leading-tight">-84%</span>
                    <span className="text-[10px] text-white/50 block font-mono">Load Latency</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center gap-2.5 shrink-0 min-w-[150px]">
                  <Activity className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block leading-tight">98%</span>
                    <span className="text-[10px] text-white/50 block font-mono">Fewer Re-renders</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center gap-2.5 shrink-0 min-w-[150px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block leading-tight">100%</span>
                    <span className="text-[10px] text-white/50 block font-mono">Payload Safety</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center gap-2.5 shrink-0 min-w-[150px]">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block leading-tight">60 FPS</span>
                    <span className="text-[10px] text-white/50 block font-mono">Interactions</span>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};