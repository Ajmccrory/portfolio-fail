import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VApp, VAppBar, VAppBarNavIcon, VMain, VContainer, VBtn, VIcon, VAvatar, VImg, VCard, VCardTitle, VCardText, VSpacer } from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components: {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VMain,
    VContainer,
    VBtn,
    VIcon,
    VAvatar,
    VImg,
    VCard,
    VCardTitle,
    VCardText,
    VSpacer
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#3A3C3A',
          secondary: '#2A2A2A',
          background: '#2A2A2A',
          surface: '#3A3C3A',
        }
      }
    }
  }
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
