<!-- eslint-disa
  components: { Layout },ble vue/multi-word-component-names -->
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Layout from "../../components/Layout.vue";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch.vue";
const store = useStore();

const clientsList = computed(() => {
  return store.state.clients;
});
</script>

<template>
  <Layout>
    <h2 class="text-3xl font-bold mb-10">Clientes Cadastrados</h2>
    <table v-if="clientsList.length > 0" class="table-auto w-full">
      <thead>
        <th class="p-4 text-left">Nome</th>
        <th class="p-4 text-left">Documento</th>
        <th class="p-4 text-left">Telefone</th>
        <th class="p-4 text-left">E-mail</th>
        <th class="p-4 text-left">Status</th>
        <th class="p-4 text-left"></th>
        <th class="p-4 text-left"></th>
      </thead>
      <tbody>
        <tr v-for="client in clientsList" :key="client.id">
          <td class="p-4">{{ client.name }}</td>
          <td class="p-4">{{ client.clientDocument }}</td>
          <td class="p-4">{{ client.phone }}</td>
          <td class="p-4">{{ client.email }}</td>
          <td class="p-4">{{ client.active }}</td>
          <td class="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </td>
          <td class="p-4"><ToggleSwitch :statusActive="client.active" /></td>
        </tr>
      </tbody>
    </table>
    <h3 v-else>Não existem clientes cadastrados</h3>
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
