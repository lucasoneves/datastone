<script setup>
const props = defineProps({
  message: String,
});
</script>

<template>
  <h3 class="p-4 bg-slate-100 drop-shadow-md text-md mt-10 text-center">
    {{ message }}
  </h3>
</template>

<style lang="scss" scoped></style>
