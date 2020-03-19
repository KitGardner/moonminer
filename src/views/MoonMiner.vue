<template>
  <div>
    <h1>Moon Miner</h1>
    <moon />
    <stats />
  </div>
</template>

<script>
import moon from "@/components/Moon.vue";
import stats from "@/components/Stats.vue";

export default {
  name: "MoonMiner",
  components: {
    moon,
    stats
  }
};
</script>

<style>
</style>