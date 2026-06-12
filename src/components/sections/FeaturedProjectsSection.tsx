import { motion } from 'framer-motion';
import { staggerContainer, popIn, viewportOnce, cardHover } from '@/lib/animations';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { CategoryChip } from '@/components/shared/CategoryChip';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star } from 'lucide-react';

const featuredProjects = projects.filter((p) => p.featured);

export function FeaturedProjectsSection() {
  return (
    <section id="projects" aria-labelledby="featured-heading" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Featured Work"
          title="Selected Projects"
          description="A selection of AI systems I've built and deployed."
          linkText="View all projects"
          linkHref="#projects-full"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={popIn} whileHover={cardHover}>
              <div className="h-full glass rounded-2xl border border-primary/10 hover:border-primary/30 overflow-hidden transition-all duration-300 hover:glow-primary group">
                {/* Gradient top bar */}
                <div className="h-1 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple" />

                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <CategoryChip category={project.category} />
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-neon-yellow/10 text-neon-yellow border border-neon-yellow/20">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                      <StatusBadge status={project.status} />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold tracking-tight font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono-tech text-[0.65rem] px-2 py-0.5 bg-secondary/60 border border-border/30 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge
                        variant="secondary"
                        className="font-mono-tech text-[0.65rem] px-2 py-0.5 bg-muted text-muted-foreground"
                      >
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-5 pt-1">
                      {project.metrics.slice(0, 3).map((metric) => (
                        <div key={metric.label}>
                          <p className="text-[0.6rem] uppercase tracking-widest text-muted-foreground font-semibold">
                            {metric.label}
                          </p>
                          <p className="text-lg font-bold font-display gradient-text-alt">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2 pt-1">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild className="h-8 px-3 text-xs rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/10">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5 mr-1.5" />
                          Source
                          <span className="sr-only">(opens in new tab)</span>
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild className="h-8 px-3 text-xs rounded-full bg-gradient-to-r from-neon-green to-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(170_80%_55%/0.3)]">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                          Demo
                          <span className="sr-only">(opens in new tab)</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
