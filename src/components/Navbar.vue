<template>
  <nav class="bg-white border-gray-200 mx-auto max-w-3xl">
    <div class="flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center">
        <!-- <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 mr-3"
          alt="Embed Logo"
        /> -->
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Embed</span
        >
      </a>
      <div class="relative">
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
            src="https://res.cloudinary.com/dtinnnjnt/image/upload/v1686404578/embed-project/embed-user-profile_ldwinx.png"
            alt="user photo"
          />
        </button>
        <!-- Dropdown menu -->
        <!-- prettier-ignore -->
        <div
          class="z-10 absolute right-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
          :class="{ 'block': isOpen == true, 'hidden': isOpen == false }"
          id="user-dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900">{{user?.name || 'User'}}</span>
            <span class="block text-sm text-gray-500 truncate"
              >{{user?.email || 'user@user.com'}}</span
            >
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">         
            <li>
              <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" @click="handleSignout">
                Sign out
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { account } from '../api'

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    handleMenu() {
      this.isOpen = !this.isOpen
    },
    async handleSignout() {
      const currentSession = await account.getSession('current')
      console.log(currentSession)
      const promise = account.deleteSession(currentSession.$id)
      promise
        .then((res) => {
          console.log(res)
          this.$router.push('/')
        })
        .catch((e) => console.error(e))
    },
  },
}
</script>

<style></style>
