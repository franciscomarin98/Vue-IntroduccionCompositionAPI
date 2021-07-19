<template>
<h1>Component with Props</h1>
  <p>Nombre: <span>{{name}}</span> </p>
  <p>Edad: <span>{{age}}</span> </p>
</template>

<script>
export default {
  name: "ComponentWithProps",
  props: {
    name: String,
    age: Number
  },
  setup(props) {
    console.log(props.name)
    console.log(props.age)
  }
}
</script>

<style scoped>

</style>
