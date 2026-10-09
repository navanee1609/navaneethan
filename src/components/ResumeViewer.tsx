"use client";

import React, { useState } from "react";
import Image from "next/image";
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

  // Toggle zoom on image click
  const handleImageClick = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.4 : 1));
  };

  return (
    <div className={`w-full h-full min-h-0 flex flex-col ${className}`}>
      {/* Centered Preview Notice Badge */}
      {showToolbar && (
        <div className="flex items-center justify-center mb-2.5 shrink-0 px-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/25 shadow-lg shadow-black/40 backdrop-blur-md text-[11.5px] sm:text-xs text-slate-200 select-none">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>

            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 shrink-0">
              Image Preview
            </span>

            <span className="text-slate-300 font-normal">
              To view full resume, click{" "}
              <a
                href={RESUME_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-300 hover:text-cyan-200 underline decoration-cyan-400/60 underline-offset-2 transition-colors"
              >
                PDF
              </a>{" "}
              or{" "}
              <a
                href={RESUME_PDF}
                download="Navaneethan_KV_Resume.pdf"
                className="font-semibold text-emerald-300 hover:text-emerald-200 underline decoration-emerald-400/60 underline-offset-2 transition-colors"
              >
                Download
              </a>
            </span>
          </div>
        </div>
      )}

      {/* Main Resume Canvas Container */}
      <div className="relative flex-1 w-full min-h-0 rounded-2xl border border-white/10 bg-gray-950/80 p-2 sm:p-4 overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
        <div className="flex justify-center w-full min-h-full py-2">
          <div
            onClick={handleImageClick}
            title={zoomLevel === 1 ? "Click to Zoom In (140%)" : "Click to Reset"}
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
