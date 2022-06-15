<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
})
</script>

<template>
  <el-card class="box-card">
    <el-image :src="image" />
    <h2 class="title">{{ title }}</h2>
    <p></p>
  </el-card>
</template>