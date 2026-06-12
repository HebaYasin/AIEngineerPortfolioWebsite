import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Server, Bot, Database, SlidersHorizontal, ArrowRight, Sparkles } from 'lucide-react';

const specialties = [
  { label: 'Production AI', icon: Server, color: 'from-neon-green/20 to-neon-green/5 border-neon-green/30' },
  { label: 'Agentic AI', icon: Bot, color: 'from-neon-purple/20 to-neon-purple/5 border-neon-purple/30' },
  { label: 'RAG Systems', icon: Database, color: 'from-neon-blue/20 to-neon-blue/5 border-neon-blue/30' },
  { label: 'LLM Fine-Tuning', icon: SlidersHorizontal, color: 'from-neon-pink/20 to-neon-pink/5 border-neon-pink/30' },
];

const roles = ['AI Engineer', 'Data Scientist', 'Gen AI Builder'];

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-neon-green/10 blur-[120px] animate-float" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-neon-purple/10 blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-neon-pink/5 blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(170 80% 55% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(170 80% 55% / 0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
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
            <Sparkles className="w-4 h-4 text-neon-yellow" />
            {roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-primary">
                  {role}
                </span>
                {i < roles.length - 1 && (
                  <span className="hidden sm:block w-1 h-1 rounded-full bg-neon-purple" aria-hidden="true" />
                )}
              </span>
            ))}
          </motion.div>

          {/* Name heading with gradient */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] font-display"
          >
            <span className="gradient-text">Alex Chen</span>
          </motion.h1>

          {/* Value proposition */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mx-auto sm:mx-0 font-light"
          >
            Building{' '}
            <span className="text-foreground font-medium">production AI systems</span>{' '}
            that transform how organizations leverage language models & data.
          </motion.p>

          {/* Specialty pills */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center sm:justify-start gap-2.5"
          >
            {specialties.map(({ label, icon: Icon, color }) => (
              <span
                key={label}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${color} border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-3 pt-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-neon-green to-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(170_80%_55%/0.3)] h-12 px-7 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass border border-primary/20 text-foreground hover:border-primary/40 hover:bg-primary/10 h-12 px-7 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse-glow" />
        </div>
      </motion.div>
    </section>
  );
}
