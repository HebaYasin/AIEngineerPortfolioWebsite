import type { ProjectCategory } from '@/data/projects';
import { CATEGORY_LABELS } from '@/data/projects';

const categoryStyles: Record<ProjectCategory, string> = {
  work: 'bg-neon-blue/10 text-neon-blue border-neon-blue/20',
  personal: 'bg-neon-green/10 text-neon-green border-neon-green/20',
  coursework: 'bg-neon-yellow/10 text-neon-yellow border-neon-yellow/20',
  competitions: 'bg-neon-pink/10 text-neon-pink border-neon-pink/20',
  research: 'bg-neon-purple/10 text-neon-purple border-neon-purple/20',
  'open-source': 'bg-neon-green/10 text-neon-green border-neon-green/20',
};

interface CategoryChipProps {
  category: ProjectCategory;
}

export function CategoryChip({ category }: CategoryChipProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wider border ${categoryStyles[category]}`}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}
