"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ResponsiveDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-forest-950/40 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Drawer / Bottom Sheet */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[88vh] overflow-y-auto rounded-t-2xl bg-white border-t border-forest-200 shadow-2xl p-5 sm:p-6"
          >
            {/* Pull handle indicator */}
            <div className="mx-auto -mt-2 mb-4 h-1.5 w-12 rounded-full bg-stone-300" />

            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100">
              <div>
                {title && (
                  <h3 className="text-lg sm:text-xl font-bold text-forest-950">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    {subtitle}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors focus:outline-hidden focus:ring-2 focus:ring-forest-600"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="py-4">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
