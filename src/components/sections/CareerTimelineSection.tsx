import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight, viewportMargin } from '@/lib/animations';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { experience, type ExperienceType } from '@/data/experience';
import { CheckCircle2 } from 'lucide-react';

const typeBadge: Record<ExperienceType, string> = {
  fulltime: 'bg-[hsl(215,40%,15%)] text-[hsl(215,60%,70%)]',
  contract: 'bg-[hsl(40,40%,12%)] text-[hsl(40,70%,65%)]',
  fellowship: 'bg-[hsl(175,30%,12%)] text-[hsl(175,60%,65%)]',
  education: 'bg-[hsl(260,30%,12%)] text-[hsl(260,60%,70%)]',
};

const typeLabel: Record<ExperienceType, string> = {
  fulltime: 'Full-time',
  contract: 'Contract',
  fellowship: 'Fellowship',
  education: 'Education',
};

export function CareerTimelineSection() {
  return (
    <section aria-labelledby="career-heading" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Career"
          title="Professional Journey"
          description="Key roles and milestones in my career building AI systems."
        />

        {/* Mobile timeline */}
        <div className="relative lg:hidden">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/20" aria-hidden="true" />
          <div className="space-y-8 sm:space-y-10">
            {experience.map((entry) => (
              <motion.div
                key={entry.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportMargin}
                className="relative ml-10"
              >
                <div className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" aria-hidden="true" />
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-xs font-medium text-primary font-mono-tech">
                      {entry.period}
                    </span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[0.65rem] font-medium ${typeBadge[entry.type]}`}>
                      {typeLabel[entry.type]}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    {entry.role}
                  </h3>
                  {entry.companyUrl ? (
                    <a
                      href={entry.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {entry.company}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{entry.company}</p>
                  )}
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {entry.description}
                  </p>
                  {entry.highlights && (
                    <ul className="mt-3 space-y-1">
                      {entry.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-px" aria-hidden="true" />
          <div className="space-y-12">
            {experience.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={entry.id}
                  variants={isLeft ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportMargin}
                  className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="absolute left-1/2 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background" aria-hidden="true" />
                  {/* Period label on opposite side */}
                  <span
                    className={`absolute top-1 text-xs font-medium text-primary font-mono-tech ${isLeft ? 'right-[calc(50%+20px)]' : 'left-[calc(50%+20px)]'}`}
                  >
                    {entry.period}
                  </span>
                  <div className={`rounded-xl border border-border/50 bg-card p-5 max-w-md ${isLeft ? 'mr-[calc(50%+20px)]' : 'ml-[calc(50%+20px)]'}`}>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">{entry.role}</h3>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[0.65rem] font-medium ${typeBadge[entry.type]}`}>
                        {typeLabel[entry.type]}
                      </span>
                    </div>
                    {entry.companyUrl ? (
                      <a href={entry.companyUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {entry.company}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{entry.company}</p>
                    )}
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{entry.description}</p>
                    {entry.highlights && (
                      <ul className="mt-3 space-y-1">
                        {entry.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
