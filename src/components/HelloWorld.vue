<template>
  <h1>Hello World</h1>
  <p>{{ message }}</p>
  <label>Mensaje: </label>
  <br>
  <input type="text" id="mensaje" v-model="message">
</template>


<script>
import {ref} from 'vue';

export default {
  name: 'Hello World',
  setup() {
    const message = ref("HelloWorld");
    return {message};
  }
}

</script>


<style>

</style>
