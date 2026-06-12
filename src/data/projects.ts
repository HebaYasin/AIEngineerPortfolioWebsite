export type ProjectCategory =
  | 'work'
  | 'personal'
  | 'coursework'
  | 'competitions'
  | 'research'
  | 'open-source';

export type ProjectStatus =
  | 'production'
  | 'research'
  | 'competition'
  | 'academic'
  | 'prototype';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  description: string;
  technologies: string[];
  metrics: ProjectMetric[];
  image: string;
  github?: string;
  demo?: string;
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  work: 'Work',
  personal: 'Personal',
  coursework: 'Coursework',
  competitions: 'Competition',
  research: 'Research',
  'open-source': 'Open Source',
};

export const projects: Project[] = [
  {
    id: 'enterprise-rag-platform',
    title: 'Enterprise RAG Platform',
    category: 'work',
    status: 'production',
    featured: true,
    description:
      'Production-grade Retrieval-Augmented Generation system serving 10K+ daily queries across enterprise knowledge bases with sub-second latency and 94% retrieval accuracy.',
    technologies: ['Python', 'LangChain', 'LlamaIndex', 'Pinecone', 'FastAPI', 'AWS', 'Docker', 'React'],
    metrics: [
      { label: 'Accuracy', value: '94.2%' },
      { label: 'Latency', value: '340ms' },
      { label: 'Daily Queries', value: '10K+' },
    ],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 'multi-agent-orchestrator',
    title: 'Multi-Agent Orchestrator',
    category: 'work',
    status: 'production',
    featured: true,
    description:
      'Autonomous agent framework coordinating specialized AI agents for complex task decomposition, planning, and execution with built-in guardrails and human-in-the-loop escalation.',
    technologies: ['Python', 'LangGraph', 'OpenAI', 'Anthropic', 'Redis', 'Kubernetes'],
    metrics: [
      { label: 'Task Completion', value: '89%' },
      { label: 'Agents', value: '7 types' },
      { label: 'Uptime', value: '99.9%' },
    ],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 'llm-fine-tuning-pipeline',
    title: 'LLM Fine-Tuning Pipeline',
    category: 'work',
    status: 'production',
    featured: true,
    description:
      'End-to-end fine-tuning infrastructure for domain-adapted LLMs with automated data curation, distributed training, evaluation harness, and deployment automation.',
    technologies: ['PyTorch', 'Hugging Face', 'DeepSpeed', 'MLflow', 'W&B', 'AWS SageMaker'],
    metrics: [
      { label: 'Models Tuned', value: '12+' },
      { label: 'Avg Improvement', value: '+23%' },
      { label: 'Training Time', value: '-60%' },
    ],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
  },
  {
    id: 'financial-nlp-analyzer',
    title: 'Financial NLP Analyzer',
    category: 'work',
    status: 'production',
    featured: false,
    description:
      'NLP pipeline for automated financial document analysis — sentiment extraction, entity recognition, and risk scoring from earnings reports and SEC filings.',
    technologies: ['Python', 'spaCy', 'Transformers', 'FastAPI', 'PostgreSQL', 'Airflow'],
    metrics: [
      { label: 'F1 Score', value: '0.91' },
      { label: 'Documents/Day', value: '5K' },
    ],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 'conversational-ai-assistant',
    title: 'Conversational AI Assistant',
    category: 'personal',
    status: 'prototype',
    featured: false,
    description:
      'Open-domain conversational assistant with long-term memory, tool use, and multi-turn reasoning capabilities built on top of open-weight models.',
    technologies: ['Python', 'LlamaIndex', 'ChromaDB', 'Gradio', 'Ollama'],
    metrics: [
      { label: 'Context Window', value: '128K' },
      { label: 'Tools', value: '6' },
    ],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
  },
  {
    id: 'ml-competition-pipeline',
    title: 'Kaggle Competition Pipeline',
    category: 'competitions',
    status: 'competition',
    featured: false,
    description:
      'Reusable competition framework with automated feature engineering, ensemble modeling, hyperparameter optimization, and submission generation — top 3% finishes.',
    technologies: ['Python', 'XGBoost', 'LightGBM', 'Optuna', 'scikit-learn', 'Pandas'],
    metrics: [
      { label: 'Top Finish', value: '3%' },
      { label: 'Competitions', value: '8' },
    ],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
  },
  {
    id: 'vision-transformer-study',
    title: 'Vision Transformer Study',
    category: 'research',
    status: 'research',
    featured: false,
    description:
      'Research project exploring efficient attention mechanisms for Vision Transformers, achieving comparable accuracy with 40% fewer parameters through sparse attention patterns.',
    technologies: ['PyTorch', 'Timm', 'W&B', 'CUDA', 'NumPy'],
    metrics: [
      { label: 'Param Reduction', value: '-40%' },
      { label: 'Accuracy', value: '96.1%' },
    ],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
  },
  {
    id: 'ai-course-projects',
    title: 'CS229 ML Implementations',
    category: 'coursework',
    status: 'academic',
    featured: false,
    description:
      'From-scratch implementations of core ML algorithms — logistic regression, SVMs, neural networks, and EM — with rigorous mathematical derivations and visualization.',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'JAX'],
    metrics: [
      { label: 'Algorithms', value: '15' },
    ],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
  },
  {
    id: 'open-source-langchain-contrib',
    title: 'LangChain Contrib Modules',
    category: 'open-source',
    status: 'production',
    featured: false,
    description:
      'Contributed retrieval strategies, custom document loaders, and evaluation metrics to the LangChain ecosystem with 500+ GitHub stars on personal extensions.',
    technologies: ['Python', 'LangChain', 'TypeScript', 'Sphinx'],
    metrics: [
      { label: 'Stars', value: '500+' },
      { label: 'PRs Merged', value: '12' },
    ],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
  },
];
