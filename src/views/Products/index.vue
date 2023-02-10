<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disa
  components: { Layout },ble vue/multi-word-component-names -->
<script setup>
import { ref, watch, onMounted } from "vue";
import { useStore } from "vuex";
import router from "../../router";
import Layout from "../../components/Layout.vue";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch.vue";
import MainButton from "../../components/MainButton/MainButton.vue";
const store = useStore();
const product = ref({ name: "", active: false, id: "" });
const enableForm = ref(false);
function handleCheckedEvent(event) {
  product.value.active = event.value;
}
function saveProduct(e) {
  e.preventDefault();
  store.commit("addProduct", product.value);
  router.push("/products");
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

onMounted(() => {
  product.value.id = Math.floor(Math.random() * 1000000);
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
        :statusActive="product.active"
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
