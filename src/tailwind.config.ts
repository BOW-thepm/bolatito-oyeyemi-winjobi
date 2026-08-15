
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Feminine brand colors
				'deep-purple': {
					DEFAULT: '#7B4FB8',
					50: '#F4F0F9',
					100: '#EAE2F2',
					200: '#D4C5E6',
					300: '#BBA5D8',
					400: '#9B7AC8',
					500: '#7B4FB8',
					600: '#6A3FA3',
					700: '#592F8E',
					800: '#481F79',
					900: '#370F64'
				},
				'powder-blue': {
					DEFAULT: '#AEC6CF',
					50: '#F2F6F8',
					100: '#E5EDF1',
					200: '#D8E4E9',
					300: '#CBDBE2',
					400: '#BED2DA',
					500: '#AEC6CF',
					600: '#9BB5BE',
					700: '#88A4AD',
					800: '#75939C',
					900: '#62828B'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'parallax': {
					'0%': {
						transform: 'translateY(0px)'
					},
					'100%': {
						transform: 'translateY(-10px)'
					}
				},
				'magnetic': {
					'0%': {
						transform: 'translateY(0) scale(1)'
					},
					'50%': {
						transform: 'translateY(-1px) scale(1.01)'
					},
					'100%': {
						transform: 'translateY(-2px) scale(1.02)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { 
						opacity: '0.5',
						transform: 'scale(1)' 
					},
					'50%': { 
						opacity: '0.8',
						transform: 'scale(1.05)' 
					}
				},
				'shimmer': {
					'0%': { 
						transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' 
					},
					'100%': { 
						transform: 'translateX(100%) translateY(100%) rotate(45deg)' 
					}
				},
				'reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': { 
						transform: 'translateY(0)' 
					},
					'50%': { 
						transform: 'translateY(-5px)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.4s ease-out',
				'parallax': 'parallax 20s ease-in-out infinite alternate',
				'magnetic': 'magnetic 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 4s ease-in-out infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite',
				'reveal': 'reveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
			},
			fontFamily: {
				'satoshi': ['Satoshi', 'sans-serif'],
			},
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
