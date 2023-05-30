<template>
  <div class="form-group mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      {{ inputProps.label }}
    </label>
    <input
      class="peer shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
      @blur="handleBlur"
      @focus="handleFocus"
      v-bind="inputProps"
      :focus="focus"
    />
    <span v-if="focus" class="text-sm" :class="inputProps.textColor">{{
      inputProps.errorMessage
    }}</span>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    key: Number,
    value: String,
    onChange: {
      type: Function,
      required: true,
    },
    inputProps: {
      id: Number,
      name: String,
      type: String,
      placeholder: String,
      errorMessage: String,
      label: String,
      required: Boolean,
      textColor: String,
    },
  },
  data() {
    return {
      focus: false,
    }
  },
  methods: {
    handleBlur() {
      this.focus = true
    },
    handleFocus() {
      if (this.inputProps.name === 'confirmPassword') {
        this.focus = true
      }
    },
  },
}
</script>

<style scoped>
.focus {
  outline: 2px solid #2563eb;
  box-shadow: 0 0 0 2px #2563eb;
}
</style>
