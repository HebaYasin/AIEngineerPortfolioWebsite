import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects-full' },
  { label: 'Experience', href: '#career' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20"
      animate={hidden ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="text-xl font-bold tracking-tighter font-display flex items-center gap-1.5 group"
        >
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-neon-green to-primary flex items-center justify-center text-primary-foreground text-xs font-bold group-hover:scale-110 transition-transform">
            A
          </span>
          <span className="text-foreground">
            Alex<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '') ||
              (link.href === '#projects-full' && activeSection === 'projects') ||
              (link.href === '#career' && activeSection === 'career') ||
              (link.href === '#tech-stack' && activeSection === 'tech-stack');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <Button size="sm" asChild className="h-9 px-4 rounded-full bg-gradient-to-r from-neon-green to-primary text-primary-foreground text-xs font-bold hover:shadow-[0_0_20px_hsl(170_80%_55%/0.2)] transition-all duration-300 hover:scale-105">
            <a href="/resume.pdf">
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-secondary/50">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background border-l border-border/20">
            <SheetHeader>
              <SheetTitle className="text-left flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-neon-green to-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                  A
                </span>
                Alex<span className="text-primary">.</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 mt-8" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-border/20">
              <Button size="sm" asChild className="w-full h-10 rounded-full bg-gradient-to-r from-neon-green to-primary text-primary-foreground text-sm font-bold">
                <a href="/resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
