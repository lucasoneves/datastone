<!-- eslint-disa
  components: { Layout },ble vue/multi-word-component-names -->
<script setup>
import { ref, watch } from "vue";
import Layout from "../components/Layout.vue";
import ToggleSwitch from "../components/ToggleSwitch/ToggleSwitch.vue";
import MainButton from "../components/MainButton/MainButton.vue";
const client = ref({
  name: "",
  clientDocument: "",
  phone: "",
  email: "",
  isActive: false,
});
const enableForm = ref(false);
function handleCheckedEvent(event) {
  client.value.isActive = event.value;
}
function saveClient(e) {
  e.preventDefault();
}

watch(client.value, async (newProduct) => {
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
      />
      <ToggleSwitch :withText="true" @checked-event="handleCheckedEvent" />
      <!-- <button
        :disabled="!enableForm"
        @click="saveClient"
        class=":md-w-full px-10 py-2 rounded-xl text-white mt-10 block col-span-2"
        :class="
          !enableForm ? 'cursor-not-allowed bg-slate-300' : 'bg-base-blue'
        "
      >
        Salvar
      </button> -->
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
