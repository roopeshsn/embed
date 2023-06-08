<template>
  <nav class="bg-white border-gray-200">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="/" class="flex items-center">
        <!-- <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 mr-3"
          alt="Embed Logo"
        /> -->
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Stitch</span
        >
      </a>
      <div class="flex items-center md:order-2">
        <button
          type="button"
          @click="handleMenu"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="w-8 h-8 rounded-full"
            src="/docs/images/people/profile-picture-3.jpg"
            alt="user photo"
          />
        </button>
        <!-- Dropdown menu -->
        <!-- prettier-ignore -->
        <div
          class="z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
          :class="{ 'block': isOpen == true, 'hidden': isOpen == false }"
          id="user-dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900">{{user?.name}}</span>
            <span class="block text-sm text-gray-500 truncate"
              >{{user?.email}}</span
            >
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Profile</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from '../stores/AuthStore'

export default {
  data() {
    const auth = useAuthStore()
    let user = auth.getUser()
    return {
      user,
      isOpen: false,
    }
  },
  methods: {
    handleMenu() {
      this.isOpen = !this.isOpen
    },
  },
  watch: {
    user(newUser, oldUser) {
      if (newUser) {
        return auth.getUser()
      }
    },
  },
}
</script>

<style></style>
