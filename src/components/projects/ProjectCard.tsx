import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { CategoryChip } from '@/components/shared/CategoryChip';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div layout whileHover={{ y: -4, transition: { duration: 0.3, ease: 'easeOut' } }}>
      <Card className="h-full border-border/50 bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-2">
            <CategoryChip category={project.category} />
            <StatusBadge status={project.status} />
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
          <TooltipProvider>
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
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge
                      variant="secondary"
                      className="font-mono-tech text-[0.7rem] px-2 py-0.5 bg-muted text-muted-foreground cursor-default"
                    >
                      +{project.technologies.length - 4} more
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent className="bg-popover text-popover-foreground">
                    <p className="text-xs">
                      {project.technologies.slice(4).join(', ')}
                    </p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </TooltipProvider>
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
          {project.demo ? (
            <Button size="sm" asChild className="h-8 px-3 text-xs bg-primary text-primary-foreground hover:bg-primary/90">
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
                  <Button size="sm" variant="outline" disabled className="h-8 px-3 text-xs">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    Demo
                  </Button>
                </TooltipTrigger>
                <TooltipContent>No live demo available</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
