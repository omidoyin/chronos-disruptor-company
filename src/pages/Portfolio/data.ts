export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  featuredImage: string;
  images: string[];
  categories: string[];
  tags: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  year: string;
  client: string;
  role: string;
  duration: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    subtitle: 'A full-featured e-commerce solution with payment integration',
    description: 'A comprehensive e-commerce platform with product management, shopping cart, and secure payment processing.',
    overview: 'This project involved building a scalable e-commerce platform from scratch, focusing on performance, user experience, and security. The platform supports thousands of products, multiple payment gateways, and a custom admin dashboard.',
    challenge: 'The client needed a solution that could handle high traffic during sales events while maintaining fast load times and a seamless checkout experience.',
    solution: 'We implemented a modern tech stack with Next.js for server-side rendering, Node.js with Express for the backend, and MongoDB for the database. We used Redis for caching and implemented a CDN for static assets.',
    results: 'The platform launched successfully, handling over 10,000 concurrent users during peak sales. Page load times improved by 65%, and the checkout completion rate increased by 40%.',
    featuredImage: 'https://source.unsplash.com/random/1200x800/?ecommerce,shopping',
    images: [
      'https://source.unsplash.com/random/800x600/?ecommerce,store',
      'https://source.unsplash.com/random/800x600/?shopping,cart',
      'https://source.unsplash.com/random/800x600/?payment,checkout'
    ],
    categories: ['web', 'ecommerce'],
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    technologies: {
      frontend: ['React', 'Next.js', 'TypeScript', 'Material-UI', 'Redux'],
      backend: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
      tools: ['Git', 'Docker', 'AWS', 'Redis']
    },
    links: {
      live: 'https://example-ecommerce.com',
      github: 'https://github.com/username/ecommerce-platform',
      caseStudy: '/case-studies/ecommerce-platform'
    },
    features: [
      {
        title: 'Product Catalog',
        description: 'Advanced product filtering and search functionality',
        icon: 'category'
      },
      {
        title: 'Secure Checkout',
        description: 'PCI-compliant payment processing with multiple gateways',
        icon: 'payment'
      },
      {
        title: 'Admin Dashboard',
        description: 'Comprehensive management interface for inventory and orders',
        icon: 'dashboard'
      }
    ],
    year: '2023',
    client: 'Retail Corp',
    role: 'Full-stack Development',
    duration: '6 months'
  },
  // Add more projects as needed
];
