"use client";

import { useState, useEffect } from "react";
import { X, Percent, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OfferBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] animate-in slide-in-from-top duration-500">
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm overflow-hidden">
            <span className="relative flex h-6 w-6 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-6 w-6 items-center justify-center bg-white/20">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
            </span>
            <span className="font-medium truncate">
              <Percent className="w-4 h-4 inline mr-1 -mt-0.5" />
              Summer Special: <strong>20% OFF</strong> on all AC services this
              month! Limited time offer.
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+919876543210"
              className="hidden sm:inline-flex items-center gap-1 bg-white text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-orange-50 transition-colors"
            >
              <Phone className="w-3 h-3" />
              Claim Now
            </a>
            <button
              onClick={() => setVisible(false)}
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Dismiss offer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
