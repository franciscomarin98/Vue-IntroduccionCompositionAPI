<template>
  <ReactiveCounter/>
  <hr/>
  <SimpleCounter/>
  <hr/>
  <HelloWorld/>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import SimpleCounter from "../components/SimpleCounter";
import ReactiveCounter from "../components/ReactiveCounter";

export default {
  name: 'Home',
  components: {
    ReactiveCounter,
    SimpleCounter,
    HelloWorld
  }
}
</script>
