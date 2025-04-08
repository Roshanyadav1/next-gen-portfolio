/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'blob-1': {
          '0%': { transform: 'translate(0)' },
          '30%': { transform: 'translate(-8rem, 10rem) rotate(10deg)' },
          '70%': { transform: 'translate(14rem, -8rem) rotate(15deg)' },
          '100%': { transform: 'translate(0)' },
        },
        'blob-2': {
          '0%': { transform: 'translate(0)' },
          '30%': { transform: 'translate(10rem, 12rem) rotate(8deg)' },
          '70%': { transform: 'translate(-10rem, -9rem) rotate(-10deg)' },
          '100%': { transform: 'translate(0)' },
        },
        'blob-3': {
          '0%': { transform: 'translate(0)' },
          '30%': { transform: 'translate(-10rem, 11rem) rotate(-10deg)' },
          '70%': { transform: 'translate(12rem, -8rem) rotate(12deg)' },
          '100%': { transform: 'translate(0)' },
        },
        'blob-4': {
          '0%': { transform: 'translate(0)' },
          '30%': { transform: 'translate(-9rem, -10rem) rotate(12deg)' },
          '70%': { transform: 'translate(13rem, -3rem) rotate(16deg)' },
          '100%': { transform: 'translate(0)' },
        },
        'blob-5': {
          '0%': { transform: 'translate(0)' },
          '30%': { transform: 'translate(9rem, -10rem) rotate(10deg)' },
          '70%': { transform: 'translate(-12rem, 8rem) rotate(-12deg)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        'blob-1': 'blob-1 6s ease-in-out infinite',
        'blob-2': 'blob-2 6s ease-in-out infinite',
        'blob-3': 'blob-3 6s ease-in-out infinite',
        'blob-4': 'blob-4 6s ease-in-out infinite',
        'blob-5': 'blob-5 6s ease-in-out infinite',
      },
    }
    
    // extend: {
    //   keyframes: {
    //     'blob-1': {
    //       '0%': { transform: 'translate(0)' },
    //       '30%': { transform: 'translate(-8rem, 10rem) rotate(10deg)' },
    //       '32%': { transform: 'translate(-8rem, 10rem) rotate(10deg)' },
    //       '70%': { transform: 'translate(14rem, -8rem) rotate(15deg)' },
    //       '72%': { transform: 'translate(14rem, -8rem) rotate(15deg)' },
    //       '100%': { transform: 'translate(0)' },
    //     },
    //     'blob-2': {
    //       '0%': { transform: 'translate(0)' },
    //       '30%': { transform: 'translate(10rem, 12rem) rotate(8deg)' },
    //       '32%': { transform: 'translate(10rem, 12rem) rotate(8deg)' },
    //       '70%': { transform: 'translate(-10rem, -9rem) rotate(-10deg)' },
    //       '72%': { transform: 'translate(-10rem, -9rem) rotate(-10deg)' },
    //       '100%': { transform: 'translate(0)' },
    //     },
    //     'blob-3': {
    //       '0%': { transform: 'translate(0)' },
    //       '30%': { transform: 'translate(-10rem, 11rem) rotate(-10deg)' },
    //       '32%': { transform: 'translate(-10rem, 11rem) rotate(-10deg)' },
    //       '70%': { transform: 'translate(12rem, -8rem) rotate(12deg)' },
    //       '72%': { transform: 'translate(12rem, -8rem) rotate(12deg)' },
    //       '100%': { transform: 'translate(0)' },
    //     },
    //     'blob-4': {
    //       '0%': { transform: 'translate(0)' },
    //       '30%': { transform: 'translate(-9rem, -10rem) rotate(12deg)' },
    //       '32%': { transform: 'translate(-9rem, -10rem) rotate(12deg)' },
    //       '70%': { transform: 'translate(13rem, -3rem) rotate(16deg)' },
    //       '72%': { transform: 'translate(13rem, -3rem) rotate(16deg)' },
    //       '100%': { transform: 'translate(0)' },
    //     },
    //     'blob-5': {
    //       '0%': { transform: 'translate(0)' },
    //       '30%': { transform: 'translate(9rem, -10rem) rotate(10deg)' },
    //       '32%': { transform: 'translate(9rem, -10rem) rotate(10deg)' },
    //       '70%': { transform: 'translate(-12rem, 8rem) rotate(-12deg)' },
    //       '72%': { transform: 'translate(-12rem, 8rem) rotate(-12deg)' },
    //       '100%': { transform: 'translate(0)' },
    //     },
    //   },
    //   animation: {
    //     'blob-1': 'blob-1 6s ease-in-out infinite',
    //     'blob-2': 'blob-2 6s ease-in-out infinite',
    //     'blob-3': 'blob-3 6s ease-in-out infinite',
    //     'blob-4': 'blob-4 6s ease-in-out infinite',
    //     'blob-5': 'blob-5 6s ease-in-out infinite',
    //   },
    // }
    // extend: {
    //   keyframes: {
    //     'blob-1': {
    //       '0%': { transform: 'translate(0)' },
    //       '30%': { transform: 'translate(-3.1252rem, 9.375rem) rotate(5deg)' },
    //       '32%': { transform: 'translate(-3.1252rem, 9.375rem) rotate(5deg)' },
    //       '70%': { transform: 'translate(12.5rem, -6.25rem) rotate(8deg)' },
    //       '72%': { transform: 'translate(12.5rem, -6.25rem) rotate(8deg)' },
    //       '100%': { transform: 'translate(0)' },
    //     },
    //     'blob-2': {
    //       '0%': { transform: 'translate(0)' },
    //       '30%': { transform: 'translate(4.5rem, 7.25rem) rotate(3deg)' },
    //       '32%': { transform: 'translate(4.5rem, 7.25rem) rotate(3deg)' },
    //       '70%': { transform: 'translate(-5.75rem, -6.25rem) rotate(-6deg)' },
    //       '72%': { transform: 'translate(-5.75rem, -6.25rem) rotate(-6deg)' },
    //       '100%': { transform: 'translate(0)' },
    //     },
    //     'blob-3': {
    //       '0%': { transform: 'translate(0)' },
    //       '30%': { transform: 'translate(-6.125rem, 6.75rem) rotate(-4deg)' },
    //       '32%': { transform: 'translate(-6.125rem, 6.75rem) rotate(-4deg)' },
    //       '70%': { transform: 'translate(6.25rem, -4.75rem) rotate(3deg)' },
    //       '72%': { transform: 'translate(6.25rem, -4.75rem) rotate(3deg)' },
    //       '100%': { transform: 'translate(0)' },
    //     },
    //     'blob-4': {
    //       '0%': { transform: 'translate(0)' },
    //       '30%': { transform: 'translate(-5.1252rem, -6.6rem) rotate(5deg)' },
    //       '32%': { transform: 'translate(-5.1252rem, -6.6rem) rotate(5deg)' },
    //       '70%': { transform: 'translate(9.375rem, -1.25rem) rotate(8deg)' },
    //       '72%': { transform: 'translate(9.375rem, -1.25rem) rotate(8deg)' },
    //       '100%': { transform: 'translate(0)' },
    //     },
    //     'blob-5': {
    //       '0%': { transform: 'translate(0)' },
    //       '30%': { transform: 'translate(4.625rem, -8.25rem) rotate(2deg)' },
    //       '32%': { transform: 'translate(4.625rem, -8.25rem) rotate(2deg)' },
    //       '70%': { transform: 'translate(-7.25rem, 5.5rem) rotate(-7deg)' },
    //       '72%': { transform: 'translate(-7.25rem, 5.5rem) rotate(-7deg)' },
    //       '100%': { transform: 'translate(0)' },
    //     },
    //   },
    //   animation: {
    //     'blob-1': 'blob-1 12s ease-in-out infinite',
    //     'blob-2': 'blob-2 14s ease-in-out infinite',
    //     'blob-3': 'blob-3 11s ease-in-out infinite',
    //     'blob-4': 'blob-4 15s ease-in-out infinite',
    //     'blob-5': 'blob-5 13s ease-in-out infinite',
    //   },
    // },
  },
  plugins: [],
};




