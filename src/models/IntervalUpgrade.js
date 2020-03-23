import Upgrade from "./Upgrade.js"

export default class IntervalUpgrade extends Upgrade {
  constructor(upgradeData) {
    super({
      cost: upgradeData.cost,
      name: upgradeData.name,
      type: upgradeData.type,
      miningIncrease: upgradeData.intervalModifier,
      imgUrl: upgradeData.imgUrl,
      typeImgUrl: upgradeData.typeImgUrl
    });

    this.intervalModifier = upgradeData.intervalModifier;
    super.calculateIncrease = function (quantity) {
      return "/" + (Math.pow(this.miningIncrease, quantity)).toString();
    }
  }
}