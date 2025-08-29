import { createRouter, createWebHistory } from 'vue-router'
import RequestRefundView from '../views/request-refund/RequestRefundView.vue'
import YourPurchasesView from '../views/your-purchases/YourPurchasesView.vue'

const routes = [
  { path: '/', name: 'request-refund', component: RequestRefundView },
  { path: '/your-purchases', name: 'your-purchases', component: YourPurchasesView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router