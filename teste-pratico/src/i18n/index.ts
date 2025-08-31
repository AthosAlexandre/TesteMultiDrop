import { createI18n } from 'vue-i18n'
import ptBR from './locales/pt-BR.json'
import en from './locales/en.json'
import de from './locales/de.json'

export type Locale = 'pt-BR' | 'en' | 'de'

function getStartLocale(): Locale {
  const saved = localStorage.getItem('locale') as Locale | null
  if (saved === 'pt-BR' || saved === 'en' || saved === 'de') return saved

  const lang = navigator.language.toLowerCase()
  if (lang.startsWith('pt')) return 'pt-BR'
  if (lang.startsWith('de')) return 'de'
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getStartLocale(),
  fallbackLocale: 'en',
  messages: { 'pt-BR': ptBR, en, de },
})

export default i18n
