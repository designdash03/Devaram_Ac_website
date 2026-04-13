"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, Shield, Clock, Award, Users, CheckCircle, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Snowflake, Wrench, Wind, Droplets, ImageOff, VideoOff } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  src: string;
}

const placeholderColors = [
  "linear-gradient(135deg, #0ea5e9, #0284c7, #0369a1)",
  "linear-gradient(135deg, #06b6d4, #0891b2, #0e7490)",
  "linear-gradient(135deg, #38bdf8, #0ea5e9, #0284c7)",
  "linear-gradient(135deg, #7dd3fc, #38bdf8, #0ea5e9)",
];

const placeholderIcons = [<Snowflake key="s" />, <Wrench key="w" />, <Wind key="d" />, <Droplets key="dp" />];

const services: { media: MediaItem[]; title: string; subtitle: string; features: string[]; badge: string | null }[] = [
  {
    media: [
      { type: "video", src: "/Images/Ac-Service-Video-1.mp4" },
      { type: "video", src: "/Images/Ac-Service-Video-2.mp4" },
      { type: "video", src: "/Images/Ac-Service-Video-3.mp4" },
    ],
    title: "AC Repair & Fix",
    subtitle: "All brands & models",
    features: ["Error diagnosis", "Compressor repair", "PCB fixing", "Sensor replacement"],
    badge: null,
  },
  {
    media: [
      { type: "video", src: "/Images/Ac-Installation-video-1.mp4" },
      { type: "video", src: "/Images/Ac-Installation-video-2.mp4" },
      { type: "video", src: "/Images/Ac-Installation-video-3.mp4" },
    ],
    title: "AC Installation",
    subtitle: "Split, Window ",
    features: ["Professional setup", "Copper piping", "Drainage system", "Wall mounting"],
    badge: null,
  },
  {
    media: [
      { type: "image", src: "/Images/Ac-Gas-filling-image-2.jpeg" },
      { type: "video", src: "/Images/Ac-Gas-filling-video-1.mp4" },
      { type: "video", src: "/Images/Ac-Gas-filling-video-2.mp4" },
    ],
    title: "Gas Refill & Leak Fix",
    subtitle: "R32, R410A, R22",
    features: ["Leak detection", "Pressure testing", "Exact gas filling", "Warranty included"],
    badge: null,
  },
  {
    media: [
      { type: "video", src: "/Images/Ac-Cleaning-video-1.mp4" },
      { type: "video", src: "/Images/Ac-Cleaning-video-2.mp4" },
      { type: "image", src: "/Images/Ac-Cleaning-image-1.mp4" },
    ],
    title: "Deep Cleaning & Service",
    subtitle: "Complete AC maintenance",
    features: ["Filter cleaning", "Coil washing", "Drain cleaning", "Performance check"],
    badge: null,
  },
];

function Placeholder({ serviceIndex }: { serviceIndex: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: placeholderColors[serviceIndex],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      }}
    >
      <div style={{ opacity: 0.3 }}>
        {placeholderIcons[serviceIndex] && (
          <svg width={64} height={64} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
            {serviceIndex === 0 && <><path d="M2 12h20M12 2v20M20 16l-4-4 4-4M4 8l4 4-4 4M20 8l-4 4M4 16l4-4" /></>}
            {serviceIndex === 1 && <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></>}
            {serviceIndex === 2 && <><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2" /></>}
            {serviceIndex === 3 && <><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></>}
          </svg>
        )}
      </div>
      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 600, textAlign: "center", padding: "0 20px" }}>
        {services[serviceIndex]?.title}
      </div>
      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
        <VideoOff style={{ width: 12, height: 12 }} />
        Media not found
      </div>
    </div>
  );
}

