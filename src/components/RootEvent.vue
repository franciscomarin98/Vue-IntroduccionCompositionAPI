<template>
  <h1>Root Event</h1>
  <label>Mensaje: </label>
  <input type="text" v-model="message"/>
  <br/>
  <br/>
  <button @click="notifyToRoot">
    Notificar al componente padre desde el setup
  </button>
</template>

<script>
import {ref, inject} from "vue";

export default {
  name: "RootEvent",
  emits: [
    "onRootFire"
  ],
  setup() {
    const message = ref('');
    const emitter = inject('emitter');
    const notifyToRoot = () =>{
      emitter.emit('onRootFire', message.value)
    }
    return {message, notifyToRoot}
  }
}
</script>

<style scoped>

</style>
