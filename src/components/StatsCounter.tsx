"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Calendar, Wrench, ThumbsUp } from "lucide-react";

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    if (!startOnView || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(end);
          };
          animate();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, startOnView]);

  return { count, ref };
}

function CounterCard({
  value,
  suffix,
  label,
  icon,
  duration = 2000,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  duration?: number;
}) {
  const { count, ref } = useCountUp(value, duration);

  return (
    <div ref={ref} className="relative bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-sky-200">
        {icon}
      </div>
      <div className="pt-4">
        <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-1">
          {count.toLocaleString()}
          {suffix}
        </div>
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
      </div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Our Track Record Speaks for Itself
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Numbers that reflect our dedication, expertise, and commitment to
            delivering the best AC service experience in the city.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CounterCard value={5} suffix="+" label="Years of Experience" icon={<Calendar className="w-5 h-5" />} />
          <CounterCard value={1000} suffix="+" label="Happy Customers" icon={<ThumbsUp className="w-5 h-5" />} />
          <CounterCard value={1500} suffix="+" label="ACs Serviced" icon={<Wrench className="w-5 h-5" />} />
          <CounterCard value={98} suffix="%" label="Satisfaction Rate" icon={<Phone className="w-5 h-5" />} />
        </div>
      </div>
    </section>
  );
}
