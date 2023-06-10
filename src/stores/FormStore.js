import { defineStore } from 'pinia'

export const useFormStore = defineStore('formStore', {
    state: () => ({
      defaultStyleForContactForm: 'modern',
    }),
    actions: {
      setStyleForContactForm(style) {
        this.defaultStyleForContactForm = style
      },
      getDefaultStyleForContactForm() {
        return this.defaultStyleForContactForm
      },
    },
  })