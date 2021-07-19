<template>

  <SimpleFetch />
  <hr/>

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
import SimpleFetch from "../components/SimpleFetch";

export default {
  name: 'Home',
  components: {
    SimpleFetch,
    SimpleTodoList,
    SimpleCounterCompositionAPI,
    WatchCounter,
    ReactiveCounter,
    SimpleCounter,
    HelloWorld
  }
}
</script>
