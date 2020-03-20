<template>
  <div>
    <h1>Moon Miner</h1>
    <moon />
    <stats />
    <cantina />
  </div>
</template>

<script>
import moon from "@/components/Moon.vue";
import stats from "@/components/Stats.vue";
import cantina from "@/components/Cantina.vue";

export default {
  name: "MoonMiner",
  components: {
    moon,
    stats,
    cantina
  }
};
</script>

<style>
</style>