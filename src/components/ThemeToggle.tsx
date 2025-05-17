
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
      className="rounded-full overflow-hidden relative"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ 
          rotateY: theme === "light" ? 0 : 180,
        }}
        transition={{ duration: 0.5 }}
      >
        {theme === "light" ? (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
