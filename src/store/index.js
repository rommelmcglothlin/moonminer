import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    upgrades: [
      {
        id: "2001",
        name: "pickaxe",
        price: 10,
        quantity: 0,
        multiplier: 1,
        img: "images/pickaxe.png",
        auto: false
      },
      {
        id: "2002",
        name: "shovel",
        price: 20,
        quantity: 0,
        multiplier: 2,
        img: "images/shovel.png",
        auto: false
      },
      {
        id: "3001",
        name: "teammate",
        price: 50,
        quantity: 0,
        multiplier: 4,
        img: "images/teammate.png",
        auto: true
      },
      {
        id: "3002",
        name: "rover",
        price: 100,
        quantity: 0,
        multiplier: 8,
        img: "images/rover.png",
        auto: true
      }
    ],
    cheeseCount: 0,
    idleCount: 0,
    totalCount: 0
  },
  mutations: {
    updateCount(state) {
      state.cheeseCount++;
      state.totalCount++;
    },
    updateOptions(state, upgrade) {
      state.cheeseCount -= upgrade.price;
      upgrade.quantity++;
      upgrade.multiplier = upgrade.multiplier * upgrade.quantity;
      upgrade.price *= 2;
    }
  },
  actions: {
    async collectCheese({ commit }) {
      commit("updateCount");
    },
    async buy({ commit, state }, upgrade) {
      let cheeseCount = state.cheeseCount;
      let enoughCheese = state.upgrades.find(i => i.id == upgrade.id);
      if (cheeseCount < enoughCheese.price) {
        return;
      }
      let newUpgrade = state.upgrades.find(i => i.id == upgrade.id);
      if (newUpgrade) {
        commit("updateOptions", newUpgrade);
      } else {
        return;
      }
    },
    async autoClick({ commit, state }, upgrade) {
      let found = state.upgrades.find(a => a.auto == upgrade.auto);
      if (found.auto == true) {
        commit("updateCheese");
      } else {
        return;
      }
    }
  },
  modules: {}
});
