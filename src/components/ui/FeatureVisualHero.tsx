"use client";

import React from "react";
import Image from "next/image";
import { FEATURE_VISUALS, FeatureVisual } from "@/lib/constants/visuals";
import { Satellite, Layers, Radio, Sparkles } from "lucide-react";

interface FeatureVisualHeroProps {
  featureKey: keyof typeof FEATURE_VISUALS | string;
  className?: string;
  customTitle?: string;
  customSubtitle?: string;
  compact?: boolean;
}

export const FeatureVisualHero: React.FC<FeatureVisualHeroProps> = ({
  featureKey,
  className = "",
  customTitle,
  customSubtitle,
  compact = true,
}) => {
  const visual: FeatureVisual = FEATURE_VISUALS[featureKey] || FEATURE_VISUALS.overview;

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-forest-200/90 shadow-2xs bg-white ${compact ? "mb-4" : "mb-8"} ${className}`}>
      {/* Visual Image Background with Nature Gradients */}
      <div className={`relative ${compact ? "h-32 sm:h-36" : "h-48 sm:h-56 md:h-64"} w-full overflow-hidden bg-forest-950`}>
        <Image
          src={visual.imageUrl}
          alt={visual.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="object-cover object-center scale-102 transition-transform duration-700 hover:scale-105"
        />

        {/* Multi-layer gentle nature gradient overlay for high contrast and calm aesthetic */}
        <div className="absolute inset-0 bg-linear-to-t from-forest-950/95 via-forest-950/60 to-forest-950/20" />
        <div className="absolute inset-0 bg-linear-to-r from-forest-950/90 via-forest-950/40 to-transparent" />

        {/* Content overlay */}
        <div className={`absolute inset-0 ${compact ? "p-4 sm:p-5" : "p-5 sm:p-7 md:p-8"} flex flex-col justify-end text-white z-10`}>
          <div className="max-w-3xl">
            {/* Capability Tag */}
            <div className={`inline-flex items-center gap-1.5 ${compact ? "px-2 py-0.5 text-[10px] mb-1" : "px-2.5 py-1 text-[11px] mb-2"} rounded-md bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 font-mono font-semibold tracking-wider uppercase backdrop-blur-xs`}>
              <Sparkles className="h-3 w-3 text-emerald-300" />
              <span>{visual.tag}</span>
            </div>

            {/* Title */}
            <h2 className={`${compact ? "text-lg sm:text-xl font-bold" : "text-xl sm:text-2xl md:text-3xl font-extrabold"} text-white tracking-tight drop-shadow-xs`}>
              {customTitle || visual.title}
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-stone-200 font-normal mt-0.5 max-w-2xl leading-relaxed drop-shadow-xs line-clamp-1 sm:line-clamp-2">
              {customSubtitle || visual.subtitle}
            </p>
          </div>
        </div>

        {/* Top-right Environmental Context Badge */}
        <div className="absolute top-3 right-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-forest-950/70 border border-white/10 backdrop-blur-md text-stone-200 text-xs font-mono">
          <Radio className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
          <span>Active Telemetry</span>
        </div>
      </div>

      {/* Satellite Telemetry Strip */}
      <div className={`${compact ? "px-4 py-2 text-[11px]" : "px-5 py-3 text-xs"} bg-[#F8FAF6] border-t border-forest-100 flex flex-wrap items-center justify-between gap-2.5 text-stone-600 font-mono`}>
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          <div className="flex items-center gap-1.5">
            <Satellite className="h-3.5 w-3.5 text-forest-700" />
            <span className="text-stone-500">Sensor:</span>
            <span className="font-semibold text-forest-900">{visual.satelliteMetadata.constellation}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-forest-700" />
            <span className="text-stone-500">Bands:</span>
            <span className="font-medium text-stone-800">{visual.satelliteMetadata.spectralBands}</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5">
            <span className="text-stone-500">Resolution:</span>
            <span className="font-medium text-stone-800">{visual.satelliteMetadata.resolution}</span>
          </div>
        </div>

        {/* Caption */}
        <div className="text-[11px] text-stone-500 italic max-w-md truncate">
          &ldquo;{visual.caption}&rdquo;
        </div>
      </div>
    </div>
  );
};
