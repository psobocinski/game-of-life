let Cell = class {
  constructor(alive) {
    this.alive = alive;
  }

  tick() {
    this.alive = false;
  }
}

module.exports = Cell;
