
import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle configuration
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(100, window.innerWidth / 10);
    
    // Colors based on theme
    const particleBaseColor = theme === 'dark' 
      ? { r: 180, g: 180, b: 255 } // Blue-ish for dark mode
      : { r: 255, g: 230, b: 200 }; // Warm gold for light mode

    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle(
        canvas.width, 
        canvas.height, 
        particleBaseColor
      ));
    }

    let animationFrameId: number;
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw(ctx);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].setCanvasDimensions(canvas.width, canvas.height);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10 opacity-30"
    />
  );
};

// Particle class
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  canvasWidth: number;
  canvasHeight: number;
  color: { r: number, g: number, b: number };
  alpha: number;
  
  constructor(
    canvasWidth: number, 
    canvasHeight: number, 
    baseColor: { r: number, g: number, b: number }
  ) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.color = {
      r: baseColor.r + Math.random() * 20 - 10,
      g: baseColor.g + Math.random() * 20 - 10,
      b: baseColor.b + Math.random() * 20 - 10
    };
    this.alpha = Math.random() * 0.5 + 0.1;
  }
  
  setCanvasDimensions(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.x > this.canvasWidth) this.x = 0;
    else if (this.x < 0) this.x = this.canvasWidth;
    
    if (this.y > this.canvasHeight) this.y = 0;
    else if (this.y < 0) this.y = this.canvasHeight;
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
    ctx.fill();
  }
}

export default ParticleBackground;
