<!-- eslint-disa
  components: { Layout },ble vue/multi-word-component-names -->
<script setup>
import { computed, ref, onMounted, toRaw } from "vue";
import { useStore } from "vuex";
import router from "../../router";
import Layout from "../../components/Layout.vue";
// import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch.vue";
import ButtonAdd from "../../components/ButtonAdd/index.vue";
import IconEdit from "../../components/Icon/IconEdit.vue";
import NoData from "../../components/NoData/index.vue";
const store = useStore();

const clientsList = ref([]);

// const editClientData = ref({});

const fields = ref(["Nome", "Documento", "Telefone", "E-mail", "Status"]);

function handleEdit(client) {
  router.push("clients/" + client.id);
}

onMounted(() => {
  clientsList.value = toRaw(store.state.clients);
});
</script>

<template>
  <Layout>
    <h2 class="text-3xl font-bold mb-10">Clientes Cadastrados</h2>
    <ButtonAdd path-link="/clients/add" text-cta="Adicionar cliente" />
    <table v-if="clientsList.length > 0" class="table-auto w-full text-sm">
      <thead>
        <th v-for="field in fields" class="p-4 text-left" :key="field">
          {{ field }}
        </th>
        <th class="p-4 text-left"></th>
      </thead>
      <tbody>
        <tr v-for="client in clientsList" :key="client.id">
          <td class="p-4">{{ client.name }}</td>
          <td class="p-4">{{ client.clientDocument }}</td>
          <td class="p-4">{{ client.phone }}</td>
          <td class="p-4">{{ client.email }}</td>
          <td class="p-4">{{ client.active ? "Ativo" : "Inativo" }}</td>
          <td class="p-4 flex items-center justify-between gap-10">
            <IconEdit @click-event="handleEdit(client)" />
          </td>
        </tr>
      </tbody>
    </table>
    <NoData v-else message="Não existem clientes cadastrados" />
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
