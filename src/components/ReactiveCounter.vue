<template>
  <h1>Reactive Counter</h1>
  {{ counter }}
  <h3>{{ counterComputed }}</h3>
  <button @click="increment">Aumentar</button>
  <button @click="decrement">Decrementar</button>
</template>

<script>
import {reactive, toRefs, computed} from 'vue';

export default {
  name: "ReactiveCounter",
  setup() {
    const data = reactive({
      counter: 0,
      counterComputed: computed(() => `El valor del contador es: ${data.counter}`)
    });

    const increment = () => data.counter++;
    const decrement = () => data.counter--;

    return {...toRefs(data), increment, decrement}
  }
}
</script>

<style scoped>

</style>
