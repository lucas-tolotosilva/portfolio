/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: 'Poppins, sans-serif',
        title: 'Bebas Neue, sans-serif'
      },
      fontSize: {
        //lg: '11rem', 
        //sm: '1.5rem'
      },
      colors: {
        black: {
          100: 'rgba(0, 0, 0, 0.56)',
          900: '#1D1D1D',
        }, 
        purple: {
          50: 'rgba(153, 51, 153, 0.2)',
          100: '#993399'
          
        },
        blue: {
          100: '#327199',
          200: '#007bff' 
        },
        yellow: {
          700: '#f39c12',
        },
        transparent: {
          100: 'rgba(255, 255, 255, 0.01)',
          200: 'rgba(255, 255, 255, 0.09)'
        },
        gray: {
          200: '#BBBBBB',
          400: '#C0C0C0',
          800: '#696969'
        },
        white: {
          50: 'rgba(255, 255, 255, 0.3)',
          80: 'rgba(255, 255, 255, 0.5)',
          90: 'rgba(255, 255, 255, 0.7)',
          100: '#ffffff',
          150: '#fafafa',
          200: 'rgba(250, 250, 250, 0.5)'
        } 
      },
      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }
  
        'md': '760px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      },
      backgroundImage: {
        videoDesktop: "url('/videobg.mp4')",
        videoMobile:  "url('/videobg-mobile.mp4')",
        //'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'radial-blue': 'radial-gradient(circle, rgba(50,113,153,0.9) 0%, rgba(50,113,153,0.1) 49%, rgba(50,113,153,0) 79%)',
        'radial-purple': 'radial-gradient(circle, rgba(153,51,153,0.48) 0%, rgba(50,113,153,0.06486344537815125) 49%, rgba(50,113,153,0) 79%)',
        
       },
      animation: {
        'slow-anim1': 'myAnim 15s ease-in-out infinite',
        'slow-anim2': 'myAnim 12s ease-in-out infinite',
        'slow-anim3': 'myAnim 16s ease-in-out infinite',
        'slow-anim4': 'myAnim 20s ease-in-out infinite',
        'slow-anim5': 'myAnim 25s ease-in-out infinite',
        'slow-anim6': 'myAnim 18s ease-in-out infinite',
      },
      
      boxShadow: {
        'box': 'box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2)',
        
      },
      blur: {
        'tt': '2px',
        'jj': '6px'
      }
    },
  },
  plugins: [],
}

