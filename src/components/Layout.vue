<script setup>
import Header from "./Header/Header.vue";
</script>

<template>
  <Header></Header>
  <div class="container mx-auto py-10 px-4">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.container {
  @media (min-width: 600px) {
    max-width: 600px;
  }

  @media (min-width: 1600px) {
    max-width: 768px;
  }
}
</style>
