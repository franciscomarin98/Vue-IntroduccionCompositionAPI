<template>
  <h1>Simple Counter Composition API</h1>
  {{ counter }}
  <h3>{{ counterComputed }}</h3>
  <button @click="increment">Aumentar</button>
  <button @click="decrement">Decrementar</button>
</template>

<script>
import useCounter from "../composables/useCounter";

export default {
  name: "SimpleCounterCompositionAPI",
  setup() {
    const counterComposable = useCounter();
    return {...counterComposable};
  }
}
</script>

<style scoped>

</style>
