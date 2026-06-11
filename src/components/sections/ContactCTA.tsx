import { motion } from 'framer-motion';
import { staggerContainerSlow, fadeInUp, viewportOnce } from '@/lib/animations';
import { Mail, Download, Linkedin, Github } from 'lucide-react';

export function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[hsl(220,18%,6%)] via-background to-[hsl(175,30%,6%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_400x300_at_50%_50%,hsl(175_70%_50%/0.04),transparent)]"
        aria-hidden="true"
      />

      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3"
        >
          Let&apos;s Connect
        </motion.p>

        <motion.h2
          id="contact-heading"
          variants={fadeInUp}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground"
        >
          Ready to Build Something Remarkable?
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mt-3 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto"
        >
          I&apos;m always open to discussing new opportunities, challenging AI
          problems, and ways to make data work harder for your organization.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
        >
          <a
            href="mailto:alex@example.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 rounded-lg text-sm font-semibold transition-colors"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 h-11 px-6 rounded-lg text-sm font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-6 mt-8"
        >
          <a
            href="mailto:alex@example.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
