import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <a href="#home" className="text-xl font-bold tracking-tighter font-display flex items-center gap-1.5">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-neon-green to-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                A
              </span>
              Alex<span className="text-primary">.</span>
            </a>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-neon-yellow" />
              AI Engineer &middot; Data Scientist &middot; Gen AI Builder
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="w-9 h-9 rounded-xl glass border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-6 bg-border/20" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Alex Chen. All rights reserved.</p>
          <p className="font-mono-tech">
            built w/ <span className="text-neon-pink">love</span> & <span className="text-neon-green">react</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
