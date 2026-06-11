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
  { label: 'Projects', href: '#projects-full' },
  { label: 'Experience', href: '#career' },
  { label: 'About', href: '#tech-stack' },
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
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50"
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
          className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          AC<span className="text-primary">.</span>
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
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild className="h-8 px-3 text-xs border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50">
            <a href="/resume.pdf">
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background">
            <SheetHeader>
              <SheetTitle className="text-left">
                AC<span className="text-primary">.</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 mt-6" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-border">
              <Button variant="outline" size="sm" asChild className="w-full h-9 border-primary/30 text-primary hover:bg-primary/10">
                <a href="/resume.pdf">
                  <Download className="w-3.5 h-3.5 mr-1.5" />
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
