
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Heart, Sparkles, ThumbsUp, Zap } from 'lucide-react';

interface LiaAssistantProps {
  onMessageClick: () => void;
  showCelebration: boolean;
  onCelebrationComplete: () => void;
}

const LiaAssistant = ({ onMessageClick, showCelebration, onCelebrationComplete }: LiaAssistantProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onAnimationComplete={onCelebrationComplete}
            className="absolute -top-12 -right-4 flex space-x-2"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 0.8 }}
            >
              <ThumbsUp className="h-6 w-6 text-deep-purple-500" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Heart className="h-5 w-5 text-deep-purple-400" />
            </motion.div>
            <motion.div
              animate={{ 
                rotate: [0, -20, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Sparkles className="h-5 w-5 text-deep-purple-300" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative"
        animate={{ 
          y: [0, -8, 0],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Speech bubble */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 10 }}
              className="absolute -top-16 right-full mr-4 bg-white/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-2xl shadow-lg border border-deep-purple-300/20 whitespace-nowrap"
            >
              <div className="text-sm font-medium">Hi! I'm LIA ✨</div>
              <div className="text-xs text-muted-foreground">Click to send a message!</div>
              <div className="absolute top-1/2 -right-2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white/95 transform -translate-y-1/2"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LIA Avatar */}
        <motion.button
          onClick={onMessageClick}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative w-16 h-16 bg-deep-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ 
              rotate: isHovered ? [0, 10, -10, 0] : 0,
            }}
            transition={{ duration: 0.6 }}
          >
            <MessageCircle className="h-7 w-7 text-white" />
          </motion.div>
          
          {/* Magical sparkle effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              background: [
                'radial-gradient(circle, rgba(91,46,145,0.3) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(155,124,194,0.3) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(91,46,145,0.3) 0%, transparent 70%)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-deep-purple-400/30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LiaAssistant;
