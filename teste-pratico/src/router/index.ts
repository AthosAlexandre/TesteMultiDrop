import { createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/request-refund/RequestRefundView.vue'),
    children:[
      {
        path: '/',
        name: 'request-refund',
        component: () => import('../views/request-refund/RequestRefundView.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
})

export default router
