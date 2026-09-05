import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral" | "warning";
  subtext?: string;
  icon?: LucideIcon;
  badge?: string;
  className?: string;
  sensor?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  unit,
  change,
  changeType = "neutral",
  subtext,
  icon: Icon,
  badge,
  className,
  sensor,
}) => {
  const changeColors = {
    positive: "text-emerald-700 bg-emerald-50 border-emerald-200",
    negative: "text-rose-700 bg-rose-50 border-rose-200",
    warning: "text-amber-800 bg-amber-50 border-amber-200",
    neutral: "text-stone-600 bg-stone-100 border-stone-200",
  }[changeType];

  return (
    <div
      className={cn(
        "group relative rounded-xl bg-white border border-[#D5E2D6] p-5 shadow-subtle hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-forest-700/80">
          {label}
        </span>
        {Icon && (
          <div className="h-8 w-8 rounded-lg bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-700 group-hover:bg-forest-100 transition-colors">
            <Icon className="h-4 w-4" />
          </div>
        )}
      </div>

      <div className="flex items-baseline gap-1.5 mt-1">
        <span className="text-3xl font-bold tracking-tight text-forest-950 font-mono">
          {value}
        </span>
        {unit && <span className="text-sm font-semibold text-stone-500">{unit}</span>}
      </div>

      {(change || badge) && (
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          {change && (
            <span
              className={cn(
                "inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full border",
                changeColors
              )}
            >
              {change}
            </span>
          )}
          {badge && (
            <span className="text-xs text-stone-500 font-mono bg-stone-50 px-2 py-0.5 rounded border border-stone-200">
              {badge}
            </span>
          )}
        </div>
      )}

      {subtext && <p className="mt-2 text-xs text-stone-600 leading-relaxed">{subtext}</p>}

      {sensor && (
        <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-600">
          <span className="font-mono">Sensor Data</span>
          <span className="font-medium text-forest-800 truncate max-w-[170px]">{sensor}</span>
        </div>
      )}
    </div>
  );
};
