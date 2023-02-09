<script setup>
import Layout from "../components/Layout.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const productsList = computed(() => {
  return store.state.products;
});
</script>

<template>
  <main>
    <Layout>
      <h2 class="text-3xl font-bold underline">Hello</h2>
      <ul>
        <li v-for="product in productsList" :key="product.name">
          {{ product.name }}
        </li>
      </ul>
    </Layout>
  </main>
</template>
