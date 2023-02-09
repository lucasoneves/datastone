<!-- eslint-disa
  components: { Layout },ble vue/multi-word-component-names -->
<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";
import router from "../../router";
import Layout from "../../components/Layout.vue";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch.vue";
import MainButton from "../../components/MainButton/MainButton.vue";
const store = useStore();
const client = ref({
  name: "",
  clientDocument: "",
  phone: "",
  email: "",
  active: false,
  products: [],
  id: Math.random(),
});
const enableForm = ref(false);
const emailRegex = ref(
  new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm")
);
function handleCheckedEvent(event) {
  client.value.active = event.value;
}
function saveClient(e) {
  e.preventDefault();
  store.commit("addClient", client.value);
  router.push("/clients");
}

watch(client.value, async () => {
  for (const key in client.value) {
    if (
      (!client.value[key].length >= 0) &
      emailRegex.value.test(client.value.email)
    ) {
      enableForm.value = true;
      return;
    }

    enableForm.value = false;
  }
});
</script>

<template>
  <Layout>
    <h2 class="text-3xl font-bold mb-10">Adicionar Cliente</h2>
    <form action="" class="grid grid-cols-2 gap-5">
      <input
        type="text"
        name="clientName"
        placeholder="Nome"
        class="border px-4 py-2 rounded-xl mb-10 block"
        v-model="client.name"
      />
      <input
        type="text"
        name="clientDocument"
        placeholder="Documento"
        class="border px-4 py-2 rounded-xl mb-10 block"
        v-model="client.clientDocument"
      />
      <input
        type="text"
        name="clientPhone"
        placeholder="Telefone"
        class="border px-4 py-2 rounded-xl mb-10 block"
        v-model="client.phone"
      />
      <input
        type="email"
        name="clientPhone"
        placeholder="E-mail"
        class="border px-4 py-2 rounded-xl mb-10 block"
        v-model="client.email"
        required
      />
      <ToggleSwitch :withText="true" @checked-event="handleCheckedEvent" />
      <MainButton
        :enable-form="enableForm"
        :handleClick="saveClient"
        title="Salvar"
        class="col-span-2"
      />
    </form>
  </Layout>
</template>

<style scoped></style>
