import type { ProjectStatus } from '@/data/projects';

const statusConfig: Record<
  ProjectStatus,
  { label: string; dotClass: string; bgClass: string; textClass: string; pulse: boolean }
> = {
  production: {
    label: 'Production',
    dotClass: 'bg-emerald-400',
    bgClass: 'bg-emerald-500/10',
    textClass: 'text-emerald-400',
    pulse: false,
  },
  research: {
    label: 'Research',
    dotClass: 'bg-sky-400',
    bgClass: 'bg-sky-500/10',
    textClass: 'text-sky-400',
    pulse: false,
  },
  competition: {
    label: 'Competition',
    dotClass: 'bg-amber-400',
    bgClass: 'bg-amber-500/10',
    textClass: 'text-amber-400',
    pulse: false,
  },
  academic: {
    label: 'Academic',
    dotClass: 'bg-sky-300',
    bgClass: 'bg-sky-500/10',
    textClass: 'text-sky-300',
    pulse: false,
  },
  prototype: {
    label: 'Prototype',
    dotClass: 'bg-orange-400',
    bgClass: 'bg-orange-500/10',
    textClass: 'text-orange-400',
    pulse: true,
  },
};

interface StatusBadgeProps {
  status: ProjectStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[0.65rem] font-medium ${config.bgClass} ${config.textClass}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${config.dotClass} ${config.pulse ? 'animate-pulse-glow' : ''}`}
      />
      {config.label}
    </span>
  );
}
