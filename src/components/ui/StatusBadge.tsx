import React from "react";
import { ProjectStatus } from "@/types";
import { cn } from "@/lib/utils";
import { getStatusConfig } from "@/lib/constants/status";

interface StatusBadgeProps {
  status: ProjectStatus | string;
  size?: "sm" | "md" | "lg";
  className?: string;
  showDot?: boolean;
  showTooltip?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = "md",
  className,
  showDot = true,
  showTooltip = false,
}) => {
  const config = getStatusConfig(status);

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs font-medium",
    md: "px-2.5 py-1 text-xs sm:text-sm font-medium",
    lg: "px-3.5 py-1.5 text-sm font-semibold",
  }[size];

  return (
    <span
      title={showTooltip ? config.description : undefined}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border tracking-wide transition-colors",
        sizeClasses,
        config.badgeBg,
        config.badgeText,
        config.badgeBorder,
        className
      )}
    >
      {showDot && (
        <span
          className={cn(
            "h-2 w-2 rounded-full flex-shrink-0",
            config.dotColor,
            config.tone === "green" && "animate-pulse"
          )}
        />
      )}
      <span>{config.label}</span>
    </span>
  );
};
