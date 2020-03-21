import Upgrade from "./Upgrade.js"

export default class MultiplierUpgrade extends Upgrade {
  constructor(upgradeData) {
    super({
      cost: upgradeData.cost,
      name: upgradeData.name,
      type: upgradeData.type,
      miningIncrease: upgradeData.multiplierIncrease
    });

    this.multiplierIncrease = upgradeData.multiplierIncrease;
  }
}