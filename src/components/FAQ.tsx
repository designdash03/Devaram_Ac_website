"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Phone } from "lucide-react";

const faqs = [
  {
    question: "How quickly can you send a technician?",
    answer:
      "We offer same-day service for most locations! If you call us before 12 PM, our technician will be at your doorstep the same day. For emergency calls, we can reach you within 60 minutes, 24/7. Our large team of certified technicians ensures quick response times across all service areas including Anna Nagar, Velachery, T. Nagar, Porur, OMR, and surrounding areas.",
  },
  {
    question: "Do you provide service warranty?",
    answer:
      "Absolutely! Every repair service from CoolAir Pro comes with a 90-day service warranty. If the same issue recurs within the warranty period, we will fix it free of charge. For AMC plan customers, the warranty is extended for the entire contract duration. We use only genuine spare parts that carry their own manufacturer warranty, giving you double protection.",
  },
  {
    question: "What brands of AC do you service?",
    answer:
      "We service all major AC brands available in the Indian market including Daikin, Voltas, LG, Samsung, Blue Star, Carrier, Hitachi, Panasonic, Whirlpool, Godrej, TCL, Midea, and many more. Our technicians undergo regular brand-specific training to stay updated with the latest models and technologies. Whether it is a split AC, window AC, cassette unit, or central AC system, we handle them all.",
  },
  {
    question: "How often should I service my AC?",
    answer:
      "We recommend getting your AC serviced at least twice a year — once before summer (March-April) and once after heavy usage (September-October). Regular maintenance not only keeps your AC running at peak efficiency but also extends its lifespan by up to 40%, reduces electricity bills by 15-25%, and prevents costly breakdowns during peak season.",
  },
  {
    question: "What are the signs that my AC needs repair?",
    answer:
      "Look out for these common signs: reduced cooling performance, unusual noises (grinding, squealing, rattling), water leaking from the indoor unit, unpleasant odors when the AC is running, frequent on-off cycling, ice formation on the coils, or error codes on the display. If you notice any of these signs, call us immediately — early diagnosis can prevent costly compressor damage.",
  },
  {
    question: "Do you offer annual maintenance contracts (AMC)?",
    answer:
      "Yes! We offer flexible AMC plans tailored to your needs. Our plans include bi-annual or quarterly servicing, priority booking, discounted repair rates, extended warranty, and free diagnostics. AMC customers also get priority during peak summer season when demand is highest. Contact us for a customized AMC quote based on the number and type of ACs you have.",
  },
  {
    question: "Are your technicians certified and background-verified?",
    answer:
      "Yes, all CoolAir Pro technicians are certified professionals with a minimum of 3 years of experience. Every technician undergoes a thorough background verification process before joining our team. They also receive ongoing training on the latest AC technologies and repair techniques. Our team is known for being polite, punctual, and respectful of your home and property.",
  },
  {
    question: "Do you provide estimates before starting work?",
    answer:
      "Absolutely! We believe in complete transparency. Our technician will diagnose the issue, explain the problem clearly, and provide a detailed estimate before starting any repair work. There are no hidden charges or surprise bills. You will know exactly what you are paying for and why. If you are not satisfied with the estimate, there is absolutely no obligation to proceed.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Got questions? We have answers. Find everything you need to know
            about our AC services below. Can not find what you are looking for?
            Feel free to call us!
          </p>
        </div>

        {/* Accordion */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-4 sm:p-8 border border-slate-100 shadow-sm">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-slate-100 px-4 sm:px-6 shadow-sm data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-sky-600 hover:no-underline py-4 sm:py-5">
                  <div className="flex items-start gap-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 sm:pb-5 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? Our team is happy to help!
          </p>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-sky-200 transition-all hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
