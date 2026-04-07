"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, Shield, Clock, Award, Users, CheckCircle, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

/* Each media item can be an image or a video */
interface MediaItem {
  type: "image" | "video";
  src: string;
  poster?: string;
}

const services = [
  {
    media: [
      { type: "video", src: "/videos/ac-repair-1.mp4" },
      { type: "video", src: "/videos/ac-repair-2.mp4" },
      { type: "video", src: "/videos/ac-repair-3.mp4" },
    ],
    title: "AC Repair & Fix",
    subtitle: "All brands & models",
    features: ["Error diagnosis", "Compressor repair", "PCB fixing", "Sensor replacement"],
    badge: null,
  },
  {
    media: [
      { type: "video", src: "/videos/ac-install-1.mp4" },
      { type: "video", src: "/videos/ac-install-2.mp4" },
      { type: "video", src: "/videos/ac-install-3.mp4" },
    ],
    title: "AC Installation",
    subtitle: "Split, Window & Cassette",
    features: ["Professional setup", "Copper piping", "Drainage system", "Wall mounting"],
    badge: "Best Seller",
  },
  {
    media: [
      { type: "video", src: "/videos/gas-refill-1.mp4" },
      { type: "image", src: "/gas-refill-2.jpeg" },
      { type: "image", src: "/gas-refill-3.jpeg" },
    ],
    title: "Gas Refill & Leak Fix",
    subtitle: "R32, R410A, R22",
    features: ["Leak detection", "Pressure testing", "Exact gas filling", "Warranty included"],
    badge: null,
  },
  {
    media: [
      { type: "video", src: "/videos/ac-clean-1.mp4" },
      { type: "video", src: "/videos/ac-clean-2.mp4" },
      { type: "video", src: "/videos/ac-clean-3.mp4" },
    ],
    title: "Deep Cleaning & Service",
    subtitle: "Complete AC maintenance",
    features: ["Filter cleaning", "Coil washing", "Drain cleaning", "Performance check"],
    badge: "Popular",
  },
];

