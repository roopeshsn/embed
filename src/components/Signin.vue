<template>
  <CenteredContainer>
    <div class="w-full max-w-sm relative">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit="handleSubmit"
      >
        <div class="mb-6">
          <h2 class="text-2xl font-bold">Sign In</h2>
        </div>
        <FormInput
          :key="emailInput.id"
          :inputProps="emailInput"
          v-model="values.email"
          @input="onChange"
        />
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            {{ passwordInput.label }}
          </label>
          <input
            :key="passwordInput.id"
            :type="passwordInput.type"
            :placeholder="passwordInput.placeholder"
            class="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
            v-model="values.password"
            @input="onChange"
          />
        </div>
        <div class="flex items-center justify-between mb-6">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            :disabled="loading"
            type="submit"
          >
            Signin
          </button>
          <router-link
            class="text-md text-green-500 font-bold"
            to="/forgot-password"
          >
            Forgot Password?
          </router-link>
        </div>
        <div>
          <p>
            Not Registered?
            <router-link
              to="/signup"
              class="text-sm text-green-500 font-bold underline"
            >
              Signup
            </router-link>
          </p>
        </div>
      </form>
    </div>
  </CenteredContainer>
</template>

<script>
import CenteredContainer from '../components/CenteredContainer.vue'
import FormInput from '../components/FormInput.vue'
import Pop from '../components/Pop.vue'

export default {
  components: {
    CenteredContainer,
    FormInput,
    Pop,
  },
  data() {
    return {
      successMsg: '',
      errMsg: '',
      loading: false,
      values: {
        email: '',
        password: '',
      },
      emailInput: {
        id: 1,
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        errorMessage: 'Not a valid email address!',
        label: 'Email',
        required: true,
        textColor: 'text-red-500',
      },
      passwordInput: {
        id: 2,
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        required: true,
        label: 'Password',
      },
    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      // try {
      //   const response = await axios.post(
      //     LOGIN_URL,
      //     {
      //       email: this.values.email,
      //       password: this.values.password,
      //     },
      //     {
      //       headers: { 'Content-Type': 'application/json' },
      //       withCredentials: true,
      //     }
      //   )
      //   console.log(JSON.stringify(response?.data))
      //   const accessToken = response?.data?.accessToken
      //   // const roles = response?.data?.roles;
      //   this.setAuth({
      //     email: this.values.email,
      //     password: this.values.password,
      //     accessToken,
      //   })
      //   this.successMsg = 'Login success'
      //   setTimeout(() => {
      //     this.$router.push('/dashboard')
      //   }, 3000)
      // } catch (err) {
      //   if (!err?.response) {
      //     this.errMsg = 'No Server Response'
      //   } else if (err.response?.status === 400) {
      //     this.errMsg = 'Missing Username or Password'
      //   } else if (err.response?.status === 401) {
      //     this.errMsg = 'Wrong username or password'
      //   } else {
      //     this.errMsg = 'Login Failed'
      //   }
      // }
      console.log(this.values)
    },
    onChange(e) {
      this.values = { ...this.values, [e.target.name]: e.target.value }
    },
  },
}
</script>
