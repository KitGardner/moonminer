export default class Upgrade {
  constructor(upgradeData) {
    this.name = upgradeData.name;
    this.cost = upgradeData.cost;
    this.type = upgradeData.type;
    this.miningIncrease = upgradeData.miningIncrease;
    this.imgUrl = "http://placehold.it/50x50"
    this.calculateIncrease = (quantity) => {
      return "+" + (quantity * this.miningIncrease).toString();
    }
  }
}