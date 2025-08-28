import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import i18n from './i18n'
import Aura from '@primeuix/themes/aura';
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'class',
    },
  },
})
document.documentElement.classList.remove('dark')
app.use(i18n);
app.use(pinia);
app.use(router);
app.mount('#app')
