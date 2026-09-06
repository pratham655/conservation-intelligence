"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Compass,
  ChevronRight,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Impact Map", href: "/map" },
    { name: "Compare", href: "/compare" },
    { name: "Copilot", href: "/copilot" },
    { name: "Reports", href: "/reports" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled || pathname !== "/"
          ? "bg-[#FBFBF8]/95 backdrop-blur-md border-b border-forest-200/70 shadow-xs py-3"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">

          {/* Global Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-hidden min-w-0"
          >
            {/* Conservation Intelligence Logo */}
            <div className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 flex items-center justify-center">
              <Image
                src="/Conservation.png"
                alt="Conservation Intelligence"
                width={44}
                height={44}
                priority
                className="h-full w-full object-contain"
              />
            </div>

            {/* Brand Text */}
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-sm sm:text-lg lg:text-xl tracking-tight text-forest-950 font-sans truncate">
                  Conservation Intelligence
                </span>

                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-forest-100 text-forest-800 border border-forest-200 shrink-0">
                  GLOBAL PLATFORM
                </span>
              </div>

              <p className="text-[11px] text-stone-500 hidden sm:block tracking-wide">
                Satellite Environmental Monitoring &amp; Verification
              </p>
            </div>
          </Link>

          {/* Desktop Global Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-sm transition-all",
                    active
                      ? "bg-forest-100 text-forest-950 font-semibold border border-forest-200 shadow-2xs"
                      : "font-medium text-stone-700 hover:text-forest-900 hover:bg-forest-50"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Global Actions */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Explore Projects */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-semibold shadow-xs transition-all hover:shadow-md active:scale-98"
            >
              <Compass className="h-3.5 w-3.5 text-emerald-300" />

              <span>Explore Projects</span>
            </Link>

            {/* Login / Profile */}
            <Link
              href="/login"
              className={cn(
                "inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all active:scale-98",
                pathname === "/login"
                  ? "bg-forest-900 text-white border-forest-950 shadow-xs"
                  : "bg-white text-forest-900 border-forest-200 hover:bg-forest-50 hover:border-forest-300 shadow-2xs"
              )}
            >
              <User
                className={cn(
                  "h-3.5 w-3.5",
                  pathname === "/login"
                    ? "text-emerald-300"
                    : "text-forest-700"
                )}
              />

              <span>Login / Profile</span>
            </Link>
          </div>

          {/* Mobile Hamburger & Quick Link */}
          <div className="flex items-center gap-2 lg:hidden">

            {/* Mobile Projects Button */}
            <Link
              href="/projects"
              className="px-3 py-1.5 rounded-lg bg-forest-800 text-white text-xs font-medium"
            >
              Projects
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-forest-900 hover:bg-forest-100 focus:outline-hidden focus:ring-2 focus:ring-forest-600"
              aria-label={
                mobileMenuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#FBFBF8] border-b border-forest-200 shadow-xl p-5 animate-in slide-in-from-top duration-200 max-h-[calc(100vh-70px)] overflow-y-auto">

          {/* Mobile Navigation Header */}
          <div className="mb-4 pb-3 border-b border-stone-200">
            <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
              <span>GLOBAL NAVIGATION</span>

              <span className="text-forest-700 font-semibold">
                CONSERVATION PLATFORM
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-colors",
                    active
                      ? "bg-forest-100 text-forest-950 font-bold border border-forest-200"
                      : "font-medium text-stone-800 hover:bg-forest-50"
                  )}
                >
                  <span>{link.name}</span>

                  <ChevronRight className="h-4 w-4 text-stone-400" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Actions */}
          <div className="mt-6 pt-4 border-t border-stone-200 space-y-2">

            {/* Project Selection */}
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest-800 text-white font-semibold text-xs shadow-md"
            >
              <Compass className="h-4 w-4 text-emerald-300" />

              <span>Project Selection Directory</span>
            </Link>

            {/* Login / Profile */}
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-forest-300 text-forest-900 font-semibold text-xs bg-white hover:bg-forest-50"
            >
              <User className="h-4 w-4 text-forest-700" />

              <span>Login / Profile</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};