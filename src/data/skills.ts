export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  technologies: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'ml-dl',
    name: 'ML & Deep Learning',
    icon: 'Brain',
    technologies: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'Hugging Face',
      'XGBoost',
      'LightGBM',
      'JAX',
    ],
  },
  {
    id: 'llm-genai',
    name: 'LLM & Generative AI',
    icon: 'Sparkles',
    technologies: [
      'LangChain',
      'LlamaIndex',
      'LangGraph',
      'OpenAI API',
      'Anthropic SDK',
      'DeepSpeed',
      'vLLM',
    ],
  },
  {
    id: 'data-eng',
    name: 'Data Engineering',
    icon: 'Database',
    technologies: [
      'Spark',
      'Airflow',
      'dbt',
      'Snowflake',
      'Pandas',
      'PostgreSQL',
      'Redis',
    ],
  },
  {
    id: 'infra',
    name: 'Infrastructure & DevOps',
    icon: 'Cloud',
    technologies: [
      'Docker',
      'Kubernetes',
      'AWS',
      'GCP',
      'Terraform',
      'CI/CD',
      'SageMaker',
    ],
  },
  {
    id: 'langs',
    name: 'Languages & Frameworks',
    icon: 'Code2',
    technologies: [
      'Python',
      'TypeScript',
      'FastAPI',
      'React',
      'Node.js',
      'SQL',
      'Bash',
    ],
  },
  {
    id: 'mlops',
    name: 'MLOps & Monitoring',
    icon: 'Activity',
    technologies: [
      'MLflow',
      'W&B',
      'Prometheus',
      'Grafana',
      'Optuna',
      'DVC',
      'Great Expectations',
    ],
  },
];
