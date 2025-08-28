import { createI18n } from 'vue-i18n'
import ptBR from './locales/pt-BR.json'
import en from './locales/en.json'

export type Locale = 'pt-BR' | 'en'

function getStartLocale(): Locale {
  const saved = localStorage.getItem('locale') as Locale | null
  if (saved === 'pt-BR' || saved === 'en') return saved
  return navigator.language.startsWith('pt') ? 'pt-BR' : 'en'
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getStartLocale(),
  fallbackLocale: 'en',
  messages: { 'pt-BR': ptBR, en },
})

export default i18n
