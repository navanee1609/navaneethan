"use client";

import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef, useRef, useState } from "react";

export const Card = ({
  className,
  children,
  onMouseMove,
  onMouseLeave,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        opacity: 1,
      });
    }
    if (onMouseMove) onMouseMove(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:absolute after:inset-0 after:border-2 after:border-white/20 after:rounded-3xl after:pointer-events-none after:z-[-1] p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 transition-all",
        className
      )}
      {...other}
    >
      {/* Dynamic Cursor Spotlight Glow Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(52, 211, 153, 0.12), transparent 75%)`,
        }}
      />

      {/* Background grain image */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          zIndex: -1,
        }}
      />

      {/* Render children here */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};
