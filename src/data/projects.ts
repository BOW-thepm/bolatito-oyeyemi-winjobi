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
    id: 10,
    slug: "msc-admin",
    title: "MSC Admin",
    description:
      "A clean, scalable admin dashboard for e-commerce operations — managing products, transactions, users, and analytics in one place.",
    fullDescription:
      "MSC Admin is an e-commerce dashboard designed to streamline back-office operations for merchants. It brings product management, transaction tracking, user analytics, and store settings into a single, intuitive interface with clear visual hierarchy and data-driven decision-making.",
    image: "/lovable-uploads/msc-admin-mockup.jpg",
    caseStudyUrl: "#",
    tags: ["E-commerce", "Dashboard", "UX/UI", "Admin Panel"],
    year: "2026",
    category: "E-commerce",
    challenge:
      "E-commerce operators often juggle multiple tools and spreadsheets to manage inventory, sales, users, and performance — leading to fragmented workflows and slow decisions.",
    solution:
      "A unified dashboard with a structured sidebar, at-a-glance metric cards, and visual data charts that make it easy to track products, revenue, users, and growth trends.",
    outcome:
      "The dashboard reduced the time spent navigating between tools and gave managers a clearer, faster view of daily business performance.",
  },
  {
    id: 11,
    slug: "msc-h5",
    title: "MSC H5",
    description:
      "A mobile-first pharmacy commerce experience that makes ordering medication cheaper, faster, and simpler.",
    fullDescription:
      "MSC H5 is a mobile commerce experience built for pharmacies and distributors, letting users browse featured products, compare prices, and complete orders in a few taps. The interface pairs a calm teal identity with clear product hierarchy, bulk-purchase promotions, and a frictionless product-detail-to-checkout flow.",
    image: "/lovable-uploads/msc-h5-mockup.jpg",
    caseStudyUrl: "#",
    tags: ["E-commerce", "Mobile App", "UX/UI", "Healthcare"],
    year: "2026",
    category: "E-commerce",
    challenge:
      "Pharmacy buyers needed a faster way to find medication, understand pricing, and place bulk orders on mobile without wading through dense catalogues.",
    solution:
      "A focused mobile storefront with category filters, featured product cards, transparent pricing, and a product detail page that keeps quantity, description, and checkout actions in one view.",
    outcome:
      "Ordering became noticeably quicker for repeat buyers, with clearer pricing and a smoother path from discovery to purchase.",
  },
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
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
