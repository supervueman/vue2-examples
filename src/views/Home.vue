<script setup lang="ts">
import Page from '@/layouts/Page.vue'
import { $ref } from 'vue/macros';
import { ref } from 'vue'

const searchQuery = $ref('')
const categoryQuery = $ref('')
const options: AppSpace.FilterableItem[] = $ref([])

const remoteSearch = () => {}
</script>

<template>
  <Page>
    <template #middle>Home</template>
    <div class="home">
      <el-input placeholder="" v-model="searchQuery" />
      <el-select
        v-model="categoryQuery"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="Please enter a keyword"
        :remote-method="remoteSearch"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
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
