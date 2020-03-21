<template>
  <div>
    <h3>Total Cheese: {{totalCheese}}</h3>
    <h3>Current Cheese: {{currentCheese}}</h3>
    <h3>Cheese per second: {{cheesePerSecond}}</h3>
    <h3>Auto Gather Interval {{gatherInterval}}</h3>
  </div>
</template>

<script>
export default {
  name: "Stats",
  computed: {
    totalCheese() {
      return this.$store.state.totalCheese;
    },

    currentCheese() {
      return this.$store.state.currentCheese;
    },

    cheesePerSecond() {
      return (
        (this.$store.state.cheesePerSecond *
          this.$store.state.autoMiningModifier) /
        (this.$store.state.intervalTime / 1000)
      );
    },

    gatherInterval() {
      return this.$store.state.intervalTime;
    }
  }
};
</script>

<style>
</style>