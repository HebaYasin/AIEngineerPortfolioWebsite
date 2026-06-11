import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportOnce, cardHover } from '@/lib/animations';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { CategoryChip } from '@/components/shared/CategoryChip';
import { projects } from '@/data/projects';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star } from 'lucide-react';

const featuredProjects = projects.filter((p) => p.featured);

export function FeaturedProjectsSection() {
  return (
    <section id="projects" aria-labelledby="featured-heading" className="py-20 lg:py-28">
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
            <motion.div key={project.id} variants={fadeInUp} whileHover={cardHover}>
              <Card className="h-full border-l-[3px] border-l-primary bg-card hover:border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <CategoryChip category={project.category} />
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.65rem] font-medium bg-primary/10 text-primary">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                      <StatusBadge status={project.status} />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight text-foreground leading-snug mt-2">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <Separator className="bg-border/50" />
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono-tech text-[0.7rem] px-2 py-0.5 bg-secondary/80 border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge
                        variant="secondary"
                        className="font-mono-tech text-[0.7rem] px-2 py-0.5 bg-muted text-muted-foreground"
                      >
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  {project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-4 pt-1">
                      {project.metrics.slice(0, 3).map((metric) => (
                        <div key={metric.label}>
                          <p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                            {metric.label}
                          </p>
                          <p className="text-sm font-semibold text-foreground">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>

                <CardFooter className="gap-2 pt-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="h-8 px-3 text-xs">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5 mr-1.5" />
                        Source
                        <span className="sr-only">(opens in new tab)</span>
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild className="h-8 px-3 text-xs bg-primary text-primary-foreground hover:bg-primary/90">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        Demo
                        <span className="sr-only">(opens in new tab)</span>
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