/* ────────────── Media Carousel ────────────── */
function ServiceMediaCarousel({
  media,
  title,
}: {
  media: MediaItem[];
  title: string;
}) {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const totalItems = media.length;
  const currentItem = media[current];
  const isVideo = currentItem?.type === "video";

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalItems);
    setVideoProgress(0);
    setIsVideoPlaying(false);
  }, [totalItems]);

  const goPrev = () => {
    setCurrent((c) => (c - 1 + totalItems) % totalItems);
    setVideoProgress(0);
    setIsVideoPlaying(false);
  };

  const goTo = (idx: number) => {
    setCurrent(idx);
    setVideoProgress(0);
    setIsVideoPlaying(false);
  };

  // Auto-rotate when NOT hovering
  useEffect(() => {
    if (isHovering || isVideoPlaying) return;
    const timer = setInterval(goNext, isVideo ? 5000 : 3000);
    return () => clearInterval(timer);
  }, [isHovering, isVideoPlaying, isVideo, goNext]);

  // When switching to a video, reset it
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !isVideo) {
      setIsVideoPlaying(false);
      return;
    }
    // Reset video to start
    vid.currentTime = 0;
    vid.pause();
    setIsVideoPlaying(false);
  }, [current, isVideo]);

  // Listen to video events
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !isVideo) return;

    const onPlay = () => setIsVideoPlaying(true);
    const onPause = () => setIsVideoPlaying(false);
    const onEnded = () => {
      setIsVideoPlaying(false);
      goNext();
    };
    const onTimeUpdate = () => {
      if (vid.duration) {
        setVideoProgress((vid.currentTime / vid.duration) * 100);
      }
    };

    vid.addEventListener("play", onPlay);
    vid.addEventListener("pause", onPause);
    vid.addEventListener("ended", onEnded);
    vid.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      vid.removeEventListener("play", onPlay);
      vid.removeEventListener("pause", onPause);
      vid.removeEventListener("ended", onEnded);
      vid.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [isVideo, current, goNext]);

  // Play button — plays with audio or muted
  const togglePlayPause = () => {
    const vid = videoRef.current;
    if (!vid || !isVideo) return;
    if (vid.paused) {
      vid.muted = isMuted;
      vid.play().catch(() => {});
    } else {
      vid.pause();
    }
  };

  // Mute / Unmute
  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid || !isVideo) return;
    const newMuted = !isMuted;
    vid.muted = newMuted;
    setIsMuted(newMuted);
    // If video was playing, it continues with new mute state
    // If video was paused, play it with audio
    if (vid.paused) {
      vid.play().catch(() => {});
    }
  };

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden bg-slate-900"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Media Stack */}
      {media.map((item, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === current ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
        >
          {item.type === "video" ? (
            <video
              ref={idx === current ? videoRef : undefined}
              src={item.src}
              poster={item.poster}
              className="w-full h-full object-cover"
              muted={isMuted}
              playsInline
              loop
              preload="metadata"
            />
          ) : (
            <img
              src={item.src}
              alt={`${title} - photo ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}

      {/* Video Controls */}
      {isVideo && (
        <>
          {/* Dark overlay when paused (not playing) */}
          {!isVideoPlaying && (
            <div className="absolute inset-0 bg-black/20 z-[6]" />
          )}

          <div className="absolute inset-0 z-[8] flex items-center justify-center pointer-events-none">
            {/* Play/Pause Button (center) */}
            <button
              onClick={togglePlayPause}
              className="pointer-events-auto w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110"
              aria-label={isVideoPlaying ? "Pause video" : "Play video"}
            >
              {isVideoPlaying ? (
                <Pause className="w-6 h-6 text-slate-800" />
              ) : (
                <Play className="w-7 h-7 text-slate-800 ml-1" />
              )}
            </button>

            {/* Mute Button (top-right) */}
            <button
              onClick={toggleMute}
              className="pointer-events-auto absolute top-2 right-2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            {/* Video Progress Bar */}
            <div className="absolute bottom-8 left-3 right-3">
              <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sky-400 rounded-full transition-all duration-300"
                  style={{ width: `${videoProgress}%` }}
                />
              </div>
            </div>

            {/* "VIDEO" badge */}
            <span className="absolute top-2 left-2 flex items-center gap-1 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
              <Play className="w-2.5 h-2.5" />
              Video
            </span>
          </div>
        </>
      )}

      {/* Photo indicator */}
      {!isVideo && media[current]?.type === "image" && (
        <span className="absolute top-2 left-2 z-[8] flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
          Photo
        </span>
      )}

      {/* Left / Right Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 shadow hover:bg-white transition-all z-[10] opacity-0 hover:opacity-100"
        style={{ opacity: isHovering ? 1 : 0 }}
        aria-label="Previous"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 shadow hover:bg-white transition-all z-[10] opacity-0 hover:opacity-100"
        style={{ opacity: isHovering ? 1 : 0 }}
        aria-label="Next"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-[10]">
        {media.map((item, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-300 flex items-center justify-center ${
              idx === current
                ? "w-5 h-2 bg-white"
                : item.type === "video"
                  ? "w-2 h-2 bg-white/60 hover:bg-white/90 border border-white/40"
                  : "w-2 h-2 bg-white/60 hover:bg-white/90"
            }`}
            aria-label={`Go to ${item.type} ${idx + 1}`}
          >
            {item.type === "video" && idx !== current && (
              <Play className="w-1.5 h-1.5 text-white/80" />
            )}
          </button>
        ))}
      </div>

      {/* Bottom gradient + title overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-3 left-3 right-3 z-[5] pointer-events-none">
        <h3 className="text-white font-bold text-base drop-shadow-md">
          {title}
        </h3>
      </div>
    </div>
  );
}

/* ────────────── Main Component ────────────── */
export default function FeaturedServices() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <ServiceMediaCarousel
                media={service.media}
                title={service.title}
              />

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

        {/* Trust Indicators Row */}
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
