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
        click: "normal"
      },
      {
        id: "2002",
        name: "shovel",
        price: 20,
        quantity: 0,
        multiplier: 2,
        img: "images/shovel.png",
        click: "normal"
      },
      {
        id: "3001",
        name: "teammate",
        price: 50,
        quantity: 0,
        multiplier: 4,
        img: "images/teammate.png",
        click: "auto"
      },
      {
        id: "3002",
        name: "rover",
        price: 100,
        quantity: 0,
        multiplier: 8,
        img: "images/rover.png",
        click: "auto"
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
    async collectCheese({ commit }, state, upgrade) {
      let multiply = state.upgrades;
      if (multiply.length > 0) {
        state.upgrades.forEach(u => {
          state.cheeseCount += u.multiplier;
          state.totalCount += u.multiplier;
        });
      }
      commit("updateCount", multiply);
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
    }
  },
  modules: {}
});
