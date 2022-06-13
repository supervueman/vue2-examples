<script setup lang="ts">
import PostsList from '../components/PostsList.vue'
</script>

<template>
  <h1>BLOG</h1>
  <Suspense>
    <PostsList />
  </Suspense>
</template>
