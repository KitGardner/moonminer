export default class Upgrade {
  constructor(upgradeData) {
    this.name = upgradeData.name;
    this.cost = upgradeData.cost;
    this.type = upgradeData.type;
    this.typeImgUrl = upgradeData.typeImgUrl;
    this.miningIncrease = upgradeData.miningIncrease;
    this.imgUrl = upgradeData.imgUrl;
    this.calculateIncrease = (quantity) => {
      return "+" + (quantity * this.miningIncrease).toString();
    }
  }
}