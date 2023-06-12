import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
    getUser() {
      return this.user
    },
    clearUser() {
      this.user = null
    },
    isAuthenticated() {
      if(this.getUser()) {
        return true
      }
      return false
    },
  },
})
