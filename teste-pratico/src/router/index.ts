// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import i18n from '@/i18n'

type Locale = 'pt-BR' | 'en' | 'de'

function normalizeLang(seg?: string): Locale | undefined {
  if (!seg) return
  const s = seg.toLowerCase()
  if (s === 'pt' || s === 'pt-br') return 'pt-BR'
  if (s === 'en') return 'en'
  if (s === 'de') return 'de'
  return undefined
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:lang(pt|pt-BR|en|de)?',
      component: () => import('@/layout/default-layout/DefaultLayout.vue'),
      children: [
        { 
          path: '', 
          name: 'request-refund', 
          component: () => import('@/views/request-refund/RequestRefundView.vue') 
        },
        { 
          path: 'your-purchases',
          name: 'your-purchases', 
          component: () => import('@/views/your-purchases/YourPurchasesView.vue') 
        },
        { 
          path: 'refund-form',
          name: 'refund-form', 
          component: () => import('@/views/refund-form/RefundFormView.vue') 
        },
      ],
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: { template: '<div>404</div>' } },
  ],
})

router.beforeEach((to, _from, next) => {
  const seg = to.params.lang as string | undefined
  const paramLang = normalizeLang(seg)
  const current = i18n.global.locale.value as Locale

  if (!paramLang) {
    const saved = (localStorage.getItem('locale') as Locale) || current
    return next({ params: { ...to.params, lang: saved }, query: to.query, hash: to.hash, replace: true })
  }

  if (paramLang !== current) {
    i18n.global.locale.value = paramLang
    localStorage.setItem('locale', paramLang)
    document.documentElement.lang = paramLang.startsWith('pt') ? 'pt' : paramLang
  }
  next()
})

export default router
