import { createStore } from "vuex";

export default createStore({
  state: {
    navOnTop: true,
  },
  getters: {},
  mutations: {
    setNavOnTop(state, payload) {
      state.navOnTop = payload;
    },
  },
  actions: {},
  modules: {},
});
