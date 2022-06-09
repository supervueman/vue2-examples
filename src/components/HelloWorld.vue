<script setup lang="ts">
import { inject, ref } from 'vue'

defineProps<{ msg: string }>()

const $axios = inject('$axios')

const { data } = await $axios.get('https://jsonplaceholder.typicode.com/todos/1')

const refPost = ref(data)
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ refPost.title }}</h2>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
