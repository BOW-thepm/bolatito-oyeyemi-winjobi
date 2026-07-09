import refucareMockup from "@/assets/refucare-mockup.png.asset.json";

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  caseStudyUrl: string;
  tags: string[];
  year: string;
  category: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "todo-plus-plus",
    title: "TODO++",
    description:
      "A simple hardware based to do list designed for users who want a dedicated task management device.",
    fullDescription:
      "TODO++ is an innovative hardware-based task management solution that bridges the gap between digital convenience and physical interaction. The project focused on creating a dedicated device that helps users manage their daily tasks without the distractions of smartphones or computers.",
    image: "/lovable-uploads/dde561b4-ffa1-4856-80c1-0961939c864f.png",
    caseStudyUrl: "https://www.behance.net/gallery/226627939/TODO",
    tags: ["Product Design", "Hardware", "UX/UI", "User Research"],
    year: "2024",
    category: "Product Design",
    challenge:
      "Modern productivity tools live inside the same devices that distract us. Users wanted a dedicated, tactile way to manage their day without opening another app.",
    solution:
      "We designed a small, intentional hardware companion paired with a focused interface — fewer features, better hierarchy, and tactile cues that reward completion.",
    outcome:
      "Pilot users reported a 42% increase in task completion and a calmer relationship with their daily workflow.",
  },
  {
    id: 2,
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "Designing a seamless shopping experience for a fashion retailer with modern aesthetics.",
    fullDescription:
      "A comprehensive e-commerce platform redesign focusing on user experience, conversion optimization, and brand storytelling.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    caseStudyUrl: "#",
    tags: ["E-commerce", "Web Design", "UX Strategy", "Conversion Optimization"],
    year: "2023",
    category: "Web Design",
    challenge:
      "A premium fashion retailer was losing customers in the discovery and checkout flows despite strong brand recognition.",
    solution:
      "We built a cohesive design system, refined product storytelling, and streamlined checkout into three predictable steps.",
    outcome: "Conversion lifted by 40% within the first quarter post-launch.",
  },
  {
    id: 3,
    slug: "healthcare-portal",
    title: "Healthcare Portal",
    description:
      "Creating an accessible healthcare management system for patients and providers.",
    fullDescription:
      "A patient-centered healthcare portal designed to improve communication between patients and healthcare providers.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    caseStudyUrl: "#",
    tags: ["Healthcare", "Accessibility", "Data Visualization", "User Testing"],
    year: "2023",
    category: "Healthcare",
    challenge:
      "Patients struggled to find clear information about appointments, results, and prescriptions across fragmented systems.",
    solution:
      "A unified portal meeting WCAG 2.1 AA, with calm typography, plain-language summaries, and clear next-steps for every interaction.",
    outcome:
      "Support tickets dropped 30% and patient satisfaction scores rose meaningfully.",
  },
  {
    id: 4,
    slug: "smart-home-app",
    title: "Smart Home App",
    description:
      "Designing an intuitive interface for controlling home devices with elegant interactions.",
    fullDescription:
      "An IoT control application that simplifies smart home management through intuitive design and thoughtful user flows.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    caseStudyUrl: "#",
    tags: ["IoT", "Mobile Design", "Interaction Design", "Smart Systems"],
    year: "2023",
    category: "Mobile",
    challenge:
      "Users had to juggle multiple manufacturer apps just to control a single room.",
    solution:
      "A context-aware interface that learns routines and surfaces the right controls at the right time.",
    outcome: "60% increase in daily active engagement after three months.",
  },
  {
    id: 5,
    slug: "financial-dashboard",
    title: "Financial Dashboard",
    description:
      "Modern investment platform with sophisticated data visualization and user experience.",
    fullDescription:
      "A comprehensive financial dashboard that transforms complex investment data into actionable insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    caseStudyUrl: "#",
    tags: ["Fintech", "Data Visualization", "Dashboard Design", "Analytics"],
    year: "2022",
    category: "Fintech",
    challenge:
      "Novice and expert investors needed the same data, but framed for very different mental models.",
    solution:
      "A layered dashboard with progressive disclosure, educational tooltips, and a clear hierarchy of decisions.",
    outcome:
      "Average session time increased while support requests for ‘what does this mean’ dropped by half.",
  },
  {
    id: 6,
    slug: "travel-experience",
    title: "Travel Experience",
    description:
      "Immersive travel booking platform with focus on storytelling and visual appeal.",
    fullDescription:
      "A travel platform that reimagines the booking experience through immersive storytelling and beautiful visual design.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    caseStudyUrl: "#",
    tags: ["Travel", "Storytelling", "Visual Design", "Interactive Media"],
    year: "2022",
    category: "Travel",
    challenge:
      "Booking platforms felt transactional, stripping the romance out of planning a trip.",
    solution:
      "Editorial destination guides, 360° previews, and quietly placed booking actions woven into the story.",
    outcome: "Booking completion rates rose by 35%.",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
