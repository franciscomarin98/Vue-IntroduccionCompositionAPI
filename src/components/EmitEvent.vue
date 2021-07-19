<template>
  <h1>Emit Event</h1>
  <label>Mensaje: </label>
  <input type="text" v-model="message" />
  <br />
  <br />
  <button @click="notify">Notificar al componente padre desde el setup</button>
  <button @click="$emit('onFire', message)">Notificar al componente padre con el $emit del template</button>
</template>

<script>
import {ref} from "vue";

export default {
  name: "EmitEvent",
  emits:[
      "onFire"
  ],
  setup (props, context) {
    const message = ref('');
    const notify = () => {
      context.emit('onFire', message.value)
    }

    return {message, notify}

  }
}
</script>

<style scoped>

</style>
