<template>
  <div>
    <img @click="mine()" class="moon" src="../assets/Moon.png" alt />
    <button :disabled="totalCheese < 15" @click="startAutoMine()">Buy Alien Robot</button>
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
      console.log("I am mining");
      this.$store.dispatch("increaseCheeseCount", 1);
    },

    startAutoMine() {
      if (!this.autoMiningIntervalId) {
        this.$store.dispatch("setAutoMine", true);
        this.$store.dispatch("decreaseCheeseCount", 15);
      }
    },

    autoMine() {
      this.$store.dispatch("increaseCheeseCount", 1);
    }
  },

  computed: {
    totalCheese() {
      return this.$store.state.totalCheese;
    },

    isAutoMining() {
      return this.$store.state.isAutoMining;
    }
  },

  watch: {
    isAutoMining(mining) {
      console.log(mining);
      if (!this.autoMiningIntervalId) {
        this.autoMiningIntervalId = setInterval(this.autoMine, 1000);
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