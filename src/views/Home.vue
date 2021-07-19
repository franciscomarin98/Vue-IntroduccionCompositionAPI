<template>

  <SimpleTodoList />
  <hr/>

  <SimpleCounterCompositionAPI/>
  <hr/>

  <WatchCounter/>
  <hr/>

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
import WatchCounter from "../components/WatchCounter";
import SimpleCounterCompositionAPI from "../components/SimpleCounterCompositionAPI";
import SimpleTodoList from "../components/SimpleTodoList";

export default {
  name: 'Home',
  components: {
    SimpleTodoList,
    SimpleCounterCompositionAPI,
    WatchCounter,
    ReactiveCounter,
    SimpleCounter,
    HelloWorld
  }
}
</script>
