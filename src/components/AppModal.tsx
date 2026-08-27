"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

export interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  badgeText?: string;
  badgeDate?: string;
  icon?: ReactNode;
  headerActions?: ReactNode;
  children: ReactNode;
  maxWidthClass?: string;
  className?: string;
}

export const AppModal = ({
  isOpen,
  onClose,
  title,
  badgeText = "VERIFIED CREDENTIAL",
  badgeDate,
  icon,
  headerActions,
  children,
  maxWidthClass = "max-w-5xl",
  className,
}: AppModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isMounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md cursor-default pointer-events-auto overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={twMerge(
              "w-full max-h-[92vh] bg-gray-900 border border-white/20 rounded-3xl shadow-2xl overflow-hidden relative my-auto text-white flex flex-col",
              maxWidthClass,
              className
            )}
          >
            {/* Background grain texture */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: `url(${grainImage.src})`,
                zIndex: 0,
              }}
            />

            {/* Modal Header */}
            <div className="relative z-10 px-4 sm:px-8 py-3.5 sm:py-4 border-b border-white/10 flex items-center justify-between gap-3 bg-white/[0.02] shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                  {icon || <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[9px] sm:text-[10px] font-mono font-extrabold uppercase tracking-widest text-emerald-400 truncate">
                      {badgeText}
                    </span>
                    {badgeDate && (
                      <>
                        <span className="text-white/30">•</span>
                        <span className="text-[9px] sm:text-[10px] font-mono text-white/60 font-semibold shrink-0">
                          {badgeDate}
                        </span>
                      </>
                    )}
                  </div>
                  {title && (
                    <h3 className="text-sm sm:text-xl font-bold text-white tracking-tight truncate">
                      {title}
                    </h3>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {headerActions}

                <motion.button
                  whileHover={{ scale: 1.08, rotate: 90 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={onClose}
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 hover:text-white transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="relative z-10 p-4 sm:p-8 overflow-y-auto flex-1">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};
