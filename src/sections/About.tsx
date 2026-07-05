"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "@/components/Card";
import { SectionHeader } from "./SectionHeader";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Activity, MousePointer2, Sparkles, X, Zap } from "lucide-react";
import SparkleIcon from "@/assets/icons/star.svg";
import { SkillsToolsSection } from "./Skills";
import { MyPersona } from "./MyPersona";
import ContactAnimation from "./ContactAnimation";
import DiverseNeeds from "./DiverseNeeds";
import { FaGithub } from "react-icons/fa";

type LiveMetric = {
  label: string;
  value: string;
  suffix: string;
  icon: typeof Zap;
};

const initialMetrics: LiveMetric[] = [
  { label: "FPS", value: "--", suffix: "", icon: Zap },
  { label: "Delay", value: "--", suffix: "ms", icon: Activity },
  { label: "CLS", value: "0.00", suffix: "", icon: Sparkles },
];

const initialActivityFeed = [
  "Measuring browser performance",
  "Watching frame stability",
  "Input delay sensor armed",
  "Layout shift monitor ready",
];

const textVariants = {
  hidden: { opacity: 0 },
  visible: () => ({
    opacity: 1,
  }),
};

const codeLines = [
  { text: `import React from 'react';`, color: "text-blue-400" },
  { text: ``, color: "" },
  { text: `function Devfolio() {`, color: "text-blue-400" },
  { text: `  return (`, color: "text-yellow-400" },
  { text: `    "Elevating Digital Experiences"`, color: "text-white" },
  { text: `  );`, color: "text-yellow-400" },
  { text: `}`, color: "text-blue-400" },
  { text: ``, color: "" },
  { text: `export default Devfolio;`, color: "text-blue-400" },
];

const Waveform = ({ active }: { active: boolean }) => (
  <svg
    viewBox="0 0 160 54"
    className="h-16 w-full"
    aria-hidden
  >
    <motion.path
      d="M0 27 C18 27 18 27 34 27 S52 27 68 27 S98 27 116 27 S142 27 160 27"
      fill="none"
      stroke="rgba(255,255,255,0.12)"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <motion.path
      d="M0 28 C14 18 24 18 38 28 S62 38 78 27 S102 14 120 27 S142 39 160 24"
      fill="none"
      stroke="url(#waveSoftGradient)"
      strokeWidth="1.25"
      strokeLinecap="round"
      opacity="0.45"
      animate={
        active
          ? {
              d: [
                "M0 28 C14 18 24 18 38 28 S62 38 78 27 S102 14 120 27 S142 39 160 24",
                "M0 28 C16 38 26 38 40 27 S64 15 80 28 S106 39 122 25 S144 16 160 30",
                "M0 28 C14 18 24 18 38 28 S62 38 78 27 S102 14 120 27 S142 39 160 24",
              ],
            }
          : { d: "M0 27 C18 27 18 27 34 27 S52 27 68 27 S98 27 116 27 S142 27 160 27" }
      }
      transition={
        active
          ? { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.3 }
      }
    />
    <motion.path
      d="M0 27 C12 27 16 8 30 18 S48 43 64 28 S84 9 100 27 S122 45 138 28 S150 17 160 22"
      fill="none"
      stroke="url(#waveGradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
      animate={
        active
          ? {
              d: [
                "M0 27 C12 27 16 8 30 18 S48 43 64 28 S84 9 100 27 S122 45 138 28 S150 17 160 22",
                "M0 27 C14 38 22 39 36 24 S56 9 72 27 S92 44 110 28 S132 10 148 24 S156 31 160 27",
                "M0 27 C12 17 22 12 36 27 S58 44 74 25 S96 8 112 28 S134 43 148 26 S156 22 160 24",
                "M0 27 C12 27 16 8 30 18 S48 43 64 28 S84 9 100 27 S122 45 138 28 S150 17 160 22",
              ],
            }
          : { d: "M0 27 C18 27 18 27 34 27 S52 27 68 27 S98 27 116 27 S142 27 160 27" }
      }
      transition={
        active
          ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.3 }
      }
    />
    {[30, 78, 122].map((cx, index) => (
      <motion.circle
        key={cx}
        cx={cx}
        cy={index === 0 ? 18 : index === 1 ? 27 : 28}
        r="2.4"
        fill="#34d399"
        animate={
          active
            ? { opacity: [0.35, 1, 0.35], scale: [1, 1.35, 1] }
            : { opacity: 0.35, scale: 1 }
        }
        transition={{
          duration: 1.8,
          repeat: Infinity,
          delay: index * 0.3,
        }}
      />
    ))}
    <defs>
      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="50%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#a78bfa" />
      </linearGradient>
      <linearGradient id="waveSoftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6ee7b7" />
        <stop offset="50%" stopColor="#7dd3fc" />
        <stop offset="100%" stopColor="#c4b5fd" />
      </linearGradient>
    </defs>
  </svg>
);

