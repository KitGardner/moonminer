import IntervalUpgrade from "./IntervalUpgrade.js"

export default class SpeedPoint extends IntervalUpgrade {
  constructor(cost) {
    super({
      cost: cost,
      name: "Speed Potion",
      type: "Automatic",
      intervalModifier: 2
    })
  }
}