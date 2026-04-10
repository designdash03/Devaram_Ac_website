"use client";

import {
  Snowflake,
  Wrench,
  Droplets,
  Settings,
  ShieldCheck,
  Zap,
  Thermometer,
  Wind,
} from "lucide-react";

const categories = [
  { icon: <Wrench className="w-6 h-6" />, label: "AC Repair", active: true },
  { icon: <Snowflake className="w-6 h-6" />, label: "AC Installation" },
  { icon: <Droplets className="w-6 h-6" />, label: "Gas Refill" },
  { icon: <Settings className="w-6 h-6" />, label: "Servicing" },
  // { icon: <ShieldCheck className="w-6 h-6" />, label: "AMC Plans" },
  { icon: <Zap className="w-6 h-6" />, label: "Emergency" },
  { icon: <Thermometer className="w-6 h-6" />, label: "Thermostat" },
  { icon: <Wind className="w-6 h-6" />, label: "Deep Clean" },
];

export default function CategoryBar() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap shrink-0 transition-all duration-200 ${
                cat.active
                  ? "bg-sky-50 text-sky-700 border border-sky-200 shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-sky-600 border border-transparent"
              }`}
            >
              <span className={cat.active ? "text-sky-600" : "text-slate-400"}>
                {cat.icon}
              </span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
