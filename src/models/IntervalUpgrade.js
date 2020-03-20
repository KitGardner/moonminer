import Upgrade from "./Upgrade.js"

export default class IntervalUpgrade extends Upgrade {
  constructor(upgradeData) {
    super({
      cost: upgradeData.cost,
      name: upgradeData.name,
      type: upgradeData.type
    });

    this.intervalModifier = upgradeData.intervalModifier;
  }
}