let Cell = class {
  constructor() {
    this.alive = true;
  }

  tick() {
    this.alive = false;
  }
}

module.exports = Cell;
