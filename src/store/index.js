import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCheese: 0,
    totalCheese: 0,
    cheesePerSecond: 0,
    autoMiningModifier: 1,
    cheesePerClick: 1,
    intervalTime: 1000,
    upgrades: [],
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

    addAutoMineAmount(state, autoMineAmount) {
      state.cheesePerSecond += autoMineAmount;
    },

    addClickMineAmount(state, clickMineAmount) {
      state.cheesePerClick += clickMineAmount;
    },

    increaseAutoMineMultiple(state, autoMineMultiple) {
      state.autoMiningModifier *= autoMineMultiple;
    },

    decreaseAutoMineInterval(state, intervalDecrease) {
      state.intervalTime /= intervalDecrease;
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

    addUpgrade({ dispatch, commit, state }, upgrade) {
      commit("reduceCheese", upgrade.cost);
      if (upgrade.type == 'Automatic') {
        if (!state.isAutoMining) {
          dispatch("setAutoMine", true);
        }

        commit("addAutoMineAmount", upgrade.miningIncrease);
      } else {
        commit("addClickMineAmount", upgrade.miningIncrease);
      }
    },

    increaseAutoMineMultiple({ dispatch, commit }, multipleUpgrade) {
      commit("reduceCheese", multipleUpgrade.cost);
      commit("increaseAutoMineMultiple", multipleUpgrade.multiplierIncrease);
    },

    decreaseAutoMineInterval({ dispatch, commit }, intervalUpgrade) {
      commit("reduceCheese", intervalUpgrade.cost);
      commit("decreaseAutoMineInterval", intervalUpgrade.intervalModifier)
    }
  },
  modules: {
  }
})
