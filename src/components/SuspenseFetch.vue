<template>
  <h1>Suspense Fetch</h1>
  <ul v-if="users">
    <li v-for="user in users" :key="user.id">
      {{ user.name }} - {{ user.email }}
    </li>
  </ul>
</template>

<script>
import {ref} from 'vue';

export default {
  name: "SuspenseFetch",
  async setup() {
    const users = ref(null);
    const fetchInfo = async () => {
      return new Promise(async (resolve) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        setTimeout(() => {
          resolve(response.json());
        }, 3500);
      });
    }
    users.value = await fetchInfo();
    return {users};
  }

}
</script>

<style scoped>

</style>
