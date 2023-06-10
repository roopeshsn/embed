<template>
  <Navbar user />
  <Container>
    <div
      class="text-sm font-medium text-center text-gray-500 border-b border-gray-200"
    >
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
          <button
            class="inline-block pl-0 pr-4 py-4 rounded-t-lg"
            :class="{
              'text-blue-600 border-blue-600 border-b-2 ':
                currentTab == 'customize',
              'border-transparent hover:text-gray-600 hover:border-gray-300':
                currentTab != 'customize',
            }"
            @click="handleTab('customize')"
          >
            Customize
          </button>
        </li>
        <li class="mr-2">
          <button
            class="inline-block pl-0 pr-4 py-4 rounded-t-lg"
            :class="{
              'text-blue-600 border-blue-600 border-b-2 ':
                currentTab == 'responses',
              'border-transparent hover:text-gray-600 hover:border-gray-300':
                currentTab != 'responses',
            }"
            @click="handleTab('responses')"
          >
            Responses
          </button>
        </li>
        <li class="mr-2">
          <button
            class="inline-block pl-0 pr-4 py-4 rounded-t-lg"
            :class="{
              'text-blue-600 border-blue-600 border-b-2 ':
                currentTab == 'settings',
              'border-transparent hover:text-gray-600 hover:border-gray-300':
                currentTab != 'settings',
            }"
            @click="handleTab('settings')"
          >
            Settings
          </button>
        </li>
      </ul>
    </div>
    <div v-if="currentTab == 'customize'">
      <div class="border-b-2 border-solid border-zinc-200">
        <div class="my-4">
          <p class="text-md text-gray-400">
            Choose the design of the contact form (Modern is default).
          </p>
          <div class="mt-2 flex">
            <button
              ref="designButton"
              class="px-12 py-4 bg-blue-100 rounded-md mr-8 focus:ring-2 focus:border-blue-700"
              :class="{
                'border-blue-700': contactFormStyle == 'modern',
              }"
              @click="handleContactFormStyle('modern')"
            >
              Modern
            </button>
            <button
              class="px-12 py-4 bg-blue-100 rounded-md focus:ring-2 focus:border-blue-700"
              :class="{ 'border-blue-700': contactFormStyle == 'material' }"
              @click="handleContactFormStyle('material')"
            >
              Materialistic
            </button>
          </div>
        </div>
      </div>
      <section class="bg-white">
        <div class="mt-4">
          <span
            class="bg-yellow-100 float-left text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-yellow-400"
          >
            Preview
          </span>
          <span class="text-gray-400 text-sm float-right"
            >Powered by Stitch</span
          >
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
            <div
              class="relative flex flex-col"
              :class="{
                'z-0 w-full mb-6 group': contactFormStyle == 'material',
              }"
            >
              <input
                type="text"
                id="name"
                :class="{
                  'text-sm border bg-gray-50 border-gray-300 text-gray-900 shadow-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 order-2':
                    contactFormStyle == 'modern',
                  'block border-0 border-b-2 bg-gray-50 border-gray-300 text-gray-900 bg-transparent py-2.5 px-0 w-full appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer':
                    contactFormStyle == 'material',
                }"
                placeholder=" "
                required
              />
              <label
                for="name"
                :class="{
                  'block mb-2 text-sm font-medium text-gray-900 order-1':
                    contactFormStyle == 'modern',
                  'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6':
                    contactFormStyle == 'material',
                }"
                >First name</label
              >
            </div>

            <div
              class="relative flex flex-col"
              :class="{
                'z-0 w-full mb-6 group': contactFormStyle == 'material',
              }"
            >
              <input
                type="email"
                id="email"
                :class="{
                  'text-sm border bg-gray-50 border-gray-300 text-gray-900 shadow-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 order-2':
                    contactFormStyle == 'modern',
                  'block border-0 border-b-2 bg-gray-50 border-gray-300 text-gray-900 bg-transparent py-2.5 px-0 w-full appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer':
                    contactFormStyle == 'material',
                }"
                placeholder=" "
                required
              />
              <label
                for="email"
                :class="{
                  'block mb-2 text-sm font-medium text-gray-900 order-1':
                    contactFormStyle == 'modern',
                  'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6':
                    contactFormStyle == 'material',
                }"
                >Email address</label
              >
            </div>

            <div
              class="relative flex flex-col"
              :class="{
                'z-0 w-full mb-6 group': contactFormStyle == 'material',
              }"
            >
              <input
                type="text"
                id="subject"
                :class="{
                  'text-sm border bg-gray-50 border-gray-300 text-gray-900 shadow-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 order-2':
                    contactFormStyle == 'modern',
                  'block border-0 border-b-2 bg-gray-50 border-gray-300 text-gray-900 bg-transparent py-2.5 px-0 w-full appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer':
                    contactFormStyle == 'material',
                }"
                placeholder=" "
                required
              />
              <label
                for="subject"
                :class="{
                  'block mb-2 text-sm font-medium text-gray-900 order-1':
                    contactFormStyle == 'modern',
                  'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6':
                    contactFormStyle == 'material',
                }"
                >Subject</label
              >
            </div>

            <div
              v-if="contactFormStyle == 'material'"
              class="relative flex flex-col"
              :class="{
                'z-0 w-full mb-6 group': contactFormStyle == 'material',
              }"
            >
              <input
                type="text"
                id="message1"
                :class="{
                  'text-sm border bg-gray-50 border-gray-300 text-gray-900 shadow-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 order-2':
                    contactFormStyle == 'modern',
                  'block border-0 border-b-2 bg-gray-50 border-gray-300 text-gray-900 bg-transparent py-2.5 px-0 w-full appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer':
                    contactFormStyle == 'material',
                }"
                placeholder=" "
                required
              />

              <label
                for="message 1"
                :class="{
                  'block mb-2 text-sm font-medium text-gray-900 order-1':
                    contactFormStyle == 'modern',
                  'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6':
                    contactFormStyle == 'material',
                }"
                >Message</label
              >
            </div>

            <div v-else class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Message</label
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
        <button
          class="px-4 py-2 bg-black text-white rounded-md my-4"
          @click="handleDeploy"
        >
          Deploy and get link
        </button>
        <pre class="relative bg-slate-900 rounded-lg">
        <button class="absolute top-1 right-1 flex justify-center items-center w-8 h-8 rounded-[50%] cursor-pointer text-slate-200">
          <svg class="icon icon--xs" width="16" height="16" viewBox="0 0 16 16"><title>Click to copy</title><path d="M12,2h.5A1.5,1.5,0,0,1,14,3.5v10A1.5,1.5,0,0,1,12.5,15h-9A1.5,1.5,0,0,1,2,13.5V3.5A1.5,1.5,0,0,1,3.5,2H4" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path><rect x="6" y="1" width="4" height="2" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></rect><polyline class="copy-to-clip__icon-check" points="5 9 7 11 11 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
        </button>
        <code class="block overflow-x-auto whitespace-pre-wrap ">
          <span class="text-gray-300">
            <span>&lt;</span>
            <span class="text-rose-700">iframe</span>
            <span class="text-violet-700">src</span>
            <span>=</span>
            <span class="text-amber-700">"{{pageSource}}"</span>
            <span class="text-violet-700">title</span>
            <span>=</span>
            <span class="text-amber-700">"contact"</span>
            <span class="text-violet-700">style</span>
            <span>=</span>
            <span class="text-amber-700">"width: 100%; height: 88vh; border: none"</span>
            >
          </span>
          <span class="text-gray-300">
            <span>&lt;</span>
            <span class="text-rose-700">iframe</span>
            >
          </span>
        </code>
      </pre>
      </div>
    </div>
    <div v-else-if="currentTab == 'responses'">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 mt-4">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else-if="currentTab == 'settings'">
      <p>Settings</p>
    </div>
  </Container>
