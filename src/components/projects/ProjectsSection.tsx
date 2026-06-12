import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, popIn } from '@/lib/animations';
import { projects, CATEGORY_LABELS, type ProjectCategory } from '@/data/projects';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Search, X, SearchX } from 'lucide-react';

const ALL_KEY = 'all' as const;
type FilterKey = typeof ALL_KEY | ProjectCategory;

const filterOptions: { key: FilterKey; label: string }[] = [
  { key: ALL_KEY, label: 'All' },
  ...Object.entries(CATEGORY_LABELS).map(([key, label]) => ({
    key: key as ProjectCategory,
    label,
  })),
];

export function ProjectsSection() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<FilterKey>(ALL_KEY);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === ALL_KEY || p.category === activeCategory;
      const searchLower = search.toLowerCase();
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchLower));
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const handleCategoryClick = useCallback((key: FilterKey) => {
    setActiveCategory(key);
  }, []);

  return (
    <section
      id="projects-full"
      aria-labelledby="projects-heading"
      className="py-20 lg:py-28 relative"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-neon-green/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] rounded-full bg-neon-pink/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Portfolio"
          title="Projects"
          description="A showcase of AI systems, research, and tools I've built across work, open source, and personal projects."
        />

        {/* Search and filter toolbar */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
          {/* Search bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects, technologies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 pl-11 pr-10 rounded-full bg-secondary/40 border-border/30 focus-visible:ring-primary focus-visible:border-primary/40 text-sm"
              aria-label="Search projects"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category chips */}
          <ScrollArea className="w-full md:w-auto whitespace-nowrap md:whitespace-normal">
            <div
              className="inline-flex md:flex flex-wrap gap-2 pb-1 md:pb-0"
              role="radiogroup"
              aria-label="Filter by category"
            >
              {filterOptions.map(({ key, label }) => {
                const isActive = activeCategory === key;
                return (
                  <button
                    key={key}
                    role="radio"
                    aria-checked={isActive}
                    onClick={() => handleCategoryClick(key)}
                    className={`inline-flex items-center h-9 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 ${
                      isActive
                        ? 'bg-gradient-to-r from-neon-green to-primary text-primary-foreground shadow-[0_0_20px_hsl(170_80%_55%/0.2)] scale-105'
                        : 'glass border border-border/30 text-muted-foreground hover:border-primary/30 hover:text-foreground'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <ScrollBar orientation="horizontal" className="md:hidden" />
          </ScrollArea>

          {/* Results count */}
          <p
            className="text-xs text-muted-foreground md:ml-auto shrink-0 font-mono-tech"
            aria-live="polite"
            aria-atomic="true"
          >
            {filteredProjects.length} / {projects.length}
          </p>
        </div>

        {/* Project grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="grid"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={popIn}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  layout
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 text-center"
              role="status"
            >
              <div className="w-16 h-16 rounded-2xl glass border border-border/20 flex items-center justify-center mb-4">
                <SearchX className="w-8 h-8 text-muted-foreground/50" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-display">
                No projects found
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSearch('');
                  setActiveCategory(ALL_KEY);
                }}
                className="mt-5 inline-flex items-center gap-2 h-9 px-5 rounded-full bg-gradient-to-r from-neon-green to-primary text-primary-foreground text-sm font-bold transition-all duration-300 hover:scale-105"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
