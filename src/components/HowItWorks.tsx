"use client";

import { Phone, CalendarCheck, Search, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: <Phone className="w-7 h-7" />,
    title: "Book a Service",
    description:
      "Call us, WhatsApp, or fill out our online form. Our friendly team will understand your issue and book a convenient time slot that works for your schedule. We offer flexible timing including weekends and evenings.",
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-50",
    textColor: "text-sky-600",
  },
  {
    step: "02",
    icon: <Search className="w-7 h-7" />,
    title: "Expert Diagnosis",
    description:
      "Our certified technician visits your location with all necessary tools and equipment. They perform a thorough inspection to identify the exact issue with your AC and explain the problem and solution clearly before starting any work.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    step: "03",
    icon: <Wrench className="w-7 h-7" />,
    title: "Professional Repair",
    description:
      "We fix your AC using genuine spare parts and proven techniques. Our technicians carry common parts in their toolkit to complete most repairs on the first visit. You will know the cost upfront before we begin — no surprises!",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    step: "04",
    icon: <CheckCircle className="w-7 h-7" />,
    title: "Quality Check & Warranty",
    description:
      "After repair, we run a comprehensive quality check to ensure your AC is working perfectly. We clean up the work area and provide a service warranty. You will also receive maintenance tips and a follow-up call to confirm satisfaction.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    textColor: "text-violet-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Getting Your AC Fixed{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Is Easy
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We have simplified the entire process to make it hassle-free for you.
            From booking to completion, here is what to expect when you choose
            CoolAir Pro.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-sky-200 via-amber-200 via-emerald-200 to-violet-200" />

          {steps.map((item, index) => (
            <div key={index} className="relative group">
              <div className="text-center">
                {/* Step Number */}
                <div className="relative inline-flex mb-6">
                  <div
                    className={`w-32 h-32 rounded-3xl ${item.bgColor} flex items-center justify-center ${item.textColor} mx-auto relative z-10 group-hover:scale-105 transition-transform duration-300 shadow-sm`}
                  >
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shadow-lg z-20">
                    {item.step}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl px-8 py-6 shadow-lg border border-slate-100">
            <div className="flex items-center gap-2 text-foreground">
              <CalendarCheck className="w-5 h-5 text-sky-500" />
              <span className="text-sm font-medium">
                Ready to book a service?
              </span>
            </div>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-sky-200 transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call Now - It&apos;s Free!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
