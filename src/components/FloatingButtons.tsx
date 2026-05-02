"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3 items-end">
      {/* Dismiss Button */}
      <button
        onClick={() => setDismissed(true)}
        className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-500 transition-colors"
        aria-label="Dismiss floating buttons"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Call Button */}
      <a
        href="tel:+917200979643"
        className="group relative"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
        <Button
          size="lg"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center p-0"
        >
          <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
        </Button>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917200979643?text=Hi%2C%20I%20need%20AC%20service%20at%20my%20place.%20Please%20share%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <Button
          size="lg"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center p-0"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </Button>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
