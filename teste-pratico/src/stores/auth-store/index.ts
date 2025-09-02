import { defineStore } from 'pinia'

// sem persistência nenhuma
export const useAuthStore = defineStore('useAuth', {
  state: () => ({
    email: '' as string,
  }),
  actions: {
    setEmail(v: string) { this.email = v },
    clear() { this.email = '' }
  }
});

