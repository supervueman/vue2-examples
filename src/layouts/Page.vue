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
    <main class="page__content">
      <slot />
    </main>
    <footer class="page__footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

.page {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  background-color: aqua;
  padding: 0;
  padding: env(safe-area-inset-top, 0) env(safe-area-inset-right, 0) env(safe-area-inset-bottom, 0) env(safe-area-inset-left, 0);

  &__header {
    color: #fff;
    background-color: red;
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 0 $spacing-m;
  }

  &__content {
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 $spacing-m;
  }

  &__footer {
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>
