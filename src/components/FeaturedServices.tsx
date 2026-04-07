"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, Shield, Clock, Award, Users, CheckCircle, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  src: string;
}

const services = [
  {
    media: [
      { type: "video" as const, src: "/videos/ac-repair-1.mp4" },
      { type: "video" as const, src: "/videos/ac-repair-2.mp4" },
      { type: "video" as const, src: "/videos/ac-repair-3.mp4" },
    ],
    title: "AC Repair & Fix",
    subtitle: "All brands & models",
    features: ["Error diagnosis", "Compressor repair", "PCB fixing", "Sensor replacement"],
    badge: null,
  },
  {
    media: [
      { type: "video" as const, src: "/videos/ac-install-1.mp4" },
      { type: "video" as const, src: "/videos/ac-install-2.mp4" },
      { type: "video" as const, src: "/videos/ac-install-3.mp4" },
    ],
    title: "AC Installation",
    subtitle: "Split, Window & Cassette",
    features: ["Professional setup", "Copper piping", "Drainage system", "Wall mounting"],
    badge: "Best Seller",
  },
  {
    media: [
      { type: "video" as const, src: "/videos/gas-refill-1.mp4" },
      { type: "image" as const, src: "/gas-refill-2.jpeg" },
      { type: "image" as const, src: "/gas-refill-3.jpeg" },
    ],
    title: "Gas Refill & Leak Fix",
    subtitle: "R32, R410A, R22",
    features: ["Leak detection", "Pressure testing", "Exact gas filling", "Warranty included"],
    badge: null,
  },
  {
    media: [
      { type: "video" as const, src: "/videos/ac-clean-1.mp4" },
      { type: "video" as const, src: "/videos/ac-clean-2.mp4" },
      { type: "video" as const, src: "/videos/ac-clean-3.mp4" },
    ],
    title: "Deep Cleaning & Service",
    subtitle: "Complete AC maintenance",
    features: ["Filter cleaning", "Coil washing", "Drain cleaning", "Performance check"],
    badge: "Popular",
  },
];

