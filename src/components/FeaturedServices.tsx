"use client";

import { Star, ArrowRight, Shield, Clock, Award, Users, CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
  {
    image: "/ac-service-1.jpg",
    title: "AC Repair & Fix",
    subtitle: "All brands & models",
    features: ["Error diagnosis", "Compressor repair", "PCB fixing", "Sensor replacement"],
    badge: null,
  },
  {
    image: "/ac-service-3.jpg",
    title: "AC Installation",
    subtitle: "Split, Window & Cassette",
    features: ["Professional setup", "Copper piping", "Drainage system", "Wall mounting"],
    badge: "Best Seller",
  },
  {
    image: "/ac-service-2.jpg",
    title: "Gas Refill & Leak Fix",
    subtitle: "R32, R410A, R22",
    features: ["Leak detection", "Pressure testing", "Exact gas filling", "Warranty included"],
    badge: null,
  },
  {
    image: "/ac-service-4.jpg",
    title: "Deep Cleaning & Service",
    subtitle: "Complete AC maintenance",
    features: ["Filter cleaning", "Coil washing", "Drain cleaning", "Performance check"],
    badge: "Popular",
  },
];

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
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {service.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-bold text-base drop-shadow-sm">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-xs">{service.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
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
