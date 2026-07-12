import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What kind of projects do you take on?',
    a: 'I focus on product design for web and mobile — SaaS dashboards, fintech, healthcare, e-commerce, and brand-driven marketing sites. If a problem is worth solving and the team is thoughtful, I want to hear about it.',
  },
  {
    q: 'How do you collaborate with Product Managers and Engineers?',
    a: 'Design is a team sport. I work closely with product managers to define requirements and success metrics while partnering with engineers throughout implementation to ensure designs are technically feasible and accurately translated into production. I stay involved beyond handoff through design QA and iteration.',
  },
  {
    q: 'What design principles guide your work?',
    a: 'I believe great products are built through intentional design decisions rather than visual trends. My work emphasizes usability, accessibility, scalability, clear information architecture, thoughtful interaction design, and systems thinking—ensuring every interface has purpose and every interaction feels natural.',
  },
  {
    q: 'Do you work with early-stage startups?',
    a: 'Yes — I love the zero-to-one phase. I help founders shape the product story, validate flows with real users, and ship a first version that feels considered rather than thrown together.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'A short brief about the problem, who it is for, and what success looks like. Existing assets, research, or a working prototype help but are not required. We figure out the rest together.',
  },
  {
    q: 'How do you measure whether a design is successful?',
    a: "Success isn't measured by aesthetics alone. I evaluate designs based on how effectively they solve user problems, reduce friction, improve task completion, support business objectives, and create experiences that users can navigate confidently with minimal effort.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="section-padding relative bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between border-b border-border pb-4 mb-16"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            (05) FAQ
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground hidden sm:block">
            Common questions
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
              Answers,{' '}
              <span className="italic font-light text-muted-foreground">
                before you ask
              </span>
              .
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-md">
              A few things I get asked most often. Don't see yours? Send it
              through the contact form.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-lg md:text-xl font-medium text-foreground hover:no-underline py-6">
                    <span className="flex items-baseline gap-4">
                      <span className="text-[10px] tracking-[0.2em] text-muted-foreground tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg leading-relaxed text-foreground/70 font-light pl-10 pr-4 pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
