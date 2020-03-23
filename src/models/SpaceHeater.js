import MultiplierUpgrade from "../models/MultiplierUpgrade.js"

export default class SpaceHeater extends MultiplierUpgrade {
  constructor(cost) {
    super({
      cost: cost,
      name: "Space Heater",
      type: "AutoMineMultiplier",
      imgUrl: "spaceHeaterImg.png",
      typeImgUrl: "gatherRateUpgradeImg.png",
      multiplierIncrease: 2
    });

    super.calculateIncrease = (quantity) => {
      return "X" + (quantity * this.multiplierIncrease + 1).toString();
    }
  }
}