"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaSearchPlus,
  FaSearchMinus,
  FaFilePdf,
  FaDownload,
} from "react-icons/fa";
import { RESUME_IMAGE, RESUME_PDF } from "@/constants";

interface ResumeViewerProps {
  className?: string;
  showToolbar?: boolean;
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({
  className = "",
  showToolbar = true,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.25));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => setZoomLevel(1);

  // Toggle zoom on image click
  const handleImageClick = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.4 : 1));
  };

  return (
    <div className={`w-full h-full min-h-0 flex flex-col ${className}`}>
      {/* Floating Viewer Toolbar */}
      {showToolbar && (
        <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 mb-2 rounded-xl bg-gray-900/90 border border-white/10 backdrop-blur-md shrink-0">
          {/* Zoom Controls */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.75}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-xs cursor-pointer"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <FaSearchMinus className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors text-[11px] font-mono font-medium cursor-pointer"
              title="Reset Zoom (100%)"
              aria-label="Reset Zoom"
            >
              {Math.round(zoomLevel * 100)}%
            </button>

            <button
              type="button"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2.25}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-xs cursor-pointer"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <FaSearchPlus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Image Preview & Action Hint */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[11px] text-white/60 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
            <span>
              Image preview &bull; Click <span className="text-cyan-300 font-medium">PDF</span> or <span className="text-emerald-300 font-medium">Download</span> to view
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5">
            {/* Open Full PDF in new tab */}
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-300 transition-colors text-xs font-semibold"
              title="Open Official PDF in new tab"
            >
              <FaFilePdf className="w-3 h-3" />
              <span>PDF</span>
            </a>

            {/* Download PDF button */}
            <a
              href={RESUME_PDF}
              download="Navaneethan_KV_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-colors text-xs font-medium"
              title="Download Resume PDF"
            >
              <FaDownload className="w-3 h-3" />
              <span className="hidden sm:inline">Download</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Resume Canvas Container */}
      <div className="relative flex-1 w-full min-h-0 rounded-2xl border border-white/10 bg-gray-950/80 p-2 sm:p-4 overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
        <div className="flex justify-center w-full min-h-full py-2">
          <div
            onClick={handleImageClick}
            title={zoomLevel === 1 ? "Click to Zoom In (140%)" : "Click to Reset"}
            className={`relative rounded-xl overflow-hidden shadow-2xl shadow-black/80 border border-slate-300/40 bg-white transition-all duration-300 shrink-0 ${zoomLevel === 1 ? "cursor-zoom-in" : "cursor-zoom-out"
              }`}
            style={{
              width: `${Math.round(850 * zoomLevel)}px`,
              maxWidth: zoomLevel <= 1 ? "100%" : "none",
            }}
          >
            <Image
              src={RESUME_IMAGE}
              alt="Navaneethan KV Resume"
              width={1000}
              height={1414}
              priority
              quality={100}
              className="w-full h-auto block select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
