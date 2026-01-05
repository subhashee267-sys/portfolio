/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#050A30', // Deep Royal Blue
                accent: '#00FFFF', // Neon Blue
                secondary: '#101035', // Darker Blue
                textLight: '#E0E6ED',
                glass: 'rgba(255, 255, 255, 0.05)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Orbitron', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 10px #00FFFF', opacity: '1' },
                    '50%': { boxShadow: '0 0 20px #00FFFF', opacity: '0.8' },
                }
            }
        },
    },
    plugins: [],
}
