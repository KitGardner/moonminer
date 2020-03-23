import IntervalUpgrade from "./IntervalUpgrade.js"

export default class SpeedPoint extends IntervalUpgrade {
  constructor(cost) {
    super({
      cost: cost,
      name: "Speed Potion",
      type: "IntervalDecreaseModifier",
      imgUrl: "speedPotionImg.png",
      typeImgUrl: "intervalUpgradeImg.png",
      intervalModifier: 2
    })
  }
}