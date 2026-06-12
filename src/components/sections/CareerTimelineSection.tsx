import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight, viewportMargin } from '@/lib/animations';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { experience, type ExperienceType } from '@/data/experience';
import { CheckCircle2 } from 'lucide-react';

const typeBadge: Record<ExperienceType, string> = {
  fulltime: 'bg-neon-blue/10 text-neon-blue border-neon-blue/20',
  contract: 'bg-neon-yellow/10 text-neon-yellow border-neon-yellow/20',
  fellowship: 'bg-neon-green/10 text-neon-green border-neon-green/20',
  education: 'bg-neon-purple/10 text-neon-purple border-neon-purple/20',
};

const typeLabel: Record<ExperienceType, string> = {
  fulltime: 'Full-time',
  contract: 'Contract',
  fellowship: 'Fellowship',
  education: 'Education',
};

export function CareerTimelineSection() {
  return (
    <section id="career" aria-labelledby="career-heading" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Career"
          title="Professional Journey"
          description="Key roles and milestones in my career building AI systems."
        />

        {/* Mobile timeline */}
        <div className="relative lg:hidden">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green/40 via-neon-purple/40 to-neon-pink/40" aria-hidden="true" />
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
                <div className="absolute -left-[22px] top-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background glow-primary" aria-hidden="true" />
                <div className="glass rounded-2xl border border-border/30 p-5 hover:border-primary/20 transition-colors duration-300">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-bold font-mono-tech text-primary">
                      {entry.period}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold border ${typeBadge[entry.type]}`}>
                      {typeLabel[entry.type]}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-display">
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
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {entry.description}
                  </p>
                  {entry.highlights && (
                    <ul className="mt-3 space-y-1.5">
                      {entry.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0 mt-0.5" />
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
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green/40 via-neon-purple/40 to-neon-pink/40 -translate-x-px" aria-hidden="true" />
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
                  className="relative flex justify-center"
                >
                  {/* Dot on the line */}
                  <div className="absolute left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background glow-primary z-10" aria-hidden="true" />

                  {/* Date label — positioned on the opposite side from the card */}
                  <span
                    className={`absolute top-2 text-xs font-bold font-mono-tech text-primary whitespace-nowrap ${isLeft ? 'left-[calc(50%+20px)] text-left' : 'right-[calc(50%+20px)] text-right'}`}
                  >
                    {entry.period}
                  </span>

                  {/* Card — pushed away from center to leave room for the date on the other side */}
                  <div className={`w-[calc(50%-60px)] ${isLeft ? 'mr-auto' : 'ml-auto'}`}>
                    <div className="glass rounded-2xl border border-border/30 p-6 hover:border-primary/20 transition-colors duration-300">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-foreground font-display">{entry.role}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold border shrink-0 ${typeBadge[entry.type]}`}>
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
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{entry.description}</p>
                      {entry.highlights && (
                        <ul className="mt-3 space-y-1.5">
                          {entry.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                              <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0 mt-0.5" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
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
