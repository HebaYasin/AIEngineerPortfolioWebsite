export type CertType = 'certification' | 'course' | 'specialization';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: CertType;
  date: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  image: string;
}

export const typeLabel: Record<CertType, string> = {
  certification: 'Certification',
  course: 'Course',
  specialization: 'Specialization',
};

export const typeBadge: Record<CertType, string> = {
  certification: 'bg-neon-green/10 text-neon-green border-neon-green/20',
  course: 'bg-neon-blue/10 text-neon-blue border-neon-blue/20',
  specialization: 'bg-neon-purple/10 text-neon-purple border-neon-purple/20',
};

export const certifications: Certification[] = [
  {
    id: 'aws-ml-specialty',
    title: 'AWS Machine Learning Specialty',
    issuer: 'Amazon Web Services',
    type: 'certification',
    date: '2024',
    credentialUrl: 'https://aws.amazon.com/certification/',
    description: 'Advanced certification covering ML modeling, pipeline design, and deployment on AWS infrastructure. Passed with a score in the top 10%.',
    skills: ['SageMaker', 'EC2', 'S3', 'Lambda', 'CloudWatch'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'gcp-professional-ml',
    title: 'GCP Professional ML Engineer',
    issuer: 'Google Cloud',
    type: 'certification',
    date: '2024',
    credentialUrl: 'https://cloud.google.com/certification',
    description: 'Professional-level certification for designing and building ML systems on Google Cloud, from data pipelines to model serving at scale.',
    skills: ['Vertex AI', 'BigQuery', 'TensorFlow', 'Kubeflow'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'deep-learning-specialization',
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI / Coursera',
    type: 'specialization',
    date: '2023',
    credentialUrl: 'https://coursera.org',
    description: '5-course series by Andrew Ng covering neural networks, CNNs, RNNs, structuring ML projects, and sequence models. All courses completed with honors.',
    skills: ['TensorFlow', 'Keras', 'CNNs', 'RNNs', 'Transformers'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'mlops-fundamentals',
    title: 'MLOps Fundamentals',
    issuer: 'Google Cloud / Coursera',
    type: 'course',
    date: '2023',
    credentialUrl: 'https://coursera.org',
    description: 'Hands-on course covering CI/CD for ML, feature stores, model monitoring, and automated retraining pipelines in production environments.',
    skills: ['Kubeflow', 'MLflow', 'Docker', 'Kubernetes', 'CI/CD'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'langchain-llm-apps',
    title: 'Building LLM Applications with LangChain',
    issuer: 'DeepLearning.AI / Coursera',
    type: 'course',
    date: '2024',
    credentialUrl: 'https://coursera.org',
    description: 'Intensive course on building production LLM apps: RAG pipelines, agent orchestration, tool use, memory systems, and evaluation frameworks.',
    skills: ['LangChain', 'LlamaIndex', 'ChromaDB', 'OpenAI', 'RAG'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'stanford-cs229',
    title: 'CS229: Machine Learning',
    issuer: 'Stanford University',
    type: 'course',
    date: '2022',
    description: 'Stanford\'s flagship ML course — supervised/unsupervised learning, SVMs, deep learning fundamentals, and reinforcement learning with mathematical rigor.',
    skills: ['Python', 'NumPy', 'scikit-learn', 'Optimization'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];
