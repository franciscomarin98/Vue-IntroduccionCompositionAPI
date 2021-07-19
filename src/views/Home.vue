<template>
  <LoginForm v-model:email="email" v-model:password="password" />
  {{ email }} - {{ password }}
  <hr/>

  <RootEvent/>
  <hr/>

  <EmitEvent/>
  <hr/>

  <ComponentWithProps name="Francisco" :age=22 />
  <hr/>

  <Suspense>
    <template #default>
      <SuspenseFetch/>
    </template>
    <template #fallback>
      Cargando la información, un momento por favor...
    </template>
  </Suspense>
  <hr/>

  <SimpleFetch/>
  <hr/>

  <SimpleTodoList/>
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
import { reactive, toRefs } from 'vue';
import HelloWorld from "../components/HelloWorld";
import SimpleCounter from "../components/SimpleCounter";
import ReactiveCounter from "../components/ReactiveCounter";
import WatchCounter from "../components/WatchCounter";
import SimpleCounterCompositionAPI from "../components/SimpleCounterCompositionAPI";
import SimpleTodoList from "../components/SimpleTodoList";
import SimpleFetch from "../components/SimpleFetch";
import SuspenseFetch from "../components/SuspenseFetch";
import ComponentWithProps from "../components/ComponentWithProps";
import EmitEvent from "../components/EmitEvent";
import RootEvent from "../components/RootEvent";
import LoginForm from "../components/LoginForm";

export default {
  name: 'Home',
  components: {
    LoginForm,
    RootEvent,
    EmitEvent,
    ComponentWithProps,
    SuspenseFetch,
    SimpleFetch,
    SimpleTodoList,
    SimpleCounterCompositionAPI,
    WatchCounter,
    ReactiveCounter,
    SimpleCounter,
    HelloWorld
  },
  setup () {
    const loginForm = reactive({
      email: 'test@test.com',
      password: '123456'
    });

    return {...toRefs(loginForm)}
  }
}
</script>
