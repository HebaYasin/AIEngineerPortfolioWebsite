import { motion } from 'framer-motion';
import { staggerContainerSlow, fadeInUp, viewportOnce } from '@/lib/animations';
import { Mail, Download, Linkedin, Github } from 'lucide-react';

export function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-24 sm:py-28 lg:py-36 overflow-hidden noise"
    >
      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full bg-neon-green/8 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-neon-purple/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-neon-pink/5 blur-[100px]" />
      </div>

      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-primary">
            Let&apos;s Connect
          </span>
        </motion.div>

        <motion.h2
          id="contact-heading"
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter font-display"
        >
          Ready to Build Something{' '}
          <span className="gradient-text">Remarkable?</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto font-light"
        >
          I&apos;m always open to discussing new opportunities, challenging AI
          problems, and ways to make data work harder for your organization.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="mailto:alex@example.com"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-neon-green to-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(170_80%_55%/0.3)] h-12 px-8 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 glass border border-primary/20 text-foreground hover:border-primary/40 hover:bg-primary/10 h-12 px-8 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-8 mt-10"
        >
          {[
            { icon: Mail, label: 'Email', href: 'mailto:alex@example.com' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
            { icon: Github, label: 'GitHub', href: 'https://github.com' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="group flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="w-10 h-10 rounded-xl glass border border-border/20 flex items-center justify-center group-hover:border-primary/30 group-hover:glow-primary transition-all duration-300">
                <Icon className="w-4 h-4" />
              </span>
              <span className="text-[0.65rem] font-medium">{label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
