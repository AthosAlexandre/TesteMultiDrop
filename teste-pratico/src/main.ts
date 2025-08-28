import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import i18n from './i18n'
import Aura from '@primeuix/themes/aura';
import 'primeflex/primeflex.css'

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'class',
    },
  },
})
app.use(i18n);
app.mount('#app')
