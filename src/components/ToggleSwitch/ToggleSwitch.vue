<script setup>
import { ref, computed } from "vue";

const isActive = ref(false);
const props = defineProps({
  withText: Boolean,
  statusActive: Boolean,
});
const emit = defineEmits(["checked-event"]);

function handleToggleSwitch() {
  isActive.value = !isActive.value;
  emit("checked-event", isActive);
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <span class="block" v-if="withText"
      >Status: {{ statusActive === true ? "Ativo" : "Inativo" }}</span
    >
    <div
      class="switch-wrapper"
      :class="statusActive === true ? 'active' : ''"
      @click="handleToggleSwitch"
    >
      <div class="switch-button"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.switch-wrapper {
  width: 50px;
  height: 24px;
  border-radius: 50px;
  background: var(--base-gray);
  padding: 2px;
  position: relative;
  transition: var(--main-transition);
  display: flex;
  align-items: center;
  cursor: pointer;

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
