import Vue from "vue";
import Vuex from "vuex";
import { SET_ITEMS } from "@/types/enums";
import { packageItems } from "@/db/items";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    _packageItems: null,
  },
  getters: {
    packageItems: (state) => state._packageItems,
  },
  mutations: {
    setItems(state, data) {
      console.log(`adding ${data.length} items`);
      state._packageItems = data;
    },
  },
  actions: {
    getItems(state) {
      state.commit(SET_ITEMS, packageItems);
    },
  },
});
