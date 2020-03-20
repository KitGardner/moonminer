import MultiplierUpgrade from "../models/MultiplierUpgrade.js"

export default class SpaceHeater extends MultiplierUpgrade {
  constructor(cost) {
    super({
      cost: cost,
      name: "Space Heater",
      type: "Automatic",
      multiplierIncrease: 2
    });
  }
}