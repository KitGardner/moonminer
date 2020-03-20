export default class Upgrade {
  constructor(upgradeData) {
    this.name = upgradeData.name;
    this.cost = upgradeData.cost;
    this.type = upgradeData.type;
    this.miningIncrease = upgradeData.miningIncrease;
  }
}