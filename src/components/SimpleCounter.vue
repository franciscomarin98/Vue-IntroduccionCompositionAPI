<template>
  <h1>Counter</h1>
  <h3>{{ counterComputed }}</h3>
  <button @click="increment">Aumentar</button>
  <button @click="decrement">Decrementar</button>
</template>

<script>
import {ref, computed} from "vue";

export default {
  name: "SimpleCounter",
  setup() {
    const counter = ref(0);
    const counterComputed = computed(() => {
      return `El valor del contador es: ${counter.value}`;
    });
    const increment = () => {
      counter.value++;
    }
    const decrement = () => {
      counter.value--;
    }

    return {counterComputed, increment, decrement}
  }
}
</script>

<style scoped>

</style>
