export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorCompany: string;
  authorInitials: string;
  placeholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      "Alex's RAG platform transformed how our team accesses institutional knowledge. The accuracy and speed of retrieval exceeded our expectations and became a critical tool within weeks of deployment.",
    authorName: 'Sarah Mitchell',
    authorTitle: 'VP of Engineering',
    authorCompany: 'TechCorp AI',
    authorInitials: 'SM',
    placeholder: true,
  },
  {
    id: 'testimonial-2',
    quote:
      'One of the most talented AI engineers I have worked with. Alex combines deep technical understanding with a rare ability to ship production systems that actually work at scale.',
    authorName: 'David Park',
    authorTitle: 'Director of ML',
    authorCompany: 'DataVentures Inc.',
    authorInitials: 'DP',
    placeholder: true,
  },
  {
    id: 'testimonial-3',
    quote:
      'The fine-tuning pipeline Alex built cut our model iteration time dramatically. What used to take weeks now takes days, with better results and full reproducibility.',
    authorName: 'Maria Chen',
    authorTitle: 'ML Platform Lead',
    authorCompany: 'TechCorp AI',
    authorInitials: 'MC',
    placeholder: true,
  },
];
