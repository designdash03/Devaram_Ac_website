"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function DownloadBanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
          <MessageCircle className="w-4 h-4 text-sky-300" />
          <span className="text-sm text-white/80">Quick & Easy Booking</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          AC Not Working?<br />
          <span className="bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">
            Get It Fixed in 60 Minutes
          </span>
        </h2>

        <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
          No need to search for a reliable mechanic anymore. Just call us or WhatsApp us, and our expert technician will be at your doorstep. It&apos;s that simple!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 text-slate-900 px-8 py-4 rounded-full text-base font-bold shadow-2xl shadow-sky-500/30 hover:shadow-sky-500/50 transition-all hover:-translate-y-1"
          >
            <Phone className="w-5 h-5" />
            Call Now - Free Estimate
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20AC%20service%20at%20my%20place.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full text-base font-bold transition-all hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>

        <p className="text-xs text-white/40 mt-6">
          Available 24/7 · No booking fee · Free diagnosis
        </p>
      </div>
    </section>
  );
}