const MetricCard = ({ metric }: { metric: LiveMetric }) => {
  const Icon = metric.icon;

  return (
    <motion.div
      layout
      whileHover={{ y: -2, scale: 1.02 }}
      className="flex min-w-[145px] items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-2.5 py-2 backdrop-blur-md md:min-w-0 md:flex-1"
    >
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15">
        <Icon className="h-3.5 w-3.5 text-emerald-300" />
      </div>
      <div className="min-w-0">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
          {metric.label}
        </p>
        <motion.p
          key={`${metric.label}-${metric.value}`}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-semibold text-white"
        >
          {metric.value}
          <span className="text-[10px] font-normal text-white/50">
            {metric.suffix}
          </span>
        </motion.p>
      </div>
    </motion.div>
  );
};

const LivingInterfacePreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [motionOn, setMotionOn] = useState(true);
  const [metrics, setMetrics] = useState(initialMetrics);
  const [activeZone, setActiveZone] = useState<"idle" | "hover" | "press">("idle");
  const [feedIndex, setFeedIndex] = useState(0);
  const [feedItems, setFeedItems] = useState(initialActivityFeed);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [fps, setFps] = useState(0);
  const [inputDelay, setInputDelay] = useState(0);
  const [clsScore, setClsScore] = useState(0);
  const [scanScore, setScanScore] = useState(100);
  const [scanStatus, setScanStatus] = useState<"idle" | "scanning" | "ready">("idle");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useSpring(mouseX, { stiffness: 120, damping: 22 });
  const spotlightY = useSpring(mouseY, { stiffness: 120, damping: 22 });
  const updateMetric = useCallback((label: string, value: string) => {
    setMetrics((prev) =>
      prev.map((metric) => (metric.label === label ? { ...metric, value } : metric))
    );
  }, []);

  const pushFeed = useCallback((message: string) => {
    setFeedItems((prev) => [message, ...prev].slice(0, 6));
    setFeedIndex(0);
  }, []);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const bounds = containerRef.current?.getBoundingClientRect();
      if (!bounds) return;
      mouseX.set(event.clientX - bounds.left);
      mouseY.set(event.clientY - bounds.top);
      const delay = Math.max(0, Math.round(performance.now() - event.timeStamp));
      if (delay !== inputDelay) {
        setInputDelay(delay);
        updateMetric("Delay", String(delay));
      }
    },
    [inputDelay, mouseX, mouseY, updateMetric]
  );

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const bounds = containerRef.current?.getBoundingClientRect();
      if (!bounds) return;
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const id = Date.now();
      setRipples((prev) => [...prev.slice(-2), { id, x, y }]);
      setActiveZone("press");
      setTimeout(() => setActiveZone("idle"), 180);
    },
    []
  );

  useEffect(() => {
    let frame = 0;
    let frameId = 0;
    let last = performance.now();

    const measureFrames = (now: number) => {
      frame += 1;
      if (now - last >= 1000) {
        const currentFps = Math.round((frame * 1000) / (now - last));
        setFps(currentFps);
        updateMetric("FPS", String(currentFps));
        if (currentFps < 45) {
          pushFeed(`FPS dipped to ${currentFps}`);
        }
        frame = 0;
        last = now;
      }
      frameId = requestAnimationFrame(measureFrames);
    };

    frameId = requestAnimationFrame(measureFrames);
    return () => cancelAnimationFrame(frameId);
  }, [pushFeed, updateMetric]);

  useEffect(() => {
    const feedTimer = setInterval(() => {
      setFeedIndex((prev) => (prev + 1) % feedItems.length);
    }, 2200);

    return () => clearInterval(feedTimer);
  }, [feedItems.length]);

  useEffect(() => {
    if (typeof PerformanceObserver === "undefined") return;

    let cls = 0;
    const observers: PerformanceObserver[] = [];

    try {
      const layoutObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const layoutEntry = entry as PerformanceEntry & {
            value?: number;
            hadRecentInput?: boolean;
          };
          if (!layoutEntry.hadRecentInput && layoutEntry.value) {
            cls += layoutEntry.value;
            const nextCls = Number(cls.toFixed(2));
            setClsScore(nextCls);
            updateMetric("CLS", nextCls.toFixed(2));
            if (nextCls > 0.1) {
              pushFeed(`Layout shift detected: ${nextCls.toFixed(2)}`);
            }
          }
        });
      });
      layoutObserver.observe({ type: "layout-shift", buffered: true });
      observers.push(layoutObserver);
    } catch {
      pushFeed("CLS monitor unavailable");
    }

    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        const entry = list.getEntries().at(-1);
        if (entry) {
          pushFeed(`Main thread blocked ${Math.round(entry.duration)}ms`);
        }
      });
      longTaskObserver.observe({ type: "longtask", buffered: true });
      observers.push(longTaskObserver);
    } catch {
      // Long task observation is not available in every browser.
    }

    return () => observers.forEach((observer) => observer.disconnect());
  }, [pushFeed, updateMetric]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRipples((prev) => prev.slice(1));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  const runInteractionScan = useCallback(() => {
    const startedAt = performance.now();
    setActiveZone("press");
    setScanStatus("scanning");
    pushFeed("Interaction scan started");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const paintDelay = Math.round(performance.now() - startedAt);
        const health = Math.max(
          0,
          Math.min(100, Math.round(100 - paintDelay * 1.2 - Math.max(0, 60 - fps) - clsScore * 160))
        );

        setInputDelay(paintDelay);
        setScanScore(health);
        updateMetric("Delay", String(paintDelay));
        setScanStatus("ready");
        setActiveZone("idle");
        pushFeed(`Paint response ${paintDelay}ms - health ${health}%`);
      });
    });
  }, [clsScore, fps, pushFeed, updateMetric]);

  const healthRails = [
    { label: "Frame", value: Math.min(100, Math.max(8, Math.round((fps / 60) * 100))) },
    { label: "Input", value: Math.min(100, Math.max(8, 100 - inputDelay * 2)) },
    { label: "Stable", value: Math.min(100, Math.max(8, Math.round(100 - clsScore * 250))) },
  ];

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerLeave={() => setActiveZone("idle")}
      className="relative flex min-h-0 flex-1 flex-col overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        className="pointer-events-none absolute h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl"
        style={{ left: spotlightX, top: spotlightY, x: "-50%", y: "-50%" }}
      />
      <motion.div
        className="pointer-events-none absolute h-28 w-28 rounded-full bg-sky-400/15 blur-2xl"
        animate={
          motionOn
            ? { x: [0, 18, -10, 0], y: [0, -12, 8, 0] }
            : { x: 0, y: 0 }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ right: "12%", top: "18%" }}
      />

      <div className="relative z-10 flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1 overflow-hidden">
            <motion.div
              className="flex w-max gap-2 md:hidden"
              animate={motionOn ? { x: ["0%", "-50%"] } : { x: "0%" }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...metrics, ...metrics].map((metric, index) => (
                <MetricCard key={`${metric.label}-${index}`} metric={metric} />
              ))}
            </motion.div>

            <div className="hidden flex-1 gap-2 md:flex">
              {metrics.map((metric) => (
                <MetricCard key={metric.label} metric={metric} />
              ))}
            </div>
          </div>

          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => setMotionOn((prev) => !prev)}
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-black/30 px-2.5 py-1.5 backdrop-blur-md"
            aria-pressed={motionOn}
          >
            <span className="text-[10px] text-white/50">Motion</span>
            <div className="relative h-4 w-8 rounded-full bg-gray-700/90">
              <motion.div
                layout
                animate={{ x: motionOn ? 14 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`absolute top-0.5 h-3 w-3 rounded-full ${
                  motionOn ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" : "bg-white/40"
                }`}
              />
            </div>
          </button>
        </div>

        <div className="grid flex-1 grid-cols-[1.1fr_0.9fr] gap-3 min-h-0">
          <motion.div
            className="relative flex min-h-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] via-sky-400/[0.04] to-emerald-400/[0.05] p-3 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_45%)]" />
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/15"
              animate={
                motionOn
                  ? { scale: [0.8, 1.25, 0.8], opacity: [0.15, 0.45, 0.15] }
                  : { scale: 1, opacity: 0.15 }
              }
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/10 blur-xl"
              animate={motionOn ? { scale: [1, 1.35, 1] } : { scale: 1 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                  Signal
                </span>
                <div className="flex items-center gap-2">
                  <motion.span
                    animate={motionOn ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.5 }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="text-[10px] text-emerald-300"
                  >
                    Live
                  </motion.span>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-100">
                    {scanScore}%
                  </span>
                </div>
              </div>
              <div className="relative px-1 py-2">
                <Waveform active={motionOn} />
              </div>
            </div>

            <motion.button
              type="button"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={runInteractionScan}
              whileTap={motionOn ? { scale: 0.96 } : undefined}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
              className="relative mt-3 w-full overflow-hidden rounded-xl bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 p-[1px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 rounded-[11px] bg-gray-950/80 px-3 py-2.5 text-xs font-semibold text-white">
                <MousePointer2 className="h-3.5 w-3.5 text-emerald-300" />
                {scanStatus === "scanning"
                  ? "Scanning"
                  : scanStatus === "ready"
                    ? `Health ${scanScore}%`
                    : activeZone === "press"
                      ? "Pressed"
                      : "Interact"}
              </span>
              {motionOn && (
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                />
              )}
            </motion.button>
          </motion.div>

          <div className="relative flex min-h-0 flex-col gap-2">
            {healthRails.map((rail, index) => (
              <motion.div
                key={rail.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 backdrop-blur-sm"
              >
                <motion.div
                  animate={
                    motionOn
                      ? {
                          scale: [1, 1.15, 1],
                          opacity: [0.5, 1, 0.5],
                        }
                      : { scale: 1, opacity: 0.4 }
                  }
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: index * 0.25,
                  }}
                  className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"
                />
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] uppercase tracking-[0.18em] text-white/35">
                      {rail.label}
                    </span>
                    <span className="text-[10px] text-white/50">
                      {rail.value}%
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"
                      animate={{ width: `${rail.value}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              animate={motionOn ? { y: [0, -3, 0] } : { y: 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative mt-auto overflow-hidden rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={feedIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="truncate text-[10px] text-emerald-100/90"
                >
                  {feedItems[feedIndex] ?? feedItems[0]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 3.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="pointer-events-none absolute z-20 h-8 w-8 rounded-full border border-emerald-300/60 bg-emerald-400/10"
            style={{ left: ripple.x, top: ripple.y, x: "-50%", y: "-50%" }}
          />
        ))}
      </AnimatePresence>

      <div className="relative z-10 flex items-center justify-between border-t border-white/10 bg-black/20 px-4 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <motion.div
            animate={motionOn ? { scale: [1, 1.25, 1] } : { scale: 1 }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="h-2 w-2 rounded-full bg-emerald-400"
          />
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/45">
            Interface responding
          </span>
        </div>
        <span className="text-[10px] text-white/30">
          {motionOn ? `${scanScore}% health` : "Motion paused"}
        </span>
      </div>
    </div>
  );
};

const LivingInterfacesCard = () => (
  <Card
    className="
      w-full
      self-start
      p-4
      relative
      flex
      flex-col
      bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_28%),linear-gradient(135deg,_#111827,_#030712)]
      shadow-lg
      rounded-3xl
      border
      border-white/10
    "
  >
    {/* BG Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.18),_transparent_30%)] pointer-events-none" />

    {/* Top Animated Line */}
    <motion.div
      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
      animate={{
        x: ["-100%", "100%"],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    <div className="relative z-10 mx-auto flex w-full max-w-none flex-col lg:max-w-[920px] xl:max-w-[980px]">
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{
                rotate: 12,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
              }}
            >
              <SparkleIcon className="text-emerald-300" />
            </motion.div>

            <h3 className="text-white text-2xl font-semibold">
              Living Interfaces
            </h3>
          </div>

          <motion.div
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1.5 md:gap-2 md:px-3"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />

            <span className="text-[10px] text-emerald-200 uppercase tracking-[0.18em] md:text-[11px] md:tracking-[0.25em]">
              Live
            </span>
          </motion.div>
        </div>

        <p className="mt-2 text-base text-white/60 max-w-xl">
          Reactive, fluid, deliberately crafted - micro-interactions that feel alive.
        </p>
      </div>

      {/* Preview Window */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          relative
          mt-3
          w-full
          flex
          flex-col
          rounded-2xl
          border
          border-gray-700/80
          bg-gray-950/90
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        "
      >
        {/* Window Top Bar */}
        <div className="flex items-center justify-between border-b border-gray-700 bg-gray-800/80 px-3 py-2">
          <div className="flex items-center gap-4 min-w-0">
            <div className="flex gap-2 shrink-0">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <span className="text-sm font-medium text-gray-400 truncate">
              living-ui.tsx
            </span>
          </div>

          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-[10px] uppercase tracking-[0.25em] text-emerald-300 shrink-0"
          >
            Synced
          </motion.div>
        </div>

        {/* Actual Content */}
        <div className="w-full overflow-x-hidden">
          <LivingInterfacePreview />
        </div>
      </motion.div>
    </div>
  </Card>
);


export const AboutSection = () => {
  return (
    <section id="about">
      <div className="">
        <div className="container">
          <DiverseNeeds/>
          <SectionHeader
            eyebrow="Beyond Portfolio"
            title="The Story Behind the Code"
            description=""
          />
          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8">
              {/* First Card */}
              <Card className="h-[320px] col-span-1 md:col-span-2 p-0">
  <div className="flex flex-col h-full">
    {/* Video Section */}
    
 <video
              className="w-full h-[200px] object-cover"
              autoPlay
              loop
              muted
              playsInline
              
            >
              <source src="/video/web.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
    <div className="flex flex-col group m-4">
      {/* Heading with Sparkle Icon */}
      <div className="flex items-center gap-2">
        <SparkleIcon className="text-emerald-300 transition-transform duration-300 ease-in-out group-hover:rotate-12" />
        <h3 className="text-white text-2xl font-semibold transition-colors duration-300 ease-in-out">
        Visual Web Design
        </h3>
      </div>

      {/* Steps Below the Heading */}
      <p className="text-md text-white/60 mt-2">
      Question It → Design It → Build It → Break It → Ship It

      </p>
    </div>
  </div>
</Card>



{/* second card */}
<Card className="h-[320px] col-span-1 md:col-span-3 p-4 relative overflow-hidden flex flex-col justify-between bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg">
      {/* Text Section */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <SparkleIcon className="text-emerald-300 transition-transform duration-300 ease-in-out group-hover:rotate-12" />
          <h3 className="text-white text-2xl font-semibold transition-colors duration-300 ease-in-out group-hover:text-emerald-400">
            Frontend Development
          </h3>
        </div>
        <p className="text-base mt-1 text-md text-white/60">
          Modern UI, performance optimization, and seamless user experience.
        </p>
      </div>

      {/* VS Code Styled Code Snippet */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900 rounded-lg shadow-lg w-full h-[220px] flex flex-col mt-4 border border-gray-700"
      >
        {/* VS Code File Tab */}
        <div className="flex items-center justify-between bg-gray-800 px-2 rounded-t-lg border-b border-gray-700">
          <div className="flex items-center gap-4 p-1">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-gray-400 text-sm font-medium">Devfolio.tsx</span>
            <X className="w-4 h-4 text-gray-500 cursor-pointer hover:text-white" />
          </div>
          <a
            href="https://github.com/navanee1609"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>

        {/* Code Editor with Typing Animation */}
        <div className="p-1 md:p-4 text-white font-mono text-sm flex-grow overflow-hidden">
          {codeLines.map((line, i) => (
            <motion.pre
              key={i}
              className={line.color}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              {line.text}
            </motion.pre>
          ))}
        </div>
      </motion.div>
    </Card>

    {/* Third Card */}
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
              {/* My persona  */}
              <MyPersona />
              {/* Contact Animation Box */}

              <ContactAnimation />
            </div>
            <LivingInterfacesCard />
          </div>
        </div>
      </div>

      <SkillsToolsSection />

    </section>
  );
};
