<!-- eslint-disable no-unused-vars -->
<script setup>
// import props from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  textCta: String,
  pathLink: String
});
</script>

<template>
  <RouterLink
    class="link w-60 px-6 py-2 rounded-xl text-white mt-2 mb-2 block flex items-center justify-center gap-2"
    :to="pathLink"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    {{ textCta }}</RouterLink
  >
</template>

<style lang="sccs" scoped></style>
