<template>
  <div class="flex justify-center items-center">
    <p v-if="status == 'success'" class="p-4 text-xl mt-8">
      Thank you for your message! We have received it and will be in touch
      shortly. Have a great day!
    </p>
    <p v-else class="p-4 text-xl mt-8">
      Oops! There was an error submitting the form. Please try again later.
      Thank you!
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: '',
    }
  },
  mounted() {
    this.status = this.$route.query.status
  },
}
</script>
