import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  description: string;
}

const skills: Skill[] = [
  { name: 'UI Design', level: 90, description: 'Expert' },
  { name: 'UX Research', level: 85, description: 'Advanced' },
  { name: 'Prototyping', level: 88, description: 'Expert' },
  { name: 'Visual Design', level: 92, description: 'Expert' },
  { name: 'User Testing', level: 80, description: 'Skilled' },
  { name: 'Wireframing', level: 95, description: 'Expert' },
];

const SkillBars = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const el = document.getElementById('skills-section');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills-section" className="divide-y divide-border border-y border-border">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.06, duration: 0.5 }}
          className="grid grid-cols-12 items-center gap-4 py-5 group"
        >
          <div className="col-span-5 md:col-span-3 text-base md:text-lg font-medium text-foreground">
            {skill.name}
          </div>
          <div className="col-span-2 md:col-span-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            {skill.description}
          </div>
          <div className="col-span-3 md:col-span-6 h-px bg-border relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-foreground"
              initial={{ width: 0 }}
              animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="col-span-2 md:col-span-1 text-right text-sm tabular-nums text-muted-foreground">
            {skill.level}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillBars;
