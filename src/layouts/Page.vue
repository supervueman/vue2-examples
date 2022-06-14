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
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  background-color: aqua;
  padding: 0;
  padding: env(safe-area-inset-top, 0) env(safe-area-inset-right, 0) env(safe-area-inset-bottom, 0) env(safe-area-inset-left, 0);
}
</style>