<template>

  <Suspense>
    <template #default>
        <SuspenseFetch />
    </template>
    <template #fallback>
        Cargando la información, un momento por favor...
    </template>
  </Suspense>
  <hr/>

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
import SuspenseFetch from "../components/SuspenseFetch";

export default {
  name: 'Home',
  components: {
    SuspenseFetch,
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
