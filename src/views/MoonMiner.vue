<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text center pb-3">
        <h1 class="white-text">Moon Miner</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-12">
        <upgrades-bought class="white-text" />
      </div>
      <div class="col-md-4 col-sm-12 embed-responsive-1by1">
        <moon />
      </div>
      <div class="col-md-4 col-sm-12">
        <cantina />
      </div>
    </div>
    <div class="row">
      <div class="col-12 text center white-text">
        <stats />
      </div>
    </div>
  </div>
</template>

<script>
import moon from "@/components/Moon.vue";
import stats from "@/components/Stats.vue";
import cantina from "@/components/Cantina.vue";
import upgradesBought from "@/components/UpgradesBought.vue";

export default {
  name: "MoonMiner",
  components: {
    moon,
    stats,
    cantina,
    upgradesBought
  }
};
</script>

<style>
</style>