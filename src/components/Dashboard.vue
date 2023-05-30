<template>
  <Navbar />
  <Container>
    <div class="border-b-2 border-solid border-zinc-200">
      <div class="my-4">
        <p class="text-md text-gray-400">
          Choose the design of the contact form (Modern is default).
        </p>
        <div class="mt-2 flex">
          <button class="px-12 py-4 bg-slate-200 rounded-md mr-8">
            Modern
          </button>
          <button class="px-12 py-4 bg-slate-200 rounded-md">
            Materialistic
          </button>
        </div>
      </div>
    </div>
    <section class="bg-white">
      <div class="mt-4">
        <span
          class="bg-yellow-100 float-left text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 border border-yellow-400"
        >
          Preview
        </span>
        <span class="text-gray-400 text-sm float-right">Powered by Stitch</span>
      </div>
      <div class="py-4 lg:py-8 mx-auto">
        <input
          class="my-4 w-full text-4xl tracking-tight font-extrabold text-center text-gray-900 hover:border-2 hover:border-dashed hover:border-gray-400"
          :value="formHeader"
          @change="handleFormHeaderChange"
        />
        <input
          class="mb-8 w-full lg:mb-16 font-light text-center text-gray-500 sm:text-xl hover:border-2 hover:border-dashed hover:border-gray-400"
          :value="formSubHeader"
          @change="handleFormSubHeaderChange"
        />
        <form action="#" class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Your email</label
            >
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Your message</label
            >
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
    <div
      class="container mx-auto max-w-3xl border-t-2 border-solid border-zinc-200"
    >
      <button class="px-4 py-2 bg-black text-white rounded-md my-4">
        Deploy and get link
      </button>
    </div>
  </Container>
</template>

<script>
import Container from './Container.vue'
import CenteredContainer from './CenteredContainer.vue'
import Navbar from './Navbar.vue'

export default {
  components: {
    CenteredContainer,
    Container,
    Navbar,
  },
  data() {
    return {
      formHeader: 'Contact Us',
      formSubHeader:
        'Got a technical issue? Want to send feedback about a beta feature? Let us know.',
    }
  },
  methods: {
    handleFormHeaderChange(e) {
      this.formHeader = e.target.value
    },
    handleFormSubHeaderChange(e) {
      this.formSubHeader = e.target.value
    },
  },
}
</script>
