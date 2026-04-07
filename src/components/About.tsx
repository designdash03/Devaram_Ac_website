"use client";

import {
  Shield,
  Clock,
  Award,
  Users,
  CheckCircle,
  ThumbsUp,
  Wrench,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const trustFactors = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "15+ Years Experience",
    description:
      "We have been serving the community with top-notch AC repair and installation services since 2009. Our extensive experience means we have seen and solved every possible AC issue, from simple filter cleaning to complex compressor replacements.",
    color: "from-sky-500 to-cyan-500",
    bgColor: "bg-sky-50",
    textColor: "text-sky-600",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Certified & Insured",
    description:
      "All our technicians are fully certified and insured, giving you complete peace of mind. We undergo regular training to stay updated with the latest AC technologies and repair techniques from all major brands.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Same-Day Service",
    description:
      "AC broken in the middle of summer? We understand the urgency! Our team is ready to provide same-day repair service. Call us before noon and our technician will be at your doorstep within hours.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "5,000+ Happy Customers",
    description:
      "With over 5,000 satisfied customers across the city, we have built a reputation for reliability and quality service. Our customer retention rate is over 85%, which speaks volumes about our commitment to excellence.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    textColor: "text-violet-600",
  },
];

const whyChooseUs = [
  {
    icon: <ThumbsUp className="w-5 h-5" />,
    text: "No hidden charges — upfront pricing always",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    text: "Genuine spare parts with manufacturer warranty",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    text: "Quick diagnosis with advanced tools",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    text: "90-day service warranty on all repairs",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    text: "Background-verified, polite technicians",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    text: "24/7 emergency AC repair available",
  },
];

const brands = [
  "Daikin",
  "Voltas",
  "LG",
  "Samsung",
  "Blue Star",
  "Carrier",
  "Hitachi",
  "Panasonic",
  "Whirlpool",
  "Godrej",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Trusted AC Experts You{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Can Rely On
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Deva Air Conditioning has been the go-to AC service provider for thousands of
            homes and businesses. Our commitment to quality, transparency, and
            customer satisfaction sets us apart from the rest.
          </p>
        </div>

        {/* Trust Factor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustFactors.map((factor, index) => (
            <Card
              key={index}
              className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 rounded-2xl ${factor.bgColor} flex items-center justify-center ${factor.textColor} mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {factor.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {factor.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {factor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              What Makes Deva Air Conditioning Different?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We are not just another AC repair service. We are your long-term
              cooling partner. Our transparent approach means no surprise bills, no
              unnecessary repairs, and always honest advice. Whether it is a small
              fix or a full installation, we treat every job with the same level
              of professionalism and care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-sm text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brands We Serve */}
          <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-3xl p-8 border border-sky-100">
            <h4 className="text-lg font-bold text-foreground mb-2">
              All Major Brands Serviced
            </h4>
            <p className="text-sm text-muted-foreground mb-6">
              Our technicians are trained and certified to repair and install all
              leading AC brands available in the market.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="bg-white rounded-xl px-4 py-3 text-center text-sm font-medium text-foreground/70 shadow-sm border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
