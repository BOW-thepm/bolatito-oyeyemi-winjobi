import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LockKeyhole } from 'lucide-react';
import heroImage from '@/assets/msc-hero.jpg.asset.json';
import productImage from '@/assets/msc-product-detail.jpg.asset.json';
import checkoutImage from '@/assets/msc-checkout.jpg.asset.json';
import buyerImage from '@/assets/msc-buyer-center.jpg.asset.json';
import adminImage from '@/assets/msc-admin.jpg.asset.json';
import './MscCaseStudy.css';

const navItems = [
  ['hero', 'Overview'], ['challenge', 'Challenge'], ['approach', 'Approach'],
  ['insights', 'Key insights'], ['scope', 'Scope'], ['process', 'Design process'],
  ['solution', 'Solution'], ['lessons', 'Lessons learnt'],
] as const;

const tickerText = 'Confidentiality Notice — Some product details, workflows, and screens have been generalized or omitted to respect confidentiality agreements.';
const challenges = [
  ['01', 'User Challenge', 'Healthcare providers need a reliable and efficient way to source authentic pharmaceutical products from legitimate suppliers and distributors.'],
  ['02', 'Business Challenge', 'Healthcare suppliers and distributors face fragmented operations, making it difficult to efficiently reach licensed pharmacies, manage product visibility, and scale distribution.'],
  ['03', 'Technical Challenge', 'Adapting an existing, complex Chinese pharmaceutical platform to Nigerian procurement habits while balancing business, technical, and scalability requirements.'],
];
const approach = [
  ['Understand Users & Business', 'Collaborated with Product Managers and Product Marketers to understand user needs, business context, and market expectations.'],
  ['Align With Business Goals', 'Familiarized myself with the product vision, business objectives, and priorities guiding the redesign.'],
  ['Translate & Define', 'Interpreted PRDs, FRDs, and Chinese documentation, translating requirements into clear product and design requirements.'],
  ['Understand the System', 'Collaborated with developers to understand existing UI/UX flows, backend logic, and technical constraints, then identified how existing workflows could be adapted to Nigerian procurement habits.'],
  ['Structure', 'Reworked information architecture, navigation, and key user flows across the product ecosystem.'],
  ['Design & Standardize', 'Designed and standardized core experiences across web and mobile, creating reusable patterns for consistency and scalability.'],
  ['Iterate & Deliver', 'Worked closely with Product and Engineering to refine designs, resolve implementation considerations, and support development.'],
];
const insights = [
  'Healthcare providers often rely on multiple suppliers to source the products they need.',
  'Pricing, availability, manufacturer details, product authenticity, supplier legitimacy, and regulatory information are important to purchasing decisions.',
  'Existing procurement platforms make managing large quantities of products difficult, creating friction when reviewing, organizing, and completing large orders.',
  'Healthcare providers frequently purchase the same products and need a faster way to reorder them.',
  'Unclear stock availability and limited visibility into delivery timelines make it difficult to plan purchases.',
  'Payment issues can interrupt the purchasing process and create friction at checkout.',
  'Many healthcare providers are accustomed to traditional procurement methods and may prefer them over ordering through a digital platform.',
  'Many healthcare providers are older users with limited digital familiarity, making simplicity, clarity, and ease of use critical to adoption.',
];
const scopes = [
  ['01', 'H5 — Mobile Procurement', 'The mobile-facing experience for discovering pharmaceutical products, reviewing details, managing a cart, and placing orders.'],
  ['02', 'PC — Desktop Procurement', 'Enables pharmacies to discover and compare products, evaluate suppliers, build larger orders, and manage purchases efficiently.'],
  ['03', 'Buyer Center - Management', 'Centralized workspace for pharmacies to manage their purchasing activities, orders, account information, and ongoing procurement needs.'],
  ['04', 'Admin — Platform Operations', 'Operational layer for managing the marketplace, users, products, suppliers, orders, and platform-wide activities.'],
];
const questions = [
  'How can the existing experience be redesigned to improve usability, clarity, and overall product quality without disrupting established workflows?',
  'How can search, categories, filters, and product discovery help users quickly find what they need, even when they use familiar brand names or different ways of searching?',
  'What should the flow look like from discovery and product evaluation to selection, cart, checkout, payment, and order completion?',
  'Which steps are unnecessary, confusing, repetitive, or difficult, and how can the journey be simplified without removing important information or controls?',
  'How can new requirements and features be introduced without creating additional complexity or disrupting familiar workflows?',
  'How can product, supplier, pricing, availability, and regulatory information be presented clearly without overwhelming users?',
  'How can H5, PC, Buyer Center, and Admin maintain consistency while serving different users and purposes?',
  'How can we balance user needs with business requirements, existing system logic, technical limitations, and implementation realities?',
];

