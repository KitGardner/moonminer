<template>
  <div>
    <img @click="mine()" class="moon" src="../assets/Moon.png" alt />
  </div>
</template>
<script>
export default {
  name: "Moon",

  props: {
    color: { type: String, default: "blue" }
  },

  data() {
    return {
      autoMiningIntervalId: 0
    };
  },

  methods: {
    mine() {
      this.$store.dispatch(
        "increaseCheeseCount",
        this.$store.state.cheesePerClick
      );
    },

    startAutoMine() {
      if (!this.autoMiningIntervalId) {
        this.$store.dispatch("setAutoMine", true);
      }
    },

    autoMine() {
      this.$store.dispatch(
        "increaseCheeseCount",
        this.$store.state.cheesePerSecond * this.$store.state.autoMiningModifier
      );
    }
  },

  computed: {
    totalCheese() {
      return this.$store.state.totalCheese;
    },

    isAutoMining() {
      return this.$store.state.isAutoMining;
    },

    autoMineInterval() {
      return this.$store.state.intervalTime;
    }
  },

  watch: {
    isAutoMining(mining) {
      if (!this.autoMiningIntervalId) {
        this.autoMiningIntervalId = setInterval(
          this.autoMine,
          this.$store.state.intervalTime
        );
      }
    },

    autoMineInterval(interval) {
      if (this.autoMiningIntervalId) {
        clearInterval(this.autoMiningIntervalId);
        this.autoMiningIntervalId = setInterval(this.autoMine, interval);
      }
    }
  }
};
</script>

<style>
.moon:active {
  transform: translateY(4px);
}
</style>