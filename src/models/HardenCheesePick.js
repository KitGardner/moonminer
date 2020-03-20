import Upgrade from "./Upgrade.js"

export default class HardenCheesePick extends Upgrade {
  constructor(cost) {
    super({
      cost: cost,
      name: "Harden Cheese Pick",
      type: "Manual",
      miningIncrease: 2
    })
  }
}