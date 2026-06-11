export type ExperienceType = 'fulltime' | 'contract' | 'fellowship' | 'education';

export interface ExperienceEntry {
  id: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  highlights?: string[];
  type: ExperienceType;
}

export const experience: ExperienceEntry[] = [
  {
    id: 'senior-ai-eng',
    period: '2023 — Present',
    role: 'Senior AI Engineer',
    company: 'TechCorp AI',
    companyUrl: 'https://example.com',
    description:
      'Leading the development of production AI systems including RAG platforms and agentic workflows for enterprise clients.',
    highlights: [
      'Architected RAG platform serving 10K+ daily queries with 94% accuracy',
      'Built multi-agent orchestrator handling complex task decomposition',
      'Reduced model deployment time by 60% through MLOps pipeline automation',
    ],
    type: 'fulltime',
  },
  {
    id: 'ml-engineer',
    period: '2021 — 2023',
    role: 'Machine Learning Engineer',
    company: 'DataVentures Inc.',
    companyUrl: 'https://example.com',
    description:
      'Developed and deployed NLP and computer vision models for financial and healthcare applications.',
    highlights: [
      'Deployed financial NLP analyzer processing 5K documents daily',
      'Fine-tuned 12+ domain-specific LLMs with measurable accuracy gains',
      'Established ML evaluation framework adopted across 3 teams',
    ],
    type: 'fulltime',
  },
  {
    id: 'ai-fellow',
    period: '2020 — 2021',
    role: 'AI Research Fellow',
    company: 'AI Lab, University',
    description:
      'Conducted research on efficient attention mechanisms for Vision Transformers, publishing findings in top-tier venues.',
    highlights: [
      'Achieved 40% parameter reduction while maintaining 96% accuracy',
      'Published paper on sparse attention patterns at CVPR workshop',
    ],
    type: 'fellowship',
  },
  {
    id: 'data-scientist-contract',
    period: '2020',
    role: 'Data Scientist (Contract)',
    company: 'StartupCo',
    description:
      'Built predictive models for customer churn and recommendation systems from zero to production.',
    highlights: [
      'Delivered churn prediction model with 87% AUC',
      'Built recommendation engine increasing engagement by 34%',
    ],
    type: 'contract',
  },
  {
    id: 'ms-cs',
    period: '2018 — 2020',
    role: 'M.S. Computer Science (AI Specialization)',
    company: 'Stanford University',
    description:
      'Specialized in machine learning, NLP, and distributed systems. Thesis on efficient transformer architectures.',
    highlights: [
      'GPA: 3.9/4.0 — focus on deep learning and NLP',
      'Teaching assistant for CS229 Machine Learning',
    ],
    type: 'education',
  },
];
