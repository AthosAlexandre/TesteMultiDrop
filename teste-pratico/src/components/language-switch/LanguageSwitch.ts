import { useRoute, useRouter } from 'vue-router'

type Locale = 'pt-BR' | 'en' | 'de'

export function useLangSwitcher() {
  const route = useRoute()
  const router = useRouter()

  function setLang(lang: Locale, replace = true) {
    const method = replace ? router.replace : router.push
    return method({
      name: route.name as string,         
      params: { ...route.params, lang },    
      query: route.query,                   
      hash: route.hash,                     
    })
  }

  return { setLang }
}