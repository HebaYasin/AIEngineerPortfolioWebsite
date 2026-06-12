import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { CategoryChip } from '@/components/shared/CategoryChip';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div layout whileHover={{ y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}>
      <div className="h-full glass rounded-2xl border border-border/20 hover:border-primary/20 overflow-hidden transition-all duration-300 hover:glow-primary group">
        {/* Gradient top bar */}
        <div className="h-0.5 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple opacity-50 group-hover:opacity-100 transition-opacity" />

        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <CategoryChip category={project.category} />
            <StatusBadge status={project.status} />
          </div>

          <h3 className="text-lg font-bold tracking-tight font-display group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

          <TooltipProvider>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="font-mono-tech text-[0.65rem] px-2 py-0.5 rounded-lg bg-secondary/40 border border-border/20 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge
                      variant="secondary"
                      className="font-mono-tech text-[0.65rem] px-2 py-0.5 rounded-lg bg-muted text-muted-foreground cursor-default"
                    >
                      +{project.technologies.length - 4} more
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent className="bg-popover text-popover-foreground border-border/30">
                    <p className="text-xs">
                      {project.technologies.slice(4).join(', ')}
                    </p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </TooltipProvider>

          {project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-5 pt-1">
              {project.metrics.slice(0, 3).map((metric) => (
                <div key={metric.label}>
                  <p className="text-[0.6rem] uppercase tracking-widest text-muted-foreground font-semibold">
                    {metric.label}
                  </p>
                  <p className="text-base font-bold font-display gradient-text-alt">
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
            {project.demo ? (
              <Button size="sm" asChild className="h-8 px-3 text-xs rounded-full bg-gradient-to-r from-neon-green to-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(170_80%_55%/0.3)]">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Demo
                  <span className="sr-only">(opens in new tab)</span>
                </a>
              </Button>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="outline" disabled className="h-8 px-3 text-xs rounded-full">
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      Demo
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>No live demo available</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
