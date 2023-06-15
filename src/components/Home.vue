<template>
  <Container>
    <div
      class="min-h-screen flex flex-col justify-center items-center p-4 text-center"
    >
      <h1 class="text-3xl">EMBED</h1>
      <h2 class="text-2xl text-zinc-500 mt-2">A low-code tool!</h2>
      <h3 class="text-xl mt-4">
        Create and embed contact and feedback forms instantly to your
        application using iframe!
      </h3>
      <div class="flex gap-2 my-4">
        <button
          v-if="user == null"
          type="button"
          @click="loginWithOAuth('google')"
          class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            class="w-4 h-4 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </button>
        <router-link v-else to="/dashboard">
          <button
            type="button"
            class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            Dashboard
          </button>
        </router-link>
      </div>
    </div>
  </Container>
  <Footer />
</template>

<script>
import { account } from '../api'
import Container from './Container.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Container,
    Footer,
  },
  data() {
    return {
      user: null,
    }
  },
  mounted() {
    this.getCurrentUser()
  },
  methods: {
    async loginWithOAuth(provider) {
      try {
        await account.createOAuth2Session(
          provider,
          'http://localhost:5173/dashboard',
          'http://localhost:5173/'
        )
      } catch (error) {
        console.error('Failed to initiate OAuth login', error)
      }
    },
    async getCurrentUser() {
      const user = await account.get()
      this.user = user
      // console.log(this.user)
    },
  },
}
</script>
