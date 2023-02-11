<!-- eslint-disable no-unused-vars -->
<!-- eslint-disa
  components: { Layout },ble vue/multi-word-component-names -->
<script setup>
import {
  ref,
  computed,
  onMounted,
  onUpdated,
  toRaw,
  watch,
  reactive,
} from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import router from "../../router";
import Layout from "../../components/Layout.vue";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch.vue";
import MainButton from "../../components/MainButton/MainButton.vue";
import MultiSelect from "../../components/MultiSelect/index.vue";
const store = useStore();
const route = useRoute();
const validationForm = ref({ message: "" });

const clientData = ref({});

function handleCheckedEvent(event) {
  if (clientData.value.active === event.value) {
    clientData.value.active = !event.value;
    return;
  }
  clientData.value.active = event.value;
}

const isFormValid = computed(() => {
  return (
    (clientData.value.name !== "") &
    (clientData.value.clientDocument !== "") &
    (clientData.value.phone !== "") &
    (clientData.value.email !== "")
  );
});
function handleValidate(e) {
  e.preventDefault();
  if (isFormValid.value) {
    upDateClient(e);
    return false;
  } else {
    validationForm.value.message = "Preencha todos os campos";
  }
}
async function upDateClient(e) {
  e.preventDefault();
  store.commit("updateClient", clientData.value);
  router.push("/clients");
}

const editClientData = computed(() => {
  const clientSelected = toRaw(store.state.clients).find(
    (client) => client.id === parseInt(route.params.id)
  );
  return clientSelected;
});

const messageNoProductsRecorded = computed(() => {
  return !store.state.products.length;
});

const productsInactived = computed(() => {
  return !store.state.products.find((product) => product.active);
});

function clearMessage() {
  if (isFormValid.value) {
    validationForm.value.message = "";
  }
}

function handleSelectedProducts(product) {
  clientData.value.products = product;
}

onMounted(() => {
  clientData.value = { ...editClientData.value };
  console.log(toRaw(clientData.value.products));
  console.log(editClientData.value);
});
</script>

<template>
  <Layout>
    <h2 class="text-3xl font-bold mb-10">Editar Cliente</h2>

    <form action="" class="grid grid-cols-2 gap-5">
      <input
        type="text"
        name="clientName"
        placeholder="Nome"
        class="border px-4 py-2 rounded-xl mb-10 block"
        :class="clientData.name === '' ? 'invalid:border-red-500' : ''"
        @blur="clearMessage"
        v-model="clientData.name"
        required
      />

      <input
        type="text"
        name="clientDocument"
        placeholder="Documento"
        class="border px-4 py-2 rounded-xl mb-10 block"
        :class="
          clientData.clientDocument === '' ? 'invalid:border-red-500' : ''
        "
        @blur="clearMessage"
        v-model="clientData.clientDocument"
        required
      />

      <input
        type="text"
        name="clientPhone"
        placeholder="Telefone"
        class="border px-4 py-2 rounded-xl mb-10 block"
        :class="clientData.phone === '' ? 'invalid:border-red-500' : ''"
        @blur="clearMessage"
        v-model="clientData.phone"
        required
      />

      <input
        type="email"
        name="clientEmail"
        placeholder="E-mail"
        class="border px-4 py-2 rounded-xl mb-10 block"
        :class="clientData.email === '' ? 'invalid:border-red-500' : ''"
        @blur="clearMessage"
        v-model="clientData.email"
        required
      />
      <div>
        <h3 class="font-bold">Produtos vinculados</h3>
        <MultiSelect
          @select-option="handleSelectedProducts"
          :options="store.state.products.filter((product) => product.active)"
          :text-fallback="
            (messageNoProductsRecorded || productsInactived) &&
            'Sem produtos cadastrados ou ativados no sistema'
          "
        />
      </div>
      <ToggleSwitch
        :withText="true"
        @checked-event="handleCheckedEvent"
        :status-active="clientData.active"
      />
      <p
        class="flex items-center justify-center col-span-2 w-52 bg-rose-200 p-2 rounded-xl"
        v-if="validationForm.message.length"
      >
        {{ validationForm.message }}
      </p>
      <MainButton
        :enable-form="true"
        :handleClick="handleValidate"
        title="Salvar"
        class="col-span-2"
      />
    </form>
  </Layout>
</template>

<style scoped></style>
