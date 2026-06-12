import { motion } from 'framer-motion';
import { staggerContainer, popIn, viewportOnce } from '@/lib/animations';
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

const cardGradients = [
  'from-neon-green/5 via-transparent to-neon-blue/5 border-neon-green/15 hover:border-neon-green/30',
  'from-neon-purple/5 via-transparent to-neon-pink/5 border-neon-purple/15 hover:border-neon-purple/30',
  'from-neon-blue/5 via-transparent to-neon-green/5 border-neon-blue/15 hover:border-neon-blue/30',
  'from-neon-yellow/5 via-transparent to-neon-green/5 border-neon-yellow/15 hover:border-neon-yellow/30',
  'from-neon-pink/5 via-transparent to-neon-purple/5 border-neon-pink/15 hover:border-neon-pink/30',
  'from-neon-green/5 via-transparent to-neon-yellow/5 border-neon-green/15 hover:border-neon-green/30',
];

const iconColors = [
  'text-neon-green',
  'text-neon-purple',
  'text-neon-blue',
  'text-neon-yellow',
  'text-neon-pink',
  'text-neon-green',
];

export function TechStackSection() {
  return (
    <section id="tech-stack" aria-labelledby="tech-heading" className="py-20 lg:py-28 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-purple/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-neon-green/5 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon] ?? Code2;
            return (
              <motion.div
                key={category.id}
                variants={popIn}
                whileHover={{ y: -4, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className={`rounded-2xl bg-gradient-to-br ${cardGradients[i % cardGradients.length]} border p-5 sm:p-6 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl bg-secondary/80 flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${iconColors[i % iconColors.length]}`} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider font-display">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-mono-tech text-[0.65rem] px-2.5 py-1 rounded-lg bg-secondary/40 border border-border/20 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors duration-200"
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
