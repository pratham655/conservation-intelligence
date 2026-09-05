import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  badgeTone?: "green" | "water" | "amber" | "earth";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeTone = "green",
  title,
  subtitle,
  align = "left",
  className,
}) => {
  const toneClasses = {
    green: "bg-forest-100/70 text-forest-800 border-forest-300/60",
    water: "bg-water-100/70 text-water-800 border-water-300/60",
    amber: "bg-amberState-100 text-amberState-800 border-amberState-300/60",
    earth: "bg-earth-100 text-earth-800 border-earth-300/60",
  }[badgeTone];

  return (
    <div
      className={cn(
        "max-w-3xl mb-10",
        align === "center" ? "mx-auto text-center" : "",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-3 flex", align === "center" ? "justify-center" : "justify-start")}>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border shadow-2xs font-mono",
              toneClasses
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-forest-950 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
