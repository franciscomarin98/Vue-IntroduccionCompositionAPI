import {computed, ref} from "vue";

export default () => {
    const counter = ref(0);
    const counterComputed = computed(() => {
        return `El valor del contador es: ${counter.value}`;
    });
    const increment = () => {
        counter.value++;
    }
    const decrement = () => {
        counter.value--;
    }

    return {counter, counterComputed, increment, decrement}
}
