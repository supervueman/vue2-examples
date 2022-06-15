<script setup lang="ts">
import Page from '@/layouts/Page.vue'
import { $ref } from 'vue/macros';
import { ref } from 'vue'

const searchQuery = $ref('')
</script>

<template>
  <Page>
    <template #middle>Home</template>
    <div class="home">
      <el-input placeholder="" />
    </div>
    <template #footer>Footer</template>
  </Page>
</template>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

.home {
  padding-top: $spacing-m;
}
</style>
