import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { stats } from '@/data/stats';
import { Separator } from '@/components/ui/separator';

const statColors = [
  'from-neon-green/20 to-neon-green/5 border-neon-green/20',
  'from-neon-purple/20 to-neon-purple/5 border-neon-purple/20',
  'from-neon-blue/20 to-neon-blue/5 border-neon-blue/20',
  'from-neon-pink/20 to-neon-pink/5 border-neon-pink/20',
  'from-neon-yellow/20 to-neon-yellow/5 border-neon-yellow/20',
];

const numberColors = [
  'text-neon-green',
  'text-neon-purple',
  'text-neon-blue',
  'text-neon-pink',
  'text-neon-yellow',
];

function AnimatedNumber({ value, suffix, colorClass }: { value: number; suffix: string; colorClass: string }) {
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
    <span ref={ref} className={`text-3xl sm:text-4xl lg:text-5xl font-bold tabular-nums font-display ${colorClass}`}>
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section aria-label="Key statistics" className="relative py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${statColors[i % statColors.length]} border p-5 sm:p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105`}
              aria-label={`${stat.value} ${stat.label}`}
            >
              <AnimatedNumber value={stat.numericValue} suffix={stat.suffix} colorClass={numberColors[i % numberColors.length]} />
              <span className="mt-2 text-[0.7rem] sm:text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Separator className="mt-14 sm:mt-20 bg-border/20" />
    </section>
  );
}
