import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animations';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { skillCategories } from '@/data/skills';
import { Badge } from '@/components/ui/badge';
import { Brain, Sparkles, Database, Cloud, Code2, Activity, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Sparkles,
  Database,
  Cloud,
  Code2,
  Activity,
};

export function TechStackSection() {
  return (
    <section aria-labelledby="tech-heading" className="py-16 lg:py-20 bg-[hsl(220,18%,6%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Tech Stack"
          title="Technologies & Tools"
          description="The frameworks, platforms, and tools I use to build production AI systems."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] ?? Code2;
            return (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                whileHover={{ y: -2, transition: { duration: 0.3 } }}
                className="rounded-xl border border-border/50 bg-card p-5 sm:p-6 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-mono-tech text-[0.7rem] px-2.5 py-1 bg-secondary/60 border border-border/30 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
