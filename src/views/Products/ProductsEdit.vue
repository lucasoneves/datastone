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
const store = useStore();
const route = useRoute();

const productData = ref({});
const messageFormError = ref("");

function handleCheckedEvent(event) {
  if (productData.value.active === event.value) {
    productData.value.active = !event.value;
    return;
  }
  productData.value.active = event.value;
}

const isFormValid = computed(() => {
  return productData.value.name !== "";
});
async function updateProduct(e) {
  e.preventDefault();
  if (!isFormValid.value) {
    messageFormError.value = "Preencha todos os campos obrigatórios";
    return false;
  }
  store.commit("addClient", productData.value);
  //   router.push("/clients");
}

const editProductData = computed(() => {
  const productSelected = toRaw(store.state.products).find(
    (product) => product.id === parseInt(route.params.id)
  );
  return productSelected;
});

onMounted(() => {
  productData.value = { ...editProductData.value };
});
</script>

<template>
  <Layout>
    <h2 class="text-3xl font-bold mb-10">Editar Produto</h2>
    <form action="" class="grid">
      <input
        type="text"
        name="productTitle"
        placeholder="Nome"
        class="border px-4 py-2 rounded-xl mb-10 block col-span-4"
        v-model="productData.name"
      />
      <ToggleSwitch
        :withText="true"
        @checked-event="handleCheckedEvent"
        :statusActive="productData.active"
      />
      <MainButton
        :enable-form="isFormValid"
        :handleClick="updateProduct"
        title="Salvar"
        class="col-span-4"
      />
      <p v-if="messageFormError.length">{{ messageFormError }}</p>
    </form>
  </Layout>
</template>

<style scoped></style>
