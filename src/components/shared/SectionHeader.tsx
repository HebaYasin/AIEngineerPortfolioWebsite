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
      className={`mb-10 sm:mb-12 ${className}`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">
        {overline}
      </p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
              {description}
            </p>
          )}
        </div>
        {linkText && linkHref && (
          <a
            href={linkHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            {linkText}
            <svg
              className="w-4 h-4"
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
