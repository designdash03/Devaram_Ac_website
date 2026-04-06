import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coolairpro.com"),
  title: "CoolAir Pro - Professional AC Repair, Installation & Service | Fast & Reliable",
  description:
    "Expert AC repair, installation, gas refill, and maintenance services. 15+ years of trusted experience. Same-day service available. Call now for a free estimate!",
  keywords: [
    "AC repair near me",
    "air conditioning repair",
    "AC installation",
    "AC gas refill",
    "AC maintenance service",
    "AC mechanic",
    "split AC repair",
    "window AC repair",
    "AC service center",
    "HVAC repair",
    "air conditioner service",
    "AC annual maintenance",
    "emergency AC repair",
  ],
  authors: [{ name: "CoolAir Pro" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "CoolAir Pro - Professional AC Repair & Installation Services",
    description:
      "Expert AC repair, installation, gas refill, and maintenance services. 15+ years of trusted experience. Same-day service available!",
    type: "website",
    locale: "en_US",
    siteName: "CoolAir Pro",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1344,
        height: 768,
        alt: "Professional AC repair technician at work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoolAir Pro - Professional AC Repair & Installation Services",
    description:
      "Expert AC repair, installation, gas refill, and maintenance. Same-day service!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              name: "CoolAir Pro",
              description:
                "Professional AC repair, installation, and maintenance services",
              url: "https://coolairpro.com",
              telephone: "+91-98765-43210",
              email: "info@coolairpro.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123, Main Road, Anna Nagar",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600040",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "13.0827",
                longitude: "80.2707",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "08:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "520",
                bestRating: "5",
                worstRating: "1",
              },
              areaServed: [
                "Chennai",
                "Anna Nagar",
                "Velachery",
                "Tambaram",
                "Adyar",
                "OMR",
                "Porur",
                "Koyambedu",
              ],
              serviceType: [
                "AC Repair",
                "AC Installation",
                "AC Gas Refill",
                "AC Maintenance",
                "AMC Plans",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much does AC repair cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AC repair costs vary based on the issue. Basic repairs start from ₹500, while major repairs may range from ₹2,000 to ₹8,000. We provide free estimates before starting any work.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide same-day AC service?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We offer same-day AC repair service for most areas. Call us before 12 PM and we'll have a technician at your doorstep the same day.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What brands of AC do you service?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We service all major AC brands including Daikin, Voltas, LG, Samsung, Blue Star, Carrier, Hitachi, Panasonic, Whirlpool, and more.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer annual maintenance contracts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer comprehensive AMC plans starting from ₹1,999/year. This includes bi-annual servicing, priority support, and discounts on repairs.",
                  },
                },
              ],
            }),
          }}
        />
        <link rel="canonical" href="https://coolairpro.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
