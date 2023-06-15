<template lang="">
  <section class="bg-white">
    <div class="mx-auto max-w-screen-md p-4">
      <div class="text-gray-400 text-sm float-right">Powered by Embed</div>
    </div>
    <div class="py-8 lg:py-12 px-4 mx-auto max-w-screen-md">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900"
      >
        {{ formConfig.formHeader }}
      </h2>
      <p
        class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
      >
        {{ formConfig.formSubHeader }}
      </p>
      <form action="#" class="space-y-8" @submit.prevent="handleSubmit">
        <!-- <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Your name</label
          >
          <input
            type="text"
            id="name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder=""
            v-model="name"
            required
          />
        </div>
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
            v-model="email"
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
            v-model="subject"
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
            v-model="message"
          ></textarea>
        </div> -->
        <div
          class="relative flex flex-col"
          :class="{
            'z-0 w-full mb-6 group': formConfig.formStyle == 'material',
          }"
        >
          <input
            v-model="name"
            type="text"
            id="name"
            :class="{
              'text-sm border bg-gray-50 border-gray-300 text-gray-900 shadow-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 order-2':
                formConfig.formStyle == 'modern',
              'block border-0 border-b-2 bg-gray-50 border-gray-300 text-gray-900 bg-transparent py-2.5 px-0 w-full appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer':
                formConfig.formStyle == 'material',
            }"
            placeholder=" "
            required
          />
          <label
            for="name"
            :class="{
              'block mb-2 text-sm font-medium text-gray-900 order-1':
                formConfig.formStyle == 'modern',
              'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6':
                formConfig.formStyle == 'material',
            }"
            >First name</label
          >
        </div>

        <div
          class="relative flex flex-col"
          :class="{
            'z-0 w-full mb-6 group': formConfig.formStyle == 'material',
          }"
        >
          <input
            v-model="email"
            type="email"
            id="email"
            :class="{
              'text-sm border bg-gray-50 border-gray-300 text-gray-900 shadow-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 order-2':
                formConfig.formStyle == 'modern',
              'block border-0 border-b-2 bg-gray-50 border-gray-300 text-gray-900 bg-transparent py-2.5 px-0 w-full appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer':
                formConfig.formStyle == 'material',
            }"
            placeholder=" "
            required
          />
          <label
            for="email"
            :class="{
              'block mb-2 text-sm font-medium text-gray-900 order-1':
                formConfig.formStyle == 'modern',
              'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6':
                formConfig.formStyle == 'material',
            }"
            >Email address</label
          >
        </div>

        <div
          class="relative flex flex-col"
          :class="{
            'z-0 w-full mb-6 group': formConfig.formStyle == 'material',
          }"
        >
          <input
            v-model="subject"
            type="text"
            id="subject"
            :class="{
              'text-sm border bg-gray-50 border-gray-300 text-gray-900 shadow-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 order-2':
                formConfig.formStyle == 'modern',
              'block border-0 border-b-2 bg-gray-50 border-gray-300 text-gray-900 bg-transparent py-2.5 px-0 w-full appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer':
                formConfig.formStyle == 'material',
            }"
            placeholder=" "
            required
          />
          <label
            for="subject"
            :class="{
              'block mb-2 text-sm font-medium text-gray-900 order-1':
                formConfig.formStyle == 'modern',
              'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6':
                formConfig.formStyle == 'material',
            }"
            >Subject</label
          >
        </div>

        <div
          v-if="formConfig.formStyle == 'material'"
          class="relative flex flex-col"
          :class="{
            'z-0 w-full mb-6 group': formConfig.formStyle == 'material',
          }"
        >
          <input
            v-model="messageMaterial"
            type="text"
            id="message-material"
            :class="{
              'text-sm border bg-gray-50 border-gray-300 text-gray-900 shadow-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 order-2':
                formConfig.formStyle == 'modern',
              'block border-0 border-b-2 bg-gray-50 border-gray-300 text-gray-900 bg-transparent py-2.5 px-0 w-full appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer':
                formConfig.formStyle == 'material',
            }"
            placeholder=" "
            required
          />

          <label
            for="message-material"
            :class="{
              'block mb-2 text-sm font-medium text-gray-900 order-1':
                formConfig.formStyle == 'modern',
              'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6':
                formConfig.formStyle == 'material',
            }"
            >Message</label
          >
        </div>

        <div v-else class="sm:col-span-2">
          <label
            for="message-modern"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Message</label
          >
          <textarea
            v-model="messageModern"
            id="message-modern"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <button
          type="submit"
          class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Send message
        </button>
      </form>
    </div>
  </section>
</template>
<script>
import { ID, Query } from 'appwrite'
import {
  databases,
  dbId,
  formsCollectionId,
  responsesCollectionId,
} from '../api'

export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      messageModern: '',
      messagematerail: '',
      formConfig: {
        formHeader: '',
        formSubHeader: '',
        formType: '',
        formStyle: 'modern',
        formTheme: '',
      },
      default: {
        formHeader: 'Contact Us',
        formSubHeader:
          'Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know',
      },
    }
  },
  mounted() {
    this.fetchFormConfig()
  },
  methods: {
    handleSubmit(e) {
      const uid = this.$route.params.id
      const formData = {
        uid,
        name: this.name,
        email: this.email,
        subject: this.subject,
      }
      if (this.formConfig.formStyle == 'modern') {
        formData.message = this.messageModern
      } else {
        formData.message = this.messageMaterial
      }
      const promise = databases.createDocument(
        dbId,
        responsesCollectionId,
        ID.unique(),
        formData
      )
      promise
        .then((res) => {
          this.$router.push({ name: 'Status', query: { status: 'success' } })
        })
        .catch((e) =>
          this.$router.push({ name: 'Status', query: { status: 'failed' } })
        )
    },
    fetchFormConfig() {
      const uid = this.$route.params.id
      const promise = databases.listDocuments(dbId, formsCollectionId, [
        Query.equal('uid', uid),
      ])
      promise
        .then((res) => {
          console.log(res)
          const { formType, formHeader, formSubHeader, formStyle } =
            res.documents[0]
          // this.formConfig.formType = formType
          this.formConfig.formHeader = formHeader
          this.formConfig.formSubHeader = formSubHeader
          this.formConfig.formStyle = formStyle
        })
        .catch((e) => console.error(e))
    },
  },
}
</script>
<style lang=""></style>
