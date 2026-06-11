export interface Stat {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  {
    id: 'years',
    value: '5+',
    numericValue: 5,
    suffix: '+',
    label: 'Years in AI/ML',
  },
  {
    id: 'models',
    value: '20+',
    numericValue: 20,
    suffix: '+',
    label: 'Production Models',
  },
  {
    id: 'api-requests',
    value: '50M+',
    numericValue: 50,
    suffix: 'M+',
    label: 'API Requests Served',
  },
  {
    id: 'opensource',
    value: '15+',
    numericValue: 15,
    suffix: '+',
    label: 'Open Source Contributions',
  },
  {
    id: 'papers',
    value: '3',
    numericValue: 3,
    suffix: '',
    label: 'Publications',
  },
];
