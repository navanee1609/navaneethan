"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

export interface AppButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: ReactNode;
  text?: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  fullWidthOnMobile?: boolean;
  className?: string;
  href?: string;
  target?: string;
  download?: string | boolean;
}

export const AppButton = ({
  children,
  text,
  icon,
  variant = "primary",
  fullWidthOnMobile = false,
  className,
  href,
  target,
  download,
  onClick,
  ...props
}: AppButtonProps) => {
  const baseStyles =
    "h-10 px-5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer transition duration-300 text-xs shadow-md";

  const variantStyles = {
    primary: "bg-white hover:bg-white/90 text-gray-950",
    secondary: "bg-white/10 hover:bg-white/20 border border-white/15 text-white",
    outline: "bg-transparent border border-white/25 hover:bg-white/10 text-white",
    ghost: "bg-transparent hover:bg-white/10 text-white/80 hover:text-white shadow-none",
  };

  const widthStyle = fullWidthOnMobile ? "w-full sm:w-auto" : "";

  const content = (
    <>
      <span>{text || children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        href={href}
        target={target}
        download={download}
        className={twMerge(baseStyles, variantStyles[variant], widthStyle, className)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={twMerge(baseStyles, variantStyles[variant], widthStyle, className)}
      {...props}
    >
      {content}
    </motion.button>
  );
};
