import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCheese: 0,
    totalCheese: 0,
    cheesePerSecond: 0,
    moonMice: [],
    isAutoMining: false
  },
  mutations: {
    addCheese(state, cheeseCount) {
      state.totalCheese += cheeseCount;
      state.currentCheese += cheeseCount;
    },

    reduceCheese(state, cheeseCost) {
      state.currentCheese -= cheeseCost;
    },

    setAutoMine(state, autoMining) {
      state.isAutoMining = autoMining;
    },

    addMoonMouse(state, moonMouse) {
      state.moonMice.push(moonMouse);
    },

    addAutoMineAmount(state, autoMineAmount) {
      state.cheesePerSecond += autoMineAmount;
    }
  },
  actions: {
    increaseCheeseCount({ dispatch, commit }, cheeseCount) {
      commit("addCheese", cheeseCount);
    },

    decreaseCheeseCount({ dispatch, commit }, cheeseCost) {
      commit("reduceCheese", cheeseCost);
    },

    setAutoMine({ dispatch, commit }, autoMining) {
      commit("setAutoMine", autoMining)
    },

    addMoonMouse({ dispatch, commit }, moonMouse, state) {
      commit("addMoonMouse", moonMouse);
      if (!state.isAutoMining) {
        commit("setAutoMine", true);
      }

      commit("addAutoMineAmount", moonMouse.autoMiningAmount)
    }
  },
  modules: {
  }
})
