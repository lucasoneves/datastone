<!-- eslint-disa
  components: { Layout },ble vue/multi-word-component-names -->
<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";
import Layout from "../components/Layout.vue";
import ToggleSwitch from "../components/ToggleSwitch/ToggleSwitch.vue";
import MainButton from "../components/MainButton/MainButton.vue";
const store = useStore();
const product = ref({ name: "", isActive: false });
const enableForm = ref(false);
function handleCheckedEvent(event) {
  product.value.isActive = event.value;
}
function saveProduct(e) {
  e.preventDefault();
  store.commit("addProduct", product.value);
}

watch(product.value, async (newProduct) => {
  if (newProduct.name.length > 0) {
    enableForm.value = true;
    return;
  }
  enableForm.value = false;
  //   console.log(newProduct);
  //   console.log(oldProduct);
});
</script>

<template>
  <Layout>
    <h2 class="text-3xl font-bold mb-10">Adicionar Produto</h2>
    <form action="" class="grid">
      <input
        type="text"
        name="productTitle"
        placeholder="Nome"
        class="border px-4 py-2 rounded-xl mb-10 block col-span-4"
        v-model="product.name"
      />
      <ToggleSwitch
        :withText="true"
        @checked-event="handleCheckedEvent"
        class="col-span-4"
      />
      <MainButton
        :enable-form="enableForm"
        :handleClick="saveProduct"
        title="Salvar"
        class="col-span-4"
      />
    </form>
  </Layout>
</template>

<style scoped></style>
