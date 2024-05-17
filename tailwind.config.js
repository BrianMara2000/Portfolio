/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#010233",
        secondary: "#B78DFF",
        vivid: "#A571FF",
        card: '#f2f2f2',
        icon: 'rgb(44, 44, 44)'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        navLinkFade: {
          '0%': {
            opacity: '0',
            transform: 'translateX(500px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        projectFadeIn: {
          '0%': {
            opacity: '0',
            top: '0',
          },
          '100%': {
            opacity: '1',
            top: '70px',
          }
        },
        iconSlideXs: {
          '0%' : {
            border: '3px solid #e6d12e',
            left: '32px',
          },
          '25%' : {
            border: '3px solid #e6d12e',
            left: '32px',
          },
          '50%' : {
            border: '3px solid #c40101',
            left: '139px'
          },
          '75%' : {
            border: '3px solid #ffffff',
            left: '245px',
          },
          '100%' : {
            border: '3px solid #47ea15',
            left: '350px'
          }
        },
        iconSlideSm: {
          '25%' : {
            border: '3px solid #e6d12e',
            left: '0px',
          },
          '50%' : {
            border: '3px solid #c40101',
            left: '90px'
          },
          '75%' : {
            border: '3px solid #ffffff',
            left: '180px',
          },
          '100%' : {
            border: '3px solid #47ea15',
            left: '270px'
          }
        },
        iconSlide: {
          '25%' : {
            border: '3px solid #e6d12e',
            left: '0px',
          },
          '50%' : {
            border: '3px solid #c40101',
            left: '107px'
          },
          '75%' : {
            border: '3px solid #ffffff',
            left: '213px',
          },
          '100%' : {
            border: '3px solid #47ea15',
            left: '320px'
          }
        },
        slideInTop: {
          '0%' : {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%' : {
            transform: 'translateY(0)',
            opacity: '1',
          }
        }
      },
      animation: {
        navLinkFade: 'navLinkFade 0.5s ease forwards',
        fadeIn: 'projectFadeIn 1s ease forwards',
        iconSlideXs: 'iconSlideXs 5s ease infinite alternate',
        iconSlideSm: 'iconSlideSm 5s ease infinite alternate',
        iconSlide: 'iconSlide 5s ease infinite alternate',
        slideInTop: 'slideInTop 0.5s both'
      },
      boxShadow: {
        'contact': '1px 8px 2px rgba(255, 255, 255, 0.2)'
      },
      transitionTimingFunction: {
        'card': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

