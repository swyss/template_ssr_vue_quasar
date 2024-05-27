import { defineStore } from "pinia";

export const useAppPropertyStore = defineStore("app_properties", {
  state: () => ({
    counter: 0,
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    toggleLeftDrawer() {
      this.counter++;
    },
    toggleRightDrawer() {
      this.counter++;
    },
    toggleDarkMode() {
      this.counter++;
    },
  },
});
