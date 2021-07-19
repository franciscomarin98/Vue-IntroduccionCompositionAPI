<template>
  <h1>Login Form</h1>
  <label>Email: </label>
  <input autocomplete="off"
         id="email"
         :value="email"
         type="email"
         name="email"
         @input="$emit('update:email',$event.target.value)"
  >
  &nbsp;
  <label>Password: </label>
  <input autocomplete="off"
         id="password"
         :value="password"
         type="password"
         name="password"
         @input="$emit('update:password',$event.target.value)"
  >
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    email: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    }
  },
  setup() {

  }
}
</script>

<style scoped>

</style>
