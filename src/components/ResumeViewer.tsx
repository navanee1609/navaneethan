"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RESUME_IMAGE, RESUME_PDF } from "@/constants";
import { ResumeDocument } from "./ResumeDocument";
import { 
  FaSearchPlus, 
  FaSearchMinus, 
  FaExpand, 
  FaDownload, 
  FaExternalLinkAlt, 
  FaFileAlt, 
  FaImage,
  FaBolt
} from "react-icons/fa";

interface ResumeViewerProps {
  className?: string;
  showToolbar?: boolean;
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({
  className = "",
  showToolbar = true,
}) => {
  // Default to the Ultra-HD Authentic Paper Resume
  const [viewMode, setViewMode] = useState<"image" | "digital">("image");
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const zoomIn = () => setZoomLevel((prev) => Math.min(Number((prev + 0.35).toFixed(2)), 2.5));
  const zoomOut = () => setZoomLevel((prev) => Math.max(Number((prev - 0.35).toFixed(2)), 1));
  const resetZoom = () => setZoomLevel(1);

  // Toggle zoom on tap/click
  const handleImageClick = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.6 : 1));
  };

  return (
    <div className={`w-full h-full min-h-0 flex flex-col ${className}`}>
      {/* Streamlined Single Top Toolbar */}
      {showToolbar && (
        <div className="flex flex-col gap-1.5 mb-2 shrink-0 px-0.5">
          {/* Top Row: Mode Switcher + Contextual Action/Badge */}
          <div className="flex items-center justify-between gap-1.5 w-full">
            {/* Mode Switcher */}
            <div className="inline-flex items-center p-0.5 rounded-xl bg-slate-900/90 border border-white/10 shadow-sm shrink-0">
              <button
                onClick={() => { setViewMode("image"); resetZoom(); }}
                className={`flex items-center gap-1.5 px-2 sm:px-2.5 md:px-3 py-1 rounded-lg text-[10.5px] sm:text-[11px] md:text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  viewMode === "image"
                    ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-400/40 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FaImage className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>Paper<span className="hidden md:inline"> Resume</span></span>
              </button>

              <button
                onClick={() => setViewMode("digital")}
                className={`flex items-center gap-1.5 px-2 sm:px-2.5 md:px-3 py-1 rounded-lg text-[10.5px] sm:text-[11px] md:text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  viewMode === "digital"
                    ? "bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FaBolt className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>Interactive<span className="hidden md:inline"> Resume</span></span>
              </button>
            </div>

            {/* Contextual Action (Zoom controls for Paper, Web-Native Badge for Interactive on both Mobile & Desktop) */}
            <div className="flex items-center gap-1 shrink-0">
              {viewMode === "image" ? (
                <div className="inline-flex items-center p-0.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 shrink-0">
                  <button
                    onClick={zoomOut}
                    disabled={zoomLevel <= 1}
                    className="p-1 hover:text-white disabled:opacity-30 disabled:hover:text-slate-300 transition-colors cursor-pointer"
                    title="Zoom Out"
                    aria-label="Zoom Out"
                  >
                    <FaSearchMinus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </button>
                  <button
                    onClick={resetZoom}
                    className="px-1 sm:px-1.5 py-0.5 text-[9.5px] sm:text-[10px] font-bold text-emerald-300 hover:text-white transition-colors cursor-pointer"
                    title="Reset Zoom"
                    aria-label="Reset Zoom"
                  >
                    {Math.round(zoomLevel * 100)}%
                  </button>
                  <button
                    onClick={zoomIn}
                    disabled={zoomLevel >= 2.5}
                    className="p-1 hover:text-white disabled:opacity-30 disabled:hover:text-slate-300 transition-colors cursor-pointer"
                    title="Zoom In"
                    aria-label="Zoom In"
                  >
                    <FaSearchPlus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </button>
                </div>
              ) : (
                /* Web-Native Badge visible on Mobile and Desktop */
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-[10px] sm:text-[10.5px] font-semibold text-cyan-300 select-none shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Web-Native</span>
                </span>
              )}
            </div>
          </div>

          {/* Sub-Banner for Interactive Mode: Live Clickable Links & Demos (Visible on Mobile & Desktop) */}
          {viewMode === "digital" && (
            <div className="flex items-center justify-between gap-2 px-2.5 py-1 rounded-xl bg-emerald-400/5 border border-emerald-400/15 text-[10.5px] sm:text-[11px] text-emerald-300 shadow-sm shrink-0">
              <div className="flex items-center gap-1.5 min-w-0 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="truncate">Live clickable links & demos</span>
              </div>
              <span className="text-[9.5px] text-white/50 shrink-0 select-none">Tap to open</span>
            </div>
          )}
        </div>
      )}

      {/* Main Resume Canvas Container */}
      <div className="relative flex-1 w-full min-h-0 rounded-2xl border border-white/10 bg-gray-950/80 p-1 sm:p-4 overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
        {viewMode === "image" ? (
          /* Ultra-HD Physical Paper Resume */
          <div className="flex justify-center w-full py-2">
            <div
              onClick={handleImageClick}
              title={zoomLevel === 1 ? "Tap to Zoom In (160%)" : "Tap to Reset"}
              className={`relative rounded-xl overflow-hidden shadow-2xl shadow-black/80 border border-slate-300/40 bg-white transition-all duration-300 shrink-0 ${
                zoomLevel === 1 ? "cursor-zoom-in" : "cursor-zoom-out"
              }`}
              style={{
                width: `${Math.round(850 * zoomLevel)}px`,
                maxWidth: zoomLevel <= 1 ? "100%" : "none",
              }}
            >
              <Image
                src={RESUME_IMAGE}
                alt="Navaneethan KV Resume"
                width={3720}
                height={5264}
                priority
                quality={100}
                unoptimized
                className="w-full h-auto block select-none pointer-events-none"
              />
            </div>
          </div>
        ) : (
          /* Interactive Vector Resume - Fully styled with app theme */
          <div className="flex justify-center w-full py-1">
            <ResumeDocument defaultTheme="dark" showToolbar={false} className="w-full" />
          </div>
        )}
      </div>

      {/* Responsive Hint Footer */}
      <div className="mt-1 text-center shrink-0">
        <p className="text-[10.5px] text-white/45">
          {viewMode === "image"
            ? (zoomLevel === 1 ? "💡 Tap resume or use + to zoom" : "💡 Tap again to fit page")
            : "✨ Interactive: Click projects, links, phone or email to open live demos & connect"}
        </p>
      </div>
    </div>
  );
};
