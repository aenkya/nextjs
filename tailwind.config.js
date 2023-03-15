const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111'
        },
        beige: {
          50: '#F9F8F2',
          100: '#E5E2C7',
          200: '#D1CDA3',
          300: '#BDB77F',
          400: '#aaab95',
          500: '#9fa07e',
          600: '#55563e',
          700: '#696E00',
          800: '#535600',
          900: '#3D3E00'
        }
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...fontFamily.sans]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700')
              },
              code: { color: theme('colors.blue.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            thead: {
              borderBottomColor: theme('colors.gray.200')
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.beige.100'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600')
              },
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.beige.100'),
              color: theme('colors.beige.100')
            },
            code: {
              color: theme('colors.pink.500')
            },
            'h1,h2,h3,h4': {
              color: theme('colors.beige.100'),
              'scroll-margin-top': spacing[32]
            },
            hr: { borderColor: theme('colors.beige.100') },
            ol: {
              li: {
                '&:before': { color: theme('colors.beige.200') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.beige.200') }
              }
            },
            strong: { color: theme('colors.beige.300') },
            thead: {
              th: {
                color: theme('colors.beige.100')
              },
              borderBottomColor: theme('colors.beige.200')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.beige.200')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
