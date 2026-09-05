import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrencyINR(crores: number): string {
  return `₹${crores.toFixed(1)} Cr`;
}

export function formatPercent(value: number): string {
  return `${Math.round(value)}%`;
}
