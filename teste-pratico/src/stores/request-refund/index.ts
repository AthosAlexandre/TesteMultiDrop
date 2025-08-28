import { defineStore } from 'pinia'

export const useRefundRequest = defineStore('refund', {
  state: () => ({
    email: '' as string,
  }),
  actions: {
    setEmail(v: string) { this.email = v },
    clear() { this.email = '' }
  },
  persist: {
    storage: localStorage,
    paths: ['email']
  }
})
