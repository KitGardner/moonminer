<template>
  <div>
    <table class="table table-striped table-dark">
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Type</th>
        <th>Modifier</th>
      </tr>
      <tr v-for="upgrade in upgrades" :key="upgrade.name">
        <td>
          <img class="upgrade-image" :src="upgrade.imgUrl" alt />
        </td>
        <td>{{upgrade.quantity}}</td>
        <td>
          <img class="upgrade-image" :src="upgrade.typeImgUrl" alt />
        </td>
        <td>{{upgrade.calculateIncrease(upgrade.quantity)}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "UpgradesBought",
  computed: {
    upgrades() {
      let upgrades = this.$store.state.upgrades;
      let splitUpgrades = {};

      upgrades.forEach(upgrade => {
        if (splitUpgrades[upgrade.name]) {
          splitUpgrades[upgrade.name].quantity++;
        } else {
          splitUpgrades[upgrade.name] = {
            name: upgrade.name,
            imgUrl: upgrade.imgUrl,
            quantity: 1,
            type: upgrade.type,
            typeImgUrl: upgrade.typeImgUrl,
            miningIncrease: upgrade.miningIncrease,
            calculateIncrease: upgrade.calculateIncrease
          };
        }
      });

      return splitUpgrades;
    }
  }
};
</script>

<style>
.upgrade-image {
  height: 50px;
  width: 50px;
}
</style>