<template>
  <div>
    <ul class="button-list">
      <li>
        <button
          class="list-button"
          :disabled="currentCheese < mouseCost"
          @click="buyMoonMouse()"
        >Buy MoonMouse {{mouseCost}}</button>
      </li>
      <li>
        <button
          class="list-button"
          :disabled="currentCheese < hardenPickCost"
          @click="buyHardenPick()"
        >Harden Pick {{hardenPickCost}}</button>
      </li>
      <li>
        <button
          class="list-button"
          :disabled="currentCheese < spaceHeaterCost"
          @click="buySpaceHeater()"
        >Space Heater {{spaceHeaterCost}}</button>
      </li>
      <li>
        <button
          class="list-button"
          :disabled="currentCheese < speedPotionCost"
          @click="buySpeedPotion()"
        >Speed Potion {{speedPotionCost}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import MoonMouse from "../models/MoonMouse.js";
import HardenCheesePick from "../models/HardenCheesePick.js";
import SpaceHeater from "../models/SpaceHeater.js";
import SpeedPotion from "../models/SpeedPotion.js";

export default {
  name: "Cantina",
  data() {
    return {
      mouseCost: 15,
      hardenPickCost: 10,
      spaceHeaterCost: 350,
      speedPotionCost: 1500,
      priceCostScale: 1.25
    };
  },
  methods: {
    buyMoonMouse() {
      if (this.currentCheese >= this.mouseCost) {
        this.$store.dispatch("addUpgrade", new MoonMouse(this.mouseCost));
        this.mouseCost = Math.floor((this.mouseCost *= this.priceCostScale));
      }
    },
    buyHardenPick() {
      if (this.currentCheese >= this.hardenPickCost) {
        this.$store.dispatch(
          "addUpgrade",
          new HardenCheesePick(this.hardenPickCost)
        );
        this.hardenPickCost = Math.floor(
          (this.hardenPickCost *= this.priceCostScale)
        );
      }
    },
    buySpaceHeater() {
      if (this.currentCheese >= this.spaceHeaterCost) {
        this.$store.dispatch(
          "increaseAutoMineMultiple",
          new SpaceHeater(this.spaceHeaterCost)
        );
        this.spaceHeaterCost = Math.floor(
          (this.spaceHeaterCost *= this.priceCostScale)
        );
      }
    },

    buySpeedPotion() {
      if (this.currentCheese >= this.speedPotionCost) {
        this.$store.dispatch(
          "decreaseAutoMineInterval",
          new SpeedPotion(this.speedPotionCost)
        );
        this.speedPotionCost = Math.floor(
          (this.speedPotionCost *= this.priceCostScale)
        );
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
.button-list {
  list-style: none;
  padding: 0px;
  width: 100%;
  height: 60vh;
}

.list-button {
  width: 100%;
  height: 10vh;
}
</style>