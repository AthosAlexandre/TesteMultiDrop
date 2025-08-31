import { defineStore } from 'pinia'

export const useAuthStore = defineStore('useAuth', {
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
});
