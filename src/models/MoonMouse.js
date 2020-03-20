import Upgrade from "./Upgrade.js"

export default class MoonMouse extends Upgrade {
  constructor(cost) {
    super({
      cost: cost,
      name: "Moon Mouse",
      type: "Automatic",
      miningIncrease: 1
    });
  }
}