/* ────────────── Media Carousel ────────────── */
function ServiceMediaCarousel({ media, title }: { media: MediaItem[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = media.length;
  const item = media[current];
  const isVideo = item?.type === "video";

  const goNext = useCallback(() => {
    stopCurrentVideo();
    setCurrent((p) => (p + 1) % total);
    setProgress(0);
    setIsLoaded(false);
  }, [total]);

  const goPrev = () => {
    stopCurrentVideo();
    setCurrent((c) => (c - 1 + total) % total);
    setProgress(0);
    setIsLoaded(false);
  };

  const goTo = (idx: number) => {
    stopCurrentVideo();
    setCurrent(idx);
    setProgress(0);
    setIsLoaded(false);
  };

  const stopCurrentVideo = () => {
    const vid = videoRef.current;
    if (vid) {
      vid.pause();
      vid.currentTime = 0;
    }
    setIsPlaying(false);
  };

  // Auto-rotate
  useEffect(() => {
    if (isHovering || isPlaying) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [isHovering, isPlaying, goNext]);

  // When current changes, reset video
  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.pause();
      vid.currentTime = 0;
      vid.muted = true;
      setIsPlaying(false);
      setProgress(0);
    }
  }, [current]);

  const handlePlay = () => {
    const vid = videoRef.current;
    if (!vid || !isVideo) return;
    if (vid.paused) {
      vid.muted = isMuted;
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const handleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    const newMuted = !isMuted;
    vid.muted = newMuted;
    setIsMuted(newMuted);
    // If video is paused, auto-play with sound
    if (vid.paused && newMuted === false) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    goNext();
  };

  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (vid && vid.duration) {
      setProgress((vid.currentTime / vid.duration) * 100);
    }
  };

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[9/16] sm:aspect-[4/3] overflow-hidden bg-slate-900 rounded-t-2xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Current Media - render ONLY the active one */}
      <div className="absolute inset-0 z-[1]">
        {isVideo ? (
          <video
            ref={videoRef}
            src={item.src}
            className="w-full h-full object-cover"
            playsInline
            loop
            preload="auto"
            muted={isMuted}
            onEnded={handleVideoEnd}
            onTimeUpdate={handleTimeUpdate}
            onLoadedData={handleLoadedData}
            onCanPlay={() => setIsLoaded(true)}
          />
        ) : (
          <img
            src={item.src}
            alt={`${title} - photo ${current + 1}`}
            className="w-full h-full object-cover"
            onLoad={() => setIsLoaded(true)}
          />
        )}
      </div>

      {/* Loading spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 z-[5] flex items-center justify-center bg-slate-900">
          <div className="w-8 h-8 border-3 border-white/30 border-t-sky-400 rounded-full animate-spin" />
        </div>
      )}

      {/* Video Controls - only show for videos */}
      {isVideo && isLoaded && (
        <div className="absolute inset-0 z-[8]">
          {/* Overlay when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/25" />
          )}

          {/* Play/Pause - center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handlePlay}
              className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all"
              type="button"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-slate-800" />
              ) : (
                <Play className="w-7 h-7 text-slate-800 ml-1" />
              )}
            </button>
          </div>

          {/* Mute button - top right */}
          <button
            onClick={handleMute}
            className="absolute top-2 right-2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            type="button"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="w-full h-1 bg-white/30">
              <div
                className="h-full bg-sky-400 transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* VIDEO badge */}
          <span className="absolute top-2 left-2 flex items-center gap-1 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
            <Play className="w-2.5 h-2.5" />
            Video
          </span>
        </div>
      )}

      {/* Photo badge */}
      {!isVideo && isLoaded && (
        <span className="absolute top-2 left-2 z-[8] flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
          Photo
        </span>
      )}

      {/* Navigation arrows */}
      {isHovering && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-[10] w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 shadow hover:bg-white transition-all"
            type="button"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-[10] w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 shadow hover:bg-white transition-all"
            type="button"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-[10]">
        {media.map((m, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-300 flex items-center justify-center ${
              idx === current
                ? "w-5 h-2 bg-white"
                : m.type === "video"
                  ? "w-2 h-2 bg-white/60 hover:bg-white/90 border border-white/40"
                  : "w-2 h-2 bg-white/60 hover:bg-white/90"
            }`}
            type="button"
          >
            {m.type === "video" && idx !== current && (
              <Play className="w-1.5 h-1.5 text-white/80" />
            )}
          </button>
        ))}
      </div>

      {/* Bottom gradient + title */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-3 left-3 z-[5] pointer-events-none">
        <h3 className="text-white font-bold text-sm drop-shadow-md">{title}</h3>
      </div>
    </div>
  );
}

/* ────────────── Main Component ────────────── */
export default function FeaturedServices() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-block text-sm font-semibold text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full mb-4">
              Popular Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
              Most Booked Services
            </h2>
          </div>
          <a
            href="#services"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <ServiceMediaCarousel media={service.media} title={service.title} />

              {service.badge && (
                <div className="relative -mt-1 z-10 ml-3">
                  <span className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full -translate-y-1/2 inline-block shadow">
                    {service.badge}
                  </span>
                </div>
              )}

              <div className="p-4">
                <p className="text-xs text-slate-500 font-medium mb-2">{service.subtitle}</p>
                <div className="space-y-1.5 mb-4">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="tel:+917200979643"
                  className="flex items-center justify-center gap-1 w-full bg-sky-50 hover:bg-sky-100 text-sky-700 text-sm font-semibold py-2.5 rounded-xl transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Shield className="w-5 h-5" />, text: "Verified Professionals" },
            { icon: <Clock className="w-5 h-5" />, text: "On-Time Guarantee" },
            { icon: <Award className="w-5 h-5" />, text: "Quality Assured" },
            { icon: <Users className="w-5 h-5" />, text: "1,000+ Happy Customers" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
              <div className="text-sky-600 shrink-0">{item.icon}</div>
              <span className="text-sm font-medium text-slate-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
