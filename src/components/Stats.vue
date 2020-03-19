<template>
  <div>
    <h3>Total Cheese: {{totalCheese}}</h3>
    <h3>Current Cheese: {{currentCheese}}</h3>
    <h3>Cheese per second: {{cheesePerSecond}}</h3>
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
      return 0;
    }
  }
};
</script>

<style>
</style>