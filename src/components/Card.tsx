import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export const Card = ({ className, children,...other }: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:absolute after:inset-0 after:border-2 after:border-white/20 after:rounded-3xl after:pointer-events-none after:z-[-1] p-6",
        className
      )}
      {...other}
    >
      {/* Background grain image */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          zIndex: -1, // Ensure background image is below the content
        }}
      ></div>

      {/* Render children here */}
      {children}
    </div>
  );
};
