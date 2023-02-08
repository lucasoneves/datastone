<!-- eslint-disa
  components: { Layout },ble vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import Layout from "../components/Layout.vue";
const clients = ref([]);
</script>

<template>
  <Layout>
    <h2 class="text-3xl font-bold">Adicionar Cliente</h2>
    <ul>
      <li v-for="client in clients" :key="client.id">
        {{ client.name }}
      </li>
    </ul>
  </Layout>
</template>

<style scoped></style>
