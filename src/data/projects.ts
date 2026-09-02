import bubblrCover from "@/assets/bubblr-cover.jpg.asset.json";

export interface CaseStudySection {
  /** Small uppercase label, e.g. "01 — Research" */
  label: string;
  title: string;
  body: string;
  /** Optional supporting bullet points */
  points?: string[];
  /** Optional mockup image for this section. When absent, a reserved slot is rendered. */
  image?: string;
  /** Caption shown under the mockup slot. */
  imageCaption?: string;
  /** Aspect ratio of the mockup slot. */
  imageRatio?: "wide" | "tall" | "square";
}

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
  team?: string;
  playUrl?: string;
  /** Short highlight stats shown under the hero of the case study. */
  metrics?: { value: string; label: string }[];
  /** Long-form, templated case-study sections. */
  caseStudy?: CaseStudySection[];
}





export const projects: Project[] = [
  {
    id: 11,
    slug: "bubblr",
    title: "Bubblr",
    description:
      "A safe, playful social media app built for kids — bubbles instead of feeds, with guardrails parents can trust.",
    fullDescription:
      "Bubblr is a social media experience designed specifically for children. Instead of an endless public feed, kids share moments inside small, invite-only \"bubbles\" of approved friends and family. The product balances two audiences at once: children, who want expression, colour and play, and parents, who need visibility, consent and control. The case study covers the full arc — research, information architecture, visual identity, design system, and the final high-fidelity screens.",
    image: bubblrCover.url,
    detailImage: bubblrCover.url,
    caseStudyUrl: "#",
    tags: ["Mobile App", "Social", "Kids Safety", "UX/UI"],
    year: "2026",
    category: "Social",
    team: "1 PM, 1 UX, 3 Devs, 1 Child-safety Advisor",
    metrics: [
      { value: "3 taps", label: "To publish a moment" },
      { value: "7–12", label: "Target age range" },
      { value: "2", label: "Audiences designed for" },
      { value: "1", label: "Shared design system" },
    ],
    challenge:
      "Mainstream social platforms are built for adults: open feeds, vanity metrics, and strangers one tap away. Kids still want to share their world, and parents still want them to — but not on those terms. The design problem was to keep the joy of sharing while removing the exposure.",
    solution:
      "A bubble-based model replaces the public feed: every post lives inside a small, parent-approved circle. Friend requests route through a guardian approval flow, comments are limited to reactions and pre-moderated replies, and the visual language — soft bubbles, high-contrast colour, oversized touch targets, and plain-language copy — was tuned for readers as young as seven. A single design system carries the same components across the kid app and the parent dashboard.",
    outcome:
      "Testing with kids and parents showed children could publish a moment in under three taps, while guardians reported clear confidence in who could see it. The design system shipped as a reusable foundation for future Bubblr surfaces.",
    caseStudy: [
      {
        label: "01 — Context",
        title: "A social app that has to earn a parent's trust first",
        body:
          "Bubblr set out to give children aged 7 to 12 a place to share photos, drawings and small moments with the people who actually matter to them. Every decision had to satisfy two users at once: the child using the app daily, and the guardian who decides whether it stays installed. That dual mandate shaped the brief — playful enough for a seven-year-old to love, legible enough for a parent to audit in seconds.",
      },
      {
        label: "02 — Research",
        title: "What kids want, what parents fear",
        body:
          "Conversations with parents and observation sessions with children surfaced a consistent split. Children described sharing as a way to be seen by a handful of people — cousins, best friends, a grandparent. Parents described their anxiety in terms of reach: who can see this, who can contact my child, and what happens when I'm not looking.",
        points: [
          "Kids don't want followers; they want a small, familiar audience.",
          "Parents want visibility without becoming a full-time moderator.",
          "Public metrics (likes, follower counts) create pressure children aren't equipped for.",
          "Reading levels vary widely — copy has to work for a hesitant reader.",
        ],
      },
      {
        label: "03 — Strategy",
        title: "Bubbles instead of feeds",
        body:
          "The core product decision was to remove the public feed entirely. A bubble is a small, invite-only circle — a family bubble, a class bubble, a best-friends bubble. Content is posted into a bubble, never to the world, so privacy is structural rather than a setting somebody has to find and switch on. Guardians approve the members of every bubble, which turns safety into a one-time, deliberate action instead of constant surveillance.",
      },
      {
        label: "04 — Information architecture",
        title: "Two apps, one system",
        body:
          "The kid experience is organised around three destinations: Bubbles, Create and Me. Nothing else competes for attention. The guardian experience mirrors the same data through a review lens — pending invites, bubble membership, and a running activity log. Both surfaces are built from one component library, so a change to a card or a button propagates everywhere.",
        points: [
          "Kid app: Bubbles → Bubble → Post detail; Create; Me.",
          "Guardian app: Approvals, Bubbles & members, Activity, Settings.",
          "Shared primitives: bubble card, member chip, reaction row, approval sheet.",
        ],
      },
      {
        label: "05 — Interaction design",
        title: "Three taps to share, zero dead ends",
        body:
          "Posting was reduced to pick a bubble, add the moment, send. Comments are replaced by a fixed set of reactions plus pre-moderated short replies, which removes the free-text risk without removing the feeling of a response. Friend requests never reach the child directly — they surface in the guardian queue, and the child sees the outcome, not the request.",
      },
      {
        label: "06 — Visual identity",
        title: "Playful, but never noisy",
        body:
          "Soft, rounded bubble forms carry the brand across icons, cards and empty states. Colour is high-contrast and used to signal meaning — each bubble gets its own hue so children can navigate by colour before they navigate by name. Touch targets are oversized, type is set large with generous line height, and every label uses plain, short language a seven-year-old can read without help.",
        points: [
          "Rounded, bubble-derived shape language across all components.",
          "Per-bubble colour coding for pre-literate navigation.",
          "Minimum 48px touch targets and large body type.",
          "Illustration used for guidance and empty states, not decoration.",
        ],
      },
      {
        label: "07 — Design system",
        title: "A foundation for what ships next",
        body:
          "Tokens for colour, type, spacing, radius and elevation feed a component library covering navigation, cards, sheets, forms and the approval patterns unique to Bubblr. Documented states — default, pressed, disabled, loading, empty and error — meant engineering could build screens that weren't drawn, and future surfaces inherit the same behaviour for free.",
      },
      {
        label: "08 — Validation",
        title: "Tested with both audiences",
        body:
          "Sessions were run with children and, separately, with their guardians. Children completed a post in under three taps without prompting and understood bubble colour as an identifier immediately. Guardians could state exactly who could see a given post, which was the single clearest signal that the privacy model was reading correctly. Remaining friction sat in bubble creation, which was simplified into a named, colour-picked flow.",
      },
    ],
  },


  {
    id: 10,
    slug: "msc",
    title: "MSC",
    description:
      "An end-to-end commerce suite for pharmacy retail — the MSC H5 mobile storefront and the MSC Admin operations dashboard.",
    fullDescription:
      "MSC is a multi-surface commerce ecosystem for pharmacy retail. MSC H5 is the mobile-first storefront, MSC PC is the desktop B2B marketplace for structured pharmaceutical procurement, MSC Buyer Center is the buyer-side dashboard for orders and business management, and MSC Admin is the back-office dashboard for products, transactions, users, and analytics. Together they form one continuous experience — the same visual language, data model, and product logic across every surface.",
    image: "/lovable-uploads/msc-h5-mockup.jpg",
    detailImage: "/lovable-uploads/msc-h5-mockup.jpg",
    gallery: [
      "/lovable-uploads/msc-h5-mockup.jpg",
      "/lovable-uploads/msc-pc-mockup.jpg",
      "/lovable-uploads/msc-buyer-center-mockup.jpg",
      "/lovable-uploads/msc-admin-mockup.jpg",
    ],
    caseStudyUrl: "#",
    tags: ["Mobile App", "Desktop", "Dashboard", "UX/UI"],
    year: "2026",
    category: "E-commerce",
    team: "1 PM, 1 UX, 5 Devs, 2 Stakeholders",
    challenge:
      "Pharmacy buyers needed a faster way to find medication and place bulk orders on mobile, while operators juggled spreadsheets and disconnected tools to manage inventory, sales, and performance.",
    solution:
      "One design system across multiple surfaces: a focused mobile storefront with category filters, transparent pricing, and a tight product-to-checkout flow, paired with a unified admin dashboard of metric cards, charts, and structured navigation.",
    outcome:
      "Ordering became quicker for repeat buyers and operators gained a single, clearer view of daily business performance — with all products reading as one coherent brand.",
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
    playUrl: "https://cosmic-defender-v3-0.vercel.app/",
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
