import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { stats } from '@/data/stats';
import { Separator } from '@/components/ui/separator';

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-bold text-primary tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section aria-label="Key statistics" className="relative bg-[hsl(220,18%,6%)]">
      <Separator className="bg-border/30" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center"
              aria-label={`${stat.value} ${stat.label}`}
            >
              <AnimatedNumber value={stat.numericValue} suffix={stat.suffix} />
              <span className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Separator className="bg-border/30" />
    </section>
  );
}
