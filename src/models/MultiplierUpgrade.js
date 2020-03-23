import Upgrade from "./Upgrade.js"

export default class MultiplierUpgrade extends Upgrade {
  constructor(upgradeData) {
    super({
      cost: upgradeData.cost,
      name: upgradeData.name,
      type: upgradeData.type,
      miningIncrease: upgradeData.multiplierIncrease,
      imgUrl: upgradeData.imgUrl,
      typeImgUrl: upgradeData.typeImgUrl
    });

    this.multiplierIncrease = upgradeData.multiplierIncrease;
  }
}