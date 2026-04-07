"use client";

import { Snowflake, Phone, MessageCircle, MapPin, Mail, ArrowUp } from "lucide-react";

const footerLinks = {
  services: [
    "AC Repair",
    "AC Installation",
    "Gas Refill",
    "Regular Maintenance",
    "AMC Plans",
    "Emergency Service",
  ],
  areas: [
    "Anna Nagar",
    "Velachery",
    "Tambaram",
    "Adyar",
    "OMR",
    "Porur",
    "Koyambedu",
    "T. Nagar",
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Deva Air Conditioning</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Professional AC repair, installation, and maintenance services.
              Serving Chennai since 2009 with 5,000+ happy customers. Your comfort
              is our priority!
            </p>
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <a
                href="mailto:info@devaaairconditioning.com"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@devaaairconditioning.com
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="w-4 h-4" />
                Anna Nagar, Chennai
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {footerLinks.areas.map((area) => (
                <li key={area}>
                  <a
                    href="#contact"
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Contact
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              AC not working? Do not wait! Reach us instantly through phone or
              WhatsApp for fast, reliable service.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors w-full justify-center"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors w-full justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Deva Air Conditioning. All rights reserved. |
            Professional AC Repair & Installation Services in Chennai.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-500 flex items-center justify-center text-slate-400 hover:text-white transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