</template>

<script>
import Container from './Container.vue'
import CenteredContainer from './CenteredContainer.vue'
import Navbar from './Navbar.vue'
import { useAuthStore } from '../stores/AuthStore'
import { useFormStore } from '../stores/FormStore'
import { account, databases, dbId, formsCollectionId } from '../api'
import { ID } from 'appwrite'

export default {
  components: {
    CenteredContainer,
    Container,
    Navbar,
  },
  data() {
    const auth = useAuthStore()
    try {
      account
        .get()
        .then((user) => {
          auth.setUser(user)
        })
        .catch((e) => console.error(e))
    } catch (e) {
      console.log('Error getting Account', e)
    }
    return {
      currentTab: 'customize',
      contactFormStyle: 'modern',
      formHeader: 'Contact Us',
      formSubHeader:
        'Got a technical issue? Want to send feedback about a beta feature? Let us know.',
      pageSource: 'https://embed.com',
    }
  },
  mounted() {
    this.focusDesignButton()
  },
  methods: {
    handleFormHeaderChange(e) {
      this.formHeader = e.target.value
    },
    handleFormSubHeaderChange(e) {
      this.formSubHeader = e.target.value
    },
    handleDeploy() {
      const auth = useAuthStore()
      let user = auth.getUser()
      console.log(user)
      let formObj = {
        uid: user.$id,
        userEmail: user.email,
        formHeader: this.formHeader,
        formSubHeader: this.formSubHeader,
      }

      const promise = databases.createDocument(
        dbId,
        formsCollectionId,
        ID.unique(),
        formObj
      )

      promise.then(
        function (response) {
          console.log(response)
        },
        function (error) {
          console.log(error)
        }
      )
      console.log(formObj)
    },
    handleContactFormStyle(style) {
      const formStore = useFormStore()
      formStore.setStyleForContactForm(style)
      this.contactFormStyle = style
    },
    handleTab(tab) {
      this.currentTab = tab
    },
    focusDesignButton() {
      this.$refs.designButton.focus()
    },
    fetchResponses() {},
  },
}
</script>
