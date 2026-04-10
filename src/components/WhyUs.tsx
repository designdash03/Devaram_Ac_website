"use client";

import { Snowflake, Wrench, Droplets, Settings, ShieldCheck, Zap, Clock, Award, Users, ThumbsUp, CheckCircle, Phone, MessageCircle } from "lucide-react";

const comparisons = [
  
  {
    feature: "Pricing Transparency",
    us: true,
    usText: "Upfront pricing, no surprises",
    them: false,
    themText: "Hidden charges common",
  },
  {
    feature: "Service Warranty",
    us: true,
    usText: "Warranty Available",
    them: false,
    themText: "No warranty provided",
  },
  {
    feature: "Genuine Parts",
    us: true,
    usText: "Original manufacturer parts",
    them: false,
    themText: "Duplicate parts used",
  },
  {
    feature: "On-Time Arrival",
    us: true,
    usText: "Same-day, scheduled slots",
    them: false,
    themText: "No fixed timing",
  },
  {
    feature: "Customer Support",
    us: true,
    usText: "24/7 phone & WhatsApp",
    them: false,
    themText: "Hard to reach",
  },
  {
    feature: "Trained Professionals",
    us: true,
    usText: "Regular brand training",
    them: false,
    themText: "Basic skills only",
  },
  {
    feature: "Post-Service Support",
    us: true,
    usText: "Follow-up & satisfaction check",
    them: false,
    themText: "No follow-up",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full mb-4">
            Why Deva Air Conditioning
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            The Deva Air Conditioning <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">Advantage</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See why thousands of customers trust us over local mechanics. We set the standard for professional AC service.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200">
              <div className="p-4 sm:p-5">
                <span className="text-sm font-semibold text-muted-foreground">Feature</span>
              </div>
              <div className="p-4 sm:p-5 text-center bg-sky-50">
                <div className="flex items-center justify-center gap-1.5">
                  <Snowflake className="w-4 h-4 text-sky-600" />
                  <span className="text-sm font-bold text-sky-700">Deva Air Conditioning</span>
                </div>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((item, i) => (
              <div key={i} className={`grid grid-cols-2 border-b border-slate-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                <div className="p-3.5 sm:p-4">
                  <span className="text-sm font-medium text-foreground">{item.feature}</span>
                </div>
                <div className="p-3.5 sm:p-4 flex items-center justify-center gap-1.5 bg-sky-50/50">
                  <CheckCircle className="w-4 h-4 text-sky-500 shrink-0" />
                  <span className="text-xs text-slate-600">{item.usText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: <ShieldCheck className="w-6 h-6" />, text: "90-Day Warranty" },
            { icon: <Clock className="w-6 h-6" />, text: "Same-Day Service" },
            { icon: <Award className="w-6 h-6" />, text: "5+ Years Experience" },
            { icon: <Users className="w-6 h-6" />, text: "1,000+ Customers" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <div className="text-sky-600">{item.icon}</div>
              <span className="text-xs font-semibold text-slate-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
