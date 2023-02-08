<!-- eslint-disa
  components: { Layout },ble vue/multi-word-component-names -->
<script setup>
import { ref, watch } from "vue";
import Layout from "../components/Layout.vue";
import ToggleSwitch from "../components/ToggleSwitch/ToggleSwitch.vue";
const product = ref({ name: "", isActive: false });
const enableForm = ref(false);
function handleCheckedEvent(event) {
  product.value.isActive = event.value;
}
function saveProduct(e) {
  e.preventDefault();
}

watch(product.value, async (newProduct) => {
  if (newProduct.name.length > 0) {
    enableForm.value = true;
    return
  }
  enableForm.value = false;
  //   console.log(newProduct);
  //   console.log(oldProduct);
});
</script>

<template>
  <Layout>
    <h2 class="text-3xl font-bold mb-10">Adicionar Produto</h2>
    <form action="">
      <input
        type="text"
        name="productTitle"
        placeholder="Nome"
        class="border px-4 py-2 rounded-xl mb-10 block"
        v-model="product.name"
      />
      <ToggleSwitch :withText="true" @checked-event="handleCheckedEvent" />
      <button
        :disabled="!enableForm"
        @click="saveProduct"
        class="px-10 py-2 rounded-xl text-white mt-10 block"
        :class="
          !enableForm ? 'cursor-not-allowed bg-slate-300' : 'bg-base-blue'
        "
      >
        Salvar
      </button>
    </form>
  </Layout>
</template>

<style scoped></style>
