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
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    addProduct({ commit }) {
      commit("addProduct");
    },
  },
});

export default store;
