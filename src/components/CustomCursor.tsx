
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type CursorVariant = 'default' | 'button' | 'text' | 'link';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeave = () => {
      setIsVisible(false);
    };

    const mouseEnter = () => {
      setIsVisible(true);
    };

    const handleInteractiveElements = () => {
      // Track hover on interactive elements
      const buttons = document.querySelectorAll('button, .interactive, a');
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
      const links = document.querySelectorAll('a');

      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => setCursorVariant('button'));
        button.addEventListener('mouseleave', () => setCursorVariant('default'));
      });

      textElements.forEach(text => {
        text.addEventListener('mouseenter', () => setCursorVariant('text'));
        text.addEventListener('mouseleave', () => setCursorVariant('default'));
      });

      links.forEach(link => {
        link.addEventListener('mouseenter', () => setCursorVariant('link'));
        link.addEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseleave', mouseLeave);
    document.addEventListener('mouseenter', mouseEnter);
    
    // Apply after a delay to ensure DOM elements are loaded
    setTimeout(handleInteractiveElements, 1000);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', mouseLeave);
      document.removeEventListener('mouseenter', mouseEnter);
    };
  }, [isVisible]);

  const variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'rgba(108, 56, 255, 0)',
      border: '1.5px solid rgba(108, 56, 255, 0.5)',
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    button: {
      height: 40,
      width: 40,
      backgroundColor: 'rgba(108, 56, 255, 0.1)',
      border: '1.5px solid rgba(108, 56, 255, 0.8)',
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    text: {
      height: 64,
      width: 64,
      backgroundColor: 'rgba(108, 56, 255, 0.05)',
      border: '1px solid rgba(108, 56, 255, 0.3)',
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
    link: {
      height: 40,
      width: 40,
      backgroundColor: 'rgba(108, 56, 255, 0.2)',
      border: '2px solid rgba(108, 56, 255, 1)',
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 20
  };

  // Only show custom cursor on non-touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={spring}
      />
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full bg-primary"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: cursorVariant === 'default' ? 1 : 1.2,
        }}
        style={{ 
          height: 8, 
          width: 8 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 25,
          opacity: { duration: 0.2 }
        }}
      />
    </>
  );
};

export default CustomCursor;
