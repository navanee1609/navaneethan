"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "@/components/Card";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Activity, MousePointer2, Sparkles, Zap } from "lucide-react";
import SparkleIcon from "@/assets/icons/star.svg";

type LiveMetric = {
  label: string;
  value: string;
  suffix: string;
  icon: typeof Zap;
  color: string;
};

const initialMetrics: LiveMetric[] = [
  { label: "FPS", value: "60", suffix: "", icon: Zap, color: "#34d399" },
  { label: "Delay", value: "12", suffix: "ms", icon: Activity, color: "#38bdf8" },
  { label: "CLS", value: "0.02", suffix: "", icon: Sparkles, color: "#a78bfa" },
];

const initialActivityFeed = [
  "Measuring browser performance",
  "Watching frame stability",
  "Input delay sensor armed",
  "Layout shift monitor ready",
];

/* ─── Waveform ─── */
const Waveform = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 160 54" className="h-14 w-full" aria-hidden>
    <motion.path
      d="M0 27 C18 27 18 27 34 27 S52 27 68 27 S98 27 116 27 S142 27 160 27"
      fill="none"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <motion.path
      d="M0 28 C14 18 24 18 38 28 S62 38 78 27 S102 14 120 27 S142 39 160 24"
      fill="none"
      stroke="url(#waveSoftGradient)"
      strokeWidth="1.25"
      strokeLinecap="round"
      opacity="0.4"
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
      strokeWidth="2"
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
        r="2"
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

