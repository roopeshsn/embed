<template>
  <Navbar :user="user" />
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
          <div class="mt-2 flex gap-2 md:gap-4">
            <button
              ref="designButton"
              class="px-6 py-2 md:px-12 md:py-4 bg-blue-100 rounded-md focus:ring-2 focus:border-blue-700"
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
          class="px-4 py-2 bg-black text-white rounded-md mt-8 font-medium"
          @click="handleDeploy"
        >
          Deploy form and get link
        </button>
      </div>
    </div>
    <div v-else-if="currentTab == 'responses'">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 mt-4">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">Email Address</th>
              <th scope="col" class="px-6 py-3">Subject</th>
              <th scope="col" class="px-6 py-3">Message</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b"
              v-for="response in responses"
              :key="response.$id"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {{ response.email }}
              </th>
              <td class="px-6 py-4">{{ response.subject }}</td>
              <td class="px-6 py-4">{{ response.message }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else-if="currentTab == 'settings'">
      <div
        v-if="iframeLink != null && deployedAtleastOnce"
        class="overflow-auto"
      >
        <pre
          class="block relative bg-black p-0 max-h-full max-w-full min-w-[100px] rounded-lg"
        >
            <button
            class="absolute top-1 right-1 flex justify-center items-center w-8 h-8 rounded-[50%] cursor-pointer text-slate-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
            </button>
            <code class="block text-sm overflow-x-auto whitespace-pre-wrap text-yellow-400 pl-4">{{ iframeLink }}</code>
          </pre>
      </div>
    </div>
  </Container>
  <div class="relative">
    <div class="absolute right-4 bottom-4">
      <Pop
        v-if="deployStatus == 'success'"
        :closePop="handleClose"
        status="success"
        :message="deployMessage"
      />
      <Pop
        v-if="deployStatus == 'failed'"
        :closePop="handleClose"
        status="error"
        :message="deployMessage"
      />
    </div>
    <Footer class="mt-8" />
  </div>
</template>

<script>
import Container from './Container.vue'
import CenteredContainer from './CenteredContainer.vue'
import Pop from './Pop.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import { useAuthStore } from '../stores/AuthStore'
import { useFormStore } from '../stores/FormStore'
import {
  databases,
  dbId,
  formsCollectionId,
  getCurrentUser,
  responsesCollectionId,
} from '../api'
import { ID, Query } from 'appwrite'

export default {
  components: {
    CenteredContainer,
    Container,
    Navbar,
    Pop,
    Footer,
  },
  data() {
    return {
      user: {},
      deployMessage:
        'The contact form is deployed successfully! Go to the Settings tab to get the link.',
      currentTab: 'customize',
      deployStatus: 'null',
      isPopOpen: false,
      contactFormStyle: 'modern',
      formHeader: 'Contact Us',
      formSubHeader:
        'Got a technical issue? Want to send feedback about a beta feature? Let us know.',
      pageSource: 'https://embed.com',
      responses: [],
      startingIframeLink: '<iframe src=',
      endingIframeLink:
        ' title="contact" style="width: 100%; height: 88vh; border: none"></iframe>',
      iframeLink: null,
      deployedAtleastOnce: false,
    }
  },
  async mounted() {
    await this.handleAuth()
    this.fetchResponses()
    this.focusDesignButton()
    this.generateIframeLink()
  },
  computed: {
    currentUser() {
      const auth = useAuthStore()
      return auth.getUser()
    },
  },
  methods: {
    async handleAuth() {
      const auth = useAuthStore()
      let user = await getCurrentUser()
      auth.setUser(user)
      this.user = auth.getUser()
    },
    handleFormHeaderChange(e) {
      this.formHeader = e.target.value
    },
    handleFormSubHeaderChange(e) {
      this.formSubHeader = e.target.value
    },
    handleDeploy() {
      const auth = useAuthStore()
      let user = auth.getUser()
      let formObj = {
        uid: user.$id,
        userEmail: user.email,
        formHeader: this.formHeader,
        formSubHeader: this.formSubHeader,
      }

      const promise1 = databases.listDocuments(dbId, formsCollectionId, [
        Query.equal('uid', [user.$id]),
      ])

      promise1
        .then((res) => {
          if (res.total == 0) {
            const promise = databases.createDocument(
              dbId,
              formsCollectionId,
              ID.unique(),
              formObj
            )
            promise
              .then((res) => {
                // console.log(res)
                this.deployStatus = 'success'
                this.deployedAtleastOnce = true
                this.generateIframeLink()
              })
              .catch((e) => {
                this.deployMessage =
                  'Error when trying to deploy the contact form!'
                this.deployStatus = 'failed'
                console.error(e)
              })
          } else {
            let formId = res.documents[0].$id
            let needToBeUpdated = {
              formHeader: this.formHeader,
              formSubHeader: this.formSubHeader,
            }
            const promise = databases.updateDocument(
              dbId,
              formsCollectionId,
              formId,
              needToBeUpdated
            )
            promise
              .then((res) => {
                // console.log(res)
                this.deployMessage = 'Contact form updated successfully!'
                this.deployStatus = 'success'
              })
              .catch((e) => {
                this.deployMessage =
                  'Error when trying to update the contact form!'
                this.deployStatus = 'failed'
                console.error(e)
              })
          }
        })
        .catch((e) => console.error(e))
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
    fetchResponses() {
      const auth = useAuthStore()
      let user = auth.getUser()
      // console.log(user.$id)
      // prettier-ignore
      const promise = databases.listDocuments(dbId, responsesCollectionId, [
        Query.equal('uid', [user.$id]),
      ])
      promise
        .then((res) => {
          this.responses = res.documents
        })
        .catch((e) => console.error(e))
    },
    handleClose() {
      if (this.deployStatus == 'success') {
        this.deployStatus = null
        this.isPopOpen = false
      } else {
        this.deployStatus = null
        this.isPopOpen = false
      }
    },
    getPreviousForm() {
      const auth = useAuthStore()
      let user = auth.getUser()
      const promise = databases.listDocuments(dbId, formsCollectionId, [
        Query.equal('uid', [user.$id]),
      ])
    },
    generateIframeLink() {
      const base = 'http://localhost:5173/embed/contact'
      const auth = useAuthStore()
      let user = auth.getUser()
      let uid = user.$id
      let srcLink = base + '/' + uid
      let iframeLink = this.startingIframeLink + srcLink + this.endingIframeLink
      this.iframeLink = iframeLink
    },
  },
}
</script>
