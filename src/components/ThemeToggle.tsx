
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  // Animation variants
  const toggleVariants = {
    dark: { 
      rotate: 360,
      backgroundColor: "rgba(30, 41, 59, 0.8)", 
      borderColor: "rgba(148, 163, 184, 0.3)" 
    },
    light: { 
      rotate: 0,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderColor: "rgba(148, 163, 184, 0.3)"
    }
  };
  
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: { opacity: 1, scale: 1, rotate: 0 }
  };

  return (
    <motion.button
      variants={toggleVariants}
      animate={isDark ? "dark" : "light"}
      initial={false}
      transition={{ duration: 0.5 }}
      className="relative h-10 w-10 rounded-full border flex items-center justify-center backdrop-blur-sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Sun Icon */}
      <motion.div
        initial="hidden"
        animate={!isDark ? "visible" : "hidden"}
        variants={iconVariants}
        transition={{ duration: 0.5 }}
        className="absolute"
      >
        <Sun className="h-5 w-5 text-amber-500" />
      </motion.div>
      
      {/* Moon Icon */}
      <motion.div
        initial="hidden"
        animate={isDark ? "visible" : "hidden"}
        variants={iconVariants}
        transition={{ duration: 0.5 }}
        className="absolute"
      >
        <Moon className="h-5 w-5 text-indigo-300" />
      </motion.div>
      
      {/* Background glow effect */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        animate={{ 
          boxShadow: isDark 
            ? "0 0 10px 2px rgba(99, 102, 241, 0.3)" 
            : "0 0 10px 2px rgba(251, 191, 36, 0.3)"
        }}
      />
      
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
