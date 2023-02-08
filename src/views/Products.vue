<!-- eslint-disa
  components: { Layout },ble vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import Layout from "../components/Layout.vue";
const products = ref([]);
</script>

<template>
  <Layout>
    <h2 class="text-3xl font-bold">Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </Layout>
</template>

<style scoped></style>
