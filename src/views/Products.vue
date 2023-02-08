<!-- eslint-disa
  components: { Layout },ble vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import Layout from "../components/Layout.vue";
import ToggleSwitch from "../components/ToggleSwitch/ToggleSwitch.vue";
const products = ref([]);
</script>

<template>
  <Layout>
    <h2 class="text-3xl font-bold mb-10">Adicionar Produto</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
    <form action="">
      <input
        type="text"
        name="productTitle"
        placeholder="Nome"
        class="border px-4 py-2 rounded-xl mb-10"
      />
      <ToggleSwitch />
      <button class="bg-base-blue px-10 py-2 rounded-xl text-white mt-10">
        Salvar
      </button>
    </form>
  </Layout>
</template>

<style scoped></style>