const SectionHead = ({ children }: { children: React.ReactNode }) => <div className="msc-section-head"><span className="msc-section-mark" /><span className="msc-section-label">{children}</span></div>;

const MscCaseStudy = () => {
  const [active, setActive] = useState('hero');
  useEffect(() => {
    window.scrollTo(0, 0);
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('in-view')), { threshold: 0.12 });
    document.querySelectorAll('.msc-reveal').forEach((el) => revealObserver.observe(el));
    const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55%', threshold: 0 });
    navItems.forEach(([id]) => { const el = document.getElementById(id); if (el) sectionObserver.observe(el); });
    return () => { revealObserver.disconnect(); sectionObserver.disconnect(); };
  }, []);

  return <main className="msc-page">
    <div className="msc-ticker"><div className="msc-ticker-track">{[0,1].map(group => <div className="msc-ticker-group" key={group}>{[0,1,2,3].map(i => <span className="msc-ticker-item" key={i}><LockKeyhole size={13}/><b>Confidentiality Notice</b><span>— Some product details, workflows, and screens have been generalized or omitted to respect confidentiality agreements.</span><span className="msc-sep">◆</span></span>)}</div>)}</div></div>
    <nav className="msc-side-nav" aria-label="Case study sections">{navItems.map(([id,label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-label={label}><span>{label}</span></a>)}</nav>
    <div className="msc-wrap"><div className="msc-topnav"><Link to="/projects" className="msc-back"><ArrowLeft size={16}/>All projects</Link><span className="msc-pill">E-Commerce</span></div></div>

    <header className="msc-wrap msc-hero msc-reveal" id="hero">
      <div className="msc-hero-meta"><span>2025</span><i/><span>E-Commerce</span></div>
      <h1>Medicare Supply Chain (MSC)</h1>
      <p>A digital platform that connects licensed pharmacies with verified pharmaceutical suppliers and distributors in Nigeria.</p>
      <div className="msc-hero-visual"><img src={heroImage.url} alt="MSC desktop and mobile storefront showing structured pharmaceutical procurement" /></div>
    </header>

    <div className="msc-wrap msc-reveal"><div className="msc-meta-strip">{[['Year','2025 · Ongoing project'],['Platform','Mobile & Desktop'],['Team','1 PM, 1 UX, 3 Devs'],['Scope','End-to-End UI/UX Design']].map(([label,value]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div></div>

    <section className="msc-wrap msc-section msc-reveal" id="challenge"><SectionHead>The challenge</SectionHead><p className="msc-intro">MSC wasn't solving a single problem. It sat at the intersection of pharmaceutical procurement, B2B commerce, and complex operational workflows.</p><div className="msc-triad">{challenges.map(([n,t,b]) => <article key={n}><b className="msc-index">{n}</b><h3>{t}</h3><p>{b}</p></article>)}</div></section>

    <section className="msc-wrap msc-section msc-reveal" id="approach"><SectionHead>The approach</SectionHead><div className="msc-chain">{['Understand','Align','Translate','Understand System','Structure','Design','Iterate'].map((s,i) => <span key={s}>{i > 0 && <i>→</i>}{s}</span>)}</div><div className="msc-timeline">{approach.map(([name,detail]) => <div className="msc-timeline-row" key={name}><h3>{name}</h3><p>{detail}</p></div>)}</div></section>

    <section className="msc-wrap msc-section msc-reveal" id="insights"><SectionHead>Key insights</SectionHead><p className="msc-intro">Research explored the pain points healthcare professionals experience across purchasing and inventory management workflows, with a focus on how they source pharmaceutical products and interact with suppliers. We looked at their needs, behaviors, and expectations throughout the procurement journey, gaining insights that were important for shaping the product experience and adapting the platform to the Nigerian market.</p><div className="msc-insight-frame"><div className="msc-insight-grid">{insights.map(text => <article key={text}>{text}</article>)}</div></div></section>

    <section className="msc-wrap msc-section msc-reveal" id="scope"><SectionHead>The scope</SectionHead><p className="msc-intro">To design a cohesive procurement experience, understanding how the ecosystem worked as a whole was essential. MSC serves multiple users across different procurement contexts. I designed experiences across mobile procurement, desktop procurement, buyer management, and platform administration.</p><div className="msc-scope-grid">{scopes.map(([n,t,b]) => <article key={n}><b className="msc-index">{n}</b><h3>{t}</h3><p>{b}</p></article>)}</div></section>

    <section className="msc-wrap msc-section msc-reveal" id="process"><SectionHead>Design process</SectionHead><p className="msc-intro">Rather than redesigning screens in isolation and immediately touching Figma, the process was driven by questions around usability, business requirements, localization, scalability, and the limitations of the existing platform. I constantly questioned how each part of the experience could work better — from how users discover and search for products to how they evaluate options, move through the procurement flow, complete purchases, and manage orders afterward.</p><div className="msc-questions">{questions.map((q,i) => <div key={q}><b>{String(i+1).padStart(2,'0')}</b><p>{q}</p></div>)}</div></section>

    <section className="msc-wrap msc-section msc-reveal" id="solution"><SectionHead>Solution</SectionHead><p className="msc-intro">The questions raised throughout the process became the foundation for the design decisions across the product. Each solution focused on removing friction, improving clarity, and making pharmaceutical procurement more efficient.</p>
      <div className="msc-solution-pair"><div className="msc-visual"><img src={productImage.url} alt="Mobile product detail screen showing compliance details for a pharmaceutical product" loading="lazy"/></div><div className="msc-solution-copy"><article><h4>Simplifying Product Discovery</h4><p>Improved search, categories, filters, and product organization to help pharmacies find products faster and navigate large catalogs more efficiently.</p></article><article><h4>Improving Product Evaluation</h4><p>Structured essential product, manufacturer, supplier, pricing, availability, and regulatory information so users could make more informed purchasing decisions.</p></article></div></div>
      <div className="msc-flow"><p><b>Streamlining Procurement Flows.</b> Simplified the journey from product discovery to cart, checkout, payment, and order completion by reducing unnecessary steps and clarifying key actions.</p><div className="msc-visual"><img src={checkoutImage.url} alt="Desktop cart and mobile checkout screens showing order summary and payment" loading="lazy"/></div></div>
      <div className="msc-flow"><p><b>Connecting the Ecosystem.</b> Established consistent patterns, components, and interaction principles across H5, PC and Buyer Center while allowing each product to serve its specific users and purpose.</p><div className="msc-visual msc-photo"><img src={buyerImage.url} alt="Pharmacist using the Buyer Center dashboard on a desktop monitor" loading="lazy"/></div></div>
      <div className="msc-flow"><p><b>Improving Platform Operations.</b> Centralized key platform activities into a clearer operational workspace, making it easier for teams to manage products, suppliers, users, and orders while maintaining visibility across the marketplace.</p><div className="msc-visual"><img src={adminImage.url} alt="Admin product management table listing pharmaceutical products, prices, and stock" loading="lazy"/></div></div>
    </section>

    <section className="msc-wrap msc-section msc-reveal" id="lessons"><SectionHead>Lessons learnt</SectionHead><p className="msc-intro">Principles I'll carry into my next project.</p><div className="msc-lessons">{[
      'Complex projects come with layers of information, workflows, requirements, and constraints. Good design is about turning that complexity into clear, intuitive experiences that help users move forward with confidence.',
      'Asking questions, staying curious, listening to different perspectives, and communicating openly lead to better decisions. Great design rarely happens in isolation — it grows through collaboration, constructive feedback, and shared problem-solving.'
    ].map((text,i) => <article key={text}><b className="msc-index">0{i+1}</b><p>{text}</p></article>)}</div></section>
    <footer className="msc-footer">Medicare Supply Chain · Product case study · 2026</footer>
  </main>;
};
export default MscCaseStudy;
