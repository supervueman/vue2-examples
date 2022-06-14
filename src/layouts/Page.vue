<script setup lang="ts"></script>

<template>
  <div class="page">
    <header class="page__header">
      <div class="prepend">
        <slot name="prepend" />
      </div>
      <div class="middle">
        <slot name="middle" />
      </div>
      <div class="append">
        <slot name="append" />
      </div>
    </header>
    <footer class="page__footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style lang="scss">
.page {
  display: flex;
}
</style>