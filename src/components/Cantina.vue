<template>
  <div>
    <button :disabled="currentCheese < 15" @click="buyMoonMouse()">Buy MoonMouse</button>
  </div>
</template>

<script>
import MoonMouse from "../models/MoonMouse.js";

export default {
  name: "Cantina",
  methods: {
    buyMoonMouse() {
      if (currentCheese >= 15) {
        this.$store.dispatch("addUpgrade", new MoonMouse());
      }
    }
  },
  computed: {
    currentCheese() {
      return this.$store.state.currentCheese;
    }
  }
};
</script>

<style>
</style>