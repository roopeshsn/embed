import { defineStore } from 'pinia'
import { account } from '../api';

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
  },
})
