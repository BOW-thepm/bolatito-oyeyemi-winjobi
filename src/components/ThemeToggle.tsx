
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <Button
      variant="outline"
      size="icon"
      className={`rounded-full border-designer-soft-lilac/40 relative overflow-hidden ${
        theme === "light" 
          ? "bg-designer-lavender-mist/80 hover:bg-designer-soft-lilac/30" 
          : "bg-designer-deep-space/80 hover:bg-designer-electric-violet/20"
      }`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          backgroundColor: theme === "light" 
            ? "rgba(217, 191, 255, 0.1)" 
            : "rgba(108, 56, 255, 0.1)"
        }}
      />
      
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          boxShadow: theme === "light" 
            ? "inset 0 0 0px rgba(217, 191, 255, 0)" 
            : "inset 0 0 5px rgba(162, 89, 255, 0.5)"
        }}
      />
      
      <motion.div
        className="relative z-10"
        initial={false}
        animate={{ 
          rotateZ: theme === "light" ? 0 : 180,
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {theme === "light" ? (
          <Moon className="h-[1.2rem] w-[1.2rem] text-designer-deep-space" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] text-designer-soft-lilac" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
