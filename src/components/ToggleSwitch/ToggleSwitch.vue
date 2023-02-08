<script setup>
import { ref } from "vue";

const isActive = ref(false);

function handleToggleSwitch() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <div class="flex items-start flex-col gap-2">
    <span class="block">Status: {{ isActive ? "Ativo" : "Inativo" }}</span>
    <div
      class="switch-wrapper"
      :class="isActive ? 'active' : ''"
      @click="handleToggleSwitch"
    >
      <div class="switch-button"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.switch-wrapper {
  width: 50px;
  height: 25px;
  border-radius: 50px;
  background: var(--base-gray);
  padding: 2px;
  position: relative;
  transition: var(--main-transition);
  display: flex;
  align-items: center;

  &.active {
    background: var(--base-blue-light);
    background: var(--base-blue);
    .switch-button {
      background-color: var(--base-blue-light);
      transform: translate(calc(30px - 5px / 2));
    }
  }
}

.switch-button {
  width: 16px;
  height: 16px;
  background: var(--base-gray-darken);
  border-radius: 50px;
  transition: var(--main-transition);
  transform: translate(2px);
}
</style>
