import { reactive, toRefs } from 'vue';

export default () => {
    const state = reactive({
        todo: '',
        todos: []
    });

    const addTodo = () => {
        if(state.todo.length > 0){
            state.todos.push(state.todo)
        }
        state.todo = '';
    }

    const deleteTodo = (index) => {
        state.todos.splice(index, 1);
    }

    return { ...toRefs(state), addTodo, deleteTodo}

}
