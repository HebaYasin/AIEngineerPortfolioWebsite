import { motion } from 'framer-motion';
import { fadeInUp, viewportOnce } from '@/lib/animations';

interface SectionHeaderProps {
  overline: string;
  title: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  className?: string;
}

export function SectionHeader({
  overline,
  title,
  description,
  linkText,
  linkHref,
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`mb-10 sm:mb-14 ${className}`}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
        <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-primary">
          {overline}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter font-display">
            <span className="gradient-text-alt">{title}</span>
          </h2>
          {description && (
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {linkText && linkHref && (
          <a
            href={linkHref}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-neon-purple transition-colors shrink-0"
          >
            {linkText}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}
