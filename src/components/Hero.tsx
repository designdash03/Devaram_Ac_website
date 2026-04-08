"use client";

import { Phone, ArrowRight, Shield, Clock, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Professional AC repair service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-sky-900/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">
              1000+ customers with five stars
            </span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Expert{" "}
            <span className="bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">
              AC Repair
            </span>
            <br />
            & Installation
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
            Professional air conditioning services for homes and businesses. Fast
            response, honest pricing, and guaranteed satisfaction. Available 7 days
            a week!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="tel:+917200979643"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 text-slate-900 px-8 py-4 rounded-full text-base font-bold shadow-2xl shadow-sky-400/30 hover:shadow-sky-400/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              Call Now - Free Estimate
            </a>
            <a
              href="https://wa.me/917200979643?text=Hi%2C%20I%20need%20AC%20service%20at%20my%20place.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:-translate-y-1 group"
            >
              💬 WhatsApp Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                5+ yrs
              </div>
              <div className="text-xs sm:text-sm text-white/60">Years of Exp.</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                1000+
              </div>
              <div className="text-xs sm:text-sm text-white/60">Happy Clients</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                4.8★
              </div>
              <div className="text-xs sm:text-sm text-white/60">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/10 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-300" />
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-sky-300" />
              <span>90-Day Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-sky-300" />
              <span>Honest Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
