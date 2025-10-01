/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'system',
    themes: [
      {
        dark: false,
        colors: {
          background: 'hsl(0 0% 6% )',
          foreground: 'hsl(0 0% 95%)',
          silver: 'hsl(0 0% 75%)',
          platinum: 'hsl(220 10% 85%)',
          graphite: 'hsl(220 8% 25%)',
          charcoal: 'hsl(220 10% 15%)',
          'gradient-primary': 'linear-gradient(135deg, hsl(0 0% 6%) 0%, hsl(220 10% 15%) 50%, hsl(0 0% 8%) 100%)',
          'gradient-metalic': 'linear-gradient(135deg, hsl(220 10% 85%) 0%, hsl(0 0% 75%) 50%, hsl(220 10% 85%) 100%)' ,
          'gradient-glass': 'linear-gradient(135deg, hsla(0 0% 100% / 0.05) 0%, hsla(0 0% 100% / 0.02) 100%)',

        },
        variables: {
          'container-max-width': '1400px',
          'border-radius': '0.75rem',
          'shadow-elegant': '0 25px 50px -12px rgba(0,0,0,0.25)',
          'shadow-glow': '0 0 40px rgba(0,0,0,0.15)',
          'blur-glass': '20px',
          'padding-default': '2rem'
        },
        defaults: {
          VContainer: {
            maxWidth: '1400px',
            class: 'pa-8', // 2rem ~ pa-8 no Vuetify
          },
          VCard: {
            rounded: 'lg', // mapeia p/ 0.75rem se ajustar no theme
            elevation: 4,
          },
        },
      },
      
    ]
  },
})
