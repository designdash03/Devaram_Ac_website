"use client";

import {
  Wrench,
  Snowflake,
  Droplets,
  Settings,
  ShieldCheck,
  Zap,
  Thermometer,
  Wind,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "AC Repair & Troubleshooting",
    description:
      "Comprehensive AC repair services for all types of air conditioners. Whether your AC is not cooling, making unusual noises, leaking water, or showing error codes, our expert technicians can quickly diagnose and fix the problem. We handle everything from minor sensor replacements to major compressor repairs.",
    features: [
      "All brands & models",
      "Error code diagnostics",
      "Compressor repair",
      "PCB board fixing",
    ],
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-50",
    textColor: "text-sky-600",
    popular: false,
  },
  {
    icon: <Snowflake className="w-7 h-7" />,
    title: "AC Installation",
    description:
      "Professional AC installation services for split ACs, window ACs, and cassette units. Our certified technicians ensure perfect installation with proper piping, insulation, and drainage setup. We also provide guidance on choosing the right AC capacity for your room size and usage requirements.",
    features: [
      "Split & window AC",
      "Indoor & outdoor setup",
      "Copper piping",
      "Proper drainage setup",
    ],
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    popular: true,
  },
  {
    icon: <Droplets className="w-7 h-7" />,
    title: "Gas Refill & Leak Fix",
    description:
      "Complete gas refill and refrigerant leak detection services. Low gas levels can reduce cooling efficiency and increase electricity bills. We use advanced leak detection tools to find and fix leaks, then refill with the correct type and amount of refrigerant specified by the manufacturer.",
    features: [
      "R32, R410A, R22 gas",
      "Leak detection & fix",
      "Pressure testing",
      "Exact gas filling",
    ],
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    popular: false,
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: "Regular Maintenance",
    description:
      "Keep your AC running at peak efficiency with our regular maintenance service. Includes thorough cleaning of filters, coils, and drainage system. Regular maintenance extends AC lifespan by up to 40% and reduces electricity consumption significantly.",
    features: [
      "Filter cleaning",
      "Coil washing",
      "Drain cleaning",
      "Performance check",
    ],
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    popular: false,
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "AMC Plans",
    description:
      "Annual Maintenance Contract plans that give you peace of mind throughout the year. Choose from our Basic, Standard, or Premium plans. All plans include scheduled servicing, priority support, discounted repairs, and extended warranty coverage for your AC system.",
    features: [
      "2-4 services per year",
      "Priority booking",
      "Discounted repairs",
      "Extended warranty",
    ],
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    textColor: "text-violet-600",
    popular: true,
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Emergency AC Service",
    description:
      "AC broke down at midnight or on a holiday? Do not sweat! Our emergency AC repair service is available 24/7, 365 days a year. Our rapid response team will reach your location within 60 minutes to get your AC up and running again as quickly as possible.",
    features: [
      "24/7 availability",
      "60-min response time",
      "Holiday service",
      "Express repair",
    ],
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    popular: false,
  },
];

const additionalServices = [
  {
    icon: <Thermometer className="w-5 h-5" />,
    text: "Thermostat Replacement & Calibration",
  },
  {
    icon: <Wind className="w-5 h-5" />,
    text: "Duct Cleaning & Sanitization",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    text: "AC Uninstallation & Relocation",
  },
  {
    icon: <Snowflake className="w-5 h-5" />,
    text: "VRF / Central AC System Service",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Complete AC Solutions{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Under One Roof
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From quick repairs to full installations, we offer a comprehensive
            range of AC services tailored to your needs. Every service comes with
            our quality guarantee and honest transparent approach.
          </p>
        </div>

        {/* Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                service.popular ? "ring-2 ring-sky-400" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-none rounded-bl-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white border-0 px-3 py-1 text-xs">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardContent className="p-6 pt-7">
                <div
                  className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center ${service.textColor} mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 mb-5">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-foreground/70"
                    >
                      <CheckCircle className="w-4 h-4 text-sky-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="tel:+918072213475"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group/link"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-sky-600 to-cyan-600 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Need Something More?
              </h3>
              <p className="text-white/80 mb-6 max-w-xl">
                We also provide specialized services like thermostat calibration,
                duct cleaning, AC relocation, and central AC system maintenance.
                Contact us for custom requirements!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {additionalServices.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-white/90 text-sm"
                  >
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="tel:+918072213475"
              className="inline-flex items-center justify-center gap-2 bg-white text-sky-700 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 shrink-0"
            >
              <Phone className="w-5 h-5" />
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
