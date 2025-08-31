import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layout/default-layout/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'request-refund',
          component: () => import('@/views/request-refund/RequestRefundView.vue'),
        },
        {
          path: 'your-purchases',
          name: 'your-purchases',
          component: () => import('@/views/your-purchases/YourPurchasesView.vue'),
        },
        {
          path: 'refund-form',
          name: 'refund-form',
          component: () => import('@/views/refund-form/RefundFormView.vue'),
        },
      ],
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: { template: '<div>404</div>' } },
  ],
})

export default router
