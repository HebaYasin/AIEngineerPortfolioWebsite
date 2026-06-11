import type { ProjectCategory } from '@/data/projects';
import { CATEGORY_LABELS } from '@/data/projects';

const categoryStyles: Record<ProjectCategory, string> = {
  work: 'bg-[hsl(215,40%,15%)] text-[hsl(215,60%,70%)]',
  personal: 'bg-[hsl(175,30%,12%)] text-[hsl(175,60%,65%)]',
  coursework: 'bg-[hsl(40,40%,12%)] text-[hsl(40,70%,65%)]',
  competitions: 'bg-[hsl(350,40%,12%)] text-[hsl(350,70%,65%)]',
  research: 'bg-[hsl(260,30%,12%)] text-[hsl(260,60%,70%)]',
  'open-source': 'bg-[hsl(145,30%,12%)] text-[hsl(145,60%,65%)]',
};

interface CategoryChipProps {
  category: ProjectCategory;
}

export function CategoryChip({ category }: CategoryChipProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[0.65rem] font-medium uppercase tracking-wider ${categoryStyles[category]}`}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}
