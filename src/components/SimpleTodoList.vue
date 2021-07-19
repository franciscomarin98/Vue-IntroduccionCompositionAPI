<template>
  <h2>Lista de tareas</h2>
  <label>Escriba la tarea por hacer</label>
  <br>
  <input type="text" v-model="todo" @keypress.enter="addTodo" />
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      {{ todo }} - <span @click="deleteTodo(index)">X</span>
    </li>
  </ul>
</template>

<script>
import useTodos from "../composables/useTodos";

export default {
  name: "SimpleTodoList",
  setup() {
    const { todo, todos, addTodo, deleteTodo } = useTodos();


    return { todo, todos, addTodo, deleteTodo  }
  }
}
</script>

<style scoped>

</style>
