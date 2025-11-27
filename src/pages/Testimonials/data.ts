interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  categories: string[];
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    company: "TechCorp",
    content:
      "Exceptional service and support. The team went above and beyond to deliver our project on time.",
    rating: 5,
    avatar: "/path/to/avatar1.jpg",
    categories: ["all", "development", "design"],
    date: "October 2023",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Director",
    company: "Digital Solutions",
    content:
      "Great work on our website redesign. The new design has significantly improved our conversion rates.",
    rating: 4,
    avatar: "/path/to/avatar2.jpg",
    categories: ["all", "design"],
    date: "September 2023",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "CTO",
    company: "InnovateX",
    content:
      "The development team is highly skilled and professional. They delivered a robust solution that exceeded our expectations.",
    rating: 5,
    avatar: "/path/to/avatar3.jpg",
    categories: ["all", "development"],
    date: "August 2023",
  },
];
