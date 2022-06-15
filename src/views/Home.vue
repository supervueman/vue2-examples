<script setup lang="ts">
import Page from '@/layouts/Page.vue'
import { $ref } from 'vue/macros';
import { useCodeStore } from '../stores'

//* Components
import CodeCard from '@/components/CodeCard.vue'

const codeStore = useCodeStore()

codeStore.fetchCodes()

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

      <div class="content">
        <CodeCard v-for="({ title, image }, index) in codeStore.codes" />
      </div>
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
