import type { ProjectStatus } from '@/data/projects';

const statusConfig: Record<
  ProjectStatus,
  { label: string; dotClass: string; bgClass: string; textClass: string; pulse: boolean }
> = {
  production: {
    label: 'Production',
    dotClass: 'bg-neon-green',
    bgClass: 'bg-neon-green/10',
    textClass: 'text-neon-green',
    pulse: false,
  },
  research: {
    label: 'Research',
    dotClass: 'bg-neon-blue',
    bgClass: 'bg-neon-blue/10',
    textClass: 'text-neon-blue',
    pulse: false,
  },
  competition: {
    label: 'Competition',
    dotClass: 'bg-neon-yellow',
    bgClass: 'bg-neon-yellow/10',
    textClass: 'text-neon-yellow',
    pulse: false,
  },
  academic: {
    label: 'Academic',
    dotClass: 'bg-neon-purple',
    bgClass: 'bg-neon-purple/10',
    textClass: 'text-neon-purple',
    pulse: false,
  },
  prototype: {
    label: 'Prototype',
    dotClass: 'bg-neon-pink',
    bgClass: 'bg-neon-pink/10',
    textClass: 'text-neon-pink',
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
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wider ${config.bgClass} ${config.textClass}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${config.dotClass} ${config.pulse ? 'animate-pulse-glow' : ''}`}
      />
      {config.label}
    </span>
  );
}
