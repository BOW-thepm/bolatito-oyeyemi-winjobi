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
  detailImage?: string;
}



export const projects: Project[] = [
  {
    id: 8,
    slug: "cosmic-defender",
    title: "Cosmic Defender",
    description:
      "A browser-based arcade shooter that pairs neon-soaked visuals with fast, responsive gameplay.",
    fullDescription:
      "Cosmic Defender is a browser-based arcade shooter that brings retro sci-fi energy to modern web gameplay. The interface leans into bold neon typography, high-contrast HUD elements, and clear navigation so players can jump straight into the action.",
    image: "/lovable-uploads/cosmic-defender-mockup.png",
    caseStudyUrl: "#",
    tags: ["Web Game", "Game Design", "UI Design", "Interaction Design"],
    year: "2026",
    category: "Web Game",
    challenge:
      "Browser games often feel cluttered or visually flat. The goal was to make a web game feel as immersive and polished as a native title.",
    solution:
      "A dark, cinematic UI with glowing accents, readable arcade type, and a modular menu system that keeps the focus on gameplay.",
    outcome:
      "The game delivered an engaging, high-energy experience that performed smoothly across browsers and screen sizes.",
  },
  {
    id: 7,
    slug: "feetz",
    title: "Feetz",
    description:
      "A bold e-commerce platform for street-comfort footwear, blending editorial storytelling with a streamlined shopping experience.",
    fullDescription:
      "Feetz is a modern e-commerce platform designed for a streetwear-inspired footwear brand. The experience pairs bold product visuals with a clean, conversion-focused shopping flow, making it easy for customers to explore collections, discover new drops, and complete purchases with confidence.",
    image: "/lovable-uploads/feetz-mockup.png",
    caseStudyUrl: "#",
    tags: ["E-commerce", "Web Design", "UX/UI", "Brand Experience"],
    year: "2025",
    category: "E-commerce",
    challenge:
      "The brand needed a digital storefront that felt as expressive as the footwear itself, without sacrificing clarity or checkout performance.",
    solution:
      "A high-contrast, editorial homepage with prominent product hero shots, clear category navigation, and a minimal purchase path that keeps the product center stage.",
    outcome:
      "The new storefront improved product discovery and created a cohesive brand experience across desktop and mobile.",
  },
  {
    id: 9,
    slug: "paydayhub",
    title: "PaydayHub",
    description:
      "A fintech loan platform that makes applying for low-interest loans fast, transparent, and accessible.",
    fullDescription:
      "PaydayHub is a fintech loan platform designed to simplify access to credit. The experience combines a clean, trustworthy interface with a streamlined application flow, helping users understand loan options, check eligibility, and apply with confidence.",
    image: "/lovable-uploads/paydayhub-mockup.png",
    caseStudyUrl: "#",
    tags: ["Fintech", "Web Design", "UX/UI", "Loan Services"],
    year: "2025",
    category: "Fintech",
    challenge:
      "Loan applications often feel intimidating or opaque, leaving users uncertain about rates, eligibility, and timelines.",
    solution:
      "A calm, approachable landing experience with clear product tiers, transparent language, and a focused application path that reduces friction.",
    outcome:
      "The platform improved application completion and built trust with users seeking fast, low-interest financial support.",
  },
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
    slug: "refucare",
    title: "RefuCare",
    description:
      "A mobile healthcare app that helps newcomers to Canada find, book, and navigate clinics with ease.",
    fullDescription:
      "RefuCare is a mobile healthcare companion designed to simplify clinic discovery and appointment booking for newcomers navigating an unfamiliar healthcare system. The app combines clear information architecture, accessible UI patterns, and local-aware features to reduce friction and anxiety.",
    image: "/lovable-uploads/refucare-mockup.png",
    detailImage: "/lovable-uploads/refucare-hero.png",
    gallery: [
      "/lovable-uploads/refucare-hero.png",
      "/lovable-uploads/refucare-mockup.png",
    ],
    caseStudyUrl: "#",
    tags: ["Mobile App", "Healthcare", "UX/UI", "Accessibility"],
    year: "2024",
    category: "Healthcare",
    challenge:
      "Newcomers to Canada often struggle to understand how the healthcare system works, where to find clinics, and how to book appointments.",
    solution:
      "A mobile-first experience centered around quick clinic discovery, transparent information about services and walk-in policies, and simple booking flows.",
    outcome:
      "The prototype received strong validation from target users, with booking tasks completed significantly faster than existing alternatives.",
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
