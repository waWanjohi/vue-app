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
    /**
     *
     * @param state
     * @returns `Item[]`
     */
    packageItems: (state) => state._packageItems,
  },
  mutations: {
    /**
     *
     * @param state
     * The store's state
     * @param data
     * Data to add to `$store._packageItems`
     * @returns null
     */
    setItems(state, data) {
      console.log(`adding ${data.length} items`);
      state._packageItems = data;
    },
  },
  actions: {
    getItems(state) {
      // Since we're getting from a static list, we don't need fetch
      state.commit(SET_ITEMS, packageItems);
    },
  },
});
