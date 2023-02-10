<!-- eslint-disa
  components: { Layout },ble vue/multi-word-component-names -->
<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import router from "../../router";
import Layout from "../../components/Layout.vue";
import ButtonAdd from "../../components/ButtonAdd/index.vue";
import IconEdit from "../../components/Icon/IconEdit.vue";
import NoData from "../../components/NoData/index.vue";
const store = useStore();

const productsList = computed(() => {
  return store.state.products;
});

function handleEdit(product) {
  router.push("products/" + product.id);
}

const fields = ref(["Nome", "Status"]);
</script>

<template>
  <Layout>
    <h2 class="text-3xl font-bold mb-10">Produtos Cadastrados</h2>
    <ButtonAdd path-link="/products/add" text-cta="Adicionar produto" />
    <table v-if="productsList.length > 0" class="table-auto w-full text-sm">
      <thead>
        <th v-for="field in fields" class="p-4 text-left" :key="field">
          {{ field }}
        </th>
        <th class="p-4 text-left"></th>
      </thead>
      <tbody>
        <tr v-for="product in productsList" :key="product.id">
          <td class="p-4">{{ product.name }}</td>
          <td class="p-4">{{ product.active ? "Ativo" : "Inativo" }}</td>
          <td class="p-4 flex items-center justify-end gap-10">
            <IconEdit @click-event="handleEdit(product)" />
          </td>
        </tr>
      </tbody>
    </table>
    <NoData v-else message="Não existem produtos cadastrados" />
  </Layout>
</template>

<style lang="scss" scoped>
.table-auto {
  th {
    border-bottom: 1px solid rgb(211, 211, 211);
  }
  tr {
    &:nth-child(even) {
      background: rgb(239, 239, 239);
    }
  }
}
</style>
<!-- eslint-disa
  components: { Layout },ble vue/multi-word-component-names -->
