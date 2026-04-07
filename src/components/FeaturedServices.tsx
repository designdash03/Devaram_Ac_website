"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Shield, Clock, Award, Users, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    images: [
      "/ac-service-1.jpg",
      "/ac-service-2.jpg",
      "/ac-service-3.jpg",
      // Replace with your own photos for AC Repair
    ],
    title: "AC Repair & Fix",
    subtitle: "All brands & models",
    features: ["Error diagnosis", "Compressor repair", "PCB fixing", "Sensor replacement"],
    badge: null,
  },
  {
    images: [
      "/ac-service-3.jpg",
      "/ac-service-4.jpg",
      "/technician-1.jpg",
      // Replace with your own photos for AC Installation
    ],
    title: "AC Installation",
    subtitle: "Split, Window & Cassette",
    features: ["Professional setup", "Copper piping", "Drainage system", "Wall mounting"],
    badge: "Best Seller",
  },
  {
    images: [
      "/ac-service-2.jpg",
      "/ac-service-1.jpg",
      "/ac-service-4.jpg",
      // Replace with your own photos for Gas Refill
    ],
    title: "Gas Refill & Leak Fix",
    subtitle: "R32, R410A, R22",
    features: ["Leak detection", "Pressure testing", "Exact gas filling", "Warranty included"],
    badge: null,
  },
  {
    images: [
      "/ac-service-4.jpg",
      "/ac-service-3.jpg",
      "/ac-service-1.jpg",
      // Replace with your own photos for Deep Cleaning
    ],
    title: "Deep Cleaning & Service",
    subtitle: "Complete AC maintenance",
    features: ["Filter cleaning", "Coil washing", "Drain cleaning", "Performance check"],
    badge: "Popular",
  },
];

/* ────────────── Individual Tile Image Carousel ────────────── */
function ServiceImageCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = () => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  // Auto-rotate every 3 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden bg-slate-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image Stack with crossfade */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} - photo ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
            idx === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        />
      ))}

      {/* Left / Right Arrows (show on hover) */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 shadow hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 z-10"
        style={{ opacity: isPaused ? 1 : 0 }}
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 shadow hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 z-10"
        style={{ opacity: isPaused ? 1 : 0 }}
        aria-label="Next photo"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? "w-5 h-2 bg-white"
                : "w-2 h-2 bg-white/60 hover:bg-white/90"
            }`}
            aria-label={`Go to photo ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bottom gradient + title overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-3 left-3 right-3 z-[5] pointer-events-none">
        <h3 className="text-white font-bold text-base drop-shadow-md">
          {title}
        </h3>
      </div>
    </div>
  );
}

/* ────────────── Main Component ────────────── */
export default function FeaturedServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-block text-sm font-semibold text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full mb-4">
              Popular Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
              Most Booked Services
            </h2>
          </div>
          <a
            href="#services"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Auto-rotating Image Carousel */}
              <ServiceImageCarousel
                images={service.images}
                title={service.title}
              />

              {/* Badge */}
              {service.badge && (
                <div className="relative -mt-1 z-10 ml-3">
                  <span className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full -translate-y-1/2 inline-block shadow">
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-slate-500 font-medium mb-2">{service.subtitle}</p>
                <div className="space-y-1.5 mb-4">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-1 w-full bg-sky-50 hover:bg-sky-100 text-sky-700 text-sm font-semibold py-2.5 rounded-xl transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Shield className="w-5 h-5" />, text: "Verified Professionals" },
            { icon: <Clock className="w-5 h-5" />, text: "On-Time Guarantee" },
            { icon: <Award className="w-5 h-5" />, text: "Quality Assured" },
            { icon: <Users className="w-5 h-5" />, text: "5,000+ Happy Customers" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
              <div className="text-sky-600 shrink-0">{item.icon}</div>
              <span className="text-sm font-medium text-slate-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
