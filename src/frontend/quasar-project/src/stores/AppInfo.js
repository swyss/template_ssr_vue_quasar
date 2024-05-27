import { defineStore } from "pinia";

export const useAppInfoStore = defineStore("app_infos", {
  state: () => ({
    counter: 0,
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    printInfo() {
      this.counter++;
    },
  },
});
