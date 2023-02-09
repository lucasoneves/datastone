import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      products: [],
      clients: [],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addProduct(state, payload) {
      state.products.push(payload);
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
    addClient({ commit }) {
      commit("addClient");
    },
  },
});

export default store;
