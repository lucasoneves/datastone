<script setup>
const props = defineProps({
  enableForm: Boolean,
  handleClick: Function,
  title: String,
});
</script>

<template>
  <button
    :disabled="!enableForm"
    class="main-button px-10 py-2 rounded-xl text-white mt-10 block"
    :class="!enableForm ? 'cursor-not-allowed bg-slate-300' : 'bg-base-blue'"
    @click="handleClick"
  >
    {{ title }}
  </button>
</template>

<style lang="scss" scoped>
.main-button {
  width: 100%;

  @media (min-width: 640px) {
    width: 150px;
  }
}
</style>
