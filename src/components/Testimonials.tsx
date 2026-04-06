"use client";

import { Star, Quote, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, Anna Nagar",
    rating: 5,
    text: "Excellent service! The technician arrived within 2 hours of my call and fixed my Daikin AC in no time. Very professional and explained the issue clearly before starting the repair. The pricing was fair and transparent — no hidden charges. Highly recommend CoolAir Pro!",
    date: "2 weeks ago",
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Business Owner, T. Nagar",
    rating: 5,
    text: "We have been using CoolAir Pro for our office AC maintenance for the past 3 years under their AMC plan. The service is consistently excellent, and their team is always punctual. They have serviced 12 ACs across our office and showroom. Truly reliable!",
    date: "1 month ago",
    avatar: "PS",
  },
  {
    name: "Mohammed Ali",
    role: "Resident, Velachery",
    rating: 5,
    text: "My LG split AC was not cooling properly and another mechanic quoted me ₹8,000 for gas refill. CoolAir Pro technician found a small leak, fixed it, and refilled gas for just ₹1,800. Honest and trustworthy service. They saved me a lot of money. Will use them again!",
    date: "3 weeks ago",
    avatar: "MA",
  },
  {
    name: "Sunita Devi",
    role: "Homeowner, Porur",
    rating: 5,
    text: "Got a new Voltas AC installed by CoolAir Pro team. The installation was neat and professional. They took care of the piping, drainage, and even helped me with wall mounting. The technician cleaned up everything after the job. Very satisfied!",
    date: "1 week ago",
    avatar: "SD",
  },
  {
    name: "Karthik Rajan",
    role: "IT Professional, OMR",
    rating: 4,
    text: "Called them for an emergency AC breakdown at 10 PM during summer. They sent someone within an hour! The technician was well-equipped and fixed the compressor issue on the spot. Slightly higher cost for emergency, but worth every penny given the situation.",
    date: "2 months ago",
    avatar: "KR",
  },
  {
    name: "Lakshmi Narayanan",
    role: "Senior Citizen, Adyar",
    rating: 5,
    text: "Very polite and respectful technicians. They patiently answered all my questions and did a thorough cleaning service. My Samsung AC is running like new now! They also gave me tips on how to maintain the AC between services. Wonderful experience overall.",
    date: "3 days ago",
    avatar: "LN",
  },
];

const stats = [
  { value: "4.8/5", label: "Average Rating" },
  { value: "520+", label: "Google Reviews" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "85%", label: "Repeat Customers" },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            What Our Customers{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Do not just take our word for it. Read what real customers have to say
            about their experience with CoolAir Pro. Our 4.8-star rating on
            Google speaks for itself.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-5 text-center border border-sky-100"
            >
              <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="group border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-sky-100 mb-4" />
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  {review.text}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {review.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {review.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-slate-50 rounded-full px-6 py-3 border border-slate-100">
            <ThumbsUp className="w-5 h-5 text-sky-600" />
            <span className="text-sm text-muted-foreground">
              Rated <strong className="text-foreground">4.8 out of 5</strong> on
              Google by 520+ customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
