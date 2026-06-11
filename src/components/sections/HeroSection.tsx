import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Server, Bot, Database, SlidersHorizontal, ArrowRight, ChevronDown } from 'lucide-react';

const specialties = [
  { label: 'Production AI Systems', icon: Server },
  { label: 'Agentic AI', icon: Bot },
  { label: 'RAG Systems', icon: Database },
  { label: 'LLM Fine-Tuning', icon: SlidersHorizontal },
];

const roles = ['AI Engineer', 'Data Scientist', 'Generative AI Builder'];

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(175 70% 50% / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 50% / 0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600x400_at_70%_50%,hsl(175_70%_50%/0.06),transparent)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center sm:text-left">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Role overline */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
            {roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-primary">
                  {role}
                </span>
                {i < roles.length - 1 && (
                  <span className="hidden sm:block w-px h-4 bg-primary/30" aria-hidden="true" />
                )}
              </span>
            ))}
          </motion.div>

          {/* Name heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            Alex Chen
          </motion.h1>

          {/* Value proposition */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto sm:mx-0"
          >
            Building production AI systems that transform how organizations
            leverage language models and data.
          </motion.p>

          {/* Specialty pills */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center sm:justify-start gap-2"
          >
            {specialties.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-primary/20 bg-primary/5 text-primary transition-colors hover:bg-primary/10"
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-3 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 rounded-lg text-sm font-semibold transition-colors"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 h-11 px-6 rounded-lg text-sm font-medium transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground/50" />
      </motion.div>
    </section>
  );
}
