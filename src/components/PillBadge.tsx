import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const PILL_COLOR_STYLES = [
  "bg-emerald-500/10 border border-emerald-500/25 text-emerald-400",
  "bg-cyan-500/10 border border-cyan-500/25 text-cyan-400",
  "bg-purple-500/10 border border-purple-500/25 text-purple-400",
  "bg-amber-500/10 border border-amber-500/25 text-amber-400",
];

export interface PillBadgeProps {
  children?: ReactNode;
  text?: string;
  colorIndex?: number;
  customStyle?: string;
  icon?: ReactNode;
  className?: string;
}

export const PillBadge = ({
  children,
  text,
  colorIndex = 0,
  customStyle,
  icon,
  className,
}: PillBadgeProps) => {
  const colorStyle = customStyle || PILL_COLOR_STYLES[colorIndex % PILL_COLOR_STYLES.length];

  return (
    <span
      className={twMerge(
        "text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-sm transition duration-200 inline-flex items-center gap-1.5",
        colorStyle,
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{text || children}</span>
    </span>
  );
};
