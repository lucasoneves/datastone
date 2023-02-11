import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      products: [
        { name: "Email", active: true, id: 1, selected: false },
        { name: "Sites", active: true, id: 2, selected: false },
      ],
      clients: [],
    };
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload);
    },
    updateClient(state, payload) {
      const clientToUpdate = state.clients.findIndex(
        (client) => client.id === payload.id
      );
      state.clients[clientToUpdate] = payload;
    },
    updateProduct(state, payload) {
      const productToUpdate = state.products.findIndex(
        (product) => product.id === payload.id
      );
      state.products[productToUpdate] = payload;
    },
    addClient(state, payload) {
      state.clients.push(payload);
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    addProduct({ commit }) {
      commit("addProduct");
    },
    updateProduct({ commit }) {
      commit("updateProduct");
    },
    addClient({ commit }) {
      commit("addClient");
    },
  },
  getters: {
    // ...
    getClientsData: (state) => (id) => {
      return state.clients.find((client) => client.id === id);
    },
  },
});

export default store;
