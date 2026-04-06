"use client";

import { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    primary: "+91 98765 43210",
    secondary: "+91 98765 43211",
    action: "tel:+919876543210",
    actionText: "Call Now",
    color: "bg-sky-50",
    textColor: "text-sky-600",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp",
    primary: "+91 98765 43210",
    secondary: "Quick response guaranteed",
    action:
      "https://wa.me/919876543210?text=Hi%2C%20I%20need%20AC%20service%20at%20my%20place.%20Please%20share%20details.",
    actionText: "Chat Now",
    color: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    primary: "info@coolairpro.com",
    secondary: "quotes@coolairpro.com",
    action: "mailto:info@coolairpro.com",
    actionText: "Send Email",
    color: "bg-violet-50",
    textColor: "text-violet-600",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    primary: "Mon-Sat: 8 AM - 9 PM",
    secondary: "Sun: 9 AM - 6 PM",
    action: null,
    actionText: null,
    color: "bg-amber-50",
    textColor: "text-amber-600",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Get in Touch{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have an AC issue? Need a new installation? Or just want a free
            estimate? Reach out to us through any of the channels below. We
            respond within 30 minutes!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-5 text-center">
                <div
                  className={`w-12 h-12 rounded-2xl ${info.color} ${info.textColor} flex items-center justify-center mx-auto mb-4`}
                >
                  {info.icon}
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="text-sm font-medium text-foreground/80">
                  {info.primary}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {info.secondary}
                </p>
                {info.action && (
                  <a
                    href={info.action}
                    target={info.action.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.action.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-700 mt-3 transition-colors"
                  >
                    {info.actionText} →
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form + Map */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-sky-600 to-cyan-600 p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Send Us a Message
                </h3>
                <p className="text-white/80 text-sm">
                  Fill out the form and we will get back to you within 30 minutes.
                </p>
              </div>
              <div className="p-6 md:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We will contact you within 30 minutes. Thank you!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          required
                          className="border-slate-200 focus:border-sky-400 focus:ring-sky-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          required
                          className="border-slate-200 focus:border-sky-400 focus:ring-sky-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email (Optional)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="border-slate-200 focus:border-sky-400 focus:ring-sky-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium">
                        Service Required *
                      </Label>
                      <select
                        id="service"
                        required
                        className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:border-sky-400 focus:ring-sky-400 focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        <option value="repair">AC Repair</option>
                        <option value="installation">AC Installation</option>
                        <option value="gas-refill">Gas Refill</option>
                        <option value="maintenance">Regular Maintenance</option>
                        <option value="amc">AMC Plan</option>
                        <option value="emergency">Emergency Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Describe Your Issue
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="E.g., My AC is not cooling properly, making strange noise, etc."
                        rows={4}
                        className="border-slate-200 focus:border-sky-400 focus:ring-sky-400 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg shadow-lg shadow-sky-200 hover:shadow-sky-300 transition-all"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Map + Location */}
          <div className="flex flex-col gap-6">
            {/* Google Maps Embed */}
            <Card className="border-0 shadow-lg overflow-hidden flex-1">
              <CardContent className="p-0 h-full min-h-[300px] md:min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3087548020456!2d80.2680!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTYnMDQuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CoolAir Pro Location"
                />
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-sky-50 to-cyan-50">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">
                    Our Location
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    123, Main Road, Anna Nagar,
                    <br />
                    Chennai - 600040, Tamil Nadu, India
                  </p>
                  <a
                    href="https://maps.google.com/?q=Anna+Nagar+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-700 mt-2 transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
