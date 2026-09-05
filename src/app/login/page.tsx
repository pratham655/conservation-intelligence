"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { FinalCtaAndFooter } from "@/components/footer/FinalCtaAndFooter";
import { 
  Satellite, 
  ShieldCheck, 
  Lock, 
  Mail, 
  ArrowRight, 
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [role, setRole] = useState<"officer" | "scientist" | "observer">("officer");
  const [email, setEmail] = useState("remote.sensing@moefcc.gov.in");
  const [password, setPassword] = useState("••••••••••••");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF8]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          
          {/* Card Container */}
          <div className="rounded-3xl bg-white border border-forest-200/90 p-7 sm:p-9 shadow-soft space-y-6">
            
            {/* Header Brand */}
            <div className="text-center space-y-2">
              <div className="mx-auto h-12 w-12 rounded-2xl bg-forest-800 text-white flex items-center justify-center shadow-md border border-forest-600/30">
                <Satellite className="h-6 w-6 text-emerald-300" />
              </div>
              <h1 className="text-2xl font-extrabold text-forest-950 tracking-tight">
                {isLoggedIn ? "Authenticated Profile" : "Platform Access"}
              </h1>
              <p className="text-xs text-stone-500 font-mono">
                Satellite Environmental Monitoring &amp; Verification System
              </p>
            </div>

            {isLoggedIn ? (
              /* Signed-in User State */
              <div className="space-y-5">
                <div className="p-4 rounded-2xl bg-forest-50 border border-forest-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-forest-800 text-white flex items-center justify-center font-bold text-sm">
                      AT
                    </div>
                    <div>
                      <div className="text-sm font-bold text-forest-950">Dr. Aris Thorne</div>
                      <div className="text-xs text-stone-500 font-mono">Senior Remote Sensing Specialist</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-forest-200/70 text-xs font-mono space-y-1.5 text-stone-600">
                    <div className="flex justify-between">
                      <span>Access Level:</span>
                      <span className="font-bold text-forest-900">National Directorate (Full Tier)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Agency:</span>
                      <span className="font-semibold text-stone-800">MoEFCC / State Remote Sensing</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Security Token:</span>
                      <span className="text-emerald-700 font-bold">256-Bit Cryptographic Active</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Link
                    href="/projects"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-semibold text-sm shadow-xs transition-all"
                  >
                    <span>Proceed to Monitored Projects</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsLoggedIn(false)}
                    className="w-full py-2.5 rounded-xl border border-stone-200 text-stone-600 text-xs font-medium hover:bg-stone-50 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              /* Login Form */
              <form onSubmit={handleLogin} className="space-y-4">
                
                {/* Role Tabs */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-stone-100 rounded-xl text-[11px] font-mono font-medium text-stone-600">
                  <button
                    type="button"
                    onClick={() => {
                      setRole("officer");
                      setEmail("director.watershed@state.gov.in");
                    }}
                    className={cn(
                      "py-1.5 rounded-lg transition-colors text-center",
                      role === "officer" ? "bg-white text-forest-950 font-bold shadow-2xs" : "hover:text-stone-900"
                    )}
                  >
                    Officer
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRole("scientist");
                      setEmail("remote.sensing@moefcc.gov.in");
                    }}
                    className={cn(
                      "py-1.5 rounded-lg transition-colors text-center",
                      role === "scientist" ? "bg-white text-forest-950 font-bold shadow-2xs" : "hover:text-stone-900"
                    )}
                  >
                    Scientist
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRole("observer");
                      setEmail("public.audit@conservation.org");
                    }}
                    className={cn(
                      "py-1.5 rounded-lg transition-colors text-center",
                      role === "observer" ? "bg-white text-forest-950 font-bold shadow-2xs" : "hover:text-stone-900"
                    )}
                  >
                    Observer
                  </button>
                </div>

                {/* Email / ID Field */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700 block">
                    Institutional Email / Employee ID
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-forest-600 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Password / Token Field */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <label className="font-semibold text-stone-700">Security Credentials</label>
                    <span className="text-forest-700 hover:underline cursor-pointer">Reset Credentials</span>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-forest-600 focus:bg-white font-mono"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all active:scale-98"
                >
                  <ShieldCheck className="h-4 w-4 text-emerald-300" />
                  <span>Sign In to Environmental Portal</span>
                </button>

                {/* Demo Quick Access */}
                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setEmail("remote.sensing@moefcc.gov.in");
                      setIsLoggedIn(true);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-forest-800 hover:text-forest-950 font-semibold underline"
                  >
                    <Sparkles className="h-3 w-3 text-emerald-600" />
                    <span>One-Click Demo Authentication (Scientist Profile)</span>
                  </button>
                </div>
              </form>
            )}

            <div className="pt-4 border-t border-stone-100 text-center text-[11px] text-stone-500 font-mono">
              Protected by National Environmental Data Infrastructure Access Protocols
            </div>

          </div>

        </div>
      </main>

      <FinalCtaAndFooter />
    </div>
  );
}
