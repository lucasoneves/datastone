<script setup>
import Header from "./Header/Header.vue";
</script>

<template>
  <Header></Header>
  <div class="container mx-auto py-10 px-4">
    <slot></slot>
  </div>
</template>

<style scoped>
</style>