function ServiceMediaCarousel({ media, title, serviceIndex }: { media: MediaItem[]; title: string; serviceIndex: number }) {
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mediaError, setMediaError] = useState<boolean[]>(media.map(() => false));

  const videoEl = useRef<HTMLVideoElement>(null);

  const isVideo = media[current].type === "video";
  const total = media.length;
  const currentError = mediaError[current] || false;

  const nextSlide = useCallback(() => {
    pauseVideo();
    setCurrent((p) => (p + 1) % total);
    setProgress(0);
  }, [total]);

  const prevSlide = () => {
    pauseVideo();
    setCurrent((c) => (c - 1 + total) % total);
    setProgress(0);
  };

  const goToSlide = (idx: number) => {
    pauseVideo();
    setCurrent(idx);
    setProgress(0);
  };

  const pauseVideo = () => {
    if (videoEl.current) {
      videoEl.current.pause();
      videoEl.current.currentTime = 0;
    }
    setPlaying(false);
  };

  useEffect(() => {
    if (hovering || playing) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [hovering, playing, nextSlide]);

  useEffect(() => {
    setPlaying(false);
    setProgress(0);
    if (videoEl.current) {
      videoEl.current.currentTime = 0;
    }
  }, [current]);

  const togglePlay = () => {
    const v = videoEl.current;
    if (!v) return;
    if (v.paused) {
      v.muted = muted;
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoEl.current;
    if (!v) return;
    const newMuted = !muted;
    v.muted = newMuted;
    setMuted(newMuted);
    if (v.paused && !newMuted) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const handleMediaError = (idx: number) => {
    setMediaError((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  return (
    <div
      style={{ position: "relative", width: "100%", aspectRatio: "9/16" }}
      className="overflow-hidden bg-black sm:!aspect-[4/3] rounded-t-2xl"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Show placeholder if file is missing, otherwise show media */}
      {currentError ? (
        <Placeholder serviceIndex={serviceIndex} />
      ) : isVideo ? (
        <video
          ref={videoEl}
          src={media[current].src}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          playsInline
          loop
          preload="metadata"
          muted={muted}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={nextSlide}
          onError={() => handleMediaError(current)}
          onTimeUpdate={() => {
            const v = videoEl.current;
            if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
          }}
        />
      ) : (
        <img
          src={media[current].src}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={() => handleMediaError(current)}
        />
      )}

      {/* Dark overlay when video is paused (only if file loaded) */}
      {isVideo && !playing && !currentError && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 5,
          }}
        />
      )}

      {/* Video Controls (only if file loaded) */}
      {isVideo && !currentError && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={togglePlay}
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.9)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            }}
            type="button"
          >
            {playing ? (
              <Pause style={{ width: 24, height: 24, color: "#1e293b" }} />
            ) : (
              <Play style={{ width: 28, height: 28, color: "#1e293b", marginLeft: 4 }} />
            )}
          </button>

          <button
            onClick={toggleMute}
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(4px)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
            type="button"
          >
            {muted ? (
              <VolumeX style={{ width: 16, height: 16 }} />
            ) : (
              <Volume2 style={{ width: 16, height: 16 }} />
            )}
          </button>

          <div
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              display: "flex",
              alignItems: "center",
              gap: 4,
              backgroundColor: "rgba(239,68,68,0.9)",
              color: "white",
              fontSize: 10,
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: 6,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <Play style={{ width: 10, height: 10 }} />
            Video
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 4,
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
          >
            <div
              style={{
                height: "100%",
                backgroundColor: "#38bdf8",
                width: `${progress}%`,
                transition: "width 0.2s",
              }}
            />
          </div>
        </div>
      )}

      {/* Photo Badge (only if file loaded) */}
      {!isVideo && !currentError && (
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            zIndex: 10,
            backgroundColor: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(4px)",
            color: "white",
            fontSize: 10,
            fontWeight: 700,
            padding: "2px 8px",
            borderRadius: 6,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Photo
        </div>
      )}

      {/* Arrow Buttons */}
      {hovering && (
        <>
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 20,
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(4px)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#334155",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
            type="button"
          >
            <ChevronLeft style={{ width: 18, height: 18 }} />
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 20,
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(4px)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#334155",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
            type="button"
          >
            <ChevronRight style={{ width: 18, height: 18 }} />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          gap: 6,
        }}
      >
        {media.map((m, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            type="button"
            style={{
              width: idx === current ? 20 : 8,
              height: 8,
              borderRadius: 4,
              border: m.type === "video" && idx !== current ? "1px solid rgba(255,255,255,0.4)" : "none",
              backgroundColor: idx === current ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>

      {/* Bottom gradient + Title */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
          zIndex: 6,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: 12,
          zIndex: 15,
          pointerEvents: "none",
        }}
      >
        <h3 style={{ color: "white", fontWeight: 700, fontSize: 14, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
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
              <ServiceMediaCarousel media={service.media} title={service.title} serviceIndex={index} />

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
{/* 
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
        </div> */}
      </div>
    </section>
  );
}
