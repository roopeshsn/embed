<template>
  <Navbar :user="user" />
  <Container>
    <div class="p-4 bg-yellow-200 rounded-lg mt-4">
      <h1>
        Build and embed forms instantly in your website using
        <span class="font-medium">Embed</span>!
      </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
      <router-link to="/contact-form-builder">
        <div
          class="bg-white shadow hover:shadow-md p-4 rounded-lg flex justify-between items-center cursor-pointer"
        >
          <div>
            <h5>Contact Form</h5>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        </div>
      </router-link>
      <router-link to="/feedback-form-builder">
        <div
          class="bg-white shadow hover:shadow-md p-4 rounded-lg flex justify-between items-center cursor-pointer"
        >
          <div>
            <h5>Feedback Form</h5>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        </div>
      </router-link>
      <router-link to="/emoji-form-builder">
        <div
          class="bg-white shadow hover:shadow-md p-4 rounded-lg flex justify-between items-center cursor-pointer"
        >
          <div>
            <h5>Emoji Form</h5>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        </div>
      </router-link>
      <router-link to="/comment-section-builder">
        <div
          class="bg-white shadow hover:shadow-md p-4 rounded-lg flex justify-between items-center cursor-pointer"
        >
          <div>
            <h5>Comment Section</h5>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        </div>
      </router-link>
    </div>
  </Container>
  <Footer class="mt-[40vh]" />
</template>
<script>
import Navbar from './Navbar.vue'
import Container from './Container.vue'
import Footer from './Footer.vue'
import { useAuthStore } from '../stores/AuthStore'
import { account } from '../api'
export default {
  components: {
    Navbar,
    Container,
    Footer,
  },
  data() {
    return {
      user: {},
    }
  },
  async mounted() {
    await this.handleAuth()
  },
  methods: {
    async handleAuth() {
      const auth = useAuthStore()
      try {
        const user = await account.get()
        auth.setUser(user)
        this.user = user
        // console.log(user)
      } catch (e) {
        console.log('Error getting Account', e)
      }
    },
  },
}
</script>
