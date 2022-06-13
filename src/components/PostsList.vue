<script setup lang="ts">
import { inject, ref } from 'vue'
import { onMounted } from "vue"
import { Post } from '../types/index';

const { $axios } = inject('plugins')

const posts = ref<Post[]>([])

onMounted(async () => {
  const { data } = await $axios.get('https://jsonplaceholder.typicode.com/todos')

  posts.value = data
})
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    {{post.title}}
  </div>
</template>
