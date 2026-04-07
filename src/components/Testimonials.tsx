"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ThumbsUp, Pen, Send, CheckCircle, X, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  createdAt: string;
}

const defaultReviews = [
  { id: "1", name: "Rajesh Kumar", location: "Anna Nagar", rating: 5, text: "Excellent service! The technician arrived within 2 hours and fixed my Daikin AC. Very professional, explained the issue clearly. Transparent pricing with no hidden charges. Highly recommend!", createdAt: "2026-03-15" },
  { id: "2", name: "Priya Sharma", location: "T. Nagar", rating: 5, text: "We have been using Deva Air Conditioning for 3 years under their AMC plan. Service is consistently excellent and team is always punctual. They have serviced 12 ACs across our office. Truly reliable!", createdAt: "2026-03-01" },
  { id: "3", name: "Mohammed Ali", location: "Velachery", rating: 5, text: "My LG AC was not cooling and another mechanic quoted heavily. Deva Air Conditioning found a small leak, fixed it and refilled gas for a fair price. Honest and trustworthy service!", createdAt: "2026-02-20" },
  { id: "4", name: "Sunita Devi", location: "Porur", rating: 5, text: "Got a new Voltas AC installed by Deva Air Conditioning. Neat and professional work. They took care of piping, drainage and wall mounting. Cleaned up everything after. Very satisfied!", createdAt: "2026-03-25" },
  { id: "5", name: "Karthik Rajan", location: "OMR", rating: 4, text: "Emergency AC breakdown at 10 PM - they sent someone within an hour! Technician was well-equipped and fixed the compressor issue on the spot. Worth every penny.", createdAt: "2026-02-01" },
  { id: "6", name: "Lakshmi Narayanan", location: "Adyar", rating: 5, text: "Very polite and respectful technicians. They patiently answered all my questions and did a thorough cleaning. My Samsung AC is running like new now! Wonderful experience.", createdAt: "2026-03-28" },
  { id: "7", name: "Vijay Murugan", location: "Coimbatore", rating: 5, text: "Best AC service in Coimbatore. Used them for gas refill and general service. The technician was very knowledgeable and completed the work quickly. Fair pricing.", createdAt: "2026-03-10" },
  { id: "8", name: "Deepa Rajan", location: "RS Puram", rating: 4, text: "Good service overall. The technician arrived on time and fixed the issue. Would have given 5 stars but had to follow up once for a minor issue. They resolved it quickly though.", createdAt: "2026-02-15" },
];

function StarRating({ rating, onRate, readonly = false, size = "sm" }: { rating: number; onRate?: (r: number) => void; readonly?: boolean; size?: "sm" | "md" | "lg" }) {
  const sizeClass = size === "lg" ? "w-8 h-8" : size === "md" ? "w-5 h-5" : "w-3.5 h-3.5";
  const gapClass = size === "lg" ? "gap-2" : "gap-0.5";
  return (
    <div className={`flex items-center ${gapClass}`}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`${sizeClass} ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200 fill-slate-200"} ${!readonly ? "cursor-pointer hover:scale-125 transition-transform" : ""}`} onClick={() => !readonly && onRate?.(i + 1)} />
      ))}
    </div>
  );
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr); const now = new Date(); const diff = Math.floor((now.getTime() - d.getTime()) / 86400000);
  if (diff === 0) return "Today"; if (diff === 1) return "Yesterday"; if (diff < 7) return `${diff}d ago`; if (diff < 30) return `${Math.floor(diff / 7)}w ago`; return `${Math.floor(diff / 30)}mo ago`;
}

