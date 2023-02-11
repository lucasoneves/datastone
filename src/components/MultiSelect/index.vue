<script setup>
import { ref, toRaw } from "vue";
const emit = defineEmits("select-option");
const props = defineProps({
  textFallback: String,
  options: Array,
  optionsRecorded: Array,
});

const optionsToSave = ref([]);
const toEdit = ref(false);
function choseOption() {
  toEdit.value = true;
}

function handleSelect(optionSelected) {
  emit("select-option", optionsToSave.value);
  if (
    toRaw(optionsToSave.value.find((option) => option.id === optionSelected.id))
  ) {
    const optionToDelete = toRaw(
      optionsToSave.value.findIndex((option) => option.id === optionSelected.id)
    );
    optionSelected.selected = false;
    optionsToSave.value.splice(optionToDelete, 1);
    return false;
  }
  optionSelected.selected = !optionSelected.selected;
  optionsToSave.value.push(optionSelected);
}
</script>

<template>
  <div
    class="wrapper border cursor-pointer py-2 rounded-xl mb-10 block"
    @click="choseOption"
    @blur="toEdit.value = false"
    ref="input"
  >
    <div class="options" v-if="options && options.length > 0">
      <div
        class="option p-2 m-1"
        v-for="option in options"
        :key="option.id"
        @click="handleSelect(option)"
        :class="option.selected && 'text-white bg-base-blue rounded-xl p-2'"
      >
        {{ option.name }}
      </div>
    </div>
    <div v-else class="flex items-center justify-center">
      {{ textFallback }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  // height: 100%;
  overflow-y: scroll;
}
.option {
  &.selected {
    background-color: tomato;
  }
}
</style>