/* ─── Metric Pill ─── */
const MetricPill = ({ metric }: { metric: LiveMetric }) => {
  const Icon = metric.icon;
  return (
    <motion.div
      layout
      whileHover={{ y: -1, scale: 1.03 }}
      className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2 backdrop-blur-md"
    >
      <div
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${metric.color}15` }}
      >
        <Icon className="h-3 w-3" style={{ color: metric.color }} />
      </div>
      <div className="min-w-0">
        <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">
          {metric.label}
        </p>
        <motion.p
          key={`${metric.label}-${metric.value}`}
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-semibold text-white tabular-nums"
        >
          {metric.value}
          <span className="ml-0.5 text-[10px] font-normal text-white/40">
            {metric.suffix}
          </span>
        </motion.p>
      </div>
    </motion.div>
  );
};

/* ─── Health Ring ─── */
const HealthRing = ({
  score,
  active,
}: {
  score: number;
  active: boolean;
}) => {
  const r = 22;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;

  return (
    <div className="relative flex items-center justify-center">
      <svg width="56" height="56" viewBox="0 0 56 56" className="-rotate-90">
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="3.5"
        />
        <motion.circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          key={score}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-[13px] font-bold text-white leading-none"
        >
          {score}
        </motion.span>
        <span className="text-[7px] uppercase tracking-[0.15em] text-white/30">
          health
        </span>
      </div>
      {active && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: "inset 0 0 12px rgba(52,211,153,0.15)",
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      )}
    </div>
  );
};

/* ─── Mini Rail ─── */
const MiniRail = ({
  label,
  value,
  color,
  delay,
  active,
}: {
  label: string;
  value: number;
  color: string;
  delay: number;
  active: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 8 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center gap-2"
  >
    <motion.div
      animate={
        active
          ? { scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }
          : { scale: 1, opacity: 0.4 }
      }
      transition={{ duration: 1.6, repeat: Infinity, delay: delay * 2 }}
      className="h-1.5 w-1.5 shrink-0 rounded-full"
      style={{ backgroundColor: color }}
    />
    <div className="min-w-0 flex-1">
      <div className="flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-[0.15em] text-white/30">
          {label}
        </span>
        <span className="text-[9px] text-white/40 tabular-nums">{value}%</span>
      </div>
      <div className="mt-1 h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  </motion.div>
);

/* ─── Main Preview ─── */
const LivingInterfacePreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [motionOn, setMotionOn] = useState(true);
  const [metrics, setMetrics] = useState(initialMetrics);
  const [feedItems, setFeedItems] = useState(initialActivityFeed);
  const [feedIndex, setFeedIndex] = useState(0);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [fps, setFps] = useState(60);
  const [inputDelay, setInputDelay] = useState(12);
  const [clsScore, setClsScore] = useState(0.02);
  const [scanScore, setScanScore] = useState(96);
  const [scanStatus, setScanStatus] = useState<"idle" | "scanning" | "ready">("idle");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useSpring(mouseX, { stiffness: 120, damping: 22 });
  const spotlightY = useSpring(mouseY, { stiffness: 120, damping: 22 });

  const updateMetric = useCallback((label: string, value: string) => {
    setMetrics((prev) =>
      prev.map((m) => (m.label === label ? { ...m, value } : m))
    );
  }, []);

  const pushFeed = useCallback((message: string) => {
    setFeedItems((prev) => [message, ...prev].slice(0, 5));
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
        if (currentFps < 45) pushFeed(`FPS dipped to ${currentFps}`);
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
    }, 2400);
    return () => clearInterval(feedTimer);
  }, [feedItems.length]);

  useEffect(() => {
    const timer = setInterval(() => setRipples((prev) => prev.slice(1)), 600);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof PerformanceObserver === "undefined") return;
    let cls = 0;
    const observers: PerformanceObserver[] = [];

    try {
      const layoutObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const e = entry as PerformanceEntry & { value?: number; hadRecentInput?: boolean };
          if (!e.hadRecentInput && e.value) {
            cls += e.value;
            const next = Number(cls.toFixed(2));
            setClsScore(next);
            updateMetric("CLS", next.toFixed(2));
            if (next > 0.1) pushFeed(`Layout shift: ${next.toFixed(2)}`);
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
        if (entry) pushFeed(`Thread blocked ${Math.round(entry.duration)}ms`);
      });
      longTaskObserver.observe({ type: "longtask", buffered: true });
      observers.push(longTaskObserver);
    } catch {}

    return () => observers.forEach((o) => o.disconnect());
  }, [pushFeed, updateMetric]);

  const runInteractionScan = useCallback(() => {
    const startedAt = performance.now();
    setScanStatus("scanning");
    pushFeed("Scan started");

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
        pushFeed(`Paint ${paintDelay}ms · ${health}%`);
      });
    });
  }, [clsScore, fps, pushFeed, updateMetric]);

  const healthRails = [
    {
      label: "Frame",
      value: Math.min(100, Math.max(8, Math.round((fps / 60) * 100))),
      color: "#34d399",
    },
    {
      label: "Input",
      value: Math.min(100, Math.max(8, 100 - inputDelay * 2)),
      color: "#38bdf8",
    },
    {
      label: "Stable",
      value: Math.min(100, Math.max(8, Math.round(100 - clsScore * 250))),
      color: "#a78bfa",
    },
  ];

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerLeave={() => {}}
      className="relative flex min-h-[280px] flex-1 flex-col overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Spotlight cursor */}
      <motion.div
        className="pointer-events-none absolute h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl"
        style={{ left: spotlightX, top: spotlightY, x: "-50%", y: "-50%" }}
      />

      {/* Floating orb */}
      <motion.div
        className="pointer-events-none absolute h-20 w-20 rounded-full bg-sky-400/10 blur-xl"
        animate={
          motionOn ? { x: [0, 14, -8, 0], y: [0, -10, 6, 0] } : { x: 0, y: 0 }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ right: "8%", top: "12%" }}
      />

      {/* ─── CONTENT ─── */}
      <div className="relative z-10 flex flex-1 flex-col gap-3 p-3 sm:p-4">
        {/* Top bar: pills + motion toggle */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-0.5 scrollbar-none">
            {metrics.map((metric) => (
              <MetricPill key={metric.label} metric={metric} />
            ))}
          </div>

          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => setMotionOn((p) => !p)}
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-2 py-1 backdrop-blur-md"
            aria-pressed={motionOn}
          >
            <span className="text-[9px] text-white/40">Motion</span>
            <div className="relative h-3.5 w-7 rounded-full bg-gray-700/90">
              <motion.div
                layout
                animate={{ x: motionOn ? 14 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`absolute top-[1px] h-3 w-3 rounded-full ${
                  motionOn
                    ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]"
                    : "bg-white/40"
                }`}
              />
            </div>
          </button>
        </div>

        {/* ─── BENTO GRID ─── */}
        <div className="flex flex-1 flex-col gap-3 min-h-0 md:grid md:grid-cols-[1.4fr_1fr]">
          {/* Left: Waveform + CTA */}
          <motion.div className="relative flex min-h-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] via-sky-400/[0.03] to-emerald-400/[0.04] p-3 backdrop-blur-md">
            {/* Glow accents */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_50%)]" />
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/10"
              animate={
                motionOn
                  ? { scale: [0.85, 1.15, 0.85], opacity: [0.1, 0.35, 0.1] }
                  : { scale: 1, opacity: 0.1 }
              }
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative">
              {/* Header: Signal label + % bubble (no Live text on mobile) */}
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.22em] text-white/40">
                  Signal
                </span>
                <div className="flex items-center gap-2">
                  {/* Live badge - hidden on small screens */}
                  <motion.span
                    animate={motionOn ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.5 }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="hidden sm:inline text-[9px] text-emerald-300"
                  >
                    Live
                  </motion.span>
                  {/* % bubble pulled closer */}
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-100">
                    {scanScore}%
                  </span>
                </div>
              </div>
              <div className="relative px-1 py-1">
                <Waveform active={motionOn} />
              </div>
            </div>

            <motion.button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={runInteractionScan}
              whileTap={motionOn ? { scale: 0.96 } : undefined}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
              className="relative mt-2 w-full overflow-hidden rounded-xl bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 p-[1px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-1.5 rounded-[11px] bg-gray-950/80 px-3 py-2 text-[11px] font-semibold text-white">
                <MousePointer2 className="h-3 w-3 text-emerald-300" />
                {scanStatus === "scanning"
                  ? "Scanning"
                  : scanStatus === "ready"
                    ? `Health ${scanScore}%`
                    : "Interact"}
              </span>
              {motionOn && (
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                />
              )}
            </motion.button>
          </motion.div>

          {/* Right: Health ring + rails + feed */}
          <div className="flex min-h-0 flex-col gap-2.5">
            {/* Health ring + rails */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-2.5 backdrop-blur-sm">
              <HealthRing score={scanScore} active={motionOn} />
              <div className="min-w-0 flex-1 space-y-2">
                {healthRails.map((rail, i) => (
                  <MiniRail
                    key={rail.label}
                    label={rail.label}
                    value={rail.value}
                    color={rail.color}
                    delay={i * 0.08}
                    active={motionOn}
                  />
                ))}
              </div>
            </div>

            {/* Activity feed */}
            <motion.div
              animate={motionOn ? { y: [0, -2, 0] } : { y: 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative mt-auto overflow-hidden rounded-xl border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-2"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={feedIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="truncate text-[10px] text-emerald-100/80"
                >
                  {feedItems[feedIndex] ?? feedItems[0]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ripples */}
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

      {/* Bottom status */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/[0.06] bg-black/20 px-4 py-1.5 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <motion.div
            animate={motionOn ? { scale: [1, 1.25, 1] } : { scale: 1 }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
          />
          <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
            Responding
          </span>
        </div>
        <span className="text-[9px] text-white/25">
          {motionOn ? `${scanScore}% health` : "Paused"}
        </span>
      </div>
    </div>
  );
};

/* ─── EXPORT ─── */
export const LivingInterfacesCard = () => (
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
      animate={{ x: ["-100%", "100%"] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
    />

    <div className="relative z-10 mx-auto flex w-full max-w-none flex-col lg:max-w-[920px] xl:max-w-[980px]">
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 12 }}
              transition={{ type: "spring", stiffness: 220 }}
            >
              <SparkleIcon className="text-emerald-300" />
            </motion.div>
            <h3 className="text-white text-2xl font-semibold">
              Living Interfaces
            </h3>
          </div>

          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
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