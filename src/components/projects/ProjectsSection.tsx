import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
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
      className="py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Portfolio"
          title="Projects"
          description="A showcase of AI systems, research, and tools I've built across work, open source, and personal projects."
        />

        {/* Search and filter toolbar */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-8">
          {/* Search bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects, technologies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 pl-10 pr-9 rounded-lg bg-secondary/50 border-border focus-visible:ring-primary focus-visible:border-primary"
              aria-label="Search projects"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category chips - scrollable on mobile */}
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
                    className={`inline-flex items-center h-8 px-3 rounded-full text-xs font-medium transition-all duration-200 shrink-0 ${
                      isActive
                        ? 'bg-primary text-primary-foreground border border-primary hover:bg-primary/90'
                        : 'border border-border text-muted-foreground hover:border-primary hover:text-primary'
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
            className="text-xs text-muted-foreground md:ml-auto shrink-0"
            aria-live="polite"
            aria-atomic="true"
          >
            Showing {filteredProjects.length} of {projects.length} projects
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  layout
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-16 text-center"
              role="status"
            >
              <SearchX className="w-12 h-12 text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold text-foreground">
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
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
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
