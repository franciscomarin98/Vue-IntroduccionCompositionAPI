<template>
  <SimpleCounter />
  <hr>
  <hr>
  <HelloWorld/>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import SimpleCounter from "../components/SimpleCounter";

export default {
  name: 'Home',
  components: {
    SimpleCounter,
    HelloWorld
  }
}
</script>
