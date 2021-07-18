<template>
  <h1>Watch Counter</h1>
  <h3>{{ counter }}</h3>
  <h3>{{ counter2 }}</h3>
  <p>{{ message }}</p>
  <button @click="increment">Aumentar</button>
  <button @click="decrement">Decrementar</button>
</template>

<script>
import {ref, watch} from 'vue';

export default {
  name: "WatchCounter",
  setup() {
    const counter = ref(0);
    const counter2 = ref(0);
    const message = ref('');

    // watch(counter, ()=>{
    //   if(counter.value === 5){
    //     message.value = "El valor de counter es 5";
    //   }else{
    //     message.value = ""
    //   }
    // });

    watch([counter], (currentValue, oldValue) => {
      console.log('Current value: ', currentValue);
      console.log('Old value: ', oldValue);

      if (counter.value === 5) {
        message.value = "El valor de counter es 5";
        counter2.value = 10;
      } else {
        message.value = ""
      }

      if (counter2.value === 10) {
        console.log('El counter 2 ha cambiado');
      }

    })

    const increment = () => {
      counter.value++;
    }
    const decrement = () => {
      counter.value--;
    }
    return {counter, counter2, message, increment, decrement}
  }
}
</script>

<style scoped>

</style>