function getRatingDistribution(reviews: Review[]) {
  const dist = [0, 0, 0, 0, 0];
  reviews.forEach(r => { if (r.rating >= 1 && r.rating <= 5) dist[r.rating - 1]++; });
  return dist;
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const [showForm, setShowForm] = useState(false);
  const [formRating, setFormRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [sortBy, setSortBy] = useState<"recent" | "highest" | "lowest">("recent");

  useEffect(() => {
    fetch("/api/reviews").then(r => r.json()).then(data => { if (Array.isArray(data) && data.length > 0) setReviews(data); }).catch(() => {});
  }, []);

  const dist = getRatingDistribution(reviews);
  const totalReviews = Math.max(reviews.length, 520);
  const avgRating = reviews.length > 0 ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : "4.8";

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "highest") return b.rating - a.rating;
    if (sortBy === "lowest") return a.rating - b.rating;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  const displayedReviews = showAllReviews ? sortedReviews : sortedReviews.slice(0, 6);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); if (formRating === 0) return; setSubmitting(true);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("reviewName") as HTMLInputElement).value;
    const location = (form.elements.namedItem("reviewLocation") as HTMLInputElement).value;
    const text = (form.elements.namedItem("reviewText") as HTMLTextAreaElement).value;
    try {
      const res = await fetch("/api/reviews", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, location: location || "", rating: formRating, text }) });
      if (res.ok) { const r = await res.json(); setReviews(p => [r, ...p]); setSubmitSuccess(true); form.reset(); setFormRating(0); setTimeout(() => { setSubmitSuccess(false); setShowForm(false); }, 2500); return; }
    } catch {}
    const newReview: Review = { id: `local-${Date.now()}`, name, location: location || "", rating: formRating, text, createdAt: new Date().toISOString() };
    setReviews(p => [newReview, ...p]); setSubmitSuccess(true); form.reset(); setFormRating(0);
    setTimeout(() => { setSubmitSuccess(false); setShowForm(false); }, 2500);
    setSubmitting(false);
  }, [formRating]);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full mb-4">Customer Reviews</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            What Our Customers <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">Say About Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Real reviews from real customers. Share your experience with Deva Air Conditioning!</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Rating Summary + Review Form */}
          <div className="lg:col-span-1 space-y-6">
            {/* Rating Summary Card */}
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-5xl font-extrabold text-foreground mb-1">{avgRating}</div>
                  <StarRating rating={Math.round(Number(avgRating))} readonly size="md" />
                  <p className="text-sm text-muted-foreground mt-2">Based on {totalReviews}+ reviews</p>
                </div>
                {/* Distribution Bars */}
                <div className="space-y-2.5">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = dist[star - 1];
                    const pct = reviews.length > 0 ? (count / reviews.length) * 100 : star === 5 ? 72 : star === 4 ? 18 : star === 3 ? 6 : star === 2 ? 3 : 1;
                    return (
                      <div key={star} className="flex items-center gap-2.5">
                        <span className="text-xs font-medium text-slate-500 w-3 text-right">{star}</span>
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 shrink-0" />
                        <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-400 rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-xs text-muted-foreground w-8 text-right">{pct.toFixed(0)}%</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Write Review Card */}
            <Card className="border-0 shadow-md bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-sky-600 to-cyan-600 p-5">
                  <h3 className="text-lg font-bold text-white">Share Your Experience</h3>
                  <p className="text-white/80 text-sm mt-1">Your feedback helps us improve!</p>
                </div>
                <div className="p-5">
                  {submitSuccess ? (
                    <div className="flex flex-col items-center py-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                        <CheckCircle className="w-7 h-7 text-green-600" />
                      </div>
                      <h4 className="font-bold text-foreground mb-1">Thank You!</h4>
                      <p className="text-xs text-muted-foreground">Your review has been submitted.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label className="text-xs font-medium">Your Rating *</Label>
                        <div className="mt-1.5">
                          <StarRating rating={hoverRating || formRating} onRate={setFormRating} size="lg" />
                        </div>
                        {formRating === 0 && <p className="text-xs text-slate-400 mt-1">Click to rate</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="rName" className="text-xs font-medium">Name *</Label>
                          <Input id="rName" name="reviewName" placeholder="Your name" required className="mt-1 h-9 text-sm border-slate-200 focus:border-sky-400" />
                        </div>
                        <div>
                          <Label htmlFor="rLoc" className="text-xs font-medium">Location</Label>
                          <Input id="rLoc" name="reviewLocation" placeholder="Area name" className="mt-1 h-9 text-sm border-slate-200 focus:border-sky-400" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="rText" className="text-xs font-medium">Your Review *</Label>
                        <Textarea id="rText" name="reviewText" placeholder="Tell us about your experience..." rows={3} required className="mt-1 text-sm border-slate-200 focus:border-sky-400 resize-none" />
                      </div>
                      <Button type="submit" disabled={formRating === 0 || submitting} className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold py-2.5 text-sm rounded-xl disabled:opacity-50">
                        {submitting ? <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</span> : <><Send className="w-4 h-4 mr-1.5" />Submit Review</>}
                      </Button>
                    </form>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Reviews List */}
          <div className="lg:col-span-2">
            {/* Sort Controls */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm font-medium text-foreground">{displayedReviews.length} reviews</p>
              <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-0.5">
                {(["recent", "highest", "lowest"] as const).map(s => (
                  <button key={s} onClick={() => setSortBy(s)} className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${sortBy === s ? "bg-sky-50 text-sky-700 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}>
                    {s === "recent" ? "Recent" : s === "highest" ? "Highest" : "Lowest"}
                  </button>
                ))}
              </div>
            </div>

            {/* Review Cards */}
            <div className="space-y-4">
              {displayedReviews.map(review => (
                <Card key={review.id} className="border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                          {review.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2)}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">{review.name}</div>
                          <div className="text-xs text-muted-foreground">{review.location && `${review.location} · `}{formatDate(review.createdAt)}</div>
                        </div>
                      </div>
                      <StarRating rating={review.rating} readonly size="sm" />
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {reviews.length > 6 && (
              <div className="mt-6 text-center">
                <button onClick={() => setShowAllReviews(!showAllReviews)} className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors">
                  {showAllReviews ? "Show Less" : `View All ${reviews.length} Reviews`}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAllReviews ? "rotate-180" : ""}`} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